// based on example from
// https://stackoverflow.com/questions/6343450/generating-sound-on-the-fly-with-javascript-html5

class AudioEffect {
  constructor(
    public type: string,
    public id: string,
    public frequency: number,
    public volume: number,
    public delay: number,
    public duration: number 
  ) {};
};

class Beep extends AudioEffect {
  constructor(
    frequency? : number,
    duration?: number,
    volume? : number,
    delay?: number
  ) {
    super(
      'sine',
      'beep',
      frequency || 2400,
      volume || 1.0,
      delay || 0,
      duration || 100
    );
  };
};

class AudioSystem {
  private context: AudioContext;
  private oscillator: OscillatorNode;
  private effects: AudioEffect[];

  constructor() {
    this.context = new window.AudioContext();
    this.oscillator = this.context.createOscillator();
  };

  isRegistered(effectId: string): boolean {
    return this.effects.filter(effect => {effect.id == effectId}).length > 0;
  };

  registerEffect(effect: AudioEffect): void {
    if(!this.isRegistered(effect.id)) {
      this.effects.push(effect);
    }
  };

  effect(effectId: string): AudioEffect | undefined {
    return this.effects[effectId];
  };

  removeEffect(effectId: string): void {
    this.effects = this.effects.filter(effect => { effect.id !== effectId });
  };

  play(effectId: string, delay?: number, duration?: number): void {
    const effect = this.effect(effectId);
    if (effect) {
      // close down current oscillator before starting a new tone
      this.oscillator.stop(this.context.currentTime);
      this.oscillator.disconnect(this.context.destination);
      this.oscillator = undefined;
    }
    this.oscillator = this.context.createOscillator();
    this.oscillator.frequency.value = effect.frequency;
    const startOffset = (delay || (effect.delay || 0)) / 1000;
    const stopOffset = (delay || (effect.delay || 0)) + (duration || (effect.duration || 0)) / 1000;
    this.oscillator.start(this.context.currentTime + startOffset);
    this.oscillator.connect(this.context.destination);
    // stop
    this.oscillator.stop(this.context.currentTime + stopOffset);
  };
}

export {
  AudioSystem,
  AudioEffect,
  Beep
}
