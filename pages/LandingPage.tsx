
import React, { useState, useEffect } from 'react';

interface LandingPageProps {
  onEnterDashboard: () => void;
}

type PublicPage = 'home' | 'features' | 'pricing' | 'integrations';

const BrandLogos = {
  Stripe: () => (
    <svg viewBox="0 0 60 25" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M59.642 14.12c0-5.188-2.651-7.96-7.14-7.96-4.488 0-7.394 2.772-7.394 7.96 0 5.462 2.906 8.08 7.394 8.08 4.489 0 7.14-2.618 7.14-8.08zm-11.237 0c0-3.328 1.487-4.634 4.097-4.634 2.61 0 4.097 1.306 4.097 4.634 0 3.33-1.487 4.755-4.097 4.755-2.61 0-4.097-1.425-4.097-4.755zM31.25 14.12c0-5.188-2.651-7.96-7.139-7.96-4.489 0-7.395 2.772-7.395 7.96 0 5.462 2.906 8.08 7.395 8.08 4.488 0 7.14-2.618 7.14-8.08zm-11.237 0c0-3.328 1.487-4.634 4.097-4.634 2.61 0 4.097 1.306 4.097 4.634 0 3.33-1.487 4.755-4.097 4.755-2.61 0-4.097-1.425-4.097-4.755zM0 6.44h3.31l1.728 5.766 1.748-5.766h3.29l-3.376 10.42v6.62H3.344v-6.62L0 6.44zm11.237-4.634l3.364-.726v3.235H11.237v-2.51zm0 4.634h3.364v17.04H11.237V6.44zm23.364 0h3.364v3.313a4.673 4.673 0 013.91-3.313c2.75 0 4.63 1.326 4.63 4.46v12.58H43.24V11.282c0-1.874-.83-2.636-2.316-2.636-1.487 0-2.316.762-2.316 2.636v12.238h-4.007V6.44z"/>
    </svg>
  ),
  Notion: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.02-.746c1.332-.093 1.543.023 1.87.537l1.798 2.824c.28.467.42.887.42 1.284v11.207c0 1.284-.63 2.03-2.031 2.03H4.483c-1.541 0-2.031-.77-2.031-2.03V7.056c0-.537.14-.981.396-1.378l1.611-1.47zM2.871 7.22v11.161c0 .887.421 1.167 1.144 1.167h15.972c.7 0 1.121-.28 1.121-1.167V8.575h-4.904c-.654 0-.818-.187-.958-.887l-.443-2.264c-.117-.584-.327-.818-.841-.77l-10.11.677c-.56.046-.723.186-.934.583L2.871 7.22zm2.149 1.19c.14-.14.444-.28.84-.28h1.261l3.526 6.303V8.13h1.868v9.151h-1.074l-4.436-7.844v7.844H5.02v-8.872z"/>
    </svg>
  ),
  Shopify: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.347 6.446l-4.444-1.284-3.085-4.881a.501.501 0 00-.836 0L7.896 5.162 3.453 6.446a.501.501 0 00-.356.593l3.682 14.73a1.5 1.5 0 001.455 1.137h7.533a1.5 1.5 0 001.455-1.137l3.682-14.73a.501.501 0 00-.357-.593zM12 1.481l2.583 4.088-2.583-.746-2.583.746L12 1.481z"/>
    </svg>
  )
};

const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  const [activePage, setActivePage] = useState<PublicPage>('home');

  return (
    <div className="bg-white min-h-screen text-brand-dark selection:bg-brand-purple selection:text-white">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center font-bold text-white text-xl">R</div>
            <span className="text-2xl font-black tracking-tight">Refernity</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <button className="text-sm font-bold text-slate-600 hover:text-brand-purple transition-colors">Features</button>
            <button className="text-sm font-bold text-slate-600 hover:text-brand-purple transition-colors">Pricing</button>
            <button className="text-sm font-bold text-slate-600 hover:text-brand-purple transition-colors">Integrations</button>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onEnterDashboard} className="text-sm font-bold hover:text-brand-purple transition-colors">Login</button>
            <button onClick={onEnterDashboard} className="bg-brand-purple hover:bg-[#5a3bb0] text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-brand-purple/20">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full px-5 py-2 mb-10">
            <span className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></span>
            <span className="text-xs font-black text-brand-purple uppercase tracking-widest">v1.0 AI Growth Predictor</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            Turn Your Customers Into Your <span className="text-brand-purple">Growth Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-14 leading-relaxed max-w-3xl mx-auto font-medium">
            Predict who will share with 80% accuracy. Refernity automates your referral loop so you can focus on building.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={onEnterDashboard} className="w-full sm:w-auto bg-brand-purple hover:bg-[#5a3bb0] text-white px-10 py-5 rounded-full font-black text-xl transition-all shadow-2xl shadow-brand-purple/30 active:scale-95">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto bg-white border-2 border-slate-100 text-brand-dark hover:bg-slate-50 px-10 py-5 rounded-full font-black text-xl transition-all">
              See How It Works
            </button>
          </div>

          <div className="mt-28">
            <p className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-12">Trusted by the best builders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
              <div className="h-6 w-24"><BrandLogos.Stripe /></div>
              <div className="h-7 w-24"><BrandLogos.Notion /></div>
              <div className="h-7 w-28"><BrandLogos.Shopify /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'AI Prediction', desc: 'Find your true advocates before they even send a link.', color: 'purple' },
              { title: 'Auto Rewards', desc: 'Instant payouts via Stripe Connect or Store Credit.', color: 'blue' },
              { title: 'Fraud Protection', desc: 'Advanced IP analysis stops self-referrals in real-time.', color: 'green' }
            ].map(f => (
              <div key={f.title} className="bg-white p-12 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-brand-${f.color} rounded-2xl mb-8 flex items-center justify-center text-white font-bold text-2xl`}>
                  {f.title[0]}
                </div>
                <h3 className="text-2xl font-black mb-4">{f.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-purple text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-10">Scale your viral loop today.</h2>
          <button onClick={onEnterDashboard} className="bg-white text-brand-purple px-12 py-5 rounded-full font-black text-2xl shadow-2xl active:scale-95 transition-transform">
            Start Your 14-Day Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
