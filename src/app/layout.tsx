import type React from "react";
import "@/app/globals.css";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ToasterClient from "@/components/toaster-client";
import { ErrorBoundary } from "@/components/error-boundary";
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
  metadataBase: new URL(siteConfig.site.url),
  title: {
    default: siteConfig.site.name,
    template: `%s | ${siteConfig.site.name}`,
  },
  description: siteConfig.site.description,
  keywords: siteConfig.site.keywords,
  authors: [
    {
      name: "YT-DLP Community",
      url: "https://github.com/yt-dlp/yt-dlp",
    },
    {
      name: "Command Generator Team",
      url: siteConfig.site.github,
    },
  ],
  creator: "YT-DLP Command Generator",
  publisher: "YT-DLP Command Generator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.site.url,
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    siteName: siteConfig.site.name,
    images: [
      {
        url: `${siteConfig.site.url}/ss/home.png`,
        width: 1920,
        height: 1080,
        alt: "YT-DLP Command Generator Interface",
        type: "image/png",
      },
      {
        url: `${siteConfig.site.url}/ss/command.png`,
        width: 1920,
        height: 1080,
        alt: "YT-DLP Command Generation Example",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    creator: "@ytdlp",
    images: [`${siteConfig.site.url}/ss/home.png`],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: `${siteConfig.site.url}/site.webmanifest`,
  alternates: {
    canonical: siteConfig.site.url,
  },
  category: "technology",
  classification: "Developer Tools",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: siteConfig.site.name,
  description: siteConfig.site.description,
  url: siteConfig.site.url,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Organization",
    name: "YT-DLP Community",
    url: "https://github.com/yt-dlp/yt-dlp",
  },
  softwareHelp: {
    "@type": "CreativeWork",
    url: `${siteConfig.site.url}/guides/usage`,
  },
  featureList: [
    "Generate yt-dlp commands",
    "Download videos from 1000+ sites",
    "Extract audio from videos",
    "Download playlists",
    "Configure video quality",
    "Add subtitles and metadata",
  ],
  screenshot: `${siteConfig.site.url}/ss/home.png`,
  dateModified: "2024-01-01",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  license: "https://opensource.org/licenses/MIT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={siteFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1 px-2 md:px-3 max-w-7xl mx-auto w-full">
                {children}
              </main>
              <Footer />
            </div>
          </ErrorBoundary>
        </ThemeProvider>
        <ToasterClient />
        <GoogleAnalytics gaId="G-TRW3K4EK2X" />
      </body>
    </html>
  );
}
