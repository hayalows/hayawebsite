const sdkUrl = new URL("../vendor/webmcp-sdk-0.5.0.js", import.meta.url).href;

export function resolve(specifier, context, nextResolve) {
  if (specifier === "@nekuda/webmcp-sdk") {
    return { url: sdkUrl, shortCircuit: true };
  }
  return nextResolve(specifier, context);
}
