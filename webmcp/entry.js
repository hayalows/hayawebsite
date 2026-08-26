import { registerTools } from "@nekuda/webmcp-sdk";
import { askHayalows, browseHayalowsServices, prepareHayalowsEnquiry } from "./tools.js";

const homepage = location.pathname === "/" || location.pathname === "/index.html";
const tools = homepage
  ? [askHayalows, browseHayalowsServices, prepareHayalowsEnquiry]
  : [askHayalows];

const registration = registerTools(tools, { telemetry: false });
addEventListener("pagehide", () => registration.unregister(), { once: true });
