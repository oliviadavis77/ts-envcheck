# Required-env validator

Missing environment variables cause silent failures in production. This tool forces the process to exit immediately if required configuration is absent. It has zero external dependencies.

TypeScript Envcheck relies strictly on the standard library. There is no third-party package to install or sidecar service to run just to validate config at startup.

```
envcheck.ts
```

Run the TypeScript Envcheck test suite alongside the source code to see how it handles missing keys in practice.