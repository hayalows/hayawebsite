// PKM Motors vehicle builder.
// Original designs: the PKM Volta (double-cab diesel pickup) and the
// PKM Regent (full-size luxury V8 SUV). Units are metres.
// Built only with three.js APIs that exist from r128 to current, so both
// Drive Studio (modern three) and Accra 3D (r128 global) can share it.
// Inner frame: +x forward, +y up, +z right. The returned root faces +z.

export const SPECS = {
  volta: {
    id: 'volta', brand: 'PKM Motors', name: 'Volta', trim: 'Double Cab 2.8D 4x4',
    tagline: 'Built for laterite, loads and long weekends.',
    chips: ['2.8L turbo-diesel', '150 kW · 500 Nm', '6-speed auto', 'Shift-on-the-fly 4WD'],
    width: 1.88, wheelbase: 3.08, front: 2.52, rear: -2.80, track: 1.58,
    tyreR: 0.392, tyreW: 0.27, archR: 0.49, archY: 0.42, sill: 0.47, belt: 1.18, roof: 1.84,
    mass: 2150, power: 150, torque: 500, idle: 780, redline: 4000, shiftUp: 3300, shiftDown: 1500,
    gears: [4.71, 2.84, 1.79, 1.39, 1.0, 0.78], finalDrive: 3.73, top: 49,
    engine: 'diesel', horn: [404, 508],
    paints: [
      { name: 'Savanna Olive', hex: '#5d6449', metal: 0.35 },
      { name: 'Laterite Red', hex: '#7a2f22', metal: 0.45 },
      { name: 'Harmattan White', hex: '#e9e7e1', metal: 0.05 },
      { name: 'Graphite', hex: '#2f3236', metal: 0.6 },
      { name: 'Volta Blue', hex: '#1e3d5c', metal: 0.55 },
      { name: 'Kente Gold', hex: '#a9884a', metal: 0.7 },
    ],
  },
  regent: {
    id: 'regent', brand: 'PKM Motors', name: 'Regent', trim: 'Platinum V8 AWD',
    tagline: 'Quiet power for state visits and school runs.',
    chips: ['6.2L V8', '313 kW · 624 Nm', '10-speed auto', 'Air ride suspension'],
    width: 2.06, wheelbase: 3.07, front: 2.52, rear: -2.88, track: 1.74,
    tyreR: 0.405, tyreW: 0.285, archR: 0.475, archY: 0.43, sill: 0.44, belt: 1.25, roof: 1.93,
    mass: 2700, power: 313, torque: 624, idle: 620, redline: 6000, shiftUp: 5400, shiftDown: 2000,
    gears: [4.7, 2.99, 2.15, 1.77, 1.52, 1.28, 1.0, 0.85, 0.69, 0.64], finalDrive: 3.23, top: 59,
    engine: 'v8', horn: [350, 440],
    paints: [
      { name: 'Obsidian Black', hex: '#0d0e10', metal: 0.4 },
      { name: 'Ridge Silver', hex: '#a7abae', metal: 0.85 },
      { name: 'Pearl White', hex: '#eeece6', metal: 0.15 },
      { name: 'Midnight Navy', hex: '#141e30', metal: 0.6 },
      { name: 'Cocoa Bronze', hex: '#4a3428', metal: 0.7 },
      { name: 'Jubilee Green', hex: '#1d3b2c', metal: 0.55 },
    ],
  },
};

const sstep = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function buildVehicle(THREE, id, opts = {}) {
  const S = SPECS[id];
  const modern = !!THREE.ColorManagement;
  const LS = modern ? 1 : 0.06; // legacy (r128) light units
  const col = (h) => { const c = new THREE.Color(h); if (!modern) c.convertSRGBToLinear(); return c; };
  const srgb = (t) => { if ('colorSpace' in t) t.colorSpace = THREE.SRGBColorSpace; else t.encoding = THREE.sRGBEncoding; return t; };
  const canvas = (w, h, draw) => { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); return c; };
  const isV8 = id === 'regent';
  const W = S.width, hw = W / 2, belt = S.belt, roof = S.roof;
  const fx = S.wheelbase / 2;

  // ---------- materials ----------
  const paint = new THREE.MeshPhysicalMaterial({ color: col(S.paints[0].hex), metalness: S.paints[0].metal, roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.25 });
  const M = {
    paint,
    black: new THREE.MeshStandardMaterial({ color: col('#121314'), roughness: 0.55, metalness: 0.1 }),
    piano: new THREE.MeshPhysicalMaterial({ color: col('#050506'), roughness: 0.12, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.05 }),
    trim: new THREE.MeshStandardMaterial({ color: col('#1b1c1d'), roughness: 0.85, metalness: 0 }),
    chrome: new THREE.MeshStandardMaterial({ color: col('#dfe3e6'), roughness: 0.06, metalness: 1, envMapIntensity: 1.6 }),
    satin: new THREE.MeshStandardMaterial({ color: col('#9ea3a6'), roughness: 0.32, metalness: 1 }),
    glass: new THREE.MeshPhysicalMaterial({ color: col('#05080a'), roughness: 0.02, metalness: 0.3, transparent: true, opacity: 0.86, envMapIntensity: 1.7, clearcoat: 1, clearcoatRoughness: 0 }),
    lens: new THREE.MeshPhysicalMaterial({ color: col('#e8eef2'), roughness: 0.02, metalness: 0, transparent: true, opacity: 0.35, clearcoat: 1 }),
    head: new THREE.MeshStandardMaterial({ color: col('#f4f7fb'), emissive: col('#ffffff'), emissiveIntensity: 0.6, roughness: 0.25, metalness: 0.4 }),
    drl: new THREE.MeshStandardMaterial({ color: col('#ffffff'), emissive: col('#eef4ff'), emissiveIntensity: 2.2, roughness: 0.3 }),
    tail: new THREE.MeshStandardMaterial({ color: col('#5a0b0b'), emissive: col('#ff1a10'), emissiveIntensity: 0.55, roughness: 0.2, metalness: 0.2 }),
    amber: new THREE.MeshStandardMaterial({ color: col('#6b3d07'), emissive: col('#ff8a00'), emissiveIntensity: 0, roughness: 0.25 }),
    reverse: new THREE.MeshStandardMaterial({ color: col('#bfc4c8'), emissive: col('#ffffff'), emissiveIntensity: 0, roughness: 0.2 }),
    tyre: null, rim: null,
    interior: new THREE.MeshStandardMaterial({ color: col(isV8 ? '#3a2a20' : '#232425'), roughness: 0.78 }),
    leather: new THREE.MeshStandardMaterial({ color: col(isV8 ? '#8b6a4f' : '#36383a'), roughness: 0.6 }),
    aperture: new THREE.MeshStandardMaterial({ color: col('#141414'), roughness: 0.9 }),
    under: new THREE.MeshStandardMaterial({ color: col('#0b0b0b'), roughness: 0.95 }),
    disc: new THREE.MeshStandardMaterial({ color: col('#6d6f70'), roughness: 0.45, metalness: 0.9 }),
    caliper: new THREE.MeshStandardMaterial({ color: col(isV8 ? '#141414' : '#8f1d18'), roughness: 0.4, metalness: 0.3 }),
  };

  // tyre texture: tread blocks plus sidewall lettering
  const tread = canvas(2048, 256, (g, w, h) => {
    g.fillStyle = '#7a7a7a'; g.fillRect(0, 0, w, h);
    const n = 72;
    for (let i = 0; i < n; i++) {
      const x = (i / n) * w;
      g.fillStyle = '#2a2a2a';
      g.fillRect(x + 4, h * 0.36, w / n * 0.42, h * 0.11);
      g.fillRect(x + (w / n) * 0.45, h * 0.49, w / n * 0.42, h * 0.11);
      if (!isV8) { g.fillRect(x + 2, h * 0.30, w / n * 0.2, h * 0.38); }
    }
  });
  const sideTex = canvas(2048, 256, (g, w, h) => {
    g.fillStyle = '#191919'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#2b2b2b';
    g.font = '700 46px Inter, Arial, sans-serif'; g.textBaseline = 'middle';
    const label = isV8 ? 'PKM GRAND TOURING  ·  285/45 R22  ·  ' : 'PKM TERRA A/T  ·  265/65 R17  ·  ';
    for (let k = 0; k < 2; k++) g.fillText(label, k * w / 2 + 40, h * 0.15);
    for (let k = 0; k < 2; k++) g.fillText(label, k * w / 2 + 40, h * 0.85);
  });
  const treadTex = new THREE.CanvasTexture(tread); treadTex.wrapS = THREE.RepeatWrapping;
  const sideMap = srgb(new THREE.CanvasTexture(sideTex)); sideMap.wrapS = THREE.RepeatWrapping;
  M.tyre = new THREE.MeshStandardMaterial({ color: col('#1c1c1c'), roughness: 0.9, bumpMap: treadTex, bumpScale: 2.5, map: sideMap });
  M.rim = new THREE.MeshPhysicalMaterial({ color: col(isV8 ? '#d9dcdf' : '#3a3d40'), metalness: 1, roughness: isV8 ? 0.12 : 0.35, clearcoat: 0.6 });

  // emblem
  const emblemTex = srgb(new THREE.CanvasTexture(canvas(256, 256, (g, w) => {
    const r = w / 2;
    const gr = g.createLinearGradient(0, 0, w, w); gr.addColorStop(0, '#f3f3f3'); gr.addColorStop(0.5, '#9b9b9b'); gr.addColorStop(1, '#e8e8e8');
    g.fillStyle = gr; g.beginPath(); g.arc(r, r, r - 4, 0, 7); g.fill();
    g.fillStyle = '#121212'; g.beginPath(); g.arc(r, r, r - 22, 0, 7); g.fill();
    g.fillStyle = '#d9c7a3'; g.font = '800 82px Inter, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('PKM', r, r + 4);
  })));
  M.emblem = new THREE.MeshStandardMaterial({ map: emblemTex, metalness: 0.6, roughness: 0.25 });

  const root = new THREE.Group(); root.name = 'PKM ' + S.name;
  const car = new THREE.Group(); car.rotation.y = -Math.PI / 2; root.add(car); // inner frame -> +z forward
  const body = new THREE.Group(); car.add(body); // sprung mass (pitch / roll / heave)
  const clickable = [];

  const add = (geo, mat, parent = body, cast = true) => { const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = true; parent.add(m); return m; };
  const boxAt = (w, h, d, x, y, z, mat, parent = body) => { const m = add(new THREE.BoxGeometry(w, h, d), mat, parent); m.position.set(x, y, z); return m; };
  const rbox = (w, h, d, r, mat, parent = body) => { // rounded box via extrude
    const s = new THREE.Shape(); const x = -w / 2, y = -h / 2; r = Math.min(r, w / 2 - 1e-3, h / 2 - 1e-3);
    s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r); s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
    const b = Math.min(r, d / 2 - 1e-3) * 0.9;
    const g = new THREE.ExtrudeGeometry(s, { depth: Math.max(1e-3, d - 2 * b), bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelOffset: -b, bevelSegments: 3, curveSegments: 6 });
    g.translate(0, 0, -(d - 2 * b) / 2);
    return add(g, mat, parent);
  };

  // weld coincident vertices so deformed extrusions shade smoothly
  function weld(g0) {
    const g = g0.index ? g0.toNonIndexed() : g0;
    const pos = g.attributes.position, n = pos.count;
    const fn = new Float32Array(n), groups = new Map(), keys = new Array(n);
    const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
    const faceN = [];
    for (let f = 0; f < n / 3; f++) {
      a.fromBufferAttribute(pos, f * 3); b.fromBufferAttribute(pos, f * 3 + 1); c.fromBufferAttribute(pos, f * 3 + 2);
      faceN.push(new THREE.Vector3().subVectors(c, b).cross(new THREE.Vector3().subVectors(a, b)));
    }
    for (let i = 0; i < n; i++) {
      const k = Math.round(pos.getX(i) * 2e3) + '_' + Math.round(pos.getY(i) * 2e3) + '_' + Math.round(pos.getZ(i) * 2e3);
      keys[i] = k; let arr = groups.get(k); if (!arr) groups.set(k, arr = []); arr.push(i);
    }
    const nrm = new Float32Array(n * 3), cos = Math.cos(0.62), t = new THREE.Vector3(), u = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      const fi = faceN[(i / 3) | 0]; u.copy(fi).normalize(); t.set(0, 0, 0);
      for (const j of groups.get(keys[i])) { const fj = faceN[(j / 3) | 0]; if (u.dot(c.copy(fj).normalize()) > cos) t.add(fj); }
      t.normalize(); nrm[i * 3] = t.x; nrm[i * 3 + 1] = t.y; nrm[i * 3 + 2] = t.z;
    }
    g.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
    return g;
  }
  function weldOld(g) {
    const pos = g.attributes.position, map = new Map(), idx = [], verts = [];
    const src = g.index ? g.index.array : null, count = src ? src.length : pos.count;
    for (let i = 0; i < count; i++) {
      const vi = src ? src[i] : i;
      const x = pos.getX(vi), y = pos.getY(vi), z = pos.getZ(vi);
      const key = Math.round(x * 2e3) + '_' + Math.round(y * 2e3) + '_' + Math.round(z * 2e3);
      let k = map.get(key);
      if (k === undefined) { k = verts.length / 3; verts.push(x, y, z); map.set(key, k); }
      idx.push(k);
    }
    const out = new THREE.BufferGeometry();
    out.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    out.setIndex(idx); out.computeVertexNormals(); return out;
  }

  // half-width of the body at (x, y): plan-view rounding at the ends and tumblehome
  const xF = S.front, xR = S.rear;
  function halfW(x, y, glass) {
    let s = 1;
    s -= 0.11 * sstep(xF - 0.55, xF, x) ** 1.4;
    s -= 0.06 * sstep(xR + 0.45, xR, x) ** 1.4;
    if (glass) s -= 0.15 * Math.max(0, Math.min(1, (y - belt) / (roof - belt)));
    else { s -= 0.035 * sstep(belt - 0.3, belt, y); s -= 0.03 * sstep(0.7, S.sill, y); }
    return hw * s;
  }
  function resample(shape, segs) {
    const pts = shape.getPoints(segs), out = [];
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length]; out.push(a);
      const d = a.distanceTo(b), n = Math.floor(d / 0.1);
      for (let k = 1; k < n; k++) out.push(a.clone().lerp(b, k / n));
    }
    if (out.length > 1 && out[0].distanceTo(out[out.length - 1]) < 1e-4) out.pop();
    return new THREE.Shape(out);
  }
  function refine(g, maxLen, iters) {
    let pos = Array.from((g.index ? g.toNonIndexed() : g).attributes.position.array);
    for (let it = 0; it < iters; it++) {
      const out = [];
      const P = (i) => [pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]];
      const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2];
      const len = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
      let changed = false;
      for (let f = 0; f < pos.length / 9; f++) {
        const A = P(f * 3), B = P(f * 3 + 1), C = P(f * 3 + 2);
        const sab = len(A, B) > maxLen, sbc = len(B, C) > maxLen, sca = len(C, A) > maxLen;
        const tri = (x, y, z) => out.push(...x, ...y, ...z);
        const n = sab + sbc + sca; if (n) changed = true;
        if (n === 0) tri(A, B, C);
        else if (n === 3) { const ab = mid(A, B), bc = mid(B, C), ca = mid(C, A); tri(A, ab, ca); tri(ab, B, bc); tri(ca, bc, C); tri(ab, bc, ca); }
        else if (n === 1) { if (sab) { const m = mid(A, B); tri(A, m, C); tri(m, B, C); } else if (sbc) { const m = mid(B, C); tri(A, B, m); tri(A, m, C); } else { const m = mid(C, A); tri(A, B, m); tri(m, B, C); } }
        else { // two edges split
          if (!sab) { const bc = mid(B, C), ca = mid(C, A); tri(A, B, bc); tri(A, bc, ca); tri(ca, bc, C); }
          else if (!sbc) { const ab = mid(A, B), ca = mid(C, A); tri(A, ab, ca); tri(ab, B, C); tri(ab, C, ca); }
          else { const ab = mid(A, B), bc = mid(B, C); tri(A, ab, C); tri(ab, bc, C); tri(ab, B, bc); }
        }
      }
      pos = out; if (!changed) break;
    }
    const ng = new THREE.BufferGeometry(); ng.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); return ng;
  }
  function extrudeProfile(shape0, width, glass, segs = 28) {
    const bev = glass ? 0.05 : 0.075;
    const shape = resample(shape0, segs);
    const g0 = new THREE.ExtrudeGeometry(shape, { depth: width - 2 * bev, steps: 1, bevelEnabled: true, bevelThickness: bev, bevelSize: bev * 0.85, bevelOffset: -bev * 0.85, bevelSegments: 5, curveSegments: segs });
    const g = refine(g0, 0.14, 7);
    const p = g.attributes.position, half = width / 2, k = width / W;
    const cap = new Int8Array(p.count);
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i) - (width - 2 * bev) / 2;
      if (Math.abs(Math.abs(z) - half) < 1e-4) cap[i] = Math.sign(z);
      p.setZ(i, (z / half) * halfW(x, y, glass) * k);
    }
    const out = weld(g), nn = out.attributes.normal, e = 0.01, v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) if (cap[i]) {
      const x = p.getX(i), y = p.getY(i);
      const dx = (halfW(x + e, y, glass) - halfW(x - e, y, glass)) / (2 * e) * k;
      const dy = (halfW(x, y + e, glass) - halfW(x, y - e, glass)) / (2 * e) * k;
      v.set(-dx * cap[i], -dy * cap[i], 1 * cap[i]).normalize(); nn.setXYZ(i, v.x, v.y, v.z);
    }
    return out;
  }

  // ---------- lower body (tub) ----------
  const arch = (s, cx, dir) => { // dir: +1 travelling forward along the bottom
    const r = S.archR, cy = S.archY;
    const a = Math.asin(Math.min(1, (S.sill - cy) / r));
    if (dir > 0) s.absarc(cx, cy, r, Math.PI - a, a, true);
    else s.absarc(cx, cy, r, a, Math.PI - a, false);
  };
  const tubShape = (x0, x1, top, withFront, withRear, frontArch, rearArch) => {
    const s = new THREE.Shape();
    const sill = S.sill;
    if (withRear) { s.moveTo(x0 + 0.08, sill - 0.02); }
    else s.moveTo(x0, sill);
    if (rearArch) { s.lineTo(-fx - S.archR - 0.01, sill); arch(s, -fx, 1); }
    if (frontArch) { s.lineTo(fx - S.archR - 0.01, sill); arch(s, fx, 1); }
    if (withFront) {
      s.lineTo(x1 - 0.1, sill - 0.04);
      s.quadraticCurveTo(x1 + 0.005, sill - 0.02, x1 + 0.01, sill + 0.14);
      top.front(s);
    } else s.lineTo(x1, sill), s.lineTo(x1, top.h1);
    top.top(s);
    if (withRear) { s.lineTo(x0 + 0.005, top.h0 - 0.06); s.quadraticCurveTo(x0 - 0.01, (top.h0 + sill) / 2, x0 + 0.01, sill + 0.12); s.quadraticCurveTo(x0, sill - 0.02, x0 + 0.08, sill - 0.02); }
    else s.lineTo(x0, sill);
    return s;
  };

  const hoodFront = isV8 ? 1.16 : 1.06;
  const cowlX = isV8 ? 0.92 : 0.96;
  const frontTop = {
    front: (s) => {
      s.lineTo(xF + 0.02, isV8 ? 0.96 : 0.86);
      s.quadraticCurveTo(xF + 0.02, hoodFront + 0.02, xF - 0.08, hoodFront);
    },
  };
  let cabRearX;
  if (!isV8) {
    cabRearX = -1.32;
    frontTop.h0 = belt; frontTop.h1 = belt;
    frontTop.top = (s) => { s.quadraticCurveTo(cowlX + 0.6, belt + 0.03, cowlX, belt); s.lineTo(cabRearX, belt); };
    const cab = new THREE.Shape();
    // cab + front clip
    cab.moveTo(cabRearX, S.sill);
    cab.lineTo(fx - S.archR - 0.01, S.sill); arch(cab, fx, 1);
    cab.lineTo(xF - 0.1, S.sill - 0.04);
    cab.quadraticCurveTo(xF + 0.005, S.sill - 0.02, xF + 0.01, S.sill + 0.14);
    frontTop.front(cab);
    cab.lineTo(cowlX, belt);
    cab.lineTo(cabRearX, belt); cab.lineTo(cabRearX, S.sill);
    add(extrudeProfile(cab, W, false), paint);
    // bed lower + rear arch
    const bedFloor = 0.94, bx0 = xR, bx1 = cabRearX - 0.03;
    const bed = new THREE.Shape();
    bed.moveTo(bx0 + 0.06, S.sill);
    bed.lineTo(-fx - S.archR - 0.01, S.sill); arch(bed, -fx, 1);
    bed.lineTo(bx1, S.sill); bed.lineTo(bx1, bedFloor); bed.lineTo(bx0 + 0.02, bedFloor);
    bed.quadraticCurveTo(bx0, bedFloor, bx0, bedFloor - 0.05); bed.lineTo(bx0, S.sill + 0.06); bed.quadraticCurveTo(bx0, S.sill, bx0 + 0.06, S.sill);
    add(extrudeProfile(bed, W, false), paint);
    // bed walls
    for (const side of [-1, 1]) {
      const sh = new THREE.Shape();
      sh.moveTo(bx0 + 0.03, bedFloor - 0.02); sh.lineTo(bx1, bedFloor - 0.02); sh.lineTo(bx1, belt); sh.lineTo(bx0 + 0.03, belt - 0.01);
      const g = new THREE.ExtrudeGeometry(sh, { depth: 0.05, bevelEnabled: true, bevelThickness: 0.015, bevelSize: 0.015, bevelOffset: -0.015, bevelSegments: 2 });
      const m = add(g, paint); m.position.z = side > 0 ? halfW(-2, 1.0) - 0.065 : -halfW(-2, 1.0) + 0.015;
      boxAt(bx1 - bx0 - 0.05, 0.035, 0.09, (bx0 + bx1) / 2, belt + 0.01, side * (halfW(-2, 1.0) - 0.04), M.black); // bed rail cap
    }
    boxAt(0.06, belt - bedFloor, W - 0.16, bx1 - 0.02, (belt + bedFloor) / 2, 0, paint); // front bed wall
    boxAt(bx1 - bx0 - 0.1, 0.012, W - 0.2, (bx0 + bx1) / 2, bedFloor + 0.006, 0, M.trim); // liner
    for (let i = 0; i < 6; i++) boxAt(bx1 - bx0 - 0.12, 0.02, 0.05, (bx0 + bx1) / 2, bedFloor + 0.02, -0.65 + i * 0.26, M.trim);
    // sports bar
    for (const side of [-1, 1]) {
      const t = add(new THREE.CylinderGeometry(0.035, 0.035, 0.42, 12), M.black); t.position.set(bx1 - 0.12, belt + 0.2, side * (hw - 0.14));
    }
    const bar = add(new THREE.CylinderGeometry(0.035, 0.035, W - 0.28, 12), M.black); bar.rotation.x = Math.PI / 2; bar.position.set(bx1 - 0.12, belt + 0.41, 0);
    // fender flares
    for (const cx of [fx, -fx]) for (const side of [-1, 1]) {
      const sh = new THREE.Shape(); const r0 = S.archR + 0.005, r1 = S.archR + 0.075;
      sh.absarc(0, 0, r1, Math.PI + 0.12, -0.12, true); sh.absarc(0, 0, r0, -0.12, Math.PI + 0.12, false);
      const g = new THREE.ExtrudeGeometry(sh, { depth: 0.05, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.012, bevelOffset: -0.012, bevelSegments: 2, curveSegments: 24 });
      const m = add(g, M.trim); m.position.set(cx, S.archY, side > 0 ? halfW(cx, 0.8) - 0.03 : -halfW(cx, 0.8) - 0.03);
    }
  } else {
    cabRearX = xR;
    const sh = new THREE.Shape();
    sh.moveTo(xR + 0.08, S.sill - 0.02);
    sh.lineTo(-fx - S.archR - 0.01, S.sill); arch(sh, -fx, 1);
    sh.lineTo(fx - S.archR - 0.01, S.sill); arch(sh, fx, 1);
    sh.lineTo(xF - 0.1, S.sill - 0.04);
    sh.quadraticCurveTo(xF + 0.005, S.sill - 0.02, xF + 0.01, S.sill + 0.14);
    frontTop.front(sh);
    sh.lineTo(cowlX, belt);
    sh.lineTo(xR + 0.04, belt - 0.01);
    sh.quadraticCurveTo(xR - 0.01, belt - 0.03, xR - 0.005, belt - 0.12);
    sh.lineTo(xR - 0.01, S.sill + 0.12); sh.quadraticCurveTo(xR, S.sill - 0.02, xR + 0.08, S.sill - 0.02);
    add(extrudeProfile(sh, W, false), paint);
  }

  // ---------- greenhouse ----------
  const gh = new THREE.Shape();
  const wsTopX = isV8 ? 0.06 : 0.16, roofRearX = isV8 ? xR + 0.2 : cabRearX + 0.12, ghRearBase = isV8 ? xR + 0.04 : cabRearX + 0.02;
  gh.moveTo(ghRearBase, belt - 0.02);
  gh.lineTo(cowlX - 0.02, belt - 0.02);
  gh.quadraticCurveTo((cowlX + wsTopX) / 2 + 0.05, (belt + roof) / 2 - 0.02, wsTopX, roof - 0.04);
  gh.quadraticCurveTo(wsTopX - 0.18, roof + 0.005, wsTopX - 0.4, roof);
  gh.lineTo(roofRearX + 0.25, roof - 0.005);
  gh.quadraticCurveTo(roofRearX, roof - 0.01, roofRearX - (isV8 ? 0.1 : 0.06), roof - 0.08);
  gh.lineTo(ghRearBase, belt - 0.02);
  const ghW = W - 0.06;
  add(extrudeProfile(gh, ghW, true, 24), M.glass);
  // painted roof skin
  const rf = new THREE.Shape();
  rf.moveTo(wsTopX - 0.05, roof - 0.05);
  rf.quadraticCurveTo(wsTopX - 0.18, roof + 0.012, wsTopX - 0.4, roof + 0.008);
  rf.lineTo(roofRearX + 0.25, roof + 0.003);
  rf.quadraticCurveTo(roofRearX + 0.005, roof - 0.004, roofRearX - (isV8 ? 0.09 : 0.05), roof - 0.08);
  rf.lineTo(roofRearX - (isV8 ? 0.06 : 0.02), roof - 0.1);
  rf.lineTo(wsTopX - 0.05, roof - 0.1);
  add(extrudeProfile(rf, ghW + 0.012, true, 16), paint);

  // pillars and window graphics (piano black bands)
  const ghHalf = (x, y) => halfW(x, y, true) * (ghW / W) + 0.004;
  const band = (x0, y0, x1, y1, t, mat, side) => {
    const a = new THREE.Vector3(x0, y0, side * ghHalf(x0, y0)), b = new THREE.Vector3(x1, y1, side * ghHalf(x1, y1));
    const len = a.distanceTo(b);
    const m = add(new THREE.BoxGeometry(len, t, 0.012), mat);
    m.position.copy(a).add(b).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), b.clone().sub(a).normalize());
    const nrm = new THREE.Vector3(0, 0, side); // tilt with tumblehome
    m.rotation.x += side * -0.14 * 0;
    return m;
  };
  const doorCut = isV8 ? [0.98, -0.25, -1.5] : [0.98, -0.2, cabRearX];
  for (const side of [-1, 1]) {
    // A pillar
    band(cowlX - 0.03, belt + 0.02, wsTopX - 0.03, roof - 0.06, 0.07, paint, side);
    // B pillar
    band(doorCut[1] + 0.02, belt + 0.02, doorCut[1] - 0.04, roof - 0.06, 0.09, M.piano, side);
    if (isV8) { band(doorCut[2], belt + 0.02, doorCut[2] - 0.05, roof - 0.06, 0.12, M.piano, side); band(xR + 0.3, belt + 0.02, roofRearX + 0.05, roof - 0.06, 0.22, paint, side); }
    else band(cabRearX + 0.07, belt + 0.02, roofRearX - 0.02, roof - 0.07, 0.12, paint, side);
    // belt seal
    const bs = boxAt(cowlX - ghRearBase - 0.06, 0.03, 0.02, (cowlX + ghRearBase) / 2, belt + 0.008, side * (halfW(0, belt) - 0.01), isV8 ? M.chrome : M.black);
    bs.position.z = side * (ghHalf(0, belt + 0.01) + 0.012);
    // DLO chrome surround for the SUV
    if (isV8) band(wsTopX - 0.45, roof - 0.085, xR + 0.45, roof - 0.095, 0.022, M.chrome, side);
  }
  // wipers
  for (const z of [-0.45, 0.15]) { const w = boxAt(0.02, 0.012, 0.62, cowlX + 0.02, belt + 0.03, z, M.black); w.rotation.y = 0.18; }

  // ---------- doors, hood, tailgate (opening panels) ----------
  const panels = {};
  function sidePanel(name, x0, x1, side, hingeFront) {
    const pivot = new THREE.Group();
    const zs = side * (halfW((x0 + x1) / 2, 0.85) + 0.002);
    pivot.position.set(hingeFront ? x1 : x0, 0, zs);
    body.add(pivot);
    const y0 = S.sill + 0.04, y1 = belt - 0.03;
    const sh = new THREE.Shape();
    const a = hingeFront ? -(x1 - x0) : 0, b = hingeFront ? 0 : (x1 - x0);
    const off = hingeFront ? x1 : x0;
    const bottom = (lx) => { const x = lx + off; let y = y0; for (const cx of [fx, -fx]) { const dx = x - cx; if (Math.abs(dx) < S.archR + 0.05) y = Math.max(y, S.archY + Math.sqrt(Math.max(0, (S.archR + 0.05) ** 2 - dx * dx)) + 0.015); } return Math.min(y, y1 - 0.15); };
    sh.moveTo(a + 0.01, bottom(a + 0.01));
    for (let k = 1; k <= 24; k++) { const lx = a + 0.01 + (b - a - 0.02) * k / 24; sh.lineTo(lx, bottom(lx)); }
    sh.lineTo(b - 0.005, y1); sh.lineTo(a + 0.005, y1); sh.lineTo(a + 0.01, bottom(a + 0.01));
    const g = new THREE.ExtrudeGeometry(sh, { depth: 0.022, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.01, bevelOffset: -0.01, bevelSegments: 2 });
    g.translate(0, 0, side > 0 ? -0.012 : -0.01);
    const outer = add(g, paint, pivot);
    // inner trim face
    const inner = add(new THREE.BoxGeometry(x1 - x0 - 0.06, y1 - y0 - 0.06, 0.04), M.interior, pivot);
    inner.position.set((a + b) / 2, (y0 + y1) / 2, -side * 0.03);
    // handle
    const hx = hingeFront ? a + 0.22 : b - 0.22;
    const h = add(new THREE.BoxGeometry(0.2, 0.035, 0.03), isV8 ? M.chrome : M.black, pivot); h.position.set(hx, y1 - 0.13, side * 0.022);
    // aperture behind the door
    const ap = add(new THREE.PlaneGeometry(x1 - x0 - 0.08, y1 - y0 - 0.04), M.aperture);
    ap.position.set((x0 + x1) / 2, (y0 + y1) / 2, zs - side * 0.006); ap.rotation.y = side > 0 ? 0 : Math.PI;
    pivot.userData = { axis: 'y', open: 0, target: 0, max: side * (hingeFront ? -1.1 : 1.1) * -1 };
    outer.userData.panel = name; clickable.push(outer);
    panels[name] = pivot;
    return pivot;
  }
  sidePanel('frontLeft', doorCut[1] + 0.01, doorCut[0], -1, true);
  sidePanel('frontRight', doorCut[1] + 0.01, doorCut[0], 1, true);
  sidePanel('rearLeft', doorCut[2] + 0.02, doorCut[1] - 0.01, -1, true);
  sidePanel('rearRight', doorCut[2] + 0.02, doorCut[1] - 0.01, 1, true);
  for (const k of ['frontLeft', 'frontRight', 'rearLeft', 'rearRight']) {
    const p = panels[k]; const side = k.endsWith('Left') ? -1 : 1; p.userData.max = side * 1.15; // swing outwards
    p.userData.sign = 1;
  }

  // hood
  {
    const pivot = new THREE.Group(); pivot.position.set(cowlX - 0.02, belt + 0.004, 0); body.add(pivot);
    const L = xF - 0.12 - cowlX;
    const slope = Math.atan2(hoodFront - belt, L);
    const sh = new THREE.Shape(); const hz = halfW(cowlX + L / 2, belt) - 0.06;
    sh.moveTo(0, -hz); sh.lineTo(L, -hz + 0.07); sh.quadraticCurveTo(L + 0.04, 0, L, hz - 0.07); sh.lineTo(0, hz); sh.lineTo(0, -hz);
    const g = new THREE.ExtrudeGeometry(sh, { depth: 0.02, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.02, bevelOffset: -0.02, bevelSegments: 3 });
    g.rotateX(Math.PI / 2); g.translate(0, 0.02, 0);
    // power dome / bulge
    const hood = add(g, paint, pivot); hood.rotation.z = slope;
    const dome = rbox(L * 0.6, 0.02, isV8 ? 0.9 : 0.75, 0.02, paint, pivot); dome.position.set(L * 0.45, 0.025 + Math.sin(slope) * L * 0.45, 0); dome.rotation.z = slope;
    pivot.userData = { axis: 'z', open: 0, target: 0, max: 0.9 };
    hood.userData.panel = 'hood'; clickable.push(hood, dome);
    panels.hood = pivot;
    // engine bay
    const bay = boxAt(L - 0.2, 0.2, W - 0.5, cowlX + L / 2, Math.min(belt, hoodFront) - 0.16, 0, M.under);
    const eng = rbox(0.6, 0.18, 0.7, 0.04, M.satin); eng.position.set(cowlX + L * 0.55, belt - 0.16, 0);
    const cover = rbox(0.48, 0.05, 0.56, 0.03, M.piano); cover.position.set(cowlX + L * 0.55, belt - 0.07, 0);
  }
  // tailgate / liftgate
  if (!isV8) {
    const pivot = new THREE.Group(); pivot.position.set(xR + 0.02, 0.96, 0); body.add(pivot);
    const tg = rbox(0.06, belt - 0.96, W - 0.08, 0.02, paint, pivot); tg.position.set(0, (belt - 0.96) / 2, 0);
    const handle = boxAt(0.03, 0.04, 0.24, -0.03, belt - 0.96 - 0.08, 0, M.black, pivot);
    const word = wordPlate('VOLTA', 0.6, 0.09); word.position.set(-0.032, 0.11, 0); word.rotation.y = -Math.PI / 2; pivot.add(word);
    pivot.userData = { axis: 'z', open: 0, target: 0, max: Math.PI / 2 };
    tg.userData.panel = 'tailgate'; clickable.push(tg);
    panels.tailgate = pivot;
  } else {
    const pivot = new THREE.Group(); pivot.position.set(roofRearX - 0.05, roof - 0.07, 0); body.add(pivot);
    const h = roof - 0.07 - 0.58;
    const lg = rbox(0.07, h, W - 0.16, 0.04, paint, pivot); lg.position.set(-0.13, -h / 2, 0); lg.rotation.z = -0.06;
    const rg = rbox(0.02, h * 0.36, W - 0.46, 0.04, M.glass, pivot); rg.position.set(-0.17, -h * 0.25, 0); rg.rotation.z = -0.06;
    const word = wordPlate('REGENT', 0.7, 0.09); word.position.set(-0.175, -h * 0.62, 0); word.rotation.y = -Math.PI / 2; pivot.add(word);
    const em = add(new THREE.CircleGeometry(0.065, 32), M.emblem, pivot); em.position.set(-0.176, -h * 0.52, 0); em.rotation.y = -Math.PI / 2;
    pivot.userData = { axis: 'z', open: 0, target: 0, max: -1.2 };
    lg.userData.panel = 'tailgate'; clickable.push(lg);
    panels.tailgate = pivot;
  }

  function wordPlate(text, w, h) {
    const t = srgb(new THREE.CanvasTexture(canvas(512, 80, (g, cw, ch) => {
      g.clearRect(0, 0, cw, ch); g.fillStyle = '#ffffff';
      g.font = '700 58px Inter, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
      if ('letterSpacing' in g) g.letterSpacing = '22px';
      g.fillText(text, cw / 2, ch / 2 + 2);
    })));
    return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: t, transparent: true, metalness: 1, roughness: 0.15, color: col('#e8e8e8') }));
  }

  // ---------- front end ----------
  const front = new THREE.Group(); front.position.set(xF + 0.012, 0, 0); body.add(front);
  const faceY0 = isV8 ? 0.62 : 0.58, faceY1 = hoodFront - 0.05;
  if (isV8) {
    // tall chrome-framed grille with a diamond mesh
    const gt = new THREE.CanvasTexture(canvas(512, 256, (g, w, h) => {
      g.fillStyle = '#050505'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#ffffff'; g.lineWidth = 5;
      for (let x = -h; x < w + h; x += 26) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x + h, h); g.stroke(); g.beginPath(); g.moveTo(x, h); g.lineTo(x + h, 0); g.stroke(); }
    }));
    const gm = new THREE.MeshStandardMaterial({ color: col('#9c9fa2'), metalnessMap: gt, metalness: 1, roughness: 0.18, map: srgb(gt) });
    const gw = 1.25, gh2 = faceY1 - faceY0 - 0.05;
    const grille = add(new THREE.PlaneGeometry(gw, gh2), gm, front); grille.rotation.y = Math.PI / 2; grille.position.set(0.004, (faceY0 + faceY1) / 2, 0);
    for (const [w, h, y, z] of [[gw + 0.06, 0.035, faceY1 - 0.02, 0], [gw + 0.06, 0.035, faceY0 + 0.02, 0]]) boxAt(0.03, h, w, 0.01, y, z, M.chrome, front);
    for (const z of [-gw / 2 - 0.015, gw / 2 + 0.015]) boxAt(0.03, gh2 + 0.06, 0.035, 0.01, (faceY0 + faceY1) / 2, z, M.chrome, front);
    const em = add(new THREE.CircleGeometry(0.075, 40), M.emblem, front); em.rotation.y = Math.PI / 2; em.position.set(0.03, (faceY0 + faceY1) / 2 + 0.03, 0);
    // vertical light blades
    for (const side of [-1, 1]) {
      const blade = boxAt(0.03, 0.42, 0.045, -0.005, faceY1 - 0.2, side * (hw - 0.14), M.drl, front);
      const lamp = rbox(0.05, 0.1, 0.32, 0.03, M.piano, front); lamp.position.set(-0.01, faceY1 - 0.06, side * (hw - 0.3));
      for (let i = 0; i < 3; i++) { const p = add(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 20), M.head, front); p.rotation.z = Math.PI / 2; p.position.set(0.02, faceY1 - 0.06, side * (hw - 0.4 + i * 0.09)); }
      boxAt(0.03, 0.18, 0.03, -0.004, faceY1 - 0.4, side * (hw - 0.14), M.amber, front).userData.ind = side;
    }
    // bumper
    const bump = rbox(0.12, 0.26, W - 0.12, 0.06, paint, front); bump.position.set(-0.04, 0.5, 0);
    boxAt(0.02, 0.025, W - 0.5, 0.025, 0.47, 0, M.chrome, front);
    const intake = rbox(0.04, 0.1, 1.2, 0.03, M.black, front); intake.position.set(0.0, 0.43, 0);
  } else {
    // rugged pickup face: bar grille, slim LED headlamps, silver skid plate
    const frame = rbox(0.06, faceY1 - faceY0, 1.12, 0.05, M.piano, front); frame.position.set(0, (faceY0 + faceY1) / 2, 0);
    for (let i = 0; i < 4; i++) boxAt(0.025, 0.035, 1.0, 0.025, faceY0 + 0.08 + i * 0.1, 0, i === 1 ? M.chrome : M.black, front);
    const em = add(new THREE.CircleGeometry(0.07, 40), M.emblem, front); em.rotation.y = Math.PI / 2; em.position.set(0.045, faceY0 + 0.21, 0);
    for (const side of [-1, 1]) {
      const unit = rbox(0.05, 0.13, 0.4, 0.04, M.piano, front); unit.position.set(-0.02, faceY1 - 0.07, side * (hw - 0.29));
      unit.rotation.y = side * 0.18;
      const strip = boxAt(0.02, 0.022, 0.38, 0.012, faceY1 - 0.015, side * (hw - 0.3), M.drl, front); strip.rotation.y = side * 0.18;
      for (let i = 0; i < 2; i++) { const p = add(new THREE.CylinderGeometry(0.034, 0.034, 0.02, 20), M.head, front); p.rotation.z = Math.PI / 2; p.position.set(0.012, faceY1 - 0.08, side * (hw - 0.36 + i * 0.12)); }
      boxAt(0.02, 0.03, 0.12, 0.0, faceY1 - 0.15, side * (hw - 0.2), M.amber, front).userData.ind = side;
      // fog lamp
      const fog = add(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 20), M.head, front); fog.rotation.z = Math.PI / 2; fog.position.set(-0.03, 0.47, side * (hw - 0.3));
    }
    const bump = rbox(0.14, 0.24, W - 0.08, 0.05, M.trim, front); bump.position.set(-0.04, 0.48, 0);
    const skid = rbox(0.08, 0.1, 0.9, 0.04, M.satin, front); skid.position.set(-0.02, 0.36, 0); skid.rotation.z = -0.4;
    for (const z of [-0.4, 0.4]) { const hk = add(new THREE.TorusGeometry(0.035, 0.012, 8, 16), M.caliper, front); hk.position.set(0.04, 0.42, z); hk.rotation.y = Math.PI / 2; }
  }
  // number plates
  // Ghana-style plate: white reflective face, flag strip with GH, black embossed characters
  const plateTex = srgb(new THREE.CanvasTexture(canvas(1040, 224, (g, w, h) => {
    const r = 18;
    g.fillStyle = '#fbfbf7'; g.beginPath(); g.moveTo(r, 0); g.arcTo(w, 0, w, h, r); g.arcTo(w, h, 0, h, r); g.arcTo(0, h, 0, 0, r); g.arcTo(0, 0, w, 0, r); g.fill();
    const sheen = g.createLinearGradient(0, 0, 0, h); sheen.addColorStop(0, 'rgba(255,255,255,.6)'); sheen.addColorStop(1, 'rgba(0,0,0,.06)'); g.fillStyle = sheen; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#111'; g.lineWidth = 10; g.strokeRect(14, 14, w - 28, h - 28);
    g.fillStyle = '#ce1126'; g.fillRect(30, 30, 92, 54); g.fillStyle = '#fcd116'; g.fillRect(30, 84, 92, 54); g.fillStyle = '#006b3f'; g.fillRect(30, 138, 92, 54);
    g.fillStyle = '#000'; g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? 7 : 17; g.lineTo(76 + Math.cos(a) * rr, 111 + Math.sin(a) * rr); } g.fill();
    g.fillStyle = '#111'; g.font = '800 30px Inter, Arial, sans-serif'; g.textAlign = 'center'; g.fillText('GH', 76, 214 - 6);
    g.font = '800 138px Inter, Arial, sans-serif'; g.textBaseline = 'middle'; if ('letterSpacing' in g) g.letterSpacing = '4px';
    g.fillStyle = 'rgba(0,0,0,.18)'; g.fillText('BU 0858-26', w / 2 + 72, h / 2 + 10);
    g.fillStyle = '#111'; g.fillText('BU 0858-26', w / 2 + 70, h / 2 + 7);
  })));
  const plateM = new THREE.MeshStandardMaterial({ map: plateTex, roughness: 0.4 });
  const pf = add(new THREE.PlaneGeometry(0.52, 0.112), plateM, front, false); pf.rotation.y = Math.PI / 2; pf.position.set(0.075, isV8 ? 0.5 : 0.5, 0);

  // ---------- rear end ----------
  const rear = new THREE.Group(); rear.position.set(xR - 0.012, 0, 0); body.add(rear);
  const tails = [], brakes = [];
  if (isV8) {
    for (const side of [-1, 1]) {
      const t = boxAt(0.04, 0.62, 0.08, 0, belt + 0.05, side * (hw - 0.07), M.tail, rear); tails.push(t);
      const t2 = boxAt(0.04, 0.05, 0.28, 0, belt + 0.33, side * (hw - 0.2), M.tail, rear); tails.push(t2);
      boxAt(0.042, 0.12, 0.05, 0.003, belt - 0.12, side * (hw - 0.08), M.amber, rear).userData.ind = side;
      boxAt(0.042, 0.08, 0.05, 0.003, belt - 0.22, side * (hw - 0.08), M.reverse, rear);
      const ex = add(new THREE.CylinderGeometry(0.045, 0.045, 0.14, 18, 1, true), M.chrome, rear); ex.rotation.z = Math.PI / 2; ex.position.set(0, 0.4, side * 0.55);
    }
    const bump = rbox(0.14, 0.24, W - 0.1, 0.06, paint, rear); bump.position.set(0.04, 0.52, 0);
    boxAt(0.02, 0.025, W - 0.6, -0.03, 0.6, 0, M.chrome, rear);
  } else {
    for (const side of [-1, 1]) {
      const t = rbox(0.05, 0.42, 0.11, 0.03, M.tail, rear); t.position.set(0, belt - 0.2, side * (hw - 0.06)); tails.push(t);
      boxAt(0.052, 0.08, 0.08, 0.004, belt - 0.34, side * (hw - 0.06), M.amber, rear).userData.ind = side;
      boxAt(0.052, 0.06, 0.08, 0.004, belt - 0.07, side * (hw - 0.06), M.reverse, rear);
    }
    const bump = rbox(0.16, 0.18, W - 0.1, 0.04, M.satin, rear); bump.position.set(0.03, 0.52, 0);
    const step = boxAt(0.1, 0.03, 0.4, 0.02, 0.62, 0, M.black, rear);
    const ex = add(new THREE.CylinderGeometry(0.035, 0.035, 0.2, 14, 1, true), M.satin, rear); ex.rotation.z = Math.PI / 2; ex.position.set(0.05, 0.36, 0.55);
    // third brake light on cab
    const hb = boxAt(0.03, 0.03, 0.42, cabRearX + 0.05 - (xR - 0.012), roof - 0.02, 0, M.tail, rear); brakes.push(hb);
  }
  const pr = add(new THREE.PlaneGeometry(0.52, 0.112), plateM, rear, false); pr.rotation.y = -Math.PI / 2; pr.position.set(isV8 ? -0.04 : -0.06, isV8 ? 0.72 : 0.7, 0);

  // ---------- mirrors, steps, rails, antenna ----------
  for (const side of [-1, 1]) {
    const m = new THREE.Group(); m.position.set(cowlX - 0.2, belt + 0.1, side * (halfW(cowlX, belt) + 0.04)); body.add(m);
    const arm = boxAt(0.06, 0.04, 0.08, 0, -0.03, 0, M.black, m);
    const housing = rbox(0.12, 0.2, 0.26, 0.05, isV8 ? M.chrome : paint, m); housing.position.set(-0.01, 0.04, side * 0.15);
    const glassM = add(new THREE.PlaneGeometry(0.22, 0.16), M.chrome, m); glassM.rotation.y = -Math.PI / 2; glassM.position.set(-0.075, 0.04, side * 0.15);
    boxAt(0.04, 0.015, 0.12, 0.03, -0.045, side * 0.2, M.amber, m).userData.ind = side;
    m.userData.side = side; panels['mirror' + (side < 0 ? 'Left' : 'Right')] = m;
    // running board / tube step
    const st = isV8 ? rbox(doorCut[0] - doorCut[2] + 0.05, 0.04, 0.17, 0.02, M.piano) : add(new THREE.CylinderGeometry(0.03, 0.03, doorCut[0] - doorCut[2], 14), M.black);
    if (!isV8) st.rotation.z = Math.PI / 2;
    st.position.set((doorCut[0] + doorCut[2]) / 2, S.sill - 0.08, side * (hw - 0.07));
    if (isV8) { const rail = add(new THREE.CylinderGeometry(0.018, 0.018, 2.3, 10), M.chrome); rail.rotation.z = Math.PI / 2; rail.position.set(-1.0, roof + 0.05, side * (hw - 0.22));
      for (const x of [-2.1, 0.1]) boxAt(0.06, 0.05, 0.04, x, roof + 0.025, side * (hw - 0.22), M.black); }
  }
  const fin = rbox(0.18, 0.06, 0.06, 0.025, M.piano); fin.position.set(roofRearX + 0.25, roof + 0.03, 0);
  // underbody, axles, exhaust
  boxAt(xF - xR - 0.6, 0.12, W - 0.5, (xF + xR) / 2, S.sill - 0.02, 0, M.under);
  if (!isV8) { const ax = add(new THREE.CylinderGeometry(0.05, 0.05, S.track - 0.2, 12), M.under); ax.rotation.x = Math.PI / 2; ax.position.set(-fx, S.tyreR, 0);
    const diff = add(new THREE.SphereGeometry(0.14, 16, 12), M.under); diff.position.set(-fx, S.tyreR, 0); }

  // ---------- interior ----------
  const interior = new THREE.Group(); body.add(interior);
  const dashX = cowlX - 0.28;
  const dash = rbox(0.42, 0.22, W - 0.26, 0.08, M.interior, interior); dash.position.set(dashX, belt + 0.02, 0);
  const dashTop = rbox(0.3, 0.05, W - 0.3, 0.02, M.trim, interior); dashTop.position.set(dashX + 0.05, belt + 0.14, 0);
  // displays
  const clusterCanvas = document.createElement('canvas'); clusterCanvas.width = 512; clusterCanvas.height = 192;
  const clusterTex = srgb(new THREE.CanvasTexture(clusterCanvas));
  const screenM = new THREE.MeshStandardMaterial({ map: clusterTex, emissive: col('#ffffff'), emissiveMap: clusterTex, emissiveIntensity: 0.9, roughness: 0.3 });
  const cluster = add(new THREE.PlaneGeometry(0.34, 0.13), screenM, interior, false);
  cluster.position.set(dashX - 0.17, belt + 0.12, -0.38); cluster.rotation.y = -Math.PI / 2; cluster.rotation.x = -0.15;
  const info = add(new THREE.PlaneGeometry(0.3, 0.17), screenM.clone(), interior, false);
  info.position.set(dashX - 0.2, belt + 0.12, 0.05); info.rotation.y = -Math.PI / 2;
  info.material.map = info.material.emissiveMap = srgb(new THREE.CanvasTexture(canvas(512, 290, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, w, h); gr.addColorStop(0, '#0f1412'); gr.addColorStop(1, '#1b2420'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#93AE7C'; g.lineWidth = 6; g.beginPath(); g.moveTo(30, 230); g.bezierCurveTo(160, 210, 200, 90, 330, 110); g.lineTo(480, 60); g.stroke();
    g.fillStyle = '#BBA783'; g.beginPath(); g.arc(330, 110, 10, 0, 7); g.fill();
    g.fillStyle = '#F2F0EA'; g.font = '600 28px Inter, Arial'; g.fillText('Jubilee House → Temple', 30, 50);
    g.fillStyle = '#B3ACA1'; g.font = '400 22px Inter, Arial'; g.fillText('Liberation Road · 4.2 km', 30, 84);
  })));
  // steering wheel
  const wheelPivot = new THREE.Group(); wheelPivot.position.set(dashX - 0.3, belt + 0.06, -0.38); wheelPivot.rotation.z = -0.42; interior.add(wheelPivot);
  const steer = new THREE.Group(); wheelPivot.add(steer);
  const rim = add(new THREE.TorusGeometry(0.185, 0.018, 12, 40), M.leather, steer); rim.rotation.y = Math.PI / 2;
  const hub = rbox(0.05, 0.1, 0.12, 0.03, M.interior, steer);
  for (const a of [0, 2.1, -2.1]) { const sp = boxAt(0.02, 0.17, 0.035, 0, 0, 0, M.satin, steer); sp.position.set(0, Math.cos(a) * -0.09, Math.sin(a) * 0.09); sp.rotation.x = a; }
  const hb2 = add(new THREE.CircleGeometry(0.032, 24), M.emblem, steer); hb2.position.x = -0.03; hb2.rotation.y = -Math.PI / 2;
  const column = add(new THREE.CylinderGeometry(0.03, 0.04, 0.3, 10), M.trim, wheelPivot); column.rotation.z = Math.PI / 2; column.position.x = 0.15;
  // seats
  const seat = (x, z, wide) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); interior.add(g);
    const base = rbox(0.5, 0.12, wide, 0.05, M.leather, g); base.position.set(0, S.sill + 0.25, 0);
    const back = rbox(0.12, 0.6, wide, 0.05, M.leather, g); back.position.set(-0.25, S.sill + 0.55, 0); back.rotation.z = 0.2;
    if (wide < 0.7) { const hr = rbox(0.08, 0.16, 0.26, 0.04, M.leather, g); hr.position.set(-0.32, S.sill + 0.92, 0); hr.rotation.z = 0.2; }
    return g;
  };
  const seatX = doorCut[1] + 0.48;
  seat(seatX, -0.38, 0.52); seat(seatX, 0.38, 0.52);
  if (isV8) { seat(-0.55, -0.4, 0.54); seat(-0.55, 0.4, 0.54); seat(-1.75, 0, 1.5); }
  else seat(doorCut[1] - 0.45, 0, 1.45);
  const console_ = rbox(0.9, 0.18, 0.22, 0.05, M.interior, interior); console_.position.set(seatX + 0.1, S.sill + 0.3, 0);
  const shifter = rbox(0.07, 0.08, 0.05, 0.02, M.chrome, interior); shifter.position.set(seatX + 0.35, S.sill + 0.42, 0);
  const floor = boxAt(cowlX - cabRearX - 0.2, 0.02, W - 0.25, (cowlX + cabRearX) / 2, S.sill + 0.05, 0, M.trim, interior);
  const headliner = boxAt(cowlX - ghRearBase - 0.7, 0.02, ghW - 0.35, (wsTopX + roofRearX) / 2, roof - 0.12, 0, M.leather, interior);
  headliner.material = new THREE.MeshStandardMaterial({ color: col(isV8 ? '#cdbfae' : '#3c3d3e'), roughness: 0.9 });
  const cabinLight = new THREE.PointLight(0xffe9cc, 0, 2.6, 1.5); cabinLight.position.set(seatX - 0.2, roof - 0.25, 0); interior.add(cabinLight);
  const ambient = boxAt(0.01, 0.006, W - 0.45, dashX - 0.2, belt - 0.02, 0, new THREE.MeshStandardMaterial({ color: col('#BBA783'), emissive: col('#BBA783'), emissiveIntensity: 0 }), interior);

  // ---------- wheels ----------
  const wheels = [];
  const tyreGeo = (() => {
    const r = S.tyreR, w = S.tyreW, rr = r * (isV8 ? 0.72 : 0.62), pts = [];
    const n = 18;
    pts.push(new THREE.Vector2(rr, -w / 2 + 0.02));
    for (let i = 0; i <= n; i++) { // sidewall bulge to tread shoulder
      const t = i / n, rad = rr + (r - 0.02 - rr) * t, bul = Math.sin(t * Math.PI) * 0.018 + 0.01 * t;
      pts.push(new THREE.Vector2(rad, -w / 2 - bul));
    }
    pts.push(new THREE.Vector2(r - 0.005, -w / 2 + 0.01), new THREE.Vector2(r, -w / 2 + 0.03), new THREE.Vector2(r, w / 2 - 0.03), new THREE.Vector2(r - 0.005, w / 2 - 0.01));
    for (let i = n; i >= 0; i--) { const t = i / n, rad = rr + (r - 0.02 - rr) * t, bul = Math.sin(t * Math.PI) * 0.018 + 0.01 * t; pts.push(new THREE.Vector2(rad, w / 2 + bul)); }
    pts.push(new THREE.Vector2(rr, w / 2 - 0.02));
    const g = new THREE.LatheGeometry(pts, 64);
    // remap uv: u around, v = 0..1 across profile; tread in the middle rows
    const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setX(i, uv.getX(i) * 1);
    g.rotateX(Math.PI / 2); // axle along z
    return g;
  })();
  const rimR = S.tyreR * (isV8 ? 0.72 : 0.62);
  function makeWheel(side) {
    const g = new THREE.Group();
    const tyre = add(tyreGeo, M.tyre, g);
    // barrel
    const barrel = add(new THREE.CylinderGeometry(rimR, rimR, S.tyreW - 0.03, 40, 1, true), M.rim, g); barrel.rotation.x = Math.PI / 2;
    const lip = add(new THREE.TorusGeometry(rimR - 0.004, 0.008, 8, 48), M.rim, g); lip.position.z = side * (S.tyreW / 2 - 0.02);
    const dish = add(new THREE.CylinderGeometry(rimR - 0.01, rimR * 0.5, 0.05, 40, 1, true), M.under, g); dish.rotation.x = Math.PI / 2; dish.position.z = side * (S.tyreW / 2 - 0.06);
    // spokes
    const n = isV8 ? 10 : 6;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const sp = new THREE.Mesh(new THREE.BoxGeometry(isV8 ? 0.028 : 0.06, rimR - 0.06, 0.035), M.rim);
      sp.geometry.translate(0, (rimR - 0.06) / 2 + 0.05, 0);
      sp.rotation.z = a; sp.position.z = side * (S.tyreW / 2 - 0.035); sp.castShadow = true; g.add(sp);
      if (isV8 && i % 2 === 0) { const sp2 = sp.clone(); sp2.rotation.z = a + 0.18; g.add(sp2); }
    }
    const cap = add(new THREE.CylinderGeometry(0.065, 0.07, 0.03, 32), M.rim, g); cap.rotation.x = Math.PI / 2; cap.position.z = side * (S.tyreW / 2 - 0.025);
    const em = add(new THREE.CircleGeometry(0.05, 32), M.emblem, g); em.position.z = side * (S.tyreW / 2 - 0.008); if (side < 0) em.rotation.y = Math.PI;
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; const nut = add(new THREE.CylinderGeometry(0.011, 0.011, 0.02, 6), M.chrome, g); nut.rotation.x = Math.PI / 2; nut.position.set(Math.cos(a) * 0.085, Math.sin(a) * 0.085, side * (S.tyreW / 2 - 0.035)); }
    return g;
  }
  for (const [x, side, isFront] of [[fx, -1, true], [fx, 1, true], [-fx, -1, false], [-fx, 1, false]]) {
    const pivot = new THREE.Group(); pivot.position.set(x, S.tyreR, side * S.track / 2); car.add(pivot);
    const spin = makeWheel(side); pivot.add(spin);
    const disc = add(new THREE.CylinderGeometry(rimR - 0.04, rimR - 0.04, 0.03, 32), M.disc, pivot); disc.rotation.x = Math.PI / 2; disc.position.z = side * 0.01;
    const cal = rbox(0.12, 0.08, 0.06, 0.02, M.caliper, pivot); cal.position.set(isFront ? -0.02 : 0.02, rimR - 0.07, side * 0.02); cal.rotation.z = isFront ? 0.6 : -0.6;
    wheels.push({ pivot, spin, front: isFront, side, baseY: S.tyreR, x, z: side * S.track / 2 });
  }

  // ---------- head / tail lights (real light sources) ----------
  const headLights = [];
  if (opts.lights !== false) {
    for (const side of [-1, 1]) {
      const sl = new THREE.SpotLight(0xfff6ea, 0, 70, 0.48, 0.5, 1.6);
      sl.position.set(xF - 0.05, faceY1 - 0.06, side * (hw - 0.3));
      sl.target.position.set(xF + 12, 0, side * 1.2);
      body.add(sl, sl.target); headLights.push(sl);
    }
  }
  const rearGlow = opts.lights !== false ? new THREE.PointLight(0xff2010, 0, 4, 2) : null;
  if (rearGlow) { rearGlow.position.set(xR - 0.4, 0.8, 0); body.add(rearGlow); }

  // collect indicator materials per side (cloned so each side blinks alone)
  const indMats = { '-1': M.amber.clone(), '1': M.amber.clone() };
  body.traverse((o) => { if (o.isMesh && o.userData.ind) o.material = indMats[o.userData.ind]; });
  const brakeMat = M.tail.clone();
  for (const t of brakes) t.material = brakeMat;

  // ---------- public API ----------
  const state = { head: false, brake: false, reverse: false, left: false, right: false, hazard: false, interiorGlow: 0 };
  function setPaint(hex, metal) {
    paint.color.copy(col(hex));
    paint.metalness = metal ?? paint.metalness;
    paint.roughness = metal > 0.5 ? 0.28 : 0.35;
  }
  function togglePanel(name, force) {
    const p = panels[name]; if (!p) return false;
    if (name.startsWith('mirror')) { p.userData.target = (force ?? !p.userData.target) ? 1 : 0; return !!p.userData.target; }
    p.userData.target = (force ?? p.userData.target === 0) ? 1 : 0;
    return p.userData.target === 1;
  }
  for (const k of ['mirrorLeft', 'mirrorRight']) panels[k].userData = { side: panels[k].userData.side, open: 0, target: 0 };

  let blinkT = 0;
  function update(dt, s = {}) {
    // panels ease toward targets
    for (const [name, p] of Object.entries(panels)) {
      const u = p.userData; if (u.open === undefined) continue;
      const speed = name === 'hood' || name === 'tailgate' ? 2.2 : 3.2;
      u.open += (u.target - u.open) * Math.min(1, dt * speed);
      if (name.startsWith('mirror')) p.rotation.y = u.side * 1.1 * u.open;
      else if (u.axis === 'y') { const k = name.endsWith('Left') ? 1 : -1; p.rotation.y = k * 1.1 * easeOut(u.open); }
      else p.rotation.z = u.max * easeOut(u.open);
    }
    // lights
    const nightish = s.night ? 1 : 0;
    M.head.emissiveIntensity = state.head ? 3 : 0.4;
    M.drl.emissiveIntensity = s.engine === false ? 0.15 : 3.2;
    for (const l of headLights) l.intensity = state.head ? (s.lightScale ?? 1) * 60 * LS : 0;
    const brake = state.brake;
    M.tail.emissiveIntensity = brake ? 5 : (state.head || s.engine) ? 1.2 : 0.15;
    brakeMat.emissiveIntensity = brake ? 6 : 0.05;
    if (rearGlow) rearGlow.intensity = brake ? 2.5 * LS * 10 : 0;
    M.reverse.emissiveIntensity = state.reverse ? 4 : 0;
    blinkT += dt;
    const on = (blinkT % 0.74) < 0.4;
    const L = (state.left || state.hazard) && on, R = (state.right || state.hazard) && on;
    indMats['-1'].emissiveIntensity = L ? 6 : 0;
    indMats['1'].emissiveIntensity = R ? 6 : 0;
    ambient.material.emissiveIntensity = s.engine ? 1.5 : 0;
    cabinLight.intensity = state.interiorGlow ? 6 * LS : 0;
    return (state.left || state.right || state.hazard) ? on : null;
  }
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  let clusterLast = 0;
  function drawCluster(speedKmh, rpm, gear) {
    const now = performance.now(); if (now - clusterLast < 100) return; clusterLast = now;
    const g = clusterCanvas.getContext('2d'), w = 512, h = 192;
    g.fillStyle = '#07090a'; g.fillRect(0, 0, w, h);
    const arcGauge = (cx, frac, label, val) => {
      g.strokeStyle = '#222'; g.lineWidth = 12; g.beginPath(); g.arc(cx, 110, 70, Math.PI * 0.8, Math.PI * 2.2); g.stroke();
      g.strokeStyle = '#BBA783'; g.beginPath(); g.arc(cx, 110, 70, Math.PI * 0.8, Math.PI * (0.8 + 1.4 * Math.max(0, Math.min(1, frac)))); g.stroke();
      g.fillStyle = '#F2F0EA'; g.font = '700 40px Inter, Arial'; g.textAlign = 'center'; g.fillText(val, cx, 122);
      g.fillStyle = '#9A948B'; g.font = '500 16px Inter, Arial'; g.fillText(label, cx, 150);
    };
    arcGauge(120, speedKmh / (isV8 ? 220 : 180), 'km/h', Math.round(speedKmh));
    arcGauge(392, rpm / S.redline, 'rpm ×1000', (rpm / 1000).toFixed(1));
    g.fillStyle = '#93AE7C'; g.font = '700 46px Inter, Arial'; g.textAlign = 'center'; g.fillText(gear, 256, 112);
    clusterTex.needsUpdate = true;
  }

  return {
    spec: S, root, car, body, wheels, steer, interior, panels, clickable, state, materials: M,
    setPaint, togglePanel, update, drawCluster,
    driverEye: new THREE.Vector3(seatX - 0.34, belt + 0.33, -0.38), // inner frame
    dims: { length: xF - xR, width: W, height: roof, front: xF, rear: xR },
  };
}
