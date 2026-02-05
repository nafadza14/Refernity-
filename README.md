# Refernity - AI-Powered Referral Marketing Platform

Turn your customers into your growth team. Refernity uses AI to predict which customers will refer friends—so you can focus rewards where they matter.

## 🚀 Features

- **AI-Powered Predictions** - Identify your top 20% advocates with 80% accuracy
- **5-Minute Setup** - One-line widget installation, no developers needed
- **Automatic Rewards** - Stripe/PayPal payouts, hands-free operation
- **Fraud Protection** - Self-referral detection, duplicate prevention
- **Real-Time Analytics** - Track clicks, conversions, and ROI

## 📦 Tech Stack

- **Frontend:** Next.js 14 + Tailwind CSS
- **Backend:** Node.js + Express + TypeScript
- **Database:** PostgreSQL (Prisma ORM)
- **Cache:** Redis (Upstash)
- **AI:** OpenAI GPT-4
- **Payments:** Stripe
- **Email:** Resend
- **Hosting:** Vercel (frontend) + Railway (backend)

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 15+
- Redis 7+

### Installation

```bash
# Clone repository
git clone https://github.com/ziera-tech/refernity.git
cd refernity

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# Run database migrations
npx prisma migrate dev

# Start development servers
npm run dev
```

### Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/refernity
REDIS_URL=redis://localhost:6379

# Auth
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Payments
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# AI
OPENAI_API_KEY=sk-...

# Email
RESEND_API_KEY=re_...
```

## 📁 Project Structure

```
refernity/
├── apps/
│   ├── web/          # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/  # App router
│   │   │   │   ├── dashboard/   # Dashboard UI
│   │   │   │   ├── auth/        # Auth pages
│   │   │   │   └── page.tsx     # Landing page
│   │   │   └── components/
│   ├── api/          # Express backend
│   │   └── src/
│   │       ├── routes/   # API routes
│   │       ├── lib/      # Utilities
│   │       └── index.ts
│   └── widget/       # Embeddable widget
│       └── embed.js
├── packages/
│   └── database/     # Prisma schema
│       └── prisma/
│           └── schema.prisma
└── docker-compose.yml
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signin` - Google OAuth

### Widget
- `GET /api/v1/widget.js?campaign_id=xxx` - Widget embed script

### Referrals
- `POST /api/v1/track/click` - Track referral click
- `POST /api/v1/referrals` - Create referral (conversion)

### Campaigns
- `GET /api/v1/campaigns` - List campaigns
- `POST /api/v1/campaigns` - Create campaign
- `PATCH /api/v1/campaigns/:id` - Update campaign
- `DELETE /api/v1/campaigns/:id` - Delete campaign

### AI
- `GET /api/v1/ai/predict/:user_id` - Get AI prediction
- `GET /api/v1/ai/advocates/:campaign_id` - Get top advocates

### Analytics
- `GET /api/v1/analytics/overview` - Dashboard stats
- `GET /api/v1/analytics/ai-predictions` - AI predictions summary
- `GET /api/v1/analytics/daily?days=30` - Daily stats

## 🧪 Testing

```bash
# Run tests
npm test

# Run e2e tests
npm run test:e2e
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd apps/web
vercel --prod
```

### Backend (Railway)
```bash
cd apps/api
railway up
```

## 📄 License

MIT License - Ziera Technology

---

Built with ❤️ by the Refernity team
