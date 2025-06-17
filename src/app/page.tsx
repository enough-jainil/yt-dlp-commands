import CommandGenerator from "@/components/command-generator";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import siteConfig from "@/lib/config";

export const metadata = {
  title: `${siteConfig.site.name} - Free Online YT-DLP Command Builder`,
  description: siteConfig.site.description,
  keywords: siteConfig.site.keywords.join(", "),
  authors: [{ name: "YT-DLP Command Generator Team" }],
  creator: "YT-DLP Command Generator Team",
  publisher: "YT-DLP Command Generator",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: `${siteConfig.site.name} - Free Online Command Builder`,
    description:
      "The easiest way to generate yt-dlp commands. Download videos from YouTube, TikTok, Instagram and 1000+ other sites with our intuitive web interface.",
    url: siteConfig.site.url,
    siteName: siteConfig.site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.site.url}/ss/home.png`,
        width: 1920,
        height: 1080,
        alt: "YT-DLP Command Generator - Main Interface Screenshot",
        type: "image/png",
      },
      {
        url: `${siteConfig.site.url}/ss/command.png`,
        width: 1920,
        height: 1080,
        alt: "Generated YT-DLP Command Example",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.site.name} - Free YT-DLP Command Builder`,
    description:
      "Generate yt-dlp commands easily with our web interface. Download videos from 1000+ sites including YouTube, TikTok, Instagram and more.",
    images: [`${siteConfig.site.url}/ss/home.png`],
    creator: "@ytdlp",
  },
  alternates: {
    canonical: siteConfig.site.url,
  },
  category: "Developer Tools",
  classification: "Utility Software",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with SEO-optimized headings */}
      <section className="w-full py-6 md:py-10">
        <div className="container px-0 md:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              YT-DLP Command Generator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              The easiest way to generate <strong>yt-dlp commands</strong> for
              downloading videos from <strong>YouTube</strong>,{" "}
              <strong>TikTok</strong>, <strong>Instagram</strong>, and{" "}
              <strong>1000+ other sites</strong>. No command-line expertise
              required!
            </p>
          </div>
          <CommandGenerator />
        </div>
      </section>

      {/* About Section with SEO-optimized content */}
      <section className="w-full py-8 md:py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6">
            <header>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                About YT-DLP Command Generator
              </h2>
            </header>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>YT-DLP</strong> is a powerful command-line program that
                allows you to download videos from <strong>YouTube</strong> and
                over <strong>1000 other video platforms</strong>. It's a fork of
                youtube-dl with additional features, better performance, and
                regular updates.
              </p>
              <p>
                Our <strong>YT-DLP Command Generator</strong> was created to
                solve a common problem: remembering the exact syntax and options
                for various download scenarios. Whether you're a content
                creator, researcher, or just someone who wants to save videos
                for offline viewing, our tool makes it easy to generate the
                perfect command.
              </p>
              <p>
                Simply select your desired options using our intuitive
                interface, and we'll generate the complete{" "}
                <strong>yt-dlp command</strong> for you. No more memorizing
                complex flags or consulting documentation every time!
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">
                Key Features of YT-DLP
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    <strong>1000+ supported sites</strong> including YouTube,
                    TikTok, Instagram, Twitter, and more
                  </li>
                  <li>
                    <strong>High-quality video downloads</strong> up to 8K
                    resolution
                  </li>
                  <li>
                    <strong>Audio extraction</strong> in MP3, M4A, WAV, and
                    other formats
                  </li>
                  <li>
                    <strong>Playlist and channel downloads</strong> with batch
                    processing
                  </li>
                </ul>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Subtitle downloads</strong> in multiple languages
                  </li>
                  <li>
                    <strong>Custom video quality selection</strong> and format
                    control
                  </li>
                  <li>
                    <strong>Faster downloads</strong> compared to youtube-dl
                  </li>
                  <li>
                    <strong>Regular updates</strong> and active community
                    support
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">
                How to Use This Tool
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>
                  Enter the URL of the video or playlist you want to download
                  (optional for utility commands)
                </li>
                <li>
                  Select your desired options from the various categories (video
                  quality, audio format, etc.)
                </li>
                <li>
                  Copy the generated command and run it in your terminal or
                  command prompt
                </li>
                <li>Enjoy your downloaded content!</li>
              </ol>
            </div>

            <Card className="mt-8">
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-medium">Essential Resources</h3>
                  <nav>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="https://github.com/yt-dlp/yt-dlp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center"
                          title="Official YT-DLP GitHub Repository"
                        >
                          Official YT-DLP GitHub Repository
                          <ExternalLink
                            className="ml-1 h-3 w-3"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://github.com/yt-dlp/yt-dlp/wiki"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center"
                          title="YT-DLP Wiki Documentation"
                        >
                          YT-DLP Wiki Documentation
                          <ExternalLink
                            className="ml-1 h-3 w-3"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center"
                          title="Complete List of Supported Sites"
                        >
                          Supported Sites List (1000+ Sites)
                          <ExternalLink
                            className="ml-1 h-3 w-3"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/guides/usage"
                          className="text-primary hover:underline flex items-center"
                          title="How to Use YT-DLP - Complete Usage Guide"
                        >
                          Complete Usage Guide
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/guides/windows"
                          className="text-primary hover:underline flex items-center"
                          title="YT-DLP Installation Guide for Windows"
                        >
                          Windows Installation Guide
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/commands"
                          className="text-primary hover:underline flex items-center"
                          title="Browse Pre-made YT-DLP Commands"
                        >
                          Browse Command Examples
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Disclaimer:</strong> This is an unofficial tool created
                to help generate yt-dlp commands. Please respect copyright laws
                and platform terms of service when downloading content. All
                credit for YT-DLP goes to the original developers and
                maintainers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
