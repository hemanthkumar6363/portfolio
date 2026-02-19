
import React from 'react';

const STAT_ITEMS = [
  { value: '1+', label: 'Internships' },
  { value: '6+', label: 'Core Projects' },
  { value: '10+', label: 'Tech Skills' },
];

export const Stats: React.FC = () => {
  return (
    <div className="flex items-center bg-neutral-900/30 border border-neutral-800/50 rounded-[2rem] px-6 py-10 backdrop-blur-xl shadow-2xl">
      {STAT_ITEMS.map((stat, index) => (
        <React.Fragment key={stat.label}>
          <div className="flex-1 px-4 lg:px-8 text-left group">
            <div className="text-[#ff6b00] text-4xl xl:text-5xl font-black mb-2 transition-transform group-hover:scale-110">
              {stat.value}
            </div>
            <div className="text-neutral-400 text-sm xl:text-base font-semibold uppercase tracking-widest leading-tight">
              {stat.label}
            </div>
          </div>
          {index < STAT_ITEMS.length - 1 && (
            <div className="w-[1px] h-16 bg-neutral-800/80"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
