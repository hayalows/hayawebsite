import { registerTools } from "@nekuda/webmcp-sdk";
import { askPapaKojo, preparePapaKojoEmail } from "./tools.js";

const registration = registerTools([askPapaKojo, preparePapaKojoEmail], { telemetry: false });
addEventListener("pagehide", () => registration.unregister(), { once: true });
