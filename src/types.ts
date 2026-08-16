export interface Teaching {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  fullExplanation: string[];
  sanskritShloka: {
    verse: string;
    transliteration: string;
    translation: string;
    reference: string;
  };
  modernApplication: string;
  keyTakeaways: string[];
  themeColor: {
    bg: string;
    cardBg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
    glow: string;
  };
  iconName: string;
  tags?: string[];
}

export interface ReflectionQuestion {
  id: number;
  teachingId: number;
  teachingTitle: string;
  question: string;
  context: string;
  journalPrompt: string;
  actionableStep: string;
}

export interface YogaPath {
  id: string;
  name: string;
  sanskritName: string;
  meaning: string;
  emoji: string;
  summary: string;
  description: string;
  corePractice: string;
  idealFor: string;
  keyVerse: string;
  keyVerseTranslation: string;
  color: {
    badge: string;
    border: string;
    accent: string;
    lightBg: string;
  };
}

export interface FeaturePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}
