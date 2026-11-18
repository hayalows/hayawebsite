// Accra 3D bridge: exposes the shared Drive Studio vehicles to the r128 page.
import { buildVehicle, SPECS } from './vehicles.js';
import { VehicleAudio } from './audio.js';
import { DriveController, makeCollider, createHud, createTouch, HUD_CSS } from './drive.js';
window.PKMDrive = { buildVehicle, SPECS, VehicleAudio, DriveController, makeCollider, createHud, createTouch, HUD_CSS };
