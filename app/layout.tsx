import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jair León — Full-Stack & Cloud Engineer",
  description:
    "Personal portfolio of Jair León, Full-Stack & Cloud Engineer specializing in NestJS, TypeScript, Python, and Google Cloud.",
  openGraph: {
    title: "Jair León — Full-Stack & Cloud Engineer",
    description: "Personal portfolio of Jair León, Full-Stack & Cloud Engineer.",
    url: "https://www.jair.codes",
    siteName: "Jair León",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jair León — Full-Stack & Cloud Engineer",
    creator: "@_Biggie_Lion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${syne.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
