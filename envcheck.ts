/** Fail fast on missing required env vars. Zero dependencies. */
export function missing(required: string[], env: Record<string, string | undefined>): string[] {
  return required.filter((k) => !env[k]);
}
export function require_(required: string[], env: Record<string, string | undefined>): void {
  const m = missing(required, env);
  if (m.length) throw new Error("missing required env: " + m.join(", "));
}
