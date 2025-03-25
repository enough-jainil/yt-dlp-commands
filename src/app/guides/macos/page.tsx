import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  AlertTriangle,
  Terminal,
  FileVideo,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "YT-DLP macOS Installation Guide",
  description:
    "Step-by-step guide to install YT-DLP on macOS. Learn how to download and set up YT-DLP for downloading videos on Mac.",
};

export default function MacOSGuidePage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-4xl font-bold">YT-DLP macOS Installation Guide</h1>
        <p className="text-muted-foreground max-w-3xl">
          A step-by-step guide to install and set up YT-DLP on macOS. Follow
          these instructions to get started with downloading videos on your Mac.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Installation Methods</h2>
          <p className="text-muted-foreground">
            There are several ways to install YT-DLP on macOS. Choose the method
            that works best for you.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Method 1: Homebrew (Recommended)</CardTitle>
                <CardDescription>
                  Install using the Homebrew package manager
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Homebrew is the easiest way to install and manage YT-DLP on
                  macOS.
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
                  <code>brew install yt-dlp</code>
                </pre>
                <Link
                  href="https://brew.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    Install Homebrew First
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Method 2: Binary Download</CardTitle>
                <CardDescription>
                  Download the binary file directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Download the binary file directly and make it executable.
                </p>
                <Link
                  href="https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos"
                  target="_blank"
                >
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download yt-dlp_macos
                  </Button>
                </Link>
                <div className="mt-2">
                  <p className="text-xs text-muted-foreground">
                    After downloading, make it executable:
                  </p>
                  <pre className="bg-muted p-2 rounded-md text-xs overflow-x-auto mt-1">
                    <code>chmod a+rx ~/Downloads/yt-dlp_macos</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">
            Step-by-Step Installation Guide
          </h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Method 1: Using Homebrew
              </h3>

              <div className="space-y-2">
                <h4 className="font-medium">
                  Step 1: Install Homebrew (if not already installed)
                </h4>
                <p className="text-muted-foreground">
                  Open Terminal and run the following command to install
                  Homebrew:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                  <code>
                    /bin/bash -c "$(curl -fsSL
                    https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
                  </code>
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Step 2: Install YT-DLP</h4>
                <p className="text-muted-foreground">
                  Once Homebrew is installed, run the following command to
                  install YT-DLP:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                  <code>brew install yt-dlp</code>
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Step 3: Verify Installation</h4>
                <p className="text-muted-foreground">
                  Verify that YT-DLP is installed correctly by checking its
                  version:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                  <code>yt-dlp --version</code>
                </pre>
              </div>

              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Updating YT-DLP</AlertTitle>
                <AlertDescription>
                  To update YT-DLP in the future, simply run:{" "}
                  <code>brew upgrade yt-dlp</code>
                </AlertDescription>
              </Alert>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Method 2: Manual Installation
              </h3>

              <div className="space-y-2">
                <h4 className="font-medium">Step 1: Download the Binary</h4>
                <p className="text-muted-foreground">
                  Download the macOS binary from the official GitHub repository:
                </p>
                <Link
                  href="https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos"
                  target="_blank"
                >
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download yt-dlp_macos
                  </Button>
                </Link>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">
                  Step 2: Make the Binary Executable
                </h4>
                <p className="text-muted-foreground">
                  Open Terminal and navigate to the directory where you
                  downloaded the file. Then make it executable:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                  <code>chmod a+rx ~/Downloads/yt-dlp_macos</code>
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">
                  Step 3: Move to a Directory in PATH
                </h4>
                <p className="text-muted-foreground">
                  Move the executable to a directory in your PATH so you can run
                  it from anywhere:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                  <code>
                    sudo mv ~/Downloads/yt-dlp_macos /usr/local/bin/yt-dlp
                  </code>
                </pre>
                <p className="text-muted-foreground mt-1">
                  You'll be prompted to enter your password. This is necessary
                  to write to the /usr/local/bin directory.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Step 4: Verify Installation</h4>
                <p className="text-muted-foreground">
                  Verify that YT-DLP is installed correctly by checking its
                  version:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                  <code>yt-dlp --version</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">
            Installing Dependencies (Recommended)
          </h2>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>
              While YT-DLP works on its own, installing FFmpeg is highly
              recommended for full functionality.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Installing FFmpeg</h3>
            <p className="text-muted-foreground">
              FFmpeg is required for merging separate video and audio files,
              post-processing, and many advanced features.
            </p>

            <div className="space-y-2">
              <h4 className="font-medium">Using Homebrew (Recommended)</h4>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>brew install ffmpeg</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Testing FFmpeg Installation</h4>
              <p className="text-muted-foreground">
                To verify that FFmpeg is installed correctly, open Terminal and
                run:
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>ffmpeg -version</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Basic Usage Examples</h2>

          <div className="grid  grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileVideo className="mr-2 h-5 w-5" />
                  Download a Video
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
                  <code>
                    yt-dlp https://www.youtube.com/watch?v=dQw4w9WgXcQ
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Terminal className="mr-2 h-5 w-5" />
                  List Available Formats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
                  <code>
                    yt-dlp -F https://www.youtube.com/watch?v=dQw4w9WgXcQ
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-6">
            <Link href="/guides/usage">
              <Button>
                View Complete Usage Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Troubleshooting</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Common Issues</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Permission Denied</h4>
                <p className="text-muted-foreground">
                  If you see "Permission denied" errors, make sure the file is
                  executable with <code>chmod a+rx yt-dlp</code>.
                </p>
              </div>

              <div>
                <h4 className="font-medium">Command Not Found</h4>
                <p className="text-muted-foreground">
                  If you see "command not found", make sure YT-DLP is in your
                  PATH or use the full path to the executable.
                </p>
              </div>

              <div>
                <h4 className="font-medium">FFmpeg Not Found</h4>
                <p className="text-muted-foreground">
                  If you see errors about FFmpeg, make sure FFmpeg is installed
                  with <code>brew install ffmpeg</code>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-muted-foreground">
              For more help, check the official documentation or GitHub issues:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="https://github.com/yt-dlp/yt-dlp/wiki/FAQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  FAQ
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://github.com/yt-dlp/yt-dlp/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  GitHub Issues
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
