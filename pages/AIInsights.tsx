
import React, { useState } from 'react';
import { MOCK_USER } from '../constants';
import { AIPrediction } from '../types';
import { getAIPrediction } from '../services/geminiService';
import { Sparkles, BrainCircuit, MessageSquare, Zap, Target, ClipboardCheck, RefreshCcw } from 'lucide-react';

const AIInsights: React.FC = () => {
  const [prediction, setPrediction] = useState<AIPrediction | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const result = await getAIPrediction(MOCK_USER);
      setPrediction(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10 animate-in slide-in-from-bottom-5 duration-500">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-brand-dark tracking-tight">AI Predictive Engine</h1>
          <p className="text-slate-500 font-medium text-lg mt-2">v1.0 Rule-based modeling for 80%+ accuracy.</p>
        </div>
        <button 
          onClick={handlePredict}
          disabled={loading}
          className="bg-brand-purple hover:bg-[#5a3bb0] disabled:bg-brand-purple/50 text-white px-10 py-5 rounded-[28px] font-black text-xl transition-all flex items-center gap-3 shadow-2xl shadow-brand-purple/20 hover:scale-105 active:scale-95"
        >
          {loading ? (
            <>
              <RefreshCcw className="w-6 h-6 animate-spin" />
              Processing Signals...
            </>
          ) : (
            <>
              <Sparkles className="w-6 h-6" />
              Generate Prediction
            </>
          )}
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="bg-white p-10 rounded-6xl border border-slate-200 shadow-sm h-fit sticky top-32">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
               <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="font-black text-brand-dark uppercase text-xs tracking-widest">Signal Analysis</h3>
          </div>
          
          <div className="space-y-8">
            <div className="flex justify-between items-center group">
              <span className="text-sm font-bold text-slate-400 group-hover:text-brand-dark transition-colors">Customer Name</span>
              <span className="text-base font-black text-brand-dark">{MOCK_USER.name}</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                 <span className="text-sm font-bold text-slate-400">Engagement</span>
                 <span className="text-sm font-black text-brand-purple">{MOCK_USER.engagement_score}%</span>
              </div>
              <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                 <div className="h-full bg-brand-purple transition-all duration-1000" style={{ width: `${MOCK_USER.engagement_score}%` }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center group">
              <span className="text-sm font-bold text-slate-400 group-hover:text-brand-dark transition-colors">NPS Score</span>
              <div className="flex items-center gap-1.5 text-emerald-600 font-black bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                 <Target className="w-3.5 h-3.5" />
                 {MOCK_USER.nps_score}/10
              </div>
            </div>
            <div className="flex justify-between items-center group">
              <span className="text-sm font-bold text-slate-400 group-hover:text-brand-dark transition-colors">Customer Tenure</span>
              <span className="text-base font-black text-brand-dark">{MOCK_USER.tenure_months} Months</span>
            </div>
          </div>
          <div className="mt-12 p-6 bg-brand-purple/5 rounded-[32px] border border-brand-purple/10 flex items-center gap-4">
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <Zap className="w-6 h-6 text-brand-purple animate-pulse" />
             </div>
             <div className="flex-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Stripe Integration</p>
                <p className="text-xs font-black text-brand-purple">Behavior Data Synced</p>
             </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-10">
          {prediction ? (
            <>
              <div className="bg-brand-dark p-12 rounded-[56px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sparkles className="w-48 h-48 text-brand-purple" />
                </div>
                <div className="absolute top-0 right-0 p-8">
                  <span className="bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full backdrop-blur-xl border border-white/5">Predictor v1.0</span>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-12 mb-12 relative z-10">
                  <div className="relative w-48 h-48 group/circle">
                    <svg className="w-48 h-48 transform -rotate-90">
                      <circle cx="96" cy="96" r="84" stroke="rgba(255,255,255,0.05)" strokeWidth="18" fill="transparent" />
                      <circle 
                        cx="96" cy="96" r="84" 
                        stroke="#6B46C1" strokeWidth="18" 
                        fill="transparent" 
                        strokeDasharray={527.8}
                        strokeDashoffset={527.8 - (527.8 * prediction.likelihood) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-[1.5s] ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform group-hover/circle:scale-110">
                      <span className="text-6xl font-black text-white leading-none">{prediction.likelihood}%</span>
                      <span className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mt-2">Likelihood</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Prime Advocate</h2>
                    <p className="text-slate-400 text-lg leading-relaxed font-medium italic">
                      "{prediction.reasoning}"
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 hover:bg-white/10 transition-colors">
                    <p className="text-[10px] font-black text-indigo-400 mb-2 uppercase tracking-widest">Recommended Incentive</p>
                    <div className="flex items-baseline gap-2">
                       <span className="text-5xl font-black text-white">${prediction.suggested_reward}</span>
                       <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Cash Payout</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-4 font-bold uppercase tracking-tight">Optimized for SaaS Industry benchmarks</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 hover:bg-white/10 transition-colors">
                    <p className="text-[10px] font-black text-emerald-400 mb-2 uppercase tracking-widest">Activation Timing</p>
                    <p className="text-5xl font-black text-white">Critical</p>
                    <p className="text-xs text-slate-500 mt-4 font-bold uppercase tracking-tight">Deploy widget on current session end</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-12 rounded-[56px] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-center mb-10">
                   <div className="flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-brand-purple" />
                      <h3 className="text-2xl font-black text-brand-dark tracking-tight">Personalized Messaging</h3>
                   </div>
                   <span className="text-[10px] font-black text-brand-purple bg-brand-purple/5 px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-brand-purple/10">High Conversion Loop</span>
                </div>
                <div className="bg-slate-50 p-10 rounded-[40px] border-2 border-slate-100 relative group">
                  <p className="text-2xl text-slate-700 leading-relaxed font-semibold italic">"{prediction.suggested_message}"</p>
                  <button className="absolute bottom-6 right-6 p-4 bg-white text-slate-400 hover:text-brand-purple transition-all rounded-[24px] shadow-xl border border-slate-100 group-hover:scale-110 active:scale-95">
                    <ClipboardCheck className="w-6 h-6" />
                  </button>
                </div>
                <div className="mt-12 flex flex-col sm:flex-row gap-6">
                  <button className="bg-brand-purple text-white px-12 py-5 rounded-[28px] font-black text-xl shadow-2xl shadow-brand-purple/20 hover:scale-[1.02] transition-transform">Activate Message</button>
                  <button onClick={handlePredict} className="text-slate-400 font-black uppercase text-xs tracking-[0.2em] hover:text-brand-purple transition-colors flex items-center justify-center gap-2">
                    <RefreshCcw className="w-4 h-4" />
                    Regenerate Context
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white p-32 rounded-[64px] border-4 border-dashed border-slate-100 flex flex-col items-center justify-center text-center group">
              <div className="w-32 h-32 bg-slate-50 rounded-[48px] flex items-center justify-center mb-10 transition-transform group-hover:scale-110 duration-500">
                <Sparkles className="w-16 h-16 text-slate-200 group-hover:text-brand-purple group-hover:animate-pulse transition-colors" />
              </div>
              <h3 className="text-4xl font-black text-brand-dark mb-4 tracking-tight">Model Standing By</h3>
              <p className="text-slate-400 max-w-sm font-bold text-xl leading-relaxed">
                Refernity is ready to analyze your signals. Push the button to run the predictive engine.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
