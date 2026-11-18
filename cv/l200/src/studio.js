import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
import { buildVehicle, SPECS } from './vehicles.js';
import { VehicleAudio } from './audio.js';
import { DriveController, makeCollider, createHud, createTouch, HUD_CSS } from './drive.js';
import { buildShowroom, buildCourse } from './world.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const params = new URLSearchParams(location.search);
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} } };
const style = document.createElement('style'); style.textContent = HUD_CSS; document.head.appendChild(style);

// ---------------------------------------------------------------- renderer
const canvas = $('#view');
let quality = params.get('quality') || store.get('pkm.drive.quality', 'auto');
const lowGuess = (navigator.hardwareConcurrency || 8) <= 4 || matchMedia('(max-width: 700px)').matches;
const effQ = () => quality === 'auto' ? (lowGuess ? 'low' : 'high') : quality;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: effQ() === 'low', powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, effQ() === 'low' ? 1.25 : 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.VSMShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 6000);
const controls = new OrbitControls(camera, canvas);
Object.assign(controls, { enableDamping: true, dampingFactor: 0.07, minDistance: 4, maxDistance: 18, maxPolarAngle: Math.PI * 0.495, autoRotateSpeed: 0.6, enablePan: false });
const pmrem = new THREE.PMREMGenerator(renderer);

let composer, bloom;
function setupComposer() {
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.35, 0.4, 1.0); composer.addPass(bloom);
  composer.addPass(new OutputPass());
  if (effQ() !== 'low') composer.addPass(new SMAAPass());
}
setupComposer();

// ---------------------------------------------------------------- world
const showroom = buildShowroom({ quality: effQ() });
const course = buildCourse({ quality: effQ() });
scene.add(showroom.group, course.group);
const audio = new VehicleAudio(); audio.setMuted(store.get('pkm.drive.muted', false));

const cars = {};
for (const id of ['volta', 'regent']) {
  const v = buildVehicle(THREE, id);
  const saved = store.get('pkm.drive.paint.' + id, 0);
  const p = v.spec.paints[saved] || v.spec.paints[0]; v.setPaint(p.hex, p.metal); v.paintIndex = saved;
  cars[id] = v; scene.add(v.root);
  v.root.traverse((o) => { if (o.isMesh) o.userData.car = id; });
}
let carId = SPECS[params.get('car')] ? params.get('car') : store.get('pkm.drive.car', 'volta');
let mode = 'showroom', mood = 'studio';
const car = () => cars[carId];

function parkShowroom() {
  const other = carId === 'volta' ? 'regent' : 'volta';
  showroom.table.add(car().root); car().root.position.set(0, 0.1, 0); car().root.rotation.set(0, 0, 0);
  showroom.group.add(cars[other].root); cars[other].root.position.set(-9.2, 0, 1.5); cars[other].root.rotation.set(0, 0.6, 0);
  for (const v of Object.values(cars)) { v.body.rotation.set(0, 0, 0); v.body.position.set(0, 0, 0); for (const w of v.wheels) { w.pivot.rotation.y = 0; w.pivot.position.y = w.baseY; } }
}

// ---------------------------------------------------------------- drive
const env = {
  grip: (x, z) => mode === 'drive' ? course.grip(x, z) : { mu: 1, rough: 0, name: 'floor' },
  collide: makeCollider({ bounds: course.bounds, circles: course.circles, carR: 1.0, carHalf: 1.7 }),
  respawn: (d) => { const c = course.trackDist(d.x, d.z), p = course.samples[c.i], q = course.samples[(c.i + 3) % course.samples.length]; return { x: p.x, z: p.z, yaw: Math.atan2(q.x - p.x, q.z - p.z) }; },
  dustColor: 0xa4805a, night: false,
};
const hud = createHud($('#stage'));
const drive = new DriveController({ THREE, scene, camera, dom: canvas, vehicle: car(), audio, env, onEvent });
createTouch($('#stage'), drive);

// ---------------------------------------------------------------- environment / moods
const envCache = {};
function applyEnv() {
  const key = mode + ':' + mood;
  if (!envCache[key]) envCache[key] = pmrem.fromScene(mode === 'drive' ? course.envScene(mood) : showroom.envScene(mood), 0.03).texture;
  scene.environment = envCache[key];
  scene.environmentIntensity = mode === 'drive' ? (mood === 'night' ? 0.12 : 0.45) : mood === 'night' ? 0.55 : 1;
  if (mode === 'drive') {
    scene.background = null; scene.fog = new THREE.FogExp2(mood === 'night' ? '#05070c' : mood === 'sunset' ? '#c98f6a' : '#9fb6c8', mood === 'night' ? 0.004 : 0.0011);
    renderer.toneMappingExposure = mood === 'night' ? 0.9 : mood === 'sunset' ? 0.7 : 0.55;
  } else { scene.background = new THREE.Color(mood === 'night' ? '#050505' : '#0a0a0a'); scene.fog = null; renderer.toneMappingExposure = 1; }
  bloom.strength = mood === 'night' ? 0.6 : 0.35;
  bloom.threshold = mode === 'drive' && mood !== 'night' ? 8 : 1.0;
  env.night = mood === 'night';
}
function setMood(m) {
  mood = m; showroom.setMood(m); course.setMood(m); applyEnv();
  $$('[data-mood]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.mood === m));
  if (m === 'night') { car().state.head = true; syncToggles(); }
}

// ---------------------------------------------------------------- showroom camera presets
const presets = {
  hero: [[7.4, 1.85, 8.2], [-0.9, 0.8, 0.4]], front: [[0.4, 1.3, 8.2], [0, 0.9, 0]], rear: [[-1.2, 1.9, -8.2], [0, 0.9, 0]],
  side: [[8.6, 1.2, 0.3], [0, 0.9, 0]], top: [[0.4, 10.5, 1.2], [0, 0, 0]], wheel: [[3.2, 0.55, 3.6], [1.2, 0.4, 1.5]], interior: null,
};
let flight = null, interiorOn = false;
function flyTo(name) {
  stopInterior(false);
  if (name === 'interior') return startInterior();
  const [p, t] = presets[name];
  const yaw = showroom.table.rotation.y, rot = (v) => new THREE.Vector3(v[0], v[1], v[2]).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
  flight = { from: camera.position.clone(), to: rot(p), tf: controls.target.clone(), tt: rot(t), t: 0, t0: performance.now() };
  $$('[data-cam]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.cam === name));
}
function startInterior() {
  interiorOn = true; turntable(false);
  const v = car(); v.root.updateMatrixWorld(true);
  const eye = v.driverEye.clone(); v.body.localToWorld(eye);
  const fwd = new THREE.Vector3(0, 0, 1).applyQuaternion(v.root.getWorldQuaternion(new THREE.Quaternion()));
  flight = { from: camera.position.clone(), to: eye.clone().addScaledVector(fwd, -0.02), tf: controls.target.clone(), tt: eye.clone().addScaledVector(fwd, 0.4), t: 0, t0: performance.now(), interior: true };
  $$('[data-cam]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.cam === 'interior'));
  v.state.interiorGlow = 1;
}
function stopInterior(fly = true) {
  if (!interiorOn) return; interiorOn = false;
  controls.minDistance = 4; controls.maxDistance = 18; camera.near = 0.1; camera.updateProjectionMatrix(); car().state.interiorGlow = 0;
  if (fly) flyTo('hero');
}
let spin = store.get('pkm.drive.spin', true);
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
  for (const k of ['head', 'left', 'right', 'hazard']) { const b = $(`[data-light="${k}"]`); if (b) b.setAttribute('aria-pressed', !!st[k]); }
  for (const [k, p] of Object.entries(car().panels)) { const b = $(`[data-panel="${k}"]`); if (b && p.userData) b.setAttribute('aria-pressed', p.userData.target === 1); }
  $('#engineBtn').textContent = drive.dyn.engine ? 'Stop engine' : 'Start engine';
  $('#engineBtn').setAttribute('aria-pressed', drive.dyn.engine);
}
function selectCar(id, quiet) {
  if (id === carId && !quiet) return;
  const was = drive.dyn.engine; if (was) drive.toggleEngine(false);
  if (mode === 'drive') setTimeout(() => drive.toggleEngine(true), 50);
  carId = id; store.set('pkm.drive.car', id);
  drive.setVehicle(car()); mood === 'night' && (car().state.head = true);
  if (mode === 'showroom') { parkShowroom(); flyTo('hero'); }
  else { const o = id === 'volta' ? cars.regent : cars.volta; o.root.visible = false; car().root.visible = true; scene.add(car().root); drive.place(drive.dyn.x, drive.dyn.z, drive.dyn.yaw); }
  renderVehicleInfo(); syncToggles();
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
$$('[data-light]').forEach((b) => b.addEventListener('click', async () => { audio.unlock(); drive.toggle(b.dataset.light); syncToggles(); }));
$('#horn').addEventListener('click', async () => { audio.unlock(); drive.horn(); });
$('#engineBtn').addEventListener('click', async () => { audio.unlock(); await drive.toggleEngine(); setTimeout(syncToggles, 800); syncToggles(); });
$$('[data-cam]').forEach((b) => b.addEventListener('click', () => flyTo(b.dataset.cam)));
$$('[data-mood]').forEach((b) => b.addEventListener('click', () => setMood(b.dataset.mood)));
$('#spin').addEventListener('click', () => turntable(!spin));
$('#quality').value = quality;
$('#quality').addEventListener('change', (e) => { store.set('pkm.drive.quality', e.target.value); const u = new URL(location.href); u.searchParams.delete('quality'); u.searchParams.set('car', carId); location.replace(u); });
$('#mute').addEventListener('click', async () => { const m = !audio.muted; audio.setMuted(m); store.set('pkm.drive.muted', m); $('#mute').setAttribute('aria-pressed', !m); $('#mute').textContent = m ? 'Sound off' : 'Sound on'; if (!m) await audio.unlock(); });
$('#mute').setAttribute('aria-pressed', !audio.muted); $('#mute').textContent = audio.muted ? 'Sound off' : 'Sound on';
$('#fullscreen').addEventListener('click', () => { const s = $('#stage'); document.fullscreenElement ? document.exitFullscreen() : s.requestFullscreen && s.requestFullscreen(); });
$('#panelToggle').addEventListener('click', () => { const p = $('#panel'); const open = p.dataset.open !== 'true'; p.dataset.open = open; $('#panelToggle').setAttribute('aria-expanded', open); });
$('#driveBtn').addEventListener('click', () => setMode('drive'));
$('#exitDrive').addEventListener('click', () => setMode('showroom'));
$('#camBtn').addEventListener('click', () => drive.cycleCamera());
$('#helpBtn').addEventListener('click', () => { $('#keys').hidden = !$('#keys').hidden; });
$('#resetBtn').addEventListener('click', () => { drive.recover(); course.resetCones(); });

// ---------------------------------------------------------------- modes
function setMode(m) {
  if (m === mode) return;
  mode = m; document.body.dataset.mode = m;
  const other = carId === 'volta' ? cars.regent : cars.volta;
  if (m === 'drive') {
    stopInterior(false); flight = null;
    showroom.group.visible = false; course.group.visible = true; other.root.visible = false;
    scene.add(car().root); car().root.visible = true;
    controls.enabled = false; drive.enabled = true; drive.camMode = 'chase';
    for (const k of Object.keys(car().panels)) car().togglePanel(k, false);
    drive.place(course.start.x, course.start.z, course.start.yaw);
    course.resetCones();
    hud.el.hidden = false; drive.toggleEngine(true);
    setTimeout(() => { if (mode === 'drive') $('#keys').hidden = true; }, 9000);
    toast('Drive mode', 'W / ↑ to go, S / ↓ to brake, Space for the handbrake. C changes the camera.');
  } else {
    drive.enabled = false; hud.el.hidden = true;
    showroom.group.visible = true; course.group.visible = false; other.root.visible = true;
    controls.enabled = true; camera.near = 0.1; camera.fov = 36; camera.updateProjectionMatrix();
    audio.cabin = 0; parkShowroom(); flyTo('hero');
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
const found = new Set(store.get('pkm.drive.secrets', []));
function renderSecrets() {
  $('#secretCount').textContent = `${found.size}/${Object.keys(SECRETS).length}`;
  $('#secretList').innerHTML = Object.entries(SECRETS).map(([k, [t, hint]]) => `<li data-found="${found.has(k)}"><strong>${found.has(k) ? t : 'Hidden'}</strong><span>${hint}</span></li>`).join('');
}
function secret(k, title, msg) {
  if (found.has(k)) return; found.add(k); store.set('pkm.drive.secrets', [...found]); renderSecrets();
  audio.chime(); toast(`Secret found · ${found.size}/${Object.keys(SECRETS).length}`, `${title}. ${msg}`);
}
$('#secretsBtn').addEventListener('click', () => { const s = $('#secrets'); s.hidden = !s.hidden; });
renderSecrets();
const konami = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']; let kpos = 0, disco = 0;
addEventListener('keydown', (e) => { kpos = e.key.toLowerCase() === konami[kpos] ? kpos + 1 : (e.key.toLowerCase() === konami[0] ? 1 : 0); if (kpos === konami.length) { kpos = 0; disco = 8; secret('konami', 'Disco', 'Eight seconds of showroom party.'); } });
let signClicks = 0, waterings = 0;
const signColors = ['#F2E6CF', '#BBA783', '#93AE7C', '#ce1126', '#fcd116', '#006b3f'];
function onEvent(type, data) {
  if (type === 'horn' && data >= 3) secret('horn', 'Beep beep', 'Akwaaba! Kumasi heard you.');
  if (type === 'engine') syncToggles();
  if (type === 'camera') { $('#camBtn').textContent = 'Camera: ' + { chase: 'Chase', far: 'Far chase', cabin: 'Cockpit', hood: 'Bonnet', cine: 'Cinematic', drone: 'Drone' }[data]; if (data === 'drone' && mode === 'drive') toast('Drone camera', 'Look down at the infield.'); }
  if (type === 'lights') syncToggles();
}
let knocked = 0; for (const c of course.cones) c.onHit = () => { knocked++; audio.thunk(0.25); if (knocked >= 8) secret('cones', 'Slalom', 'All eight cones down. The groundskeeper is not impressed.'); };

// toast
let toastTimer;
function toast(title, msg) {
  const t = $('#toast'); t.innerHTML = `<strong>${title}</strong><span>${msg}</span>`; t.hidden = false; t.classList.remove('show'); void t.offsetWidth; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 4200);
}

// ---------------------------------------------------------------- picking
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
let downAt = null;
canvas.addEventListener('pointerdown', (e) => { downAt = [e.clientX, e.clientY]; audio.unlock(); });
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
  const now = performance.now(); if (now - hoverT < 90) return; hoverT = now;
  const hit = pick(e); canvas.style.cursor = hit && (hit.object.userData.click || (hit.object.userData.car && mode === 'showroom' && (hit.object.userData.panel || hit.object.userData.car !== carId))) ? 'pointer' : '';
});
function pick(e) {
  const r = canvas.getBoundingClientRect(); ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const targets = mode === 'showroom' ? [...showroom.clickables, ...Object.values(cars).map((v) => v.root)] : course.clickables;
  return ray.intersectObjects(targets, true).find((h) => h.object.visible) || null;
}

// ---------------------------------------------------------------- loop
function resize() {
  const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
  renderer.setSize(w, h, false); composer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(canvas);
const clock = new THREE.Clock(); let frames = 0, fpsT = 0, slow = 0;
function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(clock.getDelta(), 0.05);
  if (mode === 'showroom') {
    if (spin && !flight && !interiorOn) showroom.table.rotation.y += dt * 0.12;
    if (flight) {
      flight.t = Math.min(1, (performance.now() - flight.t0) / 1400); const k = 1 - Math.pow(1 - flight.t, 3);
      camera.position.lerpVectors(flight.from, flight.to, k); controls.target.lerpVectors(flight.tf, flight.tt, k);
      if (flight.interior && flight.t > 0.6) { controls.minDistance = 0.01; controls.maxDistance = 0.6; camera.near = 0.02; camera.updateProjectionMatrix(); }
      if (flight.t >= 1) flight = null;
    }
    controls.update();
    for (const v of Object.values(cars)) v.update(dt, { engine: v === car() && drive.dyn.engine, night: mood === 'night' });
    if (drive.dyn.engine) { // idle shake and audio while parked
      const d = drive.dyn; d.rpm += ((car().spec.idle + (audio.ctx ? 0 : 0)) - d.rpm) * Math.min(1, dt * 3); d.throttle *= 0.9;
      car().body.position.y = Math.sin(performance.now() * 0.05) * 0.0012; audio.update(d, car().spec, dt);
      car().drawCluster(0, d.rpm, 'P');
    }
    if (disco > 0) { disco -= dt; const h = (performance.now() / 600) % 1; showroom.signM.emissive.setHSL(h, 0.8, 0.6); showroom.led.material.emissive.setHSL((h + 0.5) % 1, 0.9, 0.55); showroom.lights.key.color.setHSL(h, 0.7, 0.6); if (disco <= 0) setMood(mood); }
  } else {
    drive.update(dt);
    const d = drive.dyn; course.follow(car().root.position); course.animate(dt, d);
    hud.update(drive.hud(), dt);
    if (Math.abs(d.vx) * 3.6 > 120) secret('ton', 'Ton-up', '120 km/h. Liberation Road’s limit is 80, by the way.');
    const z = course.pkmZone; if (Math.abs(d.x - z.x) < z.hw && Math.abs(d.z - z.z) < z.hh) secret('pkm', 'Field work', 'You found the PKM in the grass. Try the drone camera.');
  }
  composer.render(dt);
  // auto quality: drop to low if the device struggles
  frames++; fpsT += dt;
  if (fpsT > 2) { const fps = frames / fpsT; frames = 0; fpsT = 0; if (quality === 'auto' && fps < 28 && effQ() !== 'low' && ++slow >= 2) { renderer.setPixelRatio(1); bloom.enabled = fps > 20; } }
}

// ---------------------------------------------------------------- boot
async function boot() {
  const bar = $('#loadBar'), step = $('#loadStep');
  const steps = ['Polishing the paint…', 'Warming up the engines…', 'Switching on the showroom lights…'];
  let i = 0; const iv = setInterval(() => { step.textContent = steps[++i % steps.length]; }, 900);
  try { await document.fonts.load('800 100px Inter'); } catch {}
  bar.style.width = '60%';
  parkShowroom(); renderVehicleInfo(); setMood(params.get('mood') || 'studio');
  camera.position.set(11, 3, 12); controls.target.set(0, 0.85, 0);
  resize(); composer.render();
  bar.style.width = '100%';
  setTimeout(() => { clearInterval(iv); $('#loader').classList.add('done'); flyTo('hero'); }, 350);
  if (params.get('mode') === 'drive') setMode('drive');
  syncToggles(); loop();
  window.__ds = { scene, cars, drive, setMode, selectCar, setMood, flyTo, course, togglePanel, secret };
}
boot().catch((e) => { console.error(e); $('#loadStep').textContent = 'Drive Studio could not start in this browser.'; });
