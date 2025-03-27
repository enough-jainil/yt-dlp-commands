import { LocalSettings } from "@/lib/types";

export const DEFAULT_SETTINGS: LocalSettings = {
    ytdlpPath: "yt-dlp", // default ytdlp path
    ffmpegPath: undefined, // ffmpegPath should be undefiend so it only works when user explicitly provides ffmpegPath
    downloadPath: undefined
}