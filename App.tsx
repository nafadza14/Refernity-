
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
          <div className="flex flex-col items-center justify-center h-full text-slate-400">
            <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-lg font-medium">Feature coming soon</p>
            <button 
              onClick={() => setActiveTab('overview')}
              className="mt-6 text-indigo-600 font-bold hover:underline"
            >
              Back to Dashboard
            </button>
          </div>
        );
    }
  };

  if (!isDashboardView) {
    return <LandingPage onEnterDashboard={() => setIsDashboardView(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-semibold text-slate-700 capitalize">
              {activeTab.replace('_', ' ')}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-1.5 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <svg className="w-4 h-4 text-slate-400 absolute right-3 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button onClick={() => setIsDashboardView(false)} className="text-sm text-slate-500 hover:text-indigo-600 font-medium transition-colors">
              Logout
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {renderDashboardContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
