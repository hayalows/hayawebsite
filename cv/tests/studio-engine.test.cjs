const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const vm = require('node:vm');

const source = (file) => readFileSync(join(__dirname, '../l200/src', file)).toString('base64');
const load = (file) => import('data:text/javascript;base64,' + source(file));

// Accra's engine, three.js r128, loaded the way the browser sees it (a global THREE).
function legacyThree() {
  const ctx = { window: {}, self: {}, console };
  ctx.globalThis = ctx; vm.createContext(ctx);
  vm.runInContext(readFileSync(join(__dirname, '../accra3d/three-r128.min.js'), 'utf8'), ctx);
  return ctx.THREE;
}

test('the colour adapter makes r128 read colours like modern three.js', async () => {
  const [{ adaptLegacyThree }, modern] = await Promise.all([load('legacy.js'), import('three')]);
  const legacy = adaptLegacyThree(legacyThree());
  assert.ok(legacy.ColorManagement, 'shared code detects modern colour rules');
  for (const input of ['#808080', '#5d7d3c', 0x2d2a27, 'red', 'rgb(200, 100, 50)', 'hsl(90, 40%, 30%)', 'skyblue']) {
    const a = new legacy.Color(input), b = new modern.Color(input);
    for (const k of ['r', 'g', 'b']) assert.ok(Math.abs(a[k] - b[k]) < 1e-3, `${input}.${k}: ${a[k]} vs ${b[k]}`);
  }
  const h1 = new legacy.Color().setHSL(0.25, 0.4, 0.3), h2 = new modern.Color().setHSL(0.25, 0.4, 0.3);
  assert.ok(Math.abs(h1.g - h2.g) < 1e-3, 'HSL colours match');
  const raw = new legacy.Color(0.5, 0.5, 0.5);
  assert.equal(raw.r, 0.5, 'explicit linear values are left alone');
  assert.equal(adaptLegacyThree(legacy), legacy, 'adapting twice is harmless');
});

test('the studio picks the modern renderer for capable computers and the light one for weak chips', async () => {
  const { WEAK_GPU } = await load('engine-choice.js');
  for (const gpu of ['ANGLE (Apple, Apple M2, OpenGL 4.1)', 'NVIDIA GeForce RTX 3060', 'AMD Radeon RX 6600', 'Intel(R) Iris(R) Xe Graphics', 'Adreno (TM) 740'])
    assert.equal(WEAK_GPU.test(gpu), false, gpu);
  for (const gpu of ['Google SwiftShader', 'llvmpipe (LLVM 15)', 'Mali-G52', 'Adreno (TM) 506', 'PowerVR Rogue GE8320', 'Intel(R) UHD Graphics 620', 'Intel(R) HD Graphics 520'])
    assert.equal(WEAK_GPU.test(gpu), true, gpu);
});
