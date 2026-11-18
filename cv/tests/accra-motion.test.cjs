const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFile } = require('node:fs/promises');
const { join } = require('node:path');

const motion = readFile(join(__dirname, '../accra3d/motion.js'))
  .then(source => import('data:text/javascript;base64,' + source.toString('base64')));

test('Liberation Road has distinct lanes, curbs and a clear crossing', async () => {
  const { createRoadSurface } = await motion;
  const ground = createRoadSurface({ Xc: 0, Zi: 0 }, () => 0);
  assert.equal(ground(-6, 90).name, 'asphalt');
  assert.equal(ground(6, 90).name, 'asphalt');
  assert.equal(ground(0, 90).name, 'grass');
  assert.equal(ground(10, 90).name, 'pavers');
  assert.ok(ground(10, 90).height > ground(6, 90).height);
  assert.equal(ground(12.9, 90).name, 'drain');
  assert.equal(ground(0, 0).name, 'asphalt');
  assert.equal(ground(22, 6).name, 'asphalt');
  assert.equal(ground(20, -367).name, 'dirt');
  assert.equal(ground(52, -345).name, 'pavers');
  assert.equal(ground(52, -367).name, 'grass');
  assert.equal(ground(44, 362).name, 'pavers');
});

test('traffic contact uses the visible car position and its travel direction', async () => {
  const { trafficContact } = await motion;
  const traffic = [{ pos: { x: 20, z: 0 }, display: { x: 0, z: 0 }, yaw: Math.PI / 2, length: 4, radius: 1, v: 8 }];
  const hit = trafficContact(traffic, 1.5, 0, 0, 1.5, 0.85);
  assert.ok(hit.depth > 0 && hit.nx > 0.99);
  assert.ok(Math.abs(hit.vx) < 0.01);
  assert.equal(hit.vz, -8);
  assert.equal(trafficContact(traffic, 3, 0, 0, 1.5, 0.85), null);
});

test('equal tour progress moves the camera an equal distance', async () => {
  const { sampleArc } = await motion;
  const point = t => ({ x: 100 * t * t, y: 0, z: 0 });
  const arc = sampleArc(point);
  for (const progress of [0, 0.15, 0.35, 0.55, 0.8, 1]) {
    const t = arc.parameterAt(progress);
    assert.ok(Math.abs(point(t).x - progress * 100) < 0.01);
    assert.ok(Math.abs(arc.progressAt(t) - progress) < 0.0001);
  }
});
