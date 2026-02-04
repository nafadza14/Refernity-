
import React from 'react';

const Rewards: React.FC = () => {
  const pendingRewards = [
    { id: 'rew-1', user: 'Alex Chen', amount: 100.00, trigger: 'High Value Conversion', date: '2h ago', status: 'pending_approval' },
    { id: 'rew-2', user: 'Sarah Miller', amount: 25.00, trigger: 'New Sign-up', date: '5h ago', status: 'processing' },
  ];

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Reward Management</h1>
          <p className="text-slate-500">Approve payouts and manage customer credits.</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">Export CSV</button>
           <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-colors">Pay All Batches</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <p className="text-sm font-medium text-slate-500">Pending Payouts</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">$450.00</p>
          <p className="text-xs text-emerald-600 mt-2">Next batch: Today, 5:00 PM</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <p className="text-sm font-medium text-slate-500">Total Rewards Paid</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">$12,840.00</p>
          <p className="text-xs text-slate-400 mt-2">Life-to-date across all campaigns</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <p className="text-sm font-medium text-slate-500">Manual Approvals</p>
          <p className="text-3xl font-bold text-amber-600 mt-1">3</p>
          <p className="text-xs text-slate-400 mt-2">High-value rewards requiring review</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-800">Pending Approvals</h3>
          <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full font-bold">Action Required</span>
        </div>
        <div className="divide-y divide-slate-100">
          {pendingRewards.map((reward) => (
            <div key={reward.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{reward.user}</p>
                  <p className="text-xs text-slate-500">{reward.trigger} • {reward.date}</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-6">
                <div>
                  <p className="text-lg font-black text-slate-900">${reward.amount.toFixed(2)}</p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{reward.status.replace('_', ' ')}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">Approve</button>
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
