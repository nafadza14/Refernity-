
import React, { useState } from 'react';
import { MOCK_USER } from '../constants';
import { AIPrediction } from '../types';
import { getAIPrediction } from '../services/geminiService';

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
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI Predictive Insights</h1>
          <p className="text-slate-500 font-medium">Predicting who will share with 80% accuracy.</p>
        </div>
        <button 
          onClick={handlePredict}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-2 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-100"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing behavior...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Predict Likelihood
            </>
          )}
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm h-fit">
          <h3 className="font-bold text-slate-800 mb-6 uppercase text-xs tracking-widest">Customer Profile Data</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-50">
              <span className="text-sm font-medium text-slate-500">Name</span>
              <span className="text-sm font-bold text-slate-900">{MOCK_USER.name}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-50">
              <span className="text-sm font-medium text-slate-500">Engagement</span>
              <span className={`text-sm font-bold ${MOCK_USER.engagement_score > 80 ? 'text-indigo-600' : 'text-slate-900'}`}>
                {MOCK_USER.engagement_score}%
              </span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-50">
              <span className="text-sm font-medium text-slate-500">NPS Score</span>
              <span className="text-sm font-bold text-emerald-600">{MOCK_USER.nps_score}/10</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-50">
              <span className="text-sm font-medium text-slate-500">Tenure</span>
              <span className="text-sm font-bold text-slate-900">{MOCK_USER.tenure_months} Months</span>
            </div>
          </div>
          <div className="mt-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
             <p className="text-xs font-bold text-indigo-600">Syncing with Stripe Live...</p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          {prediction ? (
            <>
              <div className="bg-slate-900 p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6">
                  <span className="bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5">Refernity Model v1.0</span>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
                  <div className="relative w-40 h-40">
                    <svg className="w-40 h-40 transform -rotate-90">
                      <circle cx="80" cy="80" r="70" stroke="rgba(255,255,255,0.05)" strokeWidth="16" fill="transparent" />
                      <circle 
                        cx="80" cy="80" r="70" 
                        stroke="#4f46e5" strokeWidth="16" 
                        fill="transparent" 
                        strokeDasharray={439.8}
                        strokeDashoffset={439.8 - (439.8 * prediction.likelihood) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black text-white">{prediction.likelihood}%</span>
                      <span className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest mt-1">Likelihood</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-black text-white mb-3">Top Advocate Candidate</h2>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-md italic">
                      "{prediction.reasoning}"
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <p className="text-[10px] font-black text-indigo-400 mb-2 uppercase tracking-widest">Suggested Reward</p>
                    <p className="text-3xl font-black text-white">${prediction.suggested_reward}</p>
                    <p className="text-xs text-slate-500 mt-2 font-medium">Optimal for your industry benchmark</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <p className="text-[10px] font-black text-emerald-400 mb-2 uppercase tracking-widest">Best Timing</p>
                    <p className="text-3xl font-black text-white">Immediate</p>
                    <p className="text-xs text-slate-500 mt-2 font-medium">Trigger widget on next login session</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-slate-900">AI Message Generation</h3>
                   <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full uppercase tracking-widest">High Conversion</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative group">
                  <p className="text-lg text-slate-700 leading-relaxed font-medium italic">"{prediction.suggested_message}"</p>
                  <button className="absolute bottom-4 right-4 p-3 bg-white text-slate-400 hover:text-indigo-600 transition-all rounded-xl shadow-sm border border-slate-100 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
                <div className="mt-8 flex gap-4">
                  <button className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:scale-105 transition-transform">Use Message</button>
                  <button onClick={handlePredict} className="text-slate-600 font-bold hover:text-indigo-600 transition-colors">Regenerate Variation</button>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white p-20 rounded-[48px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Model Idle</h3>
              <p className="text-slate-500 max-w-sm font-medium leading-relaxed">
                Refernity is ready to analyze your advocate base. Run the engine to see predictive likelihood scores.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
