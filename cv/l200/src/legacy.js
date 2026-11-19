// Teach three.js r128 (Accra's engine) the colour rules of modern three.js.
// Modern three treats hex and CSS colours as sRGB and converts them to linear light.
// r128 used them as linear values, so the same scene rendered 2-7x too bright in places
// (reflections, floor, emissive panels) and paint looked milky. With this adapter one
// scene description renders the same in both engines.
export function adaptLegacyThree(THREE) {
  if (THREE.ColorManagement) return THREE;
  const proto = THREE.Color.prototype;
  // setHSL is left alone: modern three treats HSL numbers as linear too. CSS hsl() strings still
  // convert, because they arrive through setStyle.
  let depth = 0; // setStyle can call setHex or setHSL internally; convert once, at the outermost call
  const wrap = (fn) => function (...args) {
    depth++;
    try { fn.apply(this, args); } finally { depth--; }
    if (!depth) this.convertSRGBToLinear();
    return this;
  };
  proto.setHex = wrap(proto.setHex);
  proto.setStyle = wrap(proto.setStyle);
  if (proto.setColorName) proto.setColorName = wrap(proto.setColorName);
  THREE.ColorManagement = { enabled: true, legacyAdapter: true };
  return THREE;
}
