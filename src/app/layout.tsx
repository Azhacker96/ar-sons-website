import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AR & Sons — Premium Fitness Equipment & Solutions | Karachi, Pakistan",
  description:
    "AR & Sons provides premium commercial gym equipment, steam & sauna installations, swimming pool & Jacuzzi services, and cold plunge therapy solutions in Karachi, Pakistan. Authorized dealers of Cybex, Life Fitness, Precor, Techno Gym, Tylo, and Harvia.",
  keywords: [
    "Fitness Equipment Karachi",
    "Commercial Gym Installation Pakistan",
    "Steam and Sauna Suppliers",
    "Jacuzzi & Pool Services",
    "Gym Equipment Pakistan",
    "Commercial Fitness Solutions",
    "Harvia Sauna Pakistan",
    "Tylo Steam Room",
    "Cold Plunge Therapy Karachi",
    "Life Fitness Pakistan",
    "Cybex Equipment Karachi",
    "Precor Pakistan",
    "Techno Gym Karachi",
  ],
  authors: [{ name: "AR & Sons Fitness Solutions" }],
  openGraph: {
    title: "AR & Sons — Premium Fitness Equipment & Solutions",
    description:
      "Pakistan's trusted partner for commercial gym equipment, wellness solutions, and professional installation services since 2015.",
    type: "website",
    locale: "en_PK",
    siteName: "AR Fitness Solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/AR-logo.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
