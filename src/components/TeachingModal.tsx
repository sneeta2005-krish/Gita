import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen, Quote, CheckCircle2, Lightbulb, Share2 } from 'lucide-react';
import { Teaching } from '../types';

interface TeachingModalProps {
  teaching: Teaching | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const TeachingModal: React.FC<TeachingModalProps> = ({
  teaching,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (teaching) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [teaching]);

  if (!teaching) return null;

  const handleCopyQuote = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `"${teaching.title}"\n${teaching.sanskritShloka.translation} — ${teaching.sanskritShloka.reference}`
      );
    }
  };

  return (
    <div
      id="teaching-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-950/70 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        id="teaching-modal-container"
        className="relative w-full max-w-3xl my-auto bg-[#FAF8F5] rounded-3xl shadow-2xl border border-amber-900/15 overflow-hidden transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon / Banner */}
        <div className={`p-6 sm:p-8 ${teaching.themeColor.bg} border-b ${teaching.themeColor.border} relative`}>
          
          {/* Top Actions: Close & Navigation Buttons */}
          <div className="flex items-center justify-between gap-4 mb-4">
            
            {/* Number & Topic Badge */}
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider border uppercase ${teaching.themeColor.badgeBg}`}>
                Teaching #{teaching.number}
              </span>
              <span className="text-xs text-stone-500 font-medium">Core Gita Wisdom</span>
            </div>

            {/* Close Button */}
            <div className="flex items-center gap-2">
              <button
                id="modal-share-btn"
                onClick={handleCopyQuote}
                title="Copy Shloka & Wisdom"
                aria-label="Copy wisdom quote to clipboard"
                className="p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-amber-800 border border-stone-200 transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                id="modal-close-btn"
                onClick={onClose}
                aria-label="Close modal dialog"
                className="p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-red-700 border border-stone-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Title & Subtitle */}
          <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
            {teaching.title}
          </h3>
          <p className="text-sm sm:text-base font-medium text-amber-900/90 mt-2">
            {teaching.subtitle}
          </p>

        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[68vh] overflow-y-auto">
          
          {/* Sacred Sanskrit Shloka Box */}
          <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 to-orange-50/60 border border-amber-200/80 shadow-xs relative">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-300/40 pointer-events-none" />
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Original Shloka & Translation</span>
              </div>

              {/* Devanagari Sanskrit Script */}
              <p className="font-serif text-lg sm:text-xl font-bold text-stone-900 whitespace-pre-line leading-relaxed">
                {teaching.sanskritShloka.verse}
              </p>

              {/* Transliteration */}
              <p className="text-xs sm:text-sm italic text-stone-600 font-serif">
                {teaching.sanskritShloka.transliteration}
              </p>

              {/* English Translation */}
              <p className="text-sm sm:text-base text-stone-800 font-medium pt-2 border-t border-amber-200/60 leading-relaxed">
                "{teaching.sanskritShloka.translation}"
              </p>

              <p className="text-xs text-amber-700/90 font-semibold tracking-wide text-right">
                — {teaching.sanskritShloka.reference}
              </p>
            </div>
          </div>

          {/* In-depth Philosophical Explanation */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
              Philosophical Meaning & Essence
            </h4>
            <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
              {teaching.fullExplanation.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Practical Application in Modern Daily Life */}
          <div className="rounded-2xl p-5 bg-stone-100/80 border border-stone-200/80 space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Modern Daily Life Application</span>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              {teaching.modernApplication}
            </p>
          </div>

          {/* Key Principles / Takeaways */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-stone-900">
              Key Principles to Remember
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {teaching.keyTakeaways.map((takeaway, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200/80 text-xs sm:text-sm text-stone-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Navigation (Prev / Next) */}
        <div className="p-4 sm:p-5 bg-stone-100/90 border-t border-stone-200 flex items-center justify-between">
          <button
            id="modal-prev-teaching"
            onClick={onPrev}
            disabled={!hasPrev}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              hasPrev
                ? 'bg-white hover:bg-amber-50 text-stone-800 border border-stone-200 shadow-xs cursor-pointer'
                : 'opacity-40 text-stone-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Teaching</span>
          </button>

          <span className="text-xs text-stone-500 font-medium">
            {teaching.id} of 8
          </span>

          <button
            id="modal-next-teaching"
            onClick={onNext}
            disabled={!hasNext}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              hasNext
                ? 'bg-amber-700 hover:bg-amber-800 text-white shadow-xs cursor-pointer'
                : 'opacity-40 bg-stone-300 text-stone-500 cursor-not-allowed'
            }`}
          >
            <span>Next Teaching</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
