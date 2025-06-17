import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

export default function ExamplesPage() {
  const examples = [
    {
      title: "Quick MP3 Audio Extraction",
      preset: "mp3",
      description: "Extract audio in MP3 format with best quality",
      command:
        'yt-dlp -f "ba[acodec^=mp3]/ba/b" -x --audio-format mp3 "https://example.com/video"',
      useCase: "Perfect for music and podcasts",
    },
    {
      title: "High Quality MP4 Video",
      preset: "mp4",
      description:
        "Download video in MP4 format with H.264 codec and AAC audio",
      command:
        'yt-dlp --merge-output-format mp4 --remux-video mp4 -S "vcodec:h264,lang,quality,res,fps,hdr:12,acodec:aac" "https://example.com/video"',
      useCase: "Best compatibility across devices",
    },
    {
      title: "Rate-Limited Downloads",
      preset: "sleep",
      description: "Add delays between requests to avoid rate limiting",
      command:
        'yt-dlp --sleep-subtitles 5 --sleep-requests 0.75 --sleep-interval 10 --max-sleep-interval 20 "https://example.com/playlist"',
      useCase: "When downloading large playlists",
    },
    {
      title: "Browser Impersonation",
      description:
        "Bypass some restrictions by impersonating different browsers",
      command:
        'yt-dlp --impersonate "chrome:windows-10" "https://example.com/video"',
      useCase: "For sites that block automated downloads",
    },
    {
      title: "Advanced Format Selection",
      description: "Download best video up to 1080p with best audio",
      command:
        'yt-dlp -f "bv*[height<=1080]+ba/b[height<=1080]" "https://example.com/video"',
      useCase: "Balance quality and file size",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">YT-DLP Examples</h1>
        <p className="text-muted-foreground">
          Common use cases and commands demonstrating the latest yt-dlp features
        </p>
      </div>

      <div className="grid gap-6">
        {examples.map((example, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  {example.title}
                </CardTitle>
                {example.preset && (
                  <Badge variant="secondary" className="font-mono">
                    -t {example.preset}
                  </Badge>
                )}
              </div>
              <CardDescription>{example.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Command:</h4>
                  <code className="block p-3 bg-muted rounded-md text-sm font-mono break-all">
                    {example.command}
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {example.useCase}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">💡 Tips</h2>
        <ul className="space-y-2 text-sm">
          <li>
            • Use{" "}
            <code className="px-1 py-0.5 bg-background rounded text-xs">
              --list-formats
            </code>{" "}
            to see available quality options for any video
          </li>
          <li>
            • The{" "}
            <code className="px-1 py-0.5 bg-background rounded text-xs">
              sleep
            </code>{" "}
            preset is essential when downloading large playlists to avoid IP
            bans
          </li>
          <li>
            • Browser impersonation can help access content that blocks
            automated tools
          </li>
          <li>
            • Format selection allows precise control over video quality and
            file size
          </li>
          <li>
            • Use our preset selector in the main app for instant configuration
            of these common patterns
          </li>
        </ul>
      </div>
    </div>
  );
}
