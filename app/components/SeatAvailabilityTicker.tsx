"use client";

import { useEffect, useMemo, useState } from "react";

const SEAT_COUNT_START = 80;
const SEAT_COUNT_BASELINE_ISO = "2026-03-07T15:00:00Z";
const SEAT_COUNT_FLOOR = 16;
const DECREMENT_INTERVAL_MS = 18 * 60 * 60 * 1000;

function getDeterministicSeatCount(nowMs: number): number {
  const baselineMs = Date.parse(SEAT_COUNT_BASELINE_ISO);
  if (!Number.isFinite(baselineMs)) return SEAT_COUNT_START;

  const elapsedMs = nowMs - baselineMs;
  const decrementSteps = Math.max(0, Math.floor(elapsedMs / DECREMENT_INTERVAL_MS));
  return Math.max(SEAT_COUNT_FLOOR, SEAT_COUNT_START - decrementSteps);
}

function getMsUntilNextRollover(nowMs: number): number {
  const baselineMs = Date.parse(SEAT_COUNT_BASELINE_ISO);
  if (!Number.isFinite(baselineMs)) return DECREMENT_INTERVAL_MS;

  if (nowMs < baselineMs) return baselineMs - nowMs;

  const elapsedMs = nowMs - baselineMs;
  const remainder = elapsedMs % DECREMENT_INTERVAL_MS;
  return remainder === 0 ? DECREMENT_INTERVAL_MS : DECREMENT_INTERVAL_MS - remainder;
}

export function SeatAvailabilityTicker() {
  const [seats, setSeats] = useState(SEAT_COUNT_START);

  useEffect(() => {
    let timeoutId: number | undefined;

    const scheduleUpdate = () => {
      const now = Date.now();
      setSeats(getDeterministicSeatCount(now));
      timeoutId = window.setTimeout(scheduleUpdate, getMsUntilNextRollover(now) + 100);
    };

    scheduleUpdate();

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  const message = useMemo(() => `Less than ${seats} seats left`, [seats]);

  return (
    <div className="availabilityTicker" aria-live="polite">
      <div className="availabilityTickerTrack">
        <span>{message}</span>
        <span aria-hidden="true">•</span>
        <span>{message}</span>
        <span aria-hidden="true">•</span>
        <span>{message}</span>
      </div>
    </div>
  );
}
