import * as drive from '/l200/pkm-drive.js?v=10';
import { createRoadSurface, trafficContact } from './motion.js?v=2';

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
  let ctrl, hud, bar, active = false, last = 0, statusTimer, place = 'Liberation Road';
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
    adaptiveBrakes: true,
    anchoredCockpit: true,
    tyreContact: contact,
    groundY: (x, z) => contact(x, z).height,
    respawn(d) {
      const z = Math.max(-860, Math.min(860, d.z));
      return roadSpawn(z);
    },
    cameraCollision: drive.makeCollider({ bounds, boxes, circles, carR: 0.22, carHalf: 0 }),
    dustColor: 0xb4643c,
    night: false,
    navMap: (g, w, h, d) => paintMap(g, w, h, d),
  };
  // Centre-screen map: the same roads and landmarks as the site plan, heading up and close in.
  const roadPoints = ROAD.curve.getSpacedPoints(420);
  const landmarks = [
    { name: 'Jubilee House', x: JUB.pos.x, z: JUB.pos.z },
    { name: 'Accra Ghana Temple', x: TMP.pos.x, z: TMP.pos.z },
  ];
  const metres = (m) => m < 950 ? `${Math.round(m / 10) * 10} m` : `${(m / 1000).toFixed(1)} km`;
  function nextStop(d) {
    const fx = Math.sin(d.yaw), fz = Math.cos(d.yaw);
    let best = null;
    for (const l of landmarks) {
      const dx = l.x - d.x, dz = l.z - d.z, dist = Math.hypot(dx, dz), ahead = (dx * fx + dz * fz) / Math.max(1, dist);
      const score = dist * (ahead > 0.2 ? 1 : 3);
      if (!best || score < best.score) best = { ...l, dist, score };
    }
    return best;
  }
  function paintMap(g, w, h, d) {
    const stop = nextStop(d);
    const detail = stop.dist < 90 ? `Arrived at ${stop.name}` : `${stop.name} · ${metres(stop.dist)}`;
    drive.paintNavMap(g, w, h, d, {
      scale: 0.55, title: place, detail,
      labels: [
        { text: 'Jubilee House', x: JUB.pos.x, z: JUB.pos.z - 80 },
        { text: 'Temple', x: TMP.pos.x, z: TMP.pos.z + 50 },
      ],
      world(ctx, px) {
        ctx.fillStyle = '#1f3020'; ctx.fillRect(26, -480, 274, 270); ctx.fillRect(24, 285, 190, 167);
        ctx.fillStyle = '#d7a948'; ctx.fillRect(JUB.pos.x - 20, JUB.pos.z - 65, 40, 130);
        ctx.fillStyle = '#ece6da'; ctx.fillRect(TMP.pos.x - 16, TMP.pos.z - 18, 32, 36);
        const road = (width, colour) => {
          ctx.strokeStyle = colour; ctx.lineWidth = width;
          ctx.beginPath(); roadPoints.forEach((p, i) => (i ? ctx.lineTo(p.x, p.z) : ctx.moveTo(p.x, p.z)));
          ctx.moveTo(-600, ROAD.Zi); ctx.lineTo(800, ROAD.Zi); ctx.stroke();
        };
        road(30, '#2a332d'); road(19, '#8e8a80');
        ctx.setLineDash([10 * px, 12 * px]); road(1.6 * px, '#d8d2c4'); ctx.setLineDash([]);
        ctx.strokeStyle = '#d7a948'; ctx.lineWidth = 3 * px; ctx.setLineDash([6 * px, 6 * px]);
        ctx.beginPath(); ctx.moveTo(d.x, d.z); ctx.lineTo(stop.x, stop.z); ctx.stroke(); ctx.setLineDash([]);
      },
    });
  }
  function roadSpawn(startZ) {
    let best, largestGap = -1;
    for (const offset of [0, -14, 14, -28, 28, -42, 42]) {
      const z = Math.max(-860, Math.min(860, startZ + offset));
      const yaw = Math.atan2(roadXAt(z + 1) - roadXAt(z - 1), 2);
      for (const lane of [-3.75, -7.25]) {
        const x = roadXAt(z) + lane / Math.cos(yaw);
        let gap = Infinity;
        if (traffic.enabled) for (const car of traffic.vehicles) {
          const dx = car.display.x - x, dz = car.display.z - z;
          if (Math.abs(dx * Math.cos(yaw) - dz * Math.sin(yaw)) < 2.5) {
            gap = Math.min(gap, Math.abs(dx * Math.sin(yaw) + dz * Math.cos(yaw)));
          }
        }
        if (gap > 23) return { x, z, yaw };
        if (gap > largestGap) { largestGap = gap; best = { x, z, yaw }; }
      }
    }
    return best;
  }
  const spots = {
    road: () => roadSpawn(-440),
    jubilee: () => { const point = jw(0, 118); return { x: point.x, z: point.z, yaw: Math.PI / 2 }; },
    temple: () => ({ x: 44, z: TMP.pos.z, yaw: Math.PI / 2 }),
  };

  function showStatus(text) {
    const target = $('driveStatus');
    target.textContent = text;
    clearTimeout(statusTimer);
    if (text) statusTimer = setTimeout(() => { target.textContent = ''; }, 5000);
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
      bar = drive.createDriveBar($('stage'), ctrl, {
        exitLabel: 'Exit drive', onExit: () => stop(),
        resetLabel: 'Back to the road', onReset: () => ctrl.recover(),
        places: [{ id: 'jubilee', label: 'Jubilee House' }, { id: 'temple', label: 'Accra Ghana Temple' }, { id: 'road', label: 'Liberation Road' }],
        onPlace: (id) => drive.veil(() => { const p = spots[id](); ctrl.place(p.x, p.z, p.yaw); }),
        sound: {
          muted: () => audio.muted,
          toggle() {
            audio.setMuted(!audio.muted); store.set('pkm.drive.muted', audio.muted);
            if (!audio.muted) void audio.unlock().catch(() => {});
          },
        },
      });
    } else ctrl.setVehicle(vehicle);
    ctrl.place(spawn.x, spawn.z, spawn.yaw);
    controls.enabled = false;
    camera.far = 3000;
    camera.updateProjectionMatrix();
    active = true;
    document.body.classList.add('driving');
    hud.el.hidden = false; place = '';
    ctrl.cycleCamera(ctrl.camMode || 'chase');
    ctrl.setEnabled(true);
    bar.show(true);
    ctrl.toggleEngine(true);
    last = performance.now();
  }
  async function startAfterPaint(spawn = spots.road()) {
    showStatus('Starting the drive…');
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    if (document.body.dataset.sceneState !== 'ready') return;
    await drive.veil(() => {
      try {
        start(spawn);
        showStatus(drive.DRIVE_HINT[matchMedia('(pointer: coarse)').matches ? 'coarse' : 'fine']);
      } catch {
        finish();
        showStatus('The car couldn’t start. The tour is still available.');
      }
    });
  }
  function stop() {
    if (active) void drive.veil(finish);
  }
  function finish() {
    if (!active) return;
    active = false;
    ctrl.setEnabled(false);
    scene.remove(ctrl.vehicle.root);
    audio.cabin = 0;
    hud.el.hidden = true; bar.show(false);
    $('miniPlace').textContent = 'Site plan';
    document.body.classList.remove('driving');
    camera.near = saved.near; camera.far = saved.far; camera.fov = saved.fov;
    camera.position.copy(previousPosition); camera.updateProjectionMatrix();
    controls.target.copy(previousTarget);
    controls.autoRotate = previousAutoRotate;
    controls.enabled = true;
    controls.update();
    showStatus('');
    $('takeWheel').focus({ preventScroll: true });
  }
  function onEvent(type) {
    if (type === 'camera' || type === 'lights' || type === 'direction') bar?.sync();
    if (type === 'direction') showStatus(ctrl.dyn.reverse ? 'Reverse. Press W or the Go pedal to drive forward.' : '');
    if (type === 'shift-blocked') showStatus('Stop and release the accelerator before shifting.');
  }

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
      if (place !== name) { place = name; $('miniPlace').textContent = name; }
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
