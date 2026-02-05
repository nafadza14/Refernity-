# Refernity

AI-powered referral marketing platform for SaaS and e-commerce businesses.

## 🎯 Mission

Turn your customers into your growth team. Launch referral programs that actually work—in 5 minutes, not 5 hours.

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 + Tailwind CSS |
| Backend | Node.js + Express |
| Database | PostgreSQL (Prisma ORM) |
| Cache | Redis |
| Queue | BullMQ |
| Auth | NextAuth.js |
| AI | OpenAI GPT-4 |

## 📁 Project Structure

```
refernity/
├── apps/
│   ├── web/          # Next.js frontend
│   ├── api/          # Express backend
│   └── widget/       # Embeddable widget (vanilla JS)
├── packages/
│   └── database/     # Prisma schema + client
└── docs/             # Documentation
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis 6+

### Setup

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your credentials

# Database setup
npm run db:generate
npm run db:push

# Start development
npm run dev
```

## 📝 API Documentation

### Widget Embed
```html
<script src="https://cdn.refernity.io/widget.js"></script>
<script>
  window.refernityConfig = {
    campaignId: 'your-campaign-id',
    position: 'bottom-right'
  };
</script>
```

### Endpoints

- `GET /api/widget/:campaignId` - Get widget configuration
- `POST /api/track/click` - Track referral click
- `POST /api/referrals/create` - Create referral
- `GET /api/referrals/user/:userId` - Get user's referrals
- `GET /api/campaigns/:id/stats` - Get campaign stats

## 🏗️ Roadmap

- [x] Database schema
- [x] API foundation
- [x] Widget embed
- [ ] Dashboard UI
- [ ] Stripe integration
- [ ] WhatsApp API
- [ ] AI suggestions
- [ ] Product Hunt launch

## 📄 License

MIT © 2026 Refernity Inc.
