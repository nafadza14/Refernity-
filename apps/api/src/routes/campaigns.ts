import { Router } from 'express'
import { prisma } from '@refernity/database'

export const campaignRoutes = Router()

// Get all campaigns for a company
campaignRoutes.get('/company/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params
    
    const campaigns = await prisma.campaign.findMany({
      where: { companyId },
      orderBy: { createdAt: 'desc' }
    })
    
    res.json({ campaigns })
  } catch (error) {
    console.error('Get campaigns error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Create campaign
campaignRoutes.post('/', async (req, res) => {
  try {
    const {
      name,
      companyId,
      userId,
      rewardType,
      rewardAmount,
      rewardCurrency,
      minPayout,
      widgetConfig
    } = req.body
    
    const campaign = await prisma.campaign.create({
      data: {
        name,
        companyId,
        userId,
        rewardType,
        rewardAmount,
        rewardCurrency,
        minPayout,
        widgetConfig,
        active: true
      }
    })
    
    res.status(201).json({ campaign })
  } catch (error) {
    console.error('Create campaign error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Update campaign
campaignRoutes.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updateData = req.body
    
    const campaign = await prisma.campaign.update({
      where: { id },
      data: updateData
    })
    
    res.json({ campaign })
  } catch (error) {
    console.error('Update campaign error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get campaign stats
campaignRoutes.get('/:id/stats', async (req, res) => {
  try {
    const { id } = req.params
    
    const campaign = await prisma.campaign.findUnique({
      where: { id },
      include: {
        referrals: true
      }
    })
    
    if (!campaign) {
      return res.status(404).json({ error: 'Campaign not found' })
    }
    
    const stats = {
      totalClicks: campaign.totalClicks,
      totalSignups: campaign.totalSignups,
      totalConversions: campaign.totalConversions,
      totalRewardsPaid: campaign.totalRewardsPaid,
      referralCount: campaign.referrals.length,
      conversionRate: campaign.totalClicks > 0 
        ? ((campaign.totalConversions / campaign.totalClicks) * 100).toFixed(2)
        : 0
    }
    
    res.json({ stats })
  } catch (error) {
    console.error('Get campaign stats error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})
