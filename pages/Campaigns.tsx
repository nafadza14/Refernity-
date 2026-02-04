
import React from 'react';
import { MOCK_CAMPAIGNS } from '../constants';

const Campaigns: React.FC = () => {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Campaign Management</h1>
          <p className="text-slate-500">Create and manage your referral incentives.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Campaign
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CAMPAIGNS.map((camp) => (
          <div key={camp.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:border-indigo-300 transition-colors">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                  camp.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                }`}>
                  {camp.status}
                </span>
                <button className="text-slate-400 hover:text-slate-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{camp.name}</h3>
              <p className="text-sm text-slate-500 mb-6">
                Give ${camp.reward_amount} {camp.reward_type} to referrers
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Clicks</p>
                  <p className="text-lg font-bold text-slate-900">{camp.clicks.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Conversions</p>
                  <p className="text-lg font-bold text-indigo-600">{camp.conversions}</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">CVR: {((camp.conversions/camp.clicks)*100).toFixed(1)}%</span>
              <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 uppercase tracking-wider">Settings</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
