
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatCard from '../components/StatCard';
import { CHART_DATA, MOCK_REFERRALS } from '../constants';
import { Users, MousePointer2, Target, DollarSign, ArrowUpRight } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard title="Total Clicks" value="12,450" trend="12%" isPositive={true} icon={<MousePointer2 />} />
        <StatCard title="Total Signups" value="842" trend="8%" isPositive={true} icon={<Users />} />
        <StatCard title="Total Conversions" value="234" trend="15%" isPositive={true} icon={<Target />} />
        <StatCard title="Total Revenue" value="$24,105" trend="14%" isPositive={true} icon={<DollarSign />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Chart Section */}
        <div className="lg:col-span-2 bg-white p-12 rounded-[56px] border border-slate-200 shadow-sm relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
             <ArrowUpRight className="w-64 h-64 text-brand-purple" />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 relative z-10 gap-6">
            <div>
              <h3 className="text-3xl font-black text-brand-dark tracking-tight">Growth Performance</h3>
              <p className="text-slate-400 font-bold text-base mt-1">Real-time referral attribution</p>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-100">
              <button className="px-5 py-2 text-sm font-black bg-white shadow-sm rounded-xl text-brand-purple">Clicks</button>
              <button className="px-5 py-2 text-sm font-black text-slate-400 hover:text-brand-dark transition-colors">Conversions</button>
            </div>
          </div>
          <div className="h-[400px] w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA}>
                <defs>
                  <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6B46C1" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#6B46C1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="8 8" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 12, fill: '#94a3b8', fontWeight: 800}} 
                  dy={20}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 12, fill: '#94a3b8', fontWeight: 800}} 
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)', padding: '24px' }}
                  cursor={{ stroke: '#6B46C1', strokeWidth: 2, strokeDasharray: '6 6' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="clicks" 
                  stroke="#6B46C1" 
                  fillOpacity={1} 
                  fill="url(#colorClicks)" 
                  strokeWidth={6} 
                  dot={{ r: 8, fill: '#6B46C1', strokeWidth: 4, stroke: '#fff' }}
                  activeDot={{ r: 10, strokeWidth: 0, fill: '#6B46C1' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sidebar Feed Section */}
        <div className="bg-white p-12 rounded-[56px] border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-black text-brand-dark tracking-tight">Top Advocates</h3>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-purple bg-brand-purple/5 px-4 py-2 rounded-full border border-brand-purple/10">Real-time</span>
          </div>
          <div className="space-y-10 flex-1 overflow-y-auto no-scrollbar">
            {MOCK_REFERRALS.slice(0, 5).map((ref) => (
              <div key={ref.id} className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-[24px] bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-purple font-black text-2xl transition-all group-hover:bg-brand-purple group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
                  {ref.referrer_name[0]}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-lg font-black text-brand-dark truncate">{ref.referrer_name}</p>
                  <p className="text-sm text-slate-400 font-bold truncate tracking-tight uppercase">{ref.status}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-brand-dark">${ref.amount || '0'}</p>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">Earned</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-12 py-6 text-sm font-black text-brand-purple bg-brand-purple/5 hover:bg-brand-purple/10 rounded-[24px] transition-all uppercase tracking-[0.2em] border border-brand-purple/10 active:scale-95">
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
