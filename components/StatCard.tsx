
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  isPositive?: boolean;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, isPositive, icon }) => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-brand-purple/5 transition-all group relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-purple group-hover:text-white transition-all">
          {icon}
        </div>
        {trend && (
          <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-tight ${isPositive ? 'bg-brand-teal/10 text-brand-teal' : 'bg-brand-pink/10 text-brand-pink'}`}>
            {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            {trend}
          </div>
        )}
      </div>
      
      <h3 className="text-[13px] font-bold text-slate-400 mb-2 uppercase tracking-widest">{title}</h3>
      <div className="flex items-end justify-between relative z-10">
        <span className="text-4xl font-black text-brand-dark group-hover:text-brand-purple transition-colors tracking-tighter leading-none">{value}</span>
      </div>
    </div>
  );
};

export default StatCard;
