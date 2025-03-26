import CommandGenerator from "@/components/command-generator"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import siteConfig from "@/lib/config"

export const metadata = {
  title: `${siteConfig.site.name} Command Generator`,
  description:
    "Generate YT-DLP commands with a user-friendly interface. Download videos from YouTube and other sites with the powerful yt-dlp tool.",
  keywords: "yt-dlp, youtube-dl, video downloader, command generator, youtube downloader, video download, playlist download",
  authors: [{ name: "YT-DLP Team" }],
  creator: "YT-DLP Team",
  publisher: "YT-DLP Team",
  robots: "index, follow",
  openGraph: {
    title: `${siteConfig.site.name} Command Generator`,
    description:
      "Generate commands for yt-dlp, a powerful command-line tool to download videos from YouTube and other sites.",
    url: siteConfig.site.url,
    siteName: siteConfig.site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.site.url}/ss/home.png`,
        width: 1920,
        height: 1080,
        alt: "YT-DLP Command Generator Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.site.name} Command Generator`,
    description:
      "Generate commands for yt-dlp, a powerful command-line tool to download videos from YouTube and other sites.",
    images: [`${siteConfig.site.url}/ss/home.png`],
  },
  alternates: {
    canonical: siteConfig.site.url,
  },
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Command Generator Section */}
      <section className="w-full py-6 md:py-10">
        <div className="container px-0 md:px-6">
          <CommandGenerator />
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-8 md:py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold">About YT-DLP</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                YT-DLP is a command-line program to download videos from YouTube and many other sites. It's a fork of
                youtube-dl with additional features and fixes.
              </p>
              <p>
                I created this command generator because I often forget the exact syntax for various download options.
                This tool helps me (and hopefully you) quickly generate the right command for any download scenario.
              </p>
              <p>
                Whether you're downloading videos, extracting audio, or grabbing entire playlists, this tool will help
                you generate the correct command without having to remember all the options.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold">Key Features of YT-DLP</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Download videos from YouTube and 1000+ other sites</li>
                <li>Extract audio in various formats (MP3, M4A, etc.)</li>
                <li>Download entire playlists or channels</li>
                <li>Select specific video quality and format</li>
                <li>Download with subtitles and metadata</li>
                <li>Faster downloads compared to youtube-dl</li>
                <li>Regular updates and active maintenance</li>
              </ul>
            </div>

            <Card className="mt-8">
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-medium">Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://github.com/yt-dlp/yt-dlp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        Official YT-DLP GitHub Repository
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://github.com/yt-dlp/yt-dlp/wiki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        YT-DLP Wiki Documentation
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        Supported Sites List
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/usage" className="text-primary hover:underline flex items-center">
                        Usage Guide
                      </Link>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

