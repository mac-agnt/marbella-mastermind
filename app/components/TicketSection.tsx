"use client";

import { useState } from "react";
import { GlassPanel, Button, Chip, Hairline } from "./ui";

export function TicketSection({
  seatPrice,
  vipPrice,
}: {
  seatPrice: number;
  vipPrice: number;
}) {
  const [addVip, setAddVip] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout(items: string[]) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      window.location.href = data.url;
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Checkout failed. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <GlassPanel className="flex flex-col p-8 md:p-10">
        <Chip>Seat</Chip>
        <p className="mt-6 font-serif text-4xl text-emerald">
          &euro;{seatPrice}
        </p>
        <p className="mt-1 font-mono text-xs text-muted uppercase tracking-wider">
          Per person
        </p>
        <Hairline className="my-6" />
        <ul className="space-y-3 text-sm text-ink">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 block h-1.5 w-1.5 rounded-full bg-emerald shrink-0" />
            Three days of curated sessions
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 block h-1.5 w-1.5 rounded-full bg-emerald shrink-0" />
            Private villa access &amp; transfers
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 block h-1.5 w-1.5 rounded-full bg-emerald shrink-0" />
            Intimate group — max 16 attendees
          </li>
        </ul>

        <label className="mt-6 flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={addVip}
            onChange={() => setAddVip(!addVip)}
            className="sr-only peer"
          />
          <span className="flex h-5 w-5 items-center justify-center rounded border border-hairline bg-surface transition-colors peer-checked:bg-emerald peer-checked:border-emerald peer-focus-visible:ring-2 peer-focus-visible:ring-emerald/30">
            {addVip && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#FDFCFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
          <span className="text-sm text-ink">
            Add VIP Dinner — <span className="text-muted">&euro;{vipPrice}</span>
          </span>
        </label>

        <div className="mt-auto pt-8">
          <Button
            variant="primary"
            className="w-full"
            disabled={loading}
            onClick={() => handleCheckout(addVip ? ["seat", "vipDinner"] : ["seat"])}
          >
            {loading ? "Redirecting…" : addVip ? `Reserve — €${seatPrice + vipPrice}` : `Reserve — €${seatPrice}`}
          </Button>
          {error && (
            <p className="mt-3 text-xs text-muted text-center">{error}</p>
          )}
        </div>
      </GlassPanel>

      <GlassPanel className="flex flex-col p-8 md:p-10">
        <Chip>VIP Dinner</Chip>
        <p className="mt-6 font-serif text-4xl text-emerald">
          &euro;{vipPrice}
        </p>
        <p className="mt-1 font-mono text-xs text-muted uppercase tracking-wider">
          Add-on
        </p>
        <Hairline className="my-6" />
        <ul className="space-y-3 text-sm text-ink">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 block h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
            Private chef dinner on the coast
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 block h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
            Paired wine &amp; conversation
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 block h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
            Limited to 12 seats
          </li>
        </ul>
        <div className="mt-auto pt-8">
          <Button
            variant="secondary"
            className="w-full"
            disabled={loading}
            onClick={() => handleCheckout(["vipDinner"])}
          >
            {loading ? "Redirecting…" : `Add VIP Dinner — €${vipPrice}`}
          </Button>
        </div>
      </GlassPanel>
    </div>
  );
}
