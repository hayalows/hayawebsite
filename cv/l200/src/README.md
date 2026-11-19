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
| `accra.js` | Exports the shared modules for Accra 3D, which loads the driving bundle on demand. |

## Build

```sh
npm i --no-save three@0.187.0 esbuild@0.25.12
npx esbuild src/studio.js --bundle --format=esm --minify '--external:/l200/*' '--external:/accra3d/*' --outfile=studio.js
npx esbuild src/studio-high.js --bundle --format=esm --minify --outfile=studio-high.js
npx esbuild src/accra.js --bundle --format=esm --minify --outfile=pkm-drive.js
```

Run the commands from `cv/l200/` after editing the source. The generated bundles are committed, because the site has no build step.

Engines: `engine-choice.js` (and the matching early script in `index.html`) gives capable computers the modern renderer (`studio-high.js`: reflective floor, night glow). Phones and weak graphics chips get Accra's three.js r128, which is often already cached. `legacy.js` teaches r128 modern colour rules, and the studio scales r128's environment light to match (0.45 in the showroom, 1.6 outdoors), so both engines render the same scene the same way. `tests/studio-engine.test.cjs` checks the colour match against modern three.js.
