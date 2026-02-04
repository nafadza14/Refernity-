
import { Campaign, Referral, User } from './types';

export const MOCK_USER: User = {
  id: 'u-123',
  email: 'sarah.j@techflow.io',
  name: 'Sarah Jenkins',
  engagement_score: 85,
  nps_score: 9,
  tenure_months: 14,
  power_user: true
};

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: 'camp-1',
    name: 'Q1 Growth Push',
    status: 'active',
    reward_type: 'cash',
    reward_amount: 25,
    clicks: 1240,
    conversions: 84
  },
  {
    id: 'camp-2',
    name: 'Beta Affiliate Program',
    status: 'active',
    reward_type: 'credit',
    reward_amount: 50,
    clicks: 450,
    conversions: 12
  },
  {
    id: 'camp-3',
    name: 'Mobile Launch Sweepstakes',
    status: 'inactive',
    reward_type: 'discount',
    reward_amount: 15,
    clicks: 890,
    conversions: 45
  }
];

export const MOCK_REFERRALS: Referral[] = [
  { id: 'ref-1', referrer_name: 'John Doe', referee_email: 'mike@example.com', status: 'rewarded', date: '2024-02-01', amount: 25 },
  { id: 'ref-2', referrer_name: 'Sarah J', referee_email: 'lisa@agency.com', status: 'converted', date: '2024-02-02', amount: 25 },
  { id: 'ref-3', referrer_name: 'Kevin Smith', referee_email: 'dev@startup.io', status: 'signed_up', date: '2024-02-03', amount: 0 },
  { id: 'ref-4', referrer_name: 'John Doe', referee_email: 'anna@web.com', status: 'pending', date: '2024-02-03', amount: 0 },
  { id: 'ref-5', referrer_name: 'Sarah J', referee_email: 'tim@tech.com', status: 'rewarded', date: '2024-01-28', amount: 25 },
];

export const CHART_DATA = [
  { name: 'Mon', clicks: 400, conv: 24 },
  { name: 'Tue', clicks: 300, conv: 13 },
  { name: 'Wed', clicks: 200, conv: 98 },
  { name: 'Thu', clicks: 278, conv: 39 },
  { name: 'Fri', clicks: 189, conv: 48 },
  { name: 'Sat', clicks: 239, conv: 38 },
  { name: 'Sun', clicks: 349, conv: 43 },
];
