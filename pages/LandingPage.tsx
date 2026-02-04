
import React, { useState, useEffect } from 'react';

interface LandingPageProps {
  onEnterDashboard: () => void;
}

type PublicPage = 'home' | 'features' | 'pricing' | 'integrations' | 'security' | 'blog' | 'docs' | 'api' | 'case-studies' | 'about' | 'careers' | 'contact' | 'press' | 'privacy' | 'terms' | 'cookie';

const BrandLogos = {
  Stripe: () => (
    <svg viewBox="0 0 60 25" className="h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M59.642 14.12c0-5.188-2.651-7.96-7.14-7.96-4.488 0-7.394 2.772-7.394 7.96 0 5.462 2.906 8.08 7.394 8.08 4.489 0 7.14-2.618 7.14-8.08zm-11.237 0c0-3.328 1.487-4.634 4.097-4.634 2.61 0 4.097 1.306 4.097 4.634 0 3.33-1.487 4.755-4.097 4.755-2.61 0-4.097-1.425-4.097-4.755zM31.25 14.12c0-5.188-2.651-7.96-7.139-7.96-4.489 0-7.395 2.772-7.395 7.96 0 5.462 2.906 8.08 7.395 8.08 4.488 0 7.14-2.618 7.14-8.08zm-11.237 0c0-3.328 1.487-4.634 4.097-4.634 2.61 0 4.097 1.306 4.097 4.634 0 3.33-1.487 4.755-4.097 4.755-2.61 0-4.097-1.425-4.097-4.755zM0 6.44h3.31l1.728 5.766 1.748-5.766h3.29l-3.376 10.42v6.62H3.344v-6.62L0 6.44zm11.237-4.634l3.364-.726v3.235H11.237v-2.51zm0 4.634h3.364v17.04H11.237V6.44zm23.364 0h3.364v3.313a4.673 4.673 0 013.91-3.313c2.75 0 4.63 1.326 4.63 4.46v12.58H43.24V11.282c0-1.874-.83-2.636-2.316-2.636-1.487 0-2.316.762-2.316 2.636v12.238h-4.007V6.44z"/>
    </svg>
  ),
  Notion: () => (
    <svg viewBox="0 0 24 24" className="h-7 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.02-.746c1.332-.093 1.543.023 1.87.537l1.798 2.824c.28.467.42.887.42 1.284v11.207c0 1.284-.63 2.03-2.031 2.03H4.483c-1.541 0-2.031-.77-2.031-2.03V7.056c0-.537.14-.981.396-1.378l1.611-1.47zM2.871 7.22v11.161c0 .887.421 1.167 1.144 1.167h15.972c.7 0 1.121-.28 1.121-1.167V8.575h-4.904c-.654 0-.818-.187-.958-.887l-.443-2.264c-.117-.584-.327-.818-.841-.77l-10.11.677c-.56.046-.723.186-.934.583L2.871 7.22zm2.149 1.19c.14-.14.444-.28.84-.28h1.261l3.526 6.303V8.13h1.868v9.151h-1.074l-4.436-7.844v7.844H5.02v-8.872z"/>
    </svg>
  ),
  Shopify: () => (
    <svg viewBox="0 0 24 24" className="h-7 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.347 6.446l-4.444-1.284-3.085-4.881a.501.501 0 00-.836 0L7.896 5.162 3.453 6.446a.501.501 0 00-.356.593l3.682 14.73a1.5 1.5 0 001.455 1.137h7.533a1.5 1.5 0 001.455-1.137l3.682-14.73a.501.501 0 00-.357-.593zM12 1.481l2.583 4.088-2.583-.746-2.583.746L12 1.481z"/>
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 38 57" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z" fill="#1ABCFE"/>
      <path d="M0 47.5A9.5 9.5 0 019.5 38H19v9.5a9.5 9.5 0 11-19 0z" fill="#0ACF83"/>
      <path d="M19 0v19h9.5a9.5 9.5 0 100-19H19z" fill="#FF7262"/>
      <path d="M0 9.5A9.5 9.5 0 009.5 19H19V0H9.5A9.5 9.5 0 000 9.5z" fill="#F24E1E"/>
      <path d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z" fill="#A259FF"/>
    </svg>
  )
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-brand-dark group-hover:text-brand-purple transition-colors">{question}</span>
        <svg 
          className={`w-6 h-6 text-slate-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-600 leading-relaxed font-medium">
          {answer}
        </div>
      )}
    </div>
  );
};

const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  const [activePage, setActivePage] = useState<PublicPage>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderNavbar = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => setActivePage('home')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-brand-purple/20 group-hover:scale-105 transition-transform">R</div>
          <span className="text-2xl font-bold text-brand-dark tracking-tight">Refernity</span>
        </button>
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => setActivePage('features')} className={`text-sm font-bold transition-colors ${activePage === 'features' ? 'text-brand-purple' : 'text-slate-600 hover:text-brand-purple'}`}>Features</button>
          <button onClick={() => setActivePage('pricing')} className={`text-sm font-bold transition-colors ${activePage === 'pricing' ? 'text-brand-purple' : 'text-slate-600 hover:text-brand-purple'}`}>Pricing</button>
          <button onClick={() => setActivePage('integrations')} className={`text-sm font-bold transition-colors ${activePage === 'integrations' ? 'text-brand-purple' : 'text-slate-600 hover:text-brand-purple'}`}>Integrations</button>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={onEnterDashboard} className="text-sm font-bold text-brand-dark hover:text-brand-purple">Login</button>
          <button onClick={onEnterDashboard} className="bg-brand-purple hover:bg-[#5a3bb0] text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-xl shadow-brand-purple/20">
            Start Free Trial
          </button>
        </div>
      </div>
    </nav>
  );

  const renderFooter = () => (
    <footer className="py-24 bg-brand-dark text-slate-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center font-bold text-white">R</div>
            <span className="text-2xl font-bold text-white tracking-tight">Refernity</span>
          </div>
          <p className="max-w-sm mb-10 leading-relaxed text-lg">
            AI-powered referral marketing for founders. Predict growth, automate rewards, and scale viral loops.
          </p>
          <div className="space-y-2">
            <p className="text-sm font-bold text-white">© 2026 Refernity. All rights reserved.</p>
            <p className="text-xs font-medium italic">"Infinite referrals, infinite growth"</p>
          </div>
        </div>
        <div>
          <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.2em]">Product</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><button onClick={() => setActivePage('features')} className="hover:text-white transition-colors">Features</button></li>
            <li><button onClick={() => setActivePage('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
            <li><button onClick={() => setActivePage('integrations')} className="hover:text-white transition-colors">Integrations</button></li>
            <li><button onClick={() => setActivePage('security')} className="hover:text-white transition-colors">Security</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.2em]">Resources</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><button onClick={() => setActivePage('blog')} className="hover:text-white transition-colors">Blog</button></li>
            <li><button onClick={() => setActivePage('docs')} className="hover:text-white transition-colors">Documentation</button></li>
            <li><button onClick={() => setActivePage('api')} className="hover:text-white transition-colors">API Reference</button></li>
            <li><button onClick={() => setActivePage('case-studies')} className="hover:text-white transition-colors">Case Studies</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.2em]">Company</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><button onClick={() => setActivePage('about')} className="hover:text-white transition-colors">About</button></li>
            <li><button onClick={() => setActivePage('careers')} className="hover:text-white transition-colors">Careers</button></li>
            <li><button onClick={() => setActivePage('contact')} className="hover:text-white transition-colors">Contact</button></li>
            <li><button onClick={() => setActivePage('press')} className="hover:text-white transition-colors">Press Kit</button></li>
          </ul>
        </div>
        <div className="col-start-1 md:col-start-3 lg:col-start-5">
          <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.2em]">Legal</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><button onClick={() => setActivePage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => setActivePage('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
            <li><button onClick={() => setActivePage('cookie')} className="hover:text-white transition-colors">Cookie Policy</button></li>
          </ul>
        </div>
      </div>
    </footer>
  );

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-purple/5 rounded-[100%] blur-[120px] -z-10"></div>
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full px-5 py-2 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-purple animate-pulse"></span>
            <span className="text-xs font-black text-brand-purple uppercase tracking-widest">v1.0 Launch: AI Growth Predictor</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-brand-dark mb-8 leading-[1.05] tracking-tight">
            Turn Your Customers Into Your <span className="text-brand-purple">Growth Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            Refernity's AI identifies which customers will refer friends—so you can focus rewards where they matter. Setup in 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={onEnterDashboard} className="w-full sm:w-auto bg-brand-purple hover:bg-[#5a3bb0] text-white px-10 py-5 rounded-full font-black text-xl transition-all shadow-2xl shadow-brand-purple/30">
              Start Free Trial
            </button>
            <button onClick={() => setActivePage('features')} className="w-full sm:w-auto bg-white border-2 border-slate-100 text-brand-dark hover:bg-slate-50 px-10 py-5 rounded-full font-black text-xl transition-all">
              See How It Works
            </button>
          </div>
          
          <div className="mt-24">
            <p className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-12">Trusted by 100+ growing businesses</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex items-center gap-2 scale-125"><BrandLogos.Stripe /><span className="text-2xl font-black hidden md:inline text-brand-dark">Stripe</span></div>
              <div className="flex items-center gap-2 scale-125"><BrandLogos.Notion /><span className="text-2xl font-black hidden md:inline text-brand-dark">Notion</span></div>
              <div className="flex items-center gap-2 scale-125"><BrandLogos.Shopify /><span className="text-2xl font-black hidden md:inline text-brand-dark">Shopify</span></div>
              <div className="flex items-center gap-2 scale-125"><BrandLogos.Figma /><span className="text-2xl font-black hidden md:inline text-brand-dark">Figma</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-brand-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-brand-purple font-black text-sm uppercase tracking-widest mb-6">The Hard Truth</div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Acquiring customers is getting expensive...</h2>
            <div className="space-y-6 text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
              <p>Facebook ads cost 3x more than 3 years ago. SEO takes months. Cold email gets ignored.</p>
              <p>Your existing customers are your cheapest acquisition channel—but you need the right tool to activate them.</p>
              <p className="text-white font-bold">Most referral programs fail because they treat everyone the same. We find the 20% that drive 80% of growth.</p>
            </div>
          </div>
          <div className="bg-slate-800 p-1 rounded-[48px] shadow-2xl overflow-hidden relative group">
             <div className="absolute inset-0 bg-brand-purple-gradient opacity-10 blur-3xl rounded-[48px]"></div>
             <div className="bg-slate-900 p-12 relative z-10">
                <div className="flex justify-between items-center mb-12">
                   <div className="h-6 w-32 bg-white/10 rounded-full"></div>
                   <div className="h-6 w-16 bg-brand-purple/30 rounded-full"></div>
                </div>
                <div className="space-y-8">
                   <div className="h-4 w-full bg-white/5 rounded-full"></div>
                   <div className="h-4 w-4/5 bg-white/5 rounded-full"></div>
                   <div className="h-4 w-5/6 bg-white/5 rounded-full"></div>
                   <div className="pt-12 flex flex-col items-center">
                      <div className="w-48 h-48 rounded-full border-[12px] border-brand-purple/10 flex flex-col items-center justify-center relative">
                         <div className="absolute inset-0 border-[12px] border-brand-purple rounded-full border-t-transparent border-l-transparent transition-all duration-1000 group-hover:rotate-180"></div>
                         <span className="text-5xl font-black text-white">80%</span>
                         <span className="text-[10px] uppercase tracking-widest text-brand-purple font-black mt-2">Prediction Accuracy</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tight">Everything you need for viral growth</h2>
            <p className="text-slate-500 text-xl font-medium">Simple setup, AI insights, and automated operations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-10 bg-slate-50 rounded-[40px] border-2 border-transparent hover:border-brand-purple transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-purple rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-brand-purple/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-4">AI Prediction</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Predict who will share with 80% accuracy based on behavior analytics.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[40px] border-2 border-transparent hover:border-brand-blue transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-brand-blue/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-4">5-Minute Setup</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Install with a single line of code. No developers needed, ever.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[40px] border-2 border-transparent hover:border-brand-green transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-brand-green/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-4">Auto Rewards</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Automatic payouts via Stripe or PayPal. 0% transaction fees.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[40px] border-2 border-transparent hover:border-indigo-900 transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-slate-900/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-4">Fraud Shield</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Stop self-referrals and duplicate accounts with advanced IP blocking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-purple-gradient opacity-50"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to turn customers into advocates?</h2>
          <p className="text-xl text-indigo-100 mb-12 font-medium">Join 100+ businesses using Refernity to fuel their organic growth.</p>
          <button onClick={onEnterDashboard} className="bg-white text-brand-purple px-12 py-5 rounded-full font-black text-2xl shadow-2xl hover:scale-105 transition-transform">
            Start Your 14-Day Free Trial
          </button>
          <div className="mt-8 flex justify-center gap-8 text-white font-bold text-sm uppercase tracking-widest opacity-80">
            <span>✓ Setup in 5 minutes</span>
            <span>✓ Cancel anytime</span>
            <span>✓ No hidden fees</span>
          </div>
        </div>
      </section>
    </>
  );

  const renderContentPage = (title: string, subtitle: string, children: React.ReactNode) => (
    <section className="pt-40 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-brand-dark mb-6 tracking-tight leading-tight">{title}</h1>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl font-medium">{subtitle}</p>
        </div>
        <div className="prose prose-slate prose-lg max-w-none prose-headings:text-brand-dark prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-brand-dark">
          {children}
        </div>
      </div>
    </section>
  );

  const getPageContent = () => {
    switch (activePage) {
      case 'home': return renderHome();
      case 'features': return renderContentPage(
        "Everything you need for viral growth",
        "Refernity provides the robust infrastructure modern founders need to scale word-of-mouth marketing.",
        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-50 rounded-[40px] border-2 border-slate-100">
              <h3 className="text-3xl font-black mb-6">AI-Powered Prediction</h3>
              <p className="text-lg">Our machine learning models analyze login frequency, feature usage, and NPS scores to predict referral likelihood with <strong>80% accuracy</strong>. We find your power users automatically.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[40px] border-2 border-slate-100">
              <h3 className="text-3xl font-black mb-6">Automatic Rewards</h3>
              <p className="text-lg">Set it and forget it. Refernity handles multi-currency payouts via Stripe Transfer, PayPal, or automated store credit injections. No manual work required.</p>
            </div>
          </div>
          <div className="bg-brand-dark text-white rounded-[48px] p-12 overflow-hidden relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 blur-[100px] rounded-full"></div>
             <h3 className="text-4xl font-black mb-8 leading-tight">Setup in 5 minutes,<br/>not 5 hours.</h3>
             <p className="text-slate-400 text-xl max-w-2xl mb-10 font-medium">One snippet. No code required. Works on any CMS, framework, or custom build.</p>
             <div className="bg-slate-900 p-6 rounded-2xl font-mono text-sm text-brand-purple inline-block border border-white/5">
                {`<script src="https://cdn.refernity.io/w.js" data-id="acme_123" async></script>`}
             </div>
          </div>
        </div>
      );
      case 'pricing': return (
        <section className="pt-40 pb-24 px-6 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-brand-dark mb-6 tracking-tight leading-none">Simple pricing,<br/><span className="text-brand-purple">no hidden fees.</span></h2>
            <p className="text-slate-500 text-2xl font-medium">You keep 100% of your referral revenue. We never charge transaction fees.</p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
            <div className="p-10 bg-slate-50 rounded-[48px] border-2 border-slate-100 flex flex-col group hover:border-slate-200 transition-all">
              <h3 className="text-2xl font-black text-slate-500 uppercase tracking-widest mb-4">Starter</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-7xl font-black text-brand-dark">$49</span><span className="text-slate-400 text-xl font-bold">/mo</span>
              </div>
              <ul className="space-y-6 mb-12 text-lg font-bold text-slate-600">
                <li>✓ Up to 500 customers</li>
                <li>✓ Basic referral tracking</li>
                <li>✓ Email notifications</li>
                <li>✓ Standard analytics</li>
                <li>✓ Stripe integration</li>
              </ul>
              <button onClick={onEnterDashboard} className="w-full bg-brand-dark text-white py-5 rounded-3xl font-black text-xl hover:bg-slate-800 transition-colors shadow-2xl">Start Free Trial</button>
            </div>
            <div className="p-12 bg-brand-purple text-white rounded-[48px] border-8 border-brand-purple/20 scale-105 shadow-2xl relative flex flex-col">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-brand-purple text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">Most Popular</div>
              <h3 className="text-2xl font-black uppercase tracking-widest mb-4 opacity-70">Growth</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-8xl font-black">$79</span><span className="text-indigo-200 text-2xl font-bold">/mo</span>
              </div>
              <ul className="space-y-6 mb-12 text-lg font-bold">
                <li>✓ Unlimited customers</li>
                <li>✓ AI-powered suggestions</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Zapier integration</li>
                <li>✓ Remove Refernity branding</li>
                <li>✓ WhatsApp sharing</li>
              </ul>
              <button onClick={onEnterDashboard} className="w-full bg-white text-brand-purple py-5 rounded-3xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">Start Free Trial</button>
            </div>
            <div className="p-10 bg-slate-50 rounded-[48px] border-2 border-slate-100 flex flex-col group hover:border-slate-200 transition-all">
              <h3 className="text-2xl font-black text-slate-500 uppercase tracking-widest mb-4">Scale</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-7xl font-black text-brand-dark">$149</span><span className="text-slate-400 text-xl font-bold">/mo</span>
              </div>
              <ul className="space-y-6 mb-12 text-lg font-bold text-slate-600">
                <li>✓ Everything in Growth</li>
                <li>✓ White-label option</li>
                <li>✓ Full API access</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Custom AI model training</li>
              </ul>
              <button className="w-full bg-brand-dark text-white py-5 rounded-3xl font-black text-xl hover:bg-slate-800 transition-colors shadow-2xl">Contact Sales</button>
            </div>
          </div>
          <div className="mt-20 text-center">
            <p className="text-slate-500 text-xl font-black">Save 17% with annual billing (2 months free)</p>
          </div>
        </section>
      );
      case 'integrations': return renderContentPage(
        "Connect your growth stack",
        "Refernity integrates with 5,000+ apps to automate your referral workflow from click to payout.",
        <div className="space-y-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { name: 'Stripe', logo: <BrandLogos.Stripe />, desc: 'Revenue attribution' },
              { name: 'Notion', logo: <BrandLogos.Notion />, desc: 'Advocate CRM' },
              { name: 'Shopify', logo: <BrandLogos.Shopify />, desc: 'Store sync' },
              { name: 'Figma', logo: <BrandLogos.Figma />, desc: 'Embed designs' },
              { name: 'WhatsApp', label: 'W', color: 'emerald', desc: 'Direct sharing' },
              { name: 'Zapier', label: 'Z', color: 'orange', desc: 'Workflow logic' },
              { name: 'Slack', label: 'S', color: 'purple', desc: 'Real-time alerts' },
              { name: 'HubSpot', label: 'H', color: 'orange', desc: 'Sync leads' }
            ].map(item => (
              <div key={item.name} className="p-10 bg-slate-50 border-2 border-transparent rounded-[48px] flex flex-col items-center text-center hover:shadow-2xl hover:border-brand-purple transition-all group">
                <div className="w-24 h-24 bg-white rounded-3xl mb-8 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.logo ? item.logo : <span className={`text-4xl font-black text-${item.color}-600`}>{item.label}</span>}
                </div>
                <h4 className="font-black text-brand-dark text-2xl mb-2">{item.name}</h4>
                <p className="text-slate-500 font-bold text-sm tracking-tight">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-12 bg-indigo-50 border-4 border-indigo-100 rounded-[56px] text-center">
             <h3 className="text-4xl font-black text-indigo-900 mb-6">Need a custom integration?</h3>
             <p className="text-xl text-indigo-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">Our robust REST API and Webhooks allow developers to build fully bespoke referral experiences and automated reward logic.</p>
             <button onClick={() => setActivePage('api')} className="bg-brand-purple text-white px-10 py-4 rounded-full font-black text-xl shadow-xl shadow-brand-purple/20">Read API Reference</button>
          </div>
        </div>
      );
      case 'about': return renderContentPage(
        "The story behind Refernity",
        "We are engineering the future of word-of-mouth marketing for the AI era.",
        <div className="space-y-12 text-slate-700 text-xl font-medium leading-relaxed">
          <p className="text-3xl font-black text-brand-dark leading-snug">Refernity was founded in 2024 to solve a simple problem: Customer Acquisition Cost (CAC) is rising too fast.</p>
          <p>We saw founders burning 50% of their revenue on Facebook ads while their best customers sat idle. We knew there was a better way. By leveraging behavioral AI, we help businesses identify their "True Advocates"—the top 20% who naturally want to share—and give them the tools to scale that loop infinitely.</p>
          <div className="grid md:grid-cols-3 gap-12 py-16 border-y-2 border-slate-100">
             <div className="text-center">
                <h4 className="text-7xl font-black text-brand-purple mb-4">100+</h4>
                <p className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Growing Brands</p>
             </div>
             <div className="text-center">
                <h4 className="text-7xl font-black text-brand-purple mb-4">80%</h4>
                <p className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">AI Prediction Accuracy</p>
             </div>
             <div className="text-center">
                <h4 className="text-7xl font-black text-brand-purple mb-4">5x</h4>
                <p className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Average ROI</p>
             </div>
          </div>
          <p className="pt-8">Based in London and San Francisco, we are a distributed team of engineers, data scientists, and growth designers dedicated to helping businesses grow organically.</p>
        </div>
      );
      case 'careers': return renderContentPage(
        "Join the Growth Team",
        "We're looking for world-class makers to build the next generation of referral infrastructure.",
        <div className="space-y-8">
           {[
             { title: 'Senior AI/ML Engineer', dept: 'Engineering', loc: 'Remote / London' },
             { title: 'Lead Product Designer', dept: 'Design', loc: 'SF / Remote' },
             { title: 'Full Stack Engineer (React/Go)', dept: 'Engineering', loc: 'Remote' },
             { title: 'Head of Growth', dept: 'Marketing', loc: 'New York / Hybrid' }
           ].map(job => (
             <div key={job.title} className="p-12 border-2 border-slate-100 rounded-[48px] flex flex-col md:flex-row justify-between items-center group hover:border-brand-purple hover:shadow-2xl hover:shadow-brand-purple/5 transition-all cursor-pointer">
                <div>
                   <h4 className="text-3xl font-black text-brand-dark mb-2 group-hover:text-brand-purple transition-colors">{job.title}</h4>
                   <p className="text-slate-500 font-black uppercase text-sm tracking-widest">{job.dept} • {job.loc}</p>
                </div>
                <button className="mt-8 md:mt-0 bg-brand-dark text-white px-10 py-4 rounded-[28px] font-black text-lg group-hover:bg-brand-purple transition-colors shadow-xl">Apply Now</button>
             </div>
           ))}
           <div className="text-center pt-16">
              <p className="text-slate-400 font-black text-lg">Don't see your role? Reach out anyway at <strong>careers@refernity.io</strong></p>
           </div>
        </div>
      );
      case 'security': return renderContentPage(
        "Security & Compliance",
        "Enterprise-grade protection for your growth data.",
        <div className="space-y-12">
           <div className="p-12 bg-brand-dark text-white rounded-[56px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/20 blur-[100px] rounded-full"></div>
              <h3 className="text-3xl font-black mb-8">SOC2 & GDPR</h3>
              <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-3xl font-medium">Refernity is built on strictly isolated multi-tenant architecture. We use AES-256 encryption at rest and TLS 1.3 in transit. Our security team performs weekly penetration testing to ensure zero vulnerabilities.</p>
              <div className="flex gap-4">
                 <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-white/5">GDPR Compliant</span>
                 <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-white/5">CCPA Ready</span>
                 <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-white/5">Data Encryption</span>
              </div>
           </div>
           <div className="grid md:grid-cols-2 gap-10">
              <div className="p-12 bg-slate-50 rounded-[48px] border-2 border-slate-100">
                 <h4 className="text-3xl font-black mb-6">Fraud Detection</h4>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed">Our advanced tracking identifies duplicate accounts, self-referrals via IP analysis, and suspicious browser fingerprinting patterns in real-time, protecting your reward budget.</p>
              </div>
              <div className="p-12 bg-slate-50 rounded-[48px] border-2 border-slate-100">
                 <h4 className="text-3xl font-black mb-6">Uptime SLA</h4>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed">We guarantee 99.9% uptime for our tracking snippet and widget delivery, ensuring you never miss a referral click during peak traffic.</p>
              </div>
           </div>
        </div>
      );
      case 'blog': return renderContentPage(
        "Growth Engineering Blog",
        "The latest insights on viral loops, AI prediction, and sustainable scale.",
        <div className="grid md:grid-cols-2 gap-16">
          {[
            { title: 'The 80/20 Rule in Referral Marketing', date: 'Feb 1, 2026', cat: 'Strategy', author: 'Stella' },
            { title: 'Why AI is the Future of Customer Acquisition', date: 'Jan 28, 2026', cat: 'AI & ML', author: 'Maria' },
            { title: 'Building a Viral Loop with One Line of Code', date: 'Jan 15, 2026', cat: 'Engineering', author: 'Julia' },
            { title: 'The Anatomy of a High-Converting Reward', date: 'Jan 10, 2026', cat: 'UX Design', author: 'Sarah' }
          ].map(post => (
            <div key={post.title} className="group cursor-pointer">
               <div className="aspect-[16/9] bg-slate-100 rounded-[56px] mb-8 border-2 border-slate-100 group-hover:border-brand-purple transition-all overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-purple opacity-0 group-hover:opacity-5 transition-opacity"></div>
               </div>
               <div className="flex items-center gap-4 text-brand-purple font-black text-xs uppercase tracking-widest mb-4">
                  <span>{post.cat}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-slate-400">{post.date}</span>
               </div>
               <h4 className="text-3xl font-black text-brand-dark leading-tight group-hover:text-brand-purple transition-colors mb-4">{post.title}</h4>
               <p className="text-slate-500 font-medium text-lg line-clamp-2">Discover how modern SaaS teams are leveraging predictive models to double their organic growth without increasing ad spend...</p>
            </div>
          ))}
        </div>
      );
      case 'case-studies': return renderContentPage(
        "Success Stories",
        "Results that speak for themselves. Average 5x ROI in 90 days.",
        <div className="space-y-16">
           <div className="p-12 bg-brand-purple text-white rounded-[64px] flex flex-col lg:flex-row gap-16 items-center shadow-2xl shadow-brand-purple/20">
              <div className="flex-1">
                 <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
                    <span className="text-xs font-black uppercase tracking-widest">SaaS Spotlight</span>
                 </div>
                 <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">TaskFlow scaled organic signups by 900%.</h3>
                 <p className="text-indigo-100 text-2xl mb-12 leading-relaxed italic font-medium">"Refernity's AI identified our top advocates—and we got 47 referrals in 30 days. Previously, we got 5/month. It's the most effective marketing tool we've ever used."</p>
                 <div className="grid grid-cols-2 gap-12 border-t-2 border-white/10 pt-10">
                    <div>
                       <h5 className="text-6xl font-black mb-1">9x</h5>
                       <p className="text-indigo-300 text-sm font-black uppercase tracking-widest">Referral Volume</p>
                    </div>
                    <div>
                       <h5 className="text-6xl font-black mb-1">$24k</h5>
                       <p className="text-indigo-300 text-sm font-black uppercase tracking-widest">New Monthly Revenue</p>
                    </div>
                 </div>
              </div>
              <div className="w-full lg:w-[450px] aspect-square bg-white/5 border border-white/10 rounded-[48px] backdrop-blur-3xl overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand-purple-gradient opacity-20"></div>
                 <div className="p-12 relative h-full flex flex-col justify-end">
                    <div className="w-20 h-20 bg-white rounded-3xl mb-6 shadow-2xl flex items-center justify-center font-black text-brand-purple text-3xl">TF</div>
                    <p className="font-black text-2xl">Alex Chen</p>
                    <p className="text-indigo-300 font-bold">Founder @ TaskFlow</p>
                 </div>
              </div>
           </div>
        </div>
      );
      case 'docs':
      case 'api': return renderContentPage(
        "Refernity Documentation",
        "Integrate predictive referrals into your application in minutes.",
        <div className="space-y-12 flex flex-col lg:flex-row gap-20">
           <aside className="w-full lg:w-72 space-y-6 shrink-0 pt-4">
              <div className="space-y-2">
                 <div className="font-black text-brand-dark uppercase text-[10px] tracking-widest mb-4">Quickstart</div>
                 <div className="text-brand-purple border-l-4 border-brand-purple pl-4 font-black">Installation</div>
                 <div className="text-slate-500 hover:text-brand-purple transition-colors pl-5 font-bold cursor-pointer">Widget Config</div>
                 <div className="text-slate-500 hover:text-brand-purple transition-colors pl-5 font-bold cursor-pointer">Attribution Loops</div>
              </div>
              <div className="space-y-2 pt-6">
                 <div className="font-black text-brand-dark uppercase text-[10px] tracking-widest mb-4">Core API</div>
                 <div className="text-slate-500 hover:text-brand-purple transition-colors pl-5 font-bold cursor-pointer">Referral Logic</div>
                 <div className="text-slate-500 hover:text-brand-purple transition-colors pl-5 font-bold cursor-pointer">AI Predictions</div>
                 <div className="text-slate-500 hover:text-brand-purple transition-colors pl-5 font-bold cursor-pointer">Reward Triggers</div>
              </div>
           </aside>
           <div className="flex-1 space-y-12">
              <div className="p-12 bg-slate-50 border-2 border-slate-100 rounded-[56px]">
                 <h3 className="text-4xl font-black mb-8 text-brand-dark">Install the snippet</h3>
                 <p className="text-xl text-slate-500 mb-10 font-medium">Add this code to your <code>&lt;head&gt;</code> to activate tracking and the AI referral widget instantly.</p>
                 <div className="bg-brand-dark p-8 rounded-[32px] font-mono text-sm text-brand-purple overflow-x-auto shadow-2xl">
                    {`<script src="https://cdn.refernity.io/w.js" data-id="acme_123" async></script>`}
                 </div>
              </div>
              <div>
                 <h3 className="text-4xl font-black mb-8 text-brand-dark">REST API Reference</h3>
                 <p className="text-xl text-slate-500 mb-10 font-medium">Programmatically manage advocates and trigger custom reward logic via our scalable JSON API.</p>
                 <div className="space-y-4">
                    <div className="p-6 bg-white border-2 border-slate-100 rounded-3xl flex items-center gap-6 group hover:border-brand-purple transition-colors">
                       <span className="bg-brand-green/10 text-brand-green text-[10px] font-black px-3 py-1.5 rounded-full">POST</span>
                       <code className="text-brand-dark font-black text-lg">/v1/referrals</code>
                       <span className="text-slate-400 text-sm font-bold ml-auto">Record new conversion</span>
                    </div>
                    <div className="p-6 bg-white border-2 border-slate-100 rounded-3xl flex items-center gap-6 group hover:border-brand-purple transition-colors">
                       <span className="bg-brand-blue/10 text-brand-blue text-[10px] font-black px-3 py-1.5 rounded-full">GET</span>
                       <code className="text-brand-dark font-black text-lg">/v1/ai/predict/:id</code>
                       <span className="text-slate-400 text-sm font-bold ml-auto">Fetch prediction score</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      );
      case 'contact': return renderContentPage(
        "Talk to Growth Experts",
        "We're here to help you turn your customers into your best marketing channel.",
        <div className="grid lg:grid-cols-2 gap-32">
           <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500">First Name</label>
                    <input type="text" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-brand-purple/10 transition-all" placeholder="Jane" />
                 </div>
                 <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500">Last Name</label>
                    <input type="text" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-brand-purple/10 transition-all" placeholder="Doe" />
                 </div>
              </div>
              <div className="space-y-3">
                 <label className="text-sm font-black uppercase tracking-widest text-slate-500">Work Email</label>
                 <input type="email" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-brand-purple/10 transition-all" placeholder="jane@growthflow.io" />
              </div>
              <div className="space-y-3">
                 <label className="text-sm font-black uppercase tracking-widest text-slate-500">How can we help?</label>
                 <textarea className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-3xl h-48 outline-none focus:ring-4 focus:ring-brand-purple/10 transition-all" placeholder="Tell us about your organic growth goals..."></textarea>
              </div>
              <button className="w-full bg-brand-purple text-white py-6 rounded-[32px] font-black text-2xl shadow-2xl shadow-brand-purple/30 hover:scale-[1.02] transition-transform">Send Message</button>
           </form>
           <div className="space-y-16">
              <div className="p-12 bg-slate-50 rounded-[56px] border-2 border-slate-100">
                 <h4 className="text-3xl font-black mb-6 text-brand-dark">Quick Help</h4>
                 <div className="space-y-6">
                    <div>
                       <p className="text-slate-400 font-black uppercase text-[10px] tracking-widest mb-2">Technical Support</p>
                       <p className="text-brand-purple font-black text-2xl">support@refernity.io</p>
                    </div>
                    <div>
                       <p className="text-slate-400 font-black uppercase text-[10px] tracking-widest mb-2">Sales Inquiries</p>
                       <p className="text-brand-purple font-black text-2xl">sales@refernity.io</p>
                    </div>
                 </div>
              </div>
              <div className="px-12">
                 <h4 className="text-3xl font-black mb-6 text-brand-dark">Headquarters</h4>
                 <p className="text-xl text-slate-500 font-medium leading-relaxed">
                    123 Innovation Loop<br />
                    San Francisco, CA 94103<br />
                    United States
                 </p>
              </div>
           </div>
        </div>
      );
      case 'press': return renderContentPage(
        "Refernity Press Kit",
        "Official brand assets and company bio for media inquiries.",
        <div className="space-y-12">
           <div className="grid md:grid-cols-2 gap-10">
              <div className="p-12 bg-slate-50 border-2 border-slate-100 rounded-[56px] flex flex-col items-center text-center group hover:border-brand-purple transition-all">
                 <div className="w-24 h-24 bg-white rounded-3xl mb-8 shadow-xl flex items-center justify-center font-black text-brand-purple text-4xl group-hover:scale-110 transition-transform">R</div>
                 <h4 className="text-3xl font-black mb-4">Logo Package</h4>
                 <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">High resolution PNG, SVG, and EPS logos in all brand colors.</p>
                 <button className="text-brand-purple font-black text-xl hover:underline">Download ZIP (12MB) ↓</button>
              </div>
              <div className="p-12 bg-slate-50 border-2 border-slate-100 rounded-[56px] flex flex-col items-center text-center group hover:border-brand-purple transition-all">
                 <div className="w-24 h-24 bg-white rounded-3xl mb-8 shadow-xl flex items-center justify-center font-black text-brand-purple text-4xl group-hover:scale-110 transition-transform">?</div>
                 <h4 className="text-3xl font-black mb-4">Fact Sheet</h4>
                 <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">Key company milestones, founder bios, and metrics summary.</p>
                 <button className="text-brand-purple font-black text-xl hover:underline">Download PDF (2MB) ↓</button>
              </div>
           </div>
        </div>
      );
      case 'privacy':
      case 'terms':
      case 'cookie': return renderContentPage(
        "Legal Center",
        "We protect your data and operate with radical transparency.",
        <div className="space-y-12 text-slate-600 text-xl font-medium leading-relaxed">
           <section>
              <h3 className="text-4xl font-black mb-6 text-brand-dark">1. Data Sovereignty</h3>
              <p>We only collect behavioral data required to train our predictive models and attribute rewards correctly. We never sell your advocate data to third-party ad networks or brokers. Your data is yours.</p>
           </section>
           <section>
              <h3 className="text-4xl font-black mb-6 text-brand-dark">2. Cookie Policy</h3>
              <p>We use functional attribution cookies with a 30-day window. These are essential for the operation of the referral engine. We do not use cross-site tracking pixels or invasive advertising cookies.</p>
           </section>
           <section>
              <h3 className="text-4xl font-black mb-6 text-brand-dark">3. Responsible AI</h3>
              <p>Our AI is trained on anonymized behavioral patterns. We do not use PII to train global models, ensuring your customer data remains private and protected within your instance.</p>
           </section>
        </div>
      );
      default: return renderHome();
    }
  };

  return (
    <div className="bg-white min-h-screen text-brand-dark font-sans selection:bg-brand-purple selection:text-white">
      {renderNavbar()}
      <main>
        {getPageContent()}
      </main>
      <section className="bg-white py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-4">Questions? Answers.</h2>
          </div>
          <div className="space-y-2">
            <FAQItem question="How long does setup take?" answer="Literally 5 minutes. Copy our JavaScript snippet, paste it in your website header, and you're live. No developers needed." />
            <FAQItem question="Do you take a cut of referrals?" answer="No. Unlike competitors, we don't charge transaction fees. You keep 100% of your referral revenue." />
            <FAQItem question="Can I use this for e-commerce?" answer="Yes! Refernity works with Shopify, WooCommerce, and any platform that uses Stripe or Paddle." />
            <FAQItem question="How does the AI prediction work?" answer="Our AI analyzes customer behavior (login frequency, feature usage, NPS scores) to predict who is most likely to refer. Accuracy: 80%." />
            <FAQItem question="Is there a free trial?" answer="Yes! 14-day free trial on all plans. No credit card required to start." />
          </div>
        </div>
      </section>
      {renderFooter()}
    </div>
  );
};

export default LandingPage;
