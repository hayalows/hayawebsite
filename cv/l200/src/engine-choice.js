// One rule, used by the page's early preload script and by the studio itself.
export const WEAK_GPU = /SwiftShader|llvmpipe|Mali-[GT]?[0-9]{1,3}\b|Adreno \(TM\) [1-5][0-9]{2}\b|PowerVR|Intel.*(HD|UHD) Graphics/i;
export function chooseEngine(quality = 'auto') {
  if (quality === 'high') return 'modern';
  if (quality === 'low') return 'legacy';
  let gpu = '';
  try {
    const c = document.createElement('canvas'), g = c.getContext('webgl');
    const e = g && g.getExtension('WEBGL_debug_renderer_info');
    gpu = e ? String(g.getParameter(e.UNMASKED_RENDERER_WEBGL)) : '';
    g?.getExtension('WEBGL_lose_context')?.loseContext();
  } catch {}
  const phone = matchMedia('(pointer: coarse)').matches && Math.min(screen.width, screen.height) < 600;
  return WEAK_GPU.test(gpu) || (navigator.hardwareConcurrency || 8) <= 4 || phone ? 'legacy' : 'modern';
}
