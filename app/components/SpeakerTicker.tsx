import Image from "next/image";
import { Container, Section } from "./ui";
import styles from "./SpeakerTicker.module.css";

type Speaker = {
  name: string;
  image: string | null;
  placeholder?: boolean;
};

const speakers: Speaker[] = [
  { name: "Adam", image: "/AdamSquare.png" },
  { name: "Rob", image: "/RobSquare.png" },
  { name: "Merijn", image: "/MerijnSquare.png" },
  { name: "Darren", image: "/DarrenSquare.png" },
  { name: "James", image: "/BlackwellImage.png" },
  { name: "Liam", image: "/LiamSquare.png" },
  { name: "Nils", image: "/NilsSquare.png" },
  { name: "Chris", image: "/ChrisSquare.png" },
  { name: "Tyler", image: "/images/Tyler.png" },
  { name: "To Be Announced", image: null, placeholder: true },
  { name: "To Be Announced", image: null, placeholder: true },
];

export function SpeakerTicker() {
  const tickerCards = [...speakers, ...speakers];

  return (
    <Section id="overview">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-2">
          SPEAKERS
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-emerald mb-3 max-w-lg">
          Meet the room.
        </h2>
        <p className="text-sm md:text-base text-muted mb-10">
          Operators, founders, and practitioners — no spectators.
        </p>

        <div className={styles.tickerViewport}>
          <div className={styles.tickerTrack}>
            {tickerCards.map((speaker, index) => (
              <article className={styles.card} key={`${speaker.name}-${index}`}>
                {speaker.placeholder ? (
                  <div
                    className={`${styles.placeholderImage} ${index % 2 === 0 ? styles.placeholderVariantA : styles.placeholderVariantB}`}
                    aria-label="To be announced speaker placeholder"
                  >
                    <span className={styles.placeholderMark}>TBA</span>
                  </div>
                ) : (
                  <Image
                    src={speaker.image as string}
                    alt={`${speaker.name} speaker portrait`}
                    fill
                    sizes="(max-width: 768px) 65vw, 300px"
                    className={styles.image}
                  />
                )}
                <div className={styles.overlay}>
                  <span className={styles.roleTag}>Speaker</span>
                  <h3 className={styles.name}>{speaker.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
