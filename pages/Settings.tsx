
import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [primaryColor, setPrimaryColor] = useState('#6B46C1');
  const [position, setPosition] = useState('bottom-right');

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-4xl font-black text-brand-dark tracking-tight">Platform Settings</h1>
        <p className="text-slate-500 font-medium text-lg mt-2">Configure your infinite growth engine v1.0.</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {/* Widget Config */}
          <section className="bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-black text-brand-dark mb-10">Widget Customization</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Brand Accent Color</label>
                  <div className="flex gap-4">
                    <input 
                      type="color" 
                      value={primaryColor} 
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-14 h-14 rounded-2xl cursor-pointer bg-white border-2 border-slate-100 p-1"
                    />
                    <input 
                      type="text" 
                      value={primaryColor} 
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm font-black text-brand-dark uppercase focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Placement</label>
                  <select 
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold text-brand-dark focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all"
                  >
                    <option value="bottom-right">Bottom Right (Floating)</option>
                    <option value="bottom-left">Bottom Left (Floating)</option>
                    <option value="modal">Center Modal (Pop-up)</option>
                    <option value="inline">Inline (Embedded)</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                 <div className="bg-slate-50 p-10 rounded-[40px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 bg-white rounded-[32px] shadow-2xl flex items-center justify-center mb-6 relative">
                      <div className="w-16 h-16 rounded-[20px] transition-all duration-500" style={{ backgroundColor: primaryColor }}></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-green rounded-full border-4 border-white"></div>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Live Preview</p>
                    <p className="text-base font-black text-brand-dark">Widget Active</p>
                 </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end">
              <button className="bg-brand-purple text-white px-10 py-4 rounded-[20px] font-black uppercase text-xs tracking-widest shadow-xl shadow-brand-purple/20 hover:scale-105 transition-all">Save Changes</button>
            </div>
          </section>

          {/* Integrations */}
          <section className="bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-black text-brand-dark mb-10">Active Integrations</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-8 bg-slate-50 rounded-[32px] border border-slate-100 group hover:border-brand-purple transition-all duration-300">
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center font-black text-2xl text-[#635BFF] shadow-sm group-hover:scale-110 transition-transform">S</div>
                   <div>
                      <p className="text-xl font-black text-brand-dark">Stripe</p>
                      <p className="text-sm font-bold text-slate-400 mt-1">Payments and automatic payouts enabled</p>
                   </div>
                </div>
                <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-4 py-2 rounded-full uppercase tracking-widest border border-emerald-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between p-8 bg-slate-50 rounded-[32px] border border-slate-100 group hover:border-brand-purple transition-all duration-300">
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center font-black text-2xl text-[#FF4F00] shadow-sm group-hover:scale-110 transition-transform">Z</div>
                   <div>
                      <p className="text-xl font-black text-brand-dark">Zapier</p>
                      <p className="text-sm font-bold text-slate-400 mt-1">Automate your referral workflow logic</p>
                   </div>
                </div>
                <button className="text-xs font-black text-brand-purple uppercase tracking-widest hover:scale-110 transition-transform">Connect →</button>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-10">
           <section className="bg-brand-dark text-white p-10 rounded-[48px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-purple/20 blur-[80px] rounded-full"></div>
              <h3 className="text-2xl font-black mb-6">Install Script</h3>
              <p className="text-slate-400 font-medium mb-8 leading-relaxed">Copy this one line of code into the <code>&lt;head&gt;</code> of your website to activate Refernity.</p>
              <div className="bg-slate-900 p-6 rounded-[32px] font-mono text-[11px] text-brand-purple leading-relaxed relative overflow-hidden group border border-white/5">
                <pre className="whitespace-pre-wrap"><code>{`<script 
  src="https://cdn.refernity.io/w.js"
  data-id="acme-123"
  async
></script>`}</code></pre>
                <button className="absolute top-4 right-4 p-3 bg-white/10 rounded-2xl hover:bg-white/20 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                </button>
              </div>
           </section>
           
           <section className="bg-white p-10 rounded-[48px] border border-slate-200">
              <h3 className="text-xl font-black text-brand-dark mb-6">Danger Zone</h3>
              <button className="w-full py-4 border-2 border-rose-50 text-rose-600 rounded-[20px] font-black uppercase text-xs tracking-widest hover:bg-rose-50 hover:border-rose-100 transition-all">Deactivate Campaign</button>
              <button className="w-full mt-4 py-2 text-slate-400 font-bold text-xs hover:text-rose-600 transition-all uppercase tracking-widest">Delete Account</button>
           </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
