const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFile } = require('node:fs/promises');
const { join } = require('node:path');

function importSource(file) {
  return readFile(join(__dirname, '../l200/src', file))
    .then((source) => import('data:text/javascript;base64,' + source.toString('base64')));
}

const modules = Promise.all([importSource('physics.js'), importSource('vehicles.js')]);
const neutral = { throttle: 0, brake: 0, steer: 0, handbrake: false };
const step = 1 / 120;

test('braking stays stopped and never selects reverse for either vehicle', async () => {
  const [{ createDynamics, stepDynamics }, { SPECS }] = await modules;
  for (const spec of Object.values(SPECS)) {
    const car = createDynamics(spec);
    car.engine = true;
    car.vx = 20;
    for (let i = 0; i < 5 / step; i++) stepDynamics(car, { ...neutral, brake: 1 }, {}, step);
    assert.equal(car.vx, 0, spec.name);
    assert.equal(car.reverse, false, spec.name);
  }
});

test('reverse requires the selected gear and still uses a separate brake', async () => {
  const [{ createDynamics, stepDynamics }, { SPECS }] = await modules;
  const car = createDynamics(SPECS.volta);
  car.engine = true;
  car.reverse = true;
  for (let i = 0; i < 1 / step; i++) stepDynamics(car, { ...neutral, throttle: 1 }, {}, step);
  assert.ok(car.vx < -1);
  for (let i = 0; i < 2 / step; i++) stepDynamics(car, { ...neutral, brake: 1 }, {}, step);
  assert.equal(car.vx, 0);
  assert.equal(car.reverse, true);
});

test('road texture produces repeatable suspension travel', async () => {
  const [{ createDynamics, stepDynamics }, { SPECS }] = await modules;
  const run = () => {
    const car = createDynamics(SPECS.regent);
    car.engine = true;
    const env = { grip: () => ({ mu: 0.72, rough: 0.45, name: 'dirt' }) };
    for (let i = 0; i < 3 / step; i++) stepDynamics(car, { ...neutral, throttle: 0.8, steer: 0.2 }, env, step);
    assert.notEqual(car.heave, 0);
    return car;
  };
  assert.deepEqual(run(), run());
});

test('four tyre contacts affect bank and grade, and the brake holds on a slope', async () => {
  const [{ createDynamics, stepDynamics, sampleTyres }, { SPECS }] = await modules;
  const car = createDynamics(SPECS.volta);
  const slope = (x, z) => ({ name: 'pavers', mu: 0.85, rough: 0.15, height: x * 0.04 + z * 0.08 });
  const tyres = sampleTyres(slope, car.spec, 0, 0, 0, {});
  assert.ok(tyres.fl.height > tyres.fr.height && tyres.fr.height > tyres.rr.height);
  for (let i = 0; i < 1 / step; i++) stepDynamics(car, neutral, { tyreContact: slope }, step);
  assert.ok(car.vx < -0.2 && car.groundPitch > 0 && car.groundRoll > 0);
  for (let i = 0; i < 2 / step; i++) stepDynamics(car, { ...neutral, brake: 1 }, { tyreContact: slope }, step);
  assert.equal(car.vx, 0);
  assert.equal(car.reverse, false);
});

test('full lock at speed turns without spinning, even while braking', async () => {
  const [{ createDynamics, stepDynamics }, { SPECS }] = await modules;
  for (const spec of Object.values(SPECS)) for (const brake of [0, 0.8]) {
    const car = createDynamics(spec);
    car.engine = true; car.vx = 25; car.gear = 4;
    let worst = 0;
    for (let i = 0; i < 2 / step; i++) {
      stepDynamics(car, { ...neutral, steer: 1, throttle: brake ? 0 : 0.4, brake }, {}, step);
      if (Math.hypot(car.vx, car.vy) > 5) worst = Math.max(worst, Math.abs(Math.atan2(car.vy, Math.abs(car.vx))));
    }
    assert.ok(worst < 0.3, `${spec.name} slid ${(worst * 57.3).toFixed(0)} degrees`);
    assert.ok(car.vx >= 0, `${spec.name} spun round`);
  }
});

test('the handbrake still lets the rear step out', async () => {
  const [{ createDynamics, stepDynamics }, { SPECS }] = await modules;
  const car = createDynamics(SPECS.volta);
  car.engine = true; car.vx = 15; car.gear = 3;
  let worst = 0;
  for (let i = 0; i < 1.2 / step; i++) {
    stepDynamics(car, { ...neutral, steer: 1, handbrake: true }, {}, step);
    worst = Math.max(worst, Math.abs(Math.atan2(car.vy, Math.max(1, Math.abs(car.vx)))));
  }
  assert.ok(worst > 0.3, `slip only ${(worst * 57.3).toFixed(0)} degrees`);
});
