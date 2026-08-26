import { registerTools } from "@nekuda/webmcp-sdk";
import {
  askHayalows,
  browseHayalowsServices,
  navigateHayalows,
  prepareHayalowsEnquiry,
  restorePendingEnquiryDraft,
} from "./tools.js";

restorePendingEnquiryDraft();

const registration = registerTools(
  [askHayalows, browseHayalowsServices, prepareHayalowsEnquiry, navigateHayalows],
  { telemetry: false },
);
addEventListener("pagehide", () => registration.unregister(), { once: true });
