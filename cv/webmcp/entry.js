import { registerTools } from "@nekuda/webmcp-sdk";
import {
  askPapaKojo,
  getPapaKojoProjects,
  navigatePapaKojoProfile,
  preparePapaKojoEmail,
} from "./tools.js";

const registration = registerTools(
  [askPapaKojo, getPapaKojoProjects, navigatePapaKojoProfile, preparePapaKojoEmail],
  { telemetry: false },
);
addEventListener("pagehide", () => registration.unregister(), { once: true });
