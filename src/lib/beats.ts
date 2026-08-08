/**
 * Scroll ramps for a sequence of beats inside one pinned section.
 *
 * Two constraints shape these, both learned the hard way:
 *
 * 1. Motion offloads scroll-linked opacity to a native ViewTimeline, and WAAPI
 *    rejects keyframe offsets outside [0, 1] or out of order — so every stop
 *    stays inside the section's own progress and strictly increases.
 * 2. The keyframes must span the *whole* 0→1 timeline. A ramp that stopped at,
 *    say, 0.33 left the animation outside its active interval past that point,
 *    and the element froze at whatever value it last held instead of staying
 *    faded out. Hence the flat head and tail on every ramp below.
 *
 * The first beat starts already visible and the last one stays visible, which
 * is what you want at the two ends of a pin.
 */
export type Ramp = {
  input: number[]
  opacity: number[]
  y: number[]
  dim: number[]
}

/** How far an inactive step fades, for lists that dim rather than disappear. */
const DIM = 0.3

export function beatRamp(index: number, count: number, travel = 30): Ramp {
  const span = 1 / count
  const start = index * span
  const end = (index + 1) * span
  const pad = span * 0.22

  if (index === 0) {
    return {
      input: [0, end - pad, end, 1],
      opacity: [1, 1, 0, 0],
      y: [0, 0, -travel, -travel],
      dim: [1, 1, DIM, DIM],
    }
  }

  if (index === count - 1) {
    return {
      input: [0, start, start + pad, 1],
      opacity: [0, 0, 1, 1],
      y: [travel, travel, 0, 0],
      dim: [DIM, DIM, 1, 1],
    }
  }

  return {
    input: [0, start, start + pad, end - pad, end, 1],
    opacity: [0, 0, 1, 1, 0, 0],
    y: [travel, travel, 0, 0, -travel, -travel],
    dim: [DIM, DIM, 1, 1, DIM, DIM],
  }
}
