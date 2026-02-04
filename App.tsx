
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
// Fix: Added Sparkles to the import list from lucide-react
import { Search, Bell, LogOut, Sparkles } from 'lucide-react';

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
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-10">
            <div className="w-24 h-24 bg-slate-100 rounded-[32px] flex items-center justify-center mb-8">
              <Sparkles className="w-12 h-12 text-slate-300" />
            </div>
            <h3 className="text-3xl font-black text-brand-dark mb-4">Coming Soon</h3>
            <p className="text-slate-500 max-w-sm font-medium text-lg leading-relaxed">
              We're polishing this feature for the Refernity v1.0 release.
            </p>
            <button 
              onClick={() => setActiveTab('overview')}
              className="mt-10 btn-primary px-10 py-4"
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
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar - Fixed Width */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content Area - Scrollable */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-24 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-10 flex items-center justify-between shrink-0 z-20 sticky top-0">
          <div className="flex items-center gap-6">
            <div className="w-1.5 h-8 bg-brand-purple rounded-full"></div>
            <h2 className="text-2xl font-black text-brand-dark capitalize tracking-tight">
              {activeTab.replace('_', ' ')}
            </h2>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="relative group hidden xl:block">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-brand-purple transition-colors" />
              <input 
                type="text" 
                placeholder="Search metrics or campaigns..." 
                className="bg-slate-100 border-none rounded-2xl pl-12 pr-6 py-3 text-sm w-80 font-medium focus:ring-4 focus:ring-brand-purple/10 focus:bg-white transition-all outline-none"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-3 text-slate-400 hover:text-brand-purple hover:bg-brand-purple/5 rounded-2xl transition-all relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-brand-purple border-2 border-white rounded-full"></span>
              </button>
              
              <div className="h-8 w-px bg-slate-100 mx-2"></div>
              
              <button 
                onClick={() => setIsDashboardView(false)} 
                className="flex items-center gap-2 text-sm font-black text-slate-400 hover:text-brand-purple transition-colors uppercase tracking-widest"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden md:inline">Exit</span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar">
          <div className="p-10 max-w-[1600px] mx-auto pb-32">
            {renderDashboardContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
