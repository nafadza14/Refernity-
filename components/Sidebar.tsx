
import React from 'react';
import { AppTab } from '../types';
import { 
  LayoutGrid, 
  Rocket, 
  Users, 
  Gift, 
  Sparkles, 
  Settings,
  LogOut,
  Zap
} from 'lucide-react';

interface SidebarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems: { id: AppTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <LayoutGrid className="w-6 h-6" /> },
    { id: 'campaigns', label: 'Campaigns', icon: <Rocket className="w-6 h-6" /> },
    { id: 'referrals', label: 'Referrals', icon: <Users className="w-6 h-6" /> },
    { id: 'rewards', label: 'Rewards', icon: <Gift className="w-6 h-6" /> },
    { id: 'ai_insights', label: 'AI Insights', icon: <Sparkles className="w-6 h-6" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-6 h-6" /> },
  ];

  return (
    <aside className="w-24 bg-white border-r border-slate-100 shrink-0 min-h-screen flex flex-col py-10 relative z-20">
      <div className="flex flex-col items-center flex-1">
        <div className="w-12 h-12 bg-brand-purple rounded-2xl flex items-center justify-center font-black text-white text-xl mb-16 shadow-lg shadow-brand-purple/20 cursor-pointer hover:rotate-12 transition-transform">R</div>
        
        <nav className="flex flex-col gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-4 rounded-2xl transition-all relative group ${
                activeTab === item.id 
                  ? 'bg-brand-purple/10 text-brand-purple' 
                  : 'text-slate-300 hover:text-brand-purple hover:bg-slate-50'
              }`}
            >
              {item.icon}
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-brand-dark text-white text-[11px] font-black rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                {item.label}
              </div>
              {activeTab === item.id && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand-purple rounded-l-full"></div>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex flex-col items-center pb-6">
         <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-8 cursor-pointer hover:scale-110 transition-all">
            <Zap className="w-6 h-6 fill-current" />
         </div>
      </div>
    </aside>
  );
};

export default Sidebar;
