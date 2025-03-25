import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import siteConfig from "@/lib/config"

export const metadata = {
  title: `${siteConfig.site.name} Installation Guide`,
  description:
    "Learn how to install YT-DLP on Windows, macOS, and Linux. Follow our step-by-step guide to get started with YT-DLP.",
  keywords: "yt-dlp installation, install yt-dlp, yt-dlp setup, yt-dlp windows, yt-dlp mac, yt-dlp linux",
  authors: [{ name: "YT-DLP Team" }],
  creator: "YT-DLP Team",
  publisher: "YT-DLP Team",
  robots: "index, follow",
  openGraph: {
    title: `${siteConfig.site.name} Installation Guide`,
    description:
      "Learn how to install YT-DLP on Windows, macOS, and Linux. Follow our step-by-step guide to get started with YT-DLP.",
    url: `${siteConfig.site.url}guides/installation`,
    siteName: siteConfig.site.name,
    type: "article",
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.site.url}/ss/windows.png`,
        width: 1920,
        height: 1080,
        alt: "YT-DLP Windows Installation Guide",
      },
      {
        url: `${siteConfig.site.url}/ss/macos.png`,
        width: 1920,
        height: 1080,
        alt: "YT-DLP macOS Installation Guide",
      },
      {
        url: `${siteConfig.site.url}/ss/linux.png`,
        width: 1920,
        height: 1080,
        alt: "YT-DLP Linux Installation Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.site.name} Installation Guide`,
    description:
      "Learn how to install YT-DLP on Windows, macOS, and Linux. Follow our step-by-step guide to get started with YT-DLP.",
    images: [`${siteConfig.site.url}/ss/windows.png`],
  },
  alternates: {
    canonical: `${siteConfig.site.url}guides/installation`,
  },
}

export default function InstallationGuidePage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-4xl font-bold">Installing YT-DLP</h1>
        <p className="text-muted-foreground max-w-3xl">
          Follow our step-by-step guide to install YT-DLP on your system. Choose your operating system below to get started.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Windows Installation</CardTitle>
            <CardDescription>Install YT-DLP on Windows using pip or the standalone executable</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose dark:prose-invert max-w-none">
              <h3>Using pip (Recommended)</h3>
              <p>Open Command Prompt or PowerShell and run:</p>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>pip install yt-dlp</code>
              </pre>

              <h3>Using the Standalone Executable</h3>
              <p>Download the latest release from the official GitHub repository:</p>
              <Link
                href="https://github.com/yt-dlp/yt-dlp/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center"
              >
                Download YT-DLP
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>macOS Installation</CardTitle>
            <CardDescription>Install YT-DLP on macOS using Homebrew or pip</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose dark:prose-invert max-w-none">
              <h3>Using Homebrew (Recommended)</h3>
              <p>Open Terminal and run:</p>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>brew install yt-dlp</code>
              </pre>

              <h3>Using pip</h3>
              <p>Open Terminal and run:</p>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>pip install yt-dlp</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Linux Installation</CardTitle>
            <CardDescription>Install YT-DLP on Linux using your package manager or pip</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose dark:prose-invert max-w-none">
              <h3>Using Package Managers</h3>
              <p>For Ubuntu/Debian:</p>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>sudo apt install yt-dlp</code>
              </pre>

              <p>For Fedora:</p>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>sudo dnf install yt-dlp</code>
              </pre>

              <p>For Arch Linux:</p>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>sudo pacman -S yt-dlp</code>
              </pre>

              <h3>Using pip</h3>
              <p>Open Terminal and run:</p>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>pip install yt-dlp</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verifying Installation</CardTitle>
            <CardDescription>Check if YT-DLP is installed correctly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose dark:prose-invert max-w-none">
              <p>To verify your installation, open a terminal/command prompt and run:</p>
              <pre className="p-3 rounded-md overflow-x-auto">
                <code>yt-dlp --version</code>
              </pre>
              <p>This should display the current version of YT-DLP installed on your system.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 