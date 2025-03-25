"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileAudio, FileVideo, Globe, List, MessageSquare, Music, Play } from "lucide-react"
import type { CommandState, QuickTemplate } from "./types"

interface QuickTemplatesProps {
  onApplyTemplate: (template: CommandState) => void
}

// Templates for quick selection
const QUICK_TEMPLATES: Record<string, QuickTemplate> = {
  bestVideo: {
    name: "Best Quality Video",
    icon: <FileVideo className="h-4 w-4 mr-2" />,
    commands: {
      format: "bestvideo+bestaudio/best",
      output: "%(title)s-[%(id)s]",
    },
  },
  mp3Audio: {
    name: "Extract Audio (MP3)",
    icon: <FileAudio className="h-4 w-4 mr-2" />,
    commands: {
      format: "bestaudio",
      "extract-audio": true,
      "audio-format": "mp3",
      "audio-quality": "0",
      output: "%(title)s-[%(id)s]",
    },
  },
  mp4Video: {
    name: "1080p MP4 Video",
    icon: <Play className="h-4 w-4 mr-2" />,
    commands: {
      format: "bestvideo[height<=1080]+bestaudio/best[height<=1080]",
      "merge-output-format": "mp4",
      output: "%(title)s-[%(id)s]",
    },
  },
  playlistFirst5: {
    name: "Download Videos from Playlist",
    icon: <List className="h-4 w-4 mr-2" />,
    commands: {
      "playlist-items": "1-5",
      output: "%(playlist_index)s-%(title)s-[%(id)s]",
    },
  },
  listFormats: {
    name: "List Available Formats",
    icon: <Globe className="h-4 w-4 mr-2" />,
    commands: {
      "list-formats": true,
    },
  },
  playlistToMp3: {
    name: "Playlist to MP3",
    icon: <Music className="h-4 w-4 mr-2" />,
    commands: {
      "yes-playlist": true,
      format: "bestaudio",
      "extract-audio": true,
      "audio-format": "mp3",
      "audio-quality": "0",
      output: "%(playlist_index)s-%(title)s-[%(id)s]",
    },
  },
  englishSubs: {
    name: "Download Subtitles (English)",
    icon: <MessageSquare className="h-4 w-4 mr-2" />,
    commands: {
      "write-auto-sub": true,
      "sub-lang": "en",
      output: "%(title)s-[%(id)s]",
    },
  },
}

export function QuickTemplates({ onApplyTemplate }: QuickTemplatesProps) {
  return (
    <Card>
      <CardHeader className="pb-2  px-3">
        <CardTitle className="text-sm">Quick Templates</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 px-2 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-1.5">
          {Object.entries(QUICK_TEMPLATES).map(([key, template]) => (
            <Button
              key={key}
              variant="outline"
              size="sm"
              className="justify-start text-left h-auto py-1.5"
              onClick={() => onApplyTemplate(template.commands)}
            >
              {template.icon}
              <span className="truncate">{template.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

