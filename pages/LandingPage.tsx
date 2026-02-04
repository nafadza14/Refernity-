
import React from 'react';
import { Sparkles, Brain, Rocket, Shield, ChevronRight } from 'lucide-react';

interface LandingPageProps {
  onEnterDashboard: () => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-12 rounded-[56px] border border-slate-100 hover:shadow-2xl hover:shadow-brand-purple/10 transition-all group">
    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-dark mb-10 group-hover:bg-brand-purple group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-brand-dark mb-4">{title}</h3>
    <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
  </div>
);

const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  return (
    <div className="min-h-screen relative font-sans">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-8 px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1 group cursor-pointer">
            <span className="text-2xl font-black tracking-tighter text-brand-dark">Refer</span>
            <div className="w-2.5 h-2.5 bg-brand-purple rounded-full"></div>
            <span className="text-2xl font-black tracking-tighter text-brand-dark">nity</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-12">
            {['Home', 'About', 'Products', 'Pricing', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[15px] font-bold text-brand-dark hover:text-brand-purple transition-colors">{link}</a>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <button onClick={onEnterDashboard} className="flex items-center gap-2 text-[15px] font-black text-brand-dark hover:text-brand-purple transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
              Login
            </button>
            <button onClick={onEnterDashboard} className="bg-brand-dark text-white px-8 py-3.5 rounded-full font-black text-[14px] hover:bg-zinc-800 transition-all shadow-xl shadow-black/10">
              Free Trials
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-56 px-10 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-6xl lg:text-[92px] font-black leading-[0.95] tracking-tight text-brand-dark mb-12">
              Turn Your <br /> Customers Into Your <br /> 
              <span className="text-brand-purple">Growth Team</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button onClick={onEnterDashboard} className="bg-brand-purple text-white px-10 py-5 rounded-[28px] font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-brand-purple/20 flex items-center gap-3">
                Get Started Now <ChevronRight className="w-6 h-6" />
              </button>
              <button onClick={onEnterDashboard} className="bg-white border-2 border-slate-100 text-brand-dark px-10 py-5 rounded-[28px] font-black text-xl hover:border-brand-purple transition-all flex items-center gap-3">
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-500">
                Joined by <span className="text-brand-dark font-black">2,000+</span> top-tier companies
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="bg-white p-10 rounded-[56px] shadow-2xl border border-slate-100 relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple font-black">SJ</div>
                  <div>
                    <p className="font-black text-brand-dark">Sarah Jenkins</p>
                    <p className="text-xs font-bold text-slate-400">Referral Engine Active</p>
                  </div>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">Live</div>
              </div>
              
              <div className="space-y-6">
                <div className="h-3 w-full bg-slate-50 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-purple w-4/5"></div>
                </div>
                <div className="flex justify-between text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  <span>Growth Progress</span>
                  <span className="text-brand-purple">80%</span>
                </div>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-[32px] text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total ROI</p>
                  <p className="text-2xl font-black text-brand-dark">+240%</p>
                </div>
                <div className="bg-brand-purple/5 p-6 rounded-[32px] text-center border border-brand-purple/10">
                  <p className="text-[10px] font-black text-brand-purple uppercase tracking-widest mb-1">New Leads</p>
                  <p className="text-2xl font-black text-brand-purple">1,240</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-200/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="products" className="py-40 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-brand-dark tracking-tight mb-6">Built for Scaling Teams</h2>
            <p className="text-slate-500 font-medium text-xl max-w-2xl mx-auto">Automate your entire referral lifecycle from discovery to payout with our enterprise-grade toolkit.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Brain className="w-8 h-8" />} 
              title="AI Predictions" 
              desc="Our engine predicts which customers are most likely to refer based on usage signals."
            />
            <FeatureCard 
              icon={<Rocket className="w-8 h-8" />} 
              title="Infinite Loops" 
              desc="Create self-sustaining growth engines that scale without manual intervention."
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8" />} 
              title="Fraud Protection" 
              desc="Enterprise-level security to prevent self-referrals and fraudulent payout requests."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-10">
        <div className="max-w-7xl mx-auto bg-brand-dark rounded-[80px] p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-purple/10"></div>
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-12 tracking-tight">Ready to explode <br /> your growth?</h2>
            <button onClick={onEnterDashboard} className="bg-white text-brand-dark px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl flex items-center gap-3 mx-auto">
              Start Free Trial <Sparkles className="w-6 h-6 text-brand-purple" />
            </button>
            <p className="mt-10 text-slate-400 font-bold uppercase text-[11px] tracking-widest">No credit card required • 14-day trial</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
