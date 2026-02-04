
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
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems: { id: AppTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <LayoutGrid className="w-5 h-5" /> },
    { id: 'campaigns', label: 'Campaigns', icon: <Rocket className="w-5 h-5" /> },
    { id: 'referrals', label: 'Referrals', icon: <Users className="w-5 h-5" /> },
    { id: 'rewards', label: 'Rewards', icon: <Gift className="w-5 h-5" /> },
    { id: 'ai_insights', label: 'AI Insights', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-72 bg-brand-dark text-white shrink-0 min-h-screen flex flex-col border-r border-white/5 relative z-20">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center font-black text-xl">R</div>
          <span className="text-2xl font-black tracking-tight">Refernity</span>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-bold rounded-2xl transition-all ${
                activeTab === item.id 
                  ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
              {activeTab === item.id && <ChevronRight className="w-4 h-4 ml-auto opacity-50" />}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-8 border-t border-white/5">
        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 group cursor-pointer hover:bg-white/10 transition-all">
          <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-brand-purple border border-white/10">A</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-black text-white truncate">Acme Inc</p>
            <p className="text-[10px] text-brand-purple font-black uppercase tracking-widest">Growth</p>
          </div>
          <LogOut className="w-4 h-4 text-slate-500 hover:text-white" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
