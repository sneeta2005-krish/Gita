import React from 'react';
import { Sparkles, Scale, Compass, ArrowUpRight } from 'lucide-react';
import { FEATURE_PILLARS } from '../data/gitaData';

export const Introduction: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-emerald-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-sky-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-600" />;
    }
  };

  const scrollToTeachings = () => {
    const element = document.getElementById('teachings');
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
    <section id="introduction" className="py-20 bg-gradient-to-b from-[#FAF8F5] to-amber-50/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading and Introductory Text */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <span>The Universal Blueprint</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241E] tracking-tight">
            The Wisdom of the Gita
          </h2>

          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-2 mb-4" />

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            The Bhagavad Gita is a timeless dialogue between Lord Krishna and Arjuna. Through their conversation,
            Krishna offers profound guidance on action, knowledge, devotion, discipline, purpose and the nature of the self.
          </p>
        </div>

        {/* Three Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {FEATURE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              id={`intro-card-${pillar.id}`}
              onClick={scrollToTeachings}
              className={`group cursor-pointer rounded-2xl p-7 bg-white/90 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg relative overflow-hidden ${pillar.color}`}
            >
              {/* Subtle inner background gradient accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl opacity-20 group-hover:opacity-40 transition-opacity rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-stone-200/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getIcon(pillar.icon)}
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/80 border border-stone-200/60 text-stone-600 flex items-center gap-1 group-hover:text-amber-900 group-hover:border-amber-300 transition-colors">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-xs font-semibold uppercase tracking-wider text-amber-800/80 mt-1 mb-3">
                {pillar.subtitle}
              </p>

              <p className="text-sm text-stone-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
