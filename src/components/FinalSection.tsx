import React from 'react';
import { ArrowUp, Sparkles, BookOpen } from 'lucide-react';
import { HERO_DATA } from '../data/gitaData';

export const FinalSection: React.FC = () => {
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
    <section className="py-24 bg-gradient-to-b from-[#FAF8F5] via-amber-100/50 to-amber-200/40 relative overflow-hidden text-center">
      
      {/* Background Lotus Artwork & Spiritual Halo */}
      <div className="absolute inset-0 pointer-events-none opacity-35 mix-blend-multiply overflow-hidden">
        <img
          src={HERO_DATA.lotusImage}
          alt="Golden lotus and sacred radiant rays"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Floating Lotus Icon Motif */}
        <div className="w-16 h-16 rounded-full bg-white/90 shadow-lg border border-amber-300 mx-auto flex items-center justify-center text-2xl animate-float-slow">
          🪷
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-200/70 border border-amber-400/80 text-amber-950 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>Living the Philosophy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241E] tracking-tight">
            Carry the Wisdom With You
          </h2>

          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full mt-2" />

          {/* Quotation text */}
          <p className="font-serif text-xl sm:text-2xl text-stone-800 italic max-w-2xl mx-auto pt-2 leading-relaxed">
            "The teachings of the Gita are not only meant to be read. They are meant to be lived."
          </p>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto leading-relaxed">
          In every decision, every moment of uncertainty, and every act of service, let equanimity, courage, and selfless dedication be your quiet strength.
        </p>

        {/* CTA Button to scroll back to teachings */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-explore-again-btn"
            onClick={scrollToTeachings}
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-semibold text-base shadow-xl shadow-amber-950/20 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-amber-300" />
            <span>Explore the Teachings Again</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Shanti Invocation */}
        <div className="pt-6">
          <p className="font-sacred text-base tracking-widest text-amber-900 font-semibold">
            ॐ शान्तिः शान्तिः शान्तिः
          </p>
          <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">
            Om Shanti Shanti Shanti • Peace in Mind, Body & Spirit
          </p>
        </div>

      </div>
    </section>
  );
};
