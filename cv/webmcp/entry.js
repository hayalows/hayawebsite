import { registerTools } from "@nekuda/webmcp-sdk";
import {
  getPapaKojoEducation,
  getPapaKojoExperience,
  getPapaKojoProfile,
  getPapaKojoProjects,
  getPapaKojoSkills,
  preparePapaKojoEmail,
} from "./tools.js";

const tools = [
  getPapaKojoProfile,
  getPapaKojoSkills,
  getPapaKojoExperience,
  getPapaKojoEducation,
  getPapaKojoProjects,
  preparePapaKojoEmail,
];
let registration = registerTools(tools, { telemetry: false });
addEventListener("pagehide", () => registration.unregister());
// A restored page keeps its modules, so register again after the old signal was aborted.
addEventListener("pageshow", (event) => {
  if (event.persisted) registration = registerTools(tools, { telemetry: false });
});
