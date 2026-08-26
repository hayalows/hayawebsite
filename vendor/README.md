# Vendored WebMCP SDK

`webmcp-sdk-0.5.0-output-schema.js` is a narrow compatibility build based on the published ESM bundle from `@nekuda/webmcp-sdk@0.5.0`.

- Source: https://github.com/nekuda-ai/webmcp-sdk
- Upstream npm integrity: `sha512-lWRjwIiaqVsKnr97T8JjyqSIjzCCxjBekzd3Jy4cpew/J0LxxZWCgL14+z1ojjDIBkfX99fV0qZvfj5vF3ZswA==`
- License: MIT

The local compatibility patch validates and forwards a tool's `outputSchema`, and includes object results as `structuredContent` alongside the SDK's text fallback. No telemetry behavior or registration fallback was changed. The asset is served locally so this dependency-free static site does not rely on a runtime CDN.
