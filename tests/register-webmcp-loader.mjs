import { registerHooks } from "node:module";

const sdkUrl = new URL("../vendor/webmcp-sdk-0.5.0.js", import.meta.url).href;

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === "@nekuda/webmcp-sdk") {
      return { url: sdkUrl, format: "module", shortCircuit: true };
    }
    const resolved = nextResolve(specifier, context);
    if (resolved.url.includes("/webmcp/") && new URL(resolved.url).pathname.endsWith(".js")) {
      return { ...resolved, format: "module" };
    }
    return resolved;
  },
});
