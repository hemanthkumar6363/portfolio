
import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'Research', id: 'research' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy: Update active link based on current section in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-10% 0px -70% 0px', // Trigger when section is in upper part of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchingLink = NAV_LINKS.find(link => link.id === entry.target.id);
          if (matchingLink) {
            setActiveLink(matchingLink.name);
          }
        }
      });
    }, options);

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 px-6 md:px-16 lg:px-24 transition-all duration-300 ${isScrolled ? 'bg-neutral-950/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent'}`}>
      {/* Logo */}
      <a 
        href="#home" 
        onClick={(e) => scrollToSection(e, 'home')}
        className="text-3xl font-black tracking-tighter text-[#ff6b00] cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
      >
        <div className="w-8 h-8 border-2 border-[#ff6b00] rounded flex items-center justify-center p-1">
          <div className="w-full h-[2px] bg-[#ff6b00] relative">
            <div className="absolute -top-1 left-1/2 w-1 h-1 bg-[#ff6b00] rounded-full"></div>
          </div>
        </div>
        HKR
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center space-x-12">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-xs uppercase font-bold tracking-[0.2em] transition-all hover:text-[#ff6b00] relative group ${
                activeLink === link.name ? 'text-[#ff6b00]' : 'text-neutral-500'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#ff6b00] transition-all duration-300 ${activeLink === link.name ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="flex items-center space-x-6">
        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          className="hidden sm:block bg-[#ff6b00] hover:bg-[#e66000] text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20"
        >
          Get in Touch
        </a>
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white p-2 hover:bg-neutral-800 rounded-lg transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
