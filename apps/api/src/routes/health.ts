import { Router } from 'express'

const router = Router()

// Health check endpoint for Railway
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'refernity-api',
    version: '1.0.0'
  })
})

export default router
