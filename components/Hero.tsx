
import React from 'react';
import { SocialLinks } from './SocialLinks';
import { Stats } from './Stats';

export const Hero: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      
      {/* Left Content */}
      <div className="z-10 order-2 lg:order-1 flex flex-col justify-center">
        <div className="space-y-2 mb-6">
          <p className="text-[#ff6b00] text-sm font-bold uppercase tracking-[0.3em] mb-2">Electronics & Communication Engineer</p>
          <h2 className="text-neutral-200 text-4xl md:text-5xl font-black tracking-tight">Hemanth Kumar R</h2>
        </div>
        
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white mb-10 tracking-tighter leading-none uppercase">
          <span className="text-[#ff6b00]">Designing</span> the <br className="hidden xl:block" /> Future of Signals
        </h1>

        <div className="mb-14">
          <SocialLinks />
        </div>

        <div className="flex flex-wrap gap-6 mb-20">
          <button className="bg-[#ff6b00] hover:bg-[#e66000] text-white px-12 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl shadow-orange-600/30 transform hover:-translate-y-2 active:scale-95">
            View Projects
          </button>
          <button className="border-2 border-neutral-700 hover:border-neutral-500 text-neutral-300 px-12 py-5 rounded-2xl text-xl font-bold transition-all flex items-center space-x-3 transform hover:-translate-y-2 active:scale-95">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Resume / CV</span>
          </button>
        </div>

        <div className="w-full max-w-xl">
          <Stats />
        </div>
      </div>

      {/* Right Content - Profile Image with ECE Decorations */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative items-center">
        <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px]">
          
          {/* Background Technical Elements */}
          <div className="absolute inset-[-10%] rounded-full border border-white/5 opacity-50 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.05)_0%,transparent_70%)]"></div>
          
          {/* Rotating Rings */}
          <div className="absolute inset-[-5%] rounded-full border border-[#ff6b00]/10 animate-[spin_40s_linear_infinite]"></div>
          <div className="absolute inset-[-15%] rounded-full border border-neutral-800/30 animate-[spin_60s_linear_infinite_reverse]"></div>
          
          {/* Signal Wave SVG Decoration */}
          <svg className="absolute inset-[-20%] w-[140%] h-[140%] text-[#ff6b00]/10 pointer-events-none" viewBox="0 0 100 100">
            <path d="M0 50 Q 25 10, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <path d="M0 60 Q 25 20, 50 60 T 100 60" fill="none" stroke="currentColor" strokeWidth="0.05" />
          </svg>

          {/* Glowing Aura behind photo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#ff6b00]/10 blur-[100px] rounded-full z-0"></div>

          {/* Profile Image Container */}
          <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border-2 border-neutral-800 group transform transition-transform duration-700 hover:scale-[1.02]">
             {/* Frame Highlight */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
             
             {/* The Image (Updated to the provided portrait) */}
             <img 
               src="https://ik.imagekit.io/QUlight/IMG-20260216-WA0012.jpg" 
               alt="Hemanth Kumar R" 
               className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
               style={{ objectPosition: 'center 20%' }}
             />
             
             {/* Subtle technical overlay on image */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,107,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-[#ff6b00] rounded-tr-2xl z-20"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-[#ff6b00] rounded-bl-2xl z-20"></div>

          {/* Floating Data Nodes around the image */}
          <div className="absolute top-[10%] -left-[5%] w-3 h-3 bg-[#ff6b00] rounded-full shadow-[0_0_15px_#ff6b00] animate-pulse"></div>
          <div className="absolute bottom-[20%] -right-[3%] w-2 h-2 bg-[#ff6b00] rounded-full shadow-[0_0_10px_#ff6b00] delay-500"></div>
        </div>
      </div>

    </div>
  );
};
