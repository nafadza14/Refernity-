
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
import { Search, Bell, LogOut, Sparkles, ChevronDown } from 'lucide-react';

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
        return <div className="p-10 text-center font-bold text-slate-400">Loading Content...</div>;
    }
  };

  if (!isDashboardView) {
    return <LandingPage onEnterDashboard={() => setIsDashboardView(true)} />;
  }

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Sidebar - Minimal Modern */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-24 px-12 flex items-center justify-between shrink-0 z-20">
          <div className="flex items-center gap-4">
            <h2 className="text-[28px] font-black text-brand-dark capitalize tracking-tight">
              {activeTab.replace('_', ' ')}
            </h2>
            <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse mt-1"></div>
          </div>
          
          <div className="flex items-center gap-10">
            <div className="relative group hidden xl:block">
              <Search className="w-5 h-5 text-slate-400 absolute left-0 top-1/2 -translate-y-1/2 group-focus-within:text-brand-purple transition-colors" />
              <input 
                type="text" 
                placeholder="Find anything..." 
                className="bg-transparent border-none rounded-none pl-10 pr-6 py-3 text-sm w-64 font-bold focus:ring-0 transition-all outline-none text-brand-dark"
              />
            </div>
            
            <div className="flex items-center gap-8">
              <button className="relative p-2 text-slate-400 hover:text-brand-purple transition-all">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-brand-pink border-2 border-white rounded-full"></span>
              </button>
              
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                <div className="w-10 h-10 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple font-black">SJ</div>
                <div className="hidden lg:block">
                  <p className="text-sm font-black text-brand-dark leading-none">Sarah Jenkins</p>
                  <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Admin</p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>

              <button 
                onClick={() => setIsDashboardView(false)} 
                className="bg-brand-dark text-white px-6 py-2.5 rounded-2xl font-black text-[13px] hover:bg-black transition-all shadow-lg active:scale-95 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Content Sheet */}
        <main className="flex-1 overflow-y-auto no-scrollbar px-12 pb-12">
          <div className="bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 min-h-full p-12">
            {renderDashboardContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
