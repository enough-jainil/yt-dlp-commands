import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download, AlertTriangle, Terminal, FileVideo, ExternalLink } from "lucide-react"

export const metadata = {
  title: "YT-DLP Android Installation Guide",
  description:
    "Step-by-step guide to install and use YT-DLP on Android using Termux. Download videos on your Android device.",
}

export default function AndroidGuidePage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-4xl font-bold">YT-DLP Android Installation Guide</h1>
        <p className="text-muted-foreground max-w-3xl">
          Learn how to install and use YT-DLP on Android using Termux. This guide will help you set up a command-line
          environment on your Android device.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Prerequisites</h2>
          <p className="text-muted-foreground">
            To use YT-DLP on Android, you'll need to install Termux, a terminal emulator and Linux environment app that
            works without root access.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Step 1: Install Termux</CardTitle>
                <CardDescription>Install Termux from F-Droid (recommended) or GitHub</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Termux is no longer updated on Google Play Store. Install it from F-Droid or GitHub:
                </p>
                <div className="space-y-2">
                 <div>
                 <Link href="https://f-droid.org/en/packages/com.termux/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download from F-Droid
                    </Button>
                  </Link>
                 </div>
                <div>
                <Link href="https://github.com/termux/termux-app/releases" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download from GitHub
                    </Button>
                  </Link>
                </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 2: Set Up Storage Access</CardTitle>
                <CardDescription>Grant Termux access to your device storage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  After installing Termux, you need to grant it storage access to save downloaded videos:
                </p>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
                  <code>termux-setup-storage</code>
                </pre>
                <p className="text-xs text-muted-foreground">
                  You'll be prompted to allow Termux to access your storage. Tap "Allow" to continue.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Installing YT-DLP on Termux</h2>

          <div className="space-y-4">
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>
                Before installing YT-DLP, it's recommended to update Termux packages and install Python.
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Step 1: Update Termux Packages</h3>
              <p className="text-muted-foreground">
                Open Termux and run the following commands to update the package lists and upgrade installed packages:
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>pkg update pkg upgrade</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Step 2: Install Required Packages</h3>
              <p className="text-muted-foreground">Install Python and FFmpeg, which are required for YT-DLP:</p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>pkg install python ffmpeg</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Step 3: Install YT-DLP</h3>
              <p className="text-muted-foreground">Install YT-DLP using pip (Python package manager):</p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>pip install yt-dlp</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Step 4: Verify Installation</h3>
              <p className="text-muted-foreground">
                Verify that YT-DLP is installed correctly by checking its version:
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>yt-dlp --version</code>
              </pre>
              <p className="text-muted-foreground mt-1">
                This should display the version of YT-DLP, confirming that it's installed correctly.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Using YT-DLP on Android</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Basic Usage</h3>
              <p className="text-muted-foreground">To download a video, simply run YT-DLP followed by the URL:</p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>yt-dlp https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>
              <p className="text-muted-foreground mt-1">
                By default, videos are saved to the current directory. You can find them in the Termux folder in your
                internal storage.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Downloading to External Storage</h3>
              <p className="text-muted-foreground">
                To save videos to your device's storage (outside Termux), use the -o option with a path to your storage:
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>
                  yt-dlp -o "/storage/emulated/0/Download/%(title)s.%(ext)s" https://www.youtube.com/watch?v=dQw4w9WgXcQ
                </code>
              </pre>
              <p className="text-muted-foreground mt-1">
                This will save the downloaded video to your device's Download folder with the video title as the
                filename.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Extracting Audio</h3>
              <p className="text-muted-foreground">To extract audio from a video in MP3 format:</p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -x --audio-format mp3 https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Downloading Playlists</h3>
              <p className="text-muted-foreground">To download all videos in a playlist:</p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>
                  yt-dlp -o "/storage/emulated/0/Download/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s"
                  https://www.youtube.com/playlist?list=PLw-VjHDlEOgvtnnnqWlTqByAtC7tXBg6D
                </code>
              </pre>
              <p className="text-muted-foreground mt-1">
                This will create a folder with the playlist name and save all videos with their index and title.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileVideo className="mr-2 h-5 w-5" />
                  Download a Video
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
                  <code>yt-dlp https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
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
                  <code>yt-dlp -F https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Tips for Using YT-DLP on Android</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Keeping YT-DLP Updated</h3>
              <p className="text-muted-foreground">To update YT-DLP to the latest version:</p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>pip install -U yt-dlp</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Creating Aliases for Common Commands</h3>
              <p className="text-muted-foreground">
                You can create aliases for commonly used commands to save typing. Add these to your ~/.bashrc file:
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>
                  echo 'alias yt="yt-dlp"' &gt;&gt; ~/.bashrc echo 'alias yta="yt-dlp -x --audio-format mp3"' &gt;&gt; ~/.bashrc
                  source ~/.bashrc
                </code>
              </pre>
              <p className="text-muted-foreground mt-1">
                Now you canan use 'yt' to download videos and 'yta' to extract audio.
              </p>
            </div>

            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Battery Usage</AlertTitle>
              <AlertDescription>
                Downloading videos can consume a lot of battery. It's recommended to keep your device plugged in when
                downloading large files or multiple videos.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Troubleshooting</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Common Issues</h3>

              <div className="space-y-4 mt-2">
                <div>
                  <h4 className="font-medium">Permission Denied</h4>
                  <p className="text-muted-foreground">
                    If you see "Permission denied" errors when trying to save to external storage, make sure you've run
                    the <code>termux-setup-storage</code> command and granted the necessary permissions.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Command Not Found</h4>
                  <p className="text-muted-foreground">
                    If you see "yt-dlp: command not found", make sure you've installed it correctly with pip. Try
                    running <code>which yt-dlp</code> to see if it's in your PATH.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Network Issues</h4>
                  <p className="text-muted-foreground">
                    If downloads are failing, check your internet connection. You can also try adding the{" "}
                    <code>--verbose</code> flag to see more detailed error messages.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-muted-foreground">For more help, check the official documentation or GitHub issues:</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="https://github.com/yt-dlp/yt-dlp/wiki/FAQ" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  FAQ
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/yt-dlp/yt-dlp/issues" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  GitHub Issues
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
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
    </div>
  )
}

