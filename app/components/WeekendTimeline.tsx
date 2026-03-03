"use client";

import { useRef } from "react";
import { Container } from "./ui";
import { PlaceholderImage } from "./PlaceholderImage";
import { useInViewOnce } from "../hooks/useInViewOnce";

interface DayData {
  label: string;
  title: string;
  description: string;
  chips: string[];
  primaryImage: { src: string; alt: string };
  secondaryImage?: { src: string; alt: string };
  side: "left" | "right";
}

const days: DayData[] = [
  {
    label: "FRIDAY",
    title: "Arrive & Set the Tone",
    description:
      "Settle into the villa. Welcome dinner, introductions, and the kind of conversations you can\u2019t have anywhere else.",
    chips: ["Private villa", "Welcome dinner", "Meet the room"],
    primaryImage: { src: "/Villafull.png", alt: "Private villa in Marbella" },
    secondaryImage: {
      src: "/images/Dinner.png",
      alt: "Welcome dinner setting",
    },
    side: "left",
  },
  {
    label: "SATURDAY",
    title: "Deep Work",
    description:
      "Morning roundtable. Afternoon hot seats\u2014bring your hardest problem. Optional VIP dinner on the coast.",
    chips: ["Roundtable", "Hot seats", "VIP dinner"],
    primaryImage: { src: "/images/LipsettGroup.png", alt: "Group working session" },
    secondaryImage: {
      src: "/images/ferraripic.png",
      alt: "Ferrari experience",
    },
    side: "right",
  },
  {
    label: "SUNDAY",
    title: "Commit & Close",
    description:
      "Final working session. Leave with a concrete commitment and an accountability partner. Brunch and farewells.",
    chips: ["Commitments", "Accountability", "Brunch"],
    primaryImage: { src: "/baisinboat.png", alt: "Boat on the coast" },
    secondaryImage: { src: "/Villafull.png", alt: "Villa at sunset" },
    side: "left",
  },
];

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const DURATION = 900;

function TimelineBlock({ day }: { day: DayData }) {
  const blockRef = useRef<HTMLDivElement>(null);
  const isInView = useInViewOnce(blockRef);
  const isLeft = day.side === "left";

  const baseTransition = {
    transitionProperty: "transform, opacity, filter",
    transitionDuration: `${DURATION}ms`,
    transitionTimingFunction: EASE,
  } as const;

  function imageStyle(): React.CSSProperties {
    if (!isInView) {
      return {
        ...baseTransition,
        opacity: 0,
        transform: "translate(-32px, 8px) scale(0.985)",
        filter: "blur(6px)",
      };
    }
    return {
      ...baseTransition,
      opacity: 1,
      transform: "translateY(0) scale(1)",
      filter: "blur(0px)",
    };
  }

  function imageStyleDesktop(): React.CSSProperties {
    if (!isInView) {
      return {
        ...baseTransition,
        opacity: 0,
        transform: "translate(-32px, 8px) scale(0.985)",
        filter: "blur(6px)",
      };
    }
    return {
      ...baseTransition,
      opacity: 1,
      transform: "translate(0, 0) scale(1)",
      filter: "blur(0px)",
    };
  }

  function secondaryStyle(): React.CSSProperties {
    if (!isInView) {
      return {
        ...baseTransition,
        transitionDelay: "0ms",
        opacity: 0,
        transform: "translateY(16px) scale(0.97)",
        filter: "blur(4px)",
      };
    }
    return {
      ...baseTransition,
      transitionDelay: "200ms",
      opacity: 1,
      transform: "translateY(0) scale(1)",
      filter: "blur(0px)",
    };
  }

  function textStyle(delayMs: number): React.CSSProperties {
    if (!isInView) {
      return {
        ...baseTransition,
        transitionDelay: "0ms",
        opacity: 0,
        transform: "translate(32px, 12px)",
      };
    }
    return {
      ...baseTransition,
      transitionDelay: `${delayMs}ms`,
      opacity: 1,
      transform: "translateY(0)",
    };
  }

  return (
    <div
      ref={blockRef}
      className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center"
    >
      {/* Image column */}
      <div
        className={`md:col-span-6 ${isLeft ? "md:order-1" : "md:order-2"}`}
      >
        <div className="relative">
          <div
            className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/[0.08] md:hidden"
            style={imageStyle()}
          >
            <PlaceholderImage
              src={day.primaryImage.src}
              alt={day.primaryImage.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div
            className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/[0.08] hidden md:block"
            style={imageStyleDesktop()}
          >
            <PlaceholderImage
              src={day.primaryImage.src}
              alt={day.primaryImage.alt}
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>

          {day.secondaryImage && (
            <div
              className={`hidden lg:block absolute w-[38%] aspect-[4/3] rounded-xl overflow-hidden border-2 border-white/20 shadow-lg ${
                isLeft
                  ? "bottom-[-14px] right-[-14px]"
                  : "bottom-[-14px] left-[-14px]"
              }`}
              style={secondaryStyle()}
            >
              <PlaceholderImage
                src={day.secondaryImage.src}
                alt={day.secondaryImage.alt}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Text column */}
      <div
        className={`md:col-span-6 ${isLeft ? "md:order-2" : "md:order-1"}`}
      >
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-3"
          style={textStyle(120)}
        >
          {day.label}
        </p>

        <h3
          className="font-serif text-2xl md:text-3xl lg:text-[2.25rem] text-emerald leading-tight mb-4"
          style={textStyle(240)}
        >
          {day.title}
        </h3>

        <p
          className="text-sm md:text-[15px] leading-relaxed text-muted max-w-md mb-6"
          style={textStyle(360)}
        >
          {day.description}
        </p>

        <div
          className="flex flex-wrap gap-2"
          style={textStyle(480)}
        >
          {day.chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wide text-muted border border-hairline bg-surface/60"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WeekendTimeline() {
  return (
    <section id="weekend" className="py-16 md:py-24">
      <Container>
        <div className="mb-14 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-2">
            The weekend
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-emerald max-w-lg">
            Three days, no filler.
          </h2>
        </div>

        <div className="flex flex-col gap-20 md:gap-28 lg:gap-36">
          {days.map((day) => (
            <TimelineBlock key={day.label} day={day} />
          ))}
        </div>
      </Container>
    </section>
  );
}
