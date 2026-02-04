
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatCard from '../components/StatCard';
import { CHART_DATA, MOCK_REFERRALS } from '../constants';

const Overview: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Clicks" value="12,450" trend="12%" isPositive={true} />
        <StatCard title="Total Signups" value="842" trend="8%" isPositive={true} />
        <StatCard title="Total Conversions" value="234" trend="15%" isPositive={true} />
        <StatCard title="Total Revenue" value="$24,105" trend="14%" isPositive={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-brand-dark">Growth Performance</h3>
            <select className="text-sm font-bold bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 outline-none text-slate-600">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA}>
                <defs>
                  <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6B46C1" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#6B46C1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8', fontWeight: 600}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8', fontWeight: 600}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="clicks" 
                  stroke="#6B46C1" 
                  fillOpacity={1} 
                  fill="url(#colorClicks)" 
                  strokeWidth={4} 
                  dot={{ r: 4, fill: '#6B46C1', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-brand-dark">Top Advocates</h3>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-purple bg-indigo-50 px-2 py-1 rounded">Real-time</span>
          </div>
          <div className="space-y-6">
            {MOCK_REFERRALS.slice(0, 5).map((ref) => (
              <div key={ref.id} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-brand-purple font-black text-lg transition-transform group-hover:scale-110">
                  {ref.referrer_name[0]}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-black text-brand-dark truncate">{ref.referrer_name}</p>
                  <p className="text-xs text-slate-500 font-medium truncate">{ref.referee_email}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-brand-dark">${ref.amount || '0'}</p>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${
                    ref.status === 'rewarded' ? 'text-brand-green' : 
                    ref.status === 'converted' ? 'text-brand-blue' : 'text-slate-400'
                  }`}>
                    {ref.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-4 text-sm font-black text-brand-purple bg-indigo-50 hover:bg-indigo-100 rounded-2xl transition-all uppercase tracking-widest">
            View All Leaders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
