import { Router } from 'express'
import { predictReferralLikelihood, getTopAdvocates } from '../lib/ai'
import { authenticate } from '../middleware/auth'

const router = Router()

// Get AI prediction for a user
router.get('/predict/:userId', authenticate, async (req, res) => {
  try {
    const { userId } = req.params
    const { campaignId } = req.query

    if (!campaignId) {
      return res.status(400).json({ error: 'campaignId required' })
    }

    const prediction = await predictReferralLikelihood(userId, campaignId as string)

    res.json({
      success: true,
      prediction
    })
  } catch (error) {
    console.error('AI prediction error:', error)
    res.status(500).json({ error: 'Failed to generate prediction' })
  }
})

// Get top advocates for a campaign
router.get('/advocates/:campaignId', authenticate, async (req, res) => {
  try {
    const { campaignId } = req.params
    const { limit } = req.query

    const advocates = await getTopAdvocates(
      campaignId,
      limit ? parseInt(limit as string) : 20
    )

    res.json({
      success: true,
      advocates
    })
  } catch (error) {
    console.error('Get advocates error:', error)
    res.status(500).json({ error: 'Failed to fetch advocates' })
  }
})

export default router
