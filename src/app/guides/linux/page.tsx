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
  title: "YT-DLP Linux Installation Guide",
  description:
    "Step-by-step guide to install YT-DLP on Linux. Learn how to download and set up YT-DLP for downloading videos on Linux distributions.",
};

export default function LinuxGuidePage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-4xl font-bold">YT-DLP Linux Installation Guide</h1>
        <p className="text-muted-foreground max-w-3xl">
          A step-by-step guide to install and set up YT-DLP on Linux. Follow
          these instructions to get started with downloading videos on your
          Linux distribution.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Installation Methods</h2>
          <p className="text-muted-foreground">
            There are several ways to install YT-DLP on Linux. Choose the method
            that works best for your distribution.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Method 1: Package Managers</CardTitle>
                <CardDescription>
                  Install using your distribution's package manager
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Debian/Ubuntu</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>sudo apt install yt-dlp</code>
                  </pre>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Arch Linux</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>sudo pacman -S yt-dlp</code>
                  </pre>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Fedora</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>sudo dnf install yt-dlp</code>
                  </pre>
                </div>
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
                  href="https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp"
                  target="_blank"
                >
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download yt-dlp
                  </Button>
                </Link>
                <div className="mt-2">
                  <p className="text-xs text-muted-foreground">
                    After downloading, make it executable and move to PATH:
                  </p>
                  <pre className="bg-muted p-2 rounded-md text-xs overflow-x-auto mt-1">
                    <code>
                      chmod a+rx ./yt-dlp sudo mv ./yt-dlp /usr/local/bin/
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Method 3: Python Installation</CardTitle>
              <CardDescription>
                Install using pip (Python package manager)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                If you have Python installed, you can use pip to install YT-DLP.
              </p>
              <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                <code>python3 -m pip install -U yt-dlp</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                For a user install (recommended), use:
              </p>
              <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                <code>python3 -m pip install -U --user yt-dlp</code>
              </pre>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">
            Step-by-Step Installation Guide
          </h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Method 1: Using Package Managers
              </h3>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-medium">Debian/Ubuntu</h4>
                  <p className="text-muted-foreground">
                    Open Terminal and run the following commands:
                  </p>
                  <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                    <code>sudo apt update sudo apt install yt-dlp</code>
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Arch Linux</h4>
                  <p className="text-muted-foreground">
                    Open Terminal and run the following command:
                  </p>
                  <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                    <code>sudo pacman -S yt-dlp</code>
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Fedora</h4>
                  <p className="text-muted-foreground">
                    Open Terminal and run the following command:
                  </p>
                  <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                    <code>sudo dnf install yt-dlp</code>
                  </pre>
                </div>

                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Note</AlertTitle>
                  <AlertDescription>
                    Package managers may not always have the latest version. If
                    you need the latest features, consider using the binary
                    download or pip installation methods.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Method 2: Binary Download
              </h3>

              <div className="space-y-2">
                <h4 className="font-medium">Step 1: Download the Binary</h4>
                <p className="text-muted-foreground">
                  Download the binary file from the official GitHub repository:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                  <code>
                    wget
                    https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp
                    -O yt-dlp
                  </code>
                </pre>
                <p className="text-muted-foreground mt-1">
                  Alternatively, you can use curl:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                  <code>
                    curl -L
                    https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp
                    -o yt-dlp
                  </code>
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">
                  Step 2: Make the Binary Executable
                </h4>
                <p className="text-muted-foreground">
                  Make the downloaded file executable:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                  <code>chmod a+rx yt-dlp</code>
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
                  <code>sudo mv yt-dlp /usr/local/bin/</code>
                </pre>
                <p className="text-muted-foreground mt-1">
                  If you don't have sudo access, you can move it to a directory
                  in your user's PATH:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                  <code>
                    mkdir -p ~/.local/bin mv yt-dlp ~/.local/bin/ export
                    PATH="$HOME/.local/bin:$PATH"
                  </code>
                </pre>
                <p className="text-muted-foreground mt-1">
                  Add the export line to your shell's configuration file (e.g.,
                  ~/.bashrc, ~/.zshrc) to make it permanent.
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

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Method 3: Python Installation
              </h3>

              <div className="space-y-2">
                <h4 className="font-medium">Step 1: Install Python and pip</h4>
                <p className="text-muted-foreground">
                  Make sure Python and pip are installed:
                </p>

                {/* Debian/Ubuntu */}
                <div>
                  <h3 className="font-medium mb-2">#1 Debian/Ubuntu</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>
                      sudo apt update && sudo apt install python3 python3-pip
                    </code>
                  </pre>
                </div>

                {/* Arch Linux */}
                <div>
                  <h3 className="font-medium mb-2">#2 Arch Linux</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>sudo pacman -S python python-pip</code>
                  </pre>
                </div>

                {/* Fedora */}
                <div>
                  <h3 className="font-medium mb-2">#3 Fedora</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>sudo dnf install python3 python3-pip</code>
                  </pre>
                </div>

                {/* openSUSE */}
                <div>
                  <h3 className="font-medium mb-2">#4 openSUSE</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>sudo zypper install python3 python3-pip</code>
                  </pre>
                </div>

                {/* Alpine Linux */}
                <div>
                  <h3 className="font-medium mb-2">#5 Alpine Linux</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>sudo apk add python3 py3-pip</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Step 2: Install YT-DLP</h4>
                <p className="text-muted-foreground">
                  Install YT-DLP using pip:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                  <code>python3 -m pip install -U --user yt-dlp</code>
                </pre>
                <p className="text-muted-foreground mt-1">
                  The --user flag installs the package for the current user
                  only, which doesn't require root privileges.
                </p>
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
                <p className="text-muted-foreground mt-1">
                  If the command is not found, make sure ~/.local/bin is in your
                  PATH:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                  <code>export PATH="$HOME/.local/bin:$PATH"</code>
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
              <h4 className="font-medium">Debian/Ubuntu</h4>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>sudo apt install ffmpeg</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Arch Linux</h4>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>sudo pacman -S ffmpeg</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Fedora</h4>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>sudo dnf install ffmpeg</code>
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
          <h2 className="text-2xl font-bold">Updating YT-DLP</h2>

          <div className="space-y-4">
            {/* Package Manager Update */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Package Manager</h3>
              <p className="text-muted-foreground">
                If you installed YT-DLP using a package manager, update it using
                the same package manager:
              </p>
              <div>
                <h3 className="font-medium mb-2">#1 Debian/Ubuntu</h3>
                <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                  <code>sudo apt update && sudo apt upgrade yt-dlp</code>
                </pre>
              </div>
              <div>
                <h3 className="font-medium mb-2">#2 Arch Linux</h3>
                <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                  <code>sudo pacman -Syu yt-dlp</code>
                </pre>
              </div>
              <div>
                <h3 className="font-medium mb-2">#3 Fedora</h3>
                <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                  <code>sudo dnf upgrade yt-dlp</code>
                </pre>
              </div>
            </div>

            {/* Binary Installation Update */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Binary Installation</h3>
              <p className="text-muted-foreground">
                If you installed the binary directly, you can update it using
                YT-DLP itself:
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>sudo yt-dlp -U</code>
              </pre>
              <p className="text-muted-foreground mt-1">
                If you installed it in your user directory, you can update
                without sudo:
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -U</code>
              </pre>
            </div>

            {/* Python Installation Update */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Python Installation</h3>
              <p className="text-muted-foreground">
                If you installed YT-DLP using pip, update it using pip:
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>python3 -m pip install -U --user yt-dlp</code>
              </pre>
            </div>
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
                  with your package manager.
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
