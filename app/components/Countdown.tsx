"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

function calcTimeLeft(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Countdown({ targetISO }: { targetISO: string }) {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(calcTimeLeft(targetISO));
    }, 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  if (!time) {
    return (
      <div className="flex items-center gap-3 md:gap-4 font-mono text-2xl md:text-3xl text-ink tracking-[0.12em]">
        <span className="rounded-xl border border-hairline bg-surface/70 px-4 py-3 md:px-5 md:py-4">
          --:--:--:--
        </span>
      </div>
    );
  }

  if (time.expired) {
    return (
      <p className="font-serif text-2xl md:text-3xl text-emerald tracking-[0.01em]">
        Doors are open.
      </p>
    );
  }

  const units = [
    { label: "Days", value: time.days },
    { label: "Hrs", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Sec", value: time.seconds },
  ];

  return (
    <div className="flex items-center gap-2 md:gap-3">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-2 md:gap-3">
          <div className="flex min-w-[72px] md:min-w-[102px] flex-col items-center rounded-[14px] border border-hairline bg-[rgba(253,252,250,0.78)] px-3 py-2.5 md:px-5 md:py-4">
            <span className="font-mono text-[1.42rem] md:text-[2.15rem] text-ink tabular-nums tracking-[0.1em] leading-none">
              {pad(u.value)}
            </span>
            <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="mb-3 font-mono text-xl md:text-3xl text-[rgba(198,167,94,0.42)] select-none">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
