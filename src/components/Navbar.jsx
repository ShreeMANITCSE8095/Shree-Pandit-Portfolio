import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const sectionThemes = {
  home: 'black',
  about: 'orange',
  process: 'white',
  skills: 'black',
  projects: 'black',
  experience: 'orange',
  achievements: 'black',
  'coding-profiles': 'black',
  contact: 'black',
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeBg, setActiveBg] = useState('black');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = Object.keys(sectionThemes);
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            current = id;
            break;
          }
        }
      }
      setActiveBg(sectionThemes[current] || 'black');
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isWhitePage = !isOpen && activeBg === 'white';
  const isOrangePage = !isOpen && activeBg === 'orange';

  const logoTextColor = isOpen ? 'text-white' : isWhitePage ? 'text-black' : 'text-white';
  const logoDotColor = isOpen ? 'text-black' : isOrangePage ? 'text-black' : 'text-orange-400';

  const linkTextColor = isOpen
    ? 'text-white/80 hover:text-white'
    : isWhitePage
    ? 'text-black/70 hover:text-black'
    : 'text-white/80 hover:text-white';

  const contactBtnColor = isOpen
    ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
    : isWhitePage
    ? 'bg-black/5 border-black/20 text-black hover:bg-black/10'
    : 'bg-white/10 border-white/20 text-white hover:bg-white/20';

  const menuIconColor = isWhitePage ? 'text-black' : 'text-white';

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements'];
  const contactMailto = 'mailto:shreepandit2015@gmail.com';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b border-black/10 transition-all duration-300 ${
        isOpen ? 'bg-[#ff6b00] py-4' : isScrolled ? 'bg-transparent py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className={`${logoTextColor} text-2xl font-black tracking-tight whitespace-nowrap transition-colors duration-300`}>
            {personalInfo.brandName}<span className={`${logoDotColor} transition-colors duration-300`}>.</span>
          </a>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            return (
              <a
                key={link}
                href={link === 'Home' ? '#home' : `#${link.toLowerCase()}`}
                className={`${linkTextColor} font-medium relative group transition-colors duration-300`}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
        </div>

        <div className="hidden md:block">
          <a
            href={contactMailto}
            className={`px-6 py-2.5 rounded-full border font-semibold transition-all duration-300 backdrop-blur-md ${contactBtnColor}`}
          >
            Contact Me
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${menuIconColor} focus:outline-none p-2 transition-colors duration-300`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#ff6b00] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => {
            return (
              <a
                key={link}
                href={link === 'Home' ? '#home' : `#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
              >
                {link}
              </a>
            );
          })}
          <div className="pt-4 pb-2">
            <a
              href={contactMailto}
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-3 rounded-full bg-white text-[#ff6b00] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
