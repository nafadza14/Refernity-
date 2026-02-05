import { Router } from 'express'
import { prisma } from '@refernity/database'
import { v4 as uuidv4 } from 'uuid'

export const referralRoutes = Router()

// Create referral link
referralRoutes.post('/create', async (req, res) => {
  try {
    const { campaignId, referrerId, refereeEmail } = req.body
    
    // Check if referral already exists
    const existing = await prisma.referral.findFirst({
      where: {
        campaignId,
        referrerId,
        refereeEmail
      }
    })
    
    if (existing) {
      return res.json({ referral: existing })
    }
    
    // Generate unique referral code
    const referralCode = uuidv4().replace(/-/g, '').substring(0, 12)
    
    const referral = await prisma.referral.create({
      data: {
        campaignId,
        referrerId,
        refereeEmail,
        referralCode,
        status: 'CLICKED'
      }
    })
    
    res.status(201).json({ referral })
  } catch (error) {
    console.error('Create referral error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get user's referrals
referralRoutes.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    
    const referrals = await prisma.referral.findMany({
      where: { referrerId: userId },
      include: { campaign: true },
      orderBy: { createdAt: 'desc' }
    })
    
    res.json({ referrals })
  } catch (error) {
    console.error('Get referrals error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Mark referral as signed up
referralRoutes.post('/signup', async (req, res) => {
  try {
    const { referralCode, userId } = req.body
    
    const referral = await prisma.referral.findFirst({
      where: { referralCode }
    })
    
    if (!referral) {
      return res.status(404).json({ error: 'Referral not found' })
    }
    
    // Update referral status
    await prisma.referral.update({
      where: { id: referral.id },
      data: {
        status: 'SIGNED_UP',
        refereeId: userId,
        signedUpAt: new Date()
      }
    })
    
    // Increment campaign signup count
    await prisma.campaign.update({
      where: { id: referral.campaignId },
      data: { totalSignups: { increment: 1 } }
    })
    
    res.json({ success: true })
  } catch (error) {
    console.error('Signup referral error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})
