import Image from "next/image";
import { ButtonLink } from "../ui";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/images/WhatsApp%20Image%202026-03-07%20at%2014.42.14.jpeg"
        alt="Marbella Mastermind session in a private villa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_78%] md:object-[64%_58%] lg:object-[64%_52%]"
      />

      <div className={styles.shader} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <div className="relative z-20 mx-auto flex min-h-[86svh] w-full max-w-6xl items-start px-5 pb-28 pt-16 md:min-h-[86vh] md:items-center md:px-10 md:pb-[126px] md:pt-24 lg:min-h-[90vh] lg:pt-28">
        <div className="max-w-[640px] w-full min-h-[calc(86svh-7.25rem)] md:min-h-0 flex flex-col justify-between text-left text-[rgba(246,243,238,0.95)]">
          <div>
            <p className="mb-6 mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(214,204,176,0.75)] md:mb-7 md:mt-0 md:text-[13px] md:tracking-[0.16em]">
              June 5–7, 2026{" "}
              <span aria-hidden="true" className="mx-2 inline-block text-[1.28em] leading-none align-middle">
                •
              </span>
              Marbella, ES{" "}
              <span aria-hidden="true" className="mx-2 inline-block text-[1.28em] leading-none align-middle">
                •
              </span>
              16 seats
            </p>

            <h1 className="font-serif text-[clamp(2.12rem,10.4vw,4.45rem)] font-normal leading-[1.01] tracking-[-0.018em] text-[rgba(246,243,238,0.95)] md:leading-[0.99] md:tracking-[-0.02em]">
              The conversations
              <br className="hidden sm:block" /> you can&rsquo;t have
              <br className="hidden sm:block" /> anywhere else.
            </h1>
          </div>

          <div className="pt-7 md:pt-0">
            <div className="md:hidden flex items-end justify-between gap-4">
              <p className="max-w-[58%] text-[0.86rem] leading-[1.55] text-[rgba(237,228,200,0.82)]">
                A private, high-trust gathering for founders and operators. Three days in Marbella, focused on practical conversations.
              </p>

              <div className="flex shrink-0 flex-col items-center gap-2">
                <ButtonLink
                  href="#countdown"
                  variant="primary"
                  aria-label="Reserve your seat"
                  className={`${styles.primaryCta} ctaGold rounded-full px-4 py-2.5 text-[13px] tracking-[0.012em] hover:brightness-[1.02] active:translate-y-[0.5px] active:shadow-none focus-visible:outline-[#C6A75E]`}
                >
                  Reserve your seat
                </ButtonLink>

                <a
                  href="#overview"
                  aria-label="Learn more"
                  className={styles.mobileLearnMore}
                >
                  <span>Learn More</span>
                  <span className={styles.mobileLearnMoreArrow} aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <p className="max-w-[620px] text-[clamp(0.95rem,1.8vw,1.04rem)] leading-[1.82] text-[rgba(237,228,200,0.84)]">
                An intimate, high-trust gathering for founders and operators. Three days. No fluff, no pitching — just the room.
              </p>

              <div className="mt-6 flex items-start gap-3">
                <ButtonLink
                  href="#countdown"
                  variant="primary"
                  aria-label="Reserve Your Seat"
                  className={`${styles.primaryCta} ctaGold rounded-full px-6 py-3.5 text-[15px] tracking-[0.015em] hover:brightness-[1.02] active:translate-y-[0.5px] active:shadow-none focus-visible:outline-[#C6A75E]`}
                >
                  Reserve Your Seat
                </ButtonLink>

                <ButtonLink
                  href="#overview"
                  variant="secondary"
                  aria-label="Learn more"
                  className="liquidGlass liquidGlass--cta rounded-full px-6 py-3.5 text-[15px] tracking-[0.015em] !text-[rgba(246,243,238,0.95)] hover:brightness-[1.05] focus-visible:outline-[#C6A75E]"
                >
                  Learn more
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.liquidGlass}>
        <div className={styles.liquidGlassText}>
          <div className={styles.groupLeft}>
            <span>Operators</span>
            <span className={styles.dot} aria-hidden="true">•</span>
            <span>Founders</span>
            <span className={styles.dot} aria-hidden="true">•</span>
            <span>Creators</span>
            <span className={styles.dot} aria-hidden="true">•</span>
            <span>No spectators</span>
          </div>
          <div className={styles.groupRight}>
            <span>Limited rooms</span>
            <span className={styles.pipe} aria-hidden="true" />
            <span>Curated seats</span>
            <span className={styles.pipe} aria-hidden="true" />
            <span>Private villa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
