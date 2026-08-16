// Peaceful ambient sound generator using Web Audio API
// Generates gentle tanpura-inspired harmonic warm drone and soft meditative bell resonance

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private chimeTimer: any = null;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public toggle(): boolean {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private start() {
    if (!this.ctx) return;
    this.isPlaying = true;

    // Master Gain for smooth fade-in
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 3);
    this.masterGain.connect(this.ctx.destination);

    // Subtle Tanpura drone frequencies (Sa - Pa harmonic tuning: C# / G# / C# base)
    // Base frequency C#3 (~138.59 Hz), Pa (G#3 ~207.65 Hz), High Sa (C#4 ~277.18 Hz)
    const baseFreqs = [138.59, 207.65, 277.18, 415.3, 554.37];

    this.oscillators = [];
    baseFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Add gentle detune for rich warm acoustic chorus
      osc.detune.setValueAtTime((idx - 2) * 3.5, this.ctx.currentTime);

      // Low level for tranquil background ambiance
      const targetVol = 0.04 / (idx + 1);
      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(targetVol, this.ctx.currentTime + 2);

      // Gentle LFO filter effect
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800 + idx * 200, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      this.oscillators.push(osc);
    });

    // Schedule periodic soft meditative chime
    this.scheduleChimes();
  }

  private scheduleChimes() {
    if (!this.isPlaying || !this.ctx) return;

    // Play a delicate bell chime every 8-14 seconds
    const interval = 8000 + Math.random() * 6000;
    this.chimeTimer = setTimeout(() => {
      this.playSoftBell();
      this.scheduleChimes();
    }, interval);
  }

  public playSoftBell() {
    if (!this.ctx || !this.isPlaying || !this.masterGain) return;
    try {
      const chimeFreqs = [554.37, 659.25, 830.61, 987.77]; // C# minor / Bhupali scale
      const freq = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 3.5);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 3.6);
    } catch (e) {
      // Ignore
    }
  }

  public stop() {
    if (this.chimeTimer) {
      clearTimeout(this.chimeTimer);
      this.chimeTimer = null;
    }

    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch (e) {
            // Safe ignore
          }
        });
        this.oscillators = [];
        this.isPlaying = false;
      }, 1300);
    } else {
      this.isPlaying = false;
    }
  }
}

export const ambientSound = new AmbientSoundEngine();
