import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileVideo, FileAudio, List, Subtitles } from "lucide-react"
import siteConfig from "@/lib/config"

export const metadata = {
  title: `${siteConfig.site.name} Usage Guide`,
  description:
    "Learn how to use YT-DLP to download videos, extract audio, download playlists, and more with this comprehensive guide.",
  keywords: "yt-dlp guide, yt-dlp usage, video download guide, audio extraction guide, playlist download guide, yt-dlp tutorial",
  authors: [{ name: "YT-DLP Team" }],
  creator: "YT-DLP Team",
  publisher: "YT-DLP Team",
  robots: "index, follow",
  openGraph: {
    title: `${siteConfig.site.name} Usage Guide`,
    description:
      "Learn how to use YT-DLP to download videos, extract audio, download playlists, and more with this comprehensive guide.",
    url: `${siteConfig.site.url}guides/usage`,
    siteName: siteConfig.site.name,
    type: "article",
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.site.url}/ss/usage-guide.png`,
        width: 1920,
        height: 1080,
        alt: "YT-DLP Usage Guide Interface",
      },
      {
        url: `${siteConfig.site.url}/ss/command.png`,
        width: 1920,
        height: 1080,
        alt: "YT-DLP Command Examples",
      },
      {
        url: `${siteConfig.site.url}/ss/download.png`,
        width: 1920,
        height: 1080,
        alt: "YT-DLP Download Options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.site.name} Usage Guide`,
    description:
      "Learn how to use YT-DLP to download videos, extract audio, download playlists, and more with this comprehensive guide.",
    images: [`${siteConfig.site.url}/ss/usage-guide.png`],
  },
  alternates: {
    canonical: `${siteConfig.site.url}guides/usage`,
  },
}

export default function UsageGuidePage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-4xl font-bold">YT-DLP Usage Guide</h1>
        <p className="text-muted-foreground max-w-3xl">
          Learn how to use YT-DLP to download videos, extract audio, download playlists, and more. This guide covers the
          most common use cases and commands.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="basics" className="mb-10">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="space-y-6 mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <h2>Getting Started with YT-DLP</h2>
              <p>
                YT-DLP is a command-line program to download videos from YouTube and other video platforms. It's a fork
                of youtube-dl with additional features and fixes.
              </p>

              <h3>Basic Usage</h3>
              <p>The simplest way to use YT-DLP is to provide a URL to download:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <p>This will download the video in the best quality available.</p>

              <h3>Checking Available Formats</h3>
              <p>To see all available formats for a video:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -F https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <p>
                This will display a list of all available formats with their format codes, which you can use to select a
                specific format.
              </p>

              <h3>Selecting a Specific Format</h3>
              <p>
                To download a specific format, use the <code>-f</code> option followed by the format code:
              </p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -f 22 https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <p>This will download the video in format 22 (usually 720p MP4).</p>

              <h3>Common Format Selection Options</h3>
              <ul>
                <li>
                  <code>-f best</code> - Best quality (default)
                </li>
                <li>
                  <code>-f worst</code> - Worst quality
                </li>
                <li>
                  <code>-f bestvideo+bestaudio</code> - Best video and audio quality, downloaded separately and merged
                </li>
                <li>
                  <code>-f bestvideo[height&lt;=720]+bestaudio</code> - Best video with height up to 720p and best audio
                </li>
              </ul>

              <h3>Output Template</h3>
              <p>
                You can customize the output filename using the <code>-o</code> option:
              </p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -o "%(title)s.%(ext)s" https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <p>This will save the file with the video title as the filename.</p>
            </div>
          </TabsContent>

          <TabsContent value="video" className="space-y-6 mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <h2>Video Download Options</h2>

              <h3>Downloading Videos in Specific Quality</h3>
              <p>To download a video in a specific quality, you can use format selectors:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -f "bestvideo[height=1080]+bestaudio" https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <p>This will download the best video with a height of 1080 pixels and the best audio, then merge them.</p>

              <h3>Limiting Video Resolution</h3>
              <p>To limit the maximum resolution:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -f "bestvideo[height&lt;=720]+bestaudio" https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <h3>Downloading Videos by Format</h3>
              <p>To download videos in a specific format (e.g., MP4):</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>
                  yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]" https://www.youtube.com/watch?v=dQw4w9WgXcQ
                </code>
              </pre>

              <h3>Merging Video and Audio</h3>
              <p>
                When downloading separate video and audio streams, YT-DLP will automatically merge them. You can specify
                the output format:
              </p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>
                  yt-dlp -f "bestvideo+bestaudio" --merge-output-format mp4 https://www.youtube.com/watch?v=dQw4w9WgXcQ
                </code>
              </pre>

              <h3>Downloading Thumbnails</h3>
              <p>To download the video thumbnail:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp --write-thumbnail https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <h3>Embedding Thumbnails</h3>
              <p>To embed the thumbnail in the video file:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp --embed-thumbnail https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <h3>Adding Metadata</h3>
              <p>To add metadata to the video file:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp --add-metadata https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-6 mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <h2>Audio Extraction Options</h2>

              <h3>Extracting Audio from Videos</h3>
              <p>To extract audio from a video:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -x https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <p>This will extract the audio in its original format.</p>

              <h3>Converting to Specific Audio Format</h3>
              <p>To convert the audio to a specific format (e.g., MP3):</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -x --audio-format mp3 https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <p>Supported formats include mp3, aac, flac, m4a, opus, vorbis, and wav.</p>

              <h3>Setting Audio Quality</h3>
              <p>To set the audio quality (0 is best, 9 is worst for VBR):</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -x --audio-format mp3 --audio-quality 0 https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <h3>Downloading Only Audio Streams</h3>
              <p>To download only the audio stream in the best quality:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -f bestaudio https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <h3>Downloading Music Playlists</h3>
              <p>To download a music playlist and convert all videos to MP3:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>
                  yt-dlp -x --audio-format mp3 --yes-playlist
                  https://www.youtube.com/playlist?list=PLw-VjHDlEOgvtnnnqWlTqByAtC7tXBg6D
                </code>
              </pre>

              <h3>Organizing Music Files</h3>
              <p>To organize music files with a custom output template:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>
                  yt-dlp -x --audio-format mp3 -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s"
                  https://www.youtube.com/playlist?list=PLw-VjHDlEOgvtnnnqWlTqByAtC7tXBg6D
                </code>
              </pre>

              <p>
                This will create a folder with the playlist name and save files with their playlist index and title.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6 mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <h2>Advanced Usage Options</h2>

              <h3>Downloading Playlists</h3>
              <p>To download all videos in a playlist:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp https://www.youtube.com/playlist?list=PLw-VjHDlEOgvtnnnqWlTqByAtC7tXBg6D</code>
              </pre>

              <h3>Downloading Specific Videos from a Playlist</h3>
              <p>To download specific videos from a playlist (e.g., videos 1, 3, and 5-7):</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>
                  yt-dlp --playlist-items 1,3,5-7
                  https://www.youtube.com/playlist?list=PLw-VjHDlEOgvtnnnqWlTqByAtC7tXBg6D
                </code>
              </pre>

              <h3>Downloading Subtitles</h3>
              <p>To download subtitles:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp --write-sub --sub-lang en https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <p>This will download English subtitles if available.</p>

              <h3>Downloading Auto-Generated Subtitles</h3>
              <p>To download auto-generated subtitles:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp --write-auto-sub --sub-lang en https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <h3>Using a Proxy</h3>
              <p>To use a proxy:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp --proxy http://proxy.example.com:8080 https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <h3>Batch Downloads</h3>
              <p>To download videos from a text file containing URLs (one per line):</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp -a urls.txt</code>
              </pre>

              <h3>Rate Limiting</h3>
              <p>To limit the download speed:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp --limit-rate 1M https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>

              <p>This will limit the download speed to 1 MB/s.</p>

              <h3>Downloading Live Streams</h3>
              <p>To download a live stream:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp --live-from-start https://www.youtube.com/watch?v=live_id</code>
              </pre>

              <h3>Using SponsorBlock to Skip Sponsors</h3>
              <p>To remove sponsor segments from videos:</p>

              <pre className=" p-3 rounded-md overflow-x-auto">
                <code>yt-dlp --sponsorblock-remove sponsor https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Common Use Cases</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="max-w-fit">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileVideo className="mr-2 h-5 w-5" />
                  Download High-Quality Video
                </CardTitle>
                <CardDescription>Download the best quality video and audio</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className=" p-3 rounded-md overflow-x-auto text-sm">
                  <code>
                    yt-dlp -f "bestvideo+bestaudio" --merge-output-format mp4
                    https://www.youtube.com/watch?v=dQw4w9WgXcQ
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileAudio className="mr-2 h-5 w-5" />
                  Extract MP3 Audio
                </CardTitle>
                <CardDescription>Extract audio in MP3 format with best quality</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className=" p-3 rounded-md overflow-x-auto text-sm">
                  <code>
                    yt-dlp -x --audio-format mp3 --audio-quality 0 https://www.youtube.com/watch?v=dQw4w9WgXcQ
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <List className="mr-2 h-5 w-5" />
                  Download Playlist
                </CardTitle>
                <CardDescription>Download all videos in a playlist</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className=" p-3 rounded-md overflow-x-auto text-sm">
                  <code>
                    yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s"
                    https://www.youtube.com/playlist?list=PLw-VjHDlEOgvtnnnqWlTqByAtC7tXBg6D
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Subtitles className="mr-2 h-5 w-5" />
                  Download with Subtitles
                </CardTitle>
                <CardDescription>Download video with embedded subtitles</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className=" p-3 rounded-md overflow-x-auto text-sm">
                  <code>
                    yt-dlp --write-auto-sub --sub-lang en --embed-subs https://www.youtube.com/watch?v=dQw4w9WgXcQ
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

