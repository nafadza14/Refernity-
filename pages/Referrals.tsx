
import React from 'react';
import { MOCK_REFERRALS } from '../constants';

const Referrals: React.FC = () => {
  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-brand-dark tracking-tight">Referral Log</h1>
          <p className="text-slate-500 font-medium text-lg mt-2">Real-time attribution and conversion tracking.</p>
        </div>
        <div className="flex gap-4">
          <button className="p-4 bg-white border border-slate-200 rounded-[20px] text-slate-600 hover:text-brand-purple hover:border-brand-purple transition-all shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </button>
          <div className="relative">
             <input type="text" placeholder="Filter referrals..." className="bg-white border border-slate-200 rounded-[20px] pl-12 pr-6 py-4 text-sm font-medium focus:ring-4 focus:ring-brand-purple/10 focus:border-brand-purple outline-none transition-all w-64 shadow-sm" />
             <svg className="w-5 h-5 text-slate-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
          </div>
        </div>
      </header>

      <div className="bg-white rounded-[48px] border border-slate-200 shadow-sm overflow-hidden p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Advocate</th>
                <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Referee</th>
                <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Date</th>
                <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_REFERRALS.map((ref) => (
                <tr key={ref.id} className="hover:bg-slate-50 transition-all duration-200 group cursor-default">
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-purple/5 text-brand-purple flex items-center justify-center font-black text-lg transition-transform group-hover:scale-110 border border-brand-purple/10">
                        {ref.referrer_name[0]}
                      </div>
                      <span className="text-base font-black text-brand-dark">{ref.referrer_name}</span>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-sm font-medium text-slate-500">{ref.referee_email}</span>
                  </td>
                  <td className="px-10 py-6">
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      ref.status === 'rewarded' ? 'bg-emerald-50 text-brand-green border border-emerald-100' :
                      ref.status === 'converted' ? 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20' :
                      ref.status === 'signed_up' ? 'bg-brand-purple/10 text-brand-purple border border-brand-purple/20' :
                      'bg-slate-100 text-slate-400'
                    }`}>
                      {ref.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-10 py-6 text-sm font-bold text-slate-400">
                    {new Date(ref.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td className="px-10 py-6 text-lg font-black text-brand-dark text-right">
                    ${ref.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-10 py-8 border-t border-slate-100 flex items-center justify-between text-sm font-black text-slate-400 uppercase tracking-widest">
          <span>Page 1 of 12</span>
          <div className="flex gap-4">
            <button className="px-6 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 disabled:opacity-30 transition-all" disabled>Previous</button>
            <button className="px-6 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 text-brand-purple hover:border-brand-purple transition-all shadow-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
