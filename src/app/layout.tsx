import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { HomeBackground } from "@/components/ui/Background";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

// Configure FontAwesome
config.autoAddCss = false;

// Load fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Optimize font loading
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pocKota = localFont({
  src: "./fonts/Pockota-Medium.otf",
  variable: "--font-poc-kota",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://frontude.com"),
  title: "Frontude - Modern Web Development Solutions",
  description:
    "Frontude provides cutting-edge web development solutions, tools, and resources for modern developers. Build better websites faster.",
  keywords: [
    "web development",
    "frontend development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Frontude - Modern Web Development Solutions",
    description:
      "Frontude provides cutting-edge web development solutions, tools, and resources for modern developers.",
    type: "website",
    locale: "en_US",
    url: "https://frontude.com",
    siteName: "Frontude",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Frontude - Modern Web Development Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontude - Modern Web Development Solutions",
    description:
      "Frontude provides cutting-edge web development solutions, tools, and resources for modern developers.",
    images: ["/og-image.png"],
    creator: "@frontude",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${pocKota.variable} antialiased`}
      >
        <HomeBackground>{children}</HomeBackground>
      </body>
    </html>
  );
}
