
import React, { useState } from 'react';

interface LandingPageProps {
  onEnterDashboard: () => void;
}

const Sparkles = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3 1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
);

const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  return (
    <div className="min-h-screen relative font-sans">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1 group cursor-pointer">
            <span className="text-2xl font-black tracking-tighter text-brand-dark">Refer</span>
            <div className="w-2.5 h-2.5 bg-brand-purple rounded-full"></div>
            <span className="text-2xl font-black tracking-tighter text-brand-dark">nity</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#home" className="text-[15px] font-bold text-brand-dark hover:text-brand-purple transition-colors">Home</a>
            <a href="#features" className="text-[15px] font-bold text-brand-dark hover:text-brand-purple transition-colors">Features</a>
            <a href="#pricing" className="text-[15px] font-bold text-brand-dark hover:text-brand-purple transition-colors">Pricing</a>
            <a href="#faq" className="text-[15px] font-bold text-brand-dark hover:text-brand-purple transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onEnterDashboard} className="flex items-center gap-2 text-[15px] font-bold text-brand-dark hover:text-brand-purple transition-colors">
              Login
            </button>
            <button onClick={onEnterDashboard} className="bg-black text-white px-8 py-3 rounded-full font-bold text-[14px] hover:bg-zinc-800 transition-all">
              Free Trials
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-48 px-10 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h1 className="text-6xl lg:text-[85px] font-black leading-[1] tracking-tight text-brand-dark mb-10">
              Turn Your <br /> Customers Into <br /> 
              Your <span className="text-brand-purple">Growth Team</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button onClick={onEnterDashboard} className="bg-brand-purple text-white px-10 py-4 rounded-2xl font-black text-[18px] btn-shadow-purple hover:scale-105 transition-all">
                Start Free Trial
              </button>
              <button className="bg-white text-brand-dark border-2 border-slate-100 px-10 py-4 rounded-2xl font-black text-[18px] hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                See Demo
              </button>
            </div>
            <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Trusted by 100+ growing businesses</p>
            <div className="flex items-center gap-8 grayscale opacity-50">
               <span className="font-black text-xl italic tracking-tighter">Stripe</span>
               <span className="font-black text-xl italic tracking-tighter">Notion</span>
               <span className="font-black text-xl italic tracking-tighter">Shopify</span>
               <span className="font-black text-xl italic tracking-tighter">Figma</span>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex items-start pt-6">
            <p className="text-lg text-brand-gray font-medium leading-relaxed max-w-md">
              Refernity's AI identifies which customers will refer friends—so you can focus rewards where they matter. Setup in 5 minutes.
            </p>
          </div>
        </div>

        {/* Mockup Preview - Identic to AiWriter UI */}
        <div className="mt-32 max-w-6xl mx-auto bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-4 border-brand-pink/10 overflow-hidden mb-32 transform hover:-translate-y-2 transition-transform duration-700">
           <div className="bg-white border-b border-slate-100 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4 text-[12px] font-bold text-slate-400">
                <span className="text-brand-dark">Page: Refernity / Growth Engine</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 text-xs">?</button>
                <button className="bg-slate-50 px-4 py-1.5 rounded-full text-[12px] font-bold text-brand-dark border border-slate-100">Share</button>
              </div>
           </div>
           
           <div className="flex">
              <div className="w-16 border-r border-slate-50 flex flex-col items-center py-8 gap-8">
                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7"/></svg></div>
                <div className="w-8 h-8 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple"><Sparkles size={16} /></div>
                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg></div>
              </div>

              <div className="flex-1">
                 <div className="h-14 border-b border-slate-50 px-8 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="text-[13px] font-bold text-brand-dark">Campaign Config</span>
                      <div className="flex items-center gap-4 text-slate-300">
                        <span className="font-bold">B</span>
                        <span className="italic">i</span>
                        <span className="underline">U</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="text-[13px] font-bold text-brand-dark flex items-center gap-2">
                        <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                        Apply Predictor
                      </button>
                    </div>
                 </div>

                 <div className="flex p-10 gap-10">
                    <div className="w-64 bg-slate-50/50 p-6 rounded-[2rem] border border-slate-100 relative">
                       <h4 className="text-[16px] font-black text-brand-dark mb-6">AI Advocate Filter</h4>
                       <div className="space-y-4">
                          <div className="space-y-1">
                            <label className="text-[12px] font-bold text-slate-400">Campaign Name</label>
                            <input disabled placeholder="Q1 Growth Push" className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2 text-sm" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[12px] font-bold text-slate-400">Incentive Tier</label>
                            <div className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2 text-sm">$25 per ref</div>
                          </div>
                       </div>
                       <div className="mt-8">
                          <button onClick={onEnterDashboard} className="w-full bg-brand-purple text-white py-3 rounded-2xl text-[13px] font-black flex items-center justify-center gap-2">
                            Deploy AI Engine 
                            <Sparkles size={14} />
                          </button>
                       </div>
                    </div>

                    <div className="flex-1">
                       <div className="w-10 h-10 bg-brand-purple/10 rounded-xl flex items-center justify-center text-brand-purple mb-6"><Sparkles size={20} /></div>
                       <h2 className="text-3xl font-black text-brand-dark mb-4">Prime Advocate Detected</h2>
                       <h1 className="text-6xl font-black text-brand-dark leading-[1.1] mb-6">
                         Sarah Jenkins <br /> 94% Likelihood.
                       </h1>
                       <p className="text-2xl text-brand-gray font-medium leading-relaxed mb-12">
                         Personalized message generated: "Hey! I've been using Refernity for 6 months to fuel our growth..."
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-10 bg-[#FFF5F7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-brand-dark mb-10 tracking-tight">
            Acquiring customers is <br /> getting expensive...
          </h2>
          <p className="text-2xl text-brand-gray font-medium leading-relaxed mb-12">
            Facebook ads cost 3x more than 3 years ago. SEO takes months. Cold email gets ignored.
            Your existing customers are your cheapest acquisition channel—but you need the right tool to activate them.
          </p>
          <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl">
            <p className="text-2xl text-brand-dark font-black italic">
              "20% of customers generate 80% of referrals. <br className="hidden md:block" /> 
              The question is: Which 20%?"
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-32 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-black text-brand-dark mb-24 tracking-tight text-center">
            Everything you need <br /> for viral growth
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 hover:shadow-2xl transition-all group">
               <div className="w-16 h-16 bg-brand-purple/10 rounded-3xl flex items-center justify-center text-brand-purple mb-8 group-hover:scale-110 transition-transform">
                  <BrainIcon />
               </div>
               <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tight">Don't guess. Predict.</h3>
               <p className="text-lg text-brand-gray font-medium leading-relaxed mb-8">
                 Our AI analyzes customer behavior (engagement, NPS, tenure) to predict who is most likely to refer friends. Focus your efforts on the top 20% advocates for 3x better results.
               </p>
               <ul className="space-y-3">
                 {["80% prediction accuracy", "Identifies power users automatically", "Suggests optimal reward amounts", "Generates personalized referral messages"].map(item => (
                   <li key={item} className="flex items-center gap-3 text-sm font-bold text-brand-dark">
                      <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                      {item}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 hover:shadow-2xl transition-all group">
               <div className="w-16 h-16 bg-brand-teal/10 rounded-3xl flex items-center justify-center text-brand-teal mb-8 group-hover:scale-110 transition-transform">
                  <RocketIcon />
               </div>
               <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tight">Setup in 5 minutes</h3>
               <p className="text-lg text-brand-gray font-medium leading-relaxed mb-8">
                 Install our widget with a single line of code. No developers needed, no complex configuration. Just copy, paste, and you're live.
               </p>
               <ul className="space-y-3">
                 {["One-line JavaScript snippet", "No coding required", "Works with any website", "Mobile-responsive design"].map(item => (
                   <li key={item} className="flex items-center gap-3 text-sm font-bold text-brand-dark">
                      <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
                      {item}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 hover:shadow-2xl transition-all group">
               <div className="w-16 h-16 bg-brand-pink/10 rounded-3xl flex items-center justify-center text-brand-pink mb-8 group-hover:scale-110 transition-transform">
                  <GiftIcon />
               </div>
               <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tight">Automatic Rewards</h3>
               <p className="text-lg text-brand-gray font-medium leading-relaxed mb-8">
                 Refernity automatically tracks referrals and sends rewards via Stripe, PayPal, or store credits. You focus on your business—we handle the rest.
               </p>
               <ul className="space-y-3">
                 {["Automatic payout via Stripe", "Multiple reward types", "$10 minimum threshold", "Multi-currency support"].map(item => (
                   <li key={item} className="flex items-center gap-3 text-sm font-bold text-brand-dark">
                      <div className="w-2 h-2 rounded-full bg-brand-pink"></div>
                      {item}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 hover:shadow-2xl transition-all group">
               <div className="w-16 h-16 bg-zinc-100 rounded-3xl flex items-center justify-center text-zinc-900 mb-8 group-hover:scale-110 transition-transform">
                  <ShieldIcon />
               </div>
               <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tight">Fraud Protection</h3>
               <p className="text-lg text-brand-gray font-medium leading-relaxed mb-8">
                 Our fraud detection prevents self-referrals, duplicate accounts, and gaming the system. Manual approval for large rewards adds extra security.
               </p>
               <ul className="space-y-3">
                 {["IP blocking", "Self-referral detection", "Duplicate account prevention", "Manual approval option"].map(item => (
                   <li key={item} className="flex items-center gap-3 text-sm font-bold text-brand-dark">
                      <div className="w-2 h-2 rounded-full bg-zinc-900"></div>
                      {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-10 bg-[#F0FDF4]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-brand-dark mb-24 tracking-tight">
            Launch your referral <br /> program in 3 steps
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: 'Step 1', title: 'Install', desc: 'Copy our one-line code and paste it in your website header. Takes 2 minutes.' },
              { step: 'Step 2', title: 'Configure', desc: 'Set your reward amount ($25-50 recommended). AI suggests optimal amounts.' },
              { step: 'Step 3', title: 'Launch', desc: 'Your program is live. AI starts identifying your top advocates immediately.' }
            ].map((s, idx) => (
              <div key={s.title} className="relative">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg text-brand-dark font-black text-2xl border-4 border-brand-teal/20">
                  {idx + 1}
                </div>
                <h3 className="text-3xl font-black text-brand-dark mb-4">{s.title}</h3>
                <p className="text-brand-gray font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-32 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-7xl font-black text-brand-dark mb-6 tracking-tight">AI that actually works</h2>
            <p className="text-2xl text-brand-gray font-medium">Not just buzzwords. Real predictions that drive results.</p>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-black text-brand-dark mb-6">Know who will refer</h3>
                <p className="text-xl text-brand-gray font-medium leading-relaxed mb-8">
                  Our machine learning model analyzes 20+ behavioral data points to predict referral likelihood with 80% accuracy.
                </p>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center text-brand-purple"><Sparkles size={20} /></div>
                     <span className="font-black text-brand-dark">Sarah Jenkins</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="text-2xl font-black text-brand-purple">94%</span>
                     <div className="w-12 h-3 bg-slate-100 rounded-full overflow-hidden">
                       <div className="w-[94%] h-full bg-brand-purple"></div>
                     </div>
                   </div>
                </div>
              </div>
              <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100">
                <h3 className="text-4xl font-black text-brand-dark mb-6">Optimize your incentives</h3>
                <p className="text-xl text-brand-gray font-medium leading-relaxed mb-8">
                  AI suggests the perfect reward amount based on your industry, customer value, and conversion data.
                </p>
                <div className="bg-brand-purple text-white p-8 rounded-3xl btn-shadow-purple font-black text-center italic">
                  "For SaaS businesses like yours, we recommend $25-50 rewards."
                </div>
              </div>
            </div>

            <div className="bg-brand-dark text-white p-12 lg:p-24 rounded-[4rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10"><Sparkles size={120} /></div>
              <div className="max-w-3xl relative z-10">
                <h3 className="text-4xl lg:text-5xl font-black mb-8">Personalized referral messages</h3>
                <p className="text-xl lg:text-2xl text-slate-400 font-medium leading-relaxed mb-12">
                  AI generates customized referral messages for each customer—improving click-through rates by 3x.
                </p>
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                   <p className="text-xl font-bold italic text-slate-200">
                     "Hey! I've been using Refernity for 6 months and it's saved me 10 hours/week. Want to try it? Get 20% off with my link."
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-10 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-7xl font-black text-brand-dark mb-6 tracking-tight">Simple pricing, no hidden fees</h2>
            <p className="text-2xl text-brand-gray font-medium mb-12">You keep 100% of your referral revenue. No transaction fees.</p>
            <div className="inline-flex items-center gap-4 bg-white p-2 rounded-full border border-slate-100 font-black text-sm uppercase tracking-widest shadow-sm">
              <span className="px-6 py-2 bg-brand-purple text-white rounded-full">Monthly</span>
              <span className="px-6 py-2 text-slate-400">Annual (Save 17%)</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Starter */}
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 flex flex-col">
              <h3 className="text-2xl font-black text-brand-dark mb-2">Starter</h3>
              <p className="text-brand-gray font-medium mb-8">Small businesses getting started</p>
              <div className="text-5xl font-black text-brand-dark mb-10">$49<span className="text-lg text-slate-400">/mo</span></div>
              <ul className="space-y-5 flex-1 mb-12">
                {["Up to 500 customers", "Basic referral tracking", "Email notifications", "Standard analytics", "Stripe integration"].map(f => (
                  <li key={f} className="flex items-center gap-3 font-bold text-brand-dark/70 text-sm">
                    <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={onEnterDashboard} className="w-full bg-slate-50 text-brand-dark py-4 rounded-2xl font-black hover:bg-slate-100 transition-colors">Start Free Trial</button>
            </div>

            {/* Growth */}
            <div className="bg-brand-dark text-white p-12 rounded-[4rem] border-4 border-brand-purple shadow-2xl scale-105 relative flex flex-col">
              <div className="absolute top-0 right-12 transform -translate-y-1/2 bg-brand-purple text-white px-5 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">⭐ POPULAR</div>
              <h3 className="text-2xl font-black mb-2">Growth</h3>
              <p className="text-slate-400 font-medium mb-8">Growing businesses ready to scale</p>
              <div className="text-5xl font-black mb-10">$79<span className="text-lg text-slate-500">/mo</span></div>
              <ul className="space-y-5 flex-1 mb-12">
                {["Unlimited customers", "AI-powered suggestions", "Advanced analytics", "Zapier integration", "Priority support", "Remove branding"].map(f => (
                  <li key={f} className="flex items-center gap-3 font-bold text-slate-200 text-sm">
                    <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={onEnterDashboard} className="w-full bg-brand-purple text-white py-4 rounded-2xl font-black btn-shadow-purple hover:scale-105 transition-all">Start Free Trial</button>
            </div>

            {/* Scale */}
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 flex flex-col">
              <h3 className="text-2xl font-black text-brand-dark mb-2">Scale</h3>
              <p className="text-brand-gray font-medium mb-8">Agencies and large teams</p>
              <div className="text-5xl font-black text-brand-dark mb-10">$149<span className="text-lg text-slate-400">/mo</span></div>
              <ul className="space-y-5 flex-1 mb-12">
                {["Everything in Growth", "White-label option", "API access", "Dedicated account manager", "Custom AI model training"].map(f => (
                  <li key={f} className="flex items-center gap-3 font-bold text-brand-dark/70 text-sm">
                    <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-black text-white py-4 rounded-2xl font-black hover:bg-zinc-800 transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-black text-brand-dark mb-24 tracking-tight text-center">Trusted by founders like you</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-xl relative">
              <div className="text-brand-purple text-6xl font-black opacity-20 absolute top-8 left-8">“</div>
              <p className="text-xl text-brand-dark font-medium leading-relaxed mb-8 relative z-10 italic">
                "Refernity's AI identified our top advocates—and we got 47 referrals in 30 days. Previously, we got 5/month. Game changer."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-purple rounded-2xl"></div>
                <div>
                  <p className="font-black text-brand-dark">Alex Chen</p>
                  <p className="text-sm font-bold text-brand-purple uppercase tracking-widest">Founder @ TaskFlow</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-50 font-black text-brand-dark text-center">
                 <span className="text-brand-teal">9x</span> improvement in referrals
              </div>
            </div>

            <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-xl relative">
              <div className="text-brand-purple text-6xl font-black opacity-20 absolute top-8 left-8">“</div>
              <p className="text-xl text-brand-dark font-medium leading-relaxed mb-8 relative z-10 italic">
                "Setup took literally 5 minutes. I'm not technical, but I had our referral program running the same day."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-pink rounded-2xl"></div>
                <div>
                  <p className="font-black text-brand-dark">Sarah Miller</p>
                  <p className="text-sm font-bold text-brand-pink uppercase tracking-widest">Founder @ GlowSkin</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-50 font-black text-brand-dark text-center">
                 <span className="text-brand-pink">30%</span> reduction in ad spend
              </div>
            </div>

            <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-xl relative">
              <div className="text-brand-purple text-6xl font-black opacity-20 absolute top-8 left-8">“</div>
              <p className="text-xl text-brand-dark font-medium leading-relaxed mb-8 relative z-10 italic">
                "We white-labeled Refernity as 'Agency Referrals' and added $3K/mo in new revenue. Our clients love it."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-teal rounded-2xl"></div>
                <div>
                  <p className="font-black text-brand-dark">Mike Johnson</p>
                  <p className="text-sm font-bold text-brand-teal uppercase tracking-widest">CEO @ GrowthLab</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-50 font-black text-brand-dark text-center">
                 <span className="text-brand-purple">$3K/mo</span> new revenue stream
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-10 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-brand-dark mb-24 tracking-tight text-center">Questions? Answers.</h2>
          <div className="space-y-8">
            {[
              { q: "How long does setup take?", a: "Literally 5 minutes. Copy our JavaScript snippet, paste it in your website header, and you're live. No developers needed." },
              { q: "Do you take a cut of referrals?", a: "No. Unlike competitors, we don't charge transaction fees. You keep 100% of your referral revenue." },
              { q: "Can I use this for e-commerce?", a: "Yes! Refernity works with Shopify, WooCommerce, and any platform that uses Stripe or Paddle." },
              { q: "What if I go over my customer limit?", a: "We'll gently remind you to upgrade. We never stop your referrals—you'll just get a friendly email." },
              { q: "How does the AI prediction work?", a: "Our AI analyzes customer behavior (login frequency, feature usage, NPS scores) to predict who is most likely to refer. Accuracy: 80%+." },
              { q: "Can I customize the widget design?", a: "Yes. You can customize colors, logo, position (bottom-right, modal, or inline), and messaging." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100">
                <h4 className="text-2xl font-black text-brand-dark mb-4">{item.q}</h4>
                <p className="text-brand-gray font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-10 bg-brand-purple relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-10"><Sparkles size={240} /></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 tracking-tight">
            Ready to turn customers <br /> into advocates?
          </h2>
          <p className="text-2xl text-indigo-100 font-medium mb-12">Join 100+ businesses using Refernity to fuel their growth.</p>
          <button onClick={onEnterDashboard} className="bg-white text-brand-purple px-12 py-5 rounded-[2rem] font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all mb-10">
            Start Free Trial
          </button>
          <div className="flex justify-center gap-10 text-white font-black text-[12px] uppercase tracking-widest opacity-80">
            <span>✓ Setup in 5 minutes</span>
            <span>✓ Cancel anytime</span>
            <span>✓ No hidden fees</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1 mb-8">
              <span className="text-2xl font-black tracking-tighter text-brand-dark">Refer</span>
              <div className="w-2.5 h-2.5 bg-brand-purple rounded-full"></div>
              <span className="text-2xl font-black tracking-tighter text-brand-dark">nity</span>
            </div>
            <p className="text-brand-gray font-medium mb-8">Made with ❤️ for founders who want to grow.</p>
          </div>
          
          <div>
            <h5 className="font-black text-brand-dark uppercase text-[12px] tracking-widest mb-8">Product</h5>
            <ul className="space-y-4 text-brand-gray font-bold text-sm">
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Features</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Integrations</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Security</li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-brand-dark uppercase text-[12px] tracking-widest mb-8">Resources</h5>
            <ul className="space-y-4 text-brand-gray font-bold text-sm">
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">API Reference</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Case Studies</li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-brand-dark uppercase text-[12px] tracking-widest mb-8">Company</h5>
            <ul className="space-y-4 text-brand-gray font-bold text-sm">
              <li className="hover:text-brand-purple cursor-pointer transition-colors">About</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Press Kit</li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-brand-dark uppercase text-[12px] tracking-widest mb-8">Legal</h5>
            <ul className="space-y-4 text-brand-gray font-bold text-sm">
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-slate-100 flex items-center justify-between font-bold text-brand-gray text-[12px]">
          <span>© 2026 Refernity. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="hover:text-brand-purple cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-brand-purple cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

const BrainIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
);

const RocketIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.585 15.585L2 22l6.415-6.415M16.34 8.944a1.5 1.5 0 00-2.122 0l-5.657 5.657a1.5 1.5 0 000 2.122l5.657-5.657a1.5 1.5 0 000-2.122zM12.678 12.678l-5.657 5.657M16.34 8.944a1.5 1.5 0 00-2.122 0L8.56 14.601a1.5 1.5 0 000 2.122l5.657-5.657a1.5 1.5 0 000-2.122z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 7l2 2m0 0l2-2m-2 2v6m-4-6l4 4m0 0l4-4m-4 4v6"/></svg>
);

const GiftIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12l-8 8-8-8M12 4v16"/></svg>
);

const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
