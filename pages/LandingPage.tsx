
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
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50/50 rounded-[100%] blur-3xl -z-10"></div>
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-purple animate-pulse"></span>
            <span className="text-xs font-bold text-brand-purple uppercase tracking-widest">v1.0 Launch: Predict Growth with AI</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark mb-6 leading-[1.1] tracking-tight">
            Infinite referrals,<br/><span className="text-brand-purple">infinite growth.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Refernity's AI identifies your top 20% advocates before they even share. Setup in 5 minutes with one line of code.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onEnterDashboard} className="w-full sm:w-auto bg-brand-purple hover:bg-[#5a3bb0] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-brand-purple/20">
              Start Free Trial
            </button>
            <button onClick={() => setActivePage('features')} className="w-full sm:w-auto bg-white border border-slate-200 text-brand-dark hover:bg-slate-50 px-8 py-4 rounded-full font-bold text-lg transition-all">
              See How It Works
            </button>
          </div>
          
          <div className="mt-20">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-12">Integrated with your favorite platforms</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 scale-110"><BrandLogos.Stripe /><span className="text-xl font-bold hidden md:inline text-brand-dark">Stripe</span></div>
              <div className="flex items-center gap-2 scale-110"><BrandLogos.Notion /><span className="text-xl font-bold hidden md:inline text-brand-dark">Notion</span></div>
              <div className="flex items-center gap-2 scale-110"><BrandLogos.Shopify /><span className="text-xl font-bold hidden md:inline text-brand-dark">Shopify</span></div>
              <div className="flex items-center gap-2 scale-110"><BrandLogos.Figma /><span className="text-xl font-bold hidden md:inline text-brand-dark">Figma</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Value Section */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
             <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Stop treatment every customer the same.</h2>
             <p className="text-slate-400 text-lg mb-10 leading-relaxed">
               Traditional referral software is rigid. Refernity uses behavioral AI to find the 20% of customers that drive 80% of viral growth.
             </p>
             <div className="grid grid-cols-2 gap-8">
                <div>
                   <h4 className="text-brand-purple text-3xl font-black mb-1">80%</h4>
                   <p className="text-sm font-bold text-slate-300">Prediction Accuracy</p>
                </div>
                <div>
                   <h4 className="text-brand-green text-3xl font-black mb-1">0%</h4>
                   <p className="text-sm font-bold text-slate-300">Transaction Fees</p>
                </div>
             </div>
          </div>
          <div className="bg-slate-800 p-8 rounded-[40px] border border-white/5 relative group">
             <div className="absolute -inset-4 bg-brand-purple/10 rounded-[48px] blur-2xl group-hover:bg-brand-purple/20 transition-all"></div>
             <div className="relative">
                <div className="flex items-center gap-3 mb-10">
                   <div className="w-12 h-12 rounded-2xl bg-brand-purple flex items-center justify-center font-bold text-white shadow-lg">R</div>
                   <div>
                      <h4 className="font-bold">Refernity AI Predictions</h4>
                      <p className="text-xs text-slate-500">Live Prediction Engine</p>
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-400">Daily Engagement</span>
                      <span className="text-brand-purple">High (92%)</span>
                   </div>
                   <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-purple w-[92%] rounded-full"></div>
                   </div>
                   <div className="flex justify-between items-center text-sm font-medium mt-6">
                      <span className="text-slate-400">Advocate Score</span>
                      <span className="text-brand-green">9.5/10</span>
                   </div>
                   <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-green w-[95%] rounded-full"></div>
                   </div>
                   <div className="mt-12 p-6 bg-brand-purple/10 rounded-2xl border border-brand-purple/20 text-center">
                      <p className="text-[10px] font-black uppercase tracking-widest text-brand-purple mb-2">Prediction Success</p>
                      <p className="text-5xl font-black text-white">96.8%</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderContentPage = (title: string, subtitle: string, children: React.ReactNode) => (
    <section className="pt-40 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tight">{title}</h1>
        <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-3xl">{subtitle}</p>
        <div className="prose prose-slate prose-lg max-w-none prose-headings:text-brand-dark prose-headings:font-extrabold prose-p:text-slate-600">
          {children}
        </div>
      </div>
    </section>
  );

  const getPageContent = () => {
    switch (activePage) {
      case 'home': return renderHome();
      case 'features': return renderContentPage(
        "Platform Features",
        "The complete AI growth engine for SaaS & E-commerce.",
        <div className="space-y-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-brand-purple transition-colors">
              <div className="w-14 h-14 bg-brand-purple rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg shadow-brand-purple/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Prediction</h3>
              <p className="text-slate-600">Analyze 20+ behavioral data points to predict who will share with 80% accuracy.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-brand-blue transition-colors">
              <div className="w-14 h-14 bg-brand-blue rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg shadow-brand-blue/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Rewards</h3>
              <p className="text-slate-600">AI-suggested reward amounts per industry to maximize ROI and referral volume.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-brand-green transition-colors">
              <div className="w-14 h-14 bg-brand-green rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg shadow-brand-green/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Fraud Protection</h3>
              <p className="text-slate-600">Built-in device fingerprinting and IP analysis to stop referral gaming instantly.</p>
            </div>
          </div>
          <div className="bg-brand-dark rounded-[40px] p-12 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 blur-[120px] rounded-full"></div>
             <h3 className="text-3xl font-black mb-8">One Snippet. Complete Automation.</h3>
             <p className="text-slate-400 mb-8 max-w-2xl leading-relaxed text-lg">Embed Refernity anywhere. Floating button, modal, or inline content. We handle tracking, attribution, and multi-currency payouts automatically.</p>
             <div className="flex flex-wrap gap-4">
                <span className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest text-brand-purple">Async Loading</span>
                <span className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest text-brand-blue">Mobile Responsive</span>
                <span className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest text-brand-green">Auto-Attribution</span>
             </div>
          </div>
        </div>
      );
      case 'pricing': return (
        <section className="pt-40 pb-24 px-6 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-black text-brand-dark mb-4 tracking-tight">Simple pricing, no hidden fees</h2>
            <p className="text-slate-500 text-xl">We charge a fixed subscription. 0% transaction fees. You keep all your growth.</p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
            <div className="p-10 bg-slate-50 border border-slate-200 rounded-[40px] flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-8">
                <span className="text-5xl font-black">$49</span><span className="text-slate-400 text-lg">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 text-slate-600 font-medium">
                <li>✓ Up to 500 customers</li>
                <li>✓ Basic referral tracking</li>
                <li>✓ Email notifications</li>
                <li>✓ Standard analytics</li>
                <li>✓ Stripe integration</li>
              </ul>
              <button onClick={onEnterDashboard} className="w-full bg-brand-dark text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors">Start Free Trial</button>
            </div>
            <div className="p-10 bg-brand-purple text-white rounded-[40px] border-4 border-[#825ce6] scale-105 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#825ce6] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <div className="mb-8">
                <span className="text-5xl font-black">$79</span><span className="text-indigo-200 text-lg">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 font-medium">
                <li>✓ Unlimited customers</li>
                <li>✓ AI-powered suggestions</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Zapier integration</li>
                <li>✓ Remove Refernity branding</li>
              </ul>
              <button onClick={onEnterDashboard} className="w-full bg-white text-brand-purple py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-xl">Start Free Trial</button>
            </div>
            <div className="p-10 bg-slate-50 border border-slate-200 rounded-[40px] flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Scale</h3>
              <div className="mb-8">
                <span className="text-5xl font-black">$149</span><span className="text-slate-400 text-lg">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 text-slate-600 font-medium">
                <li>✓ Everything in Growth</li>
                <li>✓ White-label option</li>
                <li>✓ API access</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Custom AI training</li>
              </ul>
              <button className="w-full bg-brand-dark text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors">Contact Sales</button>
            </div>
          </div>
          <p className="text-center mt-12 text-slate-400 font-bold">2 months free with annual billing (17% discount)</p>
        </section>
      );
      case 'integrations': return renderContentPage(
        "Integrations Library",
        "Refernity fits perfectly into your tech stack.",
        <div className="space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Stripe', logo: <BrandLogos.Stripe />, desc: 'Revenue attribution' },
              { name: 'Notion', logo: <BrandLogos.Notion />, desc: 'CRM sync' },
              { name: 'Shopify', logo: <BrandLogos.Shopify />, desc: 'Viral commerce' },
              { name: 'Figma', logo: <BrandLogos.Figma />, desc: 'Growth design' },
              { name: 'Zapier', label: 'Z', color: 'orange', desc: '5,000+ apps' },
              { name: 'WhatsApp', label: 'W', color: 'emerald', desc: 'Social sharing' },
              { name: 'Slack', label: 'S', color: 'purple', desc: 'Real-time alerts' },
              { name: 'HubSpot', label: 'H', color: 'orange', desc: 'Sync leads' }
            ].map(item => (
              <div key={item.name} className="p-8 bg-slate-50 border border-slate-200 rounded-[40px] flex flex-col items-center text-center hover:shadow-2xl hover:border-brand-purple transition-all group">
                <div className="w-20 h-20 bg-white rounded-3xl mb-6 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.logo ? item.logo : <span className={`text-3xl font-black text-${item.color}-600`}>{item.label}</span>}
                </div>
                <h4 className="font-bold text-brand-dark text-xl mb-2">{item.name}</h4>
                <p className="text-slate-400 text-xs font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
      case 'about': return renderContentPage(
        "About Refernity",
        "Engineering the future of organic growth.",
        <div className="space-y-10 text-slate-700 text-lg leading-relaxed">
           <p className="text-2xl font-medium leading-relaxed text-brand-dark">Founded in 2024, Refernity was born from a simple belief: your best marketing channel is already in your customer base.</p>
           <p>We built the world's first AI-powered referral engine to help founders stop burning cash on Facebook ads and start activating their most passionate advocates. Based in London and San Francisco, we serve over 100 world-class brands across SaaS and E-commerce.</p>
           <div className="grid md:grid-cols-3 gap-8 py-10 border-y border-slate-100 mt-10">
              <div className="text-center">
                 <h4 className="text-5xl font-black text-brand-purple mb-2">100+</h4>
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Active Brands</p>
              </div>
              <div className="text-center">
                 <h4 className="text-5xl font-black text-brand-purple mb-2">80%</h4>
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest">AI Accuracy</p>
              </div>
              <div className="text-center">
                 <h4 className="text-5xl font-black text-brand-purple mb-2">$12M</h4>
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Referral Revenue</p>
              </div>
           </div>
        </div>
      );
      case 'careers': return renderContentPage(
        "Join the Growth Team",
        "Help us build the growth engine for the next generation of founders.",
        <div className="space-y-8">
           {[
             { title: 'Senior AI/ML Engineer', dept: 'Engineering', loc: 'Remote' },
             { title: 'Lead Product Designer', dept: 'Design', loc: 'SF / London' },
             { title: 'Full Stack Engineer (React/Next)', dept: 'Engineering', loc: 'Remote' },
             { title: 'Head of Customer Success', dept: 'Growth', loc: 'New York' }
           ].map(job => (
             <div key={job.title} className="p-10 border border-slate-200 rounded-[40px] flex flex-col md:flex-row justify-between items-center group hover:border-brand-purple hover:shadow-2xl transition-all cursor-pointer">
                <div>
                   <h4 className="text-2xl font-bold text-brand-dark mb-1 group-hover:text-brand-purple transition-colors">{job.title}</h4>
                   <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">{job.dept} • {job.loc}</p>
                </div>
                <button className="mt-6 md:mt-0 bg-brand-dark text-white px-8 py-3 rounded-2xl font-bold group-hover:bg-brand-purple transition-colors">Apply Now</button>
             </div>
           ))}
        </div>
      );
      case 'docs':
      case 'api': return renderContentPage(
        "API & Documentation",
        "Build deep referral integrations with Refernity.",
        <div className="space-y-12">
          <div className="p-10 bg-slate-50 border border-slate-200 rounded-[40px]">
             <h3 className="text-2xl font-bold mb-6">Installation</h3>
             <p className="text-slate-500 mb-8">Add our script to your website header to activate tracking and the referral widget.</p>
             <div className="bg-brand-dark p-6 rounded-2xl font-mono text-sm text-indigo-400 overflow-x-auto">
                {`<script src="https://cdn.refernity.io/w.js" data-id="acme_123" async></script>`}
             </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             <div className="p-10 border border-slate-200 rounded-[40px]">
                <h4 className="text-xl font-bold mb-4">REST API Reference</h4>
                <p className="text-slate-500 mb-6">Programmatically manage advocates and rewards via our JSON API.</p>
                <button className="text-brand-purple font-black uppercase text-xs tracking-widest">View Endpoints →</button>
             </div>
             <div className="p-10 border border-slate-200 rounded-[40px]">
                <h4 className="text-xl font-bold mb-4">Webhooks</h4>
                <p className="text-slate-500 mb-6">Listen for conversion and payout events in real-time.</p>
                <button className="text-brand-purple font-black uppercase text-xs tracking-widest">Setup Guide →</button>
             </div>
          </div>
        </div>
      );
      case 'contact': return renderContentPage(
        "Get in Touch",
        "Our growth experts are here to help you scale.",
        <div className="grid lg:grid-cols-2 gap-20">
           <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500">First Name</label>
                    <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-brand-purple/10" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500">Last Name</label>
                    <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-brand-purple/10" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-black uppercase tracking-widest text-slate-500">Email</label>
                 <input type="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-brand-purple/10" />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-black uppercase tracking-widest text-slate-500">Message</label>
                 <textarea className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl h-40 outline-none focus:ring-4 focus:ring-brand-purple/10" placeholder="Tell us about your organic growth goals..."></textarea>
              </div>
              <button className="w-full bg-brand-purple text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-brand-purple/20">Send Message</button>
           </form>
           <div className="space-y-12">
              <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-200">
                 <h4 className="text-2xl font-black mb-4">Support</h4>
                 <p className="text-slate-600 mb-4">Need technical help with your integration?</p>
                 <p className="text-brand-purple font-bold text-lg">support@refernity.io</p>
              </div>
              <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-200">
                 <h4 className="text-2xl font-black mb-4">Sales</h4>
                 <p className="text-slate-600 mb-4">Enterprise pricing or custom licensing inquiries.</p>
                 <p className="text-brand-purple font-bold text-lg">sales@refernity.io</p>
              </div>
           </div>
        </div>
      );
      case 'security': return renderContentPage(
        "Security & Compliance",
        "Your data safety is our highest priority.",
        <div className="space-y-12">
           <div className="p-10 bg-brand-dark text-white rounded-[40px]">
              <h3 className="text-2xl font-bold mb-6">SOC2 & GDPR</h3>
              <p className="text-slate-400 mb-8 text-lg">Refernity is built on a strictly isolated multi-tenant architecture. We use AES-256 encryption at rest and TLS 1.3 in transit. Audit reports are available for enterprise customers upon request.</p>
           </div>
           <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 border border-slate-200 rounded-[40px]">
                 <h4 className="font-bold text-xl mb-4">Fraud Detection Shield</h4>
                 <p className="text-slate-500 leading-relaxed">Our real-time analysis identifies duplicate accounts, self-referrals, and IP-proxy gaming automatically, protecting your marketing budget.</p>
              </div>
              <div className="p-10 border border-slate-200 rounded-[40px]">
                 <h4 className="font-bold text-xl mb-4">Data Privacy</h4>
                 <p className="text-slate-500 leading-relaxed">We never sell your advocate data. All behavioral tracking is used strictly to power our AI prediction engine for your authorized campaigns.</p>
              </div>
           </div>
        </div>
      );
      case 'privacy':
      case 'terms':
      case 'cookie': return renderContentPage(
        "Legal Policies",
        "Transparent and fair terms for our partnership.",
        <div className="space-y-10 text-slate-600 text-lg">
           <section>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">1. Privacy First</h3>
              <p>We only collect data necessary to attribute referrals and distribute rewards. User privacy is a non-negotiable core value of our engineering team.</p>
           </section>
           <section>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">2. Cookie Policy</h3>
              <p>We use attribution cookies with a 30-day window to ensure correct reward distribution. These are strictly functional for the referral program.</p>
           </section>
        </div>
      );
      default: return renderHome();
    }
  };

  return (
    <div className="bg-white min-h-screen text-brand-dark overflow-x-hidden">
      {renderNavbar()}
      <main>
        {getPageContent()}
      </main>
      {renderFooter()}
    </div>
  );
};

export default LandingPage;
