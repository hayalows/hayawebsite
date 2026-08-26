import { registerTools } from "@nekuda/webmcp-sdk";
import {
  getPapaKojoEducation,
  getPapaKojoExperience,
  getPapaKojoProfile,
  getPapaKojoProjects,
  getPapaKojoSkills,
  preparePapaKojoEmail,
} from "./tools.js";

const registration = registerTools(
  [
    getPapaKojoProfile,
    getPapaKojoSkills,
    getPapaKojoExperience,
    getPapaKojoEducation,
    getPapaKojoProjects,
    preparePapaKojoEmail,
  ],
  { telemetry: false },
);
addEventListener("pagehide", () => registration.unregister(), { once: true });
