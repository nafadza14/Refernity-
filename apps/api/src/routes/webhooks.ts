import { Router } from 'express'
import Stripe from 'stripe'
import { prisma } from '@refernity/database'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16'
})

export const webhookRoutes = Router()

// Stripe webhook
webhookRoutes.post('/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'] as string
  
  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    )
    
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        await handleSuccessfulPayment(paymentIntent)
        break
      }
      case 'customer.created': {
        // Handle new customer
        break
      }
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }
    
    res.json({ received: true })
  } catch (error) {
    console.error('Stripe webhook error:', error)
    res.status(400).json({ error: 'Webhook error' })
  }
})

async function handleSuccessfulPayment(paymentIntent: Stripe.PaymentIntent) {
  // Check if this is a referral conversion
  const metadata = paymentIntent.metadata
  
  if (metadata?.referralCode) {
    const referral = await prisma.referral.findFirst({
      where: { referralCode: metadata.referralCode },
      include: { campaign: true }
    })
    
    if (referral && referral.status !== 'CONVERTED') {
      // Mark referral as converted
      await prisma.referral.update({
        where: { id: referral.id },
        data: {
          status: 'CONVERTED',
          convertedAt: new Date(),
          rewardAmount: referral.campaign.rewardAmount,
          rewardStatus: 'APPROVED'
        }
      })
      
      // Update campaign stats
      await prisma.campaign.update({
        where: { id: referral.campaignId },
        data: {
          totalConversions: { increment: 1 },
          totalRewardsPaid: { increment: referral.campaign.rewardAmount }
        }
      })
      
      // Create reward record
      await prisma.reward.create({
        data: {
          userId: referral.referrerId,
          amount: referral.campaign.rewardAmount,
          currency: referral.campaign.rewardCurrency,
          status: 'PENDING',
          description: `Referral reward for ${referral.refereeEmail}`,
          referralId: referral.id
        }
      })
      
      console.log(`Referral ${referral.id} converted!`)
    }
  }
}
