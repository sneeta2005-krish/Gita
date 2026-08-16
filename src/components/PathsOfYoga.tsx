import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, BookOpen } from 'lucide-react';
import { YOGA_PATHS } from '../data/gitaData';
import { YogaPath } from '../types';

export const PathsOfYoga: React.FC = () => {
  const [activePathId, setActivePathId] = useState<string | null>(null);

  const selectedPath: YogaPath =
    YOGA_PATHS.find((p) => p.id === activePathId) || YOGA_PATHS[0];

  return (
    <section id="paths" className="py-24 bg-gradient-to-b from-[#FAF8F5] via-amber-50/30 to-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Spiritual Synthesis</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241E] tracking-tight">
            Four Paths of Practice
          </h2>

          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-2" />

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal pt-2">
            The Gita recognizes that human minds differ in disposition. Discover the four harmonizing paths (Yoga Margas) suited to every seeker.
          </p>
        </div>

        {/* 4 Cards Grid with Gentle Lift & Hover Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {YOGA_PATHS.map((path) => {
            const isSelected = activePathId === path.id;
            return (
              <div
                key={path.id}
                id={`yoga-card-${path.id}`}
                onClick={() => setActivePathId(path.id)}
                className={`group cursor-pointer rounded-2xl sm:rounded-3xl p-6 sm:p-7 border bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl relative flex flex-col justify-between ${
                  path.color.border
                } ${isSelected ? 'ring-2 ring-amber-500 shadow-lg bg-amber-50/20' : ''}`}
              >
                <div>
                  {/* Icon & Sanskrit Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl filter drop-shadow-xs group-hover:scale-110 transition-transform duration-300">
                      {path.emoji}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${path.color.badge}`}>
                      {path.sanskritName}
                    </span>
                  </div>

                  {/* Title & Core Meaning */}
                  <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                    {path.name}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-800/80 mt-1 mb-3">
                    {path.meaning}
                  </p>

                  {/* Summary */}
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {path.summary}
                  </p>

                  {/* Hover Reveal Subtle Practice Highlight */}
                  <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 group-hover:text-stone-800 transition-colors space-y-1">
                    <span className="font-bold text-[11px] uppercase tracking-wider text-stone-700 block">
                      Core Practice:
                    </span>
                    <p className="line-clamp-2 leading-relaxed">
                      {path.corePractice}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-500 group-hover:text-amber-900 transition-colors">
                    {isSelected ? 'Viewing details' : 'Explore practice'}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-amber-600 text-stone-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* In-depth Interactive Yoga Path Spotlight Drawer / Box */}
        {selectedPath && (
          <div className="mt-12 rounded-3xl p-6 sm:p-10 bg-white border border-amber-200/90 shadow-xl relative overflow-hidden animate-fadeIn">
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
              
              {/* Left Column: Path Deep Dive */}
              <div className="lg:w-7/12 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedPath.emoji}</span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                      {selectedPath.name} ({selectedPath.sanskritName})
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-amber-800 uppercase tracking-wider">
                      {selectedPath.meaning}
                    </p>
                  </div>
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed pt-2">
                  {selectedPath.description}
                </p>

                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Who is this path best for?</span>
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 font-medium">
                    {selectedPath.idealFor}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Sanskrit Verse */}
              <div className="lg:w-5/12 w-full p-6 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-950 text-white shadow-lg space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>Key Sanskrit Verse</span>
                </div>

                <p className="font-serif text-base sm:text-lg font-bold text-amber-100">
                  {selectedPath.keyVerse}
                </p>

                <p className="text-xs sm:text-sm text-stone-300 italic pt-1 border-t border-stone-800">
                  "{selectedPath.keyVerseTranslation}"
                </p>

                <p className="text-[11px] text-amber-300/80 font-medium pt-2">
                  From the core dialogue of the Gita
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
