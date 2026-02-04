
import React from 'react';
import { Sparkles, Brain, Rocket, Shield, ChevronRight, Layout, Edit3, MessageSquare, BarChart3, Settings, MousePointer2, HelpCircle, Share2, Check } from 'lucide-react';

interface LandingPageProps {
  onEnterDashboard: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-20 right-[15%] w-4 h-4 bg-brand-teal rounded-full rotate-45 blur-[1px]"></div>
      <div className="absolute top-[40%] left-[5%] w-3 h-3 bg-amber-400 transform rotate-12"></div>
      <div className="absolute top-[45%] right-[8%] w-3 h-3 bg-brand-pink transform rotate-45"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-10 px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-2xl font-black tracking-tighter text-brand-dark flex items-center">
              Refer<span className="text-brand-purple mx-0.5">•</span>nity
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-12">
            {['Home', 'About', 'Products', 'Pricing', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[14px] font-bold text-brand-dark hover:text-brand-purple transition-colors">{link}</a>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <button onClick={onEnterDashboard} className="flex items-center gap-2 text-[14px] font-black text-brand-dark hover:text-brand-purple transition-colors">
              <span className="opacity-70 group-hover:opacity-100"><Settings className="w-4 h-4" /></span>
              Login
            </button>
            <button onClick={onEnterDashboard} className="bg-brand-dark text-white px-8 py-3.5 rounded-full font-black text-[13px] hover:bg-zinc-800 transition-all shadow-xl shadow-black/20">
              Free Trials
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="pt-48 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-24">
            <div className="relative">
              <h1 className="text-[72px] lg:text-[88px] font-black leading-[1] tracking-tight text-brand-dark">
                Instant Growth <br /> with Free <span className="text-brand-purple">AI Referral</span>
              </h1>
              <div className="mt-12">
                <button onClick={onEnterDashboard} className="bg-brand-purple text-white px-10 py-5 rounded-2xl font-black text-lg transition-all btn-shadow-purple hover:scale-105 active:scale-95">
                  Generate Now
                </button>
              </div>
            </div>
            <div className="pt-6">
              <p className="text-brand-gray text-xl font-medium leading-relaxed max-w-md">
                Generate 80+ types of referral loops in seconds with the AI Predictor. Identify your best advocates and create unique sharing experiences for your customers.
              </p>
            </div>
          </div>

          {/* Product Mockup Container */}
          <div className="relative max-w-6xl mx-auto group">
            <div className="bg-white rounded-[48px] border-[1px] border-slate-200 dashboard-glow overflow-hidden relative z-10 transition-transform duration-700 hover:-translate-y-4">
              {/* Fake Window Header */}
              <div className="px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold text-brand-dark">Page: Dashboard / Campaign Builder</span>
                </div>
                <div className="flex items-center gap-4">
                  <HelpCircle className="w-4 h-4 text-slate-300" />
                  <button className="flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-lg text-[11px] font-black text-brand-dark border border-slate-100">
                    <Share2 className="w-3 h-3" /> Share
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="flex h-[700px]">
                {/* Internal Sidebar */}
                <div className="w-20 border-r border-slate-50 flex flex-col items-center py-8 gap-10 bg-slate-50/30">
                  <div className="w-10 h-10 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400"><Layout className="w-5 h-5" /></div>
                  <div className="w-10 h-10 text-brand-purple"><Edit3 className="w-6 h-6" /></div>
                  <div className="w-10 h-10 text-slate-300"><MessageSquare className="w-6 h-6" /></div>
                  <div className="w-10 h-10 text-slate-300"><BarChart3 className="w-6 h-6" /></div>
                  <div className="w-10 h-10 text-slate-300 mt-auto"><Settings className="w-6 h-6" /></div>
                </div>

                {/* Main Dashboard Preview */}
                <div className="flex-1 flex flex-col bg-white">
                  {/* Internal Toolbar */}
                  <div className="px-10 py-4 border-b border-slate-50 flex items-center gap-8">
                    <div className="flex items-center gap-4 border-r border-slate-100 pr-8">
                      <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center"><MousePointer2 className="w-4 h-4 text-slate-400" /></div>
                    </div>
                    <div className="flex items-center gap-8 text-[13px] font-black text-slate-400">
                      <div className="text-brand-dark flex items-center gap-1">Normal Text <ChevronRight className="w-3 h-3 rotate-90" /></div>
                      <span className="text-brand-dark">B</span>
                      <span className="italic">i</span>
                      <span className="underline">U</span>
                      <span className="bg-brand-purple/5 text-brand-purple px-1 rounded">A:</span>
                    </div>
                    <div className="ml-auto flex items-center gap-6">
                      <span className="text-[11px] font-black text-brand-dark flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> Apply Style</span>
                      <span className="text-[11px] font-black text-brand-dark flex items-center gap-2"><BarChart3 className="w-4 h-4 text-slate-400" /> All Tools</span>
                    </div>
                  </div>

                  <div className="flex-1 flex overflow-hidden">
                    {/* Content Filter Panel */}
                    <div className="w-72 bg-slate-50/50 p-8 border-r border-slate-50">
                      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative">
                        <h4 className="text-base font-black text-brand-dark mb-6">Content Filter</h4>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Title</label>
                            <div className="bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 text-[12px] font-bold text-slate-300">About Marketing</div>
                          </div>
                          <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Description</label>
                            <div className="bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 text-[12px] font-bold text-slate-300 min-h-[80px]">Write about marketing & business strategy with some tips.</div>
                          </div>
                          <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Tag</label>
                            <div className="flex flex-wrap gap-2">
                              {['Automation', 'Artificial', 'Strategy', 'Marketing AI'].map(tag => (
                                <span key={tag} className="bg-slate-50 px-2 py-1 rounded text-[9px] font-bold text-slate-400 border border-slate-100">{tag} x</span>
                              ))}
                            </div>
                          </div>
                          <button className="w-full bg-brand-purple/5 text-brand-purple border border-brand-purple/20 py-3 rounded-xl font-black text-[12px] flex items-center justify-center gap-2 mt-4 hover:bg-brand-purple hover:text-white transition-colors">
                            Generate Now <Sparkles className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Floating Tooltip Mockup */}
                        <div className="absolute -right-16 top-24 bg-brand-pink text-white px-4 py-2 rounded-full text-[11px] font-black shadow-lg">
                          Title here
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Main View */}
                    <div className="flex-1 p-16">
                      <div className="flex items-center gap-2 text-brand-purple mb-4">
                        <Sparkles className="w-6 h-6" />
                        <span className="text-xl font-black">Generate Referral Loop</span>
                      </div>
                      <h2 className="text-6xl font-black text-brand-dark leading-[1.1] mb-12">
                        AI in Growth Open <br /> Create New Era.
                      </h2>
                      <div className="flex items-center gap-4 mb-16">
                        <p className="text-brand-gray text-xl max-w-md font-medium">Write about marketing & business strategy with some tips for advocates.</p>
                        <button className="bg-amber-400 text-brand-dark px-4 py-1.5 rounded-full text-[11px] font-black">Edit title</button>
                      </div>

                      {/* Bottom Feature Cards */}
                      <div className="grid grid-cols-3 gap-6 pt-12 border-t border-slate-100">
                        <div className="text-center group cursor-pointer">
                          <div className="mb-3 text-slate-400 group-hover:text-brand-purple transition-colors flex justify-center"><Brain className="w-6 h-6" /></div>
                          <p className="text-[11px] font-black text-brand-dark">Idea Generation</p>
                          <div className="h-1 w-24 mx-auto bg-amber-200 mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="text-center group cursor-pointer">
                          <div className="mb-3 text-slate-400 group-hover:text-brand-purple transition-colors flex justify-center"><Sparkles className="w-6 h-6" /></div>
                          <p className="text-[11px] font-black text-brand-dark">AI Magic</p>
                          <div className="h-1 w-24 mx-auto bg-brand-teal mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="text-center group cursor-pointer">
                          <div className="mb-3 text-slate-400 group-hover:text-brand-purple transition-colors flex justify-center"><MessageSquare className="w-6 h-6" /></div>
                          <p className="text-[11px] font-black text-brand-dark">Suggestion</p>
                          <div className="h-1 w-24 mx-auto bg-brand-pink mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Accent Gradient Card */}
            <div className="absolute -bottom-24 -right-12 w-[500px] h-[500px] bg-gradient-to-br from-amber-200 via-brand-pink to-brand-purple rounded-full opacity-20 blur-[120px] -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-4 border-brand-pink/20 rounded-[80px] -z-10 transform scale-105"></div>
          </div>
        </div>
      </section>

      {/* Footer / Features Grid (Subtle) */}
      <section className="py-40 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-20">
            <FeatureItem 
              icon={<Brain className="w-10 h-10 text-brand-purple" />}
              title="80+ Referral Types"
              desc="Generate unique copy for blogs, emails, social sharing, and product widgets instantly."
            />
            <FeatureItem 
              icon={<Shield className="w-10 h-10 text-brand-teal" />}
              title="Plagiarism-Free Content"
              desc="Every referral link and messaging sequence is unique to your brand's voice and advocate's style."
            />
            <FeatureItem 
              icon={<Rocket className="w-10 h-10 text-brand-pink" />}
              title="Scale Your SaaS"
              desc="Built specifically for modern marketing teams who need to grow without the enterprise complexity."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col gap-6">
    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg shadow-black/5 border border-slate-50">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-brand-dark">{title}</h3>
    <p className="text-brand-gray text-lg font-medium leading-relaxed">{desc}</p>
  </div>
);

export default LandingPage;
