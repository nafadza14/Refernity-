
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Campaigns from './pages/Campaigns';
import AIInsights from './pages/AIInsights';
import Referrals from './pages/Referrals';
import Rewards from './pages/Rewards';
import Settings from './pages/Settings';
import LandingPage from './pages/LandingPage';
import { AppTab } from './types';

const App: React.FC = () => {
  const [isDashboardView, setIsDashboardView] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<AppTab>('overview');

  const renderDashboardContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'campaigns':
        return <Campaigns />;
      case 'ai_insights':
        return <AIInsights />;
      case 'referrals':
        return <Referrals />;
      case 'rewards':
        return <Rewards />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
            <div className="w-20 h-20 bg-slate-100 rounded-[32px] flex items-center justify-center mb-6">
              <svg className="w-10 h-10 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-xl font-black text-brand-dark">Feature coming soon</p>
            <p className="text-slate-500 mt-2 font-medium">We're finalizing this experience for Refernity v1.0.</p>
            <button 
              onClick={() => setActiveTab('overview')}
              className="mt-8 bg-brand-purple text-white px-8 py-3 rounded-2xl font-black shadow-xl shadow-brand-purple/20 hover:scale-105 transition-transform"
            >
              Back to Overview
            </button>
          </div>
        );
    }
  };

  if (!isDashboardView) {
    return <LandingPage onEnterDashboard={() => setIsDashboardView(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-brand-dark selection:bg-brand-purple selection:text-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto">
        {/* Top Navbar */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-100 px-10 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-brand-purple rounded-full"></div>
            <h2 className="text-xl font-black text-brand-dark capitalize tracking-tight">
              {activeTab.replace('_', ' ')}
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group hidden lg:block">
              <input 
                type="text" 
                placeholder="Search metrics..." 
                className="bg-slate-100 border border-slate-200 rounded-2xl px-6 py-3 text-sm w-72 font-medium focus:outline-none focus:ring-4 focus:ring-brand-purple/10 focus:bg-white transition-all"
              />
              <svg className="w-5 h-5 text-slate-400 absolute right-4 top-3 group-focus-within:text-brand-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button className="p-3 bg-slate-100 text-slate-500 hover:text-brand-purple hover:bg-brand-purple/5 rounded-2xl transition-all relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-brand-purple border-2 border-white rounded-full"></span>
            </button>
            <button onClick={() => setIsDashboardView(false)} className="text-sm font-black text-slate-400 hover:text-brand-purple transition-colors uppercase tracking-widest">
              Logout
            </button>
          </div>
        </header>

        <div className="p-10 max-w-7xl mx-auto pb-24">
          {renderDashboardContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
