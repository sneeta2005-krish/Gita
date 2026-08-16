import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Sparkles, BookOpen } from 'lucide-react';
import { ambientSound } from '../utils/audioSynth';

interface NavbarProps {
  activeSection: string;
  isAudioPlaying?: boolean;
  onToggleAudio?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isAudioPlaying = false,
  onToggleAudio,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    if (onToggleAudio) {
      onToggleAudio();
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Teachings', href: '#teachings' },
    { name: 'Paths', href: '#paths' },
    { name: 'Reflect', href: '#reflect' },
    { name: 'About', href: '#dialogue' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-amber-900/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            id="brand-logo"
            className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-xs shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-sacred text-white text-lg font-bold">ॐ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#2C241E] group-hover:text-amber-900 transition-colors">
                Bhagavad Gita
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-800/80 font-medium">
                Timeless Wisdom
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-amber-950 font-semibold bg-amber-100/70 shadow-xs'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-amber-50/60'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-600" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Controls (Ambient Sound + Quick Shloka CTA) */}
          <div className="flex items-center gap-3">
            {/* Ambient Flute Music Toggle Button */}
            <button
              id="ambient-sound-btn"
              onClick={toggleSound}
              aria-label={isAudioPlaying ? 'Mute Krishna Divine Flute' : 'Play Krishna Divine Flute'}
              title={isAudioPlaying ? 'Pause Divine Flute' : 'Play Divine Flute Tune'}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium border transition-all duration-300 cursor-pointer ${
                isAudioPlaying
                  ? 'bg-amber-100 border-amber-400 text-amber-950 shadow-xs'
                  : 'bg-white/80 border-stone-200 text-stone-700 hover:bg-amber-50 hover:text-amber-900'
              }`}
            >
              {isAudioPlaying ? (
                <>
                  <div className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-amber-600 animate-pulse" style={{ animationDelay: '0ms' }} />
                    <span className="w-0.5 h-3 bg-amber-600 animate-pulse" style={{ animationDelay: '150ms' }} />
                    <span className="w-0.5 h-1.5 bg-amber-600 animate-pulse" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="font-medium text-amber-900">Flute Playing</span>
                </>
              ) : (
                <>
                  <span>🪈</span>
                  <span className="hidden sm:inline">Play Flute</span>
                </>
              )}
            </button>

            {/* Read / Explore Button */}
            <a
              id="nav-explore-btn"
              href="#teachings"
              onClick={(e) => handleNavClick(e, '#teachings')}
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs uppercase tracking-wider font-semibold rounded-full shadow-xs shadow-amber-700/20 hover:shadow-md transition-all duration-300"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Teachings</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-amber-100/50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden mt-3 bg-[#FAF8F5] border-b border-amber-900/10 px-4 pt-2 pb-6 shadow-xl animate-fadeIn"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 rounded-lg text-base font-medium text-stone-800 hover:bg-amber-100/60 hover:text-amber-950 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <Sparkles className="w-4 h-4 text-amber-500 opacity-60" />
              </a>
            ))}
            <div className="pt-2">
              <a
                id="mobile-nav-cta"
                href="#teachings"
                onClick={(e) => handleNavClick(e, '#teachings')}
                className="w-full py-3 bg-amber-600 text-white text-center font-semibold rounded-xl block shadow-sm"
              >
                Explore 8 Teachings
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
