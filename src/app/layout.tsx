import type React from "react";
import "@/app/globals.css";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ToasterClient from "@/components/toaster-client";
import siteConfig from "@/lib/config";
import { GoogleAnalytics } from "@next/third-parties/google";

const siteFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  style: "normal",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: "YT-DLP Command Generator",
    template: "%s",
  },
  description:
    "Generate YT-DLP commands with a user-friendly interface. Download videos from YouTube and other sites easily.",
  keywords: [
    "yt-dlp",
    "youtube-dl",
    "video downloader",
    "command generator",
    "youtube",
    "download videos",
  ],
  authors: [
    {
      name: "YT-DLP Community",
      url: "https://github.com/yt-dlp/yt-dlp",
    },
  ],
  creator: "YT-DLP Community",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.site.url,
    title: "YT-DLP Command Generator",
    description:
      "Generate YT-DLP commands with a user-friendly interface. Download videos from YouTube and other sites easily.",
    siteName: "YT-DLP Command Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "YT-DLP Command Generator",
    description:
      "Generate YT-DLP commands with a user-friendly interface. Download videos from YouTube and other sites easily.",
    creator: "@yt_dlp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.site.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={siteFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 px-2 md:px-3 max-w-7xl mx-auto w-full">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <ToasterClient />
        <GoogleAnalytics gaId="G-TRW3K4EK2X" />
      </body>
    </html>
  );
}
