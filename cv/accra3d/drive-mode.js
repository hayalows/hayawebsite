import * as drive from '/l200/pkm-drive.js?v=5';
import { createRoadSurface, trafficContact } from './motion.js?v=1';

export function mountDrive({ THREE, scene, camera, renderer, controls, ROAD, roadXAt, JUB, TMP, jw, colliders, gates, traffic, params, stopTour }) {
  const $ = (id) => document.getElementById(id);
  const store = {
    get(key, fallback) {
      try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
    },
  };
  const style = document.createElement('style');
  style.textContent = drive.HUD_CSS;
  document.head.appendChild(style);

  const preferred = params.get('drive') || store.get('pkm.drive.car', 'volta');
  let carId = Object.hasOwn(drive.SPECS, preferred) ? preferred : 'volta';
  const paintKey = (id) => 'pkm.drive.paint.' + id;
  const paintOf = (id) => {
    const index = Number(store.get(paintKey(id), 0));
    return Object.hasOwn(drive.SPECS[id].paints, index) ? index : 0;
  };
  const linkedPaint = Number(params.get('paint'));
  if (Object.hasOwn(drive.SPECS, params.get('drive')) && params.has('paint') && Object.hasOwn(drive.SPECS[carId].paints, linkedPaint)) {
    store.set(paintKey(carId), linkedPaint);
  }

  const audio = new drive.VehicleAudio();
  audio.setMuted(store.get('pkm.drive.muted', false));
  const vehicles = {};
  let ctrl, hud, active = false, last = 0, statusTimer;
  const picker = $('drivePick');
  let saved;
  const previousPosition = new THREE.Vector3(), previousTarget = new THREE.Vector3();
  let previousAutoRotate;
  const bounds = { minX: -470, maxX: 640, minZ: -880, maxZ: 880 };
  const circles = colliders.filter((item) => item.r);
  const boxes = colliders.filter((item) => !item.r);
  const contact = createRoadSurface(ROAD, roadXAt, JUB.terrace);
  const neighbours = [];
  const env = {
    tyreContact: contact,
    groundY: (x, z) => contact(x, z).height,
    autoShift: false,
    respawn(d) {
      const z = Math.max(-860, Math.min(860, d.z));
      return { x: roadXAt(z) - 5.5, z, yaw: 0 };
    },
    cameraCollision: drive.makeCollider({ bounds, boxes, circles, carR: 0.22, carHalf: 0 }),
    dustColor: 0xb4643c,
    night: false,
  };
  const spots = {
    road: () => ({ x: roadXAt(-440) - 5.5, z: -440, yaw: 0 }),
    jubilee: () => { const point = jw(0, 118); return { x: point.x, z: point.z, yaw: Math.PI / 2 }; },
    temple: () => ({ x: 44, z: TMP.pos.z, yaw: Math.PI / 2 }),
  };

  function showStatus(text) {
    const target = $('driveStatus');
    target.textContent = text;
    clearTimeout(statusTimer);
    if (text) statusTimer = setTimeout(() => { target.textContent = ''; }, 5000);
  }
  function syncSound() {
    const button = $('dMute');
    button.setAttribute('aria-pressed', !audio.muted);
    button.textContent = audio.muted ? 'Sound off' : 'Sound on';
  }
  function getVehicle(id) {
    const vehicle = vehicles[id] ??= drive.buildVehicle(THREE, id);
    const paint = vehicle.spec.paints[paintOf(id)];
    vehicle.setPaint(paint.hex, paint.metal);
    return vehicle;
  }

  function renderPicker() {
    document.querySelectorAll('[data-pick]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.pick === carId));
    const spec = drive.SPECS[carId], chosen = paintOf(carId);
    $('pickPaint').innerHTML = spec.paints.map((p, i) =>
      `<button style="--c:${p.hex}" data-paint="${i}" aria-pressed="${i === chosen}" title="${p.name}" aria-label="${p.name}"></button>`
    ).join('');
  }
  document.querySelectorAll('[data-pick]').forEach((b) => b.addEventListener('click', () => {
    carId = b.dataset.pick;
    store.set('pkm.drive.car', carId);
    renderPicker();
  }));
  $('pickPaint').addEventListener('click', (e) => {
    const button = e.target.closest('[data-paint]');
    if (!button) return;
    const index = Number(button.dataset.paint);
    store.set(paintKey(carId), index);
    renderPicker();
    $('pickPaint').querySelector(`[data-paint="${index}"]`).focus();
  });
  $('pickX').addEventListener('click', () => picker.close());
  $('pickGo').addEventListener('click', () => {
    picker.close();
    if (!audio.muted) void audio.unlock().catch(() => {});
    void startAfterPaint();
  });
  picker.addEventListener('close', () => { if (!active) $('takeWheel').focus({ preventScroll: true }); });

  function start(spawn) {
    stopTour();
    $('views').open = $('sceneSettings').open = false;
    previousPosition.copy(camera.position);
    previousTarget.copy(controls.target);
    saved = { near: camera.near, far: camera.far, fov: camera.fov };
    previousAutoRotate = controls.autoRotate;
    controls.autoRotate = false;
    for (const v of Object.values(vehicles)) scene.remove(v.root);
    const vehicle = getVehicle(carId);
    scene.add(vehicle.root);
    const carR = vehicle.spec.width * 0.48, carHalf = vehicle.dims.length * 0.5 - carR;
    const staticCollision = drive.makeCollider({ bounds, circles, boxes, carR, carHalf });
    env.collide = (x, z, yaw) => {
      const ground = staticCollision(x, z, yaw);
      const moving = trafficContact(neighbours, x, z, yaw, carHalf, carR);
      return moving && (!ground || moving.depth > ground.depth) ? moving : ground;
    };
    neighbours.length = 0;
    if (!ctrl) {
      ctrl = new drive.DriveController({ THREE, scene, camera, dom: renderer.domElement, vehicle, audio, env, onEvent });
      hud = drive.createHud($('stage'));
      drive.createTouch($('stage'), ctrl);
    } else ctrl.setVehicle(vehicle);
    ctrl.place(spawn.x, spawn.z, spawn.yaw);
    controls.enabled = false;
    camera.far = 3000;
    camera.updateProjectionMatrix();
    active = true;
    document.body.classList.add('driving');
    $('drivebar').hidden = hud.el.hidden = false;
    $('dKeyList').hidden = true;
    $('dKeys').setAttribute('aria-expanded', 'false');
    $('dLights').setAttribute('aria-pressed', vehicle.state.head);
    syncSound();
    onEvent('direction', false);
    ctrl.cycleCamera('chase');
    ctrl.setEnabled(true);
    ctrl.toggleEngine(true);
    last = performance.now();
  }
  async function startAfterPaint(spawn = spots.road()) {
    showStatus('Starting the drive…');
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    if (document.body.dataset.sceneState !== 'ready') return;
    try {
      start(spawn);
      showStatus(matchMedia('(pointer: coarse)').matches ? 'Slide to steer. Stop before shifting.' : 'W to go, S to brake, V to shift. C changes the camera.');
    } catch {
      stop();
      showStatus('The car couldn’t start. The tour is still available.');
    }
  }
  function stop() {
    if (!active) return;
    active = false;
    ctrl.setEnabled(false);
    scene.remove(ctrl.vehicle.root);
    audio.cabin = 0;
    hud.el.hidden = $('drivebar').hidden = true;
    document.body.classList.remove('driving');
    delete document.body.dataset.driveCamera;
    camera.near = saved.near; camera.far = saved.far; camera.fov = saved.fov;
    camera.position.copy(previousPosition); camera.updateProjectionMatrix();
    controls.target.copy(previousTarget);
    controls.autoRotate = previousAutoRotate;
    controls.enabled = true;
    controls.update();
    showStatus('');
    $('takeWheel').focus({ preventScroll: true });
  }
  function onEvent(type, value) {
    if (type === 'camera') {
      $('dCam').value = value;
      document.body.dataset.driveCamera = value;
    }
    if (type === 'lights') $('dLights').setAttribute('aria-pressed', !!value.head);
    if (type === 'direction') {
      $('dShift').textContent = value ? 'Shift to drive' : 'Shift to reverse';
      $('dShift').setAttribute('aria-pressed', value);
    }
    if (type === 'shift-blocked') showStatus('Stop and release the accelerator before shifting.');
  }

  $('dExit').addEventListener('click', stop);
  $('dCam').addEventListener('change', (e) => {
    ctrl.cycleCamera(e.target.value);
    renderer.domElement.focus({ preventScroll: true });
  });
  $('dLights').addEventListener('click', () => ctrl.toggle('head'));
  $('dMute').addEventListener('click', () => {
    audio.setMuted(!audio.muted);
    store.set('pkm.drive.muted', audio.muted);
    syncSound();
    if (!audio.muted) void audio.unlock().catch(() => {});
  });
  $('dShift').addEventListener('click', () => { ctrl.shiftDirection(); renderer.domElement.focus({ preventScroll: true }); });
  function visit(p) {
    ctrl.place(p.x, p.z, p.yaw);
    renderer.domElement.focus({ preventScroll: true });
  }
  $('dJub').addEventListener('click', () => visit(spots.jubilee()));
  $('dTmp').addEventListener('click', () => visit(spots.temple()));
  $('dKeys').addEventListener('click', () => {
    const keys = $('dKeyList');
    keys.hidden = !keys.hidden;
    $('dKeys').setAttribute('aria-expanded', !keys.hidden);
  });
  window.addEventListener('keydown', (e) => { if (active && e.key === 'Escape') stop(); });

  return {
    get active() { return active; },
    get motion() { return active ? ctrl.dyn : null; },
    get position() { return active ? ctrl.vehicle.root.position : null; },
    stop,
    open(auto) {
      if (auto) return startAfterPaint(params.get('at') === 'temple' ? spots.temple() : spots.road());
      showStatus('');
      renderPicker();
      if (!picker.open) picker.showModal();
    },
    frame(now) {
      const dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
      last = now;
      env.night = Number($('sunSlider').value) < 1.5;
      if (env.night && !ctrl.vehicle.state._autoLit) {
        ctrl.vehicle.state._autoLit = true;
        if (!ctrl.vehicle.state.head) ctrl.toggle('head');
      }
      neighbours.length = 0;
      if (traffic.enabled) for (const car of traffic.vehicles) {
        const dx = car.display.x - ctrl.dyn.x, dz = car.display.z - ctrl.dyn.z;
        if (dx * dx + dz * dz < 20 ** 2) neighbours.push(car);
      }
      ctrl.update(dt);
      const position = ctrl.vehicle.root.position;
      const nearJubilee = Math.abs(position.z + 345) < 65 && position.x > 17;
      const nearTemple = Math.abs(position.z - TMP.pos.z) < 65 && position.x > 13;
      const name = nearJubilee ? 'Jubilee House' : nearTemple ? 'Accra Ghana Temple' :
        Math.abs(position.z - ROAD.Zi) < 18.5 && Math.abs(position.x - ROAD.Xc) > 9 ? 'Independence Avenue' : 'Liberation Road';
      if ($('dLocation').textContent !== name) $('dLocation').textContent = name;
      controls.target.copy(position);
      for (const gate of gates) {
        const near = (gate.at.x - position.x) ** 2 + (gate.at.z - position.z) ** 2 < 45 ** 2;
        gate.open += (Number(near) - gate.open) * Math.min(1, dt * 1.6);
        gate.pivot.rotation.y = -gate.side * 1.45 * gate.open;
      }
      hud.update(ctrl.hud(), dt);
      return true;
    },
  };
}
