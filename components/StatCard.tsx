
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
    <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm hover:border-brand-purple hover:shadow-2xl hover:shadow-brand-purple/5 transition-all cursor-default group relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 text-slate-100 group-hover:text-brand-purple/5 transition-colors">
        {icon}
      </div>
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand-purple group-hover:text-white transition-all mb-6">
        {icon}
      </div>
      <h3 className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">{title}</h3>
      <div className="flex items-end justify-between relative z-10">
        <span className="text-4xl font-black text-brand-dark group-hover:text-brand-purple transition-colors tracking-tight">{value}</span>
        {trend && (
          <div className={`flex items-center gap-1 px-3 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-widest ${isPositive ? 'bg-emerald-50 text-brand-green border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {trend}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
