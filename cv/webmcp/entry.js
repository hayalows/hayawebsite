import { registerTools } from "@nekuda/webmcp-sdk";
import { askPapaKojo } from "./tools.js";

const registration = registerTools([askPapaKojo], { telemetry: false });
addEventListener("pagehide", () => registration.unregister(), { once: true });
