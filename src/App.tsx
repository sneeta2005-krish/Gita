import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { EightTeachings } from './components/EightTeachings';
import { ReflectSection } from './components/ReflectSection';
import { KrishnaArjunaSection } from './components/KrishnaArjunaSection';
import { PathsOfYoga } from './components/PathsOfYoga';
import { FinalSection } from './components/FinalSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { BackgroundFlutePlayer } from './components/BackgroundFlutePlayer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isFlutePlaying, setIsFlutePlaying] = useState(false);

  const toggleFluteAudio = () => {
    setIsFlutePlaying((prev) => !prev);
  };

  useEffect(() => {
    const sections = ['hero', 'introduction', 'teachings', 'paths', 'reflect', 'dialogue'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C241E] flex flex-col selection:bg-amber-200 selection:text-amber-950">
      {/* Sticky Navigation Bar with Audio Toggle */}
      <Navbar
        activeSection={activeSection}
        isAudioPlaying={isFlutePlaying}
        onToggleAudio={toggleFluteAudio}
      />

      {/* Background YouTube Flute Player Component */}
      <BackgroundFlutePlayer
        isPlaying={isFlutePlaying}
        onTogglePlay={toggleFluteAudio}
        onStateChange={(playing) => setIsFlutePlaying(playing)}
      />

      {/* Main Content Sections */}
      <main className="grow">
        {/* 1. Hero Section */}
        <Hero
          isFlutePlaying={isFlutePlaying}
          onToggleFlute={toggleFluteAudio}
        />

        {/* 2. Introduction Section */}
        <Introduction />

        {/* 3. Eight Core Teachings Grid with Modal */}
        <EightTeachings />

        {/* 4. Four Paths of Yoga */}
        <PathsOfYoga />

        {/* 5. Interactive "Pause & Reflect" Question Generator */}
        <ReflectSection />

        {/* 6. Krishna & Arjuna Kurukshetra Battlefield Dialogue */}
        <KrishnaArjunaSection />

        {/* 7. Final Living the Wisdom Section */}
        <FinalSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
