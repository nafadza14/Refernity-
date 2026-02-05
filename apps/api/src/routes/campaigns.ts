import { Router } from 'express'
import { prisma } from '@refernity/database'
import { authenticate } from '../middleware/auth'

const router = Router()

// Create campaign
router.post('/', authenticate, async (req, res) => {
  try {
    const {
      name,
      description,
      rewardType,
      rewardAmount,
      rewardCurrency,
      minimumPurchase,
      maximumRewards,
      endDate,
      widgetConfig
    } = req.body

    const campaign = await prisma.campaign.create({
      data: {
        name,
        description,
        rewardType,
        rewardAmount,
        rewardCurrency: rewardCurrency || 'USD',
        minimumPurchase: minimumPurchase || 0,
        maximumRewards,
        endDate: endDate ? new Date(endDate) : null,
        widgetConfig: widgetConfig || {},
        userId: req.user.id,
        isActive: true
      }
    })

    res.json({ success: true, campaign })
  } catch (error) {
    console.error('Create campaign error:', error)
    res.status(500).json({ error: 'Failed to create campaign' })
  }
})

// List campaigns
router.get('/', authenticate, async (req, res) => {
  try {
    const campaigns = await prisma.campaign.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { referrals: true }
        }
      }
    })

    res.json({ success: true, campaigns })
  } catch (error) {
    console.error('List campaigns error:', error)
    res.status(500).json({ error: 'Failed to fetch campaigns' })
  }
})

// Get campaign details
router.get('/:id', authenticate, async (req, res) => {
  try {
    const campaign = await prisma.campaign.findFirst({
      where: {
        id: req.params.id,
        userId: req.user.id
      },
      include: {
        referrals: {
          orderBy: { createdAt: 'desc' },
          take: 100
        }
      }
    })

    if (!campaign) {
      return res.status(404).json({ error: 'Campaign not found' })
    }

    res.json({ success: true, campaign })
  } catch (error) {
    console.error('Get campaign error:', error)
    res.status(500).json({ error: 'Failed to fetch campaign' })
  }
})

// Update campaign
router.patch('/:id', authenticate, async (req, res) => {
  try {
    const campaign = await prisma.campaign.updateMany({
      where: {
        id: req.params.id,
        userId: req.user.id
      },
      data: {
        ...req.body,
        updatedAt: new Date()
      }
    })

    if (campaign.count === 0) {
      return res.status(404).json({ error: 'Campaign not found' })
    }

    res.json({ success: true })
  } catch (error) {
    console.error('Update campaign error:', error)
    res.status(500).json({ error: 'Failed to update campaign' })
  }
})

// Delete campaign
router.delete('/:id', authenticate, async (req, res) => {
  try {
    await prisma.campaign.deleteMany({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    })

    res.json({ success: true })
  } catch (error) {
    console.error('Delete campaign error:', error)
    res.status(500).json({ error: 'Failed to delete campaign' })
  }
})

export default router
