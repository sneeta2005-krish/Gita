import React, { useState } from 'react';
import { RefreshCw, Sparkles, HelpCircle, PenLine, Check, Heart } from 'lucide-react';
import { REFLECTION_QUESTIONS } from '../data/gitaData';

export const ReflectSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showJournalGuide, setShowJournalGuide] = useState(false);
  const [hasReflected, setHasReflected] = useState(false);

  const currentReflection = REFLECTION_QUESTIONS[currentIndex];

  const handleNextReflection = () => {
    setIsFlipping(true);
    setTimeout(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * REFLECTION_QUESTIONS.length);
      } while (nextIndex === currentIndex && REFLECTION_QUESTIONS.length > 1);
      
      setCurrentIndex(nextIndex);
      setIsFlipping(false);
      setHasReflected(false);
    }, 250);
  };

  return (
    <section id="reflect" className="py-24 bg-gradient-to-b from-amber-50/40 via-stone-100/60 to-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Decorative Halo Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-r from-amber-200/20 via-rose-200/15 to-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Mindful Self-Inquiry</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241E] tracking-tight">
            Pause & Reflect
          </h2>

          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-2" />

          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Wisdom transforms life only when turned inward. Take a quiet breath, contemplate the question below, and observe your mind.
          </p>
        </div>

        {/* Interactive Main Reflection Card */}
        <div className="relative">
          
          <div
            id="reflection-main-card"
            className={`rounded-3xl p-8 sm:p-12 bg-white/95 border border-amber-200 shadow-xl backdrop-blur-sm transition-all duration-300 ${
              isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {/* Top Badge & Counter */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 uppercase tracking-wider">
                Teaching: {currentReflection.teachingTitle}
              </span>

              <span className="text-xs font-medium text-stone-400">
                Reflection {currentIndex + 1} of {REFLECTION_QUESTIONS.length}
              </span>
            </div>

            {/* The Central Question Display */}
            <div className="my-8 text-center space-y-6">
              <HelpCircle className="w-10 h-10 text-amber-500/70 mx-auto" />
              
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C241E] leading-relaxed tracking-tight max-w-2xl mx-auto">
                "{currentReflection.question}"
              </h3>

              <p className="text-sm sm:text-base text-stone-600 italic max-w-xl mx-auto font-serif">
                {currentReflection.context}
              </p>
            </div>

            {/* Optional Journal & Action Prompt Accordion */}
            {showJournalGuide && (
              <div className="my-6 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-4 animate-fadeIn">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                    <PenLine className="w-3.5 h-3.5" />
                    <span>Journaling Prompt</span>
                  </span>
                  <p className="text-sm text-stone-800 leading-relaxed font-medium">
                    {currentReflection.journalPrompt}
                  </p>
                </div>

                <div className="space-y-1 pt-3 border-t border-amber-200/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Mindful Action for Today</span>
                  </span>
                  <p className="text-sm text-stone-800 leading-relaxed">
                    {currentReflection.actionableStep}
                  </p>
                </div>
              </div>
            )}

            {/* Reflection Action Controls */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              <div className="flex items-center gap-3">
                <button
                  id="toggle-journal-guide-btn"
                  onClick={() => setShowJournalGuide(!showJournalGuide)}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <PenLine className="w-3.5 h-3.5 text-stone-500" />
                  <span>{showJournalGuide ? 'Hide Journal Guide' : 'Deep Journal Guide'}</span>
                </button>

                <button
                  id="mark-reflected-btn"
                  onClick={() => setHasReflected(!hasReflected)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    hasReflected
                      ? 'bg-rose-100 text-rose-800 border border-rose-200'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${hasReflected ? 'fill-rose-500 text-rose-500' : 'text-stone-400'}`} />
                  <span>{hasReflected ? 'Reflected' : 'Save in Heart'}</span>
                </button>
              </div>

              {/* Reveal Another Reflection Button */}
              <button
                id="reveal-another-reflection-btn"
                onClick={handleNextReflection}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold text-sm shadow-md shadow-amber-800/15 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 animate-spin-reverse" />
                <span>Reveal Another Reflection</span>
              </button>

            </div>

          </div>

          {/* Quick Dots Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {REFLECTION_QUESTIONS.map((_, idx) => (
              <button
                key={idx}
                id={`reflection-dot-${idx}`}
                onClick={() => {
                  setCurrentIndex(idx);
                  setHasReflected(false);
                }}
                aria-label={`Go to reflection question ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-7 bg-amber-600 shadow-xs'
                    : 'bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
