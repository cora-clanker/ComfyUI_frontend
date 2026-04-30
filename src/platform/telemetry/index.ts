import type { TelemetryDispatcher } from './types'

/**
 * Get the telemetry dispatcher for tracking events.
 * Returns null in OSS builds - all tracking calls become no-ops.
 *
 * Usage: useTelemetry()?.trackAuth({ method: 'google' })
 */
export function useTelemetry(): TelemetryDispatcher | null {
  return null
}
