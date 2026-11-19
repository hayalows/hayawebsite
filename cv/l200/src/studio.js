import { buildShowroom, buildCourse } from './world.js';
import { adaptLegacyThree } from './legacy.js';
import { chooseEngine } from './engine-choice.js';

import { buildVehicle, SPECS, VehicleAudio, DriveController, makeCollider, createHud, createTouch, createDriveBar, veil, paintNavMap, DRIVE_HINT, HUD_CSS } from '/l200/pkm-drive.js?v=11';

export async function startStudio(shell) {
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const params = new URLSearchParams(location.search);
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} } };
const style = document.createElement('style'); style.textContent = HUD_CSS; document.head.appendChild(style);

// ---------------------------------------------------------------- renderer
const canvas = $('#view');
const qualityValue = params.get('quality') || store.get('pkm.drive.quality', 'auto');
const quality = ['auto', 'high', 'low'].includes(qualityValue) ? qualityValue : 'auto';
const compact = matchMedia('(max-width: 900px)');
// Capable computers get the modern renderer with glow and a reflective floor. Phones and weak
// graphics chips get Accra's lighter engine (often already cached), taught modern colour rules.
const engine = window.__pkmEngine || chooseEngine(quality);
const high = engine === 'modern';
async function loadGraphics() {
  if (high) return (await import('/l200/studio-high.js?v=2')).graphics;
  await import('/accra3d/three-r128.min.js');
  return adaptLegacyThree(window.THREE);
}
const THREE = await loadGraphics();
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
if (!high) {
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.physicallyCorrectLights = true;
}
let economy = false;
const effQ = () => high && !economy ? 'high' : 'low';
shell.watchCanvas(canvas);
renderer.setPixelRatio(Math.min(devicePixelRatio, effQ() === 'low' ? 1 : 1.5));
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 6000);
const controls = new THREE.OrbitControls(camera, canvas);
Object.assign(controls, { enableDamping: true, dampingFactor: 0.07, minDistance: 4, maxDistance: 18, maxPolarAngle: Math.PI * 0.495, autoRotateSpeed: 0.6, enablePan: false });
const pmrem = new THREE.PMREMGenerator(renderer);

let composer, bloom;
if (high) {
  composer = new THREE.EffectComposer(renderer);
  composer.addPass(new THREE.RenderPass(scene, camera));
  // A high threshold keeps the glow on true light sources (lamps, LEDs, the sign), not on paint highlights.
  bloom = new THREE.UnrealBloomPass(new THREE.Vector2(256, 256), 0.3, 0.5, 3.2); composer.addPass(bloom);
  composer.addPass(new THREE.OutputPass());
}

// ---------------------------------------------------------------- world
const showroom = buildShowroom({ THREE, quality: effQ(), reflections: high, reducedMotion: shell.reducedMotion.matches });
scene.add(showroom.group);
const audio = new VehicleAudio(); audio.setMuted(store.get('pkm.drive.muted', false));

const cars = {};
function getVehicle(id) {
  if (cars[id]) return cars[id];
  const v = buildVehicle(THREE, id, { physicalLights: true });
  const saved = store.get('pkm.drive.paint.' + id, 0);
  v.paintIndex = Number.isInteger(saved) && v.spec.paints[saved] ? saved : 0;
  const p = v.spec.paints[v.paintIndex]; v.setPaint(p.hex, p.metal);
  v.root.traverse((o) => { if (o.isMesh) o.userData.car = id; });
  return cars[id] = v;
}
const savedCar = params.get('car') || store.get('pkm.drive.car', 'volta');
let carId = Object.hasOwn(SPECS, savedCar) ? savedCar : 'volta';
let mode = 'showroom', mood = 'studio';
const car = () => getVehicle(carId);

const otherId = () => (carId === 'volta' ? 'regent' : 'volta');
function parkShowroom() {
  for (const v of Object.values(cars)) v.root.parent?.remove(v.root);
  const v = car();
  showroom.table.add(v.root); v.root.position.set(0, 0.1, 0); v.root.rotation.set(0, 0, 0);
  for (const p of Object.values(cars)) {
    p.body.rotation.set(0, 0, 0); p.body.position.set(0, 0, 0);
    for (const w of p.wheels) { w.pivot.rotation.y = 0; w.pivot.position.y = w.baseY; }
  }
  const o = cars[otherId()]; // the other car waits beside the turntable; click it to swap
  if (o) { showroom.group.add(o.root); o.root.position.set(-9.2, 0, 1.5); o.root.rotation.set(0, 0.6, 0); }
  syncEnvIntensity();
}

// ---------------------------------------------------------------- drive
let course;
let knocked = 0;
function loadCourse() {
  if (course) return;
  course = buildCourse({ THREE, quality: effQ() });
  scene.add(course.group);
  env.cameraCollision = makeCollider({ bounds: course.bounds, circles: course.circles, carR: 0.22, carHalf: 0 });
  for (const cone of course.cones) cone.onHit = () => {
    knocked++;
    audio.thunk(0.25);
    if (knocked >= course.cones.length) secret('cones', 'Slalom', 'All eight cones down.');
  };
}
const floorContact = { height: 0, mu: 1, rough: 0, name: 'floor' };
const env = {
  anchoredCockpit: true,
  adaptiveBrakes: true,
  tyreContact: (x, z) => course?.grip(x, z) ?? floorContact,
  groundY: (x, z) => course?.grip(x, z).height ?? 0,
  respawn: (d) => { const c = course.trackDist(d.x, d.z), p = course.samples[c.i], q = course.samples[(c.i + 3) % course.samples.length]; return { x: p.x, z: p.z, yaw: Math.atan2(q.x - p.x, q.z - p.z) }; },
  dustColor: 0xa4805a, night: false,
  navMap(g, w, h, d) {
    const lap = course.trackDist(d.x, d.z), total = course.samples.length;
    paintNavMap(g, w, h, d, {
      scale: 2.1, title: 'Kumasi test track', detail: `${Math.round(lap.i / total * 100)}% round the lap`,
      world(ctx, px) {
        ctx.beginPath(); course.samples.forEach((p, i) => (i ? ctx.lineTo(p.x, p.z) : ctx.moveTo(p.x, p.z))); ctx.closePath();
        ctx.strokeStyle = '#26302a'; ctx.lineWidth = 34 * px; ctx.stroke();
        ctx.strokeStyle = '#8e8a80'; ctx.lineWidth = 20 * px; ctx.stroke();
        ctx.strokeStyle = '#c9c3b5'; ctx.setLineDash([8 * px, 10 * px]); ctx.lineWidth = 1.5 * px; ctx.stroke(); ctx.setLineDash([]);
        const s0 = course.start; ctx.strokeStyle = '#f2f0ea'; ctx.lineWidth = 5 * px;
        ctx.beginPath(); ctx.moveTo(s0.x - Math.cos(s0.yaw) * 5, s0.z + Math.sin(s0.yaw) * 5); ctx.lineTo(s0.x + Math.cos(s0.yaw) * 5, s0.z - Math.sin(s0.yaw) * 5); ctx.stroke();
        ctx.fillStyle = '#d9a441'; for (const c of course.cones) { const p = c.position ?? c.mesh?.position ?? c; if (p?.x !== undefined) { ctx.beginPath(); ctx.arc(p.x, p.z, 1.2, 0, 7); ctx.fill(); } }
      },
    });
  },
};
const hud = createHud($('#stage'));
const drive = new DriveController({ THREE, scene, camera, dom: canvas, vehicle: car(), audio, env, onEvent });
createTouch($('#stage'), drive);
const driveBar = createDriveBar($('#stage'), drive, {
  exitLabel: 'Showroom', onExit: () => veil(() => setMode('showroom')),
  resetLabel: 'Reset car and cones', onReset: () => { drive.recover(); resetCones(); },
});
if (params.has('debug')) window.__pkm = { camera, controls, drive, renderer, scene, showroom, car: () => car(), get course() { return course; } };

// ---------------------------------------------------------------- environment / moods
const envCache = {};
function applyEnv() {
  const key = mode + ':' + mood;
  if (!envCache[key]) {
    const lighting = mode === 'drive' ? course.envScene(mood) : showroom.envScene(mood);
    envCache[key] = pmrem.fromScene(lighting, 0.03, 0.1, mode === 'drive' ? 2500 : 100, { size: 128 }).texture;
    lighting.traverse((node) => { node.geometry?.dispose(); node.material?.dispose(); });
  }
  scene.environment = envCache[key];
  scene.environmentIntensity = mode === 'drive' ? (mood === 'night' ? 0.12 : 0.45) : mood === 'night' ? 0.55 : 1;
  if (mode === 'drive') {
    scene.background = null; scene.fog = new THREE.FogExp2(mood === 'night' ? '#05070c' : mood === 'sunset' ? '#cf9a74' : '#b4c3cb', mood === 'night' ? 0.004 : mood === 'sunset' ? 0.0026 : 0.0022); // aerial haze gives the field depth
    renderer.toneMappingExposure = mood === 'night' ? 0.9 : mood === 'sunset' ? 0.7 : 0.55;
  } else { scene.background = new THREE.Color(mood === 'night' ? '#050505' : '#0a0a0a'); scene.fog = null; renderer.toneMappingExposure = 1; }
  syncEnvIntensity();
  if (bloom) {
    bloom.strength = mood === 'night' ? 0.55 : 0.3;
    bloom.enabled = mood === 'night'; // by day it only smeared paint highlights; at night it gives lamps and the sign their glow
  }
  env.night = mood === 'night';
}
// r128 has no scene.environmentIntensity, so scale each material's own reflection strength instead.
// r128's environment lighting differs from modern three's for the same scene: about 2.2x brighter
// in the showroom, weaker under the open sky. Measured on walls, oak, road and paint, then matched.
const LEGACY_ENV = { showroom: 0.45, drive: 1.6 };
function syncEnvIntensity() {
  if (high) return;
  const k = (scene.environmentIntensity ?? 1) * LEGACY_ENV[mode];
  scene.traverse((o) => {
    for (const m of Array.isArray(o.material) ? o.material : o.material ? [o.material] : []) {
      if (!('envMapIntensity' in m)) continue;
      m.userData.baseEnv ??= m.envMapIntensity; m.envMapIntensity = m.userData.baseEnv * k;
    }
  });
}
function setMood(m) {
  mood = m; showroom.setMood(m); course?.setMood(m); applyEnv();
  $$('[data-mood]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.mood === m));
  if (m === 'night') { car().state.head = true; syncToggles(); }
}

// ---------------------------------------------------------------- showroom camera presets
const presets = {
  hero: [[5.6, 2.1, 8.9], [0, 0.8, 0]], front: [[0.4, 1.3, 8.2], [0, 0.9, 0]], rear: [[-1.2, 1.9, -8.2], [0, 0.9, 0]],
  side: [[8.6, 1.2, 0.3], [0, 0.9, 0]], top: [[0.4, 10.5, 1.2], [0, 0, 0]], wheel: [[3.2, 0.55, 3.6], [1.2, 0.4, 1.5]], interior: null,
};
let flight = null, interiorOn = false;
function setInteriorRange() {
  controls.minDistance = 0.01; controls.maxDistance = 0.6;
  camera.near = 0.02; camera.updateProjectionMatrix();
}
function moveCamera(to, target, interior = false) {
  if (shell.reducedMotion.matches) {
    flight = null;
    if (interior) setInteriorRange();
    camera.fov = interior ? 62 : 36; camera.updateProjectionMatrix();
    camera.position.copy(to); controls.target.copy(target); controls.update();
    return;
  }
  // The lens widens as the camera settles into the seat, the way your eyes take in a cabin.
  const orbit = !interior && camera.position.distanceTo(controls.target) > 2;
  const startOffset = camera.position.clone().sub(controls.target), endOffset = to.clone().sub(target);
  const startAngle = Math.atan2(startOffset.x, startOffset.z);
  const delta = Math.atan2(endOffset.x, endOffset.z) - startAngle;
  flight = { orbit, startAngle, turn: Math.atan2(Math.sin(delta), Math.cos(delta)),
    startRadius: Math.hypot(startOffset.x, startOffset.z), endRadius: Math.hypot(endOffset.x, endOffset.z),
    from: camera.position.clone(), to, tf: controls.target.clone(), tt: target, t0: performance.now(), interior, fov0: camera.fov, fov1: interior ? 62 : 36 };
}
function flyTo(name) {
  stopInterior(false);
  if (name === 'interior') return startInterior();
  controls.minDistance = name === 'wheel' ? 1.1 : 4;
  const [p, t] = presets[name];
  const yaw = showroom.table.rotation.y, rot = (v) => new THREE.Vector3(v[0], v[1], v[2]).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
  const position = rot(p), target = rot(t);
  if (compact.matches) {
    if (name === 'hero') target.y -= 0.58;
    const fit = THREE.MathUtils.clamp(0.9 / camera.aspect, 1, 1.72);
    position.sub(target).multiplyScalar(fit).add(target);
  }
  moveCamera(position, target);
  $('#interiorBtn').textContent = 'Interior';
  $$('[data-cam]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.cam === name));
}
function startInterior() {
  interiorOn = true;
  $('#interiorBtn').textContent = 'Exterior';
  const v = car(); v.root.updateMatrixWorld(true);
  const eye = v.driverEye.clone(); v.body.localToWorld(eye);
  // The body's forward axis is local +x. Look slightly down so the dash, wheel and screens frame the view.
  const fwd = new THREE.Vector3(1, -0.16, 0).normalize().applyQuaternion(v.body.getWorldQuaternion(new THREE.Quaternion()));
  moveCamera(eye.clone().addScaledVector(fwd, -0.02), eye.clone().addScaledVector(fwd, 0.45), true);
  $$('[data-cam]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.cam === 'interior'));
  v.setCabinView(true);
  v.drawCluster(0, drive.dyn.engine ? drive.dyn.rpm : 0, 'P'); // gauges wake when you sit in
}
function stopInterior(fly = true) {
  if (!interiorOn) return; interiorOn = false;
  controls.minDistance = 4; controls.maxDistance = 18; camera.near = 0.1; camera.updateProjectionMatrix(); car().setCabinView(false);
  if (fly) flyTo('hero');
}
let spin = !shell.reducedMotion.matches && store.get('pkm.drive.spin', false) === true;
$('#spin').setAttribute('aria-pressed', spin);
shell.reducedMotion.addEventListener('change', (e) => { if (e.matches) turntable(false); });
function turntable(on) { spin = on; $('#spin').setAttribute('aria-pressed', on); store.set('pkm.drive.spin', on); }

// ---------------------------------------------------------------- UI wiring
function renderVehicleInfo() {
  const S = car().spec;
  $('#kicker').textContent = `${S.brand} · 2027`; $('#vname').textContent = S.name; $('#trim').textContent = S.trim; $('#tagline').textContent = S.tagline;
  $('#chips').innerHTML = S.chips.map((c) => `<li>${c}</li>`).join('');
  $$('[data-car]').forEach((b) => b.setAttribute('aria-current', b.dataset.car === carId));
  $('#swatches').innerHTML = S.paints.map((p, i) => `<button class="swatch" style="--sw:${p.hex}" data-paint="${i}" aria-pressed="${i === car().paintIndex}" aria-label="${p.name}" title="${p.name}"></button>`).join('');
  $('#paintName').textContent = S.paints[car().paintIndex].name;
  $('[data-panel="tailgate"]').textContent = carId === 'volta' ? 'Tailgate' : 'Liftgate';
  $('#accraLink').href = `/accra3d/?drive=${carId}&paint=${car().paintIndex}`;
  document.title = `PKM ${S.name} · Drive Studio · Papa Kojo`;
}
function syncToggles() {
  const st = car().state;
  for (const k of ['head', 'left', 'right', 'hazard']) { for (const b of $$(`[data-light="${k}"]`)) b.setAttribute('aria-pressed', !!st[k]); }
  for (const [k, p] of Object.entries(car().panels)) { const b = $(`[data-panel="${k}"]`); if (b && p.userData) b.setAttribute('aria-pressed', p.userData.target === 1); }
  $('#engineBtn').textContent = drive.startTimer ? 'Cancel start' : drive.dyn.engine ? 'Stop engine' : 'Start engine';
  driveBar.sync();
}
function selectCar(id) {
  if (id === carId || mode === 'drive') return;
  stopInterior(false);
  carId = id; store.set('pkm.drive.car', id);
  drive.setVehicle(car());
  if (mood === 'night') car().state.head = true;
  parkShowroom(); flyTo('hero'); renderVehicleInfo(); syncToggles();
  showroom.startReveal(performance.now()); // an unveiling: the room dips and the lights come up on the new car
}
$$('[data-car]').forEach((b) => b.addEventListener('click', () => selectCar(b.dataset.car)));
$('#swatches').addEventListener('click', (e) => {
  const b = e.target.closest('[data-paint]'); if (!b) return;
  const i = +b.dataset.paint, p = car().spec.paints[i]; car().setPaint(p.hex, p.metal); car().paintIndex = i;
  store.set('pkm.drive.paint.' + carId, i); renderVehicleInfo(); audio.click(2600, 0.08, 0.02);
  if (p.name === 'Kente Gold') secret('gold', 'Kente Gold', 'The only paint with a story woven in.');
});
$$('[data-panel]').forEach((b) => b.addEventListener('click', () => togglePanel(b.dataset.panel)));
function togglePanel(name) {
  const open = car().togglePanel(name);
  if (name.startsWith('front') || name.startsWith('rear')) { open ? audio.latch() : setTimeout(() => audio.thunk(0.5), 260); }
  else if (name === 'hood' || name === 'tailgate') { open ? audio.latch() : setTimeout(() => audio.thunk(0.7), 420); }
  else audio.click(1200, 0.12, 0.08);
  syncToggles();
}
$$('[data-light]').forEach((b) => b.addEventListener('click', () => drive.toggle(b.dataset.light)));
$('#horn').addEventListener('click', () => drive.horn());
$('#engineBtn').addEventListener('click', () => drive.toggleEngine());
$('#interiorBtn').addEventListener('click', () => flyTo(interiorOn ? 'hero' : 'interior'));
$$('[data-cam]').forEach((b) => b.addEventListener('click', () => flyTo(b.dataset.cam)));
$$('[data-mood]').forEach((b) => b.addEventListener('click', () => setMood(b.dataset.mood)));
$('#spin').addEventListener('click', () => turntable(!spin));
$('#quality').value = quality;
$('#quality').addEventListener('change', (e) => { store.set('pkm.drive.quality', e.target.value); const u = new URL(location.href); u.searchParams.delete('quality'); u.searchParams.set('car', carId); location.replace(u); });
function syncSound() {
  $('#mute').setAttribute('aria-pressed', !audio.muted);
  $('#mute').textContent = audio.muted ? 'Sound off' : 'Sound on';
}
$('#mute').addEventListener('click', () => {
  audio.setMuted(!audio.muted); store.set('pkm.drive.muted', audio.muted); syncSound();
  if (!audio.muted) void audio.unlock().catch(() => {});
});
syncSound();
$('#fullscreen').hidden = !document.fullscreenEnabled;
$('#fullscreen').addEventListener('click', () => {
  const request = document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  void request.catch(() => {});
});
function setPanel(open) {
  $('#panel').dataset.open = open;
  $('#panelToggle').setAttribute('aria-expanded', open);
  $('#panelBody').inert = compact.matches && !open;
}
setPanel(false);
compact.addEventListener('change', () => setPanel(false));
$('#panelToggle').addEventListener('click', () => setPanel($('#panel').dataset.open !== 'true'));
$('.skip').addEventListener('click', (e) => {
  e.preventDefault();
  setPanel(true);
  const target = mode === 'drive' ? driveBar.el.querySelector('.pkm-bar__exit') : $('#panelBody').querySelector('button');
  target.focus();
});
$('#driveBtn').addEventListener('click', () => {
  if ($('#driveBtn').disabled) return;
  $('#driveBtn').disabled = true; $('#driveBtn').textContent = 'Opening track…';
  if (!audio.muted) void audio.unlock().catch(() => {});
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (!shell.running) return;
    void veil(() => {
      try { setMode('drive'); }
      catch { toast('The track couldn’t open', 'Try again or drive through Accra.'); }
      finally { $('#driveBtn').disabled = false; $('#driveBtn').textContent = 'Test track'; }
    });
  }));
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!$('#secrets').hidden) { setSecrets(false); $('#secretsBtn').focus(); }
  else if (mode === 'drive') void veil(() => setMode('showroom'));
  else if ($('#panel').dataset.open === 'true' && compact.matches) { setPanel(false); $('#panelToggle').focus(); }
  else if (interiorOn) flyTo('hero');
});

function resetCones() { knocked = 0; course.resetCones(); }
function setMode(m, focus = true) {
  if (m === mode) return;
  if (m === 'drive') loadCourse();
  mode = m; document.body.dataset.mode = m;
  if (m === 'drive') {
    stopInterior(false); flight = null; setPanel(false); setSecrets(false);
    showroom.group.visible = false; course.group.visible = true;
    course.setMood(mood); scene.add(car().root); syncEnvIntensity();
    const radius = car().spec.width * 0.48;
    env.collide = makeCollider({ bounds: course.bounds, circles: course.circles, carR: radius, carHalf: car().dims.length / 2 - radius });
    controls.enabled = false; drive.setEnabled(true); drive.cycleCamera('chase');
    for (const k of Object.keys(car().panels)) car().togglePanel(k, false);
    drive.place(course.start.x, course.start.z, course.start.yaw);
    resetCones();
    hud.el.hidden = false; drive.toggleEngine(true);
    driveBar.show(true);
    toast('Kumasi test track', DRIVE_HINT[matchMedia('(pointer: coarse)').matches ? 'coarse' : 'fine']);
    canvas.setAttribute('aria-label', 'Kumasi test track. W to accelerate, S to brake, V to shift.');
  } else {
    drive.setEnabled(false); hud.el.hidden = true; driveBar.show(false);
    showroom.group.visible = true; course.group.visible = false;
    controls.enabled = true; camera.near = 0.1; camera.fov = 36; camera.updateProjectionMatrix();
    audio.cabin = 0; car().setCabinView(false); parkShowroom();
    controls.minDistance = 4; controls.maxDistance = 18;
    camera.position.set(...presets.hero[0]); controls.target.set(...presets.hero[1]); controls.update();
    flyTo('hero');
    canvas.setAttribute('aria-label', '3D showroom. Drag to orbit and use the controls to inspect the car.');
    if (focus) $('#driveBtn').focus({ preventScroll: true });
  }
  applyEnv(); syncToggles();
}

// ---------------------------------------------------------------- secrets / easter eggs
const SECRETS = {
  sign: ['The sign', 'Click the PKM sign three times.'],
  plant: ['Akwaaba', 'Water the plant in the corner.'],
  horn: ['Beep beep', 'Honk three times quickly.'],
  pkm: ['Field work', 'Find the name mowed into the infield.'],
  cones: ['Slalom', 'Knock over all eight cones.'],
  gold: ['Kente Gold', 'Find the paint with a story.'],
  konami: ['Disco', 'The classic code. ↑↑↓↓←→←→BA'],
  ton: ['Ton-up', 'Hit 120 km/h on the proving ground.'],
};
const savedSecrets = store.get('pkm.drive.secrets', []);
const found = new Set(Array.isArray(savedSecrets) ? savedSecrets.filter((key) => Object.hasOwn(SECRETS, key)) : []);
function renderSecrets() {
  for (const el of document.querySelectorAll('[data-secret-count], #secretCount')) el.textContent = `${found.size}/${Object.keys(SECRETS).length}`;
  $('#secretList').innerHTML = Object.entries(SECRETS).map(([k, [t, hint]]) => `<li data-found="${found.has(k)}"><strong>${found.has(k) ? t : 'Hidden'}</strong><span>${hint}</span></li>`).join('');
}
function secret(k, title, msg) {
  if (found.has(k)) return; found.add(k); store.set('pkm.drive.secrets', [...found]); renderSecrets();
  audio.chime(); toast(`Secret found · ${found.size}/${Object.keys(SECRETS).length}`, `${title}. ${msg}`);
}
function setSecrets(open) {
  $('#secrets').hidden = !open;
  $('#secretsBtn').setAttribute('aria-expanded', open);
  if (open) $('#closeSecrets').focus();
}
$('#secretsBtn').addEventListener('click', () => setSecrets($('#secrets').hidden));
$('#closeSecrets').addEventListener('click', () => { setSecrets(false); $('#secretsBtn').focus(); });
renderSecrets();
const konami = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']; let kpos = 0, disco = 0;
addEventListener('keydown', (e) => { kpos = e.key.toLowerCase() === konami[kpos] ? kpos + 1 : (e.key.toLowerCase() === konami[0] ? 1 : 0); if (kpos === konami.length) { kpos = 0; if (!shell.reducedMotion.matches) disco = 8; invalidate(); secret('konami', 'Disco', 'Eight seconds of showroom party.'); } });
let signClicks = 0, waterings = 0;
const signColors = ['#F2E6CF', '#BBA783', '#93AE7C', '#ce1126', '#fcd116', '#006b3f'];
function onEvent(type, data) {
  if (type === 'horn' && data >= 3) secret('horn', 'Beep beep', 'Akwaaba! Kumasi heard you.');
  if (type === 'engine' || type === 'direction') syncToggles();
  if (type === 'shift-blocked') toast('Stop before shifting', 'Bring the car to a stop and release the accelerator.');
  invalidate();
  if (type === 'camera') { driveBar.sync(); if (data === 'drone' && mode === 'drive') toast('Drone camera', 'Look down at the infield.'); }
  if (type === 'lights') syncToggles();
}

// toast
let toastTimer;
function toast(title, msg) {
  const t = $('#toast'); t.innerHTML = `<strong>${title}</strong><span>${msg}</span>`; t.hidden = false; t.classList.remove('show'); void t.offsetWidth; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 4200);
}

// ---------------------------------------------------------------- picking
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
let downAt = null;
canvas.addEventListener('pointerdown', (e) => { downAt = [e.clientX, e.clientY]; });
canvas.addEventListener('pointerup', (e) => {
  if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 6) return;
  const hit = pick(e); if (!hit) return;
  const o = hit.object, click = o.userData.click;
  if (o.userData.panel && o.userData.car === carId && mode === 'showroom') return togglePanel(o.userData.panel);
  if (o.userData.car && o.userData.car !== carId && mode === 'showroom') return selectCar(o.userData.car);
  if (click === 'sign') {
    signClicks++; showroom.signM.emissive.set(signColors[signClicks % signColors.length]); audio.click(800 + signClicks * 120, 0.15, 0.05);
    if (signClicks >= 3) secret('sign', 'The sign', 'It cycles through the Ghana flag colours too.');
  } else if (click === 'plant') {
    waterings++; audio.chime([520, 660]); for (const l of showroom.leaves) l.scale.y = Math.min(2.6, l.scale.y * 1.08);
    toast('Watering the plants…', waterings < 3 ? 'It likes that.' : 'Look how it has grown.');
    if (waterings >= 3) secret('plant', 'Akwaaba', 'Just like the portfolio’s welcome screen.');
  } else if (click === 'poster' || click === 'design') location.href = '/design/';
  else if (click === 'home') location.href = '/';
  else if (click === 'accra') location.href = $('#accraLink').href;
});
let hoverT = 0;
canvas.addEventListener('pointermove', (e) => {
  if (mode !== 'showroom' || e.pointerType === 'touch') return;
  const now = performance.now(); if (now - hoverT < 120) return; hoverT = now;
  const hit = pick(e); canvas.style.cursor = hit && (hit.object.userData.click || (hit.object.userData.car && mode === 'showroom' && (hit.object.userData.panel || hit.object.userData.car !== carId))) ? 'pointer' : '';
});
function pick(e) {
  const r = canvas.getBoundingClientRect(); ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const targets = mode === 'showroom' ? [...showroom.clickables, ...Object.values(cars).map((v) => v.root)] : course.clickables;
  return ray.intersectObjects(targets, true).find((h) => h.object.visible) || null;
}

// ---------------------------------------------------------------- loop
let dirtyUntil = 0, needsFrame = true, lastWidth = 0, lastHeight = 0, lastRatio = 0;
function invalidate() { needsFrame = true; dirtyUntil = performance.now() + 1600; }
document.addEventListener('visibilitychange', () => { if (!document.hidden) invalidate(); });
window.addEventListener('pageshow', invalidate);
function resize() {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  const ratio = renderer.getPixelRatio();
  if (!w || !h || (w === lastWidth && h === lastHeight && ratio === lastRatio)) return;
  lastWidth = w; lastHeight = h; lastRatio = ratio;
  renderer.setSize(w, h, false);
  composer?.setSize(w, h);
  camera.aspect = w / h; camera.updateProjectionMatrix();
  invalidate();
}
new ResizeObserver(resize).observe(canvas);
controls.addEventListener('change', invalidate);
document.querySelector('[data-scene-controls]').addEventListener('click', invalidate);
canvas.addEventListener('pointerup', invalidate);

let lastFrame, activeMs = 0, frames = 0, slow = 0;
function render(dt) {
  if (composer && bloom.enabled) composer.render(dt);
  else renderer.render(scene, camera);
}
function loop(now) {
  if (!shell.running) {
    drive.setEnabled(false);
    return;
  }
  requestAnimationFrame(loop);
  const raw = lastFrame === undefined ? 0 : (now - lastFrame) / 1000;
  lastFrame = now;
  if (document.hidden) return;
  const dt = Math.min(raw, 0.1);
  if (mode === 'showroom') {
    const v = car();
    const turning = spin && !flight && !interiorOn;
    if (turning) showroom.table.rotation.y += dt * 0.12;
    if (flight) {
      const t = Math.min(1, (now - flight.t0) / 1000), k = t * t * t * (10 + t * (-15 + 6 * t));
      camera.position.lerpVectors(flight.from, flight.to, k); controls.target.lerpVectors(flight.tf, flight.tt, k);
      if (flight.orbit) {
        const radius = flight.startRadius + (flight.endRadius - flight.startRadius) * k;
        const angle = flight.startAngle + flight.turn * k;
        camera.position.x = controls.target.x + Math.sin(angle) * radius;
        camera.position.z = controls.target.z + Math.cos(angle) * radius;
      }
      if (flight.fov0 !== flight.fov1) { camera.fov = flight.fov0 + (flight.fov1 - flight.fov0) * k; camera.updateProjectionMatrix(); }
      if (flight.interior && t > 0.62 && camera.near !== 0.02) setInteriorRange();
      if (t >= 1) flight = null;
    }
    controls.update();
    const animating = showroom.animate(now);
    const moving = Object.values(v.panels).some((panel) => Math.abs(panel.userData.open - panel.userData.target) > 0.002);
    const lights = v.state;
    if (!needsFrame && !animating && now > dirtyUntil && !turning && !flight && !moving && !drive.dyn.engine && !lights.left && !lights.right && !lights.hazard && disco <= 0) return;
    v.update(dt, { engine: drive.dyn.engine, night: mood === 'night' });
    if (drive.dyn.engine) {
      const d = drive.dyn; d.rpm += (v.spec.idle - d.rpm) * Math.min(1, dt * 3); d.throttle *= 0.9;
      v.body.position.y = shell.reducedMotion.matches ? 0 : Math.sin(now * 0.05) * 0.0012;
      audio.update(d, v.spec, dt); v.drawCluster(0, d.rpm, 'P');
    }
    if (disco > 0) {
      disco -= dt; const h = (now / 600) % 1;
      showroom.signM.emissive.setHSL(h, 0.8, 0.6); showroom.led.material.emissive.setHSL((h + 0.5) % 1, 0.8, 0.55);
      showroom.lights.key.color.setHSL(h, 0.7, 0.6);
      if (disco <= 0) setMood(mood);
    }
  } else {
    drive.update(dt);
    const d = drive.dyn; course.follow(car().root.position); course.animate(dt, d);
    hud.update(drive.hud(), dt);
    if (Math.abs(d.vx) * 3.6 > 120) secret('ton', 'Ton-up', 'You reached 120 km/h on the test track.');
    const z = course.pkmZone; if (Math.abs(d.x - z.x) < z.hw && Math.abs(d.z - z.z) < z.hh) secret('pkm', 'Field work', 'You found the PKM in the grass. Try the drone camera.');
  }
  render(dt); needsFrame = false;
  frames++; activeMs += raw * 1000;
  if (activeMs < 1400) return;
  const isSlow = frames / activeMs * 1000 < 30;
  slow = isSlow ? slow + 1 : 0;
  frames = 0; activeMs = 0;
  if (quality === 'auto' && !economy && slow >= 2) {
    economy = true;
    renderer.setPixelRatio(Math.min(devicePixelRatio, 0.9));
    resize();
  }
}

shell.progress('Setting up the showroom…');
parkShowroom(); renderVehicleInfo();
const initialMood = params.get('mood');
setMood(['studio', 'sunset', 'night'].includes(initialMood) ? initialMood : 'studio');
resize();
const [position, target] = presets.hero;
camera.position.set(...position); controls.target.set(...target);
if (compact.matches) {
  controls.target.y -= 0.58;
  camera.position.sub(controls.target).multiplyScalar(THREE.MathUtils.clamp(0.9 / camera.aspect, 1, 1.72)).add(controls.target);
}
controls.update();
// compile every shader behind the loader so the first seconds do not stutter
shell.progress('Preparing the paint and lights…');
try { if (renderer.compileAsync) await renderer.compileAsync(scene, camera); } catch {}
render(0);
if (!shell.running) return;
syncToggles();
shell.ready();
showroom.firstSweep(performance.now() + 1200); // the room opens fully lit, then light passes over your name
// Build the other car and the course when the visitor chooses them.

if (!store.get('pkm.drive.tip', false)) {
  setTimeout(() => toast('Tip', 'Click a door, the bonnet or the PKM sign.'), 1200);
  store.set('pkm.drive.tip', true);
}
if (params.get('mode') === 'drive') {
  requestAnimationFrame(() => { if (shell.running) setMode('drive', false); });
}
requestAnimationFrame(loop);

  window.__ds = { scene, cars, drive, setMode, selectCar, setMood, flyTo, get course() { return course; }, togglePanel, secret };
}
