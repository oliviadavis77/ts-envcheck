# Required-env validator

Getting paged because a worker started without a database URL and silently dropped queue messages is a recurring postmortem theme. This utility forces the process to exit immediately if a required environment variable is missing. It operates without any external dependencies.

The TypeScript implementation relies strictly on the standard library. You do not need to pull in third-party packages or configure a remote service to validate your environment at startup.

```
envcheck.ts
```

Check the test suite located next to the main implementation. It provides concrete examples of how to wire this validation into your application startup sequence.