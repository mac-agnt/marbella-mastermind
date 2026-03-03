"use client";

const items = [
  {
    q: "Who is this for?",
    a: "Founders, operators, and senior leaders running businesses at €1M+ ARR who want unfiltered peer conversations — not another conference.",
  },
  {
    q: "What's included in the ticket?",
    a: "Three full days of curated sessions at a private villa, all meals during the event, airport transfers, and a dedicated concierge. Accommodation is not included so you can choose what suits you.",
  },
  {
    q: "How many people attend?",
    a: "We cap attendance at 16 to keep conversations intimate and high-signal. Every attendee is personally vetted.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Full refund up to 30 days before the event. Within 30 days, your seat is transferable to someone you nominate (subject to vetting).",
  },
];

export function FAQ() {
  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <details
          key={i}
          className="group border-b border-hairline"
        >
          <summary className="flex cursor-pointer items-center justify-between py-5 text-sm font-medium text-ink transition-colors duration-150 hover:text-emerald list-none [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="ml-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </span>
          </summary>
          <div className="pb-5 pr-8 text-sm leading-relaxed text-muted">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
