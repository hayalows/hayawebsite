// Shared drive controller: input, physics stepping, visuals, cameras, HUD,
// dust, skid marks. Used by Drive Studio and Accra 3D.
import { createDynamics, sampleTyres, stepDynamics } from './physics.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const damp = (a, b, k, dt) => b + (a - b) * Math.exp(-k * dt);
const FIXED_STEP = 1 / 120;
const NEUTRAL = { throttle: 0, brake: 0, steer: 0, handbrake: false };

export function makeCollider({ bounds, circles = [], boxes = [], carR = 0.95, carHalf = 1.7 }) {
  const obstacles = boxes.map((b) => ({
    ...b, cs: Math.cos(b.rot || 0), sn: Math.sin(b.rot || 0),
    radius: Math.hypot(b.hx, b.hz) + carR,
  }));
  // uniform grid: each obstacle is filed in every 16 m cell it can touch, so a query
  // only looks at the handful of obstacles near the car instead of all of them
  const CELL = 16, grid = new Map(), key = (i, j) => i * 73856093 ^ j * 19349663;
  const file = (item, x, z, r) => {
    for (let i = Math.floor((x - r) / CELL); i <= Math.floor((x + r) / CELL); i++)
      for (let j = Math.floor((z - r) / CELL); j <= Math.floor((z + r) / CELL); j++) {
        const k = key(i, j); let cell = grid.get(k); if (!cell) grid.set(k, cell = { boxes: [], circles: [] }); item.r !== undefined && !item.hx ? cell.circles.push(item) : cell.boxes.push(item);
      }
  };
  for (const b of obstacles) file(b, b.x, b.z, b.radius);
  for (const c of circles) file(c, c.x, c.z, c.r + carR);
  const EMPTY = { boxes: [], circles: [] };
  const near = (x, z) => grid.get(key(Math.floor(x / CELL), Math.floor(z / CELL))) || EMPTY;
  const chassisSamples = carHalf ? [-carHalf, 0, carHalf] : [0];
  // the car is three circles along its length
  return (x, z, yaw) => {
    const fx = Math.sin(yaw), fz = Math.cos(yaw);
    let best = null;
    for (const k of chassisSamples) {
      const cx = x + fx * k, cz = z + fz * k;
      const test = (nx, nz, depth) => { if (depth > 0 && (!best || depth > best.depth)) best = { nx, nz, depth }; };
      if (bounds) {
        test(1, 0, bounds.minX - (cx - carR)); test(-1, 0, (cx + carR) - bounds.maxX);
        test(0, 1, bounds.minZ - (cz - carR)); test(0, -1, (cz + carR) - bounds.maxZ);
      }
      const cell = near(cx, cz);
      for (const c of cell.circles) {
        const dx = cx - c.x, dz = cz - c.z, limit = c.r + carR;
        if (dx * dx + dz * dz >= limit * limit) continue;
        const d = Math.hypot(dx, dz);
        if (d > 1e-4) test(dx / d, dz / d, limit - d);
        else test(-fx, -fz, limit);
      }
      for (const b of cell.boxes) {
        const bx = cx - b.x, bz = cz - b.z;
        if (bx * bx + bz * bz >= b.radius * b.radius) continue;
        const lx = bx * b.cs + bz * b.sn, lz = -bx * b.sn + bz * b.cs;
        const qx = clamp(lx, -b.hx, b.hx), qz = clamp(lz, -b.hz, b.hz);
        let dx = lx - qx, dz = lz - qz, d = Math.hypot(dx, dz);
        if (d < carR) {
          if (d < 1e-4) { // centre inside the box: push out on the shallow axis
            const px = b.hx - Math.abs(lx), pz = b.hz - Math.abs(lz);
            if (px < pz) { dx = Math.sign(lx) || 1; dz = 0; d = -px; } else { dx = 0; dz = Math.sign(lz) || 1; d = -pz; }
            const wx = dx * b.cs - dz * b.sn, wz = dx * b.sn + dz * b.cs;
            test(wx, wz, carR - d);
          } else {
            const nx = dx / d, nz = dz / d;
            test(nx * b.cs - nz * b.sn, nx * b.sn + nz * b.cs, carR - d);
          }
        }
      }
    }
    return best;
  };
}

export class DriveController {
  constructor({ THREE, scene, camera, dom, vehicle, audio, env = {}, onEvent = () => {} }) {
    Object.assign(this, { THREE, scene, camera, dom, audio, env, onEvent });
    this.reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    this.enabled = false; this.camMode = 'chase'; this.camModes = ['chase', 'far', 'cabin', 'hood', 'cine', 'drone'];
    this.input = { ...NEUTRAL };
    this.keys = new Set(); this.touch = { ...NEUTRAL };
    this.accumulator = 0;
    this.lastPose = { x: 0, z: 0, yaw: 0 };
    this.effectsTime = 0;
    this.camPos = new THREE.Vector3(); this.camLook = new THREE.Vector3(); this.fov = camera.fov; this.shake = 0;
    this.orbitYaw = 0; this.orbitPitch = 0; this.dragging = false; this.cine = null;
    this._tmp = new THREE.Vector3(); this._tmp2 = new THREE.Vector3(); this._q = new THREE.Quaternion();
    this.cameraWant = new THREE.Vector3(); this.cameraTarget = new THREE.Vector3(); this.cameraHeading = new THREE.Vector3();
    this.cabinDirection = new THREE.Vector3(); this.cabinRotation = new THREE.Quaternion();
    this.renderTyres = {};
    this.markMatrix = new THREE.Matrix4(); this.markScale = new THREE.Vector3(1, 1, 1);
    this.setVehicle(vehicle);
    this._initFx();
    this._bind();
  }

  setVehicle(v) {
    const keep = this.dyn ? { x: this.dyn.x, z: this.dyn.z, yaw: this.dyn.yaw } : null;
    if (this.dyn) { this.toggleEngine(false); this.vehicle.setCabinView(false); }
    this.clearInput();
    this.vehicle = v; this.dyn = createDynamics(v.spec);
    if (keep) Object.assign(this.dyn, keep);
    Object.assign(this.lastPose, { x: this.dyn.x, z: this.dyn.z, yaw: this.dyn.yaw });
    this.audio && this.audio.setKind(v.spec.engine);
  }
  place(x, z, yaw = 0) {
    this.clearInput();
    Object.assign(this.dyn, {
      x, z, yaw, vx: 0, vy: 0, r: 0, steer: 0, slip: 0, wheelSpin: 0, wheelSpeed: 0,
      ax: 0, ay: 0, pitch: 0, pitchV: 0, roll: 0, rollV: 0, heave: 0, heaveV: 0, groundPitch: 0, groundRoll: 0,
    });
    Object.assign(this.lastPose, { x, z, yaw });
    this._sync(0); this.snapCamera();
  }

  clearInput() {
    this.keys.clear();
    Object.assign(this.touch, NEUTRAL);
    Object.assign(this.input, NEUTRAL);
    this.dragging = false;
    this.accumulator = 0;
    this._holdT = 0;
    this.resetTouch?.();
  }

  setEnabled(enabled) {
    this.clearInput();
    this.enabled = enabled;
    if (enabled) this.dom.focus({ preventScroll: true });
    else {
      this.vehicle.setCabinView(false);
      this.toggleEngine(false);
      Object.assign(this.dyn, { vx: 0, vy: 0, r: 0, slip: 0, throttle: 0 });
      this.audio?.update(this.dyn, this.vehicle.spec, 0);
    }
  }

  // ---------------- input ----------------
  _bind() {
    const down = (e) => {
      if (!this.enabled || document.hidden || e.altKey || e.ctrlKey || e.metaKey || e.defaultPrevented) return;
      if (e.target?.closest?.('button, a, input, select, textarea, summary, [contenteditable]')) return;
      const k = e.key.toLowerCase();
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault();
      if (e.repeat) return;
      this.keys.add(k);
      if (k === 'h') this.horn();
      else if (k === 'l') this.toggle('head');
      else if (k === 'q') this.toggle('left');
      else if (k === 'e') this.toggle('right');
      else if (k === 'x') this.toggle('hazard');
      else if (k === 'c') this.cycleCamera();
      else if (k === 'r') this.recover();
      else if (k === 'v') this.shiftDirection();
      else if (k === 'i') this.toggleEngine();
    };
    const up = (e) => this.keys.delete(e.key.toLowerCase());
    const unlock = () => { if (!this.audio?.muted) this.audio?.unlock().catch(() => {}); };
    this.dom.addEventListener('pointerdown', unlock, { passive: true });
    addEventListener('keydown', down); addEventListener('keyup', up);
    addEventListener('blur', () => this.clearInput());
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.clearInput(); });
    // drag to look around in chase views
    this.dom.addEventListener('pointerdown', (e) => { if (!this.enabled) return; this.dragging = true; this._px = e.clientX; this._py = e.clientY; this._lookT = 0; });
    addEventListener('pointerup', () => { this.dragging = false; });
    addEventListener('pointercancel', () => { this.dragging = false; });
    addEventListener('pointermove', (e) => {
      if (!this.enabled || !this.dragging) return;
      this.orbitYaw = clamp(this.orbitYaw - (e.clientX - this._px) * 0.006, -Math.PI, Math.PI);
      this.orbitPitch = clamp(this.orbitPitch + (e.clientY - this._py) * 0.004, -0.3, this.camMode === 'cabin' ? 0.42 : 0.9);
      this._px = e.clientX; this._py = e.clientY; this._lookT = 0;
    });
  }
  setTouch(part) { Object.assign(this.touch, part); }
  _readInput() {
    const k = this.keys, t = this.touch;
    let thr = (k.has('w') || k.has('arrowup')) ? 1 : t.throttle;
    let brk = (k.has('s') || k.has('arrowdown')) ? 1 : t.brake;
    let st = ((k.has('a') || k.has('arrowleft')) ? 1 : 0) - ((k.has('d') || k.has('arrowright')) ? 1 : 0);
    if (!st) st = t.steer;
    let hb = k.has(' ') || t.handbrake;
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) if (p) {
      const ax = p.axes[0] || 0; if (Math.abs(ax) > 0.12) st = -ax;
      if (p.buttons[7] && p.buttons[7].value > 0.05) thr = p.buttons[7].value;
      if (p.buttons[6] && p.buttons[6].value > 0.05) brk = p.buttons[6].value;
      if (p.buttons[0] && p.buttons[0].pressed) hb = true;
      if (p.buttons[3] && p.buttons[3].pressed && !this._padY) this.cycleCamera(); this._padY = p.buttons[3] && p.buttons[3].pressed;
      if (p.buttons[1] && p.buttons[1].pressed && !this._padB) this.horn(); this._padB = p.buttons[1] && p.buttons[1].pressed;
      if (p.buttons[2]?.pressed && !this._padX) this.shiftDirection(); this._padX = p.buttons[2]?.pressed;
      break;
    }
    return { thr, brk, st, hb };
  }
  _smoothInput({ thr, brk, st, hb }, dt) {
    const I = this.input;
    // reverse: S drives backwards and W brakes, as in most driving games
    if (this.dyn.reverse && this.env.autoShift !== false) { const t = thr; thr = brk; brk = t; }
    I.throttle = damp(I.throttle, thr, thr > I.throttle ? 11 : 14, dt);
    I.brake = damp(I.brake, brk, 16, dt);
    const analog = Math.abs(st) > 0 && Math.abs(st) < 0.999;
    if (analog) I.steer = damp(I.steer, st, 18, dt);
    else { // keyboard: ramp like turning a wheel, return quicker, counter-steer fastest
      const rate = st === 0 ? 6.5 : (I.steer * st < 0 ? 9 : 3.6);
      I.steer += clamp(st - I.steer, -rate * dt, rate * dt);
    }
    I.handbrake = hb;
  }

  // ---------------- actions ----------------
  toggle(what) {
    const s = this.vehicle.state;
    if (what === 'left') { s.left = !s.left; s.right = false; }
    else if (what === 'right') { s.right = !s.right; s.left = false; }
    else s[what] = !s[what];
    this.audio && this.audio.click(2000, 0.1, 0.02);
    this.onEvent('lights', { ...s });
    return s[what];
  }
  horn() {
    if (this.audio && !this.audio.muted) void this.audio.unlock().then(() => this.audio.horn(this.vehicle.spec, 0.45)).catch(() => {});
    const now = performance.now(); this._horns = (this._horns || []).filter((t) => now - t < 1600); this._horns.push(now);
    this.onEvent('horn', this._horns.length);
  }
  toggleEngine(force) {
    const d = this.dyn, on = force ?? !(d.engine || this.startTimer);
    if (on && (d.engine || this.startTimer)) return true;
    if (!on) {
      clearTimeout(this.startTimer);
      this.startTimer = null;
      this.stopStarter?.();
      this.stopStarter = null;
      d.engine = false;
      d.starting = 0;
      this.audio?.update(d, this.vehicle.spec, 0);
      this.onEvent('engine', 'off');
      return false;
    }
    const spec = this.vehicle.spec;
    this.startTimer = setTimeout(() => {
      this.startTimer = null;
      d.engine = true;
      d.starting = 0;
      d.rpm = spec.idle * 1.4;
      this.onEvent('engine', 'running');
    }, 650);
    d.starting = 0.65;
    const timer = this.startTimer;
    if (this.audio && !this.audio.muted) {
      void this.audio.unlock().then(() => {
        if (this.startTimer === timer) this.stopStarter = this.audio.starter(spec);
      }).catch(() => {});
    }
    this.onEvent('engine', 'starting');
    return on;
  }
  _autoShift({ thr, brk }, dt) {
    const d = this.dyn, stopped = Math.hypot(d.vx, d.vy) < 0.3 && d.engine;
    const wantRev = !d.reverse && brk > 0.5 && thr < 0.05, wantDrive = d.reverse && thr > 0.5 && brk < 0.05;
    this._holdT = stopped && (wantRev || wantDrive) ? (this._holdT || 0) + dt : 0;
    if (this._holdT > 0.35) {
      this._holdT = 0; d.reverse = !d.reverse; d.gear = 1;
      this.input.throttle = 0; this.input.brake = 0;
      this.onEvent('direction', d.reverse);
    }
  }
  shiftDirection() {
    if (Math.hypot(this.dyn.vx, this.dyn.vy) > 0.4 || this.input.throttle > 0.08) {
      this.onEvent('shift-blocked');
      return false;
    }
    this.clearInput();
    this.dyn.reverse = !this.dyn.reverse;
    this.dyn.gear = 1;
    this.onEvent('direction', this.dyn.reverse);
    return true;
  }
  cycleCamera(mode) {
    const i = this.camModes.indexOf(this.camMode);
    const next = this.camModes[(i + 1) % this.camModes.length];
    const previous = this.camMode;
    this.camMode = mode || (next === 'cine' && this.reducedMotion.matches ? 'drone' : next);
    this.cine = null; this.orbitYaw = 0; this.orbitPitch = 0;
    if (['cabin', 'hood', 'cine'].includes(previous) || ['cabin', 'hood', 'cine'].includes(this.camMode)) this.snapCamera();
    this.vehicle.setCabinView(this.camMode === 'cabin');
    if (this.audio) this.audio.cabin = this.camMode === 'cabin' ? 1 : 0;
    this.onEvent('camera', this.camMode);
    return this.camMode;
  }
  recover() { const d = this.dyn; d.vx = d.vy = d.r = 0; if (this.env.respawn) { const p = this.env.respawn(d); if (p) this.place(p.x, p.z, p.yaw); } }

  // ---------------- effects ----------------
  _initFx() {
    const THREE = this.THREE, N = 260;
    const g = new THREE.BufferGeometry();
    this.pPos = new Float32Array(N * 3); this.pVel = new Float32Array(N * 3); this.pLife = new Float32Array(N);
    g.setAttribute('position', new THREE.BufferAttribute(this.pPos, 3));
    const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
    const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    this.dustMat = new THREE.PointsMaterial({ size: 1.6, map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, opacity: 0.55, color: 0xb59a78, sizeAttenuation: true });
    this.dust = new THREE.Points(g, this.dustMat); this.dust.frustumCulled = false; this.dust.visible = false; this.scene.add(this.dust);
    for (let i = 0; i < N; i++) this.pPos[i * 3 + 1] = -100;
    this.pIdx = 0;
    // skid marks
    const M = 320;
    const sg = new THREE.PlaneGeometry(0.26, 0.5); sg.rotateX(-Math.PI / 2);
    this.skid = new THREE.InstancedMesh(sg, new THREE.MeshBasicMaterial({ color: 0x0a0a0a, transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }), M);
    this.skid.frustumCulled = false; this.skidI = 0; const hide = new THREE.Matrix4().makeTranslation(0, -100, 0);
    for (let i = 0; i < M; i++) this.skid.setMatrixAt(i, hide);
    this.scene.add(this.skid);
  }
  _emit(p, color, amount) {
    const N = this.pLife.length;
    for (let k = 0; k < amount; k++) {
      const i = this.pIdx = (this.pIdx + 1) % N;
      this.pPos[i * 3] = p.x + (Math.random() - 0.5) * 0.3; this.pPos[i * 3 + 1] = p.y + 0.15; this.pPos[i * 3 + 2] = p.z + (Math.random() - 0.5) * 0.3;
      this.pVel[i * 3] = (Math.random() - 0.5) * 1.2; this.pVel[i * 3 + 1] = 0.5 + Math.random() * 0.9; this.pVel[i * 3 + 2] = (Math.random() - 0.5) * 1.2;
      this.pLife[i] = 1.6 + Math.random();
    }
    this.dustMat.color.set(color);
  }
  _fx(dt) {
    const N = this.pLife.length;
    let changed = false, visible = false;
    for (let i = 0; i < N; i++) {
      if (this.pLife[i] <= 0) continue;
      changed = true;
      this.pLife[i] -= dt;
      this.pPos[i * 3] += this.pVel[i * 3] * dt; this.pPos[i * 3 + 1] += this.pVel[i * 3 + 1] * dt; this.pPos[i * 3 + 2] += this.pVel[i * 3 + 2] * dt;
      this.pVel[i * 3 + 1] *= Math.exp(-1.8 * dt);
      if (this.pLife[i] <= 0) this.pPos[i * 3 + 1] = -100;
      else visible = true;
    }
    if (changed) this.dust.geometry.attributes.position.needsUpdate = true;
    this.dust.visible = visible;
  }

  // ---------------- main update ----------------
  update(dt) {
    if (!this.enabled || document.hidden) return;
    dt = Math.min(dt, 0.1);
    const d = this.dyn, v = this.vehicle;
    const rawInput = this._readInput();
    this.accumulator += dt;
    while (this.accumulator >= FIXED_STEP) {
      if (this.env.autoShift !== false) this._autoShift(rawInput, FIXED_STEP);
      this._smoothInput(rawInput, FIXED_STEP);
      Object.assign(this.lastPose, { x: d.x, z: d.z, yaw: d.yaw });
      stepDynamics(d, this.input, this.env, FIXED_STEP);
      this.accumulator -= FIXED_STEP;
    }
    if (d.lastImpact) { this.audio && this.audio.crash(d.lastImpact / 10); this.shake = Math.min(1, d.lastImpact / 8); this.onEvent('impact', d.lastImpact); d.lastImpact = 0; }
    if (d.lastShift) { this.onEvent('shift', d.gear); d.lastShift = 0; }
    v.state.brake = this.input.brake > 0.1 || this.input.handbrake;
    v.state.reverse = d.reverse;
    this._sync(dt, this.accumulator / FIXED_STEP);
    const blink = v.update(dt, { engine: d.engine, night: this.env.night });
    if (blink !== null && blink !== this._lastBlink && this.audio) this.audio.tick(blink); this._lastBlink = blink;
    if (this.camMode === 'cabin') v.drawCluster(Math.abs(d.vx) * 3.6, d.rpm, d.reverse ? 'R' : d.engine ? 'D' + d.gear : 'P');
    if (this.audio) this.audio.update(d, v.spec, dt);
    // dust / smoke / skids
    const speed = Math.hypot(d.vx, d.vy), offroad = d.surface !== 'asphalt' && d.surface !== 'floor';
    this.effectsTime += dt;
    const dust = (offroad && speed > 3) || d.slip > 0.7 || d.wheelSpin > 0.4;
    const marks = !offroad && (d.slip > 0.75 || d.wheelSpin > 0.5) && speed > 2;
    if (this.effectsTime >= 1 / 30) {
      this.effectsTime %= 1 / 30;
      if (marks || dust) for (const w of v.wheels) {
        if (w.front) continue;
        const p = w.pivot.getWorldPosition(this._tmp2);
        if (dust) this._emit(p, offroad ? (this.env.dustColor || 0xb08a62) : 0xd8d8d8, offroad ? Math.ceil(speed / 9) : 1);
        if (marks) {
          p.y = (this.env.groundY?.(p.x, p.z) ?? 0) + 0.012;
          const m = this.markMatrix.compose(p, this._q.setFromAxisAngle(this.cameraHeading.set(0, 1, 0), d.yaw), this.markScale);
          this.skid.setMatrixAt(this.skidI = (this.skidI + 1) % this.skid.count, m);
        }
      }
      if (marks) this.skid.instanceMatrix.needsUpdate = true;
    }
    this._fx(dt);
    this._camera(dt);
  }

  _sync(dt, alpha = 1) {
    const d = this.dyn, v = this.vehicle;
    const x = this.lastPose.x + (d.x - this.lastPose.x) * alpha;
    const z = this.lastPose.z + (d.z - this.lastPose.z) * alpha;
    const yaw = this.lastPose.yaw + (d.yaw - this.lastPose.yaw) * alpha;
    const ground = this.env.groundY;
    const tyres = this.env.tyreContact && sampleTyres(this.env.tyreContact, v.spec, x, z, yaw, this.renderTyres);
    const gy = tyres ? (tyres.fl.height + tyres.fr.height + tyres.rl.height + tyres.rr.height) * 0.25 : ground?.(x, z) ?? 0;
    this.rideHeight = tyres && dt ? damp(this.rideHeight ?? gy, gy, 20, dt) : gy;
    v.root.position.set(x, this.rideHeight, z); v.root.rotation.set(0, yaw, 0);
    v.body.rotation.x = d.roll + d.groundRoll;
    v.body.rotation.z = d.groundPitch - d.pitch;
    v.body.position.y = d.heave * 0.6;
    for (const w of v.wheels) {
      w.spin.rotation.z -= d.wheelSpeed * dt;
      if (w.front) {
        const radius = v.spec.wheelbase / Math.tan(d.steer);
        w.pivot.rotation.y = Math.atan(v.spec.wheelbase / (radius + w.z));
      }
      const contact = tyres ? tyres[w.front ? (w.side < 0 ? 'fl' : 'fr') : (w.side < 0 ? 'rl' : 'rr')].height - this.rideHeight : 0;
      const comp = contact - d.roll * w.z * 0.5 + (w.front ? -1 : 1) * d.pitch * 0.4 + d.heave * 0.3;
      const height = w.baseY + clamp(comp, -0.16, 0.19);
      w.pivot.position.y = dt ? damp(w.pivot.position.y, height, 22, dt) : height;
    }
    v.steer.rotation.x = -d.steer * 7;
  }

  snapCamera() { this._camInit = false; this.cameraArm = 1; }

  _camera(dt) {
    const THREE = this.THREE, d = this.dyn, v = this.vehicle, cam = this.camera;
    const fwd = this._tmp.set(Math.sin(d.yaw), 0, Math.cos(d.yaw));
    const pos = v.root.position, speed = Math.hypot(d.vx, d.vy);
    if (!this.dragging) { this._lookT = (this._lookT || 0) + dt; if (this._lookT > 1.2) { this.orbitYaw = damp(this.orbitYaw, 0, 2.5, dt); this.orbitPitch = damp(this.orbitPitch, 0, 2.5, dt); } }
    const want = this.cameraWant, look = this.cameraTarget;
    let fov = 55, stiff = 6, near = 0.1;
    const yaw = v.root.rotation.y + this.orbitYaw;
    const back = this.cameraHeading.set(Math.sin(yaw), 0, Math.cos(yaw));
    const len = v.dims.length;
    switch (this.camMode) {
      case 'chase': case 'far': {
        const far = this.camMode === 'far';
        const dist = (far ? len * 1.9 : len * 1.25) + speed * 0.05, h = (far ? 3.4 : 2.05) + this.orbitPitch * 4;
        // drift: camera swings with the velocity vector, not the nose
        const velYaw = speed > 4 ? Math.atan2(d.vx * Math.sin(d.yaw) + d.vy * Math.cos(d.yaw), d.vx * Math.cos(d.yaw) - d.vy * Math.sin(d.yaw)) : d.yaw;
        const yawMix = d.vx > 2 ? velYaw + (yaw - d.yaw) : yaw;
        want.set(pos.x - Math.sin(yawMix) * dist, pos.y + h, pos.z - Math.cos(yawMix) * dist);
        look.copy(pos).addScaledVector(fwd, 2.5 + speed * 0.06); look.y += 1.05;
        fov = 52 + Math.min(16, speed * 0.38); stiff = 4.5; break;
      }
      case 'cabin': {
        v.body.localToWorld(want.copy(v.driverEye));
        const calm = this.reducedMotion.matches;
        const glance = clamp(this.orbitYaw, -1.22, 1.22) + (calm ? 0 : d.steer * 0.14);
        const tilt = -0.14 - this.orbitPitch * 0.7;
        v.body.getWorldQuaternion(this.cabinRotation);
        this.cabinDirection.set(Math.cos(glance), tilt, -Math.sin(glance)).applyQuaternion(this.cabinRotation);
        look.copy(want).addScaledVector(this.cabinDirection, 10);
        stiff = 34; near = 0.018;
        fov = cam.aspect < 0.9 ? 70 : 62 + Math.min(3, speed * 0.07); break;
      }
      case 'hood': {
        const e = new THREE.Vector3(v.spec.wheelbase / 2 - 0.3, v.spec.roof + 0.1, 0); v.body.localToWorld(e);
        want.copy(e); stiff = 60; near = 0.05;
        look.copy(e).addScaledVector(back, 12); look.y -= 0.9; fov = 62 + Math.min(10, speed * 0.2); break;
      }
      case 'drone': {
        want.set(pos.x - fwd.x * 18, pos.y + 34, pos.z - fwd.z * 18); look.copy(pos).addScaledVector(fwd, 8); fov = 50; stiff = 2; break;
      }
      case 'cine': {
        if (!this.cine || this.cine.t > 7 || pos.distanceTo(this.cine.p) > 55) {
          const side = Math.random() < 0.5 ? -1 : 1, ahead = 18 + Math.random() * 20;
          const right = new THREE.Vector3(fwd.z, 0, -fwd.x);
          const p = pos.clone().addScaledVector(fwd, ahead).addScaledVector(right, side * (6 + Math.random() * 6));
          p.y = (this.env.groundY ? this.env.groundY(p.x, p.z) : 0) + 0.6 + Math.random() * 2.5;
          if (this.env.cineOk && !this.env.cineOk(p)) p.copy(pos).addScaledVector(fwd, -10).setY(pos.y + 3);
          this.cine = { p, t: 0, fov: 28 + Math.random() * 18 };
          this.camPos.copy(p); this._camInit = true;
        }
        this.cine.t += dt; want.copy(this.cine.p); look.copy(pos); look.y += 0.9; fov = this.cine.fov; stiff = 1000; break;
      }
    }
    if (!this._camInit) { this.camPos.copy(want); this.camLook.copy(look); this._camInit = true; }
    const k = 1 - Math.exp(-stiff * dt);
    this.camPos.lerp(want, k); this.camLook.lerp(look, Math.min(1, k * 1.6));
    if (this.env.groundY && this.camMode !== 'cabin') this.camPos.y = Math.max(this.camPos.y, this.env.groundY(this.camPos.x, this.camPos.z) + 0.35);
    cam.position.copy(this.camPos);
    if (this.env.cameraCollision && (this.camMode === 'chase' || this.camMode === 'far')) {
      const obstructed = (t) => {
        const sample = this._tmp2.copy(pos).lerp(this.camPos, t);
        return this.env.cameraCollision(sample.x, sample.z, yaw);
      };
      let limit = 1;
      for (let step = 2; step <= 14; step++) {
        if (!obstructed(step / 14)) continue;
        let lo = (step - 1) / 14, hi = step / 14;
        for (let refine = 0; refine < 4; refine++) {
          const mid = (lo + hi) * 0.5;
          if (obstructed(mid)) hi = mid; else lo = mid;
        }
        limit = Math.max(0.14, lo - 0.02);
        break;
      }
      this.cameraArm = Math.min(limit, damp(this.cameraArm ?? 1, limit, 6, dt));
      cam.position.copy(pos).lerp(this.camPos, this.cameraArm);
      if (this.cameraArm < 0.8) cam.position.y = Math.max(cam.position.y, pos.y + v.dims.height + 0.25);
    }
    // shake: road texture, speed and impacts
    this.shake = damp(this.shake, 0, 3, dt);
    const sh = (this.camMode === 'cabin' || this.camMode === 'hood' ? 0.6 : 1) * (Math.min(1, speed / 45) ** 2 * 0.012 + (d.surface !== 'asphalt' && d.surface !== 'floor' ? Math.min(1, speed / 15) * 0.02 : 0) + this.shake * 0.09);
    this._shakeT = (this._shakeT || 0) + dt * (8 + speed * 0.6);
    const n = (a, b) => Math.sin(this._shakeT * a) * 0.6 + Math.sin(this._shakeT * b + 1.7) * 0.4;
    if (!['cine', 'cabin'].includes(this.camMode) && !this.reducedMotion.matches) cam.position.add(this._tmp2.set(n(1.3, 2.9) * sh * 0.5, n(1.7, 3.7) * sh * 0.5, n(1.1, 2.3) * sh * 0.5));
    cam.lookAt(this.camLook);
    if (this.camMode === 'cabin' && !this.reducedMotion.matches) cam.rotateZ(-d.roll * 0.36);
    this.fov = damp(this.fov, fov, 3, dt);
    if (Math.abs(cam.fov - this.fov) > 0.01 || cam.near !== near) { cam.fov = this.fov; cam.near = near; cam.updateProjectionMatrix(); }
  }

  hud() {
    const d = this.dyn;
    return { kmh: Math.abs(d.vx) * 3.6, rpm: d.rpm, redline: this.vehicle.spec.redline, gear: d.reverse ? 'R' : d.engine ? 'D' + d.gear : 'P', engine: d.engine, surface: d.surface, cam: this.camMode, lights: this.vehicle.state };
  }
}

// ---------------- shared HUD + touch controls (DOM) ----------------
export const HUD_CSS = `
.pkm-hud{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);display:flex;align-items:flex-end;gap:18px;padding:14px 20px 12px;border-radius:22px;background:rgb(8 8 8 / .62);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid #2b2b2b;color:#F2F0EA;font-family:Inter,ui-sans-serif,system-ui,sans-serif;pointer-events:none;z-index:6}
.pkm-hud__spd{font-size:46px;font-weight:740;letter-spacing:-.05em;line-height:.9;font-variant-numeric:tabular-nums;min-width:2.4ch;text-align:right}
.pkm-hud__unit{font-size:11px;color:#9A948B;letter-spacing:.12em;text-transform:uppercase;margin-top:4px;text-align:right}
.pkm-hud__gear{font-size:28px;font-weight:700;color:#BBA783;width:1.6ch;text-align:center;line-height:1}
.pkm-hud__rev{width:150px}.pkm-hud__bar{height:6px;border-radius:6px;background:#232323;overflow:hidden}.pkm-hud__bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#93AE7C,#BBA783 70%,#d0654f);transition:width .08s linear}
.pkm-hud__meta{display:flex;justify-content:space-between;font-size:11px;color:#9A948B;margin-top:6px;letter-spacing:.04em}
.pkm-hud__ind{display:flex;gap:8px;font-size:15px;color:#3a3a3a}.pkm-hud__ind .on{color:#93AE7C}.pkm-hud__ind .amber.on{color:#f0a330}.pkm-hud__ind .blue.on{color:#7fb2ff}
.pkm-touch{position:absolute;inset:auto 0 max(14px,env(safe-area-inset-bottom)) 0;display:none;justify-content:space-between;padding:0 12px;z-index:7;pointer-events:none;user-select:none}
.pkm-touch>div{display:flex;gap:8px;align-items:flex-end}.pkm-touch button{pointer-events:auto;touch-action:none;min-width:50px;height:60px;border-radius:16px;border:1px solid #575148;background:rgb(17 17 17 / .84);color:#F2F0EA;font:650 13px Inter,system-ui}
.pkm-touch button.tall{height:78px;min-width:58px}
.pkm-steer{pointer-events:auto;touch-action:none;position:relative;width:150px;height:64px;border-radius:32px;border:1px solid #575148;background:rgb(17 17 17 / .84);display:grid;place-items:center;color:#9A948B;font:600 11px Inter,system-ui;letter-spacing:.06em}
.pkm-steer i{position:absolute;left:50%;top:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;background:#F2F0EA;box-shadow:0 4px 14px #0008;transition:transform .12s}
.pkm-steer.down i{background:#BBA783;transition:none}.pkm-touch button:active,.pkm-touch button.down{background:#BBA783;color:#080808}
@media (pointer:coarse){.pkm-touch{display:flex}.pkm-hud{bottom:auto;top:76px;transform:translateX(-50%) scale(.82)}}
`;

export function createHud(container) {
  const el = document.createElement('div'); el.className = 'pkm-hud'; el.hidden = true;
  el.innerHTML = `<div><div class="pkm-hud__spd" data-spd>0</div><div class="pkm-hud__unit">km/h</div></div>
    <div class="pkm-hud__gear" data-gear>P</div>
    <div class="pkm-hud__rev"><div class="pkm-hud__ind"><span class="amber" data-l>◀</span><span class="blue" data-h>◉</span><span data-e>⏻</span><span class="amber" data-r>▶</span></div>
    <div class="pkm-hud__bar" style="margin-top:8px"><i data-rpm></i></div><div class="pkm-hud__meta"><span data-rpmt>0 rpm</span><span data-surf>Asphalt</span></div></div>`;
  container.appendChild(el);
  const [speed, gear, left, head, engine, right, bar, rpm, surface] = el.querySelectorAll('[data-spd],[data-gear],[data-l],[data-h],[data-e],[data-r],[data-rpm],[data-rpmt],[data-surf]');
  const write = (node, value) => { if (node.textContent !== value) node.textContent = value; };
  let blink = 0, elapsed = 0.1;
  return {
    el,
    update(h, dt = 0.016) {
      blink += dt;
      elapsed += dt;
      if (elapsed < 0.05) return;
      elapsed %= 0.05;
      write(speed, String(Math.round(h.kmh)));
      write(gear, h.gear);
      bar.style.width = Math.min(100, h.rpm / h.redline * 100).toFixed(1) + '%';
      write(rpm, Math.round(h.rpm / 10) * 10 + ' rpm');
      write(surface, { asphalt: 'Asphalt', grass: 'Grass', dirt: 'Laterite', floor: 'Showroom floor', kerb: 'Kerb', pavers: 'Pavers', drain: 'Drain' }[h.surface] || h.surface);
      const on = (blink % 0.74) < 0.4, L = h.lights;
      left.classList.toggle('on', (L.left || L.hazard) && on);
      right.classList.toggle('on', (L.right || L.hazard) && on);
      head.classList.toggle('on', !!L.head);
      engine.classList.toggle('on', h.engine);
    },
  };
}

export function createTouch(container, ctrl) {
  const el = document.createElement('div'); el.className = 'pkm-touch';
  el.innerHTML = `<div class="pkm-steer" role="slider" aria-label="Steering: slide left or right" aria-valuemin="-1" aria-valuemax="1" aria-valuenow="0"><i></i><span>◀ steer ▶</span></div>
    <div><button data-k="brake" class="tall">Brake</button><button data-k="gas" class="tall" aria-label="Accelerate">Go</button></div>`;
  container.appendChild(el);
  const state = { steer: 0, gas: 0, brake: 0 };
  const apply = () => ctrl.setTouch({ steer: state.steer, throttle: state.gas, brake: state.brake });
  const buttons = [...el.querySelectorAll('button')];
  // analog steering: drag sideways on the pad; the further you slide, the more it turns
  const pad = el.querySelector('.pkm-steer'), knob = pad.querySelector('i');
  let startX = null;
  const setSteer = (v) => { state.steer = Math.abs(v) < 0.06 ? 0 : clamp(v, -0.998, 0.998); knob.style.transform = `translateX(${-state.steer * 44}px)`; pad.setAttribute('aria-valuenow', (-state.steer).toFixed(2)); apply(); };
  pad.addEventListener('pointerdown', (e) => { e.preventDefault(); pad.setPointerCapture(e.pointerId); startX = e.clientX; pad.classList.add('down'); });
  pad.addEventListener('pointermove', (e) => { if (startX !== null) setSteer(-(e.clientX - startX) / 60); });
  const release = () => { startX = null; pad.classList.remove('down'); setSteer(0); };
  pad.addEventListener('pointerup', release); pad.addEventListener('pointercancel', release); pad.addEventListener('lostpointercapture', release);
  ctrl.resetTouch = () => {
    for (const b of buttons) { state[b.dataset.k] = 0; b.classList.remove('down'); }
    startX = null; state.steer = 0; knob.style.transform = ''; pad.classList.remove('down');
  };
  for (const b of buttons) {
    const k = b.dataset.k;
    const on = (e) => { e.preventDefault(); b.setPointerCapture(e.pointerId); state[k] = 1; b.classList.add('down'); apply(); };
    const off = () => { state[k] = 0; b.classList.remove('down'); apply(); };
    b.addEventListener('pointerdown', on); b.addEventListener('lostpointercapture', off);
    b.addEventListener('pointerup', off); b.addEventListener('pointercancel', off);
  }
  return el;
}
