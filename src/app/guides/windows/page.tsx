import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download, AlertTriangle, Terminal, FileVideo, ExternalLink } from "lucide-react"

export const metadata = {
  title: "YT-DLP Windows Installation Guide",
  description:
    "Step-by-step guide to install YT-DLP on Windows. Learn how to download and set up YT-DLP for downloading videos on Windows.",
}

export default function WindowsGuidePage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-4xl font-bold">YT-DLP Windows Installation Guide</h1>
        <p className="text-muted-foreground max-w-3xl">
          A step-by-step guide to install and set up YT-DLP on Windows. Follow these instructions to get started with
          downloading videos.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Installation Methods</h2>
          <p className="text-muted-foreground">
            There are several ways to install YT-DLP on Windows. Choose the method that works best for you.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Method 1: Direct Download (Recommended)</CardTitle>
                <CardDescription>Download the executable file directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Download the YT-DLP executable file</li>
                  <li>Place it in a folder of your choice</li>
                  <li>Run it from the command prompt</li>
                </ol>
                <Link href="https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe" target="_blank">
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download yt-dlp.exe
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Method 2: Package Managers</CardTitle>
                <CardDescription>Install using a Windows package manager</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Using Scoop</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>scoop install yt-dlp</code>
                  </pre>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Using Chocolatey</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>choco install yt-dlp</code>
                  </pre>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Using winget</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>winget install yt-dlp</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Step-by-Step Installation Guide</h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Step 1: Download the Executable</h3>
              <p className="text-muted-foreground">
                Download the YT-DLP executable file from the official GitHub repository.
              </p>
              <Link href="https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe" target="_blank">
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download yt-dlp.exe
                </Button>
              </Link>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Step 2: Create a Folder</h3>
              <p className="text-muted-foreground">
                Create a folder where you want to store YT-DLP. For example, you can create a folder named "yt-dlp" in
                your C: drive.
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>mkdir C:\yt-dlp</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Step 3: Move the Executable</h3>
              <p className="text-muted-foreground">Move the downloaded yt-dlp.exe file to the folder you created.</p>
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Tip</AlertTitle>
                <AlertDescription>
                  You can also add this folder to your system PATH to run YT-DLP from any location.
                </AlertDescription>
              </Alert>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Step 4: Test the Installation</h3>
              <p className="text-muted-foreground">
                Open Command Prompt and navigate to the folder where you placed yt-dlp.exe.
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>cd C:\yt-dlp yt-dlp --version</code>
              </pre>
              <p className="text-muted-foreground mt-2">
                This should display the version of YT-DLP, confirming that it's installed correctly.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Installing Dependencies (Recommended)</h2>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>
              While YT-DLP works on its own, installing FFmpeg is highly recommended for full functionality.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Installing FFmpeg</h3>
            <p className="text-muted-foreground">
              FFmpeg is required for merging separate video and audio files, post-processing, and many advanced
              features.
            </p>

            <div className="space-y-2">
              <h4 className="font-medium">Method 1: Direct Download</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Download FFmpeg from the official website or a trusted source</li>
                <li>Extract the files to a folder (e.g., C:\ffmpeg)</li>
                <li>Add the bin folder to your system PATH</li>
              </ol>
              <Link href="https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip" target="_blank">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download FFmpeg
                </Button>
              </Link>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Method 2: Using Package Managers</h4>
              <div>
                  <h5 className="font-medium mb-2">#1 Using Scoop</h5>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code> scoop install ffmpeg</code>
                  </pre>
                </div>
              <div>
                  <h5 className="font-medium mb-2">#2 Using Chocolatey</h5>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code> choco install ffmpeg</code>
                  </pre>
                </div>
              <div>
                  <h5 className="font-medium mb-2">#3 Using winget</h5>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code> winget install ffmpeg</code>
                  </pre>
                </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Testing FFmpeg Installation</h4>
              <p className="text-muted-foreground">
                To verify that FFmpeg is installed correctly, open Command Prompt and run:
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>ffmpeg -version</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Adding to System PATH (Optional)</h2>

          <p className="text-muted-foreground">
            Adding YT-DLP to your system PATH allows you to run it from any location in Command Prompt.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Steps to Add to PATH</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <p>Right-click on "This PC" or "My Computer" and select "Properties"</p>
              </li>
              <li>
                <p>Click on "Advanced system settings"</p>
              </li>
              <li>
                <p>Click on "Environment Variables"</p>
              </li>
              <li>
                <p>Under "System variables", find and select the "Path" variable, then click "Edit"</p>
              </li>
              <li>
                <p>Click "New" and add the path to the folder containing yt-dlp.exe (e.g., C:\yt-dlp)</p>
              </li>
              <li>
                <p>Click "OK" to close all dialogs</p>
              </li>
              <li>
                <p>Restart Command Prompt for the changes to take effect</p>
              </li>
            </ol>

            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Verification</AlertTitle>
              <AlertDescription>
                After adding to PATH, you should be able to run YT-DLP from any directory by simply typing{" "}
                <code>yt-dlp</code> in Command Prompt.
              </AlertDescription>
            </Alert>
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
                <h4 className="font-medium">'yt-dlp' is not recognized as an internal or external command</h4>
                <p className="text-muted-foreground">
                  This error occurs when Windows cannot find the yt-dlp.exe file. Make sure you're in the correct
                  directory or that YT-DLP is added to your PATH.
                </p>
              </div>

              <div>
                <h4 className="font-medium">FFmpeg not found</h4>
                <p className="text-muted-foreground">
                  If you see errors about FFmpeg, make sure FFmpeg is installed and added to your PATH.
                </p>
              </div>

              <div>
                <h4 className="font-medium">Permission Denied</h4>
                <p className="text-muted-foreground">
                  Try running Command Prompt as Administrator if you encounter permission issues.
                </p>
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
      </div>
    </div>
  )
}

