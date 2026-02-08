import React from 'react';
import { Sparkles, Brain, MessageSquare, Layout, Edit3, BarChart3, Settings, MousePointer2, Check, ChevronRight, RotateCcw, Bold, Italic, Underline, Type as FontIcon, AlignLeft, AlignCenter, AlignJustify, MoreHorizontal } from 'lucide-react';

interface LandingPageProps {
  onEnterDashboard: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden pt-10">
      {/* Decorative Floating Shapes (Directly from Reference Image) */}
      <div className="absolute top-[40%] left-[6%] w-4 h-4 bg-amber-400 rotate-12 animate-float" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      <div className="absolute top-[22%] right-[16%] w-10 h-10 bg-brand-teal rounded-full opacity-60 animate-float" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)', borderRadius: '0 0 100px 100px', transform: 'rotate(-45deg)' }}></div>
      <div className="absolute top-[42%] right-[5%] w-3 h-3 bg-brand-pink rotate-45 animate-float"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-10 px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-2xl font-black tracking-tight text-brand-dark flex items-center">
              Refer<span className="text-brand-purple mx-0.5">•</span>nity
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-12 ml-20">
            {['Home', 'About', 'Products', 'Pricing', 'Contact'].map(link => (
              <a key={link} href="#" className="text-[14px] font-bold text-brand-dark/80 hover:text-brand-purple transition-colors">{link}</a>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <button onClick={onEnterDashboard} className="flex items-center gap-2 text-[14px] font-black text-brand-dark hover:text-brand-purple transition-colors">
              <span className="opacity-70 group-hover:opacity-100"><Settings className="w-4 h-4" /></span>
              Login
            </button>
            <button onClick={onEnterDashboard} className="bg-brand-dark text-white px-8 py-3.5 rounded-full font-black text-[13px] hover:bg-zinc-800 transition-all shadow-xl shadow-black/10 active:scale-95">
              Free Trials
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content (Matching Split Column Layout) */}
      <section className="pt-48 px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-24">
            <div className="relative">
              <h1 className="text-[64px] lg:text-[84px] font-extrabold leading-[1.05] tracking-tight text-brand-dark mb-10">
                Instant Growth <br /> with Free <span className="text-brand-purple">AI Referral</span>
              </h1>
              <div>
                <button onClick={onEnterDashboard} className="bg-brand-purple text-white px-10 py-5 rounded-2xl font-black text-lg transition-all btn-shadow-purple hover:scale-105 active:scale-95">
                  Generate Now
                </button>
              </div>
            </div>
            <div className="pt-6 lg:pl-20">
              <p className="text-brand-gray text-xl font-medium leading-relaxed max-w-md">
                Generate 80+ types of referral loops in seconds with the AI engine. Write unique & automated sharing experiences for blogs, articles, emails, & social media.
              </p>
            </div>
          </div>

          {/* High Fidelity Dashboard Mockup (The "Editor" Look) */}
          <div className="relative max-w-[1000px] mx-auto">
            <div className="bg-white rounded-[40px] border-[3px] border-brand-pink/20 dashboard-glow overflow-hidden relative z-10">
              
              {/* Toolbar Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-6">
                  <span className="text-[12px] font-bold text-slate-400">Page: Referral / Engine Predictor</span>
                  <div className="flex items-center gap-4 text-slate-400 border-l border-slate-100 pl-6">
                     <RotateCcw className="w-4 h-4" />
                     <div className="flex items-center gap-1 text-brand-dark font-black">
                       Normal Text <ChevronRight className="w-3 h-3 rotate-90" />
                     </div>
                     <div className="flex items-center gap-4 border-l border-slate-100 pl-4">
                       <Bold className="w-4 h-4 text-brand-dark" />
                       <Italic className="w-4 h-4" />
                       <Underline className="w-4 h-4" />
                       <FontIcon className="w-4 h-4" />
                     </div>
                     <div className="flex items-center gap-4 border-l border-slate-100 pl-4">
                       <AlignLeft className="w-4 h-4" />
                       <AlignCenter className="w-4 h-4" />
                       <AlignJustify className="w-4 h-4" />
                       <MoreHorizontal className="w-4 h-4" />
                     </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[12px] font-black text-brand-dark flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> Apply Style</span>
                  <div className="h-6 w-[1px] bg-slate-100"></div>
                  <div className="flex items-center gap-1 text-[12px] font-black text-slate-400">
                     <BarChart3 className="w-4 h-4" /> All Tools
                  </div>
                </div>
              </div>

              {/* Window Layout */}
              <div className="flex h-[600px]">
                {/* Left Mini Sidebar */}
                <div className="w-16 border-r border-slate-50 flex flex-col items-center py-8 gap-10 bg-slate-50/20">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-brand-dark"><Layout className="w-5 h-5" /></div>
                  <div className="w-10 h-10 text-brand-purple"><Edit3 className="w-5 h-5" /></div>
                  <div className="w-10 h-10 text-slate-300"><MessageSquare className="w-5 h-5" /></div>
                  <div className="w-10 h-10 text-slate-300"><BarChart3 className="w-5 h-5" /></div>
                  <div className="w-10 h-10 text-slate-300 mt-auto"><Settings className="w-5 h-5" /></div>
                </div>

                {/* Dashboard Inner Canvas */}
                <div className="flex-1 flex overflow-hidden">
                  {/* Filter Side Panel */}
                  <div className="w-[280px] bg-slate-50/30 p-8 border-r border-slate-50 relative">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative">
                      <h4 className="text-[15px] font-black text-brand-dark mb-6">Content Filter</h4>
                      <div className="space-y-6">
                        <div>
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Title</label>
                          <div className="bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 text-[12px] font-bold text-slate-300">About Growth Engine</div>
                        </div>
                        <div>
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Description</label>
                          <div className="bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 text-[11px] font-bold text-slate-300 min-h-[90px] leading-relaxed">
                            Write about viral loops & referral strategy for top advocates...
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Tag</label>
                          <div className="flex flex-wrap gap-2">
                            {['Automation', 'Strategy', 'Viral'].map(tag => (
                              <span key={tag} className="bg-slate-50 px-2.5 py-1 rounded-lg text-[9px] font-bold text-slate-400 border border-slate-100">{tag} x</span>
                            ))}
                          </div>
                        </div>
                        <button className="w-full bg-brand-purple/5 text-brand-purple border border-brand-purple/10 py-3.5 rounded-xl font-black text-[12px] flex items-center justify-center gap-2 mt-4 hover:bg-brand-purple hover:text-white transition-all">
                          Generate Now <Sparkles className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="absolute -right-12 top-24 bg-brand-pink text-white px-5 py-2 rounded-full text-[11px] font-black shadow-lg shadow-brand-pink/20">
                        Title here
                      </div>
                    </div>
                  </div>

                  {/* Main Preview Area */}
                  <div className="flex-1 p-16 relative">
                    <div className="absolute top-8 right-8 bg-brand-teal text-white px-4 py-1.5 rounded-full text-[11px] font-black flex items-center gap-2 shadow-lg shadow-brand-teal/10">
                      More options <ChevronRight className="w-3 h-3 rotate-90" />
                    </div>

                    <div className="flex items-center gap-2 text-brand-purple mb-4">
                      <Sparkles className="w-5 h-5 fill-current" />
                      <span className="text-lg font-black tracking-tight">Generate Referral Loop</span>
                    </div>

                    <h2 className="text-[44px] font-black text-brand-dark leading-[1.1] mb-8 tracking-tighter">
                      AI in Growth Open <br /> Create New Era.
                    </h2>

                    <div className="flex items-center gap-4 mb-12">
                      <p className="text-brand-gray text-lg font-medium leading-relaxed max-w-md">
                        Write about marketing & business strategy with automated referral loops.
                      </p>
                      <button className="bg-amber-400 text-brand-dark px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
                        Edit title
                      </button>
                    </div>

                    {/* Bottom Status Cards */}
                    <div className="grid grid-cols-3 gap-6 pt-16 mt-auto">
                      <div className="text-center group cursor-pointer">
                        <div className="mb-4 text-slate-300 group-hover:text-brand-purple transition-colors flex justify-center">
                          <Brain className="w-6 h-6" />
                        </div>
                        <p className="text-[11px] font-black text-brand-dark uppercase tracking-widest">Idea Generation</p>
                        <div className="h-0.5 w-16 mx-auto bg-amber-200 mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      </div>
                      <div className="text-center group cursor-pointer">
                        <div className="mb-4 text-slate-300 group-hover:text-brand-purple transition-colors flex justify-center">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <p className="text-[11px] font-black text-brand-dark uppercase tracking-widest">AI Magic</p>
                        <div className="h-0.5 w-16 mx-auto bg-brand-teal mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      </div>
                      <div className="text-center group cursor-pointer">
                        <div className="mb-4 text-slate-300 group-hover:text-brand-purple transition-colors flex justify-center">
                          <MessageSquare className="w-6 h-6" />
                        </div>
                        <p className="text-[11px] font-black text-brand-dark uppercase tracking-widest">Suggestion</p>
                        <div className="h-0.5 w-16 mx-auto bg-brand-pink mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-amber-400/20 via-brand-pink/20 to-brand-purple/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-40 px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[11px] font-black text-brand-gray uppercase tracking-[0.4em] mb-12">Trusted by 100+ growing startups</p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all">
             <div className="text-2xl font-black italic tracking-tighter">REFERRAL.IO</div>
             <div className="text-2xl font-black italic tracking-tighter">VOLT</div>
             <div className="text-2xl font-black italic tracking-tighter">NEXUS</div>
             <div className="text-2xl font-black italic tracking-tighter">QUANTUM</div>
          </div>
        </div>
      </section>

      {/* Floating Mouse Cursor Mockup */}
      <div className="fixed bottom-24 right-48 z-40 animate-bounce pointer-events-none opacity-50">
         <MousePointer2 className="w-6 h-6 text-brand-purple fill-brand-purple" />
      </div>

      {/* CTA Footer */}
      <footer className="py-32 px-12 border-t border-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-2xl font-black tracking-tighter text-brand-dark">
            Refer<span className="text-brand-purple">•</span>nity
          </div>
          <div className="flex gap-12 text-[13px] font-bold text-slate-400">
            <a href="#" className="hover:text-brand-dark transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Contact</a>
          </div>
          <div className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">
            © 2026 Refernity. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;