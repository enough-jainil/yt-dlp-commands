# YT-DLP Command Generator

Preview: [YT-DLP Command Generator](https://toolbrew.org/)

## Why I Built This

As someone who frequently downloads videos, I got tired of constantly checking documentation and remembering complex command-line flags for yt-dlp. This tool is essentially my personal cheat sheet that I'm sharing with others who might find it useful.

## What Is This?

A comprehensive web interface that helps you generate yt-dlp commands without memorizing every single flag and option. Think of it as a "command builder" that makes downloading videos, audio, and other content easier.

## ✨ Features

- 🎥 Download videos from various platforms
- 🎵 Extract audio with preset quality settings
- 📋 Generate commands quickly with validation
- 🛠 Handle complex download scenarios
- 🎯 **NEW: Preset Aliases** - Quick access to common configurations:
  - **MP3**: Extract audio in MP3 format with best quality
  - **AAC**: Extract audio in AAC format with best quality
  - **MP4**: Download video in MP4 format with H.264 codec
  - **MKV**: Download video in MKV container format
  - **Sleep**: Add delays between requests to avoid rate limiting
- 🔧 **Advanced Options**: Support for format sorting, impersonation, geo-restriction bypass
- ✅ **Smart Validation**: Real-time validation with incompatibility detection
- 🎨 **Modern UI**: Clean, responsive interface with dark/light theme support

## How It Works

1. Choose what you want to do (download video, extract audio, etc.)
2. **Quick Start**: Use preset aliases for common tasks:
   - Click "Apply" next to **MP3** for instant audio extraction setup
   - Click "Apply" next to **MP4** for video download with optimal settings
   - Use **Sleep** preset when downloading many files to avoid rate limits
3. **Advanced**: Select individual options for custom configurations
4. Get your complete yt-dlp command instantly with real-time validation

## 🎯 Using Preset Aliases

The preset aliases correspond to yt-dlp's built-in `--preset-alias` / `-t` option:

```bash
# These presets are equivalent to:
yt-dlp -t mp3 [URL]    # MP3 preset
yt-dlp -t aac [URL]    # AAC preset
yt-dlp -t mp4 [URL]    # MP4 preset
yt-dlp -t mkv [URL]    # MKV preset
yt-dlp -t sleep [URL]  # Sleep preset
```

## Screenshots / Preview

You can check out the live version at: [ytdlp.toolbrew.org](https://toolbrew.org)

## Who Is This For?

- People who use yt-dlp but don't want to memorize all its flags
- Content archivists
- Researchers
- Anyone who needs to download online content systematically

## Installation / Usage

No installation needed! Just visit the website and start generating commands.

If you want to run it locally:

```bash
git clone https://github.com/w3vish/ytdlp-command-generator
cd ytdlp-command-generator
npm install
npm run dev
```

## A Note on Responsible Use

This tool is meant to help you download content you have the rights to access. Always respect copyright and platform terms of service.

## Feedback

Found a bug? Have a suggestion? Feel free to open an issue on GitHub.

## License

MIT License
