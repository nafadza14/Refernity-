
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  isPositive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, isPositive }) => {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:border-brand-purple transition-colors cursor-default group">
      <h3 className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">{title}</h3>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-black text-brand-dark group-hover:text-brand-purple transition-colors">{value}</span>
        {trend && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-black ${isPositive ? 'bg-emerald-50 text-brand-green' : 'bg-rose-50 text-rose-600'}`}>
            {isPositive ? '↑' : '↓'} {trend}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
