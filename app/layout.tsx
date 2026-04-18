import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jair León — Backend & AI Engineer",
  description:
    "Personal portfolio of Jair León, a Telematics & Backend/AI Engineer specializing in NestJS, TypeScript, Python, and FastAPI.",
  openGraph: {
    title: "Jair León — Backend & AI Engineer",
    description:
      "Personal portfolio of Jair León, Backend & AI Engineer.",
    url: "https://biggielion.dev",
    siteName: "Jair León",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jair León — Backend & AI Engineer",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
