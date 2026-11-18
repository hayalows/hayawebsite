/* Accra 3D · drive mode.
   Uses the shared PKM Motors vehicles, physics and engine audio from Drive Studio
   (/l200/pkm-drive.js) so both pages drive the same cars. Reads the scene globals
   defined by the main script: THREE, scene, camera, renderer, controls, ROAD,
   roadXAt, JUB, TMP, jw, DRIVE_COLLIDERS, DRIVE_GATES. */
(function () {
  'use strict';
  const P = window.PKMDrive;
  const btn = document.getElementById('takeWheel');
  if (!P) { if (btn) btn.hidden = true; return; }
  const $ = (id) => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const store = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const style = document.createElement('style'); style.textContent = P.HUD_CSS; document.head.appendChild(style);

  let carId = P.SPECS[params.get('drive')] ? params.get('drive') : store.get('pkm.drive.car', 'volta');
  const paintOf = (id) => store.get('pkm.drive.paint.' + id, 0);
  if (params.get('paint') !== null && P.SPECS[params.get('drive')]) store.set('pkm.drive.paint.' + carId, +params.get('paint') || 0);

  const audio = new P.VehicleAudio(); audio.setMuted(store.get('pkm.drive.muted', false));
  const vehicles = {};
  let ctrl = null, hud = null, active = false, last = 0;
  const saved = { near: camera.near, far: camera.far, fov: camera.fov };

  // ---------- world queries ----------
  const inBox = (x, z, x0, x1, z0, z1) => x > x0 && x < x1 && z > z0 && z < z1;
  const circles = [], boxes = [];
  const env = {
    grip(x, z) {
      const off = Math.abs(x - roadXAt(z));
      if (off < 9.3 || (Math.abs(z - ROAD.Zi) < 9.3 && x > -470)) return { mu: 1.05, rough: 0.02, name: 'asphalt' };
      if (inBox(x, z, 14, 360, -495, -200) || inBox(x, z, 16, 222, 278, 462)) return { mu: 1, rough: 0.05, name: 'asphalt' };
      if (off < 12.6) return { mu: 0.95, rough: 0.25, name: 'kerb' };
      return { mu: 0.72, rough: 0.45, name: 'dirt' };
    },
    groundY(x, z) {
      const t = JUB.terrace; if (!t) return 0;
      const dx = Math.abs(x - t.c.x) - t.hx, dz = Math.abs(z - t.c.z) - t.hz, out = Math.max(dx, dz);
      return out > 5 ? 0 : out < 0 ? t.h : t.h * (1 - out / 5);
    },
    respawn(d) { const z = Math.max(-860, Math.min(860, d.z)), x = roadXAt(z) - 5.5; return { x, z, yaw: 0 }; },
    cineOk() { return true; },
    dustColor: 0xb4643c, night: false,
  };

  function ensureVehicle(id) {
    if (!vehicles[id]) {
      const v = P.buildVehicle(THREE, id);
      v.root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      vehicles[id] = v;
    }
    const v = vehicles[id], p = v.spec.paints[paintOf(id)] || v.spec.paints[0];
    v.setPaint(p.hex, p.metal);
    return v;
  }

  // ---------- picker ----------
  function renderPicker() {
    document.querySelectorAll('[data-pick]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.pick === carId));
    const S = P.SPECS[carId], cur = paintOf(carId);
    $('pickPaint').innerHTML = S.paints.map((p, i) => `<button style="--c:${p.hex}" data-paint="${i}" aria-pressed="${i === cur}" title="${p.name}" aria-label="${p.name}"></button>`).join('');
  }
  document.querySelectorAll('[data-pick]').forEach((b) => b.addEventListener('click', () => { carId = b.dataset.pick; store.set('pkm.drive.car', carId); renderPicker(); }));
  $('pickPaint').addEventListener('click', (e) => { const b = e.target.closest('[data-paint]'); if (!b) return; store.set('pkm.drive.paint.' + carId, +b.dataset.paint); renderPicker(); });
  btn.addEventListener('click', () => { if (active) return stop(); renderPicker(); $('drivePick').hidden = false; });
  $('pickX').addEventListener('click', () => { $('drivePick').hidden = true; });
  $('pickGo').addEventListener('click', () => { $('drivePick').hidden = true; start(); });

  // ---------- start / stop ----------
  function start(spawn) {
    if (typeof stopTour === 'function' && typeof tour !== 'undefined' && tour) stopTour(false);
    if (!circles.length && !boxes.length) for (const c of DRIVE_COLLIDERS) (c.r ? circles : boxes).push(c);
    env.collide = P.makeCollider({ bounds: { minX: -470, maxX: 640, minZ: -880, maxZ: 880 }, circles, boxes, carR: 1.0, carHalf: 1.7 });
    for (const v of Object.values(vehicles)) scene.remove(v.root);
    const v = ensureVehicle(carId); scene.add(v.root);
    if (!ctrl) {
      ctrl = new P.DriveController({ THREE, scene, camera, dom: renderer.domElement, vehicle: v, audio, env, onEvent });
      hud = P.createHud(document.body); P.createTouch(document.body, ctrl);
    } else ctrl.setVehicle(v);
    const sp = spawn || (P.SPECS[params.get('drive')] && params.get('at') === 'temple' ? spots.temple() : spots.road());
    ctrl.enabled = true; active = true; ctrl.camMode = 'chase';
    ctrl.place(sp.x, sp.z, sp.yaw);
    controls.enabled = false;
    camera.far = 3000; camera.updateProjectionMatrix();
    document.body.classList.add('driving'); $('drivebar').hidden = false; hud.el.hidden = false;
    btn.textContent = 'Exit drive';
    ctrl.toggleEngine(true);
    setTimeout(() => { if (active) $('dKeyList').hidden = true; }, 9000);
    last = performance.now();
  }
  function stop() {
    active = false; if (!ctrl) return;
    ctrl.enabled = false; ctrl.toggleEngine(false); audio.cabin = 0;
    hud.el.hidden = true; $('drivebar').hidden = true; document.body.classList.remove('driving');
    camera.near = saved.near; camera.far = saved.far; camera.fov = saved.fov; camera.updateProjectionMatrix();
    controls.enabled = true; controls.target.copy(ctrl.vehicle.root.position);
    camera.position.copy(ctrl.vehicle.root.position).add(new THREE.Vector3(18, 12, 18));
    btn.textContent = 'Take the wheel';
  }
  const spots = {
    road: () => ({ x: roadXAt(-440) - 5.5, z: -440, yaw: 0 }),
    jubilee: () => { const p = jw(0, 118); return { x: p.x, z: p.z, yaw: Math.PI / 2 }; },
    temple: () => ({ x: 44, z: TMP.pos.z, yaw: Math.PI / 2 }),
  };

  // ---------- drive bar ----------
  $('dExit').addEventListener('click', stop);
  $('dCam').addEventListener('click', () => ctrl.cycleCamera());
  $('dLights').addEventListener('click', () => ctrl.toggle('head'));
  $('dJub').addEventListener('click', () => { const s = spots.jubilee(); ctrl.place(s.x, s.z, s.yaw); });
  $('dTmp').addEventListener('click', () => { const s = spots.temple(); ctrl.place(s.x, s.z, s.yaw); });
  $('dKeys').addEventListener('click', () => { $('dKeyList').hidden = !$('dKeyList').hidden; });
  addEventListener('keydown', (e) => { if (active && e.key === 'Escape') stop(); });

  function onEvent(type, data) {
    if (type === 'camera') $('dCam').textContent = 'Camera: ' + { chase: 'Chase', far: 'Far chase', cabin: 'Cockpit', hood: 'Bonnet', cine: 'Cinematic', drone: 'Drone' }[data];
    if (type === 'lights') $('dLights').setAttribute('aria-pressed', !!data.head);
  }

  // ---------- per-frame (called from updateCameraRig) ----------
  const tmp = new THREE.Vector3();
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const slider = $('sunSlider'); env.night = slider ? +slider.value < 1.5 : false;
    if (env.night && !ctrl.vehicle.state._autoLit) { ctrl.vehicle.state.head = true; ctrl.vehicle.state._autoLit = true; }
    ctrl.update(dt);
    const pos = ctrl.vehicle.root.position;
    controls.target.copy(pos); // keeps the sun's shadow camera centred on the car
    for (const g of DRIVE_GATES) {
      const near = tmp.set(g.at.x - pos.x, 0, g.at.z - pos.z).length() < 45 ? 1 : 0;
      g.open += (near - g.open) * Math.min(1, dt * 1.6);
      g.pivot.rotation.y = -g.side * 1.45 * g.open;
    }
    hud.update(ctrl.hud(), dt);
    return true;
  }
  window.ACCRA_DRIVE = { get active() { return active; }, frame, start, stop };

  // deep link from Drive Studio: /accra3d/?drive=volta&paint=2
  if (P.SPECS[params.get('drive')]) {
    const wait = () => (window.__ready ? setTimeout(() => start(), 600) : setTimeout(wait, 200));
    wait();
  }
})();
