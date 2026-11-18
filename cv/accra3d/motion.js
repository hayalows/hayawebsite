const clamp = (value, low, high) => Math.max(low, Math.min(high, value));

const asphalt = { name: 'asphalt', height: 0.03, mu: 1.02, rough: 0.035 };
const pavers = { name: 'pavers', height: 0.18, mu: 0.85, rough: 0.16 };
const grass = { name: 'grass', height: 0.2, mu: 0.55, rough: 0.27 };
const dirt = { name: 'dirt', height: 0.02, mu: 0.64, rough: 0.43 };
const drain = { name: 'drain', height: 0.015, mu: 0.68, rough: 0.48 };
const inBox = (x, z, west, east, north, south) => x >= west && x <= east && z >= north && z <= south;
const smoothstep = (t) => t * t * (3 - 2 * t);

export function createRoadSurface(road, roadXAt, terrace) {
  return (x, z) => {
    const offset = x - roadXAt(z);
    const junction = Math.abs(z - road.Zi) < 18.5;
    const crossRoad = Math.abs(x - road.Xc) > 18.5;
    const width = Math.abs(junction && crossRoad ? z - road.Zi : offset);
    let surface;
    if (junction && !crossRoad) {
      surface = Math.abs(offset) > 9.25 && Math.abs(z - road.Zi) > 9.25 ? pavers : asphalt;
    } else if (width < 2) surface = grass;
    else if (width < 9) surface = asphalt;
    else if (!junction && offset > 0 && width < 20 && (Math.abs(z + 345) < 9 || Math.abs(z - 352) < 7)) surface = asphalt;
    else if (width < 12.25) surface = pavers;
    else if (width < 13.1) surface = drain;
    else if (inBox(x, z, 16, 222, 278, 462) || inBox(x, z, 16, 360, -495, -200)) surface = asphalt;
    else surface = dirt;

    if (terrace && x > 18) {
      const edge = Math.max(Math.abs(x - terrace.c.x) - terrace.hx, Math.abs(z - terrace.c.z) - terrace.hz);
      if (edge < 5) return { ...asphalt, height: Math.max(asphalt.height, terrace.h * smoothstep(clamp(1 - edge / 5, 0, 1))) };
    }
    return surface;
  };
}

// Three points along the player chassis against a rounded footprint for each nearby car.
export function trafficContact(vehicles, x, z, yaw, half, radius) {
  const sin = Math.sin(yaw), cos = Math.cos(yaw);
  let best = null;
  for (const car of vehicles) {
    const position = car.display ?? car.pos, heading = car.displayYaw ?? car.yaw;
    const dx = x - position.x, dz = z - position.z;
    if (dx * dx + dz * dz > 100) continue;
    const fx = Math.cos(heading), fz = -Math.sin(heading);
    const span = car.length * 0.5 - car.radius;
    for (const forward of [-half, 0, half]) {
      const px = dx + forward * sin, pz = dz + forward * cos;
      const along = clamp(px * fx + pz * fz, -span, span);
      const nx = px - along * fx, nz = pz - along * fz;
      const distance = Math.hypot(nx, nz), depth = radius + car.radius - distance;
      if (depth <= 0 || (best && depth <= best.depth)) continue;
      best = {
        nx: distance > 0.0001 ? nx / distance : -fz,
        nz: distance > 0.0001 ? nz / distance : fx,
        depth, vx: fx * car.v, vz: fz * car.v,
      };
    }
  }
  return best;
}

// Keep the camera and look-at splines on the same parameter while spacing camera travel by distance.
export function sampleArc(pointAt, segments = 512) {
  const distances = new Float64Array(segments + 1);
  let previous = pointAt(0);
  for (let i = 1; i <= segments; i++) {
    const next = pointAt(i / segments);
    distances[i] = distances[i - 1] + Math.hypot(next.x - previous.x, next.y - previous.y, next.z - previous.z);
    previous = next;
  }
  const length = distances[segments];
  return {
    progressAt(t) {
      const sample = clamp(t, 0, 1) * segments, lo = Math.floor(sample);
      if (lo === segments || !length) return clamp(t, 0, 1);
      return (distances[lo] + (distances[lo + 1] - distances[lo]) * (sample - lo)) / length;
    },
    parameterAt(progress) {
      const distance = clamp(progress, 0, 1) * length;
      if (!length) return clamp(progress, 0, 1);
      if (distance === length) return 1;
      let lo = 0, hi = segments;
      while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (distances[mid] <= distance) lo = mid; else hi = mid;
      }
      const span = distances[hi] - distances[lo];
      return (lo + (span ? (distance - distances[lo]) / span : 0)) / segments;
    },
  };
}
