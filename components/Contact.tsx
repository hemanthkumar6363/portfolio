
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-[#ff6b00] text-sm font-bold uppercase tracking-[0.3em] mb-4">Interface</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 uppercase">Let's Connect</h3>
        <p className="text-neutral-400 text-lg max-w-md leading-relaxed mb-10">
          Interested in collaboration, research opportunities, or just want to talk about hardware? My frequency is always open.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#ff6b00]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <span className="text-neutral-300 font-medium">hemanthkumarr6363@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#ff6b00]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <span className="text-neutral-300 font-medium">India, Karnataka, Hassan 573201</span>
          </div>
        </div>
      </div>

      <div className="bg-neutral-900/50 border border-neutral-800 rounded-[2.5rem] p-10 backdrop-blur-xl">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-[0.2em]">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-4 text-white focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition-all placeholder:text-neutral-700" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-[0.2em]">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-4 text-white focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition-all placeholder:text-neutral-700" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-[0.2em]">Message Body</label>
            <textarea rows={4} placeholder="Hello Hemanth, I'd like to talk about..." className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-4 text-white focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition-all placeholder:text-neutral-700 resize-none"></textarea>
          </div>
          <button className="w-full bg-[#ff6b00] hover:bg-[#e66000] text-white py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-orange-600/20 active:scale-[0.98]">
            Transmit Message
          </button>
        </form>
      </div>
    </div>
  );
};
