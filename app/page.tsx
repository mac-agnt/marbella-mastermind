import { Section, Container, Hairline } from "./components/ui";
import { StickyNav } from "./components/StickyNav";
import { PlaceholderImage } from "./components/PlaceholderImage";
import { Countdown } from "./components/Countdown";
import { SeatAvailabilityTicker } from "./components/SeatAvailabilityTicker";
import { Hero } from "./components/landing/Hero";
import { SpeakerTicker } from "./components/SpeakerTicker";
import { WeekendTimeline } from "./components/WeekendTimeline";
import eventData from "@/content/event.json";

export default function Home() {
  const { event } = eventData;

  return (
    <>
      {/* ─── 1. STICKY NAV ─── */}
      <StickyNav />

      <main>
        {/* ─── 2. HERO ─── */}
        <Hero />

        <div className="paper-bg">
          {/* ─── 3. SPEAKERS TICKER ─── */}
          <SpeakerTicker />

          <Container><Hairline /></Container>

          {/* ─── 4. "YOU'RE BUYING THE ROOM" ─── */}
          <Section id="overview">
            <div className="grid grid-cols-4 md:grid-cols-12 gap-8 md:gap-10 items-center">
              <div className="col-span-4 md:col-span-5 flex flex-col justify-center">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-2">
                  The premise
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-emerald mb-5 leading-tight">
                  You&rsquo;re buying
                  <br />the room.
                </h2>
                <p className="text-sm leading-relaxed text-muted max-w-md">
                  Not a speaker lineup. Not a swag bag. The most valuable thing we
                  can offer is the right people in the right setting with the right
                  amount of time.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted max-w-md">
                  Past attendees describe it as the only event where they leave with
                  decisions made — not just ideas collected.
                </p>
                <div className="mt-7">
                  <a
                    href="#countdown"
                    className="ctaGold inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-[0.012em] transition duration-200 hover:brightness-[1.02] active:translate-y-[0.5px] active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A75E]"
                  >
                    Reserve your place
                  </a>
                </div>
              </div>
              <div className="col-span-4 md:col-span-7">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="relative overflow-hidden rounded-[18px] aspect-[4/5] border border-black/[0.08]">
                    <PlaceholderImage
                      src="/Villafull.png"
                      alt="Private villa where the mastermind takes place"
                      fill
                      sizes="(min-width: 768px) 35vw, 48vw"
                      className="object-cover rounded-[18px]"
                    />
                  </div>
                  <div className="flex flex-col gap-3 md:gap-4">
                    <div className="relative overflow-hidden rounded-[18px] aspect-square border border-black/[0.08]">
                      <PlaceholderImage
                        src="/images/Dinner.png"
                        alt="Mastermind dinner conversation setting"
                        fill
                        sizes="(min-width: 768px) 18vw, 44vw"
                        className="object-cover rounded-[18px]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div className="relative overflow-hidden rounded-[18px] aspect-square border border-black/[0.08]">
                        <PlaceholderImage
                          src="/images/LipsettGroup.png"
                          alt="Group working session at the mastermind"
                          fill
                          sizes="(min-width: 768px) 9vw, 21vw"
                          className="object-cover rounded-[18px]"
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-[18px] aspect-square border border-black/[0.08]">
                        <PlaceholderImage
                          src="/baisinboat.png"
                          alt="Marbella coastal boat session backdrop"
                          fill
                          sizes="(min-width: 768px) 9vw, 21vw"
                          className="object-cover rounded-[18px]"
                        />
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-[18px] aspect-[16/9] border border-black/[0.08]">
                      <PlaceholderImage
                        src="/images/ferraripic.png"
                        alt="Private VIP evening on the coast"
                        fill
                        sizes="(min-width: 768px) 18vw, 44vw"
                        className="object-cover rounded-[18px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Container><Hairline /></Container>

          {/* ─── 5. WEEKEND OVERVIEW ─── */}
          <WeekendTimeline />

          <Container><Hairline /></Container>

          {/* ─── FINAL: PREMIUM COUNTDOWN ─── */}
          <div id="countdown" className="py-14 md:py-20">
            <Container>
              <div className="relative overflow-hidden rounded-[24px] border border-[rgba(198,167,94,0.28)] bg-[linear-gradient(180deg,rgba(253,252,250,0.9),rgba(248,245,239,0.94))] px-6 py-10 md:px-12 md:py-14 flex flex-col items-center gap-5 text-center">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[rgba(198,167,94,0.45)]" />
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-gold">
                  {event.title} begins in
                </p>
                <Countdown targetISO={event.countdownTargetISO} />
                <div className="mt-3 flex w-full flex-col items-center gap-3 md:mt-5">
                  <a
                    href="https://whop.com/joined/marbella-mastermind/products/marbella-mastermind-2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ctaGold ctaGold--final inline-flex w-full max-w-sm items-center justify-center rounded-[14px] px-6 py-3 text-sm font-medium tracking-[0.018em] text-[rgba(28,28,28,0.94)] transition duration-200 hover:brightness-[1.025] active:translate-y-[0.5px] active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A75E] md:w-auto"
                  >
                    Reserve Your Seat
                  </a>
                  <SeatAvailabilityTicker />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </main>
    </>
  );
}
