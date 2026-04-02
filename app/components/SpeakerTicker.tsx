import Image from "next/image";
import { Container, Section } from "./ui";
import styles from "./SpeakerTicker.module.css";

type Speaker = {
  name: string;
  image: string;
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
  { name: "Warren", image: "/Screenshot%202026-04-02%20at%2020.50.58.png" },
  { name: "Josh", image: "/Screenshot%202026-04-02%20at%2020.51.47.png" },
];

export function SpeakerTicker() {
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

        <div className={styles.speakerGrid}>
          {speakers.map((speaker) => (
            <article className={styles.card} key={speaker.name}>
              <Image
                src={speaker.image}
                alt={`${speaker.name} speaker portrait`}
                fill
                sizes="(max-width: 699px) 100vw, (max-width: 1199px) 50vw, 33vw"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span className={styles.roleTag}>Speaker</span>
                <h3 className={styles.name}>{speaker.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
