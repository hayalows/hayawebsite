// Shared drive controller: input, physics stepping, visuals, cameras, HUD,
// dust, skid marks. Used by Drive Studio and Accra 3D.
import { createDynamics, stepDynamics } from './physics.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const damp = (a, b, k, dt) => b + (a - b) * Math.exp(-k * dt);

export function makeCollider({ bounds, circles = [], boxes = [], carR = 0.95, carHalf = 1.7 }) {
  // the car is three circles along its length
  return (x, z, yaw) => {
    const fx = Math.sin(yaw), fz = Math.cos(yaw);
    let best = null;
    for (const k of [-1, 0, 1]) {
      const cx = x + fx * k * carHalf, cz = z + fz * k * carHalf;
      const test = (nx, nz, depth) => { if (depth > 0 && (!best || depth > best.depth)) best = { nx, nz, depth }; };
      if (bounds) {
        test(1, 0, bounds.minX - (cx - carR)); test(-1, 0, (cx + carR) - bounds.maxX);
        test(0, 1, bounds.minZ - (cz - carR)); test(0, -1, (cz + carR) - bounds.maxZ);
      }
      for (const c of circles) {
        const dx = cx - c.x, dz = cz - c.z, d = Math.hypot(dx, dz), pen = c.r + carR - d;
        if (pen > 0 && d > 1e-4) test(dx / d, dz / d, pen);
      }
      for (const b of boxes) {
        const cs = Math.cos(-(b.rot || 0)), sn = Math.sin(-(b.rot || 0));
        const lx = (cx - b.x) * cs - (cz - b.z) * sn, lz = (cx - b.x) * sn + (cz - b.z) * cs;
        const qx = clamp(lx, -b.hx, b.hx), qz = clamp(lz, -b.hz, b.hz);
        let dx = lx - qx, dz = lz - qz, d = Math.hypot(dx, dz);
        if (d < carR) {
          if (d < 1e-4) { // centre inside the box: push out on the shallow axis
            const px = b.hx - Math.abs(lx), pz = b.hz - Math.abs(lz);
            if (px < pz) { dx = Math.sign(lx); dz = 0; d = -px; } else { dx = 0; dz = Math.sign(lz); d = -pz; }
            const wx = dx * Math.cos(b.rot || 0) - dz * Math.sin(b.rot || 0), wz = dx * Math.sin(b.rot || 0) + dz * Math.cos(b.rot || 0);
            test(wx, wz, carR - d);
          } else {
            const nx = dx / d, nz = dz / d, c2 = Math.cos(b.rot || 0), s2 = Math.sin(b.rot || 0);
            test(nx * c2 - nz * s2, nx * s2 + nz * c2, carR - d);
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
    this.enabled = false; this.camMode = 'chase'; this.camModes = ['chase', 'far', 'cabin', 'hood', 'cine', 'drone'];
    this.input = { throttle: 0, brake: 0, steer: 0, handbrake: false };
    this.keys = new Set(); this.touch = { throttle: 0, brake: 0, steer: 0, handbrake: false };
    this.camPos = new THREE.Vector3(); this.camLook = new THREE.Vector3(); this.fov = camera.fov; this.shake = 0;
    this.orbitYaw = 0; this.orbitPitch = 0; this.dragging = false; this.cine = null;
    this._tmp = new THREE.Vector3(); this._tmp2 = new THREE.Vector3(); this._q = new THREE.Quaternion();
    this.setVehicle(vehicle);
    this._initFx();
    this._bind();
  }

  setVehicle(v) {
    const keep = this.dyn ? { x: this.dyn.x, z: this.dyn.z, yaw: this.dyn.yaw } : null;
    this.vehicle = v; this.dyn = createDynamics(v.spec);
    if (keep) Object.assign(this.dyn, keep);
    this.audio && this.audio.setKind(v.spec.engine);
  }
  place(x, z, yaw = 0) { Object.assign(this.dyn, { x, z, yaw, vx: 0, vy: 0, r: 0 }); this._sync(0); this.snapCamera(); }

  // ---------------- input ----------------
  _bind() {
    const down = (e) => {
      if (!this.enabled) return;
      if (e.target && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
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
      else if (k === 'enter' || k === 'i') this.toggleEngine();
    };
    const up = (e) => this.keys.delete(e.key.toLowerCase());
    const unlock = () => { this.audio && this.audio.unlock().catch(() => {}); };
    addEventListener('pointerdown', unlock, { passive: true }); addEventListener('keydown', unlock);
    addEventListener('keydown', down); addEventListener('keyup', up);
    addEventListener('blur', () => this.keys.clear());
    // drag to look around in chase views
    this.dom.addEventListener('pointerdown', (e) => { if (!this.enabled) return; this.dragging = true; this._px = e.clientX; this._py = e.clientY; this._lookT = 0; });
    addEventListener('pointerup', () => { this.dragging = false; });
    addEventListener('pointermove', (e) => {
      if (!this.enabled || !this.dragging) return;
      this.orbitYaw -= (e.clientX - this._px) * 0.006; this.orbitPitch = clamp(this.orbitPitch + (e.clientY - this._py) * 0.004, -0.3, 0.9);
      this._px = e.clientX; this._py = e.clientY; this._lookT = 0;
    });
  }
  setTouch(part) { Object.assign(this.touch, part); }
  _readInput(dt) {
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
    }
    // smooth digital input (feels like a pedal and a wheel)
    const I = this.input;
    I.throttle = damp(I.throttle, thr, thr > I.throttle ? 5 : 9, dt);
    I.brake = damp(I.brake, brk, 10, dt);
    I.steer = damp(I.steer, st, st ? 5.5 : 7, dt);
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
    this.audio && this.audio.horn(this.vehicle.spec, 0.45);
    const now = performance.now(); this._horns = (this._horns || []).filter((t) => now - t < 1600); this._horns.push(now);
    this.onEvent('horn', this._horns.length);
  }
  async toggleEngine(force) {
    const d = this.dyn, on = force ?? !d.engine;
    if (on === d.engine) return on;
    if (on) {
      if (this.audio) { this.audio.unlock().then(() => this.audio.starter(this.vehicle.spec)).catch(() => {}); }
      d.starting = 0.9;
      setTimeout(() => { d.engine = true; d.rpm = this.vehicle.spec.idle * 1.9; this.onEvent('engine', true); }, 750);
    } else { d.engine = false; this.onEvent('engine', false); }
    return on;
  }
  cycleCamera(mode) {
    const i = this.camModes.indexOf(this.camMode);
    this.camMode = mode || this.camModes[(i + 1) % this.camModes.length];
    this.cine = null; this.orbitYaw = 0; this.orbitPitch = 0; this.snapCamera();
    if (this.audio) this.audio.cabin = this.camMode === 'cabin' ? 1 : 0;
    this.onEvent('camera', this.camMode);
    return this.camMode;
  }
  recover() { const d = this.dyn; d.vx = d.vy = d.r = 0; if (this.env.respawn) { const p = this.env.respawn(d); if (p) this.place(p.x, p.z, p.yaw); } }

  // ---------------- effects ----------------
  _initFx() {
    const THREE = this.THREE, N = 260;
    const g = new THREE.BufferGeometry();
    this.pPos = new Float32Array(N * 3); this.pVel = new Float32Array(N * 3); this.pLife = new Float32Array(N); this.pSize = new Float32Array(N);
    g.setAttribute('position', new THREE.BufferAttribute(this.pPos, 3));
    const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
    const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    this.dustMat = new THREE.PointsMaterial({ size: 1.6, map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, opacity: 0.55, color: 0xb59a78, sizeAttenuation: true });
    this.dust = new THREE.Points(g, this.dustMat); this.dust.frustumCulled = false; this.scene.add(this.dust);
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
    for (let i = 0; i < N; i++) {
      if (this.pLife[i] <= 0) continue;
      this.pLife[i] -= dt;
      this.pPos[i * 3] += this.pVel[i * 3] * dt; this.pPos[i * 3 + 1] += this.pVel[i * 3 + 1] * dt; this.pPos[i * 3 + 2] += this.pVel[i * 3 + 2] * dt;
      this.pVel[i * 3 + 1] *= 0.97;
      if (this.pLife[i] <= 0) this.pPos[i * 3 + 1] = -100;
    }
    this.dust.geometry.attributes.position.needsUpdate = true;
  }

  // ---------------- main update ----------------
  update(dt) {
    if (!this.enabled) return;
    dt = Math.min(dt, 0.05);
    this._readInput(dt);
    const d = this.dyn, v = this.vehicle, THREE = this.THREE;
    const sub = 4; for (let i = 0; i < sub; i++) stepDynamics(d, this.input, this.env, dt / sub);
    if (d.lastImpact) { this.audio && this.audio.crash(d.lastImpact / 10); this.shake = Math.min(1, d.lastImpact / 8); this.onEvent('impact', d.lastImpact); d.lastImpact = 0; }
    if (d.lastShift) { this.onEvent('shift', d.gear); d.lastShift = 0; }
    v.state.brake = this.input.brake > 0.1 && !d.reverse || (d.reverse && this.input.throttle > 0.1) || this.input.handbrake;
    v.state.reverse = d.reverse;
    this._sync(dt);
    const blink = v.update(dt, { engine: d.engine, night: this.env.night });
    if (blink !== null && blink !== this._lastBlink && this.audio) this.audio.tick(blink); this._lastBlink = blink;
    v.drawCluster(Math.abs(d.vx) * 3.6, d.rpm, d.reverse ? 'R' : d.engine ? (Math.abs(d.vx) < 0.2 && this.input.throttle < 0.05 ? 'D' : 'D' + d.gear) : 'P');
    if (this.audio) this.audio.update(d, v.spec, dt);
    // dust / smoke / skids
    const speed = Math.hypot(d.vx, d.vy), offroad = d.surface !== 'asphalt' && d.surface !== 'floor';
    const rearWorld = [];
    for (const w of v.wheels) if (!w.front) rearWorld.push(w.pivot.getWorldPosition(new THREE.Vector3()));
    if ((offroad && speed > 3) || d.slip > 0.7 || d.wheelSpin > 0.4) {
      for (const p of rearWorld) this._emit(p, offroad ? (this.env.dustColor || 0xb08a62) : 0xd8d8d8, offroad ? Math.ceil(speed / 9) : 1);
    }
    if (!offroad && (d.slip > 0.75 || d.wheelSpin > 0.5) && speed > 2) {
      for (const p of rearWorld) {
        const m = new THREE.Matrix4().compose(new THREE.Vector3(p.x, (this.env.groundY ? this.env.groundY(p.x, p.z) : 0) + 0.012, p.z), this._q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), d.yaw), new THREE.Vector3(1, 1, 1));
        this.skid.setMatrixAt(this.skidI = (this.skidI + 1) % this.skid.count, m);
      }
      this.skid.instanceMatrix.needsUpdate = true;
    }
    this._fx(dt);
    this._camera(dt);
  }

  _sync(dt) {
    const d = this.dyn, v = this.vehicle;
    const gy = this.env.groundY ? this.env.groundY(d.x, d.z) : 0;
    v.root.position.set(d.x, gy, d.z); v.root.rotation.set(0, d.yaw, 0);
    v.body.rotation.x = d.roll; v.body.rotation.z = -d.pitch; v.body.position.y = d.heave * 0.6 + (d.surface === 'grass' ? 0 : 0);
    for (const w of v.wheels) {
      w.spin.rotation.z -= d.wheelSpeed * dt;
      if (w.front) w.pivot.rotation.y = d.steer;
      // wheels follow body roll/pitch a little (suspension travel)
      const comp = -d.roll * w.z * 0.5 + (w.front ? -1 : 1) * d.pitch * 0.4 + d.heave * 0.3;
      w.pivot.position.y = w.baseY + clamp(comp, -0.05, 0.05) * 0.5;
    }
    v.steer.rotation.x = -d.steer * 7;
  }

  snapCamera() { this._camInit = false; }

  _camera(dt) {
    const THREE = this.THREE, d = this.dyn, v = this.vehicle, cam = this.camera;
    const fwd = this._tmp.set(Math.sin(d.yaw), 0, Math.cos(d.yaw));
    const pos = v.root.position, speed = Math.hypot(d.vx, d.vy);
    if (!this.dragging) { this._lookT = (this._lookT || 0) + dt; if (this._lookT > 1.2) { this.orbitYaw = damp(this.orbitYaw, 0, 2.5, dt); this.orbitPitch = damp(this.orbitPitch, 0, 2.5, dt); } }
    let want = new THREE.Vector3(), look = new THREE.Vector3(), fov = 55, stiff = 6, near = 0.1;
    const yaw = d.yaw + this.orbitYaw + (d.vx < -0.5 && this.camMode !== 'cabin' ? 0 : 0);
    const back = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
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
        const e = v.driverEye.clone(); v.body.localToWorld(e);
        want.copy(e); stiff = 60; near = 0.03;
        const lookYaw = d.yaw + this.orbitYaw * 1.6 + d.steer * 0.35;
        look.set(e.x + Math.sin(lookYaw) * 10, e.y - 0.6 + this.orbitPitch * -4, e.z + Math.cos(lookYaw) * 10);
        fov = 64 + Math.min(8, speed * 0.15); break;
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
    // shake: road texture, speed and impacts
    this.shake = damp(this.shake, 0, 3, dt);
    const sh = (this.camMode === 'cabin' || this.camMode === 'hood' ? 0.6 : 1) * (Math.min(1, speed / 45) ** 2 * 0.012 + (d.surface !== 'asphalt' && d.surface !== 'floor' ? Math.min(1, speed / 15) * 0.02 : 0) + this.shake * 0.09);
    if (this.camMode !== 'cine') cam.position.add(new THREE.Vector3((Math.random() - 0.5) * sh, (Math.random() - 0.5) * sh, (Math.random() - 0.5) * sh));
    cam.lookAt(this.camLook);
    if (this.camMode === 'cabin') cam.rotateZ(-d.roll * 0.6);
    this.fov = damp(this.fov, fov, 3, dt);
    if (Math.abs(cam.fov - this.fov) > 0.01 || cam.near !== near) { cam.fov = this.fov; cam.near = near; cam.updateProjectionMatrix(); }
  }

  hud() {
    const d = this.dyn;
    return { kmh: Math.abs(d.vx) * 3.6, rpm: d.rpm, redline: this.vehicle.spec.redline, gear: d.reverse ? 'R' : d.engine ? (d.gear + '') : 'P', engine: d.engine, surface: d.surface, cam: this.camMode, lights: this.vehicle.state };
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
.pkm-touch{position:absolute;inset:auto 0 18px 0;display:none;justify-content:space-between;padding:0 14px;z-index:7;pointer-events:none}
.pkm-touch>div{display:flex;gap:10px;align-items:flex-end}.pkm-touch button{pointer-events:auto;touch-action:none;width:64px;height:64px;border-radius:18px;border:1px solid #383838;background:rgb(17 17 17 / .7);color:#F2F0EA;font:600 20px Inter,system-ui;backdrop-filter:blur(10px)}
.pkm-touch button.tall{height:92px}.pkm-touch button:active,.pkm-touch button.down{background:#BBA783;color:#080808}
@media (pointer:coarse){.pkm-touch{display:flex}.pkm-hud{bottom:auto;top:76px;transform:translateX(-50%) scale(.82)}}
`;

export function createHud(container) {
  const el = document.createElement('div'); el.className = 'pkm-hud'; el.hidden = true;
  el.innerHTML = `<div><div class="pkm-hud__spd" data-spd>0</div><div class="pkm-hud__unit">km/h</div></div>
    <div class="pkm-hud__gear" data-gear>P</div>
    <div class="pkm-hud__rev"><div class="pkm-hud__ind"><span class="amber" data-l>◀</span><span class="blue" data-h>◉</span><span data-e>⏻</span><span class="amber" data-r>▶</span></div>
    <div class="pkm-hud__bar" style="margin-top:8px"><i data-rpm></i></div><div class="pkm-hud__meta"><span data-rpmt>0 rpm</span><span data-surf>Asphalt</span></div></div>`;
  container.appendChild(el);
  const q = (s) => el.querySelector(s);
  let blink = 0;
  return {
    el,
    update(h, dt = 0.016) {
      blink += dt;
      q('[data-spd]').textContent = Math.round(h.kmh);
      q('[data-gear]').textContent = h.gear;
      q('[data-rpm]').style.width = Math.min(100, h.rpm / h.redline * 100).toFixed(1) + '%';
      q('[data-rpmt]').textContent = Math.round(h.rpm / 10) * 10 + ' rpm';
      q('[data-surf]').textContent = { asphalt: 'Asphalt', grass: 'Grass', dirt: 'Laterite', floor: 'Showroom floor', kerb: 'Kerb' }[h.surface] || h.surface;
      const on = (blink % 0.74) < 0.4, L = h.lights;
      q('[data-l]').classList.toggle('on', (L.left || L.hazard) && on);
      q('[data-r]').classList.toggle('on', (L.right || L.hazard) && on);
      q('[data-h]').classList.toggle('on', !!L.head);
      q('[data-e]').classList.toggle('on', h.engine);
    },
  };
}

export function createTouch(container, ctrl) {
  const el = document.createElement('div'); el.className = 'pkm-touch';
  el.innerHTML = `<div><button data-k="left" aria-label="Steer left">◀</button><button data-k="right" aria-label="Steer right">▶</button></div>
    <div><button data-k="hand" aria-label="Handbrake">⏸</button><button data-k="brake" class="tall" aria-label="Brake or reverse">▼</button><button data-k="gas" class="tall" aria-label="Accelerate">▲</button></div>`;
  container.appendChild(el);
  const state = { left: 0, right: 0, gas: 0, brake: 0, hand: 0 };
  const apply = () => ctrl.setTouch({ steer: state.left - state.right, throttle: state.gas, brake: state.brake, handbrake: !!state.hand });
  for (const b of el.querySelectorAll('button')) {
    const k = b.dataset.k;
    const on = (e) => { e.preventDefault(); state[k] = 1; b.classList.add('down'); apply(); };
    const off = (e) => { e.preventDefault(); state[k] = 0; b.classList.remove('down'); apply(); };
    b.addEventListener('pointerdown', on); b.addEventListener('pointerup', off); b.addEventListener('pointercancel', off); b.addEventListener('pointerleave', off);
  }
  return el;
}
