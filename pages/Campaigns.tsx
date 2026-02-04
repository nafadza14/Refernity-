
import React from 'react';
import { MOCK_CAMPAIGNS } from '../constants';

const Campaigns: React.FC = () => {
  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-brand-dark tracking-tight">Campaign Management</h1>
          <p className="text-slate-500 font-medium text-lg mt-2">Create and manage your infinite referral loops.</p>
        </div>
        <button className="bg-brand-purple hover:bg-[#5a3bb0] text-white px-8 py-4 rounded-[20px] font-black text-lg transition-all flex items-center gap-3 shadow-xl shadow-brand-purple/20 hover:scale-105">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
          </svg>
          New Campaign
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_CAMPAIGNS.map((camp) => (
          <div key={camp.id} className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden hover:border-brand-purple hover:shadow-2xl transition-all duration-300 group cursor-pointer">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full ${
                  camp.status === 'active' ? 'bg-emerald-50 text-brand-green border border-emerald-100' : 'bg-slate-100 text-slate-500'
                }`}>
                  {camp.status}
                </span>
                <button className="text-slate-300 hover:text-brand-purple p-2 rounded-xl hover:bg-slate-50 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-2 group-hover:text-brand-purple transition-colors">{camp.name}</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10">
                Reward: <span className="text-brand-dark font-bold">${camp.reward_amount} {camp.reward_type}</span> per conversion
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-3xl text-center">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Clicks</p>
                  <p className="text-2xl font-black text-brand-dark">{camp.clicks.toLocaleString()}</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-3xl text-center">
                  <p className="text-[10px] text-brand-purple font-black uppercase tracking-widest mb-1">Conversions</p>
                  <p className="text-2xl font-black text-brand-purple">{camp.conversions}</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-8 py-5 border-t border-slate-100 flex items-center justify-between group-hover:bg-brand-purple transition-all duration-300">
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest group-hover:text-white/80 transition-colors">CVR: {((camp.conversions/camp.clicks)*100).toFixed(1)}%</span>
              <button className="text-xs font-black text-brand-purple uppercase tracking-widest group-hover:text-white transition-colors">Settings →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
