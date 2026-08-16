import React, { useState } from 'react';
import {
  Flame,
  Sun,
  Shield,
  Scale,
  Compass,
  Layers,
  HeartHandshake,
  Crown,
  ArrowRight,
  Sparkles,
  BookOpen,
  Search,
} from 'lucide-react';
import { EIGHT_TEACHINGS } from '../data/gitaData';
import { Teaching } from '../types';
import { TeachingModal } from './TeachingModal';

export const EightTeachings: React.FC = () => {
  const [selectedTeaching, setSelectedTeaching] = useState<Teaching | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'duty' | 'mind' | 'devotion'>('all');

  const getIcon = (iconName: string, accentColor: string) => {
    const props = { className: `w-5 h-5 ${accentColor}` };
    switch (iconName) {
      case 'Flame':
        return <Flame {...props} />;
      case 'Sun':
        return <Sun {...props} />;
      case 'Shield':
        return <Shield {...props} />;
      case 'Scale':
        return <Scale {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Crown':
        return <Crown {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const handleOpenTeaching = (teaching: Teaching) => {
    setSelectedTeaching(teaching);
  };

  const handleCloseModal = () => {
    setSelectedTeaching(null);
  };

  const handlePrevTeaching = () => {
    if (!selectedTeaching) return;
    const currentIndex = EIGHT_TEACHINGS.findIndex((t) => t.id === selectedTeaching.id);
    if (currentIndex > 0) {
      setSelectedTeaching(EIGHT_TEACHINGS[currentIndex - 1]);
    }
  };

  const handleNextTeaching = () => {
    if (!selectedTeaching) return;
    const currentIndex = EIGHT_TEACHINGS.findIndex((t) => t.id === selectedTeaching.id);
    if (currentIndex < EIGHT_TEACHINGS.length - 1) {
      setSelectedTeaching(EIGHT_TEACHINGS[currentIndex + 1]);
    }
  };

  // Filtered teachings
  const filteredTeachings = EIGHT_TEACHINGS.filter((teaching) => {
    const matchesSearch =
      teaching.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teaching.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teaching.summary.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === 'duty') {
      return [1, 5, 6].includes(teaching.id);
    }
    if (selectedCategory === 'mind') {
      return [2, 3, 4].includes(teaching.id);
    }
    if (selectedCategory === 'devotion') {
      return [6, 7, 8].includes(teaching.id);
    }
    return true;
  });

  const scrollToYogaPaths = (e: React.MouseEvent) => {
    e.stopPropagation();
    const element = document.getElementById('paths');
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
    <section id="teachings" className="py-24 bg-[#FAF8F5] relative">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>Foundations of Life</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241E] tracking-tight">
            The Eight Core Teachings of the Bhagavad Gita
          </h2>

          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-2" />

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal pt-2">
            Each principle provides a practical compass for navigating mental conflict, relationships, decision-making, and conscious living.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-10 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-stone-200/60 border border-stone-300/50 w-full md:w-auto">
            <button
              id="filter-all"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All 8 Teachings
            </button>
            <button
              id="filter-duty"
              onClick={() => setSelectedCategory('duty')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'duty'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Duty & Action
            </button>
            <button
              id="filter-mind"
              onClick={() => setSelectedCategory('mind')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'mind'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Mind & Balance
            </button>
            <button
              id="filter-devotion"
              onClick={() => setSelectedCategory('devotion')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'devotion'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Devotion & Unity
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="teachings-search-input"
              type="text"
              placeholder="Search wisdom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-stone-300/80 text-xs sm:text-sm text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all placeholder:text-stone-400 shadow-2xs"
            />
          </div>

        </div>

        {/* 8 Teachings Responsive Grid (Desktop: 2 per row, Tablet: 2 per row, Mobile: 1 per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredTeachings.map((teaching) => {
            return (
              <div
                key={teaching.id}
                id={`teaching-card-${teaching.id}`}
                onClick={() => handleOpenTeaching(teaching)}
                className={`group cursor-pointer rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative flex flex-col justify-between overflow-hidden ${teaching.themeColor.cardBg} ${teaching.themeColor.border} ${teaching.themeColor.glow}`}
              >
                
                <div>
                  {/* Card Header: Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    
                    <div className="flex items-center gap-3">
                      {/* Number */}
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-sacred text-sm font-bold border shadow-2xs ${teaching.themeColor.badgeBg}`}
                      >
                        {teaching.number}
                      </span>
                      
                      {/* Small Icon */}
                      <div className="w-9 h-9 rounded-xl bg-white/90 shadow-2xs border border-stone-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getIcon(teaching.iconName, teaching.themeColor.accent)}
                      </div>
                    </div>

                    {/* Sanskrit Hint badge */}
                    <span className="text-[11px] font-semibold text-stone-500 tracking-wider uppercase">
                      Teaching {teaching.id}
                    </span>

                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 group-hover:text-amber-950 transition-colors leading-snug">
                    {teaching.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-medium text-stone-600 mt-1 mb-4">
                    {teaching.subtitle}
                  </p>

                  {/* Short Explanation */}
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {teaching.summary}
                  </p>

                  {/* Interactive Tags for Teaching 6 (Paths of Yoga) */}
                  {teaching.tags && (
                    <div className="mb-6 pt-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-2">
                        Four Integrated Paths:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {teaching.tags.map((tag, idx) => (
                          <button
                            key={idx}
                            id={`tag-yoga-${idx}`}
                            onClick={scrollToYogaPaths}
                            title="Click to view Yoga Paths in detail"
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 hover:bg-amber-100 text-teal-900 border border-teal-200/80 transition-all hover:scale-105 shadow-2xs flex items-center gap-1.5 cursor-pointer"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                            <span>{tag}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-stone-900/10 flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-stone-600 group-hover:text-amber-900 transition-colors">
                    Click to view Shloka & Life Application
                  </span>

                  <button
                    id={`btn-explore-${teaching.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenTeaching(teaching);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 group-hover:bg-amber-600 text-stone-800 group-hover:text-white border border-stone-200/80 group-hover:border-transparent text-xs font-bold shadow-xs transition-all duration-200 cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty Search Feedback */}
        {filteredTeachings.length === 0 && (
          <div className="text-center py-16 bg-white/60 rounded-3xl border border-stone-200/80 max-w-lg mx-auto">
            <p className="font-serif text-xl font-semibold text-stone-800">No teachings found matching your search</p>
            <p className="text-sm text-stone-500 mt-2">Try clearing your search query or selecting "All 8 Teachings".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Complete Teaching Modal View */}
      {selectedTeaching && (
        <TeachingModal
          teaching={selectedTeaching}
          onClose={handleCloseModal}
          onPrev={handlePrevTeaching}
          onNext={handleNextTeaching}
          hasPrev={selectedTeaching.id > 1}
          hasNext={selectedTeaching.id < EIGHT_TEACHINGS.length}
        />
      )}
    </section>
  );
};
