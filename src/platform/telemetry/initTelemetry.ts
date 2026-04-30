/**
 * Telemetry Provider initialization — stubbed.
 *
 * The telemetry registry is intentionally never populated, so `useTelemetry()`
 * returns null and every `useTelemetry()?.trackXxx(...)` callsite becomes a
 * no-op. Provider implementations remain in the tree but are unreachable.
 */
export async function initTelemetry(): Promise<void> {}
