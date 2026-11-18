import './three-r128.min.js';

export async function startAccra(shell) {
const THREE = window.THREE;
/* =====================================================================
   01 · CORE — renderer, camera, controls, helpers, procedural textures,
   material library, sky / sun / environment lighting, following shadows.
   Units: 1 unit = 1 metre. +Y up. -Z is north, +Z is south, +X is east.
   ===================================================================== */

const IS_MOBILE = matchMedia('(any-pointer: coarse)').matches || Math.min(innerWidth, innerHeight) < 620;
const BUILD = []; // [label, fn] — staged scene construction (see main)
const DRIVE_COLLIDERS = []; // {x,z,hx,hz,rot} boxes and {x,z,r} circles for the drive mode
const DRIVE_GATES = [];     // gate leaves that swing open when a car arrives
const UPDATERS = []; // per-frame callbacks (dt, time)

/* ---------- Renderer / scene / camera ---------- */
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, IS_MOBILE ? 1 : 1.5));
shell.watchCanvas(renderer.domElement);
renderer.setSize(innerWidth, innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.8;
renderer.shadowMap.enabled = true;
renderer.shadowMap.autoUpdate = false;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.domElement.tabIndex = 0;
renderer.domElement.setAttribute('aria-label', '3D view of Liberation Road. Use Explore to choose a viewpoint.');
document.getElementById('stage').appendChild(renderer.domElement);
const MAX_ANISO = renderer.capabilities.getMaxAnisotropy();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 1.2, 7000);
camera.position.set(-520, 330, -60);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI * 0.488;
controls.minDistance = 6;
controls.maxDistance = 2200;
controls.zoomSpeed = 1.1;
controls.target.set(40, 0, 0);

/* ---------- Small utilities ---------- */
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(20040111); // seeded: the scene is identical on every load
const rr = (a, b) => a + (b - a) * rand();
const pick = (arr) => arr[Math.floor(rand() * arr.length)];
const lerp = THREE.MathUtils.lerp;
const clamp = THREE.MathUtils.clamp;
const DEG = Math.PI / 180;

/** sRGB hex → linear THREE.Color (renderer outputs sRGB). */
function col(hex) { return new THREE.Color(hex).convertSRGBToLinear(); }

/* Smooth value noise + fBm for procedural textures. */
const NOISE = (function () {
  const N = 256, perm = new Uint8Array(N * 2), grad = new Float32Array(N);
  const r = mulberry32(77);
  for (let i = 0; i < N; i++) { perm[i] = i; grad[i] = r(); }
  for (let i = N - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); const t = perm[i]; perm[i] = perm[j]; perm[j] = t; }
  for (let i = 0; i < N; i++) perm[N + i] = perm[i];
  const h = (x, y) => grad[perm[(perm[x & 255] + y) & 255]];
  const s = (t) => t * t * (3 - 2 * t);
  function v2(x, y, period) {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const p = period || 256;
    const x0 = ((xi % p) + p) % p, y0 = ((yi % p) + p) % p, x1 = (x0 + 1) % p, y1 = (y0 + 1) % p;
    const a = h(x0, y0), b = h(x1, y0), c = h(x0, y1), d = h(x1, y1);
    const u = s(xf), v = s(yf);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  }
  // tileable fBm: x,y in [0,1)
  function fbm(x, y, freq, oct, period) {
    let sum = 0, amp = 0.5, f = freq, norm = 0;
    for (let o = 0; o < oct; o++) {
      sum += amp * v2(x * f, y * f, Math.round(f));
      norm += amp; amp *= 0.5; f *= 2;
    }
    return sum / norm;
  }
  return { v2, fbm };
})();

/* ---------- Canvas texture factory ---------- */
function makeCanvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function texFromCanvas(c, { srgb = true, repeat = null, aniso = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.encoding = THREE.sRGBEncoding;
  if (aniso) t.anisotropy = Math.min(8, MAX_ANISO);
  if (repeat) t.repeat.set(repeat[0], repeat[1]);
  return t;
}
/** Paint every pixel with fn(u,v) → [r,g,b] (0-255). */
function paintPixels(c, fn) {
  const g = c.getContext('2d'), w = c.width, h = c.height;
  const img = g.getImageData(0, 0, w, h), d = img.data;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const p = fn(x / w, y / h, x, y), i = (y * w + x) * 4;
    d[i] = p[0]; d[i + 1] = p[1]; d[i + 2] = p[2]; d[i + 3] = p[3] === undefined ? 255 : p[3];
  }
  g.putImageData(img, 0, 0);
}
function hexRGB(hex) { return [(hex >> 16) & 255, (hex >> 8) & 255, hex & 255]; }
function mixRGB(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }

/* ---------- Geometry helpers ---------- */
/** Box-projected, world-scaled UVs: texture repeat is in metres (1 uv = `scale` m). */
function worldUV(geo, scale = 1, ox = 0, oy = 0) {
  geo = geo.index ? geo.toNonIndexed() : geo;
  if (!geo.attributes.normal) geo.computeVertexNormals();
  const p = geo.attributes.position, n = geo.attributes.normal;
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const nx = Math.abs(n.getX(i)), ny = Math.abs(n.getY(i)), nz = Math.abs(n.getZ(i));
    let u, v;
    if (ny >= nx && ny >= nz) { u = p.getX(i); v = p.getZ(i); }
    else if (nx >= nz) { u = p.getZ(i) * Math.sign(n.getX(i) || 1); v = p.getY(i); }
    else { u = p.getX(i) * -Math.sign(n.getZ(i) || 1) * -1; v = p.getY(i); }
    uv[i * 2] = (u + ox) / scale; uv[i * 2 + 1] = (v + oy) / scale;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}
/** Merge geometries of mixed index/attribute layouts into one non-indexed geometry. */
function merge(geos) {
  const prepared = geos.filter(Boolean).map((g) => {
    let q = g.index ? g.toNonIndexed() : g;
    if (!q.attributes.normal) q.computeVertexNormals();
    if (!q.attributes.uv) q.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(q.attributes.position.count * 2), 2));
    for (const k of Object.keys(q.attributes)) if (!['position', 'normal', 'uv', 'color'].includes(k)) q.deleteAttribute(k);
    return q;
  });
  const anyColor = prepared.some((g) => g.attributes.color);
  if (anyColor) prepared.forEach((g) => {
    if (!g.attributes.color) {
      const c = new Float32Array(g.attributes.position.count * 3).fill(1);
      g.setAttribute('color', new THREE.BufferAttribute(c, 3));
    }
  });
  prepared.forEach((g) => { g.morphAttributes = {}; g.clearGroups(); });
  return THREE.BufferGeometryUtils.mergeBufferGeometries(prepared, false);
}
/** Box whose base sits at y. */
function box(w, h, d, x = 0, y = 0, z = 0) { const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y + h / 2, z); return g; }
function cyl(rt, rb, h, seg, x = 0, y = 0, z = 0, open = false) { const g = new THREE.CylinderGeometry(rt, rb, h, seg, 1, open); g.translate(x, y + h / 2, z); return g; }
/** Paint a constant vertex colour onto a geometry (used by merged multi-tone meshes). */
function tint(geo, hex) {
  geo = geo.index ? geo.toNonIndexed() : geo;
  const c = col(hex), n = geo.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
  return geo;
}
function addMesh(geo, mat, { cast = true, receive = true, parent = scene, name } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast; m.receiveShadow = receive;
  if (name) m.name = name;
  parent.add(m);
  return m;
}
/** InstancedMesh from a list of {p, r(y-rot), s(scale number|Vector3), c(color)} */
function addInstances(geo, mat, items, { cast = true, receive = true, parent = scene } = {}) {
  if (!items.length) return null;
  const im = new THREE.InstancedMesh(geo, mat, items.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), e = new THREE.Euler();
  items.forEach((it, i) => {
    e.set(it.rx || 0, it.r || 0, it.rz || 0, 'YXZ');
    q.setFromEuler(e);
    if (typeof it.s === 'number') s.setScalar(it.s); else if (it.s) s.copy(it.s); else s.setScalar(1);
    m4.compose(it.p, q, s);
    im.setMatrixAt(i, m4);
    if (it.c !== undefined) im.setColorAt(i, it.c instanceof THREE.Color ? it.c : col(it.c));
  });
  im.instanceMatrix.needsUpdate = true;
  if (im.instanceColor) im.instanceColor.needsUpdate = true;
  im.castShadow = cast; im.receiveShadow = receive;
  parent.add(im);
  return im;
}

/* =====================================================================
   PROCEDURAL TEXTURES
   ===================================================================== */
const TEX = {};

function buildTextures() {
  // Dry-season savanna ground: tired grass with laterite patches (Accra in Harmattan)
  {
    const c = makeCanvas(512, 512);
    const g1 = hexRGB(0x7f7d4a), g2 = hexRGB(0x9d9564), soil = hexRGB(0x9a6444);
    paintPixels(c, (u, v) => {
      const n = NOISE.fbm(u, v, 4, 5), d = NOISE.fbm(u + 0.3, v + 0.7, 16, 3), s = NOISE.fbm(u, v, 3, 4);
      let p = mixRGB(g1, g2, n);
      p = mixRGB(p, soil, clamp((s - 0.5) * 3.2, 0, 0.8));
      const k = 0.82 + d * 0.32 + (rand() - 0.5) * 0.12;
      return [p[0] * k, p[1] * k, p[2] * k];
    });
    TEX.ground = texFromCanvas(c);
    const m = makeCanvas(256, 256);
    paintPixels(m, (u, v) => { const n = NOISE.fbm(u, v, 3, 5) * 255; return [n, n, n]; });
    TEX.macro = texFromCanvas(m, { srgb: false });
  }
  // Irrigated lawn with mowing stripes
  {
    const c = makeCanvas(512, 512);
    const a = hexRGB(0x56782f), b = hexRGB(0x738c3d);
    paintPixels(c, (u, v, x) => {
      const n = NOISE.fbm(u, v, 8, 4), fine = rand();
      const stripe = Math.floor(u * 4) % 2 ? 0.975 : 1.025;
      let p = mixRGB(a, b, n * 0.8 + fine * 0.25);
      const k = stripe * (0.9 + fine * 0.18);
      return [p[0] * k, p[1] * k, p[2] * k];
    });
    TEX.lawn = texFromCanvas(c);
  }
  // Laterite verge
  {
    const c = makeCanvas(256, 256);
    const a = hexRGB(0xa0603a), b = hexRGB(0x7b5a3a), gr = hexRGB(0x7f8640);
    paintPixels(c, (u, v) => {
      const n = NOISE.fbm(u, v, 6, 4), gg = NOISE.fbm(u + 0.5, v, 5, 3);
      let p = mixRGB(a, b, n);
      p = mixRGB(p, gr, clamp((gg - 0.5) * 3, 0, 0.8));
      const k = 0.85 + rand() * 0.25;
      return [p[0] * k, p[1] * k, p[2] * k];
    });
    TEX.laterite = texFromCanvas(c);
  }
  // Asphalt base noise
  const asphaltPixel = (u, v, base = 0x3b3c3e) => {
    const b = hexRGB(base), n = NOISE.fbm(u, v, 12, 3), k = 0.82 + n * 0.25 + (rand() - 0.5) * 0.22;
    return [b[0] * k, b[1] * k, b[2] * k];
  };
  {
    const c = makeCanvas(512, 512);
    paintPixels(c, (u, v) => asphaltPixel(u, v));
    TEX.asphalt = texFromCanvas(c);
  }
  // Carriageway: 7 m wide (u) × 12 m long (v). Solid edge lines, dashed lane divider, light wheel-track wear.
  {
    const c = makeCanvas(256, 512), g = c.getContext('2d');
    paintPixels(c, (u, v) => {
      const p = asphaltPixel(u, v, 0x3a3b3d);
      const wear = Math.exp(-Math.pow((u - 0.23) / 0.06, 2)) + Math.exp(-Math.pow((u - 0.77) / 0.06, 2)) +
        Math.exp(-Math.pow((u - 0.35) / 0.05, 2)) * 0.6 + Math.exp(-Math.pow((u - 0.65) / 0.05, 2)) * 0.6;
      const k = 1 - wear * 0.1;
      return [p[0] * k, p[1] * k, p[2] * k];
    });
    const pxm = 256 / 7; // px per metre across
    g.fillStyle = 'rgba(236,233,222,0.92)';
    g.fillRect(0.25 * pxm, 0, 0.15 * pxm, 512);                // left edge line
    g.fillRect(256 - 0.4 * pxm, 0, 0.15 * pxm, 512);          // right edge line
    const pyM = 512 / 12;
    g.fillRect(128 - 0.07 * pxm, 0, 0.14 * pxm, 3 * pyM);       // 3 m dash, 9 m gap
    // speckle the paint so it reads as worn thermoplastic
    const img = g.getImageData(0, 0, 256, 512);
    for (let i = 0; i < img.data.length; i += 4) {
      if (img.data[i] > 150 && rand() < 0.18) { img.data[i] *= 0.7; img.data[i + 1] *= 0.7; img.data[i + 2] *= 0.7; }
    }
    g.putImageData(img, 0, 0);
    TEX.carriage = texFromCanvas(c);
  }
  // Concrete interlocking pavers (sidewalks): 2 m tile
  {
    const c = makeCanvas(256, 256), g = c.getContext('2d');
    paintPixels(c, (u, v) => { const n = NOISE.fbm(u, v, 8, 3); const k = 0.85 + n * 0.2 + (rand() - 0.5) * 0.1; return [150 * k, 146 * k, 140 * k]; });
    const s = 256 / 10; // 0.2 m pavers
    for (let y = 0; y < 10; y++) for (let x = 0; x < 10; x++) {
      const off = (y % 2) * s / 2;
      const tone = rand();
      g.fillStyle = tone < 0.12 ? 'rgba(150,80,60,0.35)' : `rgba(255,255,255,${(tone * 0.06).toFixed(3)})`;
      g.fillRect(x * s + off + 1, y * s + 1, s - 2, s - 2);
    }
    g.strokeStyle = 'rgba(40,38,35,0.55)'; g.lineWidth = 1.5;
    for (let y = 0; y <= 10; y++) { g.beginPath(); g.moveTo(0, y * s); g.lineTo(256, y * s); g.stroke(); }
    for (let y = 0; y < 10; y++) for (let x = 0; x <= 10; x++) {
      const off = (y % 2) * s / 2; g.beginPath(); g.moveTo(x * s + off, y * s); g.lineTo(x * s + off, (y + 1) * s); g.stroke();
    }
    TEX.pavers = texFromCanvas(c);
  }
  // Painted kerb: black / white, 1 m blocks (very Accra)
  {
    const c = makeCanvas(32, 128), g = c.getContext('2d');
    const img = g.createImageData(32, 128);
    for (let y = 0; y < 128; y++) for (let x = 0; x < 32; x++) {
      const white = Math.floor(y / 32) % 2 === 0, k = 0.85 + rand() * 0.15, i = (y * 32 + x) * 4;
      const base = white ? [228, 224, 212] : [32, 31, 30];
      img.data[i] = base[0] * k; img.data[i + 1] = base[1] * k; img.data[i + 2] = base[2] * k; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    TEX.kerb = texFromCanvas(c);
  }
  // Honed stone slabs for plazas: 3 m tile, 1.5 m slabs
  {
    const c = makeCanvas(512, 512), g = c.getContext('2d');
    paintPixels(c, (u, v) => { const n = NOISE.fbm(u, v, 10, 4); const k = 0.9 + n * 0.14 + (rand() - 0.5) * 0.05; return [214 * k, 202 * k, 182 * k]; });
    for (let y = 0; y < 2; y++) for (let x = 0; x < 2; x++) {
      g.fillStyle = `rgba(${rand() < 0.5 ? '255,250,240' : '120,100,80'},${(rand() * 0.07).toFixed(3)})`;
      g.fillRect(x * 256, y * 256, 256, 256);
    }
    g.strokeStyle = 'rgba(90,80,70,0.5)'; g.lineWidth = 2;
    for (let i = 0; i <= 2; i++) { g.beginPath(); g.moveTo(0, i * 256); g.lineTo(512, i * 256); g.stroke(); g.beginPath(); g.moveTo(i * 256, 0); g.lineTo(i * 256, 512); g.stroke(); }
    TEX.slabs = texFromCanvas(c);
  }
  // Namibia Pearl granite cladding: pale grey with dark mica speckle; 1.2 × 0.6 m panels on a 2.4 m tile
  {
    const c = makeCanvas(512, 512), g = c.getContext('2d');
    paintPixels(c, (u, v) => {
      const n = NOISE.fbm(u, v, 6, 4), r = rand();
      let k = 0.93 + n * 0.08;
      let p = [226 * k, 224 * k, 218 * k];
      if (r < 0.06) p = mixRGB(p, [70, 70, 74], 0.65 + rand() * 0.3);
      else if (r < 0.14) p = mixRGB(p, [160, 158, 156], 0.6);
      else if (r < 0.18) p = mixRGB(p, [250, 248, 242], 0.8);
      return p;
    });
    g.strokeStyle = 'rgba(150,146,140,0.55)'; g.lineWidth = 1.6;
    for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(0, i * 128); g.lineTo(512, i * 128); g.stroke(); }
    for (let r = 0; r < 4; r++) for (let i = 0; i <= 2; i++) {
      const x = i * 256 + (r % 2) * 128; g.beginPath(); g.moveTo(x, r * 128); g.lineTo(x, (r + 1) * 128); g.stroke();
    }
    TEX.granite = texFromCanvas(c);
  }
  // Cream limestone cladding (Jubilee House): 2.4 m tile, larger panels
  {
    const c = makeCanvas(512, 512), g = c.getContext('2d');
    paintPixels(c, (u, v) => {
      const n = NOISE.fbm(u, v, 5, 4), r = rand(), k = 0.92 + n * 0.12 + (r - 0.5) * 0.05;
      return [236 * k, 226 * k, 204 * k];
    });
    g.strokeStyle = 'rgba(160,140,110,0.45)'; g.lineWidth = 2;
    for (let i = 0; i <= 2; i++) { g.beginPath(); g.moveTo(0, i * 256); g.lineTo(512, i * 256); g.stroke(); g.beginPath(); g.moveTo(i * 256, 0); g.lineTo(i * 256, 512); g.stroke(); }
    TEX.cream = texFromCanvas(c);
  }
  // Painted render (roadside buildings / walls): neutral so it can be tinted by material colour
  {
    const c = makeCanvas(256, 256);
    paintPixels(c, (u, v) => {
      const n = NOISE.fbm(u, v, 6, 4), streak = NOISE.fbm(u * 0.3, v, 3, 3), k = 0.86 + n * 0.14 - Math.max(0, streak - 0.6) * 0.3 + (rand() - 0.5) * 0.05;
      return [240 * k, 240 * k, 240 * k];
    });
    TEX.render = texFromCanvas(c);
  }
  // Flat concrete roof with stains
  {
    const c = makeCanvas(256, 256);
    paintPixels(c, (u, v) => { const n = NOISE.fbm(u, v, 5, 5), k = 0.7 + n * 0.35 + (rand() - 0.5) * 0.08; return [150 * k, 148 * k, 142 * k]; });
    TEX.roof = texFromCanvas(c);
  }
  // Clay roof tiles (stake centre / gatehouses)
  {
    const c = makeCanvas(256, 256), g = c.getContext('2d');
    paintPixels(c, (u, v) => { const n = NOISE.fbm(u, v, 6, 3), k = 0.8 + n * 0.3; return [92 * k, 92 * k, 96 * k]; });
    for (let y = 0; y < 16; y++) { g.fillStyle = 'rgba(0,0,0,0.28)'; g.fillRect(0, y * 16 + 13, 256, 3); }
    TEX.roofTiles = texFromCanvas(c);
  }
  // Water normal map (tileable)
  {
    const c = makeCanvas(256, 256);
    const hgt = (u, v) => NOISE.fbm(u, v, 8, 4);
    paintPixels(c, (u, v) => {
      const e = 1 / 256, h0 = hgt(u, v), hx = hgt(u + e, v), hy = hgt(u, v + e);
      const nx = (h0 - hx) * 18, ny = (h0 - hy) * 18, nz = 1, l = Math.hypot(nx, ny, nz);
      return [(nx / l * 0.5 + 0.5) * 255, (ny / l * 0.5 + 0.5) * 255, (nz / l * 0.5 + 0.5) * 255];
    });
    TEX.waterN = texFromCanvas(c, { srgb: false });
  }
  // Palm frond (alpha): rachis with drooping leaflets, drawn along the canvas height
  {
    const c = makeCanvas(128, 512), g = c.getContext('2d');
    g.clearRect(0, 0, 128, 512);
    for (let i = 0; i < 48; i++) {
      const t = i / 48, y = 20 + t * 480, len = 58 * Math.sin(Math.PI * (0.12 + t * 0.85)) + 6;
      const shade = 0.8 + rand() * 0.35;
      g.strokeStyle = `rgb(${(70 * shade) | 0},${(110 * shade) | 0},${(38 * shade) | 0})`;
      g.lineWidth = 3.6 * (1 - t * 0.4);
      for (const side of [-1, 1]) {
        g.beginPath(); g.moveTo(64, y);
        g.quadraticCurveTo(64 + side * len * 0.5, y + len * 0.15, 64 + side * len, y + len * 0.55);
        g.stroke();
      }
    }
    g.strokeStyle = '#6b6a35'; g.lineWidth = 3; g.beginPath(); g.moveTo(64, 0); g.lineTo(64, 512); g.stroke();
    TEX.frond = texFromCanvas(c);
    TEX.frond.wrapS = TEX.frond.wrapT = THREE.ClampToEdgeWrapping;
  }
  // Leafy texture for hedges / canopy detail
  {
    const c = makeCanvas(256, 256), g = c.getContext('2d');
    g.fillStyle = '#2f4f1f'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 1600; i++) {
      const s = 0.7 + rand() * 0.6;
      g.fillStyle = `rgb(${(55 * s) | 0},${(95 * s) | 0},${(38 * s) | 0})`;
      g.beginPath(); g.ellipse(rand() * 256, rand() * 256, 4 + rand() * 4, 2 + rand() * 2, rand() * Math.PI, 0, Math.PI * 2); g.fill();
    }
    TEX.leaves = texFromCanvas(c);
  }
  // Neutral leaf detail (multiplies vertex / instance colours on canopies and shrubs)
  {
    const c = makeCanvas(256, 256), g = c.getContext('2d');
    g.fillStyle = '#b8b8b8'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 2600; i++) {
      const s = 150 + rand() * 105 | 0;
      g.fillStyle = `rgb(${s},${s},${s})`;
      g.beginPath(); g.ellipse(rand() * 256, rand() * 256, 3 + rand() * 4, 1.5 + rand() * 2, rand() * Math.PI, 0, Math.PI * 2); g.fill();
    }
    TEX.leafDetail = texFromCanvas(c);
  }
  // Shrub foliage: green leaves with pale blossom spots (spots take the per-instance flower colour)
  {
    const c = makeCanvas(256, 256), g = c.getContext('2d');
    g.fillStyle = '#4a6b2c'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 2200; i++) {
      const s = 0.7 + rand() * 0.6;
      g.fillStyle = `rgb(${(78 * s) | 0},${(118 * s) | 0},${(48 * s) | 0})`;
      g.beginPath(); g.ellipse(rand() * 256, rand() * 256, 3 + rand() * 4, 1.5 + rand() * 2, rand() * Math.PI, 0, Math.PI * 2); g.fill();
    }
    for (let i = 0; i < 380; i++) {
      g.fillStyle = `rgba(255,255,255,${(0.8 + rand() * 0.2).toFixed(2)})`;
      g.beginPath(); g.arc(rand() * 256, rand() * 256, 2.5 + rand() * 4, 0, Math.PI * 2); g.fill();
    }
    TEX.shrub = texFromCanvas(c);
  }
  // Flower-bed carpet: massed bedding plants (marigold, salvia, vinca, bougainvillea pinks)
  {
    const c = makeCanvas(256, 256), g = c.getContext('2d');
    g.fillStyle = '#3d5a24'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 1400; i++) {
      const s = 0.7 + rand() * 0.6; g.fillStyle = `rgb(${(70 * s) | 0},${(105 * s) | 0},${(42 * s) | 0})`;
      g.beginPath(); g.ellipse(rand() * 256, rand() * 256, 3 + rand() * 3, 2 + rand() * 2, rand() * 3, 0, Math.PI * 2); g.fill();
    }
    const pal = ['#d81b60', '#e53935', '#fdd835', '#ff8f00', '#f06292', '#fff3e0', '#c2185b'];
    for (let i = 0; i < 1300; i++) {
      const x = rand() * 256, y = rand() * 256, band = Math.floor((x + y * 0.35) / 64) % pal.length;
      g.fillStyle = rand() < 0.75 ? pal[band] : pick(pal);
      g.beginPath(); g.arc(x, y, 1.6 + rand() * 2.4, 0, Math.PI * 2); g.fill();
    }
    TEX.flowerbed = texFromCanvas(c);
  }
  // Palm trunk rings
  {
    const c = makeCanvas(64, 256);
    paintPixels(c, (u, v) => {
      const ring = 0.75 + 0.25 * Math.pow(Math.abs(Math.sin(v * Math.PI * 22)), 0.5), n = NOISE.fbm(u, v, 4, 3);
      const k = ring * (0.85 + n * 0.25);
      return [128 * k, 118 * k, 104 * k];
    });
    TEX.trunk = texFromCanvas(c);
  }
  // Bark
  {
    const c = makeCanvas(128, 256);
    paintPixels(c, (u, v) => {
      const n = NOISE.fbm(u * 3, v * 0.6, 6, 4), k = 0.6 + n * 0.5;
      return [92 * k, 80 * k, 66 * k];
    });
    TEX.bark = texFromCanvas(c);
  }
  // Ghana flag: red, gold, green with the black star
  {
    const c = makeCanvas(300, 200), g = c.getContext('2d');
    g.fillStyle = '#ce1126'; g.fillRect(0, 0, 300, 67);
    g.fillStyle = '#fcd116'; g.fillRect(0, 67, 300, 66);
    g.fillStyle = '#006b3f'; g.fillRect(0, 133, 300, 67);
    g.fillStyle = '#000'; g.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? 13 : 33, a = -Math.PI / 2 + i * Math.PI / 5;
      g.lineTo(150 + Math.cos(a) * r, 100 + Math.sin(a) * r);
    }
    g.closePath(); g.fill();
    TEX.flag = texFromCanvas(c);
    TEX.flag.wrapS = TEX.flag.wrapT = THREE.ClampToEdgeWrapping;
  }
  // Soft glow sprite
  {
    const c = makeCanvas(64, 64), g = c.getContext('2d');
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,240,210,1)'); gr.addColorStop(0.18, 'rgba(255,210,150,0.65)');
    gr.addColorStop(0.5, 'rgba(255,180,110,0.14)'); gr.addColorStop(1, 'rgba(255,170,100,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    TEX.glow = texFromCanvas(c, { aniso: false });
  }
}

/**
 * Procedural curtain-wall / window facade.
 * Returns { map, rm (roughness in G, metalness in B), em (night-lit windows) } — all tile one block of
 * bays × floors so repetition is broken up. Repeat with worldUV scale = bays*bayW (u) — we use square tiles.
 */
function makeFacade(o) {
  const bays = o.bays || 6, floors = o.floors || 6, bayW = o.bayW || 3, floorH = o.floorH || 3.6;
  const W = 512, H = Math.round(512 * (floors * floorH) / (bays * bayW));
  const pxU = W / (bays * bayW), pxV = H / (floors * floorH);
  const map = makeCanvas(W, H), rm = makeCanvas(W, H), em = makeCanvas(W, H);
  const gm = map.getContext('2d'), gr = rm.getContext('2d'), ge = em.getContext('2d');
  // wall base with subtle noise
  const wall = hexRGB(o.wall || 0xe8e0cf);
  paintPixels(map, (u, v) => { const n = NOISE.fbm(u, v, 6, 3), k = 0.9 + n * 0.14 + (rand() - 0.5) * 0.04; return [wall[0] * k, wall[1] * k, wall[2] * k]; });
  gr.fillStyle = 'rgb(0,215,0)'; gr.fillRect(0, 0, W, H);
  ge.fillStyle = '#000'; ge.fillRect(0, 0, W, H);
  const glass = o.glass || '#24313a', frame = o.frame || '#3a3631';
  const gx = o.glassX || [0.1, 0.9], gy = o.glassY || [0.18, 0.86];
  for (let f = 0; f < floors; f++) for (let b = 0; b < bays; b++) {
    const x0 = (b * bayW + gx[0] * bayW) * pxU, x1 = (b * bayW + gx[1] * bayW) * pxU;
    const y1 = H - (f * floorH + gy[0] * floorH) * pxV, y0 = H - (f * floorH + gy[1] * floorH) * pxV;
    // reveal shadow
    gm.fillStyle = 'rgba(0,0,0,0.28)'; gm.fillRect(x0 - 2, y0 - 2, x1 - x0 + 4, y1 - y0 + 5);
    // glass with sky-ish vertical gradient
    const grd = gm.createLinearGradient(0, y0, 0, y1);
    grd.addColorStop(0, o.glassTop || '#5d7484'); grd.addColorStop(1, glass);
    gm.fillStyle = grd; gm.fillRect(x0, y0, x1 - x0, y1 - y0);
    // blinds / curtains variation
    if (rand() < 0.35) { gm.fillStyle = `rgba(230,220,200,${(0.15 + rand() * 0.25).toFixed(2)})`; gm.fillRect(x0, y0, x1 - x0, (y1 - y0) * rr(0.2, 0.7)); }
    gr.fillStyle = 'rgb(0,45,200)'; gr.fillRect(x0, y0, x1 - x0, y1 - y0);
    // mullions
    gm.fillStyle = frame; gr.fillStyle = 'rgb(0,120,255)';
    const mull = o.mullions === undefined ? 2 : o.mullions;
    for (let m = 0; m <= mull; m++) {
      const x = x0 + (x1 - x0) * (m / mull) - 1.5;
      gm.fillRect(x, y0, 3, y1 - y0); gr.fillRect(x, y0, 3, y1 - y0);
    }
    if (o.transom) { const ty = y0 + (y1 - y0) * 0.25; gm.fillRect(x0, ty - 1.5, x1 - x0, 3); }
    // night: lit windows
    if (rand() < (o.litRatio || 0.45)) {
      const warm = rand() < 0.88, k = rr(0.55, 1);
      ge.fillStyle = warm ? `rgb(${(255 * k) | 0},${(214 * k) | 0},${(160 * k) | 0})` : `rgb(${(214 * k) | 0},${(226 * k) | 0},${(240 * k) | 0})`;
      ge.fillRect(x0, y0, x1 - x0, y1 - y0);
      if (rand() < 0.5) { ge.fillStyle = 'rgba(0,0,0,0.45)'; ge.fillRect(x0, y0, (x1 - x0) * rr(0.2, 0.6), y1 - y0); } // curtains
    }
  }
  if (o.bands) { // horizontal spandrel accent lines
    gm.fillStyle = o.bands;
    for (let f = 0; f <= floors; f++) { const y = H - f * floorH * pxV; gm.fillRect(0, y - 3, W, 5); }
  }
  return {
    map: texFromCanvas(map), rm: texFromCanvas(rm, { srgb: false }), em: texFromCanvas(em),
    sizeU: bays * bayW, sizeV: floors * floorH
  };
}

/* =====================================================================
   MATERIAL LIBRARY
   ===================================================================== */
const MAT = {};
const NIGHT_EMISSIVE = []; // { mat, base } — emissive intensities ramp up after sunset

function std(opts) { return new THREE.MeshStandardMaterial(opts); }
/** Material whose texture is scaled in metres on worldUV geometry: pass sizeU/sizeV in metres per tile. */
function tiled(tex, sizeU, sizeV) { const t = tex.clone(); t.needsUpdate = true; t.repeat.set(1 / sizeU, 1 / (sizeV || sizeU)); return t; }
function facadeMat(f, extra = {}) {
  const night = extra.nightLevel || 1.0; extra = Object.assign({}, extra); delete extra.nightLevel;
  const m = std(Object.assign({
    map: tiled(f.map, f.sizeU, f.sizeV), roughnessMap: tiled(f.rm, f.sizeU, f.sizeV), metalnessMap: tiled(f.rm, f.sizeU, f.sizeV),
    emissiveMap: tiled(f.em, f.sizeU, f.sizeV), emissive: col(0xffffff), emissiveIntensity: 0,
    roughness: 1, metalness: 1
  }, extra));
  NIGHT_EMISSIVE.push({ mat: m, base: night * 0.62 });
  return m;
}

function buildMaterials() {
  MAT.ground = std({ map: TEX.ground, roughness: 0.97, metalness: 0 });
  MAT.ground.map.repeat.set(1 / 36, 1 / 36);
  MAT.ground.onBeforeCompile = (sh) => {
    sh.uniforms.macroMap = { value: TEX.macro };
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform sampler2D macroMap;')
      .replace('#include <map_fragment>', `#include <map_fragment>
        float mac = texture2D(macroMap, vUv * 0.031).r * 0.6 + texture2D(macroMap, vUv * 0.11).r * 0.4;
        diffuseColor.rgb *= mix(0.72, 1.22, mac);`);
  };
  MAT.lawn = std({ map: tiled(TEX.lawn, 22), roughness: 0.95 });
  MAT.laterite = std({ map: tiled(TEX.laterite, 6), roughness: 1 });
  MAT.asphalt = std({ map: tiled(TEX.asphalt, 9), roughness: 0.9 });
  MAT.carriage = std({ map: TEX.carriage, roughness: 0.88 });
  MAT.pavers = std({ map: tiled(TEX.pavers, 2), roughness: 0.92 });
  MAT.kerb = std({ map: TEX.kerb, roughness: 0.85 });
  MAT.slabs = std({ map: tiled(TEX.slabs, 3), roughness: 0.6 });
  MAT.slabsWarm = std({ map: tiled(TEX.slabs, 3), color: col(0xf3e7d2), roughness: 0.55 });
  MAT.granite = std({ map: tiled(TEX.granite, 2.4), color: col(0xe4e2dc), roughness: 0.42, metalness: 0.02 });
  MAT.cream = std({ map: tiled(TEX.cream, 2.4), roughness: 0.6 });
  MAT.render = std({ map: tiled(TEX.render, 4), roughness: 0.9 });
  MAT.roof = std({ map: tiled(TEX.roof, 8), roughness: 0.95 });
  MAT.roofTiles = std({ map: tiled(TEX.roofTiles, 3), roughness: 0.75 });
  MAT.gold = std({ color: col(0xd7a640), metalness: 1, roughness: 0.22 });
  MAT.goldLeaf = std({ color: col(0xf0c45a), metalness: 1, roughness: 0.16, emissive: col(0x6a4a10), emissiveIntensity: 0 });
  NIGHT_EMISSIVE.push({ mat: MAT.goldLeaf, base: 1.6 });
  MAT.bronze = std({ color: col(0x5a4630), metalness: 0.85, roughness: 0.35 });
  MAT.steelDark = std({ color: col(0x2a2c2f), metalness: 0.7, roughness: 0.45 });
  MAT.steel = std({ color: col(0x9aa0a6), metalness: 0.8, roughness: 0.35 });
  MAT.paintWhite = std({ color: col(0xf2f0ea), roughness: 0.55 });
  MAT.paintBlack = std({ color: col(0x161616), roughness: 0.5, metalness: 0.3 });
  MAT.glass = std({ color: col(0x1f2c33), metalness: 0.9, roughness: 0.06 });
  MAT.glassBronze = std({ color: col(0x3a2f22), metalness: 0.92, roughness: 0.08 });
  MAT.concrete = std({ map: tiled(TEX.render, 3), color: col(0xbdb8ae), roughness: 0.88 });
  MAT.water = std({ color: col(0x1b4c55), roughness: 0.04, metalness: 0.25, normalMap: TEX.waterN, normalScale: new THREE.Vector2(0.35, 0.35) });
  MAT.water.normalMap.repeat.set(0.18, 0.18);
  MAT.lampHead = std({ color: col(0xdedad0), emissive: col(0xffd9a0), emissiveIntensity: 0, roughness: 0.4 });
  NIGHT_EMISSIVE.push({ mat: MAT.lampHead, base: 3.2 });
  MAT.leaves = std({ map: tiled(TEX.leaves, 1.4), roughness: 0.9 });
  MAT.flowerbed = std({ map: TEX.flowerbed, roughness: 0.95 });
  MAT.trunk = std({ map: TEX.trunk, roughness: 0.95 });
  MAT.bark = std({ map: TEX.bark, roughness: 1 });
  MAT.canopy = std({ vertexColors: true, map: TEX.leafDetail, roughness: 0.9, metalness: 0 });
  MAT.frond = std({ map: TEX.frond, alphaTest: 0.32, side: THREE.DoubleSide, roughness: 0.8 });
  MAT.frondDepth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: TEX.frond, alphaTest: 0.32 });
  MAT.shrub = std({ color: 0xffffff, map: TEX.shrub, roughness: 0.88 });
  MAT.shrub.onBeforeCompile = (sh) => {
    // instance colour tints only the blossom spots; leaves stay green
    sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>', `
      #if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
        float bloom = smoothstep(0.25, 0.55, texelColor.b);
        diffuseColor.rgb = mix(diffuseColor.rgb * mix(vec3(1.0), vColor, 0.25), vColor * 0.95, bloom);
      #endif`);
  };
  MAT.vcolor = std({ vertexColors: true, roughness: 0.7, metalness: 0.05 });
}

/* =====================================================================
   SKY · SUN · ENVIRONMENT · FOG · SHADOWS
   ===================================================================== */
const sky = new THREE.Sky();
sky.scale.setScalar(20000);
scene.add(sky);
// Horizon haze: the sky melts into the same colour as the scene fog, so there is no seam where land meets sky.
sky.material.uniforms.hazeColor = { value: new THREE.Color(0.8, 0.75, 0.68) };
sky.material.uniforms.hazeAmt = { value: 1 };
sky.material.fragmentShader = 'uniform vec3 hazeColor;\nuniform float hazeAmt;\n' + sky.material.fragmentShader.replace(
  'gl_FragColor = vec4( retColor, 1.0 );',
  'float hz = 1.0 - smoothstep( -0.03, 0.14, direction.y );\n\t\t\tretColor = mix( retColor, hazeColor, hazeAmt * hz * hz );\n\t\t\tgl_FragColor = vec4( retColor, 1.0 );');
const envScene = new THREE.Scene();
const envSky = new THREE.Mesh(sky.geometry, sky.material);
envSky.scale.setScalar(10000);
envScene.add(envSky);

const pmrem = new THREE.PMREMGenerator(renderer);
let envRT = null;

const sun = new THREE.DirectionalLight(0xffffff, 3);
sun.castShadow = true;
const SHADOW_SIZE = IS_MOBILE ? 1024 : 2048;
sun.shadow.mapSize.set(SHADOW_SIZE, SHADOW_SIZE);
sun.shadow.bias = -0.00025;
sun.shadow.normalBias = 0.08;
sun.shadow.camera.near = 10;
sun.shadow.camera.far = 2400;
scene.add(sun, sun.target);
const hemi = new THREE.HemisphereLight(0xcfe0ff, 0x6a5a40, 0.35);
scene.add(hemi);
scene.fog = new THREE.FogExp2(0xd9c3a4, 0.0009);

function setEnvIntensity(v) {
  scene.traverse((o) => { if (!o.material) return; (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { if ('envMapIntensity' in m) m.envMapIntensity = v; }); });
}

const SUN_AZIMUTH = -58 * DEG; // west-south-west: fronts of both landmarks (facing west) catch the light
const sunDir = new THREE.Vector3();
const TIME = { elevation: 9, night: 0 };
let envIntensity = 1;

/** Apply sun elevation (degrees). Drives sky, sun, fog, exposure, environment map and night lighting. */
function setSunElevation(elev, refreshEnv) {
  TIME.elevation = elev;
  const phi = (90 - elev) * DEG;
  sunDir.setFromSphericalCoords(1, phi, SUN_AZIMUTH);
  const u = sky.material.uniforms;
  const low = clamp(1 - elev / 35, 0, 1);
  u.turbidity.value = lerp(4.2, 6.2, low);
  u.rayleigh.value = lerp(1.1, 2.0, low);
  u.mieCoefficient.value = lerp(0.004, 0.007, low);
  u.mieDirectionalG.value = 0.86;
  u.sunPosition.value.copy(sunDir).multiplyScalar(1000);

  const day = clamp((elev + 2) / 10, 0, 1);          // 0 at dusk → 1 in daylight
  TIME.night = 1 - clamp((elev + 3.5) / 8, 0, 1);     // lamps/uplights fade in after sunset
  const warm = new THREE.Color().setHSL(lerp(0.11, 0.072, low), lerp(0.25, 1.0, Math.pow(low, 0.8)), lerp(0.93, 0.62, low));
  sun.color.copy(warm);
  sun.intensity = lerp(0, lerp(3.4, 2.7, low), day);
  hemi.intensity = lerp(0.14, lerp(0.42, 0.24, low), day);
  hemi.color.setHSL(0.6, lerp(0.45, 0.3, low), lerp(0.35, lerp(0.78, 0.62, low), day));
  hemi.groundColor.setHSL(0.08, 0.3, lerp(0.12, 0.32, day));

  // fog colour = the sky's own horizon colour, softened toward a dusty Harmattan beige
  renderer.toneMappingExposure = lerp(0.62, 0.78, low) + (1 - day) * 0.55;
  const fc = new THREE.Color(0xc9d4dc).lerp(new THREE.Color(0xe6cfae), low).lerp(new THREE.Color(0x3c4560), 1 - day);
  scene.fog.color.copy(fc);
  sky.material.uniforms.hazeColor.value.copy(fc).convertSRGBToLinear();
  renderer.shadowMap.needsUpdate = true;
  scene.fog.density = lerp(0.00042, 0.00062, low) + (1 - day) * 0.0002;
  envIntensity = lerp(0.95, 0.55, low) * lerp(0.6, 1, day);

  NIGHT_EMISSIVE.forEach((e) => { e.mat.emissiveIntensity = e.base * TIME.night; });
  UPDATE_NIGHT.forEach((fn) => fn(TIME.night));
  if (refreshEnv !== false) updateEnvironment();
}
/** Re-bake image-based lighting from the current sky (costly: debounce when dragging the slider). */
function updateEnvironment() {
  const old = envRT;
  envRT = pmrem.fromScene(envScene, 0, 1, 20000);
  scene.environment = envRT.texture;
  setEnvIntensity(envIntensity);
  if (old) old.dispose();
}
const UPDATE_NIGHT = []; // callbacks(nightAmount 0..1)

/* The shadow frustum follows the orbit target and scales with camera distance,
   so shadows stay crisp up close and still exist in overviews. */
let shadowHalf = 0;
const _snap = new THREE.Vector3();
function updateShadowCamera() {
  const tgt = controls.target;
  const dist = camera.position.distanceTo(tgt);
  const half = clamp(dist * 0.85, 45, 620);
  if (Math.abs(half - shadowHalf) > shadowHalf * 0.12) {
    shadowHalf = half;
    const c = sun.shadow.camera;
    c.left = -half; c.right = half; c.top = half; c.bottom = -half;
    c.updateProjectionMatrix();
    sun.shadow.normalBias = clamp(half / 900, 0.05, 0.6);
  }
  const texel = (shadowHalf * 2) / SHADOW_SIZE;
  _snap.set(Math.round(tgt.x / texel) * texel, 0, Math.round(tgt.z / texel) * texel);
  sun.target.position.copy(_snap);
  sun.position.copy(_snap).addScaledVector(sunDir, 1100);
}

function fitFov() { camera.fov = camera.aspect < 0.8 ? 56 : 42; }
fitFov();
window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  fitFov();
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

/* =====================================================================
   02 · VEGETATION — royal & coconut palms, flamboyant / mahogany shade
   trees, flowering shrubs, clipped hedges. Everything is collected into
   lists during scene construction and instanced once at the end.
   ===================================================================== */
const VEG = { royal: [], coconut: [], trees: [[], [], [], []], shrubs: [], hedges: [] };

/** Tapered tube swept along a curve (u around, v along). */
function taperedTube(curve, r0, r1, segs, radial, swell) {
  const pos = [], uv = [], idx = [];
  const frames = curve.computeFrenetFrames(segs, false);
  for (let i = 0; i <= segs; i++) {
    const t = i / segs, p = curve.getPointAt(t);
    let r = lerp(r0, r1, t);
    if (swell) r *= 1 + swell * Math.sin(Math.PI * clamp((t - 0.25) / 0.6, 0, 1)) ;
    if (t < 0.06) r *= 1 + (0.06 - t) * 4; // root flare
    const N = frames.normals[i], B = frames.binormals[i];
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
      pos.push(p.x + r * (c * N.x + s * B.x), p.y + r * (c * N.y + s * B.y), p.z + r * (c * N.z + s * B.z));
      uv.push(j / radial, t * curve.getLength() / 2.5);
    }
  }
  for (let i = 0; i < segs; i++) for (let j = 0; j < radial; j++) {
    const a = i * (radial + 1) + j, b = a + radial + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}

/** One palm frond: arched V-folded strip, leaflets come from the alpha texture. */
function frondGeo(len, width, elev, droop) {
  const segs = 10, pos = [], uv = [], idx = [];
  let x = 0, y = 0, a = elev;
  const pts = [];
  for (let i = 0; i <= segs; i++) {
    pts.push([x, y]);
    const ds = len / segs;
    a -= droop * (i / segs) * 0.9 / segs * 3;
    x += Math.cos(a) * ds; y += Math.sin(a) * ds;
  }
  for (let i = 0; i <= segs; i++) {
    const [px, py] = pts[i], t = i / segs;
    const w = width * Math.sin(Math.PI * (0.08 + t * 0.9)) * 0.5 + 0.05;
    const fold = -w * 0.28; // leaflets droop from the rachis
    pos.push(px, py + fold, -w, px, py, 0, px, py + fold, w);
    uv.push(0, t, 0.5, t, 1, t);
  }
  for (let i = 0; i < segs; i++) for (let j = 0; j < 2; j++) {
    const a = i * 3 + j, b = a + 3;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}
function crownGeo(count, len, top, seed) {
  const r = mulberry32(seed), parts = [];
  for (let i = 0; i < count; i++) {
    const layer = i / count;
    const elev = lerp(1.05, -0.25, layer) + (r() - 0.5) * 0.25;
    const g = frondGeo(len * lerp(0.85, 1.08, r()), len * 0.6, elev, lerp(0.6, 1.5, layer));
    g.rotateY(i * 2.39996 + r() * 0.3);
    g.translate(0, top, 0);
    parts.push(g);
  }
  return merge(parts);
}
/** Organic canopy: displaced icospheres, vertex-coloured (darker underneath, sun-bleached on top). */
function canopyGeo(lobes, seed, palette, detail = 2) {
  const r = mulberry32(seed), parts = [];
  const cA = col(palette[0]), cB = col(palette[1]), cC = palette[2] ? col(palette[2]) : null;
  for (const L of lobes) {
    let g = new THREE.IcosahedronGeometry(L[3], detail);
    g.deleteAttribute('normal'); g.deleteAttribute('uv');
    g = THREE.BufferGeometryUtils.mergeVertices(g); // shared vertices → smooth, organic shading
    const p = g.attributes.position, n = p.count, colors = new Float32Array(n * 3);
    const off = r() * 10;
    for (let i = 0; i < n; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i), len = Math.hypot(x, y, z);
      const d = 1 + (NOISE.v2(x * 0.9 + off, z * 0.9 + y * 0.7) - 0.5) * 0.55 + (r() - 0.5) * 0.08;
      p.setXYZ(i, x * d, y * d * L[4], z * d);
      const up = y / len;
      const k = clamp(0.55 + up * 0.45, 0.35, 1.05) * (0.85 + r() * 0.3);
      let c = cA.clone().lerp(cB, clamp(up * 0.6 + r() * 0.4, 0, 1));
      if (cC && up > 0.05 && NOISE.v2(x * 1.7 + off, z * 1.7 - y) > 0.6) c = cC.clone().lerp(cA, r() * 0.2); // blossom clusters
      colors[i * 3] = c.r * k; colors[i * 3 + 1] = c.g * k; colors[i * 3 + 2] = c.b * k;
    }
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    g.computeVertexNormals();
    g.translate(L[0], L[1], L[2]);
    parts.push(g);
  }
  return merge(parts);
}
function trunkWithBranches(h, r0, seed, spread) {
  const r = mulberry32(seed), parts = [];
  parts.push(taperedTube(new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, h, 0)), r0, r0 * 0.55, 6, 8));
  for (let i = 0; i < 4; i++) {
    const a = i * 1.7 + r(), y = h * lerp(0.7, 0.95, r());
    const end = new THREE.Vector3(Math.cos(a) * spread, y + spread * 0.7, Math.sin(a) * spread);
    const c = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, y, 0), new THREE.Vector3(end.x * 0.4, y + spread * 0.6, end.z * 0.4), end);
    parts.push(taperedTube(c, r0 * 0.45, r0 * 0.15, 5, 6));
  }
  return merge(parts);
}

const TREE_TYPES = [];
function buildTreeTypes() {
  // 0 · Mahogany / neem: broad rounded canopy
  TREE_TYPES.push({
    trunk: trunkWithBranches(4.2, 0.38, 11, 2.2),
    canopy: canopyGeo([[0, 7.2, 0, 3.4, 0.8], [2.6, 6.4, 1, 2.6, 0.8], [-2.4, 6.6, -0.6, 2.8, 0.8], [0.4, 6.2, -2.6, 2.6, 0.8], [-0.6, 6.0, 2.6, 2.5, 0.8], [1.2, 8.6, 0.8, 2.3, 0.85]], 21, [0x2f4f1d, 0x6c8a35])
  });
  // 1 · Flamboyant (Delonix regia): wide umbrella crown, scarlet blossom
  TREE_TYPES.push({
    trunk: trunkWithBranches(3.4, 0.34, 12, 3.6),
    canopy: canopyGeo([[0, 6.2, 0, 3.8, 0.42], [3.4, 5.8, 1.2, 3.0, 0.45], [-3.3, 5.9, -1, 3.1, 0.45], [0.8, 5.7, -3.4, 2.9, 0.45], [-1, 5.6, 3.4, 2.9, 0.45]], 22, [0x3b5a1f, 0x7a9a3b, 0xd8381f])
  });
  // 2 · Tall oval (Indian almond / ficus street tree)
  TREE_TYPES.push({
    trunk: trunkWithBranches(5.5, 0.32, 13, 1.4),
    canopy: canopyGeo([[0, 8.5, 0, 2.9, 1.2], [1.4, 7.0, 0.8, 2.3, 1.0], [-1.3, 7.4, -0.6, 2.4, 1.0], [0.2, 10.5, 0.2, 2.0, 1.1]], 23, [0x2c4a1b, 0x5d7f2e])
  });
  // 3 · Distant city tree (low detail)
  TREE_TYPES.push({
    trunk: cyl(0.2, 0.32, 4.5, 6),
    canopy: canopyGeo([[0, 6.4, 0, 3.6, 0.78], [1.6, 6.0, 0.8, 2.6, 0.8]], 24, [0x34521f, 0x64843a], 1)
  });
}

/* placement helpers ---------------------------------------------------- */
function addRoyalPalm(x, z, s = 1) { VEG.royal.push({ p: new THREE.Vector3(x, 0, z), r: rand() * 6.28, s: s * rr(0.9, 1.1) }); }
function addCoconut(x, z, s = 1) { VEG.coconut.push({ p: new THREE.Vector3(x, 0, z), r: rand() * 6.28, s: s * rr(0.85, 1.12) }); }
function addTree(x, z, type = -1, s = 1) {
  const t = type < 0 ? (rand() < 0.22 ? 1 : rand() < 0.5 ? 0 : 2) : type;
  VEG.trees[t].push({ p: new THREE.Vector3(x, 0, z), r: rand() * 6.28, s: s * rr(0.8, 1.2) });
}
const FLOWER_COLORS = [0xc2185b, 0xd81b60, 0xe53935, 0xff7043, 0xfdd835, 0xab47bc];
function addShrub(x, z, size = 1, flower = 0.4, y = 0) {
  const c = rand() < flower ? pick(FLOWER_COLORS) : pick([0x6f9a3e, 0x7ba545, 0x5f8a34]);
  VEG.shrubs.push({ p: new THREE.Vector3(x, y + size * 0.35, z), r: rand() * 6.28, s: new THREE.Vector3(size * rr(0.8, 1.25), size * rr(0.55, 0.85), size * rr(0.8, 1.25)), c });
}
/** Clipped hedge from (x1,z1) to (x2,z2). */
function addHedge(x1, z1, x2, z2, h = 1, w = 0.9, y = 0) {
  const dx = x2 - x1, dz = z2 - z1, len = Math.hypot(dx, dz);
  VEG.hedges.push({ p: new THREE.Vector3((x1 + x2) / 2, y, (z1 + z2) / 2), r: -Math.atan2(dz, dx), s: new THREE.Vector3(len, h, w) });
}

function buildVegetation() {
  // Royal palm: straight trunk with a mid swelling, glossy green crownshaft, arching crown
  const royalTrunk = taperedTube(new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 11, 0)), 0.34, 0.25, 12, 10, 0.18);
  const royalShaft = cyl(0.2, 0.26, 2.6, 10, 0, 10.9, 0);
  const royalCrown = crownGeo(20, 4.7, 13.3, 5);
  const shaftMat = std({ color: col(0x58733a), roughness: 0.45 });
  const cFrond = { cast: true, receive: true };
  addInstances(royalTrunk, MAT.trunk, VEG.royal);
  addInstances(royalShaft, shaftMat, VEG.royal);
  const rc = addInstances(royalCrown, MAT.frond, VEG.royal, cFrond);
  if (rc) rc.customDepthMaterial = MAT.frondDepth;

  // Coconut palm: leaning, curved trunk
  const lean = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.4, 5, 0), new THREE.Vector3(1.9, 9.2, 0));
  const cocoTrunk = taperedTube(lean, 0.25, 0.17, 14, 9);
  const cocoCrown = crownGeo(18, 4.3, 0, 9); cocoCrown.translate(1.9, 9.2, 0);
  const nuts = merge([0, 1, 2, 3].map((i) => { const g = new THREE.SphereGeometry(0.17, 8, 6); g.translate(1.9 + Math.cos(i * 1.6) * 0.3, 8.95, Math.sin(i * 1.6) * 0.3); return g; }));
  addInstances(cocoTrunk, MAT.trunk, VEG.coconut);
  addInstances(nuts, std({ color: col(0x6b7a2e), roughness: 0.6 }), VEG.coconut);
  const cc = addInstances(cocoCrown, MAT.frond, VEG.coconut, cFrond);
  if (cc) cc.customDepthMaterial = MAT.frondDepth;

  TREE_TYPES.forEach((T, i) => {
    addInstances(T.trunk, MAT.bark, VEG.trees[i], { cast: i < 3 });
    addInstances(worldUV(T.canopy, 1.6), MAT.canopy, VEG.trees[i], { cast: i < 3 });
  });

  // Shrubs: lumpy icospheres, tinted per instance
  let sg = new THREE.IcosahedronGeometry(1, 2);
  sg.deleteAttribute('normal'); sg.deleteAttribute('uv'); sg = THREE.BufferGeometryUtils.mergeVertices(sg);
  const sp = sg.attributes.position;
  for (let i = 0; i < sp.count; i++) {
    const x = sp.getX(i), y = sp.getY(i), z = sp.getZ(i), d = 1 + (NOISE.v2(x * 2 + 3, z * 2 + y) - 0.5) * 0.5;
    sp.setXYZ(i, x * d, y * d, z * d);
  }
  sg.computeVertexNormals();
  addInstances(worldUV(sg, 1.2), MAT.shrub, VEG.shrubs, { cast: true });

  const hg = worldUV(box(1, 1, 1), 1.2);
  addInstances(hg, std({ map: tiled(TEX.leaves, 1.0), color: col(0x8fb070), roughness: 0.9 }), VEG.hedges);
}

/* =====================================================================
   03 · LIBERATION ROAD CORRIDOR — swept dual carriageway with painted
   kerbs, open drains, paved sidewalks, laterite verges; Independence
   Avenue junction with signals and zebra crossings; median streetlights,
   a steel pedestrian footbridge, bus shelters, signage and billboards.
   ===================================================================== */
const ROAD = {};
ROAD.pts = [[-12, -900], [-6, -620], [3, -470], [5, -340], [-3, -200], [-19, -60], [-17, 80], [-6, 185], [0, 255], [0, 330], [2, 480], [0, 900]];
ROAD.curve = new THREE.CatmullRomCurve3(ROAD.pts.map(([x, z]) => new THREE.Vector3(x, 0, z)), false, 'centripetal');
ROAD.L = ROAD.curve.getLength();
ROAD.Zi = 262;                // Independence Avenue junction (z)

/** Arc-length parameter t at which the centreline crosses a given z (monotonic in z). */
function roadTAtZ(z) {
  let lo = 0, hi = 1;
  for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (ROAD.curve.getPointAt(m).z < z) lo = m; else hi = m; }
  return (lo + hi) / 2;
}
/** Frame on a curve: point, tangent, side (east-ish for the southbound tangent), Y-rotation. */
function frameAt(curve, t) {
  const p = curve.getPointAt(clamp(t, 0, 1)), tan = curve.getTangentAt(clamp(t, 0, 1)).setY(0).normalize();
  const side = new THREE.Vector3(tan.z, 0, -tan.x);
  return { p, tan, side, theta: Math.atan2(tan.x, tan.z) };
}
function roadPoint(t, off, y = 0) { const f = frameAt(ROAD.curve, t); return f.p.clone().addScaledVector(f.side, off).setY(y); }

/**
 * Sweep a cross-section profile ([offset, height] pairs, west→east) along a curve between t0..t1.
 * Faces are flat-shaded so kerb tops and faces read crisply.
 */
function sweep(curve, t0, t1, profile, mat, o = {}) {
  const L = curve.getLength(), len = (t1 - t0) * L;
  const segs = Math.max(2, Math.ceil(len / (o.step || 4)));
  const n = profile.length, cu = [0];
  for (let i = 1; i < n; i++) cu.push(cu[i - 1] + Math.hypot(profile[i][0] - profile[i - 1][0], profile[i][1] - profile[i - 1][1]));
  const pos = [], uv = [], idx = [];
  for (let s = 0; s <= segs; s++) {
    const t = t0 + (t1 - t0) * (s / segs), f = frameAt(curve, t);
    for (let i = 0; i < n; i++) {
      const [off, y] = profile[i];
      pos.push(f.p.x + f.side.x * off, y, f.p.z + f.side.z * off);
      uv.push(o.uNorm ? cu[i] / cu[n - 1] : cu[i] / (o.uScale || 1), (t * L) / (o.vScale || 1));
    }
  }
  for (let s = 0; s < segs; s++) for (let i = 0; i < n - 1; i++) {
    const a = s * n + i, b = (s + 1) * n + i;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  let g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g = g.toNonIndexed(); g.computeVertexNormals();
  return addMesh(g, mat, { cast: !!o.cast, receive: true });
}

/** Full dual-carriageway cross-section, swept between t0..t1, with optional side breaks. */
function buildCarriageway(curve, t0, t1, o = {}) {
  const med = o.median === undefined ? 2 : o.median, cw = med + 7;
  const halfProfiles = (sgn) => {
    // sgn = -1 west half (profiles listed west→east), +1 east half
    const P = (arr) => (sgn < 0 ? arr.map(([a, y]) => [-a, y]).reverse() : arr);
    return {
      carriage: P([[med, 0.03], [cw, 0.03]]),
      kerb: P([[cw, 0.03], [cw, 0.18], [cw + 0.25, 0.18]]),
      walk: P([[cw + 0.25, 0.18], [cw + 3.25, 0.18], [cw + 3.25, 0.0]]),
      drain: P([[cw + 3.25, 0.12], [cw + 3.35, 0.14], [cw + 3.35, 0.015], [cw + 4.0, 0.015], [cw + 4.0, 0.14], [cw + 4.1, 0.12]]),
      verge: P([[cw + 4.1, 0.03], [cw + 9.5, 0.025]])
    };
  };
  for (const sgn of [-1, 1]) {
    const hp = halfProfiles(sgn);
    const breaks = (o.breaks || []).filter((b) => b.side === sgn || b.side === 0);
    // carriageway is never broken by gate breaks (only by junctions, handled by t-range)
    sweep(curve, t0, t1, hp.carriage, MAT.carriage, { uNorm: true, vScale: 12, step: 3 });
    const ranges = [[t0, t1]];
    breaks.forEach((b) => {
      for (let i = ranges.length - 1; i >= 0; i--) {
        const [a, c] = ranges[i];
        if (b.t1 <= a || b.t0 >= c) continue;
        ranges.splice(i, 1, ...[[a, b.t0], [b.t1, c]].filter(([x, y]) => y - x > 1e-5));
      }
    });
    ranges.forEach(([a, c]) => {
      sweep(curve, a, c, hp.kerb, MAT.kerb, { uScale: 0.45, vScale: 4, step: 2 });
      sweep(curve, a, c, hp.walk, MAT.pavers, { uScale: 2, vScale: 2, step: 3 });
      sweep(curve, a, c, hp.drain, MAT.drain, { uScale: 1, vScale: 1.5, step: 3 });
    });
    sweep(curve, t0, t1, hp.verge, MAT.laterite, { uScale: 6, vScale: 6, step: 5 });
  }
  if (med > 0) {
    // raised planted median with painted kerbs
    sweep(curve, t0, t1, [[-med, 0.03], [-med, 0.2], [-med + 0.22, 0.2]], MAT.kerb, { uScale: 0.45, vScale: 4, step: 2 });
    sweep(curve, t0, t1, [[med - 0.22, 0.2], [med, 0.2], [med, 0.03]], MAT.kerb, { uScale: 0.45, vScale: 4, step: 2 });
    sweep(curve, t0, t1, [[-med + 0.22, 0.2], [med - 0.22, 0.2]], MAT.medianGrass, { uScale: 4, vScale: 4, step: 4 });
  }
}

/* signal heads (materials animated by the traffic module) */
const SIGNALS = {};
function signalMats() {
  const mk = (hex) => std({ color: col(0x111111), emissive: col(hex), emissiveIntensity: 0, roughness: 0.3 });
  for (const g of ['ns', 'ew']) SIGNALS[g] = { r: mk(0xff2a1a), a: mk(0xffa200), g: mk(0x22ff77) };
}
/** Canvas-drawn sign / billboard texture. */
function signTexture(w, h, draw) { const c = makeCanvas(w, h); draw(c.getContext('2d'), w, h); const t = texFromCanvas(c); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t; }

const LAMP_GLOWS = []; // world positions of lamp heads, rendered as additive points at night

BUILD.push(['Paving Liberation Road', function buildRoad() {
  MAT.drain = std({ map: tiled(TEX.render, 1.5), color: col(0x8c877d), roughness: 0.95 });
  MAT.medianGrass = std({ map: tiled(TEX.lawn, 10), color: col(0xd7e0b0), roughness: 0.95 });
  signalMats();

  // Ground plane (macro-varied dry savanna)
  const gp = new THREE.PlaneGeometry(9000, 9000, 1, 1); gp.rotateX(-Math.PI / 2);
  const ground = addMesh(worldUV(gp, 1), MAT.ground, { cast: false });
  ground.name = 'ground';

  const C = ROAD.curve;
  ROAD.tInt = roadTAtZ(ROAD.Zi);
  ROAD.Xc = C.getPointAt(ROAD.tInt).x;
  const half = 18.5 / ROAD.L;
  ROAD.tGateJ = roadTAtZ(-345);
  ROAD.tGateT = roadTAtZ(352);
  const gate = (t, side, w) => ({ t0: t - w / ROAD.L, t1: t + w / ROAD.L, side });

  buildCarriageway(C, 0, ROAD.tInt - half, { breaks: [gate(ROAD.tGateJ, 1, 9)] });
  buildCarriageway(C, ROAD.tInt + half, 1, { breaks: [gate(ROAD.tGateT, 1, 7)] });

  // Independence Avenue (east–west)
  const Zi = ROAD.Zi, Xc = ROAD.Xc;
  ROAD.west = new THREE.LineCurve3(new THREE.Vector3(-1400, 0, Zi), new THREE.Vector3(Xc - 18.5, 0, Zi));
  ROAD.east = new THREE.LineCurve3(new THREE.Vector3(Xc + 18.5, 0, Zi), new THREE.Vector3(1400, 0, Zi));
  ROAD.indep = new THREE.LineCurve3(new THREE.Vector3(-1400, 0, Zi), new THREE.Vector3(1400, 0, Zi));
  buildCarriageway(ROAD.west, 0, 1, {});
  buildCarriageway(ROAD.east, 0, 1, { breaks: [] });

  // Junction box: plain asphalt + corner aprons
  const pad = new THREE.PlaneGeometry(37, 37); pad.rotateX(-Math.PI / 2); pad.translate(Xc, 0.03, Zi);
  addMesh(worldUV(pad, 9), MAT.asphalt, { cast: false });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const g = worldUV(box(9.3, 0.18, 9.3, Xc + sx * 13.85, 0, Zi + sz * 13.85), 2);
    addMesh(g, MAT.pavers, { cast: false });
  }
  // Zebra crossings + stop lines
  const paint = std({ color: col(0xeeeae0), roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -2 });
  const zebra = [];
  for (let k = -8; k <= 8; k += 1.1) {
    if (Math.abs(k) < 2.3) continue;
    zebra.push(box(0.55, 0.012, 3.6, Xc + k, 0.03, Zi - 16.2), box(0.55, 0.012, 3.6, Xc + k, 0.03, Zi + 16.2));
    zebra.push(box(3.6, 0.012, 0.55, Xc - 16.2, 0.03, Zi + k), box(3.6, 0.012, 0.55, Xc + 16.2, 0.03, Zi + k));
  }
  zebra.push(box(7, 0.012, 0.4, Xc - 5.5, 0.03, Zi - 18.2), box(7, 0.012, 0.4, Xc + 5.5, 0.03, Zi + 18.2));
  zebra.push(box(0.4, 0.012, 7, Xc - 18.2, 0.03, Zi + 5.5), box(0.4, 0.012, 7, Xc + 18.2, 0.03, Zi - 5.5));
  addMesh(merge(zebra), paint, { cast: false });

  // Gate aprons where compound driveways cross the sidewalk
  for (const [t, w] of [[ROAD.tGateJ, 9], [ROAD.tGateT, 7]]) {
    const f = frameAt(C, t);
    const g = new THREE.PlaneGeometry(10.5, w * 2); g.rotateX(-Math.PI / 2); g.rotateY(f.theta);
    const c = f.p.clone().addScaledVector(f.side, 9 + 5.2); g.translate(c.x, 0.04, c.z);
    addMesh(worldUV(g, 9), MAT.asphalt, { cast: false });
  }

  /* ---- median streetlights (double-arm) ---- */
  const pole = merge([
    cyl(0.1, 0.17, 10, 10),
    cyl(0.26, 0.3, 0.9, 10),
    taperedTube(new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 9.4, 0), new THREE.Vector3(0.4, 10.4, 0), new THREE.Vector3(2.6, 10.25, 0)), 0.07, 0.05, 8, 6),
    taperedTube(new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 9.4, 0), new THREE.Vector3(-0.4, 10.4, 0), new THREE.Vector3(-2.6, 10.25, 0)), 0.07, 0.05, 8, 6)
  ]);
  const heads = merge([box(0.85, 0.16, 0.34, 2.75, 10.08, 0), box(0.85, 0.16, 0.34, -2.75, 10.08, 0)]);
  const lamps = [];
  const placeLights = (curve, t0, t1, spacing, skip) => {
    const L = curve.getLength();
    for (let d = t0 * L + spacing / 2; d < t1 * L; d += spacing) {
      const t = d / L;
      if (skip && skip(t)) continue;
      const f = frameAt(curve, t);
      lamps.push({ p: f.p.clone().setY(0.2), r: f.theta });
      for (const s of [-1, 1]) LAMP_GLOWS.push(f.p.clone().addScaledVector(f.side, s * 2.75).setY(9.95));
    }
  };
  placeLights(C, 0.03, 0.97, 34, (t) => Math.abs(t - ROAD.tInt) * ROAD.L < 26);
  placeLights(ROAD.indep, 0.32, 0.68, 34, (t) => Math.abs(t * 2800 - 1400 - Xc) < 26);
  addInstances(pole, MAT.steel, lamps);
  addInstances(heads, MAT.lampHead, lamps);

  /* ---- signals at the junction ---- */
  const sigPoleGeo = merge([cyl(0.09, 0.12, 4.6, 8), cyl(0.2, 0.22, 0.5, 8)]);
  const housing = box(0.42, 1.25, 0.32, 0, 0, 0);
  const lens = (y) => { const g = new THREE.CircleGeometry(0.13, 16); g.translate(0, y, 0.17); return g; };
  const visor = (y) => { const g = new THREE.CylinderGeometry(0.17, 0.17, 0.22, 12, 1, true, -Math.PI / 2, Math.PI); g.rotateX(Math.PI / 2); g.translate(0, y + 0.02, 0.27); return g; };
  const visors = merge([visor(1.02), visor(0.63), visor(0.24)]);
  const sigPoles = [];
  // each head sits on the far-right corner for its approach (traffic drives on the right)
  const corners = [
    { x: Xc - 10.6, z: Zi + 10.6, face: Math.PI, group: 'ns' },        // southbound (from Jubilee House)
    { x: Xc + 10.6, z: Zi - 10.6, face: 0, group: 'ns' },              // northbound
    { x: Xc + 10.6, z: Zi + 10.6, face: -Math.PI / 2, group: 'ew' },   // eastbound
    { x: Xc - 10.6, z: Zi - 10.6, face: Math.PI / 2, group: 'ew' }     // westbound
  ];
  corners.forEach((c) => {
    sigPoles.push({ p: new THREE.Vector3(c.x, 0.18, c.z), r: 0 });
    const S = SIGNALS[c.group];
    const grp = new THREE.Group();
    grp.position.set(c.x, 3.55, c.z);
    grp.rotation.y = c.face;
    const hm = new THREE.Mesh(merge([housing, visors]), MAT.paintBlack); hm.castShadow = true; grp.add(hm);
    grp.add(new THREE.Mesh(lens(1.02), S.r), new THREE.Mesh(lens(0.63), S.a), new THREE.Mesh(lens(0.24), S.g));
    // a pedestrian head facing back across the road
    const ped = new THREE.Mesh(box(0.34, 0.7, 0.28, 0, -1.2, 0), MAT.paintBlack); ped.rotation.y = Math.PI; grp.add(ped);
    scene.add(grp);
  });
  addInstances(sigPoleGeo, MAT.paintBlack, sigPoles);

  /* ---- Pedestrian footbridge (steel truss with stair towers) ---- */
  (function footbridge() {
    const t = roadTAtZ(28), f = frameAt(C, t);
    const g = new THREE.Group();
    g.position.copy(f.p); g.rotation.y = f.theta; // local x = across the road, local z = along it
    const parts = [], deckY = 6.2, span = 40, h = 2.3;
    parts.push(box(span, 0.35, 2.6, 0, deckY - 0.35, 0));
    for (const zz of [-1.25, 1.25]) {
      parts.push(box(span, 0.16, 0.16, 0, deckY + h, zz), box(span, 0.18, 0.18, 0, deckY, zz));
      for (let x = -span / 2; x <= span / 2 + 0.01; x += 2.5) {
        parts.push(box(0.12, h, 0.12, x, deckY, zz));
        if (x < span / 2 - 0.1) {
          const d = new THREE.BoxGeometry(Math.hypot(2.5, h), 0.09, 0.09);
          d.rotateZ(Math.atan2(h, 2.5) * ((Math.round(x / 2.5) % 2) ? 1 : -1)); d.translate(x + 1.25, deckY + h / 2, zz); parts.push(d);
        }
      }
    }
    // roof sheet + supports (Accra bridges are often covered)
    const roof = box(span + 1, 0.06, 3.4, 0, deckY + h + 0.35, 0);
    for (const x of [-span / 2 + 2, -span / 2 + 6, span / 2 - 6, span / 2 - 2]) parts.push(cyl(0.22, 0.22, deckY - 0.35, 10, x, 0, 0));
    // stair towers: one straight flight each side, running parallel to the road, plus a landing
    const run = 6.1, rise = deckY, steps = 18, slope = Math.atan2(rise, run), sl = Math.hypot(rise, run);
    for (const sx of [-1, 1]) {
      const x0 = sx * (span / 2 + 1.2);
      for (let i = 0; i < steps; i++) parts.push(box(1.8, 0.16, 0.38, x0, i * (rise / steps), -7.3 + i * (run / steps)));
      parts.push(box(2.4, 0.3, 2.6, x0, deckY - 0.3, 0));
      for (const ex of [-1, 1]) {
        for (const yy of [0.15, 1.15]) {
          const st = new THREE.BoxGeometry(0.1, yy < 1 ? 0.32 : 0.08, sl);
          st.rotateX(-slope); st.translate(x0 + ex * 0.95, rise / 2 + yy, -7.3 + run / 2 - 0.15); parts.push(st);
        }
        parts.push(cyl(0.11, 0.11, deckY, 8, x0 + ex * 1.05, 0, 1.25), cyl(0.11, 0.11, deckY - 0.3, 8, x0 + ex * 1.05, 0, -1.25));
        parts.push(box(0.08, 1.1, 2.6, x0 + ex * 1.18, deckY, 0));
      }
    }
    const steel = std({ color: col(0x3f5a55), metalness: 0.6, roughness: 0.5 });
    const m = new THREE.Mesh(merge(parts), steel); m.castShadow = true; m.receiveShadow = true; g.add(m);
    const rm = new THREE.Mesh(roof, std({ color: col(0x8c9599), metalness: 0.6, roughness: 0.4 })); rm.castShadow = true; g.add(rm);
    // banner on both fascia
    const tex = signTexture(1024, 96, (c, w, hh) => {
      const kente = ['#c8102e', '#f2c200', '#0a7a3f', '#111'];
      for (let i = 0; i < 40; i++) { c.fillStyle = kente[i % 4]; c.fillRect(i * 26, 0, 26, 12); c.fillRect(i * 26, hh - 12, 26, 12); }
      c.fillStyle = '#fbf6ea'; c.fillRect(0, 12, w, hh - 24);
      c.fillStyle = '#1b1b1b'; c.font = 'bold 48px Georgia, serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText('AKWAABA  ·  WELCOME TO ACCRA', w / 2, hh / 2 + 2);
    });
    for (const zz of [-1.36, 1.36]) {
      const b = new THREE.Mesh(new THREE.PlaneGeometry(24, 2.2), std({ map: tex, roughness: 0.7 }));
      b.position.set(0, deckY + 1.1, zz); if (zz < 0) b.rotation.y = Math.PI; g.add(b);
    }
    scene.add(g);
    ROAD.bridgeT = t;
  })();

  /* ---- Bus shelters ---- */
  const shelterParts = merge([
    box(6, 0.12, 2.2, 0, 2.6, 0), box(6, 0.1, 0.1, 0, 2.48, -1.0),
    cyl(0.06, 0.06, 2.6, 8, -2.8, 0, -0.9), cyl(0.06, 0.06, 2.6, 8, 2.8, 0, -0.9),
    cyl(0.06, 0.06, 2.6, 8, -2.8, 0, 0.9), cyl(0.06, 0.06, 2.6, 8, 2.8, 0, 0.9),
    box(4.5, 0.08, 0.5, 0, 0.5, 0.6), box(0.08, 0.5, 0.5, -2, 0, 0.6), box(0.08, 0.5, 0.5, 2, 0, 0.6)
  ]);
  const shelterGlass = box(5.6, 1.8, 0.03, 0, 0.6, 1.05);
  const shelters = [];
  for (const [z, s] of [[-120, -1], [-112, 1], [150, 1], [140, -1]]) {
    const t = roadTAtZ(z), f = frameAt(C, t);
    shelters.push({ p: f.p.clone().addScaledVector(f.side, s * 11.2).setY(0.18), r: f.theta + (s > 0 ? Math.PI / 2 : -Math.PI / 2) });
  }
  addInstances(shelterParts, std({ color: col(0xd9d5cb), metalness: 0.5, roughness: 0.4 }), shelters);
  addInstances(shelterGlass, std({ color: col(0x9fb7c0), transparent: true, opacity: 0.35, roughness: 0.05, metalness: 0.2 }), shelters, { cast: false });

  /* ---- Overhead direction sign before the junction (southbound) ---- */
  (function gantry() {
    const t = roadTAtZ(Zi - 85), f = frameAt(C, t);
    const g = new THREE.Group(); g.position.copy(f.p); g.rotation.y = f.theta;
    const frame = merge([cyl(0.22, 0.26, 7.4, 10, -11.4, 0, 0), cyl(0.22, 0.26, 7.4, 10, 11.4, 0, 0),
      box(23.4, 0.45, 0.45, 0, 6.5, 0), box(23.4, 0.25, 0.25, 0, 7.35, 0.05)]);
    const m1 = new THREE.Mesh(frame, MAT.steel); m1.castShadow = true; m1.receiveShadow = true; g.add(m1);
    const tex = signTexture(1024, 320, (c, w, h) => {
      c.fillStyle = '#0f5a32'; c.fillRect(0, 0, w, h);
      c.strokeStyle = '#f5f5f0'; c.lineWidth = 8; c.strokeRect(10, 10, w - 20, h - 20);
      c.fillStyle = '#f5f5f0'; c.textBaseline = 'middle'; c.textAlign = 'center';
      c.font = 'bold 64px Arial, sans-serif'; c.fillText('←   Independence Ave   →', w / 2, 108);
      c.fillRect(60, 162, w - 120, 4);
      c.font = 'bold 56px Arial, sans-serif'; c.fillText('↑   Liberation Road', w / 2, 236);
    });
    // faces south-bound drivers (who travel toward local +z), so the panel looks toward -z
    const back = new THREE.Mesh(box(9.8, 3.2, 0.12, -5.4, 5.75, -0.32), MAT.steelDark); back.castShadow = true; g.add(back);
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 3), std({ map: tex, roughness: 0.6, emissive: col(0xffffff), emissiveIntensity: 0 }));
    panel.material.emissiveMap = tex; NIGHT_EMISSIVE.push({ mat: panel.material, base: 0.25 });
    panel.position.set(-5.4, 7.35, -0.39); panel.rotation.y = Math.PI;
    g.add(panel);
    scene.add(g);
  })();

  /* ---- Billboards on the west side ---- */
  const boards = [
    { z: -230, draw: (c, w, h) => {
      const gr = c.createLinearGradient(0, 0, w, h); gr.addColorStop(0, '#0a7a3f'); gr.addColorStop(1, '#064d29');
      c.fillStyle = gr; c.fillRect(0, 0, w, h);
      const kente = ['#c8102e', '#f2c200', '#0a7a3f', '#111'];
      for (let i = 0; i < 64; i++) { c.fillStyle = kente[i % 4]; c.fillRect(i * 16, h - 34, 16, 34); }
      c.fillStyle = '#f2c200'; c.font = 'bold 120px Georgia, serif'; c.textAlign = 'left'; c.textBaseline = 'alphabetic';
      c.fillText('Akwaaba.', 50, 190);
      c.fillStyle = '#fff'; c.font = '48px Arial, sans-serif'; c.fillText('You are welcome in the Gateway to Africa', 54, 280);
    } },
    { z: 120, draw: (c, w, h) => {
      c.fillStyle = '#f6efe2'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#c8102e'; c.fillRect(0, 0, 24, h);
      c.fillStyle = '#1d1d1d'; c.font = 'bold 96px Georgia, serif'; c.textAlign = 'left';
      c.fillText('Made in Ghana.', 70, 170);
      c.fillStyle = '#5b4a33'; c.font = '50px Arial, sans-serif'; c.fillText('Buy local · Build local · Grow together', 74, 262);
      c.fillStyle = '#f2c200'; c.beginPath(); c.arc(w - 110, 110, 60, 0, Math.PI * 2); c.fill();
      c.fillStyle = '#111'; c.beginPath();
      for (let i = 0; i < 10; i++) { const r = i % 2 ? 18 : 44, a = -Math.PI / 2 + i * Math.PI / 5; c.lineTo(w - 110 + Math.cos(a) * r, 110 + Math.sin(a) * r); }
      c.fill();
    } }
  ];
  boards.forEach((b) => {
    const t = roadTAtZ(b.z), f = frameAt(C, t);
    const g = new THREE.Group(); g.position.copy(f.p.clone().addScaledVector(f.side, -25)); g.rotation.y = f.theta + Math.PI / 2 - 0.4;
    const post = merge([cyl(0.35, 0.4, 7, 10, 0, 0, 0), box(13, 0.15, 0.9, 0, 6.6, 0.6), box(13.2, 5.4, 0.35, 0, 7, -0.05)]);
    const pm = new THREE.Mesh(post, MAT.steelDark); pm.castShadow = true; pm.receiveShadow = true; g.add(pm);
    const face = new THREE.Mesh(new THREE.PlaneGeometry(12.8, 5), std({ map: signTexture(1024, 400, b.draw), roughness: 0.55, emissive: col(0xffffff), emissiveIntensity: 0 }));
    NIGHT_EMISSIVE.push({ mat: face.material, base: 0.35 });
    face.material.emissiveMap = face.material.map;
    face.position.set(0, 9.7, 0.14); g.add(face);
    scene.add(g);
  });

  /* ---- Street-name blades ---- */
  const blade = (text) => signTexture(512, 96, (c, w, h) => {
    c.fillStyle = '#0d4f8b'; c.fillRect(0, 0, w, h); c.strokeStyle = '#fff'; c.lineWidth = 5; c.strokeRect(6, 6, w - 12, h - 12);
    c.fillStyle = '#fff'; c.font = 'bold 54px Arial, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, w / 2, h / 2 + 2);
  });
  [[Xc + 12, Zi - 22, 'Liberation Road', 0], [Xc - 22, Zi + 12, 'Independence Ave', Math.PI / 2], [roadPoint(roadTAtZ(-300), 12).x, -300, 'Liberation Road', 0]].forEach(([x, z, text, ry]) => {
    const g = new THREE.Group(); g.position.set(x, 0.18, z); g.rotation.y = ry;
    const p = new THREE.Mesh(cyl(0.05, 0.05, 3, 8), MAT.paintBlack); p.castShadow = true; g.add(p);
    const tx = blade(text);
    for (const s of [1, -1]) { const b = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 0.4), std({ map: tx, roughness: 0.5 })); b.position.set(0, 2.85, s * 0.03); if (s < 0) b.rotation.y = Math.PI; g.add(b); }
    scene.add(g);
  });

  /* ---- Median & verge planting ---- */
  const plantAlong = (curve, t0, t1, every, fn) => { const L = curve.getLength(); for (let d = t0 * L; d < t1 * L; d += every) fn(d / L, frameAt(curve, d / L)); };
  plantAlong(C, 0.02, 0.98, 34, (t, f) => {
    if (Math.abs(t - ROAD.tInt) * ROAD.L < 30) return;
    const p = f.p.clone().addScaledVector(f.tan, 17);
    addRoyalPalm(p.x, p.z, 0.92);
  });
  plantAlong(C, 0.02, 0.98, 5.5, (t, f) => {
    if (Math.abs(t - ROAD.tInt) * ROAD.L < 24) return;
    if (rand() < 0.55) addShrub(f.p.x + f.side.x * rr(-1, 1), f.p.z + f.side.z * rr(-1, 1), rr(0.6, 0.9), 0.55, 0.2);
  });
  plantAlong(ROAD.indep, 0.3, 0.7, 34, (t, f) => { if (Math.abs(f.p.x - Xc) > 30) addRoyalPalm(f.p.x + 17, f.p.z, 0.9); });
  // shade trees on verges (avoid compounds and gates — the compounds plant their own frontage)
  plantAlong(C, 0.0, 1.0, 21, (t, f) => {
    for (const s of [-1, 1]) {
      const p = f.p.clone().addScaledVector(f.side, s * rr(16, 18.5));
      if (Math.abs(t - ROAD.tInt) * ROAD.L < 34) continue;
      if (s > 0 && ((p.z > -500 && p.z < -205) || (p.z > 262 && p.z < 450))) continue; // compound frontages
      if (rand() < 0.8) addTree(p.x, p.z);
    }
  });
}]);

/* =====================================================================
   04 · JUBILEE HOUSE — seat of Ghana's presidency on Liberation Road.
   Massing follows the Asante Golden Stool: a broad podium, a glazed
   central column, four flaring supports, and a curved "seat" whose ends
   sweep upward — about eleven storeys in all. Cream stone with gilded trim.
   Local frame: +Z is the front (faces west, toward Liberation Road).
   ===================================================================== */
const JUB = { pos: new THREE.Vector3(170, 0, -345), rot: -Math.PI / 2 };
/** local (x, z) inside the compound → world Vector3 */
function jw(x, z, y = 0) { return new THREE.Vector3(JUB.pos.x - z, y, JUB.pos.z + x); }

/** A Ghana flag that ripples in the breeze. Pivot at the hoist edge. */
const FLAGS = [];
function makeFlag(w, h) {
  const g = new THREE.PlaneGeometry(w, h, 18, 8); g.translate(w / 2, 0, 0);
  const m = new THREE.Mesh(g, std({ map: TEX.flag, side: THREE.DoubleSide, roughness: 0.75 }));
  m.castShadow = true;
  m.userData.base = Float32Array.from(g.attributes.position.array);
  m.userData.w = w; m.userData.phase = rand() * 10;
  FLAGS.push(m);
  return m;
}
UPDATERS.push((dt, t) => {
  FLAGS.forEach((m) => {
    const p = m.geometry.attributes.position, b = m.userData.base, w = m.userData.w;
    for (let i = 0; i < p.count; i++) {
      const x = b[i * 3], y = b[i * 3 + 1], k = x / w;
      p.setZ(i, Math.sin(x * 1.5 - t * 4.2 + m.userData.phase + y * 0.4) * 0.32 * k + Math.sin(x * 3.1 - t * 6.3) * 0.07 * k);
      p.setY(i, y - k * k * 0.18);
    }
    p.needsUpdate = true; m.geometry.computeVertexNormals();
  });
});
function flagpole(parent, x, y, z, h, fw) {
  const pole = new THREE.Mesh(merge([cyl(0.09, 0.14, h, 10), new THREE.SphereGeometry(0.22, 12, 8).translate(0, h + 0.15, 0)]), MAT.steel);
  pole.position.set(x, y, z); pole.castShadow = true; parent.add(pole);
  const f = makeFlag(fw, fw * 2 / 3); f.position.set(x + 0.12, y + h - fw / 3 - 0.3, z); parent.add(f);
  return f;
}

BUILD.push(['Raising Jubilee House', function buildJubilee() {
  const J = new THREE.Group(); J.position.copy(JUB.pos); J.rotation.y = JUB.rot; scene.add(J);
  const add = (geo, mat, o = {}) => addMesh(geo, mat, Object.assign({ parent: J }, o));

  // Materials
  const cream = std({ map: tiled(TEX.cream, 2.4), color: col(0xfffaf0), roughness: 0.55, emissive: col(0xffd9a0), emissiveIntensity: 0 });
  cream.emissiveMap = cream.map;
  NIGHT_EMISSIVE.push({ mat: cream, base: 0.16 }); // warm uplighting after dark
  const podF = makeFacade({ bays: 8, floors: 3, bayW: 3.6, floorH: 4.2, wall: 0xeee2c8, glass: '#2b2a25', glassTop: '#6d6553', frame: '#8f6c2c', glassY: [0.1, 0.9], mullions: 2, transom: true, litRatio: 0.5 });
  const seatF = makeFacade({ bays: 10, floors: 5, bayW: 3.2, floorH: 3.8, wall: 0xf3e9d3, glass: '#2e2d29', glassTop: '#7d7462', frame: '#a37b31', glassX: [0.05, 0.95], glassY: [0.24, 0.82], mullions: 3, bands: '#c49a45', litRatio: 0.55 });
  const waistF = makeFacade({ bays: 14, floors: 4, bayW: 1.6, floorH: 3.8, wall: 0x9a7636, glass: '#25231f', glassTop: '#6a6152', frame: '#b08a3e', glassX: [0.07, 0.93], glassY: [0.03, 0.97], mullions: 1, litRatio: 0.6 });
  const podMat = facadeMat(podF, { nightLevel: 1.1 });
  const seatMat = facadeMat(seatF, { nightLevel: 1.0 });
  const waistMat = facadeMat(waistF, { nightLevel: 1.3 });
  const goldTrim = MAT.goldLeaf;

  /* ---------- Terrace & podium (floors 1–3) ---------- */
  add(worldUV(box(132, 1.2, 80, 0, 0, 2), 3), MAT.slabsWarm);
  for (let i = 0; i < 6; i++) add(worldUV(box(44 - i * 0.6, 0.2, 1.0, 0, i * 0.2, 42 + 5 - i * 0.8), 3), MAT.slabsWarm);
  add(worldUV(box(102, 12.8, 56, 0, 1.2, 0), 1), podMat);
  add(worldUV(box(105, 1.1, 59, 0, 14, 0), 2.4), cream);                    // podium roof slab / cornice
  add(worldUV(box(104, 0.35, 58, 0, 13.65, 0), 2.4), goldTrim, { cast: false }); // gilded band under cornice
  // front colonnade + deep canopy
  const colGeo = [];
  for (let x = -45; x <= 45.01; x += 6) {
    if (Math.abs(x) < 12) continue;
    colGeo.push(cyl(0.55, 0.6, 12.6, 16, x, 1.2, 32.5));
    colGeo.push(cyl(0.85, 0.75, 0.5, 16, x, 13.2, 32.5));
  }
  add(merge(colGeo), cream);
  add(worldUV(box(104, 0.9, 7.5, 0, 13.4, 31.2), 2.4), cream);
  // grand portico: double-height porch on four drum columns with a gilded fascia
  const porch = [];
  for (const x of [-10.5, -3.5, 3.5, 10.5]) porch.push(cyl(0.95, 1.05, 10.6, 24, x, 1.2, 40), cyl(1.4, 1.2, 0.6, 24, x, 11.8, 40));
  add(merge(porch), cream);
  add(worldUV(box(28, 1.5, 13, 0, 12.4, 35.5), 2.4), cream);
  add(box(28.4, 0.5, 13.4, 0, 12.2, 35.5), goldTrim, { cast: false });
  add(box(22, 9.8, 0.4, 0, 1.2, 28.3), MAT.glassBronze);                   // entrance glazing
  for (let x = -10; x <= 10; x += 2.5) add(box(0.18, 9.8, 0.3, x, 1.2, 28.5), goldTrim, { cast: false });

  /* ---------- The central column (glazed atrium) ---------- */
  add(worldUV(box(46, 18, 32, 0, 14.8, 0), 1), waistMat);
  const fins = [];
  for (let x = -22.5; x <= 22.51; x += 3) for (const z of [16.4, -16.4]) fins.push(box(0.25, 17.6, 0.9, x, 15, z));
  add(merge(fins), goldTrim);

  /* ---------- Four flaring supports ("launch-pad" legs) ---------- */
  const legs = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const c = new THREE.QuadraticBezierCurve3(new THREE.Vector3(sx * 37, 14.8, sz * 16), new THREE.Vector3(sx * 39, 25, sz * 15), new THREE.Vector3(sx * 47, 36.2, sz * 13.5));
    legs.push(taperedTube(c, 1.7, 3.5, 22, 20));
    const base = new THREE.TorusGeometry(1.95, 0.3, 10, 28); base.rotateX(Math.PI / 2); base.translate(sx * 37, 15.25, sz * 16);
    legs.push(base);
  }
  const legGeo = merge(legs.slice().filter((g, i) => i % 2 === 0));
  add(legGeo, cream);
  add(merge(legs.filter((g, i) => i % 2 === 1)), goldTrim);

  /* ---------- The seat: crescent with upswept ends ---------- */
  const yb = (x) => 30.5 + 8.5 * Math.pow(x / 62, 2);
  const yt = (x) => 42 + 14.5 * Math.pow(x / 64, 2);
  const shape = new THREE.Shape();
  shape.moveTo(-60, yb(-60));
  for (let x = -60; x <= 60; x += 2.5) shape.lineTo(x, yb(x));
  shape.lineTo(64.5, yt(64.5));
  for (let x = 64.5; x >= -64.5; x -= 2.5) shape.lineTo(x, yt(x));
  shape.lineTo(-64.5, yt(-64.5));
  shape.closePath();
  let seat = new THREE.ExtrudeGeometry(shape, { depth: 36, bevelEnabled: true, bevelThickness: 0.8, bevelSize: 0.7, bevelSegments: 2, curveSegments: 4 });
  seat.translate(0, 0, -18);
  seat = worldUV(seat, 1);
  // gentle convex bulge in plan, strongest mid-span — the seat reads as a soft, carved form
  const bulge = (x) => 1 + 0.13 * (1 - Math.pow(x / 65, 2));
  {
    const p = seat.attributes.position;
    for (let i = 0; i < p.count; i++) p.setZ(i, p.getZ(i) * bulge(p.getX(i)));
    seat.computeVertexNormals();
  }
  const seatMesh = add(seat, [seatMat, cream]);
  seatMesh.name = 'jubilee-seat';
  // gilded edges: top and bottom arrises, front and back
  const edgeTube = (fy, zs, inset) => {
    const pts = [];
    for (let x = -64; x <= 64.01; x += 2) {
      const xx = clamp(x, -63.5, 63.5);
      pts.push(new THREE.Vector3(xx, fy(xx) + inset, zs * 18.9 * bulge(xx)));
    }
    return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 90, 0.42, 8, false);
  };
  add(merge([edgeTube(yt, 1, -0.2), edgeTube(yt, -1, -0.2), edgeTube((x) => yb(clamp(x, -59.5, 59.5)), 1, 0.25), edgeTube((x) => yb(clamp(x, -59.5, 59.5)), -1, 0.25)]), goldTrim);
  // a continuous gilded string-course across the seat face at mid height
  const midPts = []; for (let x = -61; x <= 61.01; x += 2) midPts.push(new THREE.Vector3(x, (yb(x) + yt(x)) / 2 - 1.2, 18.75 * bulge(x)));
  add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(midPts), 80, 0.18, 6, false), goldTrim, { cast: false });
  // rooftop services and the presidential standard
  add(worldUV(box(18, 2.6, 12, 0, 41.6, -2), 2), cream);
  flagpole(J, 0, 44.2, 2, 9, 3.4);

  /* ---------- Rear residence and office wings ---------- */
  const wingF = makeFacade({ bays: 8, floors: 3, bayW: 3.4, floorH: 3.8, wall: 0xf0e6cf, glass: '#2d2c28', glassTop: '#6d6553', frame: '#7c5d27', glassY: [0.15, 0.85], mullions: 2, litRatio: 0.4 });
  const wingMat = facadeMat(wingF, { nightLevel: 0.9 });
  const wing = (w, h, d, x, z) => {
    add(worldUV(box(w, h, d, x, 0, z), 1), wingMat);
    add(worldUV(box(w + 1.6, 0.9, d + 1.6, x, h, z), 2.4), cream);
    add(box(w + 1.7, 0.25, d + 1.7, x, h - 0.25, z), goldTrim, { cast: false });
  };
  wing(30, 11.4, 64, -92, -14);
  wing(30, 11.4, 64, 92, -14);
  wing(70, 7.6, 30, 0, -104);         // presidential villa
  add(worldUV(box(26, 1, 10, 0, 7.6, -88), 2.4), cream);
  for (const x of [-11, -4, 4, 11]) add(cyl(0.5, 0.55, 7.6, 14, x, 0, -86), cream);
  // villa pool
  add(worldUV(box(26, 0.5, 11, 0, 0, -132), 3), MAT.slabsWarm);
  const poolW = new THREE.PlaneGeometry(22, 7); poolW.rotateX(-Math.PI / 2); poolW.translate(0, 0.42, -132);
  add(poolW, std({ color: col(0x2f9fb5), roughness: 0.05, metalness: 0.1, normalMap: TEX.waterN, normalScale: new THREE.Vector2(0.2, 0.2) }), { cast: false });

  /* ---------- Grounds: lawns, ceremonial drive, fountain roundabout ---------- */
  const lawn = new THREE.PlaneGeometry(272, 330); lawn.rotateX(-Math.PI / 2); lawn.translate(0, 0.02, -24);
  add(worldUV(lawn, 1), MAT.lawn, { cast: false });
  const pave = [];
  pave.push(box(12, 0.06, 64, 0, 0.02, 112));    // drive from the gate
  pave.push(box(12, 0.06, 18, 0, 0.02, 52));     // drive to the portico
  pave.push(box(70, 0.06, 18, 0, 0.02, 50));     // drop-off apron
  pave.push(box(20, 0.06, 30, -60, 0.02, 52), box(20, 0.06, 30, 60, 0.02, 52)); // official parking
  add(worldUV(merge(pave), 3), MAT.slabs, { cast: false });
  const ring = new THREE.RingGeometry(15.5, 24.5, 64); ring.rotateX(-Math.PI / 2); ring.translate(0, 0.07, 78);
  add(worldUV(ring, 9), MAT.asphalt, { cast: false });
  const ringEdge = new THREE.RingGeometry(24.5, 25.3, 64); ringEdge.rotateX(-Math.PI / 2); ringEdge.translate(0, 0.09, 78);
  add(ringEdge, MAT.paintWhite, { cast: false });
  // fountain: stepped stone basin, water, tiered gilded bowls
  const basin = new THREE.LatheGeometry([[0, 0], [15.4, 0], [15.4, 0.8], [14.6, 0.8], [14.6, 0.35], [0, 0.35]].map(([r, y]) => new THREE.Vector2(r, y)), 64);
  basin.translate(0, 0, 78); add(worldUV(basin, 3), MAT.slabsWarm);
  const water = new THREE.CircleGeometry(14.6, 64); water.rotateX(-Math.PI / 2); water.translate(0, 0.62, 78);
  const waterMat = MAT.water.clone(); waterMat.normalMap = TEX.waterN.clone(); waterMat.normalMap.needsUpdate = true; waterMat.normalMap.repeat.set(0.12, 0.12);
  add(worldUV(water, 1), waterMat, { cast: false });
  UPDATERS.push((dt, t) => { waterMat.normalMap.offset.set(t * 0.012, t * 0.008); });
  const tiers = new THREE.LatheGeometry([[0, 0], [1.2, 0], [1.1, 2.4], [5.2, 2.6], [5.4, 3.0], [1.0, 3.1], [0.8, 5.6], [3.0, 5.8], [3.1, 6.1], [0.6, 6.2], [0.5, 8], [1.4, 8.1], [1.4, 8.4], [0.3, 8.5], [0.15, 9.6], [0, 9.8]].map(([r, y]) => new THREE.Vector2(r, y)), 40);
  tiers.translate(0, 0.35, 78); add(tiers, MAT.gold);
  JUB.fountain = jw(0, 78, 0);

  // fountain spray: arcing droplets (additive points)
  {
    const N = 900, geo = new THREE.BufferGeometry(), pos = new Float32Array(N * 3), seed = new Float32Array(N * 4);
    for (let i = 0; i < N; i++) { seed[i * 4] = rand(); seed[i * 4 + 1] = rand(); seed[i * 4 + 2] = rand() * 6.283; seed[i * 4 + 3] = rand(); }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0xdff4ff, size: 0.22, transparent: true, opacity: 0.7, depthWrite: false });
    const pts = new THREE.Points(geo, mat); pts.position.set(0, 0, 78); pts.frustumCulled = false; J.add(pts);
    UPDATERS.push((dt, t) => {
      for (let i = 0; i < N; i++) {
        const s = seed[i * 4], k = seed[i * 4 + 1], a = seed[i * 4 + 2], tier = seed[i * 4 + 3];
        const life = (t * 0.6 + s) % 1;
        let r0, y0, vr, vy;
        if (tier < 0.4) { r0 = 0.1; y0 = 9.8; vr = 2.2 + k * 1.2; vy = 6.5 + k * 2; }   // crown jet
        else if (tier < 0.7) { r0 = 3.0; y0 = 6.1; vr = 1.4 + k; vy = 1.2; }           // middle overflow
        else { r0 = 5.4; y0 = 3.0; vr = 1.6 + k; vy = 1.0; }                            // lower overflow
        const tt = life * 1.6, r = r0 + vr * tt, y = y0 + vy * tt - 4.9 * tt * tt;
        pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = Math.max(0.65, y); pos[i * 3 + 2] = Math.sin(a) * r;
      }
      geo.attributes.position.needsUpdate = true;
    });
  }

  // Ceremonial flags across the drop-off
  for (const x of [-27, -21, 21, 27]) flagpole(J, x, 0, 61, 16, 3.6);

  // Drive lamps (bronze posts with lantern heads)
  const lampPost = merge([cyl(0.09, 0.13, 4.6, 10), cyl(0.2, 0.24, 0.5, 10), cyl(0.28, 0.18, 0.55, 10, 0, 4.6, 0)]);
  const lantern = new THREE.SphereGeometry(0.34, 16, 12); lantern.translate(0, 5.45, 0);
  const posts = [];
  for (let z = 96; z <= 138; z += 7) for (const x of [-7.2, 7.2]) posts.push({ p: jw(x, z), r: 0 });
  for (let a = 0; a < 12; a++) { const ang = a / 12 * Math.PI * 2; posts.push({ p: jw(Math.cos(ang) * 26.5, 78 + Math.sin(ang) * 26.5), r: 0 }); }
  addInstances(lampPost, MAT.bronze, posts);
  addInstances(lantern, MAT.lampHead, posts);
  posts.forEach((it) => LAMP_GLOWS.push(it.p.clone().setY(5.45)));

  // Official motorcade parked on the apron
  JUB.cars = [];
  for (let i = 0; i < 4; i++) JUB.cars.push({ x: -60 + (i % 2 ? 5 : -5), z: 42 + Math.floor(i / 2) * 9, r: 0 });
  for (let i = 0; i < 4; i++) JUB.cars.push({ x: 60 + (i % 2 ? 5 : -5), z: 42 + Math.floor(i / 2) * 9, r: 0 });

  /* ---------- Perimeter: stone plinth, pillars with gilded lamps, steel railings, gate ---------- */
  const FRONT = 142, X0 = -135, X1 = 135, BACK = -182;
  const wallParts = [], pillars = [], bars = [];
  const gateHalf = 9;
  const frontRun = (x0, x1) => {
    wallParts.push(box(x1 - x0, 0.9, 0.6, (x0 + x1) / 2, 0, FRONT));
    wallParts.push(box(x1 - x0, 0.12, 0.7, (x0 + x1) / 2, 2.55, FRONT));
    for (let x = x0; x <= x1 + 0.01; x += 6) pillars.push({ p: jw(x, FRONT), r: 0 });
    for (let x = x0; x < x1; x += 0.16) bars.push({ p: jw(x, FRONT, 0.9), r: 0 });
  };
  frontRun(X0, -gateHalf); frontRun(gateHalf, X1);
  { // drive-mode colliders for the compound (world coordinates)
    const B = (lx, lz, w, d) => { const c = jw(lx, lz); DRIVE_COLLIDERS.push({ x: c.x, z: c.z, hx: d / 2, hz: w / 2, rot: 0 }); };
    B((X0 - gateHalf) / 2, FRONT, -gateHalf - X0, 0.8); B((X1 + gateHalf) / 2, FRONT, X1 - gateHalf, 0.8);
    B(X0, (FRONT + BACK) / 2, 0.6, FRONT - BACK); B(X1, (FRONT + BACK) / 2, 0.6, FRONT - BACK); B(0, BACK, X1 - X0, 0.6);
    for (const s2 of [-1, 1]) B(s2 * (gateHalf + 5.5), FRONT - 1.5, 9, 7);           // gatehouses
    B(0, 0, 102, 56);                                                                     // podium and office block
    for (const x of [-10.5, -3.5, 3.5, 10.5]) { const c = jw(x, 40); DRIVE_COLLIDERS.push({ x: c.x, z: c.z, r: 1.05 }); }
    for (let x = -45; x <= 45.01; x += 6) if (Math.abs(x) >= 12) { const c = jw(x, 32.5); DRIVE_COLLIDERS.push({ x: c.x, z: c.z, r: 0.62 }); }
    const f = jw(0, 78); DRIVE_COLLIDERS.push({ x: f.x, z: f.z, r: 23 });              // fountain basin
    for (const c of JUB.cars) { const p = jw(c.x, c.z); DRIVE_COLLIDERS.push({ x: p.x, z: p.z, hx: 2.6, hz: 1.0, rot: 0 }); }
    JUB.terrace = { c: jw(0, 2), hx: 40, hz: 66, h: 1.2 };
  }
  // side & rear walls: rendered masonry with coping
  wallParts.push(box(0.5, 3, FRONT - BACK, X0, 0, (FRONT + BACK) / 2), box(0.5, 3, FRONT - BACK, X1, 0, (FRONT + BACK) / 2), box(X1 - X0, 3, 0.5, 0, 0, BACK));
  add(worldUV(merge(wallParts), 2.4), cream);
  const pillarGeo = merge([box(0.85, 2.9, 0.85, 0, 0, 0), box(1.05, 0.2, 1.05, 0, 2.9, 0)]);
  const pillarCap = merge([cyl(0.12, 0.2, 0.25, 10, 0, 3.1, 0), new THREE.SphereGeometry(0.24, 12, 8).translate(0, 3.55, 0)]);
  addInstances(worldUV(pillarGeo, 2.4), cream, pillars);
  addInstances(pillarCap, MAT.goldLeaf, pillars);
  addInstances(merge([cyl(0.02, 0.02, 1.65, 5), new THREE.ConeGeometry(0.045, 0.14, 6).translate(0, 1.72, 0)]), MAT.paintBlack, bars, { cast: true });
  // gate: twin gatehouses, black-and-gold gate leaves, barrier
  for (const s of [-1, 1]) {
    const gx = s * (gateHalf + 5.5);
    add(worldUV(box(9, 4.2, 7, gx, 0, FRONT - 1.5), 2.4), cream);
    add(box(9.8, 0.3, 7.8, gx, 4.2, FRONT - 1.5), goldTrim, { cast: false });
    const roof = new THREE.ConeGeometry(6.6, 2.4, 4, 1); roof.rotateY(Math.PI / 4); roof.scale(1, 1, 0.8); roof.translate(gx, 5.7, FRONT - 1.5);
    add(roof, MAT.roofTiles);
    add(box(3, 1.6, 0.1, gx - s * 1.5, 1.3, FRONT + 2.05), MAT.glassBronze, { cast: false });
    // gate leaf
    const leaf = [];
    for (let x = 0; x < gateHalf - 0.4; x += 0.22) leaf.push(cyl(0.025, 0.025, 2.9, 5, s * (0.3 + x), 0.2, FRONT + 0.3));
    leaf.push(box(gateHalf - 0.3, 0.12, 0.12, s * (gateHalf / 2), 0.4, FRONT + 0.3), box(gateHalf - 0.3, 0.12, 0.12, s * (gateHalf / 2), 2.9, FRONT + 0.3));
    // hinge each leaf at its outer post so it can swing open for an arriving car
    const hinge = new THREE.Group(); hinge.position.set(s * gateHalf, 0, FRONT + 0.3); J.add(hinge);
    const lg = merge(leaf); lg.translate(-s * gateHalf, 0, -(FRONT + 0.3));
    addMesh(lg, MAT.paintBlack, { parent: hinge });
    const tg = box(gateHalf - 0.3, 0.3, 0.14, s * (gateHalf / 2), 2.2, FRONT + 0.3); tg.translate(-s * gateHalf, 0, -(FRONT + 0.3));
    addMesh(tg, goldTrim, { parent: hinge, cast: false });
    DRIVE_GATES.push({ pivot: hinge, side: s, open: 0, at: jw(0, FRONT) });
  }
  add(box(0.4, 1.1, 0.4, -7, 0, FRONT + 6), MAT.paintWhite);
  const boom = box(13.5, 0.14, 0.14, -0.4, 1.0, FRONT + 6); add(boom, std({ color: col(0xd32f2f), roughness: 0.5 }));

  /* ---------- Planting ---------- */
  for (let z = 92; z <= 140; z += 8) for (const x of [-10.5, 10.5]) { const p = jw(x, z); addRoyalPalm(p.x, p.z, 1.05); }
  for (let a = 0; a < 10; a++) { const ang = a / 10 * Math.PI * 2 + 0.3, p = jw(Math.cos(ang) * 31, 78 + Math.sin(ang) * 31); addRoyalPalm(p.x, p.z, 1.12); }
  // parterres flanking the drive: clipped box hedges framing flower beds
  for (const s of [-1, 1]) {
    const cx = s * 46;
    for (const [z0, z1] of [[86, 132]]) {
      const hp = (x1, z1_, x2, z2) => { const a = jw(x1, z1_), b = jw(x2, z2); addHedge(a.x, a.z, b.x, b.z, 0.8, 0.8); };
      hp(cx - 26, z0, cx + 26, z0); hp(cx - 26, z1, cx + 26, z1); hp(cx - 26, z0, cx - 26, z1); hp(cx + 26, z0, cx + 26, z1);
      // four flower beds around a central flamboyant tree, separated by gravel walks
      const zc = (z0 + z1) / 2;
      for (const bx of [-1, 1]) for (const bz of [-1, 1]) {
        const bed = new THREE.PlaneGeometry(20, 17); bed.rotateX(-Math.PI / 2);
        bed.translate(cx + bx * 12.5, 0.07, zc + bz * 11);
        add(worldUV(bed, 3.2), MAT.flowerbed, { cast: false });
        const hb = (x1, z1_, x2, z2) => { const a = jw(x1, z1_), b = jw(x2, z2); addHedge(a.x, a.z, b.x, b.z, 0.45, 0.45); };
        const X0 = cx + bx * 12.5 - 10, X1 = cx + bx * 12.5 + 10, Z0 = zc + bz * 11 - 8.5, Z1 = zc + bz * 11 + 8.5;
        hb(X0, Z0, X1, Z0); hb(X0, Z1, X1, Z1); hb(X0, Z0, X0, Z1); hb(X1, Z0, X1, Z1);
        const tp = jw(cx + bx * 21, zc + bz * 18.5); addShrub(tp.x, tp.z, 1.3, 0);
      }
      const gravel = new THREE.PlaneGeometry(50, 44); gravel.rotateX(-Math.PI / 2); gravel.translate(cx, 0.05, zc);
      add(worldUV(gravel, 3), MAT.slabsWarm, { cast: false });
      const c = jw(cx, zc); addTree(c.x, c.z, 1, 1.1);
    }
  }
  // shrub belts along the inside of the fence and around the building terrace
  for (let x = X0 + 4; x < X1 - 4; x += 3.2) { if (Math.abs(x) < 18) continue; const p = jw(x, FRONT - 3 - rand() * 2); addShrub(p.x, p.z, rr(0.9, 1.5), 0.45); }
  for (let x = -64; x <= 64; x += 3) for (const z of [-42, 46.5]) { if (z > 0 && Math.abs(x) < 26) continue; const p = jw(x, z); addShrub(p.x, p.z, rr(0.7, 1.0), 0.6); }
  // shade trees and coconut palms in the side and rear gardens
  for (let i = 0; i < 70; i++) {
    const x = rr(X0 + 8, X1 - 8), z = rr(BACK + 8, FRONT - 14);
    const inBuilding = Math.abs(x) < 72 && z > -60 && z < 52;
    const inWings = Math.abs(Math.abs(x) - 92) < 20 && z > -50 && z < 22;
    const inVilla = Math.abs(x) < 42 && z > -145 && z < -84;
    const inForecourt = Math.abs(x) < 75 && z > 40;
    if (inBuilding || inWings || inVilla || inForecourt) continue;
    const p = jw(x, z);
    if (rand() < 0.35) addCoconut(p.x, p.z); else addTree(p.x, p.z);
  }
  JUB.front = jw(0, 60); JUB.top = jw(0, 0, 58);
}]);

/* =====================================================================
   05 · ACCRA GHANA TEMPLE — 57 Independence Avenue, at the corner with
   Liberation Road. Namibia Pearl granite, a single centred tower and
   spire carrying a gilded statue (27.4 m overall), palm-frond pilasters,
   art-glass windows. On the 6-acre grounds: the Ghana Missionary Training
   Centre (sun-path shading fins), the stake centre, arrival centre,
   reflecting pool, palms, native flowers.
   Local frame for the temple: +Z = front (faces west, to Liberation Road).
   ===================================================================== */
const TMP = { pos: new THREE.Vector3(118, 0, 362), rot: -Math.PI / 2 };
function tw(x, z, y = 0) { return new THREE.Vector3(TMP.pos.x - z, y, TMP.pos.z + x); }

/** Leaded art-glass with a stylised palm-frond motif; doubles as the night emissive map. */
function artGlassTexture() {
  const c = makeCanvas(128, 512), g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 512);
  gr.addColorStop(0, '#d9c27a'); gr.addColorStop(0.5, '#c7b47c'); gr.addColorStop(1, '#a99a62');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 512);
  for (let i = 0; i < 70; i++) {
    g.fillStyle = pick(['rgba(70,120,90,0.55)', 'rgba(170,120,50,0.5)', 'rgba(240,225,170,0.5)', 'rgba(60,90,120,0.45)']);
    g.fillRect(rand() * 128, rand() * 512, 10 + rand() * 18, 10 + rand() * 30);
  }
  // palm frond motif up the centre
  g.strokeStyle = 'rgba(40,90,60,0.85)'; g.lineWidth = 4;
  g.beginPath(); g.moveTo(64, 470); g.lineTo(64, 120); g.stroke();
  for (let i = 0; i < 12; i++) {
    const y = 150 + i * 26, l = 46 - i * 1.5;
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(64, y); g.quadraticCurveTo(64 + s * l * 0.6, y - 10, 64 + s * l, y + 14); g.stroke(); }
  }
  g.strokeStyle = 'rgba(30,26,20,0.9)'; g.lineWidth = 3; // leading
  for (let y = 0; y <= 512; y += 64) { g.beginPath(); g.moveTo(0, y); g.lineTo(128, y); g.stroke(); }
  g.beginPath(); g.moveTo(32, 0); g.lineTo(32, 512); g.moveTo(96, 0); g.lineTo(96, 512); g.stroke();
  g.lineWidth = 8; g.strokeRect(0, 0, 128, 512);
  const t = texFromCanvas(c); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t;
}
/** Rectangle with a semicircular head, as a flat shape (for arched windows). */
function archShape(w, h) {
  const s = new THREE.Shape(), r = w / 2;
  s.moveTo(-r, 0); s.lineTo(r, 0); s.lineTo(r, h - r); s.absarc(0, h - r, r, 0, Math.PI, false); s.lineTo(-r, 0);
  return s;
}
/** Simple stylised herald with a trumpet (gilded), standing on a ball; faces local -z. */
function heraldStatue() {
  const parts = [];
  const robe = new THREE.LatheGeometry([[0.001, 0], [0.34, 0], [0.33, 0.1], [0.26, 0.55], [0.2, 0.95], [0.21, 1.2], [0.24, 1.42], [0.2, 1.55], [0.09, 1.62], [0.001, 1.64]].map(([r, y]) => new THREE.Vector2(r, y)), 20);
  parts.push(robe);
  parts.push(new THREE.SphereGeometry(0.125, 16, 12).translate(0, 1.76, 0));
  // raised right arm and trumpet pointing up and forward (−z)
  const arm = taperedTube(new THREE.CatmullRomCurve3([new THREE.Vector3(0.18, 1.5, 0), new THREE.Vector3(0.22, 1.66, -0.12), new THREE.Vector3(0.1, 1.75, -0.24)]), 0.06, 0.045, 6, 8);
  parts.push(arm);
  const horn = taperedTube(new THREE.LineCurve3(new THREE.Vector3(0.02, 1.76, -0.14), new THREE.Vector3(0.02, 2.25, -0.95)), 0.025, 0.04, 6, 10);
  const bell = new THREE.ConeGeometry(0.11, 0.18, 16, 1, true); bell.rotateX(Math.PI / 2 + 0.55); bell.translate(0.02, 2.27, -1.0);
  parts.push(horn, bell);
  // left arm down along the robe, and a drape over the shoulder
  parts.push(taperedTube(new THREE.CatmullRomCurve3([new THREE.Vector3(-0.2, 1.48, 0), new THREE.Vector3(-0.27, 1.2, 0.02), new THREE.Vector3(-0.24, 0.95, 0.04)]), 0.055, 0.045, 6, 8));
  const g = merge(parts); g.scale(1.25, 1.25, 1.25);
  return g;
}

BUILD.push(['Setting the temple stones', function buildTemple() {
  const T = new THREE.Group(); T.position.copy(TMP.pos); T.rotation.y = TMP.rot; scene.add(T);
  const add = (geo, mat, o = {}) => addMesh(geo, mat, Object.assign({ parent: T }, o));

  // Materials: Namibia Pearl granite, uplit after dark
  const granite = std({ map: tiled(TEX.granite, 2.4), color: col(0xdcdad3), roughness: 0.38, metalness: 0.02, emissive: col(0xfff1dc), emissiveIntensity: 0 });
  granite.emissiveMap = granite.map;
  NIGHT_EMISSIVE.push({ mat: granite, base: 0.42 });
  const graniteDark = std({ map: tiled(TEX.granite, 2.4), color: col(0xb9b6ae), roughness: 0.32 });
  const ag = artGlassTexture();
  const artGlass = std({ map: ag, emissiveMap: ag, emissive: col(0xffe2a8), emissiveIntensity: 0, roughness: 0.12, metalness: 0.35 });
  NIGHT_EMISSIVE.push({ mat: artGlass, base: 1.35 });
  const recess = std({ color: col(0x8b877d), roughness: 0.6 });
  const bronzeDoor = MAT.bronze;

  const W = 36, D = 30, H = 8.4;  // main block (x × z), wall height above plinth
  DRIVE_COLLIDERS.push({ x: TMP.pos.x, z: TMP.pos.z, hx: D / 2 + 3.5, hz: W / 2 + 0.7, rot: 0 });
  const PL = 0.9;                  // plinth height
  const gParts = [], dParts = [], glassParts = [], recParts = [], goldParts = [];

  /* ---------- plinth, walls, frieze, cornice, parapet ---------- */
  dParts.push(box(W + 1.4, PL, D + 1.4, 0, 0, 0));
  gParts.push(box(W, H, D, 0, PL, 0));
  gParts.push(box(W + 0.5, 0.65, D + 0.5, 0, PL + H, 0));          // frieze
  gParts.push(box(W + 1.3, 0.35, D + 1.3, 0, PL + H + 0.65, 0));   // cornice
  gParts.push(box(W + 0.9, 0.2, D + 0.9, 0, PL + H + 1.0, 0));
  gParts.push(box(W + 0.4, 0.85, D + 0.4, 0, PL + H + 1.2, 0));    // parapet
  const roofY = PL + H + 1.2;

  /* ---------- pilasters with palm-frond capitals; tall art-glass windows between ---------- */
  const capital = (x, z, rotY) => {
    // flared capital suggesting a crown of palm fronds
    const c = new THREE.CylinderGeometry(0.62, 0.42, 0.75, 4, 1); c.rotateY(Math.PI / 4);
    c.scale(1, 1, 0.55); c.rotateY(rotY); c.translate(x, PL + H - 0.75 + 0.375, z);
    return c;
  };
  const elevation = (len, place, skip) => {
    const n = Math.round(len / 3.6), step = len / n;
    for (let i = 0; i <= n; i++) {
      const u = -len / 2 + i * step;
      gParts.push(place(u, (x, z, ry) => { const g = box(0.85, H - 0.75, 0.32); g.rotateY(ry); g.translate(x, PL, z); return g; }));
      gParts.push(place(u, (x, z, ry) => capital(x, z, ry)));
      if (i < n) {
        const m = u + step / 2;
        if (skip && skip(m)) continue;
        glassParts.push(place(m, (x, z, ry) => { const g = new THREE.PlaneGeometry(1.35, 5.3); g.translate(0, 2.65, -0.09); g.rotateY(ry); g.translate(x, PL + 1.3, z); return g; }));
        recParts.push(place(m, (x, z, ry) => { const g = box(1.75, 5.75, 0.06); g.translate(0, 0, -0.13); g.rotateY(ry); g.translate(x, PL + 1.08, z); return g; }));
        gParts.push(place(m, (x, z, ry) => { const g = box(2.0, 0.28, 0.32); g.rotateY(ry); g.translate(x, PL + 0.82, z); return g; })); // sill
        gParts.push(place(m, (x, z, ry) => { const g = box(1.9, 0.5, 0.2); g.rotateY(ry); g.translate(x, PL + 6.75, z); return g; }));   // lintel
      }
    }
  };
  const off = 0.16;
  elevation(W, (u, f) => f(u, D / 2 + off, 0), (m) => Math.abs(m) < 7);                       // front (west)
  elevation(W, (u, f) => f(u, -D / 2 - off, Math.PI));                                     // back
  elevation(D, (u, f) => f(W / 2 + off, u, Math.PI / 2));                                   // south side
  elevation(D, (u, f) => f(-W / 2 - off, u, -Math.PI / 2));                                 // north side

  /* ---------- entrance pavilion ---------- */
  const EZ = D / 2;
  gParts.push(box(13, 7.6, 4.6, 0, PL, EZ + 2.2));
  gParts.push(box(13.8, 0.5, 5.2, 0, PL + 7.6, EZ + 2.3), box(14.3, 0.3, 5.6, 0, PL + 8.1, EZ + 2.4));
  for (const x of [-6.1, -2.05, 2.05, 6.1]) gParts.push(box(0.85, 7.6, 0.35, x, PL, EZ + 4.6));
  for (const x of [-4.1, 0, 4.1]) {
    recParts.push(box(3.0, 4.6, 0.08, x, PL, EZ + 4.52));
    const door = merge([box(2.7, 4.3, 0.06, x, PL, EZ + 4.6)]);
    add(door, MAT.glassBronze, { cast: false });
    add(merge([box(0.1, 4.3, 0.1, x - 1.35, PL, EZ + 4.64), box(0.1, 4.3, 0.1, x + 1.35, PL, EZ + 4.64), box(0.1, 4.3, 0.1, x, PL, EZ + 4.64), box(2.8, 0.12, 0.1, x, PL + 4.3, EZ + 4.64), box(2.8, 0.1, 0.1, x, PL + 3.3, EZ + 4.64)]), bronzeDoor);
  }
  // canopy over the doors
  gParts.push(box(12.4, 0.3, 2.4, 0, PL + 4.55, EZ + 5.6));
  goldParts.push(box(12.5, 0.08, 2.45, 0, PL + 4.52, EZ + 5.6));
  // engraved inscription panel
  {
    const tex = signTexture(1024, 200, (g, w, h) => {
      g.drawImage(TEX.granite.image, 0, 0, 1024, 200);
      g.fillStyle = 'rgba(60,58,54,0.92)'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.font = '600 54px Georgia, "Times New Roman", serif';
      g.fillText('HOLINESS TO THE LORD', w / 2, 62);
      g.font = '600 46px Georgia, "Times New Roman", serif';
      g.fillText('THE HOUSE OF THE LORD', w / 2, 140);
    });
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(10.2, 2), std({ map: tex, roughness: 0.4, emissive: col(0xfff1dc), emissiveMap: tex, emissiveIntensity: 0 }));
    NIGHT_EMISSIVE.push({ mat: panel.material, base: 0.42 });
    panel.position.set(0, PL + 6.4, EZ + 4.53); T.add(panel);
  }
  // landing and entry steps
  dParts.push(box(15, PL, 5.6, 0, 0, EZ + 3.0));
  for (let i = 0; i < 4; i++) dParts.push(box(15 - i * 0.4, 0.22, 1.1, 0, i * 0.225, EZ + 8.6 - i * 0.9));

  /* ---------- the tower and spire (centred over the building) ---------- */
  // stage A: square tower rising from the roof
  const A = 10.6, aY = roofY, aH = 4.4;
  gParts.push(box(A, aH, A, 0, aY, 0));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) gParts.push(box(1.0, aH, 1.0, sx * (A / 2 - 0.3), aY, sz * (A / 2 - 0.3)));
  gParts.push(box(A + 0.8, 0.45, A + 0.8, 0, aY + aH, 0), box(A + 0.4, 0.3, A + 0.4, 0, aY + aH + 0.45, 0));
  // stage B: belfry-like lantern with paired arches
  const B = 7.4, bY = aY + aH + 0.75, bH = 3.4;
  gParts.push(box(B, bH, B, 0, bY, 0));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) gParts.push(box(0.8, bH, 0.8, sx * (B / 2 - 0.2), bY, sz * (B / 2 - 0.2)));
  gParts.push(box(B + 0.7, 0.35, B + 0.7, 0, bY + bH, 0), box(B + 0.3, 0.3, B + 0.3, 0, bY + bH + 0.35, 0));
  for (let k = 0; k < 4; k++) {
    const ry = k * Math.PI / 2;
    const put = (g, d, y) => { g.translate(0, y, d); g.rotateY(ry); return g; };
    glassParts.push(put(new THREE.ShapeGeometry(archShape(1.9, 3.3), 12), A / 2 + 0.02, aY + 0.5));
    recParts.push(put(new THREE.ShapeGeometry(archShape(2.5, 3.75), 12), A / 2 + 0.01, aY + 0.3));
    for (const xo of [-1.45, 1.45]) {
      const g1 = new THREE.ShapeGeometry(archShape(1.1, 2.3), 12); g1.translate(xo, 0, 0);
      glassParts.push(put(g1, B / 2 + 0.02, bY + 0.5));
      const g2 = new THREE.ShapeGeometry(archShape(1.45, 2.6), 12); g2.translate(xo, 0, 0);
      recParts.push(put(g2, B / 2 + 0.01, bY + 0.38));
    }
  }
  // spire (tapered octagon) → gilded ball → herald statue; 27.4 m overall
  const sY = bY + bH + 0.65;
  const statueH = 2.75, spireTop = 27.4 - statueH - 0.45;
  const spireH = spireTop - sY;
  const spire = new THREE.CylinderGeometry(0.14, 2.7, spireH, 8, 1); spire.rotateY(Math.PI / 8); spire.translate(0, sY + spireH / 2, 0);
  gParts.push(spire);
  const spireBase = new THREE.CylinderGeometry(2.95, 3.05, 0.4, 8); spireBase.rotateY(Math.PI / 8); spireBase.translate(0, sY + 0.2, 0);
  gParts.push(spireBase);
  goldParts.push(new THREE.SphereGeometry(0.32, 16, 12).translate(0, spireTop + 0.18, 0));
  const statue = heraldStatue(); statue.rotateY(Math.PI); // trumpet toward local −z = east
  statue.translate(0, spireTop + 0.4, 0);
  add(statue, MAT.goldLeaf);
  TMP.spireTop = tw(0, 0, 27.4);

  /* ---------- commit merged batches ---------- */
  add(worldUV(merge(gParts), 2.4), granite);
  add(worldUV(merge(dParts), 2.4), graniteDark);
  add(merge(recParts), recess, { cast: false });
  add(merge(glassParts), artGlass, { cast: false });
  add(merge(goldParts), MAT.goldLeaf);
  add(worldUV(box(W - 2, 0.1, D - 2, 0, roofY - 0.05, 0), 6), MAT.roof, { cast: false });

  /* ---------- grounds: plaza, reflecting pool, walks, fence, gates ---------- */
  // granite-paved plaza around the temple
  add(worldUV(box(54, 0.12, 50, 0, 0, 1), 3), MAT.slabs, { cast: false });
  // axial walk to Liberation Road (local +z toward the gate at world x ≈ 24)
  const FRONT = TMP.pos.x - 24; // local z of the gate line
  add(worldUV(box(7, 0.1, FRONT - 26, 0, 0, 26 + (FRONT - 26) / 2), 3), MAT.slabs, { cast: false });
  // reflecting pool on the axis, with a granite coping; the walk splits around it
  const poolZ = 26 + (FRONT - 26) * 0.52, poolL = 30;
  add(worldUV(merge([box(11.6, 0.55, 0.8, 0, 0, poolZ - poolL / 2 - 0.4), box(11.6, 0.55, 0.8, 0, 0, poolZ + poolL / 2 + 0.4), box(0.8, 0.55, poolL, -5.4, 0, poolZ), box(0.8, 0.55, poolL, 5.4, 0, poolZ)]), 2.4), graniteDark);
  add(box(10, 0.12, poolL, 0, 0.06, poolZ), std({ color: col(0x1f3f45), roughness: 0.6 }), { cast: false });
  for (const s of [-1, 1]) add(worldUV(box(3.4, 0.1, poolL + 6, s * 7.6, 0, poolZ), 3), MAT.slabs, { cast: false });
  const pw = new THREE.PlaneGeometry(10.4, poolL); pw.rotateX(-Math.PI / 2); pw.translate(0, 0.44, poolZ);
  const poolMat = MAT.water.clone(); poolMat.color = col(0x24515a); poolMat.normalMap = TEX.waterN.clone(); poolMat.normalMap.needsUpdate = true;
  poolMat.normalMap.repeat.set(0.09, 0.09); poolMat.normalScale = new THREE.Vector2(0.12, 0.12); poolMat.roughness = 0.02;
  add(worldUV(pw, 1), poolMat, { cast: false });
  UPDATERS.push((dt, t) => poolMat.normalMap.offset.set(t * 0.006, t * 0.004));
  TMP.pool = tw(0, poolZ);
  // cross walks to the stake centre (north) and the MTC / parking (east)
  add(worldUV(box(78, 0.1, 5, -22, 0, 22), 3), MAT.slabs, { cast: false });

  // lantern posts along the walks
  const postGeo = merge([cyl(0.07, 0.1, 3.6, 10), cyl(0.18, 0.22, 0.4, 10)]);
  const lampGeo = merge([box(0.38, 0.55, 0.38, 0, 3.6, 0), new THREE.ConeGeometry(0.34, 0.3, 4).rotateY(Math.PI / 4).translate(0, 4.3, 0)]);
  const posts = [];
  for (let z = 30; z < FRONT - 4; z += 9) for (const x of [-5, 5]) {
    if (Math.abs(z - poolZ) < poolL / 2 + 2) continue;
    posts.push({ p: tw(x, z), r: 0 });
  }
  for (let z = poolZ - poolL / 2; z <= poolZ + poolL / 2 + 0.1; z += 10) for (const x of [-9.8, 9.8]) posts.push({ p: tw(x, z), r: 0 });
  addInstances(postGeo, MAT.paintBlack, posts);
  addInstances(lampGeo, MAT.lampHead, posts);
  posts.forEach((it) => LAMP_GLOWS.push(it.p.clone().setY(3.9)));
  // benches facing the pool
  const bench = merge([box(2.2, 0.08, 0.5, 0, 0.45, 0), box(2.2, 0.45, 0.06, 0, 0.5, -0.24), box(0.08, 0.45, 0.45, -1, 0, 0), box(0.08, 0.45, 0.45, 1, 0, 0)]);
  const benches = [];
  for (const z of [poolZ - 9, poolZ, poolZ + 9]) { benches.push({ p: tw(-10.6, z), r: TMP.rot + Math.PI / 2 }); benches.push({ p: tw(10.6, z), r: TMP.rot - Math.PI / 2 }); }
  addInstances(bench, std({ color: col(0x6b4a2e), roughness: 0.7 }), benches);

  /* ---------- Perimeter: granite piers + white wrought-iron fence (world coordinates) ---------- */
  const fence = { piers: [], bars: [], rails: [] };
  const fenceLine = (x1, z1, x2, z2, gaps = []) => {
    const len = Math.hypot(x2 - x1, z2 - z1), dx = (x2 - x1) / len, dz = (z2 - z1) / len, ry = -Math.atan2(dz, dx);
    { // colliders: one box per run between gaps
      const cuts = [[-1e9, 0], ...gaps.slice().sort((a, b) => a[0] - b[0]), [len, 1e9]];
      for (let i = 0; i < cuts.length - 1; i++) {
        const a = Math.max(0, cuts[i][1]), b = Math.min(len, cuts[i + 1][0]); if (b - a < 0.5) continue;
        const m = (a + b) / 2; DRIVE_COLLIDERS.push({ x: x1 + dx * m, z: z1 + dz * m, hx: (b - a) / 2, hz: 0.35, rot: Math.atan2(dz, dx) });
      }
    }
    for (let d = 0; d <= len + 0.01; d += 5) {
      if (gaps.some(([a, b]) => d > a - 0.5 && d < b + 0.5)) continue;
      fence.piers.push({ p: new THREE.Vector3(x1 + dx * d, 0, z1 + dz * d), r: ry });
    }
    for (let d = 0; d < len; d += 0.14) {
      if (gaps.some(([a, b]) => d > a && d < b)) continue;
      fence.bars.push({ p: new THREE.Vector3(x1 + dx * d, 0.6, z1 + dz * d), r: ry });
    }
    for (let d = 0; d < len; d += 5) {
      if (gaps.some(([a, b]) => d + 2.5 > a && d + 2.5 < b)) continue;
      fence.rails.push({ p: new THREE.Vector3(x1 + dx * (d + 2.5), 0, z1 + dz * (d + 2.5)), r: ry });
    }
  };
  const X0 = 24, Z0 = 285, X1 = 214, Z1 = 452;
  const gateZ = TMP.pos.z;
  fenceLine(X0, Z0, X0, Z1, [[gateZ - Z0 - 7, gateZ - Z0 + 7]]);           // along Liberation Road
  fenceLine(X0, Z0, X1, Z0, [[142 - X0, 158 - X0]]);                       // along Independence Ave (MTC gate)
  addInstances(worldUV(merge([box(0.75, 0.6, 0.75), box(0.62, 1.9, 0.62, 0, 0.6, 0), box(0.85, 0.18, 0.85, 0, 2.5, 0), cyl(0.0, 0.3, 0.35, 4, 0, 2.68, 0).rotateY(Math.PI / 4)]), 2.4), granite, fence.piers);
  addInstances(merge([cyl(0.018, 0.018, 1.75, 5), new THREE.ConeGeometry(0.05, 0.16, 6).translate(0, 1.83, 0)]), MAT.paintWhite, fence.bars, { cast: true });
  addInstances(merge([box(5, 0.6, 0.45, 0, 0, 0), box(5, 0.07, 0.07, 0, 1.05, 0), box(5, 0.07, 0.07, 0, 2.05, 0)]), MAT.paintWhite, fence.rails);
  // rear & south boundary: rendered wall
  const rearWall = merge([box(X1 - X0, 2.6, 0.4, (X0 + X1) / 2, 0, Z1), box(0.4, 2.6, Z1 - Z0, X1, 0, (Z0 + Z1) / 2)]);
  addMesh(worldUV(rearWall, 4), std({ map: tiled(TEX.render, 4), color: col(0xe8e1d2), roughness: 0.9 }));
  // main gate: tall granite piers and white gates (open)
  for (const s of [-1, 1]) {
    const p = new THREE.Vector3(X0, 0, gateZ + s * 7.2);
    const pier = worldUV(merge([box(1.4, 3.6, 1.4), box(1.7, 0.3, 1.7, 0, 3.6, 0), box(1.0, 0.5, 1.0, 0, 3.9, 0)]), 2.4);
    pier.translate(p.x, 0, p.z); addMesh(pier, granite);
    const lamp = new THREE.SphereGeometry(0.3, 14, 10); lamp.translate(p.x, 4.75, p.z); addMesh(lamp, MAT.lampHead);
    LAMP_GLOWS.push(new THREE.Vector3(p.x, 4.75, p.z));
    const leaf = [];
    for (let d = 0; d < 6.2; d += 0.16) leaf.push(cyl(0.02, 0.02, 2.4, 5, 0, 0.1, 0).translate(d, 0, 0));
    leaf.push(box(6.3, 0.08, 0.08, 3.15, 0.3, 0), box(6.3, 0.08, 0.08, 3.15, 2.45, 0));
    const lg = merge(leaf);
    const lm = addMesh(lg, MAT.paintWhite);
    lm.position.set(p.x + 0.8, 0, p.z - s * 0.7); lm.rotation.y = s > 0 ? Math.PI / 2 - 1.2 : -(Math.PI / 2 - 1.2); // swung open inward
  }

  /* ---------- Ghana Missionary Training Centre: four storeys, sun-path shading fins ---------- */
  const mtcF = makeFacade({ bays: 10, floors: 4, bayW: 2.8, floorH: 4.0, wall: 0xe9e6df, glass: '#20302f', glassTop: '#5e7372', frame: '#5d5a52', glassY: [0.08, 0.88], mullions: 2, litRatio: 0.62 });
  const mtcMat = facadeMat(mtcF, { nightLevel: 1.1 });
  const MX0 = 172, MX1 = 194, MZ0 = 314, MZ1 = 404, MH = 12;
  addMesh(worldUV(box(MX1 - MX0, MH, MZ1 - MZ0, (MX0 + MX1) / 2, 0, (MZ0 + MZ1) / 2), 1), mtcMat);
  DRIVE_COLLIDERS.push({ x: (MX0 + MX1) / 2, z: (MZ0 + MZ1) / 2, hx: (MX1 - MX0) / 2, hz: (MZ1 - MZ0) / 2, rot: 0 }, { x: 174, z: 410, hx: 20, hz: 9, rot: 0 });
  addMesh(worldUV(box(MX1 - MX0 + 3, 0.8, MZ1 - MZ0 + 3, (MX0 + MX1) / 2, MH, (MZ0 + MZ1) / 2), 3), MAT.concrete);
  addMesh(worldUV(box(40, 8, 18, 174, 0, 410), 1), mtcMat);                       // south teaching wing
  addMesh(worldUV(box(42, 0.8, 20.5, 174, 8, 410), 3), MAT.concrete);
  addMesh(box(9, 0.5, 14, 167.5, 4.4, 336), MAT.concrete);                        // entrance canopy (west)
  for (const z of [330, 342]) addMesh(cyl(0.25, 0.25, 4.4, 10, 164, 0, z), MAT.concrete);
  // fins: rotation sweeps along the facade like the sun's path across a day
  const fins = [], finGeo = box(0.28, MH - 0.8, 1.5);
  for (let z = MZ0 + 1.2; z < MZ1 - 0.5; z += 1.6) {
    const k = (z - MZ0) / (MZ1 - MZ0), a = Math.sin(k * Math.PI * 2.2) * 0.55;
    fins.push({ p: new THREE.Vector3(MX0 - 0.9, 0.4, z), r: a });
    fins.push({ p: new THREE.Vector3(MX1 + 0.9, 0.4, z), r: -a });
  }
  for (let x = 155.5; x < 171; x += 1.6) {
    const k = (x - 155.5) / 16, a = Math.sin(k * Math.PI * 1.6) * 0.5 + Math.PI / 2;
    fins.push({ p: new THREE.Vector3(x, 0.4, 400.2), r: a, s: new THREE.Vector3(1, 0.65, 1) });
  }
  addInstances(worldUV(finGeo, 3), std({ map: tiled(TEX.render, 3), color: col(0xd8cbb2), roughness: 0.8 }), fins);
  // rooftop solar array
  const solar = [];
  for (let z = MZ0 + 8; z < MZ1 - 8; z += 3.2) for (const x of [MX0 + 5, MX0 + 12, MX0 + 19]) solar.push({ p: new THREE.Vector3(x, MH + 1.1, z), r: 0, rx: 0, rz: 0.18 });
  addInstances(box(5.6, 0.08, 2.6), std({ color: col(0x1b2633), metalness: 0.6, roughness: 0.25 }), solar, { cast: false });
  // MTC courtyard trees
  for (let i = 0; i < 7; i++) addTree(rr(160, 165), 322 + i * 11, i % 3 === 0 ? 1 : 0);

  /* ---------- Stake centre: chapel with classic white steeple + classroom wing ---------- */
  const stakeWall = std({ map: tiled(TEX.render, 4), color: col(0xe3d6bd), roughness: 0.85 });
  const brickBase = std({ map: tiled(TEX.render, 2), color: col(0x9a6a4f), roughness: 0.9 });
  const SC = new THREE.Group(); SC.position.set(62, 0, 314); scene.add(SC);
  DRIVE_COLLIDERS.push({ x: 62, z: 314, hx: 13.2, hz: 9.2, rot: 0 }, { x: 62, z: 328.5, hx: 11.2, hz: 7.2, rot: 0 });
  const sAdd = (geo, mat) => addMesh(geo, mat, { parent: SC });
  sAdd(worldUV(box(26, 7.2, 18, 0, 0, 0), 4), stakeWall);              // chapel
  sAdd(worldUV(box(26.4, 1.2, 18.4, 0, 0, 0), 2), brickBase);
  sAdd(worldUV(box(22, 4.4, 14, 0, 0, 14.5), 4), stakeWall);           // classroom wing (south)
  sAdd(worldUV(box(22.4, 1.0, 14.4, 0, 0, 14.5), 2), brickBase);
  const gable = (w, d, h, y, z) => { // hipped roof
    const g = new THREE.ConeGeometry(1, 1, 4, 1); g.rotateY(Math.PI / 4); g.scale(w * 0.74, h, d * 0.74); g.translate(0, y + h / 2, z); return g;
  };
  sAdd(worldUV(gable(29, 21, 5.2, 7.2, 0), 3), MAT.roofTiles);
  sAdd(worldUV(gable(25, 17, 3.2, 4.4, 14.5), 3), MAT.roofTiles);
  // steeple at the chapel's west end
  const st = [box(3.6, 9.5, 3.6, -14.5, 0, -4), box(4.0, 0.4, 4.0, -14.5, 9.5, -4), box(2.6, 2.6, 2.6, -14.5, 9.9, -4)];
  const cone = new THREE.CylinderGeometry(0.06, 1.55, 9, 8); cone.rotateY(Math.PI / 8); cone.translate(-14.5, 12.5 + 4.5, -4); st.push(cone);
  sAdd(worldUV(merge(st), 3), MAT.paintWhite);
  sAdd(box(1.1, 2.0, 0.05, -14.5, 10.2, -2.68), std({ color: col(0x2f3a40), roughness: 0.3 }));
  // windows & doors as dark recess panels
  const sWin = [];
  for (let x = -10; x <= 10; x += 4) sWin.push(box(1.6, 3.6, 0.06, x, 2, -9.03), box(1.6, 3.6, 0.06, x, 2, 9.03));
  for (let x = -8; x <= 8; x += 3.2) sWin.push(box(1.5, 1.6, 0.06, x, 1.9, 21.53));
  sWin.push(box(0.06, 3, 3.4, -13.03, 0, 3.5));
  sAdd(merge(sWin), MAT.glass);
  // parking court for the stake centre
  const sp = new THREE.PlaneGeometry(40, 22); sp.rotateX(-Math.PI / 2); sp.translate(62 + 40, 0.04, 314 - 4);
  addMesh(worldUV(sp, 9), MAT.asphalt, { cast: false });

  /* ---------- Arrival centre & patron housing (two storeys) ---------- */
  const arF = makeFacade({ bays: 6, floors: 2, bayW: 3.2, floorH: 3.6, wall: 0xece4d4, glass: '#2a3436', glassTop: '#647579', frame: '#4a463e', glassY: [0.15, 0.85], litRatio: 0.55 });
  const arMat = facadeMat(arF, { nightLevel: 1.0 });
  addMesh(worldUV(box(34, 7.2, 14, 60, 0, 424), 1), arMat);
  addMesh(worldUV(gable(37, 17, 3.0, 7.2, 0).translate(60, 0, 424), 3), MAT.roofTiles);
  for (const x of [48, 56, 64, 72]) addMesh(cyl(0.22, 0.22, 3.2, 10, x, 0, 416), MAT.paintWhite);
  addMesh(box(30, 0.3, 3.4, 60, 3.2, 415.8), MAT.paintWhite);

  /* ---------- parking & driveways (world) ---------- */
  const lot = new THREE.PlaneGeometry(52, 34); lot.rotateX(-Math.PI / 2); lot.translate(132, 0.04, 432);
  addMesh(worldUV(lot, 9), MAT.asphalt, { cast: false });
  const drive = new THREE.PlaneGeometry(7, 140); drive.rotateX(-Math.PI / 2); drive.translate(150, 0.035, 356);
  addMesh(worldUV(drive, 9), MAT.asphalt, { cast: false });
  const stalls = [];
  for (let x = 110; x <= 156; x += 2.8) stalls.push(box(0.12, 0.01, 5, x, 0.05, 422), box(0.12, 0.01, 5, x, 0.05, 442));
  addMesh(merge(stalls), std({ color: col(0xeeeeea), roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -2 }), { cast: false });
  TMP.parked = [];
  for (let x = 111.4; x < 156; x += 2.8) { if (rand() < 0.62) TMP.parked.push({ x, z: 422, r: Math.PI / 2 }); if (rand() < 0.55) TMP.parked.push({ x, z: 442, r: -Math.PI / 2 }); }

  /* ---------- lawns & planting ---------- */
  const lawn = new THREE.PlaneGeometry(X1 - X0, Z1 - Z0); lawn.rotateX(-Math.PI / 2); lawn.translate((X0 + X1) / 2, 0.02, (Z0 + Z1) / 2);
  addMesh(worldUV(lawn, 1), MAT.lawn, { cast: false });
  // royal palms marching beside the axial walk, coconut palms in the corners
  for (let z = 32; z < FRONT - 6; z += 11) for (const x of [-16.5, 16.5]) { const p = tw(x, z); addRoyalPalm(p.x, p.z, 1.0); }
  for (const [x, z] of [[-24, 18], [24, 18], [-24, -18], [24, -18]]) { const p = tw(x, z); addRoyalPalm(p.x, p.z, 1.15); }
  for (let i = 0; i < 10; i++) addCoconut(rr(28, 40), rr(398, 448));
  for (let i = 0; i < 8; i++) addCoconut(rr(196, 210), rr(290, 448));
  // flower beds: hibiscus, bougainvillea, ixora around the temple and the pool
  for (let a = 0; a < 360; a += 4) {
    const ang = a * DEG, rx = 30, rz = 27;
    const lx = Math.cos(ang) * rx, lz = Math.sin(ang) * rz + 1;
    if (lz > 18 && Math.abs(lx) < 6) continue; // keep the entrance clear
    const p = tw(lx, lz); addShrub(p.x, p.z, rr(0.6, 0.85), 0.7);
  }
  for (const s of [-1, 1]) {
    const bed = new THREE.PlaneGeometry(3.6, poolL + 4); bed.rotateX(-Math.PI / 2); bed.translate(s * 11.6, 0.06, poolZ);
    add(worldUV(bed, 2.6), MAT.flowerbed, { cast: false });
    for (let z = poolZ - poolL / 2 - 2; z <= poolZ + poolL / 2 + 2.1; z += 4) { const p = tw(s * 13.9, z); addShrub(p.x, p.z, 0.75, 0.9); }
  }
  { // clipped hedges outlining the front lawns
    const h = (x1, z1, x2, z2) => { const a = tw(x1, z1), b = tw(x2, z2); addHedge(a.x, a.z, b.x, b.z, 0.7, 0.7); };
    h(-4.6, 34, -4.6, FRONT - 3); h(4.6, 34, 4.6, FRONT - 3);
    h(-40, FRONT - 3, -5, FRONT - 3); h(5, FRONT - 3, 40, FRONT - 3);
  }
  // inside the fence: shrub belt + shade trees
  for (let z = Z0 + 4; z < Z1 - 4; z += 3) { if (Math.abs(z - gateZ) < 10) continue; addShrub(X0 + 3 + rand(), z, rr(0.9, 1.4), 0.5); }
  for (let x = X0 + 4; x < X1 - 4; x += 3) { if (x > 138 && x < 162) continue; addShrub(x, Z0 + 3 + rand(), rr(0.9, 1.4), 0.5); }
  for (const [x, z, t] of [[40, 300, 1], [92, 296, 0], [40, 396, 2], [96, 440, 0], [200, 300, 0], [205, 440, 1], [165, 300, 2], [36, 345, 1], [36, 380, 1], [140, 300, 1], [100, 418, 1], [86, 446, 0], [204, 360, 0], [204, 400, 2]]) addTree(x, z, t);
  // flamboyant trees and shrub islands in the open lawns south of the axis
  for (let i = 0; i < 6; i++) { const p = tw(rr(34, 52), rr(30, 80)); addTree(p.x, p.z, i % 2 ? 1 : 0, rr(0.9, 1.15)); }
  for (let i = 0; i < 6; i++) { const p = tw(rr(-56, -38), rr(40, 85)); addTree(p.x, p.z, i % 2 ? 0 : 1, rr(0.9, 1.15)); }
  for (let i = 0; i < 14; i++) { const p = tw(rr(-55, 55), rr(28, 90)); if (Math.abs(p.z - TMP.pos.z) < 22) continue; addShrub(p.x, p.z, rr(1.0, 1.6), 0.55); }
  TMP.front = tw(0, FRONT - 20);
}]);

/* =====================================================================
   06 · CITY CONTEXT — Ridge / Cantonments character: walled compounds,
   2–5 storey offices and residences with black poly water tanks on the
   roofs, overhead power lines, and a hazy low-rise city to the horizon
   punctuated by a few glass towers.
   ===================================================================== */
const ROAD_X = []; // centreline x sampled every 10 m of z (for fast lookups)
function roadXAt(z) {
  const index = clamp((z + 900) / 10, 0, ROAD_X.length - 1);
  const i = Math.floor(index);
  return lerp(ROAD_X[i], ROAD_X[Math.min(ROAD_X.length - 1, i + 1)], index - i);
}
const EXCLUDE = [
  [14, 360, -495, -200],   // Jubilee House compound (+ apron)
  [16, 222, 278, 462],     // Temple compound
  [-60, -10, -238, -220],  // billboard (approx.)
  [-60, -10, 112, 130]     // billboard (approx.)
];
function blocked(x0, x1, z0, z1, pad = 0) {
  for (const [a, b, c, d] of EXCLUDE) if (x1 + pad > a && x0 - pad < b && z1 + pad > c && z0 - pad < d) return true;
  if (z1 + pad > ROAD.Zi - 27 && z0 - pad < ROAD.Zi + 27) return true; // Independence Avenue corridor
  return false;
}

BUILD.push(['Growing the city around it', function buildCity() {
  for (let z = -900; z <= 900; z += 10) ROAD_X.push(ROAD.curve.getPointAt(roadTAtZ(z)).x);

  const variants = [
    makeFacade({ bays: 6, floors: 4, bayW: 3.2, floorH: 3.5, wall: 0xf2efe8, glass: '#2b3d4a', glassTop: '#7895a6', frame: '#c9c7c2', glassY: [0.2, 0.85], litRatio: 0.4 }),
    makeFacade({ bays: 6, floors: 4, bayW: 3.0, floorH: 3.3, wall: 0xeedfb8, glass: '#3b3a33', glassTop: '#6f6a5a', frame: '#6a4d2c', glassX: [0.25, 0.75], glassY: [0.3, 0.8], mullions: 3, litRatio: 0.45 }),
    makeFacade({ bays: 6, floors: 4, bayW: 3.4, floorH: 3.4, wall: 0xe7c9a6, glass: '#34322d', glassTop: '#776d5c', frame: '#ffffff', glassX: [0.2, 0.8], glassY: [0.28, 0.82], litRatio: 0.4 }),
    makeFacade({ bays: 6, floors: 4, bayW: 3.0, floorH: 3.4, wall: 0xd9e2e3, glass: '#2a3b44', glassTop: '#6c8796', frame: '#3b4146', glassY: [0.15, 0.9], mullions: 2, litRatio: 0.5 }),
    makeFacade({ bays: 6, floors: 4, bayW: 3.2, floorH: 3.4, wall: 0xf4e7c8, glass: '#3a3328', glassTop: '#7a6c55', frame: '#8a5a32', glassX: [0.22, 0.78], glassY: [0.26, 0.84], litRatio: 0.35 }),
    makeFacade({ bays: 6, floors: 4, bayW: 3.0, floorH: 3.3, wall: 0xf0c9a8, glass: '#3a332c', glassTop: '#75695a', frame: '#f6f1e6', glassX: [0.24, 0.76], glassY: [0.3, 0.8], mullions: 3, litRatio: 0.4 }),
    makeFacade({ bays: 6, floors: 4, bayW: 3.2, floorH: 3.3, wall: 0xd7e3cc, glass: '#33372e', glassTop: '#6f7766', frame: '#f6f1e6', glassX: [0.24, 0.76], glassY: [0.3, 0.8], mullions: 3, litRatio: 0.4 }),
    makeFacade({ bays: 6, floors: 4, bayW: 3.0, floorH: 3.3, wall: 0xf3e3a6, glass: '#3a3328', glassTop: '#7a6c55', frame: '#7a4a2a', glassX: [0.24, 0.76], glassY: [0.3, 0.8], mullions: 3, litRatio: 0.35 })
  ];
  const vMats = variants.map((v) => facadeMat(v, { nightLevel: 0.8 }));
  const batches = vMats.map(() => []);
  const roofs = [], parapets = [], metalRoofs = [], walls = [], tanks = [], acs = [];
  const ROOF_COLS = [0xa7adb0, 0x9aa1a3, 0x8e3f2a, 0x7a3a2a, 0x56606b, 0xb5b9b8, 0x6f4a35];
  const tankGeo = merge([cyl(0.62, 0.62, 1.7, 14), cyl(0.18, 0.18, 0.18, 10, 0, 1.7, 0)]);
  const acGeo = box(0.9, 0.6, 0.35);

  /** One building with roof furniture. (cx,cz) centre, rotation ry, footprint w×d, height h. */
  const building = (cx, cz, ry, w, d, h, v, pitched) => {
    const g = box(w, h, d); g.rotateY(ry); g.translate(cx, 0, cz);
    batches[v].push(worldUV(g, 1));
    DRIVE_COLLIDERS.push({ x: cx, z: cz, hx: w / 2, hz: d / 2, rot: -ry });
    if (pitched) {
      const r = new THREE.ConeGeometry(1, 1, 4, 1); r.rotateY(Math.PI / 4); r.scale(w * 0.78, 2.4, d * 0.78); r.rotateY(ry); r.translate(cx, h + 1.2, cz);
      metalRoofs.push(tint(worldUV(r, 3), pick(ROOF_COLS)));
    } else {
      const p = box(w + 0.3, 0.9, d + 0.3); p.rotateY(ry); p.translate(cx, h, cz); parapets.push(worldUV(p, 4));
      const rf = box(w - 0.3, 0.05, d - 0.3); rf.rotateY(ry); rf.translate(cx, h + 0.3, cz); roofs.push(worldUV(rf, 8));
      const cos = Math.cos(ry), sin = Math.sin(ry);
      const local = (lx, lz) => new THREE.Vector3(cx + lx * cos + lz * sin, 0, cz - lx * sin + lz * cos);
      const nt = Math.hypot(cx, cz) < 580 ? 1 + Math.floor(rand() * 3) : 0;
      for (let i = 0; i < nt; i++) tanks.push({ p: local(rr(-w / 2 + 1.5, w / 2 - 1.5), rr(-d / 2 + 1.5, d / 2 - 1.5)).setY(h + 0.3), r: 0 });
      for (let i = 0; i < nt; i++) if (rand() < 0.6) acs.push({ p: local(rr(-w / 2 + 1, w / 2 - 1), d / 2 + 0.2).setY(rr(3, h - 1)), r: ry });
    }
  };

  /* ---- Roadside rows along Liberation Road: walled plots facing the street ---- */
  const L = ROAD.L;
  for (const side of [-1, 1]) {
    let d = 30;
    while (d < L - 30) {
      const t = d / L, f = frameAt(ROAD.curve, t);
      const w = rr(18, 34), dep = rr(14, 26), h = pick([7, 7, 10.5, 10.5, 14, 17.5]) + rr(-0.4, 0.4);
      const off = rr(32, 44);
      const c = f.p.clone().addScaledVector(f.side, side * (off + dep / 2));
      const ext = Math.max(w, dep) / 2 + 2;
      if (!blocked(c.x - ext, c.x + ext, c.z - ext, c.z + ext, 6) && Math.abs(c.z) < 880) {
        building(c.x, c.z, f.theta, dep, w, h, Math.floor(rand() * vMats.length), h < 8 && rand() < 0.5);
        // compound wall along the frontage, with a gate gap
        const wl = w + 10, wp = f.p.clone().addScaledVector(f.side, side * (off - 6));
        for (const half of [-1, 1]) {
          const seg = box(wl / 2 - 2.5, 2.4, 0.3); seg.translate(half * (wl / 4 + 1.25), 0, 0);
          seg.rotateY(f.theta + Math.PI / 2); seg.translate(wp.x, 0, wp.z); walls.push(worldUV(seg, 4));
          { const o = new THREE.Vector3(half * (wl / 4 + 1.25), 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), f.theta + Math.PI / 2);
            DRIVE_COLLIDERS.push({ x: wp.x + o.x, z: wp.z + o.z, hx: (wl / 2 - 2.5) / 2, hz: 0.2, rot: -(f.theta + Math.PI / 2) }); }
        }
        if (rand() < 0.7) addTree(wp.x + f.side.x * side * 3, wp.z + f.side.z * side * 3);
        if (rand() < 0.4) addCoconut(c.x + f.side.x * side * (dep / 2 + 4), c.z + rr(-6, 6));
      }
      d += w + rr(8, 20);
    }
  }

  /* ---- Distant city: dense, leafy low-rise fabric (walled plots, pitched metal roofs),
          with a cluster of towers far to the north-east, all fading into the Harmattan haze ---- */
  const step = IS_MOBILE ? 62 : 47;
  for (let x = -1550; x <= 1550; x += step) for (let z = -1550; z <= 1550; z += step) {
    const jx = x + rr(-9, 9), jz = z + rr(-9, 9);
    const rx = roadXAt(clamp(jz, -900, 900));
    if (Math.abs(jx - rx) < 92) continue;
    const distC = Math.hypot(jx, jz);
    const towerZone = jx > 420 && jz < -650 && jx < 1300 && jz > -1500;
    // every cell gets greenery — Ridge and Cantonments are full of mature trees
    if (distC < 1150 && !blocked(jx - 16, jx + 16, jz - 16, jz + 16, 4)) {
      const nt = rand() < 0.35 ? 2 : 1;
      for (let i = 0; i < nt; i++) addTree(jx + rr(-17, 17), jz + rr(-17, 17), 3, rr(0.85, 1.35));
    }
    if (rand() < 0.16) continue;
    const w = rr(12, 26), dep = rr(10, 22);
    if (blocked(jx - w, jx + w, jz - dep, jz + dep, 12)) continue;
    let h = pick([3.6, 3.6, 7, 7, 7, 10.5, 10.5, 14]) + rr(-0.3, 0.3);
    if (towerZone && rand() < 0.1) h = rr(30, 66);
    const ry = rr(-0.2, 0.2);
    const v = h > 28 ? 3 : Math.floor(rand() * vMats.length);
    building(jx, jz, ry, w, dep, h, v, h < 8 && rand() < 0.62);
    if (h < 8 && rand() < 0.45) building(jx + Math.cos(ry) * (w / 2 + 3), jz - Math.sin(ry) * (w / 2 + 3), ry, 6, dep * 0.6, h * 0.7 + 0.5, v, true);
  }

  batches.forEach((b, i) => { if (b.length) addMesh(merge(b), vMats[i]); });
  addMesh(merge(parapets), std({ map: tiled(TEX.render, 4), color: col(0xe9e4da), roughness: 0.9 }));
  addMesh(merge(roofs), MAT.roof, { cast: false });
  if (metalRoofs.length) addMesh(merge(metalRoofs), std({ vertexColors: true, metalness: 0.55, roughness: 0.5 }));
  addMesh(merge(walls), std({ map: tiled(TEX.render, 4), color: col(0xe4d7bd), roughness: 0.9 }));
  addInstances(tankGeo, std({ color: col(0x1c1c1c), roughness: 0.55 }), tanks);
  addInstances(acGeo, std({ color: col(0xe6e6e2), roughness: 0.5 }), acs);

  /* ---- Overhead power lines on concrete poles (west verge) ---- */
  const poles = [], wireVerts = [];
  const tops = [];
  for (let d = 20; d < L - 20; d += 42) {
    const t = d / L, f = frameAt(ROAD.curve, t);
    if (Math.abs(t - ROAD.tInt) * L < 40) { tops.push(null); continue; }
    const p = f.p.clone().addScaledVector(f.side, -19.5);
    poles.push({ p: p.clone(), r: f.theta });
    tops.push([-1.1, 0, 1.1].map((o) => p.clone().addScaledVector(f.side, o).setY(9.3)));
  }
  addInstances(merge([cyl(0.13, 0.2, 9.6, 8), box(2.6, 0.14, 0.14, 0, 9.2, 0)]), MAT.concrete, poles);
  for (let i = 0; i < tops.length - 1; i++) {
    const a = tops[i], b = tops[i + 1];
    if (!a || !b) continue;
    for (let k = 0; k < 3; k++) {
      const N = 10;
      for (let j = 0; j < N; j++) {
        const s0 = j / N, s1 = (j + 1) / N;
        const sag = (s) => -1.1 * 4 * s * (1 - s);
        const p0 = a[k].clone().lerp(b[k], s0); p0.y += sag(s0);
        const p1 = a[k].clone().lerp(b[k], s1); p1.y += sag(s1);
        wireVerts.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z);
      }
    }
  }
  const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute(wireVerts, 3));
  scene.add(new THREE.LineSegments(wg, new THREE.LineBasicMaterial({ color: 0x1a1a1a, transparent: true, opacity: 0.55 })));
}]);

/* =====================================================================
   07 · TRAFFIC — cars, SUVs and trotro minibuses with simple car-
   following and a signalised Independence Avenue junction. Headlights
   and tail lights glow after sunset. Parked motorcade and temple car park.
   ===================================================================== */
const TRAFFIC = { vehicles: [], lanes: [], enabled: true, phase: 0, clock: 0 };

/** Side-profile extrusion → body with vertex colours (white body, dark glass, black tyres). */
function vehicleGeo(kind) {
  const P = {
    sedan: { body: [[-2.25, 0.32], [2.25, 0.32], [2.32, 0.72], [2.05, 0.92], [0.95, 1.0], [0.42, 1.4], [-1.0, 1.44], [-1.75, 1.04], [-2.28, 0.96]], glass: [[0.9, 1.0], [0.42, 1.37], [-0.98, 1.41], [-1.66, 1.03]], w: 1.78, wheel: 0.32, wx: 1.42 },
    suv: { body: [[-2.35, 0.4], [2.35, 0.4], [2.42, 0.95], [2.2, 1.12], [1.2, 1.18], [0.85, 1.78], [-2.2, 1.82], [-2.38, 1.6]], glass: [[1.15, 1.18], [0.86, 1.72], [-2.1, 1.76], [-2.3, 1.2]], w: 1.9, wheel: 0.38, wx: 1.5 },
    bus: { body: [[-2.7, 0.42], [2.7, 0.42], [2.78, 1.1], [2.55, 2.25], [-2.7, 2.3]], glass: [[2.5, 1.22], [2.38, 2.08], [-2.62, 2.1], [-2.62, 1.3]], w: 1.98, wheel: 0.36, wx: 1.85 }
  }[kind];
  const shape = (pts) => { const s = new THREE.Shape(); pts.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y))); s.closePath(); return s; };
  const body = new THREE.ExtrudeGeometry(shape(P.body), { depth: P.w, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 2 });
  body.translate(0, 0, -P.w / 2);
  const glass = new THREE.ExtrudeGeometry(shape(P.glass), { depth: P.w + 0.04, bevelEnabled: false });
  glass.translate(0, 0, -P.w / 2 - 0.02);
  const parts = [tint(body, 0xffffff), tint(glass, 0x14181b)];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const t = new THREE.CylinderGeometry(P.wheel, P.wheel, 0.26, 16); t.rotateX(Math.PI / 2);
    t.translate(sx * P.wx, P.wheel, sz * (P.w / 2 - 0.02)); parts.push(tint(t, 0x111111));
    const h = new THREE.CylinderGeometry(P.wheel * 0.55, P.wheel * 0.55, 0.28, 12); h.rotateX(Math.PI / 2);
    h.translate(sx * P.wx, P.wheel, sz * (P.w / 2 - 0.02)); parts.push(tint(h, 0x8a8d90));
  }
  const fx = P.body[1][0] + 0.06, rx = P.body[0][0] - 0.06;
  for (const sz of [-1, 1]) {
    parts.push(tint(box(0.06, 0.14, 0.34, fx, P.body[1][1] + 0.3, sz * (P.w / 2 - 0.3)), 0xfff6dc));
    parts.push(tint(box(0.06, 0.14, 0.3, rx, P.body[0][1] + 0.42, sz * (P.w / 2 - 0.25)), 0x8a0d0d));
  }
  if (kind === 'bus') { // trotro: roof rack and a side stripe
    parts.push(tint(box(4.2, 0.08, 1.7, -0.2, 2.42, 0), 0x2a2a2a));
    parts.push(tint(box(5.2, 0.18, P.w + 0.14, 0, 1.0, 0), 0xf2c200));
  }
  const g = merge(parts);
  return { geo: g, len: P.body[1][0] - P.body[0][0], front: fx };
}

BUILD.push(['Starting the traffic', function buildTraffic() {
  const kinds = { sedan: vehicleGeo('sedan'), suv: vehicleGeo('suv'), bus: vehicleGeo('bus') };
  const paintMat = std({ vertexColors: true, metalness: 0.55, roughness: 0.32 });
  const palette = [0xf4f4f2, 0xe9e9e6, 0x1b1c1e, 0xb8bcc0, 0x8c9196, 0x7b1e1e, 0x1e3a6b, 0xf2c200, 0xd35400, 0x2f4f3a, 0xf4f4f2, 0x9aa0a6];

  /* ---- lanes ---- */
  const Lc = ROAD.L, Li = 2800;
  const libStopS = ROAD.tInt * Lc - 19.5, libStopN = ROAD.tInt * Lc + 19.5;
  const xJ = ROAD.Xc + 1400;
  [[-3.75, 1], [-7.25, 1], [3.75, -1], [7.25, -1]].forEach(([off, dir]) => TRAFFIC.lanes.push({
    pos: (s) => roadPoint(s / Lc, off), len: Lc, dir, group: 'ns', stop: dir > 0 ? libStopS : libStopN, list: []
  }));
  [[-3.75, 1], [-7.25, 1], [3.75, -1], [7.25, -1]].forEach(([off, dir]) => TRAFFIC.lanes.push({
    pos: (s) => new THREE.Vector3(-1400 + s, 0, ROAD.Zi - off), len: Li, dir, group: 'ew', stop: dir > 0 ? xJ - 19.5 : xJ + 19.5, list: []
  }));

  /* ---- vehicles ---- */
  const count = { sedan: 0, suv: 0, bus: 0 };
  TRAFFIC.lanes.forEach((lane, li) => {
    const n = li < 4 ? 15 : 9;
    for (let i = 0; i < n; i++) {
      const kind = rand() < 0.18 ? 'bus' : rand() < 0.35 ? 'suv' : 'sedan';
      const v = { lane, kind, idx: count[kind]++, s: (i + rand() * 0.6) / n * lane.len, v: 10, v0: rr(11, 15.5), color: pick(palette), pos: new THREE.Vector3(), yaw: 0 };
      if (kind === 'bus') v.color = pick([0xf2f2f0, 0xe8e4da, 0xd9d4c4]);
      lane.list.push(v); TRAFFIC.vehicles.push(v);
    }
  });
  const meshes = {};
  for (const k of Object.keys(kinds)) {
    const im = new THREE.InstancedMesh(kinds[k].geo, paintMat, Math.max(1, count[k]));
    im.castShadow = true; im.receiveShadow = true; im.frustumCulled = false;
    im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    for (let i = 0; i < count[k]; i++) im.setColorAt(i, col(0xffffff));
    scene.add(im); meshes[k] = im;
  }
  TRAFFIC.vehicles.forEach((v) => meshes[v.kind].setColorAt(v.idx, col(v.color)));
  Object.values(meshes).forEach((m) => { if (m.instanceColor) m.instanceColor.needsUpdate = true; });

  /* ---- parked: presidential motorcade (black SUVs) and the temple car park ---- */
  const parked = { sedan: [], suv: [] };
  JUB.cars.forEach((c, i) => parked.suv.push({ p: jw(c.x, c.z), r: 0, c: 0x0e0f10 }));
  TMP.parked.forEach((c) => (rand() < 0.4 ? parked.suv : parked.sedan).push({ p: new THREE.Vector3(c.x, 0.04, c.z), r: c.r, c: pick(palette) }));
  addInstances(kinds.suv.geo, paintMat, parked.suv);
  addInstances(kinds.sedan.geo, paintMat, parked.sedan);

  /* ---- head / tail light glows (after dark) ---- */
  const NV = TRAFFIC.vehicles.length;
  const headGeo = new THREE.BufferGeometry(), tailGeo = new THREE.BufferGeometry();
  headGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NV * 6), 3));
  tailGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NV * 6), 3));
  const headMat = new THREE.PointsMaterial({ map: TEX.glow, color: 0xfff1d0, size: 3.2, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const tailMat = new THREE.PointsMaterial({ map: TEX.glow, color: 0xff2a10, size: 1.6, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const headPts = new THREE.Points(headGeo, headMat), tailPts = new THREE.Points(tailGeo, tailMat);
  headPts.frustumCulled = tailPts.frustumCulled = false;
  scene.add(headPts, tailPts);
  TRAFFIC.meshes = Object.values(meshes); TRAFFIC.lights = [headPts, tailPts];
  UPDATE_NIGHT.push((n) => { headMat.opacity = n * 0.95; tailMat.opacity = n * 0.85; });

  /* ---- signal cycle: NS green 22 s · amber 3 s · all-red 3 s · EW green 16 s · amber 3 s · all-red 3 s ---- */
  const CYCLE = [['ns', 'g', 22], ['ns', 'a', 3], ['all', 'r', 3], ['ew', 'g', 16], ['ew', 'a', 3], ['all', 'r', 3]];
  const total = CYCLE.reduce((a, c) => a + c[2], 0);
  const state = { ns: 'r', ew: 'r' };
  const setLamp = (grp, s) => { const S = SIGNALS[grp]; S.r.emissiveIntensity = s === 'r' ? 3 : 0.04; S.a.emissiveIntensity = s === 'a' ? 3 : 0.04; S.g.emissiveIntensity = s === 'g' ? 3 : 0.04; };

  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0);
  const ahead = new THREE.Vector3();
  let trafficStep = 0;
  UPDATERS.push((dt) => {
    if (!TRAFFIC.enabled) return;
    trafficStep += dt;
    if (trafficStep < 1 / 30) return;
    dt = Math.min(trafficStep, 0.1);
    trafficStep = 0;
    const player = driveMode?.motion;
    TRAFFIC.clock = (TRAFFIC.clock + dt) % total;
    let acc = 0; state.ns = 'r'; state.ew = 'r';
    for (const [g, s, d] of CYCLE) { if (TRAFFIC.clock < acc + d) { if (g !== 'all') state[g] = s; break; } acc += d; }
    setLamp('ns', state.ns); setLamp('ew', state.ew);

    for (const lane of TRAFFIC.lanes) {
      const prog = (v) => (lane.dir > 0 ? v.s : lane.len - v.s);
      lane.list.sort((a, b) => prog(a) - prog(b));
      const n = lane.list.length;
      const stopProg = lane.dir > 0 ? lane.stop : lane.len - lane.stop;
      for (let i = 0; i < n; i++) {
        const v = lane.list[i], lead = lane.list[(i + 1) % n];
        let gap = prog(lead) - prog(v); if (gap <= 0) gap += lane.len;
        gap -= (kinds[v.kind].len + kinds[lead.kind].len) / 2;
        let target = Math.min(v.v0, Math.max(0, (gap - 2.5) / 1.3));
        if (player) {
          const x = player.x - v.pos.x, z = player.z - v.pos.z;
          const cos = Math.cos(v.yaw), sin = Math.sin(v.yaw);
          const ahead = x * cos - z * sin;
          if (ahead > 0 && ahead < 40 && Math.abs(x * sin + z * cos) < 2.8) {
            target = Math.min(target, Math.max(0, (ahead - 5) / 1.5));
          }
        }
        const toStop = stopProg - prog(v) - kinds[v.kind].len / 2;
        if (state[lane.group] !== 'g' && toStop > -0.5 && toStop < 60) {
          // stop if we can; on amber, carry on when too close to brake comfortably
          const canStop = state[lane.group] === 'r' || toStop > v.v * v.v / (2 * 4.5);
          if (canStop) target = Math.min(target, Math.max(0, (toStop - 0.5) / 1.6));
        }
        const dv = target - v.v;
        v.v = Math.max(0, v.v + clamp(dv, -7 * dt, 2.6 * dt));
        v.s += v.v * dt * lane.dir;
        if (v.s > lane.len) v.s -= lane.len; if (v.s < 0) v.s += lane.len;
      }
      for (const v of lane.list) {
        const p = lane.pos(v.s);
        const a = lane.pos(clamp(v.s - 1.5, 0, lane.len)); ahead.copy(lane.pos(clamp(v.s + 1.5, 0, lane.len)));
        const dx = (ahead.x - a.x) * lane.dir, dz = (ahead.z - a.z) * lane.dir;
        v.yaw = Math.atan2(-dz, dx);
        v.pos.set(p.x, 0.03, p.z);
      }
    }
    const hp = headGeo.attributes.position.array, tp = tailGeo.attributes.position.array;
    TRAFFIC.vehicles.forEach((v, i) => {
      q.setFromAxisAngle(up, v.yaw);
      m4.compose(v.pos, q, one);
      meshes[v.kind].setMatrixAt(v.idx, m4);
      const K = kinds[v.kind], c = Math.cos(v.yaw), s = Math.sin(v.yaw), hw = 0.6;
      // local +x is forward → world (c, 0, −s); local z → world (s, 0, c)
      for (let k = 0; k < 2; k++) {
        const lz = k ? hw : -hw;
        hp[i * 6 + k * 3] = v.pos.x + c * (K.front + 0.3) + s * lz; hp[i * 6 + k * 3 + 1] = 0.75; hp[i * 6 + k * 3 + 2] = v.pos.z - s * (K.front + 0.3) + c * lz;
        tp[i * 6 + k * 3] = v.pos.x - c * (K.len / 2 + 0.1) + s * lz; tp[i * 6 + k * 3 + 1] = 0.85; tp[i * 6 + k * 3 + 2] = v.pos.z + s * (K.len / 2 + 0.1) + c * lz;
      }
    });
    headGeo.attributes.position.needsUpdate = true; tailGeo.attributes.position.needsUpdate = true;
    Object.values(meshes).forEach((m) => { m.instanceMatrix.needsUpdate = true; });
  });
}]);

/* =====================================================================
   08 · EXPERIENCE — preset viewpoints, camera flights, the guided drive
   from Jubilee House to the temple, floating labels, info cards, site-
   plan minimap, time-of-day controls.
   ===================================================================== */
const $ = (id) => document.getElementById(id);
const easeIO = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const INFO = {
  overview: { k: 'Overview', h: 'Two landmarks, one road', p: 'Jubilee House stands at the north end of Liberation Road. The Accra Ghana Temple stands at the south end, where the road meets Independence Avenue. Choose a view below, or drive the route.',
    l: [['North', 'Jubilee House'], ['South', 'Accra Ghana Temple'], ['Route', 'Liberation Road'], ['Light', 'Try golden hour and dusk']] },
  jubilee: { k: 'Seat of the Presidency', h: 'Jubilee House', p: 'This is Ghana\'s presidential palace. Its shape comes from the Asante Golden Stool: a wide base, a central column, and a curved seat whose ends sweep upward.',
    l: [['Opened', 'November 2008'], ['Height', 'About 11 storeys'], ['Also called', 'Flagstaff House'], ['Built by', 'Shapoorji Pallonji (India)']] },
  road: { k: 'The route', h: 'Liberation Road', p: 'In real life, the two landmarks are about 1.5 km apart. Here the road is about 700 m long, so you can see both in one view. Look for the painted kerbs, open drains, median palms and the Akwaaba footbridge.',
    l: [['Lanes', 'Two each way, with a median'], ['Lighting', 'Double-arm median lamps'], ['Crossing', 'Steel footbridge'], ['Real distance', 'About 1.5 km']] },
  junction: { k: 'Independence Avenue', h: 'The junction', p: 'The temple stands at the corner of Independence Avenue and Liberation Road. The traffic lights change on a live cycle, and the cars stop and go with them.',
    l: [['Signal cycle', '50 seconds'], ['Approaches', 'Four, with zebra crossings'], ['Temple gate', 'Just south, on Liberation Road']] },
  temple: { k: 'Dedicated 11 January 2004', h: 'Accra Ghana Temple', p: 'This was the first temple of The Church of Jesus Christ of Latter-day Saints in West Africa. Its walls are clad in Namibia Pearl granite. A single spire rises from the centre and carries a gilded statue of the angel Moroni.',
    l: [['Height', '27.4 m, with the statue'], ['Exterior', 'Namibia Pearl granite'], ['Floor area', '17,500 sq ft'], ['Site', '6 acres']] },
  grounds: { k: '57 Independence Avenue', h: 'The temple grounds', p: 'The grounds also hold the Ghana Missionary Training Center, which moved here in 2017, and a stake centre with a white steeple. Native flowers and palm trees fill the gardens.',
    l: [['MTC', 'Opened here in 2017'], ['MTC capacity', '800+ missionaries'], ['Stake centre', 'Chapel and classrooms'], ['Landscape', 'Native flowers and palms']] }
};

function showInfo(key) {
  const d = INFO[key]; if (!d) return;
  $('infoK').textContent = d.k; $('infoH').textContent = d.h; $('infoP').textContent = d.p;
  $('infoL').innerHTML = d.l.map(([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`).join('');
  $('info').classList.remove('hide');
}
$('infoX').addEventListener('click', () => $('info').classList.add('hide'));

/* ---------------- viewpoints ---------------- */
let VIEWS = {};
function defineViews() {
  const tZ = (z) => roadTAtZ(z);
  VIEWS = {
    overview: { p: new THREE.Vector3(-262, 250, 690), t: new THREE.Vector3(112, 0, 135) },
    jubilee: { p: jw(-78, 196, 30), t: jw(-4, 6, 26) },
    road: { p: roadPoint(tZ(-150), -42, 34), t: roadPoint(tZ(60), 6, 2) },
    junction: { p: new THREE.Vector3(ROAD.Xc - 16, 34, ROAD.Zi - 112), t: new THREE.Vector3(ROAD.Xc + 34, 0, ROAD.Zi + 34) },
    temple: { p: tw(-5, 86, 7.5), t: tw(0, 3, 10.5) },
    grounds: { p: new THREE.Vector3(-96, 128, 470), t: new THREE.Vector3(118, 0, 352) }
  };
}

let flight = null;
function flyTo(p, t, dur = 2.8) {
  stopTour(false);
  const dist = camera.position.distanceTo(p);
  if (shell.reducedMotion.matches) {
    camera.position.copy(p); controls.target.copy(t); controls.enabled = true; controls.update();
    return;
  }
  flight = { p0: camera.position.clone(), t0: controls.target.clone(), p1: p.clone(), t1: t.clone(), start: performance.now(), dur: dur * 1000, lift: clamp(dist * 0.18, 0, 140) };
  controls.enabled = false;
}
/** On tall, narrow screens pull the camera back so the subject still fits across the width. */
function fitForAspect(p, t) {
  const k = clamp(0.95 / camera.aspect, 1, 1.45);
  const q = t.clone().add(p.clone().sub(t).multiplyScalar(k));
  q.y += (k - 1) * 12;
  return q;
}
function setView(key, instant) {
  const v0 = VIEWS[key]; if (!v0) return;
  stopTour();
  const v = { p: fitForAspect(v0.p, v0.t), t: v0.t };
  document.querySelectorAll('#dock [data-view]').forEach((b) => {
    const current = b.dataset.view === key;
    b.classList.toggle('on', current); b.setAttribute('aria-pressed', current);
  });
  showInfo(key);
  if (instant) { camera.position.copy(v.p); controls.target.copy(v.t); controls.update(); return; }
  flyTo(v.p, v.t);
}
document.querySelectorAll('#dock [data-view]').forEach((b) => b.addEventListener('click', () => {
  $('views').open = false; setView(b.dataset.view);
  $('views').querySelector('summary').focus({ preventScroll: true });
}));

/* ---------------- the guided drive ---------------- */
let tour = null, driveMode;
function buildTour() {
  const L = ROAD.L, K = [];
  const key = (p, t, cap) => K.push({ p, t, cap });
  // 1 · Jubilee House, from the forecourt
  key(jw(-96, 205, 64), jw(0, 0, 30), ['Jubilee House', 'The seat of Ghana\'s presidency, shaped like the Asante Golden Stool']);
  key(jw(-30, 168, 30), jw(0, 10, 28));
  key(jw(32, 172, 26), jw(0, 30, 22));
  // 2 · out through the gate and south along Liberation Road
  key(roadPoint(ROAD.tGateJ + 30 / L, -6, 21), roadPoint(ROAD.tGateJ + 150 / L, -2, 6), ['Liberation Road', 'Heading south toward Independence Avenue']);
  const tStart = ROAD.tGateJ + 110 / L, tEnd = ROAD.tInt - 70 / L;
  for (let t = tStart; t <= tEnd; t += 85 / L) {
    const k = (t - tStart) / (tEnd - tStart);
    const cap = Math.abs(t - ROAD.bridgeT) < 50 / L ? ['The Akwaaba footbridge', 'A steel pedestrian crossing over the dual carriageway'] : null;
    key(roadPoint(t, -6.5, lerp(19, 16.5, k)), roadPoint(t + 115 / L, -2, lerp(5, 4, k)), cap);
  }
  key(roadPoint(ROAD.tInt - 36 / L, -7, 16), tw(-10, 40, 14), ['Independence Avenue', 'The temple spire appears over the junction']);
  key(roadPoint(ROAD.tGateT - 6 / L, -10, 15), tw(0, 20, 12));
  // 3 · arrival: sweep around the temple
  // (sweeps toward the south side, away from the stake-centre steeple on the north)
  for (let i = 0; i <= 5; i++) {
    const a = lerp(-0.12, 0.9, i / 5), r = lerp(98, 70, i / 5);
    key(tw(Math.sin(a) * r, Math.cos(a) * r + 6, lerp(19, 12, i / 5)), tw(0, 0, lerp(13, 12, i / 5)), i === 0 ? ['Accra Ghana Temple', 'Namibia Pearl granite, with a single spire, dedicated in 2004'] : null);
  }
  const pc = new THREE.CatmullRomCurve3(K.map((k) => k.p), false, 'centripetal');
  const tc = new THREE.CatmullRomCurve3(K.map((k) => k.t), false, 'centripetal');
  return { pc, tc, caps: K.map((k, i) => ({ u: i / (K.length - 1), cap: k.cap })).filter((c) => c.cap), dur: 62 };
}
let TOUR_DATA = null;
function startTour() {
  if (!TOUR_DATA) TOUR_DATA = buildTour();
  $('views').open = false;
  flight = null;
  controls.enabled = false;
  const now = performance.now();
  const manual = shell.reducedMotion.matches;
  tour = { start: now, u: 0, paused: manual, lastCap: -1, pausedAt: now, manual };
  $('tour').classList.add('on'); $('tour').textContent = manual ? 'Tour open' : 'Pause tour';
  $('tour').setAttribute('aria-pressed', 'true');
  $('info').classList.add('hide');
  document.querySelectorAll('#dock [data-view]').forEach((b) => { b.classList.remove('on'); b.setAttribute('aria-pressed', 'false'); });
  $('caption').classList.add('show');
}
function stopTour(arrived = false) {
  if (!tour) return;
  const chapter = TOUR_DATA.caps.find((stop) => stop.u === tour.lastCap)?.cap[0];
  tour = null;
  controls.enabled = true;
  controls.update();
  $('tour').classList.remove('on'); $('tour').textContent = 'Guided tour'; $('tour').setAttribute('aria-pressed', 'false');
  $('caption').classList.remove('show');
  const views = { 'Liberation Road': 'road', 'The Akwaaba footbridge': 'road', 'Independence Avenue': 'junction', 'Accra Ghana Temple': 'temple' };
  const key = arrived ? 'temple' : views[chapter] || 'jubilee';
  showInfo(key);
  document.querySelectorAll('#dock [data-view]').forEach((button) => {
    const selected = button.dataset.view === key;
    button.classList.toggle('on', selected);
    button.setAttribute('aria-pressed', selected);
  });
}
function toggleTour() {
  if (!tour) return startTour();
  if (tour.manual) return stopTour();
  tour.paused = !tour.paused;
  if (tour.paused) { tour.pausedAt = performance.now(); $('tour').textContent = 'Resume tour'; }
  else { tour.start += performance.now() - tour.pausedAt; $('tour').textContent = 'Pause tour'; }
}
function goToChapter(direction) {
  if (!tour) return;
  const caps = TOUR_DATA.caps;
  const index = caps.findIndex((c) => c.u === tour.lastCap);
  const stop = caps[clamp(index + direction, 0, caps.length - 1)];
  const now = performance.now();
  // Invert the playback easing so the selected caption starts at its own stop.
  let lo = 0, hi = 1;
  for (let i = 0; i < 16; i++) {
    const mid = (lo + hi) / 2;
    if (easeIO(mid) * 0.12 + mid * 0.88 < stop.u) lo = mid; else hi = mid;
  }
  tour.u = hi;
  tour.start = now - tour.u * TOUR_DATA.dur * 1000;
  tour.pausedAt = now;
}
$('tour').addEventListener('click', toggleTour);
$('prevChapter').addEventListener('click', () => goToChapter(-1));
$('nextChapter').addEventListener('click', () => goToChapter(1));
$('exitTour').addEventListener('click', () => { stopTour(); $('tour').focus(); });
renderer.domElement.addEventListener('pointerdown', () => { if (tour) stopTour(); hideHint(); });
renderer.domElement.addEventListener('wheel', () => { if (tour) stopTour(); hideHint(); }, { passive: true });

const _tp = new THREE.Vector3(), _tt = new THREE.Vector3();
/** Drives the camera for flights and the tour. Returns true while it owns the camera. */
function updateCameraRig(now) {
  if (driveMode?.active) return driveMode.frame(now);
  if (tour) {
    if (!tour.paused) tour.u = clamp((now - tour.start) / (TOUR_DATA.dur * 1000), 0, 1);
    const u = easeIO(tour.u) * 0.12 + tour.u * 0.88; // gentle ease-in/out at the ends
    TOUR_DATA.pc.getPoint(u, _tp); TOUR_DATA.tc.getPoint(u, _tt);
    camera.position.copy(_tp); controls.target.copy(_tt); camera.lookAt(_tt);
    let cap = null;
    for (const c of TOUR_DATA.caps) if (u >= c.u - 0.005) cap = c;
    if (cap && cap.u !== tour.lastCap) {
      tour.lastCap = cap.u;
      $('capT').textContent = cap.cap[0]; $('capS').textContent = cap.cap[1];
      const index = TOUR_DATA.caps.indexOf(cap);
      $('prevChapter').disabled = index === 0;
      $('nextChapter').disabled = index === TOUR_DATA.caps.length - 1;
    }
    $('capBar').style.width = (tour.u * 100).toFixed(1) + '%';
    if (tour.u >= 1) stopTour(true);
    return true;
  }
  if (flight) {
    const k = clamp((now - flight.start) / flight.dur, 0, 1), e = easeIO(k);
    camera.position.lerpVectors(flight.p0, flight.p1, e);
    camera.position.y += Math.sin(Math.PI * e) * flight.lift;
    controls.target.lerpVectors(flight.t0, flight.t1, e);
    camera.lookAt(controls.target);
    if (k >= 1) { flight = null; controls.enabled = true; controls.update(); }
    return true;
  }
  return false;
}

/* ---------------- floating labels ---------------- */
const LABELS = [];
function addLabel(text, pos, minor, view) {
  const el = document.createElement('div');
  el.className = 'tag' + (minor ? ' minor' : '');
  el.innerHTML = `<div class="n">${text}</div><div class="stem"></div>`;
  $('labels').appendChild(el);
  LABELS.push({ el, pos, minor, near: minor ? 400 : 2600 });
}
let labelsOn = true;
const _v = new THREE.Vector3();
function updateLabels() {
  const w = innerWidth, h = innerHeight;
  for (const L of LABELS) {
    _v.copy(L.pos).project(camera);
    const d = camera.position.distanceTo(L.pos);
    const vis = labelsOn && _v.z > -1 && _v.z < 1 && Math.abs(_v.x) < 1.1 && Math.abs(_v.y) < 1.1 && d < L.near && d > 25 && !tour;
    if (!vis) { L.el.style.opacity = 0; continue; }
    L.el.style.opacity = clamp((L.near - d) / (L.near * 0.25), 0, 1);
    const x = ((_v.x * 0.5 + 0.5) * w).toFixed(1);
    const y = ((-_v.y * 0.5 + 0.5) * h).toFixed(1);
    L.el.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-100%)`;
  }
}

/* ---------------- minimap ---------------- */
const MINI = { c: $('miniC'), x0: -480, z0: -600, span: 1160 };
function m2c(x, z) { const s = MINI.c.width / MINI.span; return [(x - MINI.x0) * s, (z - MINI.z0) * s]; }
let miniBase = null;
function drawMiniBase() {
  const W = MINI.c.width, cv = makeCanvas(W, W), g = cv.getContext('2d');
  g.fillStyle = '#2b2a22'; g.fillRect(0, 0, W, W);
  // compounds
  const rect = (x0, x1, z0, z1, fill) => { const [a, b] = m2c(x0, z0), [c, d] = m2c(x1, z1); g.fillStyle = fill; g.fillRect(a, b, c - a, d - b); };
  rect(26, 300, -480, -210, '#3d5a2c'); rect(24, 214, 285, 452, '#3d5a2c');
  // roads
  g.strokeStyle = '#8d8a80'; g.lineCap = 'round';
  g.lineWidth = 6; g.beginPath();
  for (let t = 0; t <= 1; t += 0.005) { const p = ROAD.curve.getPointAt(t), [x, y] = m2c(p.x, p.z); t ? g.lineTo(x, y) : g.moveTo(x, y); }
  g.stroke();
  g.beginPath(); const [ax, ay] = m2c(-600, ROAD.Zi), [bx, by] = m2c(800, ROAD.Zi); g.moveTo(ax, ay); g.lineTo(bx, by); g.stroke();
  // buildings
  g.save(); g.fillStyle = '#e0b450';
  const [jx, jy] = m2c(JUB.pos.x, JUB.pos.z); g.fillRect(jx - 20 * W / MINI.span, jy - 65 * W / MINI.span, 40 * W / MINI.span, 130 * W / MINI.span);
  g.fillStyle = '#f2efe8'; const [tx, ty] = m2c(TMP.pos.x, TMP.pos.z); g.fillRect(tx - 16 * W / MINI.span, ty - 18 * W / MINI.span, 32 * W / MINI.span, 36 * W / MINI.span);
  g.fillStyle = '#b8b2a5'; const [mx, my] = m2c(168, 300); g.fillRect(mx, my, 24 * W / MINI.span, 112 * W / MINI.span);
  g.restore();
  g.fillStyle = '#efe6d6'; g.font = '600 20px Inter, sans-serif';
  g.fillText('Jubilee House', jx + 18, jy - 40);
  g.fillText('Temple', tx + 18, ty + 46);
  g.fillStyle = '#b9ae9b'; g.font = '500 16px Inter, sans-serif';
  g.save(); const [rx, ry] = m2c(-40, -80); g.translate(rx, ry); g.rotate(-Math.PI / 2); g.fillText('Liberation Rd', 0, 0); g.restore();
  const [ix, iy] = m2c(-300, ROAD.Zi - 10); g.fillText('Independence Ave', ix, iy);
  miniBase = cv;
}
function drawMini() {
  if (!miniBase) return;
  const g = MINI.c.getContext('2d'), W = MINI.c.width;
  g.drawImage(miniBase, 0, 0);
  const [cx, cy] = m2c(camera.position.x, camera.position.z), [tx, ty] = m2c(controls.target.x, controls.target.z);
  const a = Math.atan2(ty - cy, tx - cx), fov = 0.55;
  const grd = g.createRadialGradient(cx, cy, 0, cx, cy, 120);
  grd.addColorStop(0, 'rgba(224,180,80,0.45)'); grd.addColorStop(1, 'rgba(224,180,80,0)');
  g.fillStyle = grd; g.beginPath(); g.moveTo(cx, cy); g.arc(cx, cy, 120, a - fov, a + fov); g.closePath(); g.fill();
  g.fillStyle = '#e0b450'; g.beginPath(); g.arc(clamp(cx, 6, W - 6), clamp(cy, 6, W - 6), 7, 0, Math.PI * 2); g.fill();
  g.strokeStyle = '#fff'; g.lineWidth = 2; g.beginPath(); g.arc(tx, ty, 6, 0, Math.PI * 2); g.stroke();
}
MINI.c.addEventListener('click', (e) => {
  const r = MINI.c.getBoundingClientRect(), s = MINI.span / r.width;
  const x = MINI.x0 + (e.clientX - r.left) * s, z = MINI.z0 + (e.clientY - r.top) * s;
  const off = camera.position.clone().sub(controls.target);
  if (off.length() > 420) off.setLength(420);
  const t = new THREE.Vector3(x, 0, z);
  flyTo(t.clone().add(off), t, 2.2);
});

/* ---------------- light & toggles ---------------- */
let envTimer = null;
function todName(e) { return e >= 35 ? 'Midday' : e >= 16 ? 'Afternoon' : e >= 2 ? 'Golden hour' : e >= -1 ? 'Sunset' : 'Dusk'; }
function applyTime(e, immediateEnv) {
  setSunElevation(e, !!immediateEnv);
  $('todVal').textContent = todName(e);
  $('sunSlider').value = e;
  document.querySelectorAll('#tod [data-elev]').forEach((b) => {
    const active = Math.abs(+b.dataset.elev - e) < 0.6;
    b.classList.toggle('on', active); b.setAttribute('aria-pressed', active);
  });
  if (!immediateEnv) { clearTimeout(envTimer); envTimer = setTimeout(updateEnvironment, 200); }
}
document.querySelectorAll('#tod [data-elev]').forEach((b) => b.addEventListener('click', () => applyTime(+b.dataset.elev, true)));
$('sunSlider').addEventListener('input', (e) => applyTime(+e.target.value, false));
$('tLabels').addEventListener('click', function () { labelsOn = !labelsOn; this.classList.toggle('on', labelsOn); this.setAttribute('aria-pressed', labelsOn); });
$('tTraffic').addEventListener('click', function () {
  TRAFFIC.enabled = !TRAFFIC.enabled; this.classList.toggle('on', TRAFFIC.enabled); this.setAttribute('aria-pressed', TRAFFIC.enabled);
  (TRAFFIC.meshes || []).concat(TRAFFIC.lights || []).forEach((m) => { m.visible = TRAFFIC.enabled; });
});
$('tSpin').addEventListener('click', function () { controls.autoRotate = !controls.autoRotate; controls.autoRotateSpeed = 0.45; this.classList.toggle('on', controls.autoRotate); this.setAttribute('aria-pressed', controls.autoRotate); });

let hintGone = false;
function hideHint() { if (hintGone) return; hintGone = true; $('hint').style.opacity = 0; }
setTimeout(hideHint, 7000);

window.addEventListener('keydown', (e) => {
  if (driveMode?.active || $('drivePick').open || e.altKey || e.metaKey || e.ctrlKey) return;
  if (e.key === 'Escape') {
    if ($('views').open) { $('views').open = false; $('views').querySelector('summary').focus(); }
    else if ($('sceneSettings').open) { $('sceneSettings').open = false; $('sceneSettings').querySelector('summary').focus(); }
    else if (tour) { stopTour(); $('tour').focus(); }
    return;
  }
  if (e.target.closest?.('button, a, input, select, textarea, summary')) return;
  const keys = ['overview', 'jubilee', 'road', 'junction', 'temple', 'grounds'];
  if (e.key >= '1' && e.key <= '6') setView(keys[+e.key - 1]);
  else if (e.key.toLowerCase() === 't') toggleTour();
});

/* =====================================================================
   09 · MAIN — staged construction with a progress screen, then the
   render loop.
   ===================================================================== */
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)));
async function buildStages(entries) {
  for (const [label, build] of entries) {
    shell.progress(label + '…');
    await nextFrame();
    if (!shell.running) return;
    build();
  }
}
shell.progress('Preparing roads and landmarks…');
await nextFrame();
if (!shell.running) return;
buildTextures(); buildMaterials(); buildTreeTypes();
await buildStages(BUILD.slice(0, 3));
if (!shell.running) return;
defineViews();
applyTime(9, false);
clearTimeout(envTimer);
setView('jubilee', true);
drawMiniBase();
addLabel('Jubilee House', jw(0, 0, 60));
addLabel('Accra Ghana Temple', TMP.spireTop.clone().setY(30));
addLabel('Ghana Missionary Training Center', new THREE.Vector3(180, 19, 356), true);
addLabel('Stake Centre', new THREE.Vector3(47.5, 23, 310), true);
addLabel('Liberation Road', roadPoint(roadTAtZ(-110), 0, 3), true);
addLabel('Independence Avenue', new THREE.Vector3(ROAD.Xc - 160, 3, ROAD.Zi), true);
addLabel('Akwaaba footbridge', roadPoint(ROAD.bridgeT, 0, 10), true);
updateShadowCamera();
renderer.render(scene, camera);
updateLabels(); drawMini();
shell.ready();
window.__ready = true;

let lastFrame, total = 0, nowSecond = 0, frames = 0, slowWindows = 0, tick = 0, lastShadow = -Infinity;
let sceneDirty = true;
controls.addEventListener('change', () => { sceneDirty = true; });
document.querySelector('[data-scene-controls]').addEventListener('click', () => { sceneDirty = true; });
$('sunSlider').addEventListener('input', () => { sceneDirty = true; });
let cityReady = false;
function loop(now) {
  if (!shell.running) { driveMode?.stop(); return; }
  requestAnimationFrame(loop);
  const raw = lastFrame === undefined ? 0 : (now - lastFrame) / 1000;
  lastFrame = now;
  if (document.hidden || raw > 0.5) {
    if (tour && !tour.paused && raw > 0.5) tour.start += raw * 1000;
    return;
  }
  const driving = driveMode?.active;
  const animated = !!(driving || tour || flight || controls.autoRotate || (cityReady && TRAFFIC.enabled));
  if (!updateCameraRig(now)) controls.update();
  if (!animated && !sceneDirty) return;
  const dt = Math.min(raw, 0.1);
  total += dt;
  for (const update of UPDATERS) update(dt, total);
  if (now - lastShadow > 90 || sceneDirty) {
    updateShadowCamera(); renderer.shadowMap.needsUpdate = true;
    lastShadow = now;
  }
  renderer.render(scene, camera);
  tick++;
  if (!driving && (tick % 3 === 0 || sceneDirty)) updateLabels();
  if (innerWidth > 900 && (tick % 4 === 0 || sceneDirty)) drawMini();
  sceneDirty = false;
  nowSecond += raw; frames++;
  if (nowSecond >= 1.5) {
    slowWindows = frames / nowSecond < 30 ? slowWindows + 1 : 0;
    nowSecond = frames = 0;
    const ratio = renderer.getPixelRatio();
    if (slowWindows >= 2 && ratio > 0.8) {
      renderer.setPixelRatio(Math.max(0.8, ratio - 0.2));
      slowWindows = 0;
    }
  }
}
requestAnimationFrame(loop);

const detailReady = (async () => {
  await nextFrame();
  await buildStages(BUILD.slice(3));
  if (!shell.running) return;
  await nextFrame();
  if (!shell.running) return;
  buildVegetation();
  const geometry = new THREE.BufferGeometry().setFromPoints(LAMP_GLOWS);
  const material = new THREE.PointsMaterial({ map: TEX.glow, size: 7, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffd9a0 });
  const glows = new THREE.Points(geometry, material);
  scene.add(glows);
  UPDATE_NIGHT.push((night) => { material.opacity = night; glows.visible = night > 0.01; });
  applyTime(TIME.elevation, true);
  cityReady = true;
  sceneDirty = true;
})();
detailReady.catch(() => { $('driveStatus').textContent = 'Some city details couldn’t load.'; });

const params = new URLSearchParams(location.search);
let loadingDrive;
async function openDrive(auto = false) {
  if (!shell.running || loadingDrive) return;
  const button = $('takeWheel');
  button.disabled = true;
  button.textContent = 'Opening…';
  loadingDrive = true;
  try {
    const { mountDrive } = await import('./drive-mode.js?v=3');
    await detailReady;
    if (!shell.running) return;
    driveMode ??= mountDrive({
      THREE, scene, camera, renderer, controls, ROAD, roadXAt, JUB, TMP, jw,
      colliders: DRIVE_COLLIDERS, gates: DRIVE_GATES, params, stopTour,
    });
    await driveMode.open(auto);
  } catch {
    $('driveStatus').textContent = 'Drive mode couldn’t load. You can still take the tour.';
  } finally {
    loadingDrive = false;
    button.disabled = false;
    button.textContent = 'Drive';
  }
}
$('takeWheel').addEventListener('click', () => { void openDrive(); });
if (['volta', 'regent'].includes(params.get('drive'))) void openDrive(true);
}
