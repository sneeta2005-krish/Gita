import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

// YouTube Video ID for the flute tune: https://www.youtube.com/watch?v=2fGVsLr6hCc&t=7s
const YOUTUBE_VIDEO_ID = '2fGVsLr6hCc';
const START_SECONDS = 7;

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface BackgroundFlutePlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onStateChange?: (playing: boolean) => void;
}

export const BackgroundFlutePlayer: React.FC<BackgroundFlutePlayerProps> = ({
  isPlaying,
  onTogglePlay,
  onStateChange,
}) => {
  const playerRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);
  const [volume, setVolume] = useState(60);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAutoplayPrompt, setShowAutoplayPrompt] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Initialize YouTube IFrame API
  useEffect(() => {
    // Load YouTube API script if not already present
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player('youtube-flute-audio-container', {
          height: '1',
          width: '1',
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            enablejsapi: 1,
            fs: 0,
            iv_load_policy: 3,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            start: START_SECONDS,
          },
          events: {
            onReady: (event: any) => {
              setIsReady(true);
              event.target.setVolume(volume);
            },
            onStateChange: (event: any) => {
              // YT.PlayerState.PLAYING = 1, PAUSED = 2, ENDED = 0
              if (event.data === 1) {
                onStateChange?.(true);
                setShowAutoplayPrompt(false);
              } else if (event.data === 2 || event.data === 0) {
                onStateChange?.(false);
                if (event.data === 0) {
                  // Loop back to start
                  event.target.seekTo(START_SECONDS, true);
                  event.target.playVideo();
                }
              }
            },
            onError: (error: any) => {
              console.warn('YouTube Player error:', error);
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // ignore cleanup errors
        }
      }
    };
  }, []);

  // Handle play/pause sync with prop
  useEffect(() => {
    if (!isReady || !playerRef.current) return;

    try {
      if (isPlaying) {
        const state = playerRef.current.getPlayerState?.();
        if (state !== 1) {
          playerRef.current.playVideo?.();
        }
      } else {
        const state = playerRef.current.getPlayerState?.();
        if (state === 1) {
          playerRef.current.pauseVideo?.();
        }
      }
    } catch (e) {
      console.warn('Error updating playback state:', e);
    }
  }, [isPlaying, isReady]);

  // Volume change handler
  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (playerRef.current && isReady) {
      try {
        playerRef.current.setVolume(newVolume);
        if (newVolume > 0 && isMuted) {
          playerRef.current.unMute();
          setIsMuted(false);
        }
      } catch (e) {
        // ignore
      }
    }
  };

  // Mute / Unmute handler
  const handleToggleMute = () => {
    if (playerRef.current && isReady) {
      try {
        if (isMuted) {
          playerRef.current.unMute();
          playerRef.current.setVolume(volume || 50);
          setIsMuted(false);
        } else {
          playerRef.current.mute();
          setIsMuted(true);
        }
      } catch (e) {
        // ignore
      }
    }
  };

  // Start playback from banner prompt
  const handleStartMusic = () => {
    setHasInteracted(true);
    setShowAutoplayPrompt(false);
    onTogglePlay();
  };

  return (
    <>
      {/* Hidden YouTube Iframe Container */}
      <div
        id="youtube-flute-audio-container"
        className="fixed -top-[9999px] -left-[9999px] pointer-events-none opacity-0 w-1 h-1"
        aria-hidden="true"
      />

      {/* Initial Gentle Prompt Banner for Browser Autoplay Permission */}
      {showAutoplayPrompt && !isPlaying && (
        <div
          id="flute-autoplay-prompt"
          className="fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-sm w-[92%] sm:w-auto p-4 rounded-2xl glass border border-amber-400/40 shadow-[0_0_30px_rgba(251,191,36,0.25)] bg-[#05070a]/90 backdrop-blur-2xl flex items-center justify-between gap-3.5 animate-fadeIn"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full saffron-gradient flex items-center justify-center text-black font-bold text-lg shrink-0 shadow-md animate-pulse">
              🪈
            </div>
            <div>
              <p className="font-serif text-sm font-bold text-amber-200">
                Play Divine Flute
              </p>
              <p className="text-xs text-slate-300">
                Listen to peaceful Krishna flute in the background
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              id="prompt-play-flute-btn"
              onClick={handleStartMusic}
              className="px-3.5 py-1.5 rounded-full saffron-gradient text-black font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              Play
            </button>
            <button
              id="prompt-dismiss-flute-btn"
              onClick={() => setShowAutoplayPrompt(false)}
              className="p-1 text-slate-400 hover:text-slate-200 text-xs cursor-pointer"
              title="Dismiss"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Floating Bottom Left Audio Controller Widget */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2">
        {/* Expanded Controls Card */}
        {isExpanded && (
          <div className="p-4 rounded-2xl glass border border-amber-400/30 bg-[#05070a]/95 backdrop-blur-2xl shadow-2xl space-y-3 w-64 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-base">🪈</span>
                <div>
                  <p className="font-serif text-xs font-bold text-amber-300">
                    Krishna's Divine Flute
                  </p>
                  <p className="text-[10px] text-slate-400">Sacred Background Melody</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-slate-400 hover:text-slate-200 p-1 text-xs"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Playback & Volume Sliders */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Music className="w-3 h-3 text-amber-400" />
                  <span>Volume</span>
                </span>
                <span className="font-mono text-[10px] text-amber-400 font-bold">{isMuted ? '0%' : `${volume}%`}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleMute}
                  className="text-slate-400 hover:text-amber-300 transition-colors p-1"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-slate-500" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-amber-400" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => handleVolumeChange(Number(e.target.value))}
                  className="w-full accent-amber-400 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Quick Status / Credit */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                <span>{isPlaying ? 'Playing Flute Melody' : 'Paused'}</span>
              </span>
              <a
                href="https://www.youtube.com/watch?v=2fGVsLr6hCc&t=7s"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400/80 hover:text-amber-300 underline"
              >
                Source
              </a>
            </div>
          </div>
        )}

        {/* Compact Floating Flute Capsule Pill */}
        <div className="flex items-center gap-2">
          <button
            id="floating-flute-toggle-btn"
            onClick={onTogglePlay}
            className={`group px-3.5 py-2 rounded-full glass border transition-all duration-300 flex items-center gap-2.5 shadow-xl cursor-pointer ${
              isPlaying
                ? 'bg-amber-500/20 border-amber-400/60 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                : 'border-white/15 text-slate-300 hover:border-amber-400/40 hover:text-amber-300'
            }`}
            title={isPlaying ? 'Pause divine flute music' : 'Play divine flute music'}
            aria-label={isPlaying ? 'Pause divine flute music' : 'Play divine flute music'}
          >
            <div className="flex items-center justify-center">
              {isPlaying ? (
                <div className="flex items-center gap-0.5 h-3.5">
                  <span className="w-0.5 h-2.5 bg-amber-400 animate-pulse" style={{ animationDelay: '0ms' }} />
                  <span className="w-0.5 h-3.5 bg-amber-400 animate-pulse" style={{ animationDelay: '150ms' }} />
                  <span className="w-0.5 h-1.5 bg-amber-400 animate-pulse" style={{ animationDelay: '300ms' }} />
                  <span className="w-0.5 h-3 bg-amber-400 animate-pulse" style={{ animationDelay: '450ms' }} />
                </div>
              ) : (
                <span className="text-sm">🪈</span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span>{isPlaying ? 'Flute Playing' : 'Divine Flute'}</span>
            </div>

            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform fill-amber-400" />
            )}
          </button>

          {/* Expand Settings Button */}
          <button
            id="floating-flute-settings-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-full glass border border-white/15 text-slate-300 hover:text-amber-300 hover:border-amber-400/40 transition-colors shadow-lg cursor-pointer"
            title="Flute audio settings"
          >
            {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </>
  );
};
