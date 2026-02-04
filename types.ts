
export interface User {
  id: string;
  email: string;
  name: string;
  engagement_score: number;
  nps_score: number;
  tenure_months: number;
  power_user: boolean;
}

export interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  reward_type: 'cash' | 'credit' | 'discount';
  reward_amount: number;
  clicks: number;
  conversions: number;
}

export interface Referral {
  id: string;
  referrer_name: string;
  referee_email: string;
  status: 'pending' | 'signed_up' | 'converted' | 'rewarded';
  date: string;
  amount: number;
}

export interface AIPrediction {
  likelihood: number;
  suggested_reward: number;
  reasoning: string;
  suggested_message: string;
}

export type AppTab = 'overview' | 'campaigns' | 'referrals' | 'rewards' | 'ai_insights' | 'settings';
