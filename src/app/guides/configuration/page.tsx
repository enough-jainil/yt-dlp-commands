import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import siteConfig from "@/lib/config"

export const metadata = {
  title: `${siteConfig.site.name} Configuration Guide`,
  description:
    "Learn how to configure YT-DLP with custom settings, output templates, and advanced options. Master YT-DLP configuration for optimal downloads.",
  keywords: "yt-dlp configuration, yt-dlp settings, yt-dlp config file, yt-dlp output template, yt-dlp advanced options",
  authors: [{ name: "YT-DLP Team" }],
  creator: "YT-DLP Team",
  publisher: "YT-DLP Team",
  robots: "index, follow",
  openGraph: {
    title: `${siteConfig.site.name} Configuration Guide`,
    description:
      "Learn how to configure YT-DLP with custom settings, output templates, and advanced options. Master YT-DLP configuration for optimal downloads.",
    url: `${siteConfig.site.url}guides/configuration`,
    siteName: siteConfig.site.name,
    type: "article",
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.site.url}/ss/command.png`,
        width: 1920,
        height: 1080,
        alt: "YT-DLP Configuration Examples",
      },
      {
        url: `${siteConfig.site.url}/ss/download.png`,
        width: 1920,
        height: 1080,
        alt: "YT-DLP Download Configuration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.site.name} Configuration Guide`,
    description:
      "Learn how to configure YT-DLP with custom settings, output templates, and advanced options. Master YT-DLP configuration for optimal downloads.",
    images: [`${siteConfig.site.url}/ss/command.png`],
  },
  alternates: {
    canonical: `${siteConfig.site.url}guides/configuration`,
  },
}

export default function ConfigurationGuidePage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-4xl font-bold">Configuring YT-DLP</h1>
        <p className="text-muted-foreground max-w-3xl">
          Learn how to customize YT-DLP with configuration files, output templates, and advanced options for optimal downloads.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Configuration File</CardTitle>
            <CardDescription>Set up a configuration file for persistent settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose dark:prose-invert max-w-none">
              <p>YT-DLP supports configuration files to store your preferences. The default locations are:</p>
              <ul>
                <li>Windows: <code>%APPDATA%\yt-dlp\config.txt</code></li>
                <li>macOS/Linux: <code>~/.config/yt-dlp/config</code></li>
              </ul>

              <h3>Basic Configuration Example</h3>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>{`# Output template
-o "%(title)s.%(ext)s"

# Format selection
-f "bestvideo[height<=1080]+bestaudio/best[height<=1080]"

# Download options
--write-thumbnail
--write-info-json
--add-metadata

# Authentication
--cookies-from-browser chrome`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Output Templates</CardTitle>
            <CardDescription>Customize how your downloaded files are named and organized</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose dark:prose-invert max-w-none">
              <h3>Common Template Variables</h3>
              <ul>
                <li><code>%(title)s</code> - Video title</li>
                <li><code>%(ext)s</code> - File extension</li>
                <li><code>%(uploader)s</code> - Channel/uploader name</li>
                <li><code>%(upload_date)s</code> - Upload date (YYYYMMDD)</li>
                <li><code>%(duration)s</code> - Video duration</li>
                <li><code>%(view_count)s</code> - View count</li>
              </ul>

              <h3>Example Templates</h3>
              <p>Basic template:</p>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>%(title)s.%(ext)s</code>
              </pre>

              <p>Organized by uploader:</p>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>%(uploader)s/%(upload_date)s - %(title)s.%(ext)s</code>
              </pre>

              <p>With metadata:</p>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>%(uploader)s/%(title)s [%(duration)s] [%(view_count)s views].%(ext)s</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Advanced Options</CardTitle>
            <CardDescription>Configure advanced features and optimizations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose dark:prose-invert max-w-none">
              <h3>Network Settings</h3>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>{`# Proxy settings
--proxy "socks5://user:pass@127.0.0.1:1080"

# Rate limiting
--limit-rate 50M

# Retries and timeouts
--retries 10
--socket-timeout 30`}</code>
              </pre>

              <h3>Authentication</h3>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>{`# Using cookies from browser
--cookies-from-browser chrome

# Using cookies file
--cookies cookies.txt

# Using username/password
-u username -p password`}</code>
              </pre>

              <h3>Post-processing</h3>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>{`# Embed metadata
--embed-metadata

# Embed thumbnails
--embed-thumbnail

# Convert to specific format
--convert-thumbnails jpg

# Run custom command after download
--exec "ffmpeg -i {} -c:v libx264 -c:a aac {}.mp4"`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
            <CardDescription>Learn more about YT-DLP configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose dark:prose-invert max-w-none">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/yt-dlp/yt-dlp/wiki/Configuration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    Official Configuration Documentation
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/yt-dlp/yt-dlp/wiki/Output-Template"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    Output Template Documentation
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/yt-dlp/yt-dlp/wiki/Options"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    Complete Options List
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 