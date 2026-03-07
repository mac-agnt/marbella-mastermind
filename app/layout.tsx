import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

/*
 * CANELA FONT SWAP
 * To use Canela instead of Playfair Display:
 *
 * 1. Place Canela-Regular.woff2 in /public/fonts/
 * 2. Uncomment the localFont import and config below
 * 3. Replace `playfair.variable` with `canela.variable` in the body className
 *
 * import localFont from "next/font/local";
 *
 * const canela = localFont({
 *   src: "../public/fonts/Canela-Regular.woff2",
 *   variable: "--font-canela",
 *   display: "swap",
 *   fallback: ["var(--font-playfair)", "Georgia", "serif"],
 * });
 */

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-canela",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marbella Mastermind — June 5–7, 2026",
  description:
    "An intimate, high-trust gathering for founders and operators. Three days in Marbella. No fluff, no pitching — just the room.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
