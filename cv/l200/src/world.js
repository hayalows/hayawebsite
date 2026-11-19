const texture = (THREE, w, h, draw, srgb = true) => {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); if (srgb) { if ('colorSpace' in t) t.colorSpace = THREE.SRGBColorSpace; else t.encoding = THREE.sRGBEncoding; } t.anisotropy = 8; return t;
};
const rng = (seed) => () => ((seed = Math.imul(seed ^ (seed >>> 15), 2246822519) + 0x9e3779b9 | 0) >>> 0) / 4294967296;

// Adds film-grain style noise to whatever is already drawn: one typed-array pass,
// much faster than drawing thousands of tiny rectangles.
function grain(x, w, h, amount, tint = [1, 1, 1], seed = 1) {
  const img = x.getImageData(0, 0, w, h), d = img.data; let r = seed >>> 0;
  for (let i = 0; i < d.length; i += 4) {
    r = (Math.imul(r, 1664525) + 1013904223) >>> 0;
    const n = ((r >>> 8) / 16777216 - 0.5) * amount;
    d[i] += n * tint[0]; d[i + 1] += n * tint[1]; d[i + 2] += n * tint[2];
  }
  x.putImageData(img, 0, 0);
}

// Smooth value noise in world metres (deterministic), for large-scale colour variation.
function valueNoise(x, z) {
  const h = (i, j) => { let n = Math.imul(i, 374761393) + Math.imul(j, 668265263) | 0; n = Math.imul(n ^ (n >>> 13), 1274126177); return ((n ^ (n >>> 16)) >>> 0) / 4294967296; };
  const i = Math.floor(x), j = Math.floor(z), fx = x - i, fz = z - j, u = fx * fx * (3 - 2 * fx), v = fz * fz * (3 - 2 * fz);
  return (h(i, j) * (1 - u) + h(i + 1, j) * u) * (1 - v) + (h(i, j + 1) * (1 - u) + h(i + 1, j + 1) * u) * v;
}
const fbm = (x, z) => valueNoise(x / 70, z / 70) * 0.6 + valueNoise(x / 19, z / 19) * 0.3 + valueNoise(x / 6, z / 6) * 0.1;

export const FONT = '"Inter", ui-sans-serif, system-ui, sans-serif';

// Merge static meshes that share a material into one mesh each: same picture, far fewer draw calls.
export function mergeStatic(THREE, group, keep = new Set()) {
  group.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert();
  const buckets = new Map();
  for (const o of [...group.children]) {
    if (!o.isMesh || o.isInstancedMesh || keep.has(o) || o.userData.click || Array.isArray(o.material) || o.children.length) continue;
    const g = o.geometry;
    if (!g.attributes.uv || !g.attributes.normal) continue;
    if (!buckets.has(o.material)) buckets.set(o.material, []);
    buckets.get(o.material).push(o);
  }
  const m = new THREE.Matrix4(), n = new THREE.Matrix3(), v = new THREE.Vector3();
  for (const [material, meshes] of buckets) {
    if (meshes.length < 2) continue;
    const pos = [], nor = [], uv = [];
    let shadow = false, receive = false;
    for (const o of meshes) {
      const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry;
      m.multiplyMatrices(inv, o.matrixWorld); n.getNormalMatrix(m);
      const p = g.attributes.position, q = g.attributes.normal, t = g.attributes.uv;
      for (let i = 0; i < p.count; i++) {
        v.fromBufferAttribute(p, i).applyMatrix4(m); pos.push(v.x, v.y, v.z);
        v.fromBufferAttribute(q, i).applyMatrix3(n).normalize(); nor.push(v.x, v.y, v.z);
        uv.push(t.getX(i), t.getY(i));
      }
      shadow ||= o.castShadow; receive ||= o.receiveShadow;
      group.remove(o);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    const merged = new THREE.Mesh(geo, material); merged.castShadow = shadow; merged.receiveShadow = receive;
    group.add(merged);
  }
}

const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// ------------------------------------------------------------------ showroom
// Lit like a car photography studio: one large overhead softbox draws a long, soft highlight
// along the paint; tall side panels shape the flanks; a warm sign and an oak wall give depth.
export function buildShowroom({ THREE, quality, reflections, reducedMotion = false }) {
  const tex = texture.bind(null, THREE), Reflector = THREE.Reflector;
  const g = new THREE.Group(); g.name = 'showroom';
  const clickables = [];
  // polished concrete: warm grey, large soft mottling, saw-cut joints every 2.5 m
  const floorTex = tex(512, 512, (x, w, h) => {
    x.fillStyle = '#45413d'; x.fillRect(0, 0, w, h);
    const R = rng(3);
    for (let i = 0; i < 70; i++) {
      const cx = R() * w, cy = R() * h, r = 30 + R() * 110, gr = x.createRadialGradient(cx, cy, 0, cx, cy, r);
      const tone = R() < 0.5 ? '255,248,236' : '20,18,16'; gr.addColorStop(0, `rgba(${tone},${0.035 + R() * 0.04})`); gr.addColorStop(1, `rgba(${tone},0)`);
      x.fillStyle = gr; x.fillRect(cx - r, cy - r, r * 2, r * 2);
    }
    grain(x, w, h, 12, [1, 0.98, 0.95], 7);
    x.strokeStyle = 'rgba(18,16,15,.85)'; x.lineWidth = 2; x.strokeRect(1, 1, w - 2, h - 2);
  });
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping; floorTex.repeat.set(16, 16);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshPhysicalMaterial({ map: floorTex, roughness: 0.42, metalness: 0, clearcoat: 0.5, clearcoatRoughness: 0.22 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; g.add(floor);
  let mirror = null;
  if (reflections) {
    // a soft, darkened mirror added on top of the concrete: the car stands in its own reflection
    const shader = { ...Reflector.ReflectorShader, fragmentShader: Reflector.ReflectorShader.fragmentShader.replace('gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );', 'gl_FragColor = vec4( base.rgb * color, 1.0 );') };
    mirror = new Reflector(new THREE.PlaneGeometry(40, 40), { textureWidth: 512, textureHeight: 512, multisample: 0, color: 0x262626, shader, clipBias: 0.003 });
    mirror.material.transparent = true; mirror.material.blending = THREE.AdditiveBlending; mirror.material.depthWrite = false;
    mirror.rotation.x = -Math.PI / 2; mirror.position.y = 0.002; mirror.renderOrder = 1; g.add(mirror);
  }
  const wallM = new THREE.MeshStandardMaterial({ color: '#2d2a27', roughness: 0.9 });
  const frameM = new THREE.MeshStandardMaterial({ color: '#141312', roughness: 0.6, metalness: 0.4 });
  const box = (w, h, d, x, y, z, m, parent = g) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); o.receiveShadow = true; parent.add(o); return o; };
  box(40, 10, 0.4, 0, 5, -14, wallM); box(0.4, 10, 40, -16, 5, 0, wallM); box(0.4, 10, 40, 16, 5, 0, wallM); box(40, 10, 0.4, 0, 5, 16, wallM);
  box(40, 0.3, 40, 0, 9.6, 0, new THREE.MeshStandardMaterial({ color: '#0e0d0c', roughness: 1 }));
  // a shadow gap where walls meet the floor reads as real architecture
  for (const [w, d, x, z] of [[40, 0.06, 0, -13.79], [0.06, 40, -15.79, 0], [0.06, 40, 15.79, 0]]) box(w, 0.12, d, x, 0.06, z, frameM);
  // oak slat feature wall
  const oak = new THREE.MeshStandardMaterial({ color: '#7a5636', roughness: 0.55 });
  const slats = new THREE.InstancedMesh(new THREE.BoxGeometry(0.09, 7.6, 0.12), oak, 120);
  const mtx = new THREE.Matrix4();
  for (let i = 0; i < 120; i++) { mtx.makeTranslation(-11.9 + i * 0.2, 3.8, -13.72); slats.setMatrixAt(i, mtx); }
  slats.receiveShadow = true; g.add(slats);
  // backlit PKM sign with your name
  const signTex = tex(1600, 560, (x, w, h) => {
    x.clearRect(0, 0, w, h); x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = `800 360px ${FONT}`; if ('letterSpacing' in x) x.letterSpacing = '-18px';
    x.fillText('PKM', w / 2, h * 0.42);
    x.font = `500 44px ${FONT}`; if ('letterSpacing' in x) x.letterSpacing = '6px'; x.fillText('PAPA KOJO MENSAH   /   KUMASI', w / 2, h * 0.86);
  }, false);
  const SIGN_X = -7.5, SIGN_Y = 5.5;
  const signM = new THREE.MeshStandardMaterial({ color: '#000', emissive: '#F2E6CF', emissiveMap: signTex, emissiveIntensity: 2.4, transparent: true, alphaMap: signTex, roughness: 1 });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 3.36), signM); sign.position.set(SIGN_X, SIGN_Y, -13.55); sign.userData.click = 'sign'; g.add(sign); clickables.push(sign);
  const halo = new THREE.Mesh(new THREE.PlaneGeometry(11, 4.2), new THREE.MeshBasicMaterial({ color: '#BBA783', transparent: true, opacity: 0.07, depthWrite: false })); halo.position.set(SIGN_X, SIGN_Y, -13.62); g.add(halo);
  // A band of light sweeps across the letters now and then. A tiny shader keeps the letter mask
  // fixed while the band moves (r128 would otherwise move every texture on the material together).
  const sweepM = new THREE.ShaderMaterial({
    uniforms: { uSign: { value: signTex }, uPos: { value: -1 }, uStrength: { value: 0 }, uColor: { value: new THREE.Color('#fff3dc') } },
    vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'uniform sampler2D uSign; uniform float uPos, uStrength; uniform vec3 uColor; varying vec2 vUv;\n'
      + 'void main() { float band = exp(-pow((vUv.x - uPos + (vUv.y - 0.5) * 0.18) * 7.0, 2.0)); gl_FragColor = vec4(uColor * texture2D(uSign, vUv).a * band * uStrength, 1.0); }',
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const sweep = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 3.36), sweepM); sweep.position.set(SIGN_X, SIGN_Y, -13.53); g.add(sweep); // stays in the scene at zero strength so its shader compiles with the rest
  // Overhead softbox: the single most important light for paint. A diffuser in a dark frame.
  const softM = new THREE.MeshStandardMaterial({ color: '#000', emissive: '#fff8ee', emissiveIntensity: 1.6, roughness: 1 });
  const soft = new THREE.Mesh(new THREE.PlaneGeometry(9.2, 3.8), softM); soft.rotation.x = Math.PI / 2; soft.position.set(0, 8.6, 0.3); g.add(soft);
  box(9.6, 0.25, 0.2, 0, 8.7, 2.3, frameM); box(9.6, 0.25, 0.2, 0, 8.7, -1.7, frameM); box(0.2, 0.25, 4.2, 4.7, 8.7, 0.3, frameM); box(0.2, 0.25, 4.2, -4.7, 8.7, 0.3, frameM);
  const ringM = new THREE.MeshStandardMaterial({ color: '#000', emissive: '#fff8ee', emissiveIntensity: 1.2 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(5.6, 0.05, 8, 128), ringM); ring.rotation.x = Math.PI / 2; ring.position.y = 9.25; g.add(ring);
  // tall side panels shape the long reflections down each flank
  // Seen directly they glow softly from the centre out, like a diffuser; the reflections stay strong.
  const diffuser = tex(256, 128, (x, w, h) => { const gr = x.createRadialGradient(w / 2, h / 2, 4, w / 2, h / 2, w * 0.62); gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.7, '#9a9790'); gr.addColorStop(1, '#4a4844'); x.fillStyle = gr; x.fillRect(0, 0, w, h); });
  const sideM = new THREE.MeshStandardMaterial({ color: '#000', emissive: '#f4efe6', emissiveMap: diffuser, emissiveIntensity: 0.35, roughness: 1 });
  for (const side of [-1, 1]) {
    box(0.06, 2.6, 8.4, side * 15.72, 6.1, 4.4, sideM);
    for (const z of [0.2, 4.4, 8.6]) box(0.14, 2.8, 0.08, side * 15.66, 6.1, z, frameM);
    box(0.14, 0.08, 8.6, side * 15.66, 7.42, 4.4, frameM); box(0.14, 0.08, 8.6, side * 15.66, 4.78, 4.4, frameM);
  }
  // turntable
  const table = new THREE.Group(); g.add(table);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.25, 0.1, 96), new THREE.MeshPhysicalMaterial({ color: '#2c2d2f', roughness: 0.3, metalness: 0.5, clearcoat: 0.8, clearcoatRoughness: 0.12 }));
  disc.position.y = 0.05; disc.receiveShadow = true; table.add(disc);
  const ledM = new THREE.MeshStandardMaterial({ color: '#000', emissive: '#E3C48E', emissiveIntensity: 1.6 });
  const led = new THREE.Mesh(new THREE.TorusGeometry(4.26, 0.018, 6, 160), ledM);
  led.rotation.x = Math.PI / 2; led.position.y = 0.06; table.add(led);
  // the plant (a nod to the portfolio's "watering the plants")
  const plant = new THREE.Group(); plant.position.set(9.5, 0, -11); g.add(plant);
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.32, 0.8, 32), new THREE.MeshStandardMaterial({ color: '#c9bba3', roughness: 0.7 })); pot.position.y = 0.4; pot.castShadow = true; plant.add(pot);
  const leafM = new THREE.MeshStandardMaterial({ color: '#4f7a3e', roughness: 0.6, side: THREE.DoubleSide });
  const leaves = [];
  for (let i = 0; i < 9; i++) {
    const lf = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), leafM);
    lf.scale.set(0.35, 1.6, 0.07); const a = i / 9 * Math.PI * 2;
    lf.position.set(Math.cos(a) * 0.12, 0.85, Math.sin(a) * 0.12); lf.rotation.set(Math.sin(a) * 0.5, -a, Math.cos(a) * 0.5); lf.castShadow = true; plant.add(lf); leaves.push(lf);
  }
  plant.traverse((o) => { o.userData.click = 'plant'; }); clickables.push(...plant.children);
  // framed design poster -> links to the design portfolio
  const poster = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 3), new THREE.MeshStandardMaterial({ roughness: 0.5, map: tex(440, 600, (x, w, h) => {
    x.fillStyle = '#0f0f0f'; x.fillRect(0, 0, w, h);
    const gr = x.createLinearGradient(0, 0, w, h); gr.addColorStop(0, '#BBA783'); gr.addColorStop(1, '#93AE7C'); x.fillStyle = gr; x.fillRect(30, 30, w - 60, h * 0.55);
    x.fillStyle = '#080808'; x.font = `800 92px ${FONT}`; x.fillText('Iconka', 50, h * 0.42); x.font = `500 30px ${FONT}`; x.fillText('Designs · since 2022', 52, h * 0.5);
    x.fillStyle = '#F2F0EA'; x.font = `700 34px ${FONT}`; x.fillText('Design work →', 40, h * 0.75); x.fillStyle = '#9A948B'; x.font = `400 24px ${FONT}`; x.fillText('Brands, posters, menus', 40, h * 0.82);
  }) }));
  poster.position.set(-15.75, 3.4, -5); poster.rotation.y = Math.PI / 2; poster.userData.click = 'poster'; g.add(poster); clickables.push(poster);
  box(0.08, 3.2, 2.4, -15.8, 3.4, -5, new THREE.MeshStandardMaterial({ color: '#BBA783', metalness: 0.8, roughness: 0.3 }));
  // Milestones wall: the work behind this studio, from the portfolio
  const timeline = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 2.4), new THREE.MeshStandardMaterial({ roughness: 0.8, emissive: '#ffffff', emissiveIntensity: 0.32, map: tex(2048, 512, (x, w, h) => {
    x.clearRect(0, 0, w, h);
    x.fillStyle = '#BBA783'; x.font = `600 40px ${FONT}`; if ('letterSpacing' in x) x.letterSpacing = '8px'; x.fillText('THE ROAD HERE', 40, 70);
    if ('letterSpacing' in x) x.letterSpacing = '0px';
    const items = [['2022', 'Iconka Designs', 'My design studio'], ['2024', 'Actuarial Science', 'BSc, KNUST, Kumasi'], ['2024', 'Absa Bank Ghana', 'Customer service'], ['2026', 'Springboard', 'Data entry, remote'], ['2026', 'PKM Drive Studio', 'Built in code']];
    const y = 210; x.strokeStyle = 'rgba(242,240,234,.35)'; x.lineWidth = 3; x.beginPath(); x.moveTo(40, y); x.lineTo(w - 40, y); x.stroke();
    items.forEach(([year, title, line], i) => {
      const px = 60 + i * (w - 120) / 4.4;
      x.fillStyle = i === items.length - 1 ? '#E3C48E' : '#F2F0EA'; x.beginPath(); x.arc(px, y, 11, 0, Math.PI * 2); x.fill();
      x.font = `700 58px ${FONT}`; x.fillText(year, px - 10, y - 40);
      x.fillStyle = '#F2F0EA'; x.font = `700 44px ${FONT}`; x.fillText(title, px - 10, y + 86);
      x.fillStyle = '#A9A296'; x.font = `500 32px ${FONT}`; x.fillText(line, px - 10, y + 136);
    });
  }) }));
  timeline.material.transparent = true; timeline.material.emissiveMap = timeline.material.map;
  timeline.position.set(-15.74, 2.4, 4.4); timeline.rotation.y = Math.PI / 2; timeline.userData.click = 'home'; g.add(timeline); clickables.push(timeline);
  // a museum-style plaque in front of the turntable
  const plaque = new THREE.Group(); plaque.position.set(-3.6, 0, 5.4); plaque.rotation.y = 0.55; g.add(plaque);
  box(0.08, 0.95, 0.08, 0, 0.475, 0, frameM, plaque);
  const plaqueFace = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.62, 0.04), [frameM, frameM, frameM, frameM, new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.2, emissive: '#ffffff', emissiveIntensity: 0.18, map: tex(768, 400, (x, w, h) => {
    x.fillStyle = '#16140f'; x.fillRect(0, 0, w, h);
    x.strokeStyle = '#BBA783'; x.lineWidth = 3; x.strokeRect(14, 14, w - 28, h - 28);
    x.fillStyle = '#BBA783'; x.font = `600 26px ${FONT}`; if ('letterSpacing' in x) x.letterSpacing = '6px'; x.fillText('PKM DRIVE STUDIO', 48, 82);
    if ('letterSpacing' in x) x.letterSpacing = '0px';
    x.fillStyle = '#F2F0EA'; x.font = `700 52px ${FONT}`; x.fillText('Papa Kojo Mensah', 46, 166);
    x.fillStyle = '#C9C2B6'; x.font = `500 28px ${FONT}`;
    x.fillText('Two original cars, a showroom and a', 48, 236); x.fillText('test track, all drawn in code.', 48, 276);
    x.fillStyle = '#93AE7C'; x.fillText('Kumasi · 2026', 48, 340);
  }) }), frameM]);
  plaqueFace.position.set(0, 1.02, 0); plaqueFace.rotation.x = -0.5; plaqueFace.userData.click = 'home'; plaque.add(plaqueFace); clickables.push(plaqueFace);
  // Accra 3D portal: a lit doorway on the right wall
  const portal = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 5), new THREE.MeshStandardMaterial({ roughness: 0.6, emissive: '#ffffff', emissiveIntensity: 0.9, emissiveMap: tex(360, 500, (x, w, h) => {
    const gr = x.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#f0b26b'); gr.addColorStop(0.55, '#d9774a'); gr.addColorStop(0.56, '#3d4a3c'); gr.addColorStop(1, '#232a22'); x.fillStyle = gr; x.fillRect(0, 0, w, h);
    x.fillStyle = '#1b1f1a'; for (let i = 0; i < 9; i++) { const px = 20 + i * 38, ph = 40 + (i * 37 % 70); x.fillRect(px, h * 0.56 - ph, 26, ph); }
    x.fillStyle = '#F2F0EA'; x.font = `800 46px ${FONT}`; x.fillText('Accra 3D', 26, 70); x.font = `500 22px ${FONT}`; x.fillText('Drive Liberation Road →', 28, 104);
  }) }));
  portal.position.set(15.75, 2.5, -4); portal.rotation.y = -Math.PI / 2; portal.userData.click = 'accra'; g.add(portal); clickables.push(portal);
  box(0.1, 5.3, 0.15, 15.75, 2.65, -5.9, frameM); box(0.1, 5.3, 0.15, 15.75, 2.65, -2.1, frameM);

  // lights
  const lights = new THREE.Group(); g.add(lights);
  const key = new THREE.SpotLight(0xffffff, 40, 30, 0.55, 0.9, 1.5); key.position.set(2.5, 9, 3); key.target.position.set(0, 0, 0);
  key.castShadow = true; key.shadow.mapSize.set(quality === 'low' ? 1024 : 2048, quality === 'low' ? 1024 : 2048); key.shadow.bias = -0.0002; key.shadow.normalBias = 0.02; key.shadow.radius = 6;
  lights.add(key, key.target);
  const rim = new THREE.SpotLight(0xdfe8ff, 70, 30, 0.7, 0.8, 1.5); rim.position.set(-6, 7, -7); lights.add(rim, rim.target);
  const fill = new THREE.SpotLight(0xffe6c8, 30, 30, 0.8, 0.9, 1.5); fill.position.set(7, 4, 8); lights.add(fill, fill.target);
  const hemi = new THREE.HemisphereLight(0xc9ccd0, 0x2a2420, 0.5); lights.add(hemi);
  const signGlow = new THREE.PointLight(0xffe2b8, 18, 14, 2); signGlow.position.set(SIGN_X, SIGN_Y, -12.5); lights.add(signGlow);

  mergeStatic(THREE, g, new Set([floor, soft, sweep, halo]));

  // Reflection environment: the same softbox, panels and sign the paint "sees", as pure light.
  function envScene(mood) {
    const s = new THREE.Scene(); s.background = new THREE.Color(mood === 'night' ? '#030406' : '#0d0c0b');
    const em = (c, i) => new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(i), side: THREE.DoubleSide });
    const night = mood === 'night', sunset = mood === 'sunset';
    const tone = sunset ? '#ffd2a3' : night ? '#a9bcff' : '#fff9f0';
    const sb = new THREE.Mesh(new THREE.PlaneGeometry(9.2, 3.8), em(tone, night ? 2.5 : 6)); sb.rotation.x = Math.PI / 2; sb.position.set(0, 8.6, 0.3); s.add(sb);
    const rg = new THREE.Mesh(new THREE.TorusGeometry(5.6, 0.12, 6, 64), em(tone, night ? 2 : 5)); rg.rotation.x = Math.PI / 2; rg.position.y = 9.25; s.add(rg);
    for (const side of [-1, 1]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(8.4, 2.6), em(sunset ? '#ffb27a' : '#eef0f2', night ? 0.8 : 4)); p.position.set(side * 15.7, 6.1, 4.4); p.rotation.y = -side * Math.PI / 2; s.add(p); }
    const sg = new THREE.Mesh(new THREE.PlaneGeometry(8, 2.4), em('#F2E6CF', 2.2)); sg.position.set(SIGN_X, SIGN_Y, -13.5); s.add(sg);
    const wl = new THREE.Mesh(new THREE.BoxGeometry(32, 10, 30), em('#2d2a27', night ? 0.15 : 0.45)); wl.material.side = THREE.BackSide; wl.position.set(0, 5, 1); s.add(wl);
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), em('#45413d', night ? 0.2 : 0.55)); fl.rotation.x = -Math.PI / 2; fl.position.y = 0.01; s.add(fl);
    return s;
  }

  // Levels per mood; the reveal and sweep animate on top of these.
  const base = {};
  let reveal = 1, revealT0 = 0, nextSweep = Infinity;
  function apply() {
    const on = (a, b) => reducedMotion ? 1 : smooth(a, b, reveal); // switches on from off
    const at = (a, b) => 0.3 + 0.7 * on(a, b); // brightens from a dim room, so the poster hand-over never flashes
    softM.emissiveIntensity = base.soft * at(0, 0.35);
    ringM.emissiveIntensity = base.ring * at(0.12, 0.45);
    sideM.emissiveIntensity = base.side * at(0.25, 0.6);
    key.intensity = base.key * at(0.05, 0.5); fill.intensity = base.fill * at(0.25, 0.65); rim.intensity = base.rim * at(0.35, 0.75);
    hemi.intensity = base.hemi * (0.25 + 0.75 * at(0, 0.6));
    ledM.emissiveIntensity = base.led * on(0.5, 0.8);
    signM.emissiveIntensity = base.sign * on(0.65, 1); signGlow.intensity = base.signGlow * on(0.65, 1);
  }
  function setMood(mood) {
    const night = mood === 'night', sunset = mood === 'sunset';
    key.color.set(sunset ? '#ffc890' : night ? '#cdd6f5' : '#ffffff');
    rim.color.set(sunset ? '#ff9a5a' : night ? '#8ea4e8' : '#dfe8ff');
    softM.emissive.set(sunset ? '#ffdcb4' : night ? '#c3d2ff' : '#fff8ee'); sideM.emissive.set(sunset ? '#ffc79a' : '#f4efe6');
    Object.assign(base, {
      key: night ? 14 : sunset ? 34 : 40, rim: night ? 55 : 70, fill: night ? 6 : 30, hemi: night ? 0.18 : 0.5,
      soft: night ? 0.45 : 1.6, ring: night ? 0.5 : 1.2, side: night ? 0.1 : sunset ? 0.3 : 0.35,
      led: night ? 2.6 : 1.6, sign: night ? 4 : 2.4, signGlow: night ? 26 : 18,
    });
    wallM.color.set(night ? '#17191e' : sunset ? '#3a2f27' : '#2d2a27');
    apply();
  }
  // Lights come up one after another when the page opens: softbox, ring, panels, LEDs, then the sign.
  function startReveal(now) { if (reducedMotion) return; reveal = 0; revealT0 = now; nextSweep = now + 2600; apply(); }
  function firstSweep(at) { nextSweep = at; }
  function animate(now) {
    let busy = false;
    if (reveal < 1) { reveal = Math.min(1, (now - revealT0) / 2600); apply(); busy = true; }
    if (!reducedMotion && now >= nextSweep) {
      const t = (now - nextSweep) / 1700;
      if (t >= 1) { sweepM.uniforms.uStrength.value = 0; nextSweep = now + 9000; }
      else { sweepM.uniforms.uPos.value = -0.15 + t * 1.3; sweepM.uniforms.uStrength.value = Math.sin(Math.PI * t) * 1.6; busy = true; }
    }
    return busy;
  }
  return { group: g, clickables, table, sign, signM, led, leaves, plant, envScene, setMood, mirror, lights: { key }, startReveal, firstSweep, animate };
}

// ------------------------------------------------------------------ proving ground
export function buildCourse({ THREE, quality }) {
  const tex = texture.bind(null, THREE), Sky = THREE.Sky;
  const g = new THREE.Group(); g.name = 'course'; g.visible = false;
  const clickables = [], circles = [], R = rng(42);
  // track centreline (closed loop, ~1.1 km)
  const pts = [[0, -60], [70, -70], [118, -40], [125, 10], [100, 55], [55, 62], [20, 40], [-10, 70], [-60, 78], [-112, 50], [-120, 0], [-95, -45], [-50, -62]].map(([x, z]) => new THREE.Vector3(x, 0, z));
  const curve = new THREE.CatmullRomCurve3(pts, true, 'centripetal');
  const N = 900, samples = curve.getSpacedPoints(N);
  const W = 9.5;
  // asphalt texture
  const asphalt = tex(512, 512, (x, w, h) => {
    x.fillStyle = '#3b3c3d'; x.fillRect(0, 0, w, h);
    grain(x, w, h, 46, [1, 1, 1.03], 11);
    for (const centre of [0.19, 0.35, 0.65, 0.81]) {
      const wear = x.createLinearGradient((centre - 0.055) * w, 0, (centre + 0.055) * w, 0);
      wear.addColorStop(0, 'transparent'); wear.addColorStop(0.5, 'rgba(15,16,19,.22)'); wear.addColorStop(1, 'transparent');
      x.fillStyle = wear; x.fillRect((centre - 0.055) * w, 0, 0.11 * w, h);
    }
    x.fillStyle = '#e9e6dc'; x.fillRect(10, 0, 14, h); x.fillRect(w - 24, 0, 14, h);
    x.fillStyle = '#e9c45a'; for (let y = 0; y < h; y += 128) x.fillRect(w / 2 - 5, y, 10, 64);
  });
  asphalt.wrapS = asphalt.wrapT = THREE.RepeatWrapping;
  const ribbon = (half, mat, y, uScale, from = -half, to = half, tint = null) => {
    const pos = [], uv = [], idx = [], colors = [];
    let dist = 0;
    for (let i = 0; i <= N; i++) {
      const p = samples[i % N], q = samples[(i + 1) % N];
      const t = new THREE.Vector3().subVectors(q, p).normalize(), n = new THREE.Vector3(-t.z, 0, t.x);
      if (i > 0) dist += samples[i % N].distanceTo(samples[(i - 1) % N]);
      pos.push(p.x + n.x * from, y, p.z + n.z * from, p.x + n.x * to, y, p.z + n.z * to);
      uv.push(0, dist / uScale, 1, dist / uScale);
      if (tint) colors.push(...tint(dist, 0), ...tint(dist, 1));
      if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.setIndex(idx); geo.computeVertexNormals();
    if (tint) geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const m = new THREE.Mesh(geo, mat); m.receiveShadow = true; g.add(m); return m;
  };
  // Tone varies along the lap: resurfaced sections, older greyer stretches, darker repairs.
  ribbon(W / 2, new THREE.MeshStandardMaterial({ map: asphalt, roughness: 0.82, side: THREE.DoubleSide, vertexColors: true }), 0.02, 10, undefined, undefined, (d, side) => {
    const n = valueNoise(d / 45, side * 0.6), patch = valueNoise(d / 9 + 40, side * 2.3) > 0.78 ? 0.82 : 1;
    const k = (0.84 + n * 0.3) * patch; return [k, k, k * 1.01];
  });
  const kerbTex = tex(64, 64, (x, w, h) => { x.fillStyle = '#c8302a'; x.fillRect(0, 0, w, h / 2); x.fillStyle = '#f2f0ea'; x.fillRect(0, h / 2, w, h / 2); });
  kerbTex.wrapS = kerbTex.wrapT = THREE.RepeatWrapping;
  const kerbM = new THREE.MeshStandardMaterial({ map: kerbTex, roughness: 0.6, side: THREE.DoubleSide });
  ribbon(0, kerbM, 0.055, 2.2, W / 2, W / 2 + 0.9); ribbon(0, kerbM, 0.055, 2.2, -W / 2 - 0.9, -W / 2);

  // grass with the PKM letters mowed into the infield
  // Fine grass grain tiles; the colour itself comes from large-scale noise in the vertices,
  // so the field never shows a repeating pattern from the driver's seat.
  const grassTex = tex(512, 512, (x, w, h) => {
    x.fillStyle = '#c4cbb6'; x.fillRect(0, 0, w, h);
    grain(x, w, h, 46, [0.7, 1, 0.55], 13);
    const R = rng(5); x.strokeStyle = 'rgba(40,60,20,.18)'; x.lineWidth = 1;
    for (let i = 0; i < 900; i++) { const px = R() * w, py = R() * h; x.beginPath(); x.moveTo(px, py); x.lineTo(px + (R() - 0.5) * 3, py - 3 - R() * 5); x.stroke(); }
  });
  grassTex.wrapS = grassTex.wrapT = THREE.RepeatWrapping; grassTex.repeat.set(140, 140);
  const groundGeo = new THREE.PlaneGeometry(700, 700, 140, 140); groundGeo.rotateX(-Math.PI / 2);
  const ground = new THREE.Mesh(groundGeo, new THREE.MeshStandardMaterial({ map: grassTex, roughness: 0.95, vertexColors: true }));
  ground.receiveShadow = true; g.add(ground);
  const mowTex = tex(1024, 410, (x, w, h) => {
    x.fillStyle = '#56763a'; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 16; i++) { x.fillStyle = i % 2 ? 'rgba(130,160,90,.35)' : 'rgba(40,70,25,.25)'; x.fillRect(i * w / 16, 0, w / 16, h); }
    x.save(); x.font = `900 320px ${FONT}`; x.textAlign = 'center'; x.textBaseline = 'middle'; if ('letterSpacing' in x) x.letterSpacing = '15px';
    x.fillStyle = 'rgba(178,205,120,.95)'; x.fillText('PKM', w / 2, h / 2 + 20);
    x.globalCompositeOperation = 'source-atop'; for (let i = 0; i < 40; i++) { x.fillStyle = i % 2 ? 'rgba(255,255,220,.18)' : 'rgba(30,60,10,.12)'; x.fillRect(0, i * h / 40, w, h / 40); }
    x.restore();
    grain(x, w, h, 34, [0.55, 1, 0.4], 17);
  });
  const mowZ = 8, mowW = 74, mowH = 30;
  const mow = new THREE.Mesh(new THREE.PlaneGeometry(mowW, mowH), new THREE.MeshStandardMaterial({ map: mowTex, roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -1 }));
  mow.rotation.x = -Math.PI / 2; mow.position.set(-10, 0.01, mowZ); mow.receiveShadow = true; g.add(mow);
  const pkmZone = { x: -10, z: mowZ, hw: mowW / 2 - 6, hh: mowH / 2 - 4 };

  // laterite shortcut through the infield
  const dirtPts = [[118, -40], [70, -20], [40, 10], [20, 40]].map(([x, z]) => new THREE.Vector3(x, 0, z));
  const dirtCurve = new THREE.CatmullRomCurve3(dirtPts);
  const dirtTex = tex(256, 256, (x, w, h) => { x.fillStyle = '#9a4f2c'; x.fillRect(0, 0, w, h); grain(x, w, h, 60, [1, 0.55, 0.32], 19); });
  dirtTex.wrapS = dirtTex.wrapT = THREE.RepeatWrapping;
  const dirtSamples = dirtCurve.getSpacedPoints(120);
  {
    const pos = [], uv = [], idx = []; let dist = 0;
    for (let i = 0; i <= 120; i++) {
      const p = dirtSamples[i], q = dirtSamples[Math.min(120, i + 1)], o = dirtSamples[Math.max(0, i - 1)];
      const t = new THREE.Vector3().subVectors(q, o).normalize(), n = new THREE.Vector3(-t.z, 0, t.x);
      if (i) dist += p.distanceTo(o);
      pos.push(p.x + n.x * 3.4, 0.012, p.z + n.z * 3.4, p.x - n.x * 3.4, 0.012, p.z - n.z * 3.4); uv.push(0, dist / 6, 1, dist / 6);
      if (i < 120) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.setIndex(idx); geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: dirtTex, roughness: 1, side: THREE.DoubleSide })); m.receiveShadow = true; g.add(m);
  }

  // nearest-point helpers
  const nearest = (arr, x, z) => { let best = 1e9, bi = 0; for (let i = 0; i < arr.length; i += 1) { const p = arr[i], d = (p.x - x) ** 2 + (p.z - z) ** 2; if (d < best) { best = d; bi = i; } } return { d: Math.sqrt(best), i: bi }; };
  const coarse = samples.filter((_, i) => i % 6 === 0);
  const trackDist = (x, z) => { const c = nearest(coarse, x, z); let best = 1e9, bi = 0; for (let k = -8; k <= 8; k++) { const i = ((c.i * 6 + k) % N + N) % N, p = samples[i], d = (p.x - x) ** 2 + (p.z - z) ** 2; if (d < best) { best = d; bi = i; } } return { d: Math.sqrt(best), i: bi }; };

  {
    const lush = new THREE.Color('#5d7d3c'), dry = new THREE.Color('#8f8a4f'), deep = new THREE.Color('#41602d'), worn = new THREE.Color('#7d6b49');
    const p = groundGeo.attributes.position, col = new Float32Array(p.count * 3), c = new THREE.Color();
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), z = p.getZ(i), n = fbm(x, z);
      c.copy(deep).lerp(lush, Math.min(1, n * 1.6)).lerp(dry, Math.max(0, (n - 0.55) * 2.2));
      const edge = trackDist(x, z).d - W / 2 - 0.9;
      if (edge < 6) c.lerp(worn, Math.max(0, 1 - Math.max(0, edge) / 6) * 0.55); // worn verge
      col[i * 3] = c.r * 1.25; col[i * 3 + 1] = c.g * 1.25; col[i * 3 + 2] = c.b * 1.25;
    }
    groundGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    // Grass tufts: five-blade clumps, denser along the track edge where the eye notices them.
    const blades = [];
    for (let b = 0; b < 5; b++) {
      const a = b / 5 * Math.PI * 2 + 0.4, h = 0.26 + (b % 3) * 0.07, lean = 0.09;
      const cx = Math.cos(a), cz = Math.sin(a), px = -cz * 0.028, pz = cx * 0.028;
      blades.push(px, 0, pz, -px, 0, -pz, cx * lean, h, cz * lean);
    }
    const tuftG = new THREE.BufferGeometry(); tuftG.setAttribute('position', new THREE.Float32BufferAttribute(blades, 3)); tuftG.computeVertexNormals();
    const TUFTS = quality === 'low' ? 1400 : 2600;
    const tufts = new THREE.InstancedMesh(tuftG, new THREE.MeshStandardMaterial({ roughness: 1, side: THREE.DoubleSide }), TUFTS);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pos = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), R = rng(77);
    let placed = 0, tries = 0;
    while (placed < TUFTS && tries++ < TUFTS * 8) {
      let x, z;
      if (R() < 0.65) {
        const k = Math.floor(R() * N), sp = samples[k], sq = samples[(k + 1) % N];
        const across = Math.atan2(sq.z - sp.z, sq.x - sp.x) + Math.PI / 2, off = (R() < 0.5 ? -1 : 1) * (W / 2 + 1.3 + R() * R() * 14);
        x = sp.x + Math.cos(across) * off; z = sp.z + Math.sin(across) * off;
      }
      else { x = (R() - 0.5) * 300; z = (R() - 0.5) * 220; }
      if (trackDist(x, z).d < W / 2 + 1.2 || nearest(dirtSamples, x, z).d < 3.8) continue;
      const s0 = 0.7 + R() * 0.9;
      m.compose(pos.set(x, 0, z), q.setFromAxisAngle(up, R() * 6.3), sc.set(s0, s0 * (0.8 + R() * 0.5), s0));
      tufts.setMatrixAt(placed, m);
      tufts.setColorAt(placed, c.setHSL(0.2 + R() * 0.07, 0.38 + R() * 0.15, 0.24 + R() * 0.12));
      placed++;
    }
    tufts.count = placed; tufts.receiveShadow = true; g.add(tufts);
  }
  const cellSize = 10, cells = new Map();
  const cellKey = (i, j) => i * 1024 + j;
  function indexRoad(points, width, type) {
    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1], b = points[i], dx = b.x - a.x, dz = b.z - a.z;
      const segment = { x: a.x, z: a.z, dx, dz, inv: 1 / Math.max(1e-9, dx * dx + dz * dz), type };
      for (let col = Math.floor((Math.min(a.x, b.x) - width) / cellSize); col <= Math.floor((Math.max(a.x, b.x) + width) / cellSize); col++) {
        for (let row = Math.floor((Math.min(a.z, b.z) - width) / cellSize); row <= Math.floor((Math.max(a.z, b.z) + width) / cellSize); row++) {
          const key = cellKey(col, row);
          if (!cells.has(key)) cells.set(key, []);
          cells.get(key).push(segment);
        }
      }
    }
  }
  indexRoad(samples, W / 2 + 0.9, 'road');
  indexRoad(dirtSamples, 3.4, 'dirt');
  // trees (instanced), kept clear of the track
  const trunkG = new THREE.CylinderGeometry(0.18, 0.28, 1, 7); trunkG.translate(0, 0.5, 0);
  const crownG = new THREE.IcosahedronGeometry(1, 1);
  const trunks = new THREE.InstancedMesh(trunkG, new THREE.MeshStandardMaterial({ color: '#5a4430', roughness: 1 }), 260);
  const crowns = new THREE.InstancedMesh(crownG, new THREE.MeshStandardMaterial({ color: '#77815d', roughness: 1 }), 260 * 4);
  trunks.castShadow = crowns.castShadow = true;
  let ti = 0; const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
  while (ti < 260) {
    const x = (R() - 0.5) * 420, z = (R() - 0.5) * 420;
    if (trackDist(x, z).d < 14) continue;
    if (Math.abs(x - pkmZone.x) < pkmZone.hw + 10 && Math.abs(z - pkmZone.z) < pkmZone.hh + 10) continue;
    if (nearest(dirtSamples, x, z).d < 8) continue;
    const h = 4 + R() * 6, s = 2 + R() * 2.4;
    m4.compose(new THREE.Vector3(x, 0, z), q.identity(), new THREE.Vector3(1, h, 1)); trunks.setMatrixAt(ti, m4);
    const phase = R() * Math.PI * 2;
    for (let lobe = 0; lobe < 4; lobe++) {
      const angle = phase + lobe * Math.PI * 2 / 3;
      const offset = lobe === 3 ? 0 : s * 0.53;
      const p = new THREE.Vector3(x + Math.cos(angle) * offset, h + s * (lobe === 3 ? 0.64 : 0.26), z + Math.sin(angle) * offset);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
      m4.compose(p, q, new THREE.Vector3(s * 0.77, s * (0.43 + R() * 0.2), s * 0.71));
      crowns.setMatrixAt(ti * 4 + lobe, m4);
      crowns.setColorAt(ti * 4 + lobe, c.setHSL(0.23 + R() * 0.055, 0.31, 0.20 + R() * 0.10));
    }
    circles.push({ x, z, r: 0.45 }); ti++;
  }
  g.add(trunks, crowns);
  // A continuous ridge closes the horizon beyond the driveable ground.
  const ridge = [], indices = [];
  for (let i = 0; i <= 128; i++) {
    const a = i * Math.PI / 64, x = Math.cos(a) * 490, z = Math.sin(a) * 490;
    const h = 19 + 10 * Math.sin(3 * a) + 6 * Math.cos(7 * a) + 3 * Math.sin(13 * a);
    ridge.push(x, -4, z, x, h, z);
    if (i) { const n = i * 2; indices.push(n - 2, n - 1, n, n, n - 1, n + 1); }
  }
  const land = new THREE.BufferGeometry();
  land.setAttribute('position', new THREE.Float32BufferAttribute(ridge, 3)); land.setIndex(indices);
  g.add(new THREE.Mesh(land, new THREE.MeshBasicMaterial({ color: '#4b5c51', side: THREE.DoubleSide })));

  // start gantry, flag and billboards
  const start = samples[0], next = samples[3], dir = new THREE.Vector3().subVectors(next, start).normalize();
  const yaw0 = Math.atan2(dir.x, dir.z);
  const gantry = new THREE.Group(); gantry.position.copy(start); gantry.rotation.y = yaw0; g.add(gantry);
  const steel = new THREE.MeshStandardMaterial({ color: '#2b2d2f', metalness: 0.7, roughness: 0.4 });
  for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.4, 6.4, 0.4), steel); p.position.set(s * (W / 2 + 1.6), 3.2, 0); p.castShadow = true; gantry.add(p); }
  const beamTex = tex(2048, 256, (x, w, h) => { x.fillStyle = '#0d0d0d'; x.fillRect(0, 0, w, h); x.fillStyle = '#F2F0EA'; x.font = `800 150px ${FONT}`; x.textBaseline = 'middle'; x.fillText('PKM', 60, h / 2 + 6); x.fillStyle = '#BBA783'; x.font = `600 84px ${FONT}`; x.fillText('KUMASI PROVING GROUND', 470, h / 2 + 4); });
  const beam = new THREE.Mesh(new THREE.BoxGeometry(W + 3.6, 1.4, 0.5), [steel, steel, steel, steel, new THREE.MeshStandardMaterial({ map: beamTex, emissive: '#fff', emissiveMap: beamTex, emissiveIntensity: 0.25 }), new THREE.MeshStandardMaterial({ map: beamTex })]);
  beam.position.y = 6.2; beam.castShadow = true; gantry.add(beam);
  // chequered line
  const cheq = tex(256, 32, (x, w, h) => { for (let i = 0; i < 16; i++) for (let j = 0; j < 2; j++) { x.fillStyle = (i + j) % 2 ? '#111' : '#eee'; x.fillRect(i * 16, j * 16, 16, 16); } });
  const line = new THREE.Mesh(new THREE.PlaneGeometry(W, 1.2), new THREE.MeshStandardMaterial({ map: cheq, roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -2 })); line.rotation.x = -Math.PI / 2; line.position.y = 0.03; gantry.add(line);
  // Ghana flag
  const flagTex = tex(300, 200, (x, w, h) => { x.fillStyle = '#ce1126'; x.fillRect(0, 0, w, h / 3); x.fillStyle = '#fcd116'; x.fillRect(0, h / 3, w, h / 3); x.fillStyle = '#006b3f'; x.fillRect(0, 2 * h / 3, w, h / 3);
    x.fillStyle = '#000'; x.beginPath(); const cx = w / 2, cy = h / 2, r = 26; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.4 : r; x.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } x.fill(); });
  const flagGeo = new THREE.PlaneGeometry(3, 2, 20, 4);
  const flag = new THREE.Mesh(flagGeo, new THREE.MeshStandardMaterial({ map: flagTex, side: THREE.DoubleSide, roughness: 0.8 }));
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 10, 10), steel);
  const flagG = new THREE.Group(); flagG.position.copy(start).add(new THREE.Vector3(dir.z, 0, -dir.x).multiplyScalar(W / 2 + 6)); g.add(flagG);
  pole.position.y = 5; flagG.add(pole); flag.position.set(1.55, 8.8, 0); flagG.add(flag); flag.castShadow = true;
  circles.push({ x: flagG.position.x, z: flagG.position.z, r: 0.2 });
  const billboard = (text1, text2, accent, pos, rot, click) => {
    const b = new THREE.Group(); b.position.copy(pos); b.rotation.y = rot; g.add(b);
    const t = tex(1024, 512, (x, w, h) => { x.fillStyle = '#0c0c0c'; x.fillRect(0, 0, w, h); x.fillStyle = accent; x.fillRect(0, h - 22, w, 22);
      x.fillStyle = '#F2F0EA'; x.font = `800 112px ${FONT}`; x.fillText(text1, 60, 200); x.fillStyle = '#B3ACA1'; x.font = `500 50px ${FONT}`; x.fillText(text2, 64, 300); x.fillStyle = accent; x.font = `700 46px ${FONT}`; x.fillText('Tap to visit →', 64, 420); });
    const face = new THREE.Mesh(new THREE.PlaneGeometry(10, 5), new THREE.MeshStandardMaterial({ map: t, emissive: '#fff', emissiveMap: t, emissiveIntensity: 0.18 })); face.position.y = 5; face.userData.click = click; b.add(face); clickables.push(face);
    for (const s of [-3, 3]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.3, 5, 0.3), steel); p.position.set(s, 1.5, -0.2); p.castShadow = true; b.add(p); circles.push({ x: pos.x + Math.cos(rot) * s, z: pos.z - Math.sin(rot) * s, r: 0.3 }); }
    const back = new THREE.Mesh(new THREE.BoxGeometry(10.2, 5.2, 0.2), steel); back.position.set(0, 5, -0.15); b.add(back);
    return b;
  };
  billboard('Papa Kojo', 'Back to the portfolio', '#BBA783', new THREE.Vector3(30, 0, -82), 0, 'home');
  billboard('Accra 3D', 'Drive Liberation Road', '#93AE7C', new THREE.Vector3(140, 0, 20), -Math.PI / 2, 'accra');
  billboard('Iconka Designs', 'Brands, posters, menus', '#d9774a', new THREE.Vector3(-136, 0, 10), Math.PI / 2, 'design');

  // slalom cones on the back straight
  const cones = [];
  const coneG = new THREE.ConeGeometry(0.22, 0.7, 16); coneG.translate(0, 0.35, 0);
  const coneM = new THREE.MeshStandardMaterial({ color: '#ff6a1a', roughness: 0.5 });
  for (let k = 0; k < 8; k++) {
    const i = Math.round(N * 0.52) + k * 7, p = samples[i], q2 = samples[i + 1];
    const t = new THREE.Vector3().subVectors(q2, p).normalize(), n = new THREE.Vector3(-t.z, 0, t.x);
    const cone = new THREE.Mesh(coneG, coneM); cone.castShadow = true;
    cone.position.copy(p).addScaledVector(n, (k % 2 ? 1 : -1) * 1.6); g.add(cone);
    cones.push({ mesh: cone, home: cone.position.clone(), v: new THREE.Vector3(), spin: new THREE.Vector3(), knocked: false });
  }
  // street lamps along the main straight (for night)
  const lampHeads = [];
  for (let k = 0; k < 7; k++) {
    const i = Math.round(N * 0.06) + k * 16, p = samples[i], q2 = samples[i + 1];
    const t = new THREE.Vector3().subVectors(q2, p).normalize(), n = new THREE.Vector3(-t.z, 0, t.x);
    const base = p.clone().addScaledVector(n, W / 2 + 2.5);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 8, 8), steel); post.position.copy(base).setY(4); post.castShadow = true; g.add(post);
    const head = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.15, 0.4), new THREE.MeshStandardMaterial({ color: '#222', emissive: '#ffd9a0', emissiveIntensity: 0 }));
    head.position.copy(base).addScaledVector(n, -0.6).setY(8); head.rotation.y = Math.atan2(n.x, n.z); g.add(head); lampHeads.push(head);
    circles.push({ x: base.x, z: base.z, r: 0.2 });
  }
  const lampLights = [];
  for (let k = 0; k < 3; k++) { const L = new THREE.PointLight(0xffd9a0, 0, 26, 1.6); L.position.copy(lampHeads[k * 3].position).setY(7.6); g.add(L); lampLights.push(L); }

  // Distance boards sit on the outside of the approach and face the oncoming driver.
  const boardPost = new THREE.BoxGeometry(0.08, 1.15, 0.08);
  for (const apex of [0.24, 0.65]) {
    for (const metres of [75, 50, 25]) {
      const u = (1 + apex - metres / curve.getLength()) % 1;
      const point = curve.getPointAt(u), tangent = curve.getTangentAt(u);
      const left = new THREE.Vector3(-tangent.z, 0, tangent.x);
      const centre = point.clone().addScaledVector(left, -W / 2 - 2.2);
      const post = new THREE.Mesh(boardPost, steel); post.position.copy(centre).setY(0.575); g.add(post);
      const face = tex(128, 64, (ctx, w, h) => {
        ctx.fillStyle = '#ece7d8'; ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#202420'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.font = 'bold 48px sans-serif'; ctx.fillText(String(metres), w / 2, h / 2);
      });
      const board = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.55, 0.04), new THREE.MeshStandardMaterial({ map: face, roughness: 0.72 }));
      board.position.copy(centre).setY(1.2); board.rotation.y = Math.atan2(-tangent.x, -tangent.z); g.add(board);
    }
  }

  // sky + sun
  const sky = new Sky(); sky.scale.setScalar(4500); g.add(sky);
  const sun = new THREE.DirectionalLight(0xffffff, 2.6); sun.castShadow = true;
  sun.shadow.mapSize.set(quality === 'low' ? 1024 : 2048, quality === 'low' ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -40, right: 40, top: 40, bottom: -40, near: 1, far: 300 }); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
  g.add(sun, sun.target);
  const hemi = new THREE.HemisphereLight(0xcfe3ff, 0x4a5a30, 0.6); g.add(hemi);
  const sunDir = new THREE.Vector3();
  function setMood(mood) {
    const elev = mood === 'night' ? -6 : mood === 'sunset' ? 4 : 42, az = mood === 'sunset' ? 250 : 200;
    const phi = THREE.MathUtils.degToRad(90 - elev), theta = THREE.MathUtils.degToRad(az);
    sunDir.setFromSphericalCoords(1, phi, theta);
    const u = sky.material.uniforms; u.sunPosition.value.copy(sunDir); u.turbidity.value = mood === 'sunset' ? 6 : 3; u.rayleigh.value = mood === 'night' ? 0.4 : mood === 'sunset' ? 2.6 : 1.2; u.mieCoefficient.value = 0.004; u.mieDirectionalG.value = 0.85;
    sun.intensity = mood === 'night' ? 0.05 : mood === 'sunset' ? 1.9 : 2.7; sun.color.set(mood === 'sunset' ? '#ffb27a' : mood === 'night' ? '#8aa0d8' : '#fff4e6');
    hemi.intensity = mood === 'night' ? 0.14 : mood === 'sunset' ? 0.3 : 0.45; hemi.color.set(mood === 'night' ? '#38456a' : '#cfe3ff');
    for (const h of lampHeads) h.material.emissiveIntensity = mood === 'night' ? 4 : 0;
    for (const L of lampLights) L.intensity = mood === 'night' ? 120 : 0;
  }
  function follow(p) { sun.position.copy(p).addScaledVector(sunDir.y > 0.05 ? sunDir : new THREE.Vector3(0.3, 1, 0.2).normalize(), 120); sun.target.position.copy(p); }
  function envScene(mood) {
    const s = new THREE.Scene(); const sk = new Sky(); sk.scale.setScalar(1000); Object.assign(sk.material.uniforms.sunPosition.value, sunDir);
    sk.material.uniforms.sunPosition.value.copy(sunDir); sk.material.uniforms.rayleigh.value = sky.material.uniforms.rayleigh.value; sk.material.uniforms.turbidity.value = sky.material.uniforms.turbidity.value; s.add(sk);
    const gm = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshBasicMaterial({ color: mood === 'night' ? '#050806' : '#3d5228' })); gm.rotation.x = -Math.PI / 2; gm.position.y = -1; s.add(gm);
    return s;
  }
  let t = 0;
  function animate(dt, car) {
    t += dt;
    const p = flagGeo.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i) + 1.5; p.setZ(i, Math.sin(x * 2.2 - t * 6) * 0.12 * x / 3); } p.needsUpdate = true; flagGeo.computeVertexNormals();
    for (const c of cones) {
      if (car) { const dx = c.mesh.position.x - car.x, dz = c.mesh.position.z - car.z, d = Math.hypot(dx, dz), sp = Math.hypot(car.vx, car.vy);
        if (d < 1.5 && sp > 1 && !c.knocked) { c.knocked = true; c.v.set(dx / Math.max(0.01, d) * sp * 0.7 + Math.sin(car.yaw) * sp * 0.5, 2 + sp * 0.15, dz / Math.max(0.01, d) * sp * 0.7 + Math.cos(car.yaw) * sp * 0.5); c.spin.set(R() * 8, R() * 8, R() * 8); c.onHit && c.onHit(); } }
      if (c.knocked) {
        c.v.y -= 9.8 * dt; c.mesh.position.addScaledVector(c.v, dt);
        c.mesh.rotation.x += c.spin.x * dt; c.mesh.rotation.z += c.spin.z * dt;
        if (c.mesh.position.y < 0) { c.mesh.position.y = 0; c.v.multiplyScalar(0.5); c.v.y = Math.abs(c.v.y) * 0.3; c.spin.multiplyScalar(0.6); }
      }
    }
  }
  function resetCones() { for (const c of cones) { c.knocked = false; c.mesh.position.copy(c.home); c.mesh.rotation.set(0, 0, 0); } }

  const asphaltContact = { height: 0.02, mu: 1.05, rough: 0.02, name: 'asphalt' };
  const kerbContact = { height: 0.055, mu: 0.95, rough: 0.35, name: 'kerb' };
  const dirtContact = { height: 0.012, mu: 0.68, rough: 0.5, name: 'dirt' };
  const grassContact = { height: 0, mu: 0.6, rough: 0.6, name: 'grass' };
  function grip(x, z) {
    const nearby = cells.get(cellKey(Math.floor(x / cellSize), Math.floor(z / cellSize)));
    let surface = grassContact;
    if (nearby) for (const s of nearby) {
      const dx = x - s.x, dz = z - s.z;
      const t = Math.max(0, Math.min(1, (dx * s.dx + dz * s.dz) * s.inv));
      const d2 = (dx - t * s.dx) ** 2 + (dz - t * s.dz) ** 2;
      if (s.type === 'road') {
        if (d2 < (W / 2) ** 2) return asphaltContact;
        if (d2 < (W / 2 + 0.9) ** 2) surface = kerbContact;
      } else if (surface === grassContact && d2 < 3.4 ** 2) surface = dirtContact;
    }
    return surface;
  }
  return {
    group: g, clickables, circles, curve, samples, start: { x: start.x, z: start.z, yaw: yaw0 }, grip, trackDist, pkmZone,
    setMood, follow, envScene, animate, resetCones, cones, bounds: { minX: -200, maxX: 200, minZ: -200, maxZ: 200 },
  };
}
