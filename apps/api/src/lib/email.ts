import { prisma } from '@refernity/database'

interface EmailData {
  to: string
  subject: string
  html: string
  from?: string
}

// Simple email service using Resend API
export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: data.from || 'Refernity <kevin@refernity.io>',
        to: data.to,
        subject: data.subject,
        html: data.html
      })
    })

    if (!response.ok) {
      console.error('Email send failed:', await response.text())
      return false
    }

    return true
  } catch (error) {
    console.error('Email send error:', error)
    return false
  }
}

// Welcome email for new users
export async function sendWelcomeEmail(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  })

  if (!user) return false

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Welcome to Refernity</title>
    </head>
    <body style="font-family: Inter, -apple-system, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #6B46C1;">Welcome to Refernity!</h1>
        <p>Hi there,</p>
        
        <p>Welcome to <strong>Refernity</strong>! You're now part of the referral revolution.</p>
        
        <p>Most referral programs fail because they ask <em>everyone</em> to refer. We use AI to identify your top 20% advocates—those most likely to share—so you can focus rewards where they matter.</p>
        
        <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">🎯 Your 3-Step Setup:</h3>
          <ol>
            <li><strong>Install widget</strong> (2 minutes)</li>
            <li><strong>Configure rewards</strong> → Create campaign</li>
            <li><strong>AI optimization</strong> → Connect Stripe for smart suggestions</li>
          </ol>
        </div>
        
        <p>Questions? Just reply to this email—I read every one.</p>
        
        <p>Let's build your viral loop,<br>
        <strong>Kevin</strong><br>
        CEO, Refernity</p>
      </div>
    </body>
    </html>
  `

  return sendEmail({
    to: user.email,
    subject: 'Welcome to Refernity—your AI referral engine is ready 🚀',
    html
  })
}

// Referral conversion notification
export async function sendReferralConvertedEmail(referrerId: string, refereeEmail: string, rewardAmount: number) {
  const user = await prisma.user.findUnique({
    where: { id: referrerId }
  })

  if (!user) return false

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Inter, -apple-system, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #10B981;">🎉 You earned $${rewardAmount}!</h1>
        
        <p>Great news! <strong>${refereeEmail}</strong> just signed up using your referral link.</p>
        
        <p>Your reward of <strong>$${rewardAmount}</strong> has been added to your account and will be paid out according to your campaign settings.</p>
        
        <a href="https://app.refernity.io/dashboard" style="display: inline-block; background: #6B46C1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 20px 0;">
          View Your Dashboard
        </a>
        
        <p>Keep sharing! The more friends you refer, the more you earn.</p>
      </div>
    </body>
    </html>
  `

  return sendEmail({
    to: user.email,
    subject: `🎉 You earned $${rewardAmount}!`,
    html
  })
}

// Reward paid notification
export async function sendRewardPaidEmail(userId: string, amount: number, method: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  })

  if (!user) return false

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Inter, -apple-system, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #10B981;">💰 Reward Paid!</h1>
        
        <p>Your reward of <strong>$${amount}</strong> has been sent to your ${method} account.</p>
        
        <p>It should arrive within 1-3 business days depending on your payment method.</p>
        
        <p>Thanks for being an amazing advocate! 🙌</p>
      </div>
    </body>
    </html>
  `

  return sendEmail({
    to: user.email,
    subject: '💰 Your reward has been paid!',
    html
  })
}
