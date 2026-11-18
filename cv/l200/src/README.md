# Drive Studio source

`/l200/` is Drive Studio: two original PKM Motors vehicles (the Volta pickup and the Regent V8 SUV), a showroom and an outdoor proving ground. The same vehicles, physics and engine audio also power the drive mode in `/accra3d/`.

| File | What it does |
| --- | --- |
| `vehicles.js` | Builds both vehicles with three.js primitives. Uses only APIs that exist from r128 to current, so both pages can share it. |
| `physics.js` | Dynamic bicycle model, load transfer, tyre grip limits, torque curves and an automatic gearbox. |
| `audio.js` | Synthesised engine (diesel or V8), turbo, horn, indicators, doors, tyre squeal and wind. |
| `drive.js` | Input (keyboard, touch, gamepad), cameras, dust, skid marks and the shared HUD. |
| `world.js` | The PKM showroom and the Kumasi proving ground. |
| `studio.js` | Drive Studio page logic, UI and Easter eggs. |
| `accra.js` | Exposes the shared modules as `window.PKMDrive` for Accra 3D (three r128 global). |

## Build

```sh
npm i three esbuild
npx esbuild src/studio.js --bundle --format=esm --minify --outfile=studio.js
npx esbuild src/accra.js --bundle --format=iife --minify --outfile=pkm-drive.js
```

Run both commands from `cv/l200/` after editing the source. The built `studio.js` and `pkm-drive.js` are committed, because the site has no build step.
