import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

import { prisma } from '@refernity/database'
import { referralRoutes } from './routes/referrals'
import { campaignRoutes } from './routes/campaigns'
import { webhookRoutes } from './routes/webhooks'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.APP_URL || 'http://localhost:3000'
}))
app.use(express.json())

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Routes
app.use('/api/referrals', referralRoutes)
app.use('/api/campaigns', campaignRoutes)
app.use('/api/webhooks', webhookRoutes)

// Widget embed endpoint (public)
app.get('/api/widget/:campaignId', async (req, res) => {
  try {
    const { campaignId } = req.params
    const campaign = await prisma.campaign.findUnique({
      where: { id: campaignId },
      include: { company: true }
    })
    
    if (!campaign || !campaign.active) {
      return res.status(404).json({ error: 'Campaign not found' })
    }
    
    res.json({
      campaign: {
        id: campaign.id,
        name: campaign.name,
        rewardType: campaign.rewardType,
        rewardAmount: campaign.rewardAmount,
        currency: campaign.rewardCurrency,
        widgetConfig: campaign.widgetConfig,
        company: {
          name: campaign.company.name,
          logo: campaign.company.logo
        }
      }
    })
  } catch (error) {
    console.error('Widget fetch error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Track referral click (public)
app.post('/api/track/click', async (req, res) => {
  try {
    const { referralCode, utmSource, utmMedium, utmCampaign, ipAddress, userAgent } = req.body
    
    // Find referral and update
    const referral = await prisma.referral.findFirst({
      where: { referralCode }
    })
    
    if (referral) {
      await prisma.referral.update({
        where: { id: referral.id },
        data: {
          utmSource,
          utmMedium,
          utmCampaign,
          ipAddress,
          userAgent
        }
      })
      
      // Increment campaign click count
      await prisma.campaign.update({
        where: { id: referral.campaignId },
        data: { totalClicks: { increment: 1 } }
      })
    }
    
    res.json({ success: true })
  } catch (error) {
    console.error('Track click error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Refernity API running on port ${PORT}`)
})
