import OpenAI from 'openai'
import { prisma } from '@refernity/database'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

interface UserBehavior {
  loginFrequency: 'daily' | 'weekly' | 'monthly' | 'rarely'
  tenureDays: number
  npsScore?: number
  featuresUsed: number
  lastActive: Date
  planType: string
}

export async function predictReferralLikelihood(
  userId: string,
  campaignId: string
): Promise<{
  likelihoodScore: number
  confidence: 'high' | 'medium' | 'low'
  suggestedReward: number
  suggestedMessage: string
  topFeatures: string[]
  modelVersion: string
}> {
  // Check cache first (24 hours)
  const cached = await prisma.aiPrediction.findFirst({
    where: {
      userId,
      campaignId,
      createdAt: {
        gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
      }
    }
  })

  if (cached) {
    return {
      likelihoodScore: cached.likelihoodScore,
      confidence: cached.likelihoodScore > 70 ? 'high' : cached.likelihoodScore > 40 ? 'medium' : 'low',
      suggestedReward: cached.suggestedRewardAmount || 25,
      suggestedMessage: cached.suggestedMessage || '',
      topFeatures: cached.featuresUsed as string[] || [],
      modelVersion: cached.modelVersion || '1.0'
    }
  }

  // Fetch user behavior data (simplified for MVP)
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      company: true,
      referralsGiven: {
        where: {
          status: 'converted',
          createdAt: {
            gte: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)
          }
        }
      }
    }
  })

  if (!user) {
    throw new Error('User not found')
  }

  // Rule-based scoring v1 (Week 1)
  const behavior: UserBehavior = {
    loginFrequency: 'daily', // Mocked - would be calculated from session data
    tenureDays: Math.floor((Date.now() - user.createdAt.getTime()) / (1000 * 60 * 60 * 24)),
    npsScore: 10, // Mocked - would come from NPS survey
    featuresUsed: 5, // Mocked - would track feature usage
    lastActive: new Date(),
    planType: user.planType || 'starter'
  }

  // Scoring algorithm
  let score = 50 // Base score
  const features: string[] = []

  // Tenure factor (longer = more likely to refer)
  if (behavior.tenureDays > 90) {
    score += 15
    features.push('Loyal customer (3+ months)')
  } else if (behavior.tenureDays > 30) {
    score += 10
    features.push('Growing engagement')
  }

  // NPS factor
  if (behavior.npsScore >= 9) {
    score += 20
    features.push('High NPS (9-10)')
  } else if (behavior.npsScore >= 7) {
    score += 10
    features.push('Satisfied customer')
  }

  // Previous referrals factor
  const previousReferrals = user.referralsGiven?.length || 0
  if (previousReferrals > 3) {
    score += 15
    features.push('Active advocate')
  } else if (previousReferrals > 0) {
    score += 10
    features.push('Has referred before')
  }

  // Features usage factor
  if (behavior.featuresUsed >= 5) {
    score += 10
    features.push('Power user (5+ features)')
  }

  // Cap at 100
  score = Math.min(100, Math.max(0, score))

  // Suggested reward based on score
  let suggestedReward = 25
  if (score >= 80) {
    suggestedReward = 50
  } else if (score >= 60) {
    suggestedReward = 30
  } else if (score < 30) {
    suggestedReward = 10
  }

  // Generate personalized message using OpenAI
  let suggestedMessage = ''
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a referral marketing expert. Write a short, friendly referral message that a user can share with friends. Keep it under 100 words, casual tone, mention value proposition.'
        },
        {
          role: 'user',
          content: `Create a referral message for a ${behavior.tenureDays}-day user who is a ${behavior.featuresUsed >= 5 ? 'power user' : 'regular user'} with ${previousReferrals} previous referrals. Score: ${score}/100.`
        }
      ],
      max_tokens: 150,
      temperature: 0.7
    })
    suggestedMessage = completion.choices[0].message.content || 'Check out this amazing product!'
  } catch (error) {
    // Fallback message
    suggestedMessage = 'Hey! I\'ve been using this product and it\'s been a game-changer. Thought you might like it too!'
  }

  // Save prediction
  await prisma.aiPrediction.create({
    data: {
      userId,
      campaignId,
      likelihoodScore: score,
      suggestedRewardAmount: suggestedReward,
      suggestedMessage,
      featuresUsed: features,
      modelVersion: '1.0-rule-based'
    }
  })

  return {
    likelihoodScore: score,
    confidence: score > 70 ? 'high' : score > 40 ? 'medium' : 'low',
    suggestedReward,
    suggestedMessage,
    topFeatures: features,
    modelVersion: '1.0-rule-based'
  }
}

export async function getTopAdvocates(campaignId: string, limit: number = 20) {
  // Get users sorted by likelihood score
  const predictions = await prisma.aiPrediction.findMany({
    where: { campaignId },
    orderBy: { likelihoodScore: 'desc' },
    take: limit,
    include: {
      user: {
        select: {
          id: true,
          email: true,
          companyName: true,
          createdAt: true
        }
      }
    }
  })

  return predictions.map(p => ({
    userId: p.userId,
    email: p.user.email,
    companyName: p.user.companyName,
    likelihoodScore: p.likelihoodScore,
    suggestedReward: p.suggestedRewardAmount,
    suggestedMessage: p.suggestedMessage,
    predictedAt: p.createdAt
  }))
}
