import { registerTools } from "@nekuda/webmcp-sdk";
import {
  askHayalows,
  browseHayalowsServices,
  prepareHayalowsEnquiry,
  restorePendingEnquiryDraft,
} from "./tools.js";

restorePendingEnquiryDraft();

const registration = registerTools(
  [askHayalows, browseHayalowsServices, prepareHayalowsEnquiry],
  { telemetry: false },
);
addEventListener("pagehide", () => registration.unregister(), { once: true });
