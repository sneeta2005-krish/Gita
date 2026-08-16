import React, { useState } from 'react';
import { Sparkles, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { HERO_DATA } from '../data/gitaData';

interface HeroProps {
  isFlutePlaying?: boolean;
  onToggleFlute?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  isFlutePlaying = false,
  onToggleFlute,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Background Soft Spiritual Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Golden Halo Glow in top-right */}
        <div className="absolute top-10 right-10 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-amber-300/20 via-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse-glow" />
        
        {/* Krishna Soft Blue Ambient Glow */}
        <div className="absolute bottom-10 left-5 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-tr from-sky-200/25 via-teal-100/20 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle decorative lotus mandala outline watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-amber-900/5 pointer-events-none opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[1050px] rounded-full border border-amber-900/5 pointer-events-none opacity-20" />
      </div>

      {/* Floating Gentle Particles / Lotus Petals simulation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-[8%] w-2.5 h-2.5 rounded-full bg-amber-400/40 animate-float-slow" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/5 left-[15%] w-3.5 h-3.5 rounded-full bg-orange-300/30 animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-[12%] w-2 h-2 rounded-full bg-amber-300/50 animate-float-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 right-[22%] w-3 h-3 rounded-full bg-sky-300/30 animate-float-slow" style={{ animationDelay: '3.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-6 flex flex-col text-left space-y-6">
            
            {/* Sacred Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-950 text-xs font-semibold tracking-wide w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Sacred Dialogue on Kurukshetra</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C241E] leading-[1.12]">
                {HERO_DATA.title}
              </h1>
              <p className="font-sacred text-xl sm:text-2xl text-amber-800 font-semibold tracking-wider">
                {HERO_DATA.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-normal">
              {HERO_DATA.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                id="hero-explore-btn"
                onClick={() => scrollToSection('teachings')}
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white font-semibold text-sm sm:text-base shadow-md shadow-amber-900/15 hover:shadow-lg hover:shadow-amber-800/25 hover:from-amber-700 hover:to-amber-900 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Explore Teachings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-flute-tune-btn"
                onClick={onToggleFlute}
                className={`px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border ${
                  isFlutePlaying
                    ? 'bg-amber-100/90 border-amber-400 text-amber-950 shadow-sm'
                    : 'bg-white/90 hover:bg-amber-50/90 text-stone-800 border-stone-300 hover:border-amber-400'
                }`}
                title={isFlutePlaying ? 'Pause flute melody' : 'Play peaceful Krishna flute tune'}
              >
                <span>🪈</span>
                <span>{isFlutePlaying ? 'Flute Playing' : 'Play Flute Melody'}</span>
              </button>
            </div>

            {/* Trust / Harmony Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>18 Chapters & 700 Shlokas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>8 Core Universal Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>4 Integrated Yoga Paths</span>
              </div>
            </div>

          </div>

          {/* Right Column: Beautiful Krishna–Arjuna Illustration Showcase */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            
            {/* Glowing Golden Halo Backdrop behind Krishna */}
            <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-tr from-amber-400/30 via-orange-300/20 to-sky-300/20 rounded-3xl blur-2xl pointer-events-none" />

            {/* Card Container with Decorative Border & Subtle Shadow */}
            <div className="relative w-full max-w-lg rounded-2xl p-2 bg-gradient-to-b from-amber-200/70 via-stone-200/50 to-amber-100/60 shadow-xl border border-amber-300/60 transition-transform duration-700 hover:scale-[1.01]">
              
              <div className="relative overflow-hidden rounded-xl bg-stone-900 aspect-4/3 group">
                
                {/* Krishna–Arjuna Main Hero Artwork */}
                <img
                  id="hero-krishna-arjuna-image"
                  src={HERO_DATA.heroImage}
                  alt="Lord Krishna preaching the Bhagavad Gita to Arjuna on the chariot at Kurukshetra"
                  referrerPolicy="no-referrer"
                  onLoad={() => setIsImageLoaded(true)}
                  className={`w-full h-full object-cover object-center transform transition-all duration-1000 group-hover:scale-105 ${
                    isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />

                {/* Soft Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent pointer-events-none" />

                {/* Floating Peacock Feather Badge / Emblem */}
                <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-400/40 text-amber-200 text-xs font-medium flex items-center gap-2 shadow-lg animate-float-slow">
                  <span className="text-base">🪶</span>
                  <span className="font-sacred text-[11px] tracking-wider text-amber-100">Divya Jnana</span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-stone-900/75 backdrop-blur-md border border-amber-500/20 text-white">
                  <p className="font-serif text-sm font-semibold text-amber-200">
                    Lord Krishna & Arjuna at Kurukshetra
                  </p>
                  <p className="text-xs text-stone-300 mt-0.5 line-clamp-1">
                    "When darkness clouds duty, eternal wisdom illuminates the path."
                  </p>
                </div>

              </div>

              {/* Floating Accent Lotus Motif in Bottom Corner */}
              <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-white shadow-lg border border-amber-300 flex items-center justify-center text-lg animate-bounce" style={{ animationDuration: '3s' }}>
                🪷
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
