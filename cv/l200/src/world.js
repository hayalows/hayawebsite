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

export const FONT = '"Inter", ui-sans-serif, system-ui, sans-serif';

// ------------------------------------------------------------------ showroom
export function buildShowroom({ THREE, quality, reflections }) {
  const tex = texture.bind(null, THREE), Reflector = THREE.Reflector;
  const g = new THREE.Group(); g.name = 'showroom';
  const clickables = [];
  const R = rng(7);
  // polished epoxy floor with subtle tile joints
  const floorTex = tex(512, 512, (x, w, h) => {
    x.fillStyle = '#756c61'; x.fillRect(0, 0, w, h);
    grain(x, w, h, 14, [1, 1, 1], 7);
    x.strokeStyle = '#57514b'; x.lineWidth = 3; for (let i = 0; i <= 4; i++) { x.beginPath(); x.moveTo(i * w / 4, 0); x.lineTo(i * w / 4, h); x.stroke(); x.beginPath(); x.moveTo(0, i * h / 4); x.lineTo(w, i * h / 4); x.stroke(); }
  });
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping; floorTex.repeat.set(10, 10);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshPhysicalMaterial({ map: floorTex, roughness: 0.48, metalness: 0, clearcoat: 0.22, clearcoatRoughness: 0.45 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; g.add(floor);
  let mirror = null;
  if (reflections) {
    const shader = { ...Reflector.ReflectorShader, fragmentShader: Reflector.ReflectorShader.fragmentShader.replace('gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );', 'gl_FragColor = vec4( base.rgb * color, 1.0 );') };
    mirror = new Reflector(new THREE.PlaneGeometry(40, 40), { textureWidth: 512, textureHeight: 512, multisample: 0, color: 0x1a1a1a, shader, clipBias: 0.003 });
    mirror.material.transparent = true; mirror.material.blending = THREE.AdditiveBlending; mirror.material.depthWrite = false;
    mirror.rotation.x = -Math.PI / 2; mirror.position.y = 0.002; mirror.renderOrder = 1; g.add(mirror);
  }
  const wallM = new THREE.MeshStandardMaterial({ color: '#141414', roughness: 0.92 });
  const box = (w, h, d, x, y, z, m) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); o.receiveShadow = true; g.add(o); return o; };
  box(40, 10, 0.4, 0, 5, -14, wallM); box(0.4, 10, 40, -16, 5, 0, wallM); box(0.4, 10, 40, 16, 5, 0, wallM); box(40, 10, 0.4, 0, 5, 16, wallM);
  box(40, 0.3, 40, 0, 9.6, 0, new THREE.MeshStandardMaterial({ color: '#0b0b0b', roughness: 1 }));
  // oak slat feature wall
  const oak = new THREE.MeshStandardMaterial({ color: '#6b4a2f', roughness: 0.6 });
  const slats = new THREE.InstancedMesh(new THREE.BoxGeometry(0.09, 7.6, 0.12), oak, 120);
  const mtx = new THREE.Matrix4();
  for (let i = 0; i < 120; i++) { mtx.makeTranslation(-11.9 + i * 0.2, 3.8, -13.72); slats.setMatrixAt(i, mtx); }
  slats.receiveShadow = true; g.add(slats);
  // backlit PKM sign
  const signTex = tex(1600, 560, (x, w, h) => {
    x.clearRect(0, 0, w, h); x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = `800 360px ${FONT}`; if ('letterSpacing' in x) x.letterSpacing = '-18px';
    x.fillText('PKM', w / 2, h * 0.42);
    x.font = `500 44px ${FONT}`; if ('letterSpacing' in x) x.letterSpacing = '6px'; x.fillText('PAPA KOJO MENSAH   /   KUMASI', w / 2, h * 0.86);
  });
  const signM = new THREE.MeshStandardMaterial({ color: '#000', emissive: '#F2E6CF', emissiveMap: signTex, emissiveIntensity: 2.4, transparent: true, alphaMap: signTex, roughness: 1 });
  signTex.colorSpace = THREE.NoColorSpace;
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 3.36), signM); sign.position.set(0, 5.5, -13.55); sign.userData.click = 'sign'; g.add(sign); clickables.push(sign);
  const halo = new THREE.Mesh(new THREE.PlaneGeometry(11, 4.2), new THREE.MeshBasicMaterial({ color: '#BBA783', transparent: true, opacity: 0.08, depthWrite: false })); halo.position.set(0, 5.5, -13.62); g.add(halo);
  // ceiling light strips (also what the paint reflects)
  const stripM = new THREE.MeshStandardMaterial({ color: '#fff', emissive: '#fff8ee', emissiveIntensity: 1.4 });
  const strips = [];
  for (const x of [-6, -3, 0, 3, 6]) { const s = box(0.18, 0.05, 18, x, 9.3, 0, stripM); strips.push(s); }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(4.6, 0.06, 8, 96), stripM); ring.rotation.x = Math.PI / 2; ring.position.y = 9.2; g.add(ring);
  // Visible diffusion panels correspond to the broad cards in the reflection environment.
  for (const side of [-1, 1]) {
    box(0.12, 3.7, 9.6, side * 15.68, 4.4, 4.5, stripM);
    for (const z of [0, 2.25, 4.5, 6.75, 9]) box(0.18, 3.8, 0.065, side * 15.58, 4.4, z, wallM);
  }
  // turntable
  const table = new THREE.Group(); g.add(table);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.25, 0.1, 96), new THREE.MeshPhysicalMaterial({ color: '#36383a', roughness: 0.39, metalness: 0.3, clearcoat: 0.6 }));
  disc.position.y = 0.05; disc.receiveShadow = true; table.add(disc);
  const led = new THREE.Mesh(new THREE.TorusGeometry(4.26, 0.018, 6, 160), new THREE.MeshStandardMaterial({ color: '#BBA783', emissive: '#BBA783', emissiveIntensity: 1.6 }));
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
  const frame = box(0.08, 3.2, 2.4, -15.8, 3.4, -5, new THREE.MeshStandardMaterial({ color: '#BBA783', metalness: 0.8, roughness: 0.3 }));
  // Accra 3D portal: a lit doorway on the right wall
  const portal = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 5), new THREE.MeshStandardMaterial({ roughness: 0.6, emissive: '#ffffff', emissiveIntensity: 0.9, emissiveMap: tex(360, 500, (x, w, h) => {
    const gr = x.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#f0b26b'); gr.addColorStop(0.55, '#d9774a'); gr.addColorStop(0.56, '#3d4a3c'); gr.addColorStop(1, '#232a22'); x.fillStyle = gr; x.fillRect(0, 0, w, h);
    x.fillStyle = '#1b1f1a'; for (let i = 0; i < 9; i++) { const px = 20 + i * 38, ph = 40 + (i * 37 % 70); x.fillRect(px, h * 0.56 - ph, 26, ph); }
    x.fillStyle = '#F2F0EA'; x.font = `800 46px ${FONT}`; x.fillText('Accra 3D', 26, 70); x.font = `500 22px ${FONT}`; x.fillText('Drive Liberation Road →', 28, 104);
  }) }));
  portal.position.set(15.75, 2.5, -4); portal.rotation.y = -Math.PI / 2; portal.userData.click = 'accra'; g.add(portal); clickables.push(portal);
  box(0.1, 5.3, 0.15, 15.75, 2.65, -5.9, wallM); box(0.1, 5.3, 0.15, 15.75, 2.65, -2.1, wallM);

  // lights
  const lights = new THREE.Group(); g.add(lights);
  const key = new THREE.SpotLight(0xffffff, 40, 30, 0.55, 0.9, 1.5); key.position.set(2.5, 9, 3); key.target.position.set(0, 0, 0);
  key.castShadow = true; key.shadow.mapSize.set(quality === 'low' ? 1024 : 2048, quality === 'low' ? 1024 : 2048); key.shadow.bias = -0.0002; key.shadow.normalBias = 0.02; key.shadow.radius = 6;
  lights.add(key, key.target);
  const rim = new THREE.SpotLight(0xdfe8ff, 70, 30, 0.7, 0.8, 1.5); rim.position.set(-6, 7, -7); lights.add(rim, rim.target);
  const fill = new THREE.SpotLight(0xffe6c8, 35, 30, 0.8, 0.9, 1.5); fill.position.set(7, 4, 8); lights.add(fill, fill.target);
  const hemi = new THREE.HemisphereLight(0xbfc5cc, 0x1a1714, 0.35); lights.add(hemi);
  const signGlow = new THREE.PointLight(0xffe2b8, 18, 14, 2); signGlow.position.set(0, 5.5, -12.5); lights.add(signGlow);

  // environment for reflections: bright strips in a dark room
  function envScene(mood) {
    const s = new THREE.Scene(); s.background = new THREE.Color(mood === 'night' ? '#020305' : '#0c0c0c');
    const em = (c, i) => new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(i) });
    const tone = mood === 'sunset' ? '#ffcf9e' : mood === 'night' ? '#9fb6ff' : '#ffffff';
    for (const x of [-6, -3, 0, 3, 6]) { const m = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 18), em(tone, mood === 'night' ? 2 : 8)); m.position.set(x, 9, 0); s.add(m); }
    const big = new THREE.Mesh(new THREE.PlaneGeometry(10, 5), em(mood === 'sunset' ? '#ffb070' : '#eef2f6', mood === 'night' ? 0.6 : 3)); big.position.set(15.6, 4.4, 4.5); big.rotation.y = -Math.PI / 2; s.add(big);
    const big2 = new THREE.Mesh(new THREE.PlaneGeometry(10, 4), em('#d9d2c4', mood === 'night' ? 0.3 : 1.6)); big2.position.set(-14, 3.5, 4); big2.rotation.y = Math.PI / 2; s.add(big2);
    const sg = new THREE.Mesh(new THREE.PlaneGeometry(9, 3), em('#F2E6CF', 2.5)); sg.position.set(0, 5.5, -13.5); s.add(sg);
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), em('#2a2a2a', 1)); fl.rotation.x = -Math.PI / 2; s.add(fl);
    return s;
  }
  function setMood(mood) {
    const night = mood === 'night', sunset = mood === 'sunset';
    key.color.set(sunset ? '#ffc890' : night ? '#cdd6f5' : '#ffffff'); key.intensity = night ? 14 : sunset ? 36 : 40;
    rim.color.set(sunset ? '#ff9a5a' : night ? '#8ea4e8' : '#dfe8ff'); rim.intensity = night ? 60 : 70;
    fill.intensity = night ? 8 : 35; hemi.intensity = night ? 0.22 : 0.85;
    stripM.emissiveIntensity = night ? 0.4 : 1.4; stripM.emissive.set(sunset ? '#ffd9ae' : night ? '#bcd0ff' : '#fff8ee');
    signM.emissiveIntensity = night ? 4 : 2.4; led.material.emissiveIntensity = night ? 2.5 : 1.6;
    wallM.color.set(night ? '#171a20' : sunset ? '#544338' : '#484543');
  }
  return { group: g, clickables, table, sign, signM, led, leaves, plant, envScene, setMood, mirror, lights: { key } };
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
  const ribbon = (half, mat, y, uScale, from = -half, to = half) => {
    const pos = [], uv = [], idx = [];
    let dist = 0;
    for (let i = 0; i <= N; i++) {
      const p = samples[i % N], q = samples[(i + 1) % N];
      const t = new THREE.Vector3().subVectors(q, p).normalize(), n = new THREE.Vector3(-t.z, 0, t.x);
      if (i > 0) dist += samples[i % N].distanceTo(samples[(i - 1) % N]);
      pos.push(p.x + n.x * from, y, p.z + n.z * from, p.x + n.x * to, y, p.z + n.z * to);
      uv.push(0, dist / uScale, 1, dist / uScale);
      if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.setIndex(idx); geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, mat); m.receiveShadow = true; g.add(m); return m;
  };
  ribbon(W / 2, new THREE.MeshStandardMaterial({ map: asphalt, roughness: 0.82, side: THREE.DoubleSide }), 0.02, 10);
  const kerbTex = tex(64, 64, (x, w, h) => { x.fillStyle = '#c8302a'; x.fillRect(0, 0, w, h / 2); x.fillStyle = '#f2f0ea'; x.fillRect(0, h / 2, w, h / 2); });
  kerbTex.wrapS = kerbTex.wrapT = THREE.RepeatWrapping;
  const kerbM = new THREE.MeshStandardMaterial({ map: kerbTex, roughness: 0.6, side: THREE.DoubleSide });
  ribbon(0, kerbM, 0.055, 2.2, W / 2, W / 2 + 0.9); ribbon(0, kerbM, 0.055, 2.2, -W / 2 - 0.9, -W / 2);

  // grass with the PKM letters mowed into the infield
  const grassTex = tex(512, 512, (x, w, h) => {
    x.fillStyle = '#4d6b33'; x.fillRect(0, 0, w, h);
    grain(x, w, h, 40, [0.6, 1, 0.45], 13);
  });
  grassTex.wrapS = grassTex.wrapT = THREE.RepeatWrapping; grassTex.repeat.set(90, 90);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(700, 700), new THREE.MeshStandardMaterial({ map: grassTex, roughness: 0.95 }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; g.add(ground);
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
  const crowns = new THREE.InstancedMesh(crownG, new THREE.MeshStandardMaterial({ color: '#3f6b2c', roughness: 0.9, flatShading: true }), 260);
  trunks.castShadow = crowns.castShadow = true;
  let ti = 0; const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
  while (ti < 260) {
    const x = (R() - 0.5) * 420, z = (R() - 0.5) * 420;
    if (trackDist(x, z).d < 14) continue;
    if (Math.abs(x - pkmZone.x) < pkmZone.hw + 10 && Math.abs(z - pkmZone.z) < pkmZone.hh + 10) continue;
    if (nearest(dirtSamples, x, z).d < 8) continue;
    const h = 4 + R() * 6, s = 2 + R() * 2.4;
    m4.compose(new THREE.Vector3(x, 0, z), q.identity(), new THREE.Vector3(1, h, 1)); trunks.setMatrixAt(ti, m4);
    m4.compose(new THREE.Vector3(x, h + s * 0.4, z), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), R() * 6), new THREE.Vector3(s, s * 0.75, s)); crowns.setMatrixAt(ti, m4);
    crowns.setColorAt(ti, c.setHSL(0.27 + R() * 0.06, 0.4 + R() * 0.2, 0.22 + R() * 0.1));
    circles.push({ x, z, r: 0.45 }); ti++;
  }
  g.add(trunks, crowns);

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
