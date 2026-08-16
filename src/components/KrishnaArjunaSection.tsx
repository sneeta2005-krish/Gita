import React from 'react';
import { Sparkles, Compass, Shield } from 'lucide-react';
import { HERO_DATA, DIALOGUE_INSIGHTS } from '../data/gitaData';

export const KrishnaArjunaSection: React.FC = () => {
  return (
    <section id="dialogue" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>The Sacred Battlefield Dialogue</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241E] tracking-tight">
            The Conversation That Changed the World
          </h2>

          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Panoramic Artwork & Narrative Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Visual Showcase with Decorative Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-2.5 bg-gradient-to-tr from-amber-300/60 via-stone-200 to-amber-100/70 shadow-2xl border border-amber-300/80 group">
              
              <div className="relative overflow-hidden rounded-2xl aspect-16/10 bg-stone-900">
                <img
                  id="krishna-dialogue-image"
                  src={HERO_DATA.panoramicImage}
                  alt="Lord Krishna delivering the Gita discourse to Arjuna in the chariot on Kurukshetra"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-stone-900/80 backdrop-blur-md border border-amber-500/30 text-white">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                    <span>Kurukshetra • 3102 BCE</span>
                  </div>
                  <p className="font-serif text-sm sm:text-base font-medium text-stone-200 mt-0.5">
                    "Between two armies, supreme clarity was born."
                  </p>
                </div>
              </div>

              {/* Decorative Corner Lotus Badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-white border border-amber-300 shadow-md flex items-center justify-center text-base">
                🪷
              </div>

            </div>
          </div>

          {/* Right Column: Historical Narrative & Animated Quote */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                From Paralyzing Doubt to Supreme Clarity
              </h3>

              <p className="text-base text-stone-700 leading-relaxed">
                The Bhagavad Gita opens in a moment of acute moral crisis. Standing at the center of the battlefield,
                Prince Arjuna is overcome by despondency, grief, and moral paralysis — questioning whether victory is
                worth the pain of conflict.
              </p>

              <p className="text-base text-stone-700 leading-relaxed">
                Rather than offering simplistic consolation, Lord Krishna serves as his charioteer, mentor, and divine guide.
                Through patient dialogue, Krishna illuminates the eternal nature of the soul, the inescapable necessity of duty,
                and the profound freedom found in selfless action.
              </p>
            </div>

            {/* Narrative Insight Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
                <Compass className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">The Outer Battlefield</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    A struggle for justice and ethical duty on the plains of Kurukshetra.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-sky-50/80 border border-sky-200/80 flex items-start gap-3">
                <Shield className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-900">The Inner Battlefield</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    The perpetual conflict within the human heart between fear and purposeful action.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Animated Quote Element (As Requested) */}
            <div className="pt-4">
              <div
                id="gita-summary-quote"
                className="relative rounded-2xl p-6 bg-gradient-to-r from-amber-100/90 via-orange-100/70 to-amber-100/90 border border-amber-300 shadow-sm text-center overflow-hidden group"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-amber-800/80 block mb-1">
                  Core Gita Principle
                </span>

                <p className="font-serif text-xl sm:text-2xl font-bold text-amber-950 italic tracking-wide">
                  "{HERO_DATA.quote}"
                </p>

                <p className="text-[11px] text-stone-500 mt-2 font-medium">
                  Guiding principle distilled from the dialogue of Lord Krishna and Arjuna
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
