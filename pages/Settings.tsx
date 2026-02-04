
import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [primaryColor, setPrimaryColor] = useState('#4f46e5');
  const [position, setPosition] = useState('bottom-right');

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500">Configure your global referral settings and widget styles.</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Widget Config */}
          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Widget Customization</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Primary Brand Color</label>
                  <div className="flex gap-3">
                    <input 
                      type="color" 
                      value={primaryColor} 
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0 p-0"
                    />
                    <input 
                      type="text" 
                      value={primaryColor} 
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Widget Position</label>
                  <select 
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="bottom-right">Bottom Right (Floating)</option>
                    <option value="bottom-left">Bottom Left (Floating)</option>
                    <option value="modal">Center Modal (Pop-up)</option>
                    <option value="inline">Inline (Embedded)</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                      <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: primaryColor }}></div>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Preview</p>
                    <p className="text-sm text-slate-600 mt-2">Referral Widget Active</p>
                 </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">Save Changes</button>
            </div>
          </section>

          {/* Integrations */}
          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Integrations</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 group">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-black text-indigo-600 shadow-sm">S</div>
                   <div>
                      <p className="text-sm font-bold text-slate-900">Stripe</p>
                      <p className="text-xs text-slate-500">Connected to live production environment</p>
                   </div>
                </div>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 group">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-black text-orange-500 shadow-sm">Z</div>
                   <div>
                      <p className="text-sm font-bold text-slate-900">Zapier</p>
                      <p className="text-xs text-slate-500">Automate workflows across 5,000+ apps</p>
                   </div>
                </div>
                <button className="text-xs font-bold text-indigo-600 hover:underline">Connect</button>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
           <section className="bg-indigo-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold mb-4">Implementation Code</h3>
              <p className="text-sm text-indigo-200 mb-6">Copy and paste this snippet into the <code>&lt;head&gt;</code> tag of your website.</p>
              <div className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-indigo-300 leading-relaxed relative overflow-hidden group">
                <pre><code>{`<script 
  src="https://cdn.refernity.io/w.js"
  data-id="acme-123"
  async
></script>`}</code></pre>
                <button className="absolute top-2 right-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                </button>
              </div>
           </section>
           
           <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Danger Zone</h3>
              <button className="w-full py-2 border border-rose-200 text-rose-600 rounded-lg text-sm font-bold hover:bg-rose-50 transition-colors">Deactivate Campaign</button>
              <button className="w-full mt-2 py-2 text-slate-400 text-xs hover:text-rose-600 transition-colors">Delete Company Account</button>
           </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
