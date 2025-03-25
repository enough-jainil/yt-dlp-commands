import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowRight, Download, Github, Terminal, Coffee } from "lucide-react"

export const metadata = {
  title: "Download YT-DLP",
  description:
    "Download YT-DLP for Windows, macOS, or Linux. Get the latest version of this powerful video downloader.",
}

export default function DownloadPage() {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-4xl font-bold">Download YT-DLP</h1>
        <p className="text-muted-foreground max-w-3xl">
          YT-DLP is a command-line program to download videos from YouTube and other video platforms. Choose your
          operating system below to get started.
        </p>
      </div>

      <Tabs defaultValue="windows" className="max-w-4xl flex items-center mx-auto">
        <TabsList className="grid grid-cols-3 mb-8 mx-auto">
          <TabsTrigger value="windows">Windows</TabsTrigger>
          <TabsTrigger value="macos">macOS</TabsTrigger>
          <TabsTrigger value="linux">Linux</TabsTrigger>
        </TabsList>

        <TabsContent value="windows" className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
            <Card>
              <CardHeader>
                <CardTitle>Executable (Recommended)</CardTitle>
                <CardDescription>Standalone executable, no installation required</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Download the standalone executable file. No installation required, just download and run.
                </p>
                <div className="space-y-2">
                  <Link href="https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe" target="_blank">
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download yt-dlp.exe
                    </Button>
                  </Link>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">Latest stable release from GitHub</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Package Managers</CardTitle>
                <CardDescription>Install using Scoop, Chocolatey, or winget</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Scoop</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>scoop install yt-dlp</code>
                  </pre>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Chocolatey</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>choco install yt-dlp</code>
                  </pre>
                </div>
                <div>
                  <h3 className="font-medium mb-2">winget</h3>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>winget install yt-dlp</code>
                  </pre>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/guides/windows">
                  <Button variant="outline">
                    View detailed Windows guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Dependencies (Optional)</CardTitle>
              <CardDescription>Additional software to enhance YT-DLP functionality</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">FFmpeg</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Required for merging separate video and audio files, post-processing, and many advanced features.
                </p>
                <Link href="https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip" target="_blank">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-3 w-3" />
                    Download FFmpeg
                  </Button>
                </Link>
              </div>
              <div>
                <h3 className="font-medium mb-2">Microsoft Visual C++ 2010 Redistributable</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Required for the executable to run properly on some Windows systems.
                </p>
                <Link href="https://www.microsoft.com/en-us/download/details.aspx?id=26999" target="_blank">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-3 w-3" />
                    Download VC++ 2010
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="macos" className="space-y-8">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Homebrew (Recommended)</CardTitle>
                <CardDescription>Install using the Homebrew package manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  The easiest way to install and keep YT-DLP updated on macOS.
                </p>
                <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto mb-4">
                  <code>brew install yt-dlp</code>
                </pre>
                <p className="text-sm text-muted-foreground">To update later, run:</p>
                <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                  <code>brew upgrade yt-dlp</code>
                </pre>
              </CardContent>
              <CardFooter>
                <Link href="https://brew.sh/" target="_blank">
                  <Button variant="outline" size="sm">
                    Install Homebrew first
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Binary Download</CardTitle>
                <CardDescription>Download the binary directly</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Download the binary file directly and make it executable.
                </p>
                <div className="space-y-2">
                  <Link href="https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos" target="_blank">
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download yt-dlp_macos
                    </Button>
                  </Link>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">After downloading, make it executable:</p>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>chmod a+rx ~/Downloads/yt-dlp_macos</code>
                  </pre>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/guides/macos">
                  <Button variant="outline">
                    View detailed macOS guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Dependencies (Recommended)</CardTitle>
              <CardDescription>Additional software to enhance YT-DLP functionality</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">FFmpeg</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Required for merging separate video and audio files and many advanced features.
                </p>
                <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                  <code>brew install ffmpeg</code>
                </pre>
              </div>
              <div>
                <h3 className="font-medium mb-2">Python (Optional)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Required if you want to install via pip or use plugins.
                </p>
                <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                  <code>brew install python</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="linux" className="space-y-8">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Package Managers</CardTitle>
                <CardDescription>Install using your distribution's package manager</CardDescription>
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
                <CardTitle>Binary Download</CardTitle>
                <CardDescription>Download the binary directly</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Download the binary file directly and make it executable.
                </p>
                <div className="space-y-2">
                  <Link href="https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp" target="_blank">
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download yt-dlp
                    </Button>
                  </Link>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    After downloading, make it executable and move to PATH:
                  </p>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                    <code>chmod a+rx ./yt-dlp sudo mv ./yt-dlp /usr/local/bin/</code>
                  </pre>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/guides/linux">
                  <Button variant="outline">
                    View detailed Linux guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Python Installation</CardTitle>
              <CardDescription>Install using pip (Python package manager)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                If you have Python installed, you can use pip to install YT-DLP.
              </p>
              <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto mb-4">
                <code>python3 -m pip install -U yt-dlp</code>
              </pre>
              <p className="text-sm text-muted-foreground mb-2">Dependencies you might need:</p>
              <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">
                <code>sudo apt install ffmpeg python3-pip</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Github className="mr-2 h-5 w-5" />
                GitHub Repository
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access the source code, report issues, and contribute to the project.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="https://github.com/yt-dlp/yt-dlp" target="_blank">
                <Button variant="outline" size="sm">
                  Visit Repository
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Terminal className="mr-2 h-5 w-5" />
                Command Reference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Explore all available commands and options for YT-DLP.</p>
            </CardContent>
            <CardFooter>
              <Link href="/commands">
                <Button variant="outline" size="sm">
                  View Commands
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Coffee className="mr-2 h-5 w-5" />
                Support the Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                YT-DLP is a free and open-source project. Consider supporting the developers.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="https://github.com/yt-dlp/yt-dlp/blob/master/CONTRIBUTING.md" target="_blank">
                <Button variant="outline" size="sm">
                  Contribute
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

