
import React from 'react';

const RESEARCH_AREAS = [
  {
    title: "Digital Signal Processing",
    description: "Developing efficient algorithms for real-time signal analysis and noise reduction in wireless systems.",
    tags: ["MATLAB", "Python", "FFT"]
  },
  {
    title: "Embedded Systems & IoT",
    description: "Architecting ultra-low-power sensor networks and real-time operating systems for edge computing.",
    tags: ["RTOS", "ARM Cortex", "MQTT"]
  },
  {
    title: "Wireless Communication",
    description: "Exploring 5G waveform designs and beamforming techniques for high-frequency data transmission.",
    tags: ["SDR", "Antenna Design", "5G"]
  }
];

export const Research: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col mb-16">
        <h2 className="text-[#ff6b00] text-sm font-bold uppercase tracking-[0.3em] mb-4">Discovery</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Research Interests</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RESEARCH_AREAS.map((item, idx) => (
          <div key={idx} className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-3xl hover:border-[#ff6b00]/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl font-black">{idx + 1}</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff6b00] transition-colors">{item.title}</h4>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold text-[#ff6b00] bg-[#ff6b00]/5 px-2 py-1 rounded-md border border-[#ff6b00]/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
