
import React from 'react';

const PROJECTS = [
  {
    name: "Smart Grid Monitor",
    category: "IoT / Power Systems",
    desc: "Real-time power quality monitoring system using ESP32 and MQTT for industrial environments.",
    year: "2023"
  },
  {
    name: "FPGA Image Filter",
    category: "VLSI / DSP",
    desc: "Implementation of Sobel Edge detection on Xilinx Artix-7 using Verilog HDL.",
    year: "2023"
  },
  {
    name: "Bio-Medical Patch",
    category: "Embedded Wearables",
    desc: "Low-power ECG monitoring wearable with Bluetooth Low Energy (BLE) integration.",
    year: "2024"
  },
  {
    name: "Adaptive Antenna Array",
    category: "RF / Comm",
    desc: "Simulation and design of phased array antennas for enhanced signal reception.",
    year: "2022"
  },
  {
    name: "CAN-Bus Diagnostic Tool",
    category: "Automotive ECE",
    desc: "OBD-II data logger and interpreter for vehicle health monitoring using ARM Cortex.",
    year: "2023"
  },
  {
    name: "SDR Signal Jammer",
    category: "Security / RF",
    desc: "Cognitive radio based frequency hopping spread spectrum (FHSS) jammer for lab testing.",
    year: "2024"
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-16">
        <div className="flex flex-col">
          <h2 className="text-[#ff6b00] text-sm font-bold uppercase tracking-[0.3em] mb-4">Showcase</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Selected Works</h3>
        </div>
        <button className="hidden md:block text-neutral-400 font-bold hover:text-[#ff6b00] transition-colors tracking-widest text-[10px] border-b border-neutral-800 pb-1">
          VIEW ALL ARCHIVE
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group relative aspect-[4/3] bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden cursor-pointer">
            {/* Visual background pattern */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundImage: 'radial-gradient(#ff6b00 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[#ff6b00] font-black text-xs uppercase tracking-widest">{project.category}</span>
                <span className="text-neutral-600 font-bold text-xs">{project.year}</span>
              </div>
              
              <div>
                <h4 className="text-2xl font-black text-white mb-3 group-hover:text-[#ff6b00] transition-colors leading-tight">{project.name}</h4>
                <p className="text-neutral-400 text-sm line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.desc}
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff6b00] group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
