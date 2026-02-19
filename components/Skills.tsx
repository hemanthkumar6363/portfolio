
import React from 'react';

const SKILL_CATEGORIES = [
  {
    title: "Hardware & VLSI",
    skills: ["Verilog HDL", "VHDL", "Digital Logic Design", "PCB Design (Altium)", "FPGA Prototyping"]
  },
  {
    title: "Embedded & Control",
    skills: ["Embedded C/C++", "Microcontrollers (STM32/ESP32)", "Arduino/Raspberry Pi", "RTOS", "Control Systems"]
  },
  {
    title: "Software & Simulation",
    skills: ["MATLAB / Simulink", "Python (NumPy/SciPy)", "LTSpice", "Logisim", "Proteus"]
  },
  {
    title: "Communication Protocols",
    skills: ["I2C / SPI / UART", "CAN Bus", "LoRaWAN", "TCP/IP Stack", "RF Systems"]
  }
];

export const Skills: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col mb-16 items-center text-center">
        <h2 className="text-[#ff6b00] text-sm font-bold uppercase tracking-[0.3em] mb-4">Proficiency</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Technical Arsenal</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="bg-neutral-900/20 border border-neutral-800/60 p-6 rounded-2xl">
            <h4 className="text-[#ff6b00] font-bold text-xs uppercase tracking-widest mb-6 pb-2 border-b border-neutral-800">
              {cat.title}
            </h4>
            <ul className="space-y-4">
              {cat.skills.map(skill => (
                <li key={skill} className="flex items-center text-neutral-300 text-sm font-medium hover:text-white transition-colors">
                  <div className="w-1.5 h-1.5 bg-[#ff6b00] rounded-full mr-3 shadow-[0_0_8px_#ff6b00]"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
