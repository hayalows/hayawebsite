const intro = document.querySelector('.scene-intro');
const preview = document.querySelector('.scene-preview');
const controls = document.querySelector('[data-scene-controls]');
const status = intro.querySelector('[role="status"]');
const retry = intro.querySelector('[data-scene-retry]');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let phase = 'loading';

const shell = {
  reducedMotion,
  get running() { return phase === 'loading' || phase === 'ready'; },
  progress(message) { if (phase === 'loading') status.textContent = message; },
  watchCanvas(canvas) {
    canvas.addEventListener('webglcontextlost', () => shell.fail('The 3D view lost its graphics connection.'));
  },
  ready() {
    if (phase !== 'loading') return;
    phase = 'ready';
    clearTimeout(deadline);
    document.body.dataset.sceneState = 'ready';
    controls.hidden = false;
    // fade the poster and intro away over the live scene, then remove them
    const done = () => { if (phase === 'ready') intro.hidden = preview.hidden = true; };
    if (reducedMotion.matches) done(); else setTimeout(done, 750);
  },
  fail(message) {
    if (phase === 'failed') return;
    phase = 'failed';
    clearTimeout(deadline);
    controls.hidden = true;
    intro.hidden = preview.hidden = retry.hidden = false;
    document.body.dataset.sceneState = 'failed';
    status.textContent = message;
  },
};
const afterPaint = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
const deadline = setTimeout(() => shell.fail('3D is taking too long to load. You can try again.'), 30000);
shell.progress('Loading the 3D view…');
retry.href = location.href;

try {
  await afterPaint();
  if (intro.dataset.scene === 'accra') {
    const { startAccra } = await import('/accra3d/scene.js?v=12');
    if (shell.running) await startAccra(shell);
  } else {
    const { startStudio } = await import('/l200/studio.js?v=11');
    if (shell.running) await startStudio(shell);
  }
} catch (error) {
  const graphics = /WebGL|graphics context/i.test(error.message);
  shell.fail(graphics ? '3D graphics are unavailable in this browser.' : 'The 3D view couldn’t load. You can try again.');
}
