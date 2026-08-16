import React from 'react';
import { Heart, Sparkles, BookOpen, Compass, Scale } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#241D18] text-stone-300 py-16 border-t border-amber-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-sacred text-lg font-bold shadow-md">
                ॐ
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-amber-100 tracking-tight block">
                  Bhagavad Gita
                </span>
                <span className="text-[11px] uppercase tracking-widest text-amber-400 font-medium">
                  Timeless Wisdom for Modern Life
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              An interactive, accessible digital sanctuary exploring the eternal teachings of the Gita inspired by the sacred Kurukshetra dialogue between Lord Krishna and Arjuna.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300/80">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Dedicated to Universal Peace, Clarity & Harmony</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-amber-200">
              Core Sections
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-500" />
                  <span>The Kurukshetra Hero</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('teachings')}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-500" />
                  <span>Eight Core Teachings</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('paths')}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-500" />
                  <span>Four Paths of Yoga</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('reflect')}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-500" />
                  <span>Pause & Reflect Generator</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('dialogue')}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-500" />
                  <span>Krishna & Arjuna Dialogue</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Core Gita Virtues */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-bold text-amber-200">
              Spiritual Pillars
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-2.5">
                <BookOpen className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-200 block">Karma Yoga</span>
                  <span>Excellence in duty without anxiety over outcomes.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-2.5">
                <Scale className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-200 block">Samata (Equanimity)</span>
                  <span>Steady inner tranquility in praise or blame.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-200 block">Svadharma</span>
                  <span>Acting in alignment with your authentic duty and truth.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Peace Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Bhagavad Gita Wisdom Project. Built with devotion and clarity.
          </p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>May all beings find peace and inner light</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
