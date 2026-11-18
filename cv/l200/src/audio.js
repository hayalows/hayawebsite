// Synthesised vehicle audio (Web Audio). No samples are downloaded.
// Diesel: four-cylinder firing pulse, injector clatter, turbo whistle and blow-off.
// V8: cross-plane burble (uneven half-order pulses), induction roar and overrun pops.

export class VehicleAudio {
  constructor() { this.ctx = null; this.kind = 'diesel'; this.on = false; this.cabin = 0; this.muted = false; }

  async unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
      const c = this.ctx = new AC();
      this.master = c.createGain(); this.master.gain.value = this.muted ? 0 : 0.7;
      const comp = c.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 4;
      this.cabinFilter = c.createBiquadFilter(); this.cabinFilter.type = 'lowpass'; this.cabinFilter.frequency.value = 18000;
      this.master.connect(this.cabinFilter).connect(comp).connect(c.destination);
      this.noiseBuf = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
      const d = this.noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      this._buildEngine(); this._buildEnv();
    }
    if (this.ctx.state !== 'running') await this.ctx.resume();
    return true;
  }
  _noise() { const n = this.ctx.createBufferSource(); n.buffer = this.noiseBuf; n.loop = true; n.start(); return n; }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.7, this.ctx.currentTime, 0.05); }

  _buildEngine() {
    const c = this.ctx;
    this.eng = c.createGain(); this.eng.gain.value = 0;
    const shaper = c.createWaveShaper(); const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; curve[i] = Math.tanh(x * 2.6); }
    shaper.curve = curve;
    this.engLP = c.createBiquadFilter(); this.engLP.type = 'lowpass'; this.engLP.Q.value = 0.8;
    this.eng.connect(shaper).connect(this.engLP).connect(this.master);
    // firing fundamental + harmonics
    this.osc = [];
    const mk = (type, gain) => { const o = c.createOscillator(); o.type = type; const g = c.createGain(); g.gain.value = gain; o.connect(g).connect(this.eng); o.start(); this.osc.push({ o, g, base: gain }); return o; };
    this.o1 = mk('sawtooth', 0.5); this.o2 = mk('square', 0.18); this.o3 = mk('triangle', 0.35); this.oSub = mk('sine', 0.6);
    // amplitude modulation for uneven firing (V8 burble) / diesel knock
    this.am = c.createGain(); this.am.gain.value = 1;
    this.eng.disconnect(); this.eng.connect(this.am).connect(shaper);
    this.lfo = c.createOscillator(); this.lfo.type = 'square'; this.lfoGain = c.createGain(); this.lfoGain.gain.value = 0.35;
    this.lfo.connect(this.lfoGain).connect(this.am.gain); this.lfo.start();
    // diesel clatter: band-passed noise gated at the firing rate
    const n = this._noise(); this.clatBP = c.createBiquadFilter(); this.clatBP.type = 'bandpass'; this.clatBP.frequency.value = 2600; this.clatBP.Q.value = 1.6;
    this.clat = c.createGain(); this.clat.gain.value = 0; this.clatGate = c.createGain(); this.clatGate.gain.value = 0;
    this.clatLfo = c.createOscillator(); this.clatLfo.type = 'square'; const cg = c.createGain(); cg.gain.value = 0.5;
    this.clatLfo.connect(cg).connect(this.clatGate.gain); this.clatLfo.start();
    n.connect(this.clatBP).connect(this.clatGate).connect(this.clat).connect(this.master);
    // induction / exhaust roar
    const n2 = this._noise(); this.roarBP = c.createBiquadFilter(); this.roarBP.type = 'bandpass'; this.roarBP.Q.value = 0.7;
    this.roar = c.createGain(); this.roar.gain.value = 0; n2.connect(this.roarBP).connect(this.roar).connect(this.master);
    // turbo whistle
    this.turbo = c.createOscillator(); this.turbo.type = 'sine'; this.turboG = c.createGain(); this.turboG.gain.value = 0;
    this.turbo.connect(this.turboG).connect(this.master); this.turbo.start();
  }
  _buildEnv() {
    const c = this.ctx;
    // wind / road noise
    const n = this._noise(); this.windLP = c.createBiquadFilter(); this.windLP.type = 'lowpass'; this.windLP.frequency.value = 600;
    this.wind = c.createGain(); this.wind.gain.value = 0; n.connect(this.windLP).connect(this.wind).connect(this.master);
    // tyre squeal
    const n2 = this._noise(); this.sqBP = c.createBiquadFilter(); this.sqBP.type = 'bandpass'; this.sqBP.frequency.value = 1300; this.sqBP.Q.value = 9;
    this.sq = c.createGain(); this.sq.gain.value = 0; n2.connect(this.sqBP).connect(this.sq).connect(this.master);
    // gravel / grass rumble
    const n3 = this._noise(); this.grLP = c.createBiquadFilter(); this.grLP.type = 'lowpass'; this.grLP.frequency.value = 260;
    this.gravel = c.createGain(); this.gravel.gain.value = 0; n3.connect(this.grLP).connect(this.gravel).connect(this.master);
  }

  setKind(kind) { this.kind = kind; }

  // one-shot helpers
  _env(node, t0, a, peak, dcy) { const g = node.gain; g.cancelScheduledValues(t0); g.setValueAtTime(0.0001, t0); g.exponentialRampToValueAtTime(peak, t0 + a); g.exponentialRampToValueAtTime(0.0001, t0 + a + dcy); }
  click(freq = 3200, vol = 0.25, len = 0.02) {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime;
    const n = c.createBufferSource(); n.buffer = this.noiseBuf; const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = freq; bp.Q.value = 3;
    const g = c.createGain(); n.connect(bp).connect(g).connect(this.master); this._env(g, t, 0.002, vol, len); n.start(t); n.stop(t + len + 0.05);
  }
  thunk(vol = 0.6) {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(48, t + 0.18);
    const g = c.createGain(); o.connect(g).connect(this.master); this._env(g, t, 0.004, vol, 0.25); o.start(t); o.stop(t + 0.35);
    this.click(900, vol * 0.4, 0.06);
  }
  latch() { this.click(2400, 0.18, 0.03); setTimeout(() => this.click(1700, 0.12, 0.03), 60); }
  tick(on) { this.click(on ? 3800 : 2600, 0.12, 0.012); }
  horn(spec, dur = 0.5) {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime;
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 0.7;
    const g = c.createGain(); bp.connect(g).connect(this.master);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.32, t + 0.02); g.gain.setValueAtTime(0.32, t + dur); g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.08);
    for (const f of spec.horn) { const o = c.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(bp); o.start(t); o.stop(t + dur + 0.1); }
  }
  chime(notes = [660, 880, 1320]) {
    if (!this.ctx) return; const c = this.ctx;
    notes.forEach((f, i) => { const t = c.currentTime + i * 0.11; const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f; const g = c.createGain(); o.connect(g).connect(this.master); this._env(g, t, 0.01, 0.2, 0.5); o.start(t); o.stop(t + 0.6); });
  }
  starter(spec, ok) {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 160;
    const lfo = c.createOscillator(); lfo.frequency.value = spec.engine === 'diesel' ? 9 : 11; const lg = c.createGain(); lg.gain.value = 40; lfo.connect(lg).connect(o.frequency);
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
    const g = c.createGain(); o.connect(lp).connect(g).connect(this.master);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.2, t + 0.05); g.gain.setValueAtTime(0.2, t + 0.75); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    o.start(t); lfo.start(t); o.stop(t + 1); lfo.stop(t + 1);
  }
  blowoff() {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime;
    const n = c.createBufferSource(); n.buffer = this.noiseBuf; const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.2;
    bp.frequency.setValueAtTime(3500, t); bp.frequency.exponentialRampToValueAtTime(900, t + 0.35);
    const g = c.createGain(); n.connect(bp).connect(g).connect(this.master); this._env(g, t, 0.01, 0.14, 0.35); n.start(t); n.stop(t + 0.5);
  }
  pop() {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime;
    const n = c.createBufferSource(); n.buffer = this.noiseBuf; const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 700;
    const g = c.createGain(); n.connect(lp).connect(g).connect(this.master); this._env(g, t, 0.002, 0.5, 0.07); n.start(t); n.stop(t + 0.15);
  }
  crash(v) { this.thunk(Math.min(1, 0.3 + v)); this.click(600, Math.min(0.6, v), 0.15); }

  /** called every frame */
  update(st, spec, dt) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime, k = 0.03;
    const diesel = spec.engine === 'diesel';
    const rpm = st.engine ? Math.max(st.rpm, 1) : 0;
    const cyl = diesel ? 4 : 8, fire = rpm / 60 * cyl / 2;
    const load = st.throttle ?? 0, run = st.engine ? 1 : 0;
    const f0 = Math.max(fire, 1);
    this.o1.frequency.setTargetAtTime(diesel ? f0 : f0 * 0.5, t, k);
    this.o2.frequency.setTargetAtTime(f0 * (diesel ? 2 : 1), t, k);
    this.o3.frequency.setTargetAtTime(f0 * (diesel ? 0.5 : 1.5), t, k);
    this.oSub.frequency.setTargetAtTime(f0 * 0.5, t, k);
    // uneven firing: modulate at half-order for V8 burble, firing rate for diesel
    this.lfo.frequency.setTargetAtTime(diesel ? f0 : f0 * 0.25, t, k);
    this.lfoGain.gain.setTargetAtTime(diesel ? 0.25 : 0.55 - Math.min(0.35, rpm / spec.redline * 0.4), t, 0.1);
    const r = rpm / spec.redline;
    this.engLP.frequency.setTargetAtTime(diesel ? 260 + r * 1600 + load * 900 : 220 + r * 2600 + load * 1600, t, k);
    const base = (diesel ? 0.32 : 0.42) * (0.55 + 0.45 * load + r * 0.3);
    this.eng.gain.setTargetAtTime(base * run, t, 0.06);
    // clatter (diesel) — strongest at idle and under load
    this.clatLfo.frequency.setTargetAtTime(f0, t, k);
    this.clat.gain.setTargetAtTime(diesel ? run * (0.06 + 0.05 * load) * (1.2 - r * 0.6) : 0, t, 0.05);
    this.clatBP.frequency.setTargetAtTime(2200 + r * 1400, t, 0.1);
    // roar
    this.roarBP.frequency.setTargetAtTime(diesel ? 300 + r * 900 : 140 + r * 700, t, k);
    this.roar.gain.setTargetAtTime(run * load * (diesel ? 0.06 : 0.16) * (0.4 + r), t, 0.05);
    // turbo
    const boost = diesel ? Math.max(0, r - 0.25) * load : 0;
    this.turbo.frequency.setTargetAtTime(2400 + boost * 5200, t, 0.15);
    this.turboG.gain.setTargetAtTime(run * boost * 0.035, t, 0.12);
    if (diesel && this._lastLoad > 0.6 && load < 0.15 && r > 0.45) this.blowoff();
    if (!diesel && this._lastLoad > 0.6 && load < 0.1 && r > 0.5 && Math.random() < 0.7) { this.pop(); setTimeout(() => this.pop(), 90 + Math.random() * 120); }
    this._lastLoad = load;
    // environment
    const speed = Math.hypot(st.vx, st.vy);
    this.wind.gain.setTargetAtTime(Math.min(0.32, speed * speed * 0.00018), t, 0.2);
    this.windLP.frequency.setTargetAtTime(400 + speed * 40, t, 0.2);
    const sq = st.surface === 'asphalt' ? Math.max(0, st.slip - 0.35) : 0;
    this.sq.gain.setTargetAtTime(Math.min(0.28, sq * 0.4), t, 0.05);
    this.sqBP.frequency.setTargetAtTime(1100 + Math.sin(t * 13) * 120 + speed * 8, t, 0.02);
    this.gravel.gain.setTargetAtTime(st.surface !== 'asphalt' && st.surface !== 'floor' ? Math.min(0.4, speed * 0.03) : 0, t, 0.1);
    // inside the cabin everything is muffled
    this.cabinFilter.frequency.setTargetAtTime(this.cabin ? 1500 : 18000, t, 0.1);
  }
}
