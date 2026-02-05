import { prisma } from '@refernity/database'
import { stripe } from '../lib/stripe'

export async function calculateReward(
  campaignId: string,
  conversionValue: number
): Promise<{ amount: number; currency: string } | null> {
  const campaign = await prisma.campaign.findUnique({
    where: { id: campaignId }
  })

  if (!campaign || !campaign.isActive) {
    return null
  }

  // Check if campaign has ended
  if (campaign.endDate && new Date() > campaign.endDate) {
    return null
  }

  // Check minimum purchase requirement
  if (conversionValue < campaign.minimumPurchase) {
    return null
  }

  let rewardAmount = campaign.rewardAmount

  // Handle percentage-based rewards
  if (campaign.rewardType === 'percentage') {
    rewardAmount = (conversionValue * campaign.rewardAmount) / 100
  }

  return {
    amount: rewardAmount,
    currency: campaign.rewardCurrency
  }
}

export async function processReward(referralId: string) {
  const referral = await prisma.referral.findUnique({
    where: { id: referralId },
    include: { campaign: true, referrer: true }
  })

  if (!referral || referral.status !== 'converted') {
    return null
  }

  // Check if already rewarded
  const existingReward = await prisma.reward.findFirst({
    where: { referralId }
  })

  if (existingReward) {
    return existingReward
  }

  // Calculate reward amount
  const rewardCalc = await calculateReward(
    referral.campaignId,
    referral.conversionValue || 0
  )

  if (!rewardCalc) {
    return null
  }

  // Create reward record
  const reward = await prisma.reward.create({
    data: {
      referralId,
      userId: referral.referrerId,
      amount: rewardCalc.amount,
      currency: rewardCalc.currency,
      type: referral.campaign.rewardType === 'cash' ? 'cash' : 'credit',
      status: 'pending'
    }
  })

  return reward
}

export async function payoutReward(rewardId: string, stripeAccountId?: string) {
  const reward = await prisma.reward.findUnique({
    where: { id: rewardId },
    include: { user: true }
  })

  if (!reward || reward.status !== 'pending') {
    return null
  }

  try {
    // Process Stripe transfer if account connected
    if (stripeAccountId && reward.type === 'cash') {
      const transfer = await stripe.transfers.create({
        amount: Math.round(reward.amount * 100),
        currency: reward.currency.toLowerCase(),
        destination: stripeAccountId,
        metadata: {
          rewardId: reward.id,
          userId: reward.userId
        }
      })

      await prisma.reward.update({
        where: { id: rewardId },
        data: {
          status: 'paid',
          paidAt: new Date(),
          transactionId: transfer.id
        }
      })
    } else {
      // Mark as processing (manual payout)
      await prisma.reward.update({
        where: { id: rewardId },
        data: { status: 'processing' }
      })
    }

    return reward
  } catch (error) {
    console.error('Payout error:', error)
    
    await prisma.reward.update({
      where: { id: rewardId },
      data: {
        status: 'failed',
        failureReason: error.message
      }
    })

    return null
  }
}
