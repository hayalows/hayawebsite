// Vehicle dynamics: a dynamic bicycle model with load transfer, tyre
// saturation, an automatic gearbox and torque curves. Pure maths, no three.js.

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const damp = (a, b, k, dt) => b + (a - b) * Math.exp(-k * dt);
const level = { mu: 1, rough: 0, name: 'asphalt' };

export function torqueAt(spec, rpm) {
  // normalised torque curve, peak torque in Nm
  const r = rpm / spec.redline;
  if (spec.engine === 'diesel') {
    // fat mid-range from the turbo, falls away near the limiter
    const t = r < 0.2 ? 0.55 + r * 1.5 : r < 0.37 ? 0.85 + (r - 0.2) * 0.9 : r < 0.72 ? 1 : 1 - (r - 0.72) * 1.4;
    return spec.torque * clamp(t, 0.3, 1);
  }
  const t = 0.62 + 0.55 * Math.sin(Math.min(1, r / 0.72) * Math.PI / 2) - (r > 0.8 ? (r - 0.8) * 1.2 : 0);
  return spec.torque * clamp(t, 0.4, 1);
}

export function createDynamics(spec) {
  const m = spec.mass, L = spec.wheelbase, a = L * (1 - (spec.frontWeight ?? 0.52)), b = L - a;
  const h = spec.cgHeight ?? 0.68;
  const Iz = m * (L * L + spec.width * spec.width) / 12 * 1.1;
  return {
    spec, m, a, b, h, Iz,
    x: 0, z: 0, yaw: 0, vx: 0, vy: 0, r: 0,
    steer: 0, rpm: spec.idle, gear: 1, shiftT: 0, engine: false, starting: 0,
    throttle: 0, brake: 0, ax: 0, ay: 0, slip: 0, wheelSpin: 0, wheelSpeed: 0,
    pitch: 0, pitchV: 0, roll: 0, rollV: 0, heave: 0, heaveV: 0, distance: 0,
    surface: 'asphalt', hit: 0, reverse: false, lastShift: 0,
    groundPitch: 0, groundRoll: 0,
  };
}

export function sampleTyres(contact, spec, x, z, yaw, out) {
  const sin = Math.sin(yaw), cos = Math.cos(yaw);
  const a = spec.wheelbase * 0.5, b = spec.track * 0.5;
  out.fl = contact(x + a * sin - b * cos, z + a * cos + b * sin);
  out.fr = contact(x + a * sin + b * cos, z + a * cos - b * sin);
  out.rl = contact(x - a * sin - b * cos, z - a * cos + b * sin);
  out.rr = contact(x - a * sin + b * cos, z - a * cos - b * sin);
  return out;
}

/**
 * input: { throttle 0..1, brake 0..1, steer -1..1 (left +), handbrake bool }
 * env:   { tyreContact(x,z) -> {height, mu, rough, name}, collide(x,z,yaw) -> {nx,nz,depth,vx?,vz?}|null }
 */
export function stepDynamics(s, input, env, dt) {
  const S = s.spec, g = 9.81;
  const speed = Math.hypot(s.vx, s.vy);
  const surf = env.tyreContact?.(s.x, s.z) ?? env.grip?.(s.x, s.z) ?? level;
  const tyres = env.tyreContact && sampleTyres(env.tyreContact, S, s.x, s.z, s.yaw, s.tyres ??= {});
  const muFront = tyres ? (tyres.fl.mu + tyres.fr.mu) * 0.5 : surf.mu;
  const muRear = tyres ? (tyres.rl.mu + tyres.rr.mu) * 0.5 : surf.mu;
  if (tyres) {
    const { fl, fr, rl, rr } = tyres;
    const grade = Math.atan2((fl.height + fr.height - rl.height - rr.height) * 0.5, S.wheelbase);
    const bank = Math.atan2((fl.height + rl.height - fr.height - rr.height) * 0.5, S.track);
    s.groundPitch = damp(s.groundPitch, grade, 9, dt);
    s.groundRoll = damp(s.groundRoll, bank, 9, dt);
  }
  s.surface = surf.name;

  // steering: slower at speed, smooth rack
  const maxSteer = (S.steeringLock ?? 0.58) / (1 + Math.pow(Math.abs(s.vx) / 14, 1.4) * 0.9);
  s.steer = damp(s.steer, input.steer * maxSteer, 16, dt);

  // The brake always resists motion. Shifting is a separate control.
  const brk = input.brake, brakeHold = brk > 0.15 || input.handbrake;
  let thr = s.engine && !brakeHold ? input.throttle : 0;
  const vxBefore = s.vx;

  // gearbox
  const tyreR = S.tyreR, gears = S.gears;
  const wheelRpm = Math.abs(s.vx) / (2 * Math.PI * tyreR) * 60;
  s.shiftT = Math.max(0, s.shiftT - dt);
  if (!s.reverse && s.shiftT === 0) {
    const cur = wheelRpm * gears[s.gear - 1] * S.finalDrive;
    if (cur > S.shiftUp * (0.75 + 0.25 * thr) && s.gear < gears.length) { s.gear++; s.shiftT = S.engine === 'v8' ? 0.14 : 0.22; s.lastShift = 1; }
    else if (cur < S.shiftDown && s.gear > 1) { s.gear--; s.shiftT = 0.2; s.lastShift = -1; }
  }
  const ratio = (s.reverse ? 4.1 : gears[s.gear - 1]) * S.finalDrive;
  // engine speed: torque converter slip at low speed
  const coupled = wheelRpm * ratio;
  const target = s.engine ? Math.max(S.idle + thr * (S.engine === 'v8' ? 2100 : 1400) * clamp(1 - Math.abs(s.vx) / 6, 0, 1), coupled) : 0;
  const rpmTarget = s.shiftT > 0 ? target * 0.82 : target;
  if (s.starting > 0) { s.starting -= dt; }
  s.rpm = damp(s.rpm, clamp(rpmTarget, 0, S.redline * 1.02), s.engine ? 9 : 2.5, dt);
  if (s.rpm > S.redline) thr *= 0.2; // limiter

  const engT = s.engine ? torqueAt(S, Math.max(s.rpm, S.idle)) * thr : 0;
  let Fx = engT * ratio * 0.92 / tyreR * (s.shiftT > 0 ? 0.68 : 1);
  if (s.reverse) Fx = -Fx;
  const powerCap = S.power * 1000 / Math.max(2, Math.abs(s.vx)); Fx = clamp(Fx, -powerCap * 1.2, powerCap * 1.2);
  // brakes, rolling resistance, drag, engine braking
  const dir = Math.sign(s.vx) || 0;
  const Fb = brk * s.m * g * 0.95 + (input.handbrake ? 6000 : 0);
  const rough = tyres ? (tyres.fl.rough + tyres.fr.rough + tyres.rl.rough + tyres.rr.rough) * 0.25 : surf.rough;
  const roll = (s.m * g) * (0.013 + rough * 0.038);
  const drag = 0.5 * 1.2 * (S.engine === 'v8' ? 1.25 : 1.1) * s.vx * Math.abs(s.vx);
  const engBrake = s.engine && thr < 0.05 ? (s.rpm / S.redline) * 900 * dir : 0;
  const gradeForce = s.m * g * Math.sin(s.groundPitch);
  let Flong = Fx - drag - engBrake - gradeForce;
  // brakes only resist motion; stop cleanly
  const resist = (Fb + roll) * dir;
  if (Math.abs(s.vx) < 0.12 && Math.abs(Fx - gradeForce) <= Fb + roll) { s.vx = 0; Flong = 0; }
  else Flong -= resist;

  // load transfer
  const Wf = clamp(s.m * g * s.b / (s.a + s.b) - s.m * s.ax * s.h / (s.a + s.b), s.m * g * 0.1, s.m * g * 0.9);
  const Wr = s.m * g - Wf;
  const capacityFront = Math.max(1, muFront * Wf), capacityRear = Math.max(1, muRear * Wr);
  const frontShare = brakeHold ? 0.62 : S.driveFront ?? 0.44;
  const demand = Flong;
  const forceFront = clamp(demand * frontShare, -capacityFront, capacityFront);
  const forceRear = clamp(demand * (1 - frontShare), -capacityRear, capacityRear);
  Flong = forceFront + forceRear;
  const spinDemand = Math.abs(Fx) - (capacityFront + capacityRear);
  s.wheelSpin = damp(s.wheelSpin, clamp(spinDemand / (s.m * g), 0, 1) * 5, 8, dt);

  // lateral tyre forces
  const vxs = Math.max(Math.abs(s.vx), 0.5) * (s.vx < 0 ? -1 : 1);
  const af = Math.atan2(s.vy + s.a * s.r, Math.abs(vxs)) - s.steer * Math.sign(vxs);
  const ar = Math.atan2(s.vy - s.b * s.r, Math.abs(vxs));
  const Cf = 8.2 * Wf, Cr = 9.6 * Wr;
  const frontGrip = Math.sqrt(Math.max(0, capacityFront ** 2 - forceFront ** 2));
  const rearGrip = Math.sqrt(Math.max(0, capacityRear ** 2 - forceRear ** 2)) * (input.handbrake ? 0.43 : 1);
  const tyre = (alpha, C, cap) => cap > 1 ? cap * Math.tanh((-C * alpha) / cap) : 0; // smooth limit, no sudden cliff
  const Fyf = tyre(af, Cf, frontGrip), Fyr = tyre(ar, Cr, rearGrip);
  s.slip = clamp(Math.max(Math.abs(af), Math.abs(ar)) * Math.min(1, speed / 4) * 3 + s.wheelSpin * 0.6 + (input.handbrake && speed > 3 ? 0.5 : 0), 0, 1.5);

  // dynamic model, blended into a kinematic one at parking speeds (no jolt at the hand-over)
  const ax = (Flong - Fyf * Math.sin(s.steer)) / s.m + s.vy * s.r;
  const ay = (Fyf * Math.cos(s.steer) + Fyr) / s.m - s.vx * s.r;
  const rr = (s.a * Fyf * Math.cos(s.steer) - s.b * Fyr) / s.Iz;
  const w = clamp((speed - 1) / 3, 0, 1), blend = w * w * (3 - 2 * w);
  s.vx += (blend * ax + (1 - blend) * (Flong / s.m)) * dt;
  s.vy = blend * (s.vy + ay * dt) + (1 - blend) * damp(s.vy, 0, 10, dt);
  const rKin = s.vx * Math.tan(s.steer) / (s.a + s.b);
  s.r = blend * (s.r + rr * dt) + (1 - blend) * rKin;
  s.ax = damp(s.ax, blend * (ax - s.vy * s.r) + (1 - blend) * (Flong / s.m), 12, dt);
  s.ay = damp(s.ay, blend * (ay + s.vx * s.r) + (1 - blend) * s.vx * s.r, 12, dt);
  if (brakeHold && (vxBefore === 0 || vxBefore * s.vx < 0)) s.vx = 0;
  s.vx = clamp(s.vx, -6, S.top);

  // integrate in world (forward = +z at yaw 0)
  const sin = Math.sin(s.yaw), cos = Math.cos(s.yaw);
  s.x += (s.vx * sin + s.vy * cos) * dt;
  s.z += (s.vx * cos - s.vy * sin) * dt;
  s.yaw += s.r * dt;

  // collisions
  s.hit = Math.max(0, s.hit - dt);
  if (env.collide) {
    const c = env.collide(s.x, s.z, s.yaw);
    if (c) {
      s.x += c.nx * c.depth; s.z += c.nz * c.depth;
      const vwx = s.vx * sin + s.vy * cos, vwz = s.vx * cos - s.vy * sin;
      const vn = (vwx - (c.vx ?? 0)) * c.nx + (vwz - (c.vz ?? 0)) * c.nz;
      if (vn < 0) {
        const impact = -vn; s.hit = Math.min(1, impact / 8);
        const nudge = Math.min(14, -1.06 * vn);
        const nvx = (vwx + nudge * c.nx) * 0.94, nvz = (vwz + nudge * c.nz) * 0.94;
        s.vx = nvx * sin + nvz * cos; s.vy = (nvx * cos - nvz * sin) * 0.5;
        const side = Math.sin(s.yaw) * c.nz - Math.cos(s.yaw) * c.nx; // which way the hit twists the car
        s.r = s.r * 0.6 + clamp(side * impact * 0.06, -0.8, 0.8);
        s.lastImpact = impact;
      }
    }
  }

  // sprung-mass motion (springs + dampers)
  const kP = 38, cP = 7.5, kR = 30, cR = 6, kH = S.springRate ?? 55, cH = S.springDamping ?? 9;
  const pitchT = clamp(-s.ax * 0.0085, -0.06, 0.06);
  const rollT = clamp(s.ay * (S.bodyRoll ?? 0.0072), -0.078, 0.078);
  s.pitchV += ((pitchT - s.pitch) * kP - s.pitchV * cP) * dt; s.pitch += s.pitchV * dt;
  s.rollV += ((rollT - s.roll) * kR - s.rollV * cR) * dt; s.roll += s.rollV * dt;
  s.distance += speed * dt;
  const bump = rough * Math.min(1, speed / 6) *
    (Math.sin(s.distance * 13) * 0.24 + Math.sin(s.distance * 5.3) * 0.14);
  s.heaveV += ((-s.heave) * kH - s.heaveV * cH + bump * 60) * dt; s.heave += s.heaveV * dt;
  s.wheelSpeed = s.vx / tyreR + s.wheelSpin * 30 * Math.sign(thr || 1) * (s.reverse ? -1 : 1);
  s.throttle = damp(s.throttle, thr, 10, dt); s.brake = brk;
  return s;
}
