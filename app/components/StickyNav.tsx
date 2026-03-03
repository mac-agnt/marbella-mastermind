"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./ui";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Weekend", href: "#weekend" },
  { label: "Countdown", href: "#countdown" },
];

export function StickyNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4"
      role="navigation"
      aria-label="Main navigation"
    >
      <Container>
        <div className="liquidGlass liquidGlass--nav mx-auto flex h-14 w-full items-center justify-between rounded-full px-3 sm:px-4">
          <Link
            href="/"
            className="pl-1 font-serif text-[1.04rem] tracking-[0.01em] text-[rgba(214,195,138,0.85)]"
            aria-label="Marbella Mastermind home"
          >
            Marbella Mastermind
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {links.map((l, idx) => (
              <div key={l.href} className="flex items-center gap-4">
                {idx > 0 && <span className="text-[10px] text-[rgba(214,195,138,0.72)]">•</span>}
                <a
                  href={l.href}
                  className="text-[13px] uppercase tracking-[0.11em] text-[rgba(214,195,138,0.85)] transition-colors duration-200 hover:text-[rgba(230,214,163,0.92)]"
                >
                  {l.label}
                </a>
              </div>
            ))}
          </div>

          <a
            href="#countdown"
            className="ctaGold hidden md:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition duration-200 hover:brightness-[1.02] active:translate-y-[0.5px] active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A75E]"
          >
            Reserve a seat
          </a>

          <button
            className="md:hidden flex flex-col gap-1 p-2 cursor-pointer text-[rgba(214,195,138,0.85)]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`block h-px w-5 bg-current transition-transform duration-200 ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform duration-200 ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden mt-2">
          <Container className="liquidGlass liquidGlass--nav flex flex-col gap-4 rounded-[18px] py-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] uppercase tracking-[0.11em] text-[rgba(214,195,138,0.85)] transition-colors duration-200 hover:text-[rgba(230,214,163,0.92)]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#countdown"
              className="ctaGold mt-1 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 hover:brightness-[1.02] active:translate-y-[0.5px] active:shadow-none"
              onClick={() => setOpen(false)}
            >
              Reserve a seat
            </a>
          </Container>
        </div>
      )}
    </nav>
  );
}
