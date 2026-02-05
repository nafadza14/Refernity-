import { Router } from 'express'
import { prisma } from '@refernity/database'
import { authenticate } from '../middleware/auth'

const router = Router()

// Get dashboard overview stats
router.get('/overview', authenticate, async (req, res) => {
  try {
    const userId = req.user.id
    
    // Get user's campaigns
    const campaigns = await prisma.campaign.findMany({
      where: { userId }
    })
    
    const campaignIds = campaigns.map(c => c.id)
    
    // Aggregate stats
    const [
      totalReferrals,
      totalConversions,
      totalRewards,
      topReferrers
    ] = await Promise.all([
      // Total referrals
      prisma.referral.count({
        where: { campaignId: { in: campaignIds } }
      }),
      
      // Total conversions
      prisma.referral.count({
        where: { 
          campaignId: { in: campaignIds },
          status: 'converted'
        }
      }),
      
      // Total rewards paid
      prisma.reward.aggregate({
        where: { 
          userId,
          status: 'paid'
        },
        _sum: { amount: true }
      }),
      
      // Top referrers
      prisma.referral.groupBy({
        by: ['referrerId'],
        where: { 
          campaignId: { in: campaignIds },
          status: 'converted'
        },
        _count: { id: true },
        orderBy: { _count: { id: 'desc' } },
        take: 5
      })
    ])
    
    // Get referrer details
    const referrerDetails = await Promise.all(
      topReferrers.map(async (ref) => {
        const user = await prisma.user.findUnique({
          where: { id: ref.referrerId },
          select: { email: true, companyName: true }
        })
        return {
          email: user?.email,
          companyName: user?.companyName,
          conversions: ref._count.id
        }
      })
    )
    
    res.json({
      success: true,
      stats: {
        totalReferrals,
        totalConversions,
        conversionRate: totalReferrals > 0 
          ? ((totalConversions / totalReferrals) * 100).toFixed(2)
          : 0,
        totalRewardsPaid: totalRewards._sum.amount || 0,
        topReferrers: referrerDetails
      }
    })
  } catch (error) {
    console.error('Overview stats error:', error)
    res.status(500).json({ error: 'Failed to fetch stats' })
  }
})

// Get AI predictions summary
router.get('/ai-predictions', authenticate, async (req, res) => {
  try {
    const userId = req.user.id
    
    const campaigns = await prisma.campaign.findMany({
      where: { userId }
    })
    
    const predictions = await prisma.aiPrediction.findMany({
      where: {
        campaignId: { in: campaigns.map(c => c.id) }
      },
      orderBy: { likelihoodScore: 'desc' },
      take: 10,
      include: {
        user: {
          select: { email: true, companyName: true }
        }
      }
    })
    
    res.json({
      success: true,
      predictions: predictions.map(p => ({
        email: p.user.email,
        companyName: p.user.companyName,
        likelihoodScore: p.likelihoodScore,
        suggestedReward: p.suggestedRewardAmount,
        confidence: p.likelihoodScore >= 70 ? 'high' : p.likelihoodScore >= 40 ? 'medium' : 'low'
      }))
    })
  } catch (error) {
    console.error('AI predictions stats error:', error)
    res.status(500).json({ error: 'Failed to fetch predictions' })
  }
})

// Get daily stats for chart
router.get('/daily', authenticate, async (req, res) => {
  try {
    const userId = req.user.id
    const { days = 30 } = req.query
    
    const campaigns = await prisma.campaign.findMany({
      where: { userId }
    })
    
    const since = new Date()
    since.setDate(since.getDate() - parseInt(days as string))
    
    const referrals = await prisma.referral.findMany({
      where: {
        campaignId: { in: campaigns.map(c => c.id) },
        createdAt: { gte: since }
      },
      select: {
        createdAt: true,
        status: true
      }
    })
    
    // Group by date
    const dailyStats: Record<string, { clicks: number; conversions: number }> = {}
    
    referrals.forEach(ref => {
      const date = ref.createdAt.toISOString().split('T')[0]
      if (!dailyStats[date]) {
        dailyStats[date] = { clicks: 0, conversions: 0 }
      }
      dailyStats[date].clicks++
      if (ref.status === 'converted') {
        dailyStats[date].conversions++
      }
    })
    
    // Fill in missing dates
    const result = []
    for (let i = parseInt(days as string); i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      result.push({
        date: dateStr,
        clicks: dailyStats[dateStr]?.clicks || 0,
        conversions: dailyStats[dateStr]?.conversions || 0
      })
    }
    
    res.json({
      success: true,
      dailyStats: result
    })
  } catch (error) {
    console.error('Daily stats error:', error)
    res.status(500).json({ error: 'Failed to fetch daily stats' })
  }
})

export default router
