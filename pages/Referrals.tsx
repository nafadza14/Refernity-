
import React from 'react';
import { MOCK_REFERRALS } from '../constants';

const Referrals: React.FC = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Referral Log</h1>
        <p className="text-slate-500">Track and manage every referral in real-time.</p>
      </header>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Referrer</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Referee</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_REFERRALS.map((ref) => (
                <tr key={ref.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">
                        {ref.referrer_name[0]}
                      </div>
                      <span className="text-sm font-medium text-slate-900">{ref.referrer_name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600">{ref.referee_email}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                      ref.status === 'rewarded' ? 'bg-emerald-100 text-emerald-700' :
                      ref.status === 'converted' ? 'bg-indigo-100 text-indigo-700' :
                      ref.status === 'signed_up' ? 'bg-blue-100 text-blue-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {ref.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {new Date(ref.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 text-right">
                    ${ref.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-sm">
          <span className="text-slate-500">Showing 5 referrals</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white text-slate-400 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white text-slate-600">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
