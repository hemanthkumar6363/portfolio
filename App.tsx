
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Research } from './components/Research';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Cursor } from './components/Cursor';

type LegalView = 'NONE' | 'PRIVACY' | 'TERMS';

const App: React.FC = () => {
  const [legalView, setLegalView] = useState<LegalView>('NONE');

  const closeModal = () => setLegalView('NONE');

  return (
    <div className="min-h-screen flex flex-col w-screen overflow-x-hidden scroll-smooth selection:bg-[#ff6b00] selection:text-white">
      <Cursor />
      <Navbar />
      
      <div className="flex-1 flex flex-col w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24">
        
        <main className="flex-1 flex flex-col">
          <section id="home" className="min-h-[95vh] flex items-center justify-center pt-32 pb-10 md:pt-40">
            <Hero />
          </section>

          <section id="research" className="py-32 border-t border-white/5">
            <Research />
          </section>

          <section id="skills" className="py-32 border-t border-white/5">
            <Skills />
          </section>

          <section id="projects" className="py-32 border-t border-white/5">
            <Projects />
          </section>

          <section id="contact" className="py-32 border-t border-white/5 mb-20">
            <Contact />
          </section>
        </main>

        <footer className="py-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-[11px] gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
             <p className="mono font-bold tracking-widest text-neutral-400">© 2024 HEMANTH KUMAR R</p>
             <p className="uppercase tracking-[0.2em]">Electronics & Communication Strategic Lab</p>
          </div>
          
          <div className="flex space-x-12 uppercase tracking-[0.3em] font-black">
            <button 
              onClick={() => setLegalView('PRIVACY')}
              className="hover:text-[#ff6b00] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setLegalView('TERMS')}
              className="hover:text-[#ff6b00] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </footer>
      </div>
      
      {/* Legal Modal Overlay */}
      {legalView !== 'NONE' && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div 
            className="w-full max-w-2xl bg-neutral-950 border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Corner Decals */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ff6b00 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
            
            <button 
              onClick={closeModal}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-neutral-500 hover:text-white hover:border-[#ff6b00] transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="mono text-[10px] text-[#ff6b00] mb-4 font-black tracking-[0.5em] uppercase">System // Legal // {legalView}</div>
            
            <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
              {legalView === 'PRIVACY' ? (
                <div className="space-y-8 text-neutral-400 leading-relaxed text-sm">
                  <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Data Privacy Protocol</h2>
                  <section>
                    <h3 className="text-[#ff6b00] font-bold mb-2 uppercase text-[10px] tracking-widest">01. Data Collection</h3>
                    <p>This portfolio exclusively collects data provided voluntarily via the contact uplink form (Name, Email, Message). No background tracking scripts or cookies are utilized for user surveillance.</p>
                  </section>
                  <section>
                    <h3 className="text-[#ff6b00] font-bold mb-2 uppercase text-[10px] tracking-widest">02. Utilization</h3>
                    <p>Information collected is used solely for professional communication and networking purposes related to Hemanth Kumar R's engineering services.</p>
                  </section>
                  <section>
                    <h3 className="text-[#ff6b00] font-bold mb-2 uppercase text-[10px] tracking-widest">03. Protection</h3>
                    <p>Industry-standard encryption is simulated during transmission. No data is shared with third-party intelligence or marketing aggregators.</p>
                  </section>
                </div>
              ) : (
                <div className="space-y-8 text-neutral-400 leading-relaxed text-sm">
                  <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Standard Terms</h2>
                  <section>
                    <h3 className="text-[#ff6b00] font-bold mb-2 uppercase text-[10px] tracking-widest">01. Intellectual Property</h3>
                    <p>All circuit designs, code snippets, and research documentation displayed herein are the intellectual property of Hemanth Kumar R unless otherwise stated.</p>
                  </section>
                  <section>
                    <h3 className="text-[#ff6b00] font-bold mb-2 uppercase text-[10px] tracking-widest">02. Information Accuracy</h3>
                    <p>While I strive for precision in hardware documentation, the information provided is for portfolio exhibition only and should not be used in critical life-safety systems without direct consultation.</p>
                  </section>
                  <section>
                    <h3 className="text-[#ff6b00] font-bold mb-2 uppercase text-[10px] tracking-widest">03. Jurisdiction</h3>
                    <p>This digital presence is governed by the technological laws and ethics of the engineering community worldwide, centered in India.</p>
                  </section>
                </div>
              )}
            </div>
            
            <button 
              onClick={closeModal}
              className="mt-12 w-full bg-[#ff6b00] text-black font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-white transition-all shadow-xl"
            >
              Acknowledge & Close
            </button>
          </div>
        </div>
      )}

      {/* Atmospheric Background Decorations */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-orange-600/5 blur-[160px] rounded-full -z-10 pointer-events-none animate-pulse duration-[10000ms]"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-900/10 blur-[140px] rounded-full -z-10 pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/[0.01] blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </div>
  );
};

export default App;
