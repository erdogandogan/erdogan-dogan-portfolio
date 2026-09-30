"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Hooks like useReducedMotion() resolve matchMedia synchronously on the
 * client, so their value can differ between the server render and the
 * client's first paint. Gating on this hook keeps that first paint
 * deterministic on both sides, avoiding hydration mismatches.
 */
export function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
