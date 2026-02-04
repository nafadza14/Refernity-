
import React from 'react';

const Rewards: React.FC = () => {
  const pendingRewards = [
    { id: 'rew-1', user: 'Alex Chen', amount: 100.00, trigger: 'High Value Conversion', date: '2h ago', status: 'pending_approval' },
    { id: 'rew-2', user: 'Sarah Miller', amount: 25.00, trigger: 'New Sign-up', date: '5h ago', status: 'processing' },
  ];

  return (
    <div className="space-y-10">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-brand-dark tracking-tight">Reward Center</h1>
          <p className="text-slate-500 font-medium text-lg mt-2">Predictable payouts for your best advocates.</p>
        </div>
        <div className="flex gap-4">
           <button className="bg-white border-2 border-slate-100 text-slate-600 px-8 py-4 rounded-[20px] font-black uppercase text-xs tracking-widest hover:border-brand-purple hover:text-brand-purple transition-all shadow-sm">Export Data</button>
           <button className="bg-brand-purple text-white px-8 py-4 rounded-[20px] font-black uppercase text-xs tracking-widest hover:scale-105 shadow-xl shadow-brand-purple/20 transition-all">Pay All Batches</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-[40px] border-2 border-slate-100 group hover:border-brand-purple transition-all">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Pending Payouts</p>
          <p className="text-5xl font-black text-brand-dark group-hover:text-brand-purple transition-colors">$450.00</p>
          <div className="mt-8 flex items-center gap-2 text-xs font-black text-emerald-500 uppercase tracking-widest">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Next Batch: 5 PM TODAY
          </div>
        </div>
        <div className="bg-white p-10 rounded-[40px] border-2 border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Total Life-time Paid</p>
          <p className="text-5xl font-black text-brand-dark">$12,840</p>
          <p className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Across all 3 active campaigns</p>
        </div>
        <div className="bg-brand-dark p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/20 blur-[60px] rounded-full"></div>
          <p className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em] mb-4">Manual Reviews</p>
          <p className="text-6xl font-black text-white">3</p>
          <p className="mt-8 text-xs font-black text-brand-purple uppercase tracking-widest">Security Action Required</p>
        </div>
      </div>

      <div className="bg-white rounded-[48px] border border-slate-200 shadow-sm overflow-hidden p-4">
        <div className="px-10 py-8 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-2xl font-black text-brand-dark">Pending Approvals</h3>
          <span className="text-[10px] font-black text-brand-purple bg-indigo-50 px-4 py-2 rounded-full uppercase tracking-widest border border-brand-purple/10 animate-pulse">Needs Review</span>
        </div>
        <div className="divide-y divide-slate-100">
          {pendingRewards.map((reward) => (
            <div key={reward.id} className="px-10 py-8 flex items-center justify-between hover:bg-slate-50 transition-all group">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-100 rounded-[24px] flex items-center justify-center text-slate-300 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div>
                  <p className="text-xl font-black text-brand-dark mb-1">{reward.user}</p>
                  <p className="text-sm font-bold text-slate-400">{reward.trigger} • <span className="text-slate-400/60 uppercase text-[10px] tracking-widest">{reward.date}</span></p>
                </div>
              </div>
              <div className="text-right flex items-center gap-12">
                <div className="hidden lg:block">
                  <p className="text-3xl font-black text-brand-dark group-hover:text-brand-purple transition-colors">${reward.amount.toFixed(2)}</p>
                  <p className="text-[10px] uppercase font-black text-slate-300 tracking-[0.2em] mt-1">{reward.status.replace('_', ' ')}</p>
                </div>
                <div className="flex gap-4">
                  <button className="p-4 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-[20px] transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                  <button className="bg-brand-purple text-white px-10 py-4 rounded-[20px] font-black uppercase text-xs tracking-widest hover:scale-105 shadow-xl shadow-brand-purple/10 transition-all">Approve</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
