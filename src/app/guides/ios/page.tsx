import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "YT-DLP iOS Installation Guide",
  description:
    "Learn how to use YT-DLP on iOS devices using alternative methods and apps that support video downloading.",
}

export default function IOSGuidePage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-4xl font-bold">YT-DLP on iOS</h1>
        <p className="text-muted-foreground max-w-3xl">
          Due to iOS restrictions, running YT-DLP directly on iOS is challenging. This guide covers alternative approaches for downloading videos on iOS devices.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>iOS Limitations</AlertTitle>
          <AlertDescription>
            Apple's iOS restrictions make it difficult to run command-line tools like YT-DLP directly on iOS devices. The methods below provide alternatives for downloading videos on iOS.
          </AlertDescription>
        </Alert>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Option 1: Using a-Shell</h2>
          <p className="text-muted-foreground">
            a-Shell is a terminal emulator app for iOS that allows running some Unix commands, including a limited version of Python.
          </p>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Step 1: Install a-Shell</h3>
              <p className="text-muted-foreground">
                Download and install a-Shell from the App Store:
              </p>
              <Link href="https://apps.apple.com/us/app/a-shell/id1473805438" target="_blank" rel="noopener noreferrer">
                <Button className="mt-2">
                  <Download className="mr-2 h-4 w-4" />
                  Download a-Shell from App Store
                </Button>
              </Link>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Step 2: Install YT-DLP in a-Shell</h3>
              <p className="text-muted-foreground">
                Open a-Shell and run the following commands:
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>pip install yt-dlp</code>
              </pre>
              <p className="text-muted-foreground mt-1">
                Note: This may not work perfectly due to iOS limitations, and some features might be restricted.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Step 3: Basic Usage</h3>
              <p className="text-muted-foreground">
                If installation is successful, you can try basic commands:
              </p>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -f &apos;best[height&lt;=720]&apos; https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>
              <p className="text-muted-foreground mt-1">
                Downloaded files will be saved in the app&apos;s Documents folder, which you can access through the Files app.
              </p>
            </div>
            
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Limitations</AlertTitle>
              <AlertDescription>
                a-Shell has limited resources and may not handle all YT-DLP features. Complex downloads or high-resolution videos might fail.
              </AlertDescription>
            </Alert>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Option 2: Using Shortcuts with a Remote Server</h2>
          <p className="text-muted-foreground">
            If you have access to a remote server (like a home computer or VPS) running YT-DLP, you can create iOS Shortcuts to trigger downloads remotely.
          </p>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Prerequisites</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>A remote server (home computer, Raspberry Pi, VPS, etc.) with YT-DLP installed</li>
                <li>SSH access to the server</li>
                <li>Basic knowledge of setting up web servers or APIs</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Basic Approach</h3>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Set up a simple API endpoint on your server that accepts a URL and triggers YT-DLP</li>
                <li>Create an iOS Shortcut that sends the video URL to your server</li>
                <li>The server downloads the video and can either store it or send it back to your iOS device</li>
              </ol>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Example: Simple Python API Server</CardTitle>
                <CardDescription>
                  A basic Flask server that accepts download requests
                </CardDescription>
              </CardHeader>
              <CardContent>
              <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
  <code>
{`from flask import Flask, request, jsonify
import subprocess
import os

app = Flask(__name__)

@app.route('/download', methods=['POST'])
def download_video():
    data = request.json
    url = data.get('url')
    if not url:
        return jsonify({'error': 'No URL provided'}), 400
    
    try:
        # Run yt-dlp to download the video
        result = subprocess.run(
            ['yt-dlp', '-o', '~/Downloads/%(title)s.%(ext)s', url],
            capture_output=True,
            text=True
        )

        if result.returncode == 0:
            return jsonify({'status': 'success', 'message': 'Download started'})
        else:
            return jsonify({'status': 'error', 'message': result.stderr}), 500

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)`}
  </code>
</pre>

                <p className="text-xs text-muted-foreground mt-2">
                  Note: This is a basic example. In a real implementation, you should add authentication and security measures.
                </p>
              </CardContent>
            </Card>
            
            <div className="space-y-2 mt-4">
              <h3 className="text-xl font-semibold">Creating an iOS Shortcut</h3>
              <p className="text-muted-foreground">
                Once your server is set up, create an iOS Shortcut that:
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
                <li>Accepts a URL from the share sheet or manual input</li>
                <li>Sends a POST request to your server with the URL</li>
                <li>Displays the response from the server</li>
              </ol>
              <p className="text-muted-foreground mt-2">
                You can then trigger this shortcut from the share menu when viewing a video.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Option 3: Alternative iOS Apps</h2>
          <p className="text-muted-foreground">
            Several iOS apps offer video downloading capabilities, though they may not have all the features of YT-DLP.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Documents by Readdle</CardTitle>
                <CardDescription>
                  File manager with built-in browser and download capabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Documents has a built-in browser that can download videos from many websites.
                </p>
                <Link href="https://apps.apple.com/us/app/documents-by-readdle/id364901807" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    App Store
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Media Grabber</CardTitle>
                <CardDescription>
                  Specialized app for downloading media from websites
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Media Grabber can detect and download videos from various websites.
                </p>
                <Link href="https://apps.apple.com/us/app/media-grabber-video-downloader/id1557155042" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    App Store
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>App Availability</AlertTitle>
            <AlertDescription>
              App Store policies regarding video downloading apps can change. Some apps may be removed or have features restricted over time.
            </AlertDescription>
          </Alert>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Option 4: Using a Jailbroken Device</h2>
          <p className="text-muted-foreground">
            If your iOS device is jailbroken, you have more options for running command-line tools like YT-DLP.
          </p>
          
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Jailbreaking your device can void your warranty and may expose your device to security risks. Proceed at your own risk.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Basic Steps for Jailbroken Devices</h3>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Install a terminal app like NewTerm from Cydia or Sileo</li>
              <li>Install Python using a package manager</li>
              <li>Install YT-DLP using pip</li>
              <li>Run YT-DLP commands in the terminal</li>
            </ol>
            <p className="text-muted-foreground mt-2">
              The specific steps will vary depending on your iOS version and jailbreak method.
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p className="text-muted-foreground">
            While running YT-DLP directly on iOS has limitations, there are several alternatives:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Using a-Shell for limited YT-DLP functionality</li>
            <li>Setting up a remote server and controlling it via iOS Shortcuts</li>
            <li>Using alternative iOS apps designed for video downloading</li>
            <li>Using a jailbroken device for full command-line access</li>
          </ul>
          <p className="text-muted-foreground mt-2">
            For the most reliable experience, consider using YT-DLP on a desktop computer and transferring the downloaded files to your iOS device.
          </p>
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

