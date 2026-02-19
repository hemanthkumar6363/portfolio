
import React from 'react';

const SOCIALS = [
  { name: 'LinkedIn', icon: 'LN', href: '#' },
  { name: 'GitHub', icon: 'GH', href: '#' },
  { name: 'ResearchGate', icon: 'RG', href: '#' },
  { name: 'Email', icon: 'EM', href: 'mailto:hemanthkumarr6363@gmail.com' },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.href}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-700 text-neutral-400 hover:text-[#ff6b00] hover:border-[#ff6b00] transition-all hover:bg-[#ff6b00]/5 group"
          aria-label={social.name}
        >
          <span className="text-xs font-bold group-hover:scale-110 transition-transform">
            {social.icon}
          </span>
        </a>
      ))}
    </div>
  );
};
