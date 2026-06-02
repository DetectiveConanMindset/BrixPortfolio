import "./globals.css";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

export const metadata = {
  metadataBase: new URL("https://anthon-brix-timbal.dev"),
  title: {
    default: "Anthon Brix Timbal | IT Portfolio",
    template: "%s | Anthon Brix Timbal",
  },
  description:
    "IT student and full-stack developer in the Philippines building clean web apps with Next.js, Firebase, PHP, and React.",
  keywords: [
    "Anthon Brix Timbal",
    "IT portfolio",
    "full-stack developer",
    "Next.js",
    "React Native",
    "Expo",
    ".NET",
    "PHP",
    "C#",
    "Philippines developer",
  ],
  authors: [{ name: "Anthon Brix Timbal" }],
  openGraph: {
    title: "Anthon Brix Timbal | IT Portfolio",
    description:
      "Projects, skills, articles, and contact details for Anthon Brix Timbal, an IT student and full-stack developer.",
    url: "https://anthon-brix-timbal.dev",
    siteName: "Anthon Brix Timbal Portfolio",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthon Brix Timbal | IT Portfolio",
    description:
      "IT student and full-stack developer building clean, functional web apps.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${dmSerif.variable}`}>
      <head />
      <body>
        <Script
          id="theme-switcher"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved || (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
