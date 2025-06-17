import { Command } from "@/lib/types";

export type CommandCategory = Record<string, Command[]>;

export const commandData: CommandCategory = {
  general: [
    {
      id: "help",
      name: "Print help text (-h)",
      flag: "--help",
      type: "boolean",
      description: "Print this help text and exit",
      requiresUrl: false,
      utilityOnly: true,
    },
    {
      id: "version",
      name: "Print program version",
      flag: "--version",
      type: "boolean",
      description: "Print program version and exit",
      requiresUrl: false,
      utilityOnly: true,
    },
    {
      id: "update",
      name: "Update to latest version (-U)",
      flag: "--update",
      type: "boolean",
      description: "Update this program to the latest version",
      requiresUrl: false,
      utilityOnly: true,
    },
    {
      id: "no-update",
      name: "Do not check for updates",
      flag: "--no-update",
      type: "boolean",
      description: "Do not check for updates (default)",
      requiresUrl: false,
      utilityOnly: true,
    },
    {
      id: "update-to",
      name: "Upgrade/downgrade to specific version",
      flag: "--update-to",
      type: "string",
      description:
        'Upgrade/downgrade to a specific version. CHANNEL can be a repository as well. CHANNEL and TAG default to "stable" and "latest" respectively if omitted; See "UPDATE" for details. Supported channels: stable, nightly, master',
      placeholder: "[CHANNEL]@[TAG]",
      example: "nightly",
      requiresUrl: false,
      utilityOnly: true,
    },
    {
      id: "ignore-errors",
      name: "Ignore errors (-i)",
      flag: "--ignore-errors",
      type: "boolean",
      description:
        "Ignore download and postprocessing errors. The download will be considered successful even if the postprocessing fails.",
      incompatibleWith: ["abort-on-error"], // abort-on-error is alias for no-ignore-errors
    },
    {
      id: "no-abort-on-error",
      name: "Continue on error (default)",
      flag: "--no-abort-on-error",
      type: "boolean",
      description:
        "Continue with next video on download errors; e.g. to skip unavailable videos in a playlist (default)",
      incompatibleWith: ["abort-on-error"],
    },
    {
      id: "abort-on-error",
      name: "Abort on error (Alias: --no-ignore-errors)",
      flag: "--abort-on-error",
      type: "boolean",
      description: "Abort downloading of further videos if an error occurs",
      incompatibleWith: ["ignore-errors", "no-abort-on-error"],
    },
    {
      id: "dump-user-agent",
      name: "Display user agent",
      flag: "--dump-user-agent",
      type: "boolean",
      description: "Display the current user-agent and exit",
      requiresUrl: false,
      infoCommand: true,
    },
    {
      id: "list-extractors",
      name: "List all extractors",
      flag: "--list-extractors",
      type: "boolean",
      description: "List all supported extractors and exit",
      requiresUrl: false,
      infoCommand: true,
    },
    {
      id: "extractor-descriptions",
      name: "Output extractor descriptions",
      flag: "--extractor-descriptions",
      type: "boolean",
      description: "Output descriptions of all supported extractors and exit",
      requiresUrl: false,
      infoCommand: true,
    },
    {
      id: "use-extractors",
      name: "Extractor names to use (Alias: --ies)",
      flag: "--use-extractors",
      type: "string",
      description:
        'Extractor names to use separated by commas. You can also use regexes, "all", "default" and "end" (end URL matching); e.g. --ies "holodex.*,end,youtube". Prefix the name with a "-" to exclude it. Use --list-extractors for a list of extractor names.',
      placeholder: "NAMES",
      example: "holodex.*,end,youtube",
    },
    {
      id: "default-search",
      name: "Default search prefix",
      flag: "--default-search",
      type: "string",
      description:
        'Use this prefix for unqualified URLs. E.g. "gvsearch2:python" downloads two videos from google videos for the search term "python". Use "auto", "auto_warning", "error", or "fixup_error" (default).',
      placeholder: "PREFIX",
      example: "ytsearch",
    },
    {
      id: "ignore-config",
      name: "Ignore configuration files (Alias: --no-config)",
      flag: "--ignore-config",
      type: "boolean",
      description:
        "Don't load any more configuration files except those given to --config-locations. For backward compatibility, if this option is found inside the system configuration file, the user configuration is not loaded.",
      requiresUrl: false,
    },
    {
      id: "no-config-locations",
      name: "No custom config locations",
      flag: "--no-config-locations",
      type: "boolean",
      description:
        "Do not load any custom configuration files (default). When given inside a configuration file, ignore all previous --config-locations defined in the current file.",
      requiresUrl: false,
    },
    {
      id: "config-locations",
      name: "Configuration file locations",
      flag: "--config-locations",
      type: "string",
      description:
        'Location of the main configuration file; either the path to the config or its containing directory ("-" for stdin). Can be used multiple times and inside other configuration files.',
      placeholder: "PATH",
      example: "~/.config/yt-dlp/config",
      requiresUrl: false,
    },
    {
      id: "plugin-dirs",
      name: "Plugin directories",
      flag: "--plugin-dirs",
      type: "string",
      description:
        'Path to an additional directory to search for plugins. This option can be used multiple times to add multiple directories. Use "default" to search the default plugin directories (default).',
      placeholder: "PATH",
      example: "./my_plugins",
      requiresUrl: false,
    },
    {
      id: "no-plugin-dirs",
      name: "Clear plugin directories",
      flag: "--no-plugin-dirs",
      type: "boolean",
      description:
        "Clear plugin directories to search, including defaults and those provided by previous --plugin-dirs.",
      requiresUrl: false,
    },
    {
      id: "flat-playlist",
      name: "Do not extract playlist videos (metadata only)",
      flag: "--flat-playlist",
      type: "boolean",
      description:
        "Do not extract a playlist's URL result entries; some entry metadata may be missing and downloading may be bypassed.",
      incompatibleWith: ["no-flat-playlist"],
    },
    {
      id: "no-flat-playlist",
      name: "Extract playlist videos (default)",
      flag: "--no-flat-playlist",
      type: "boolean",
      description: "Fully extract the videos of a playlist (default).",
      incompatibleWith: ["flat-playlist"],
    },
    {
      id: "live-from-start",
      name: "Download livestreams from start",
      flag: "--live-from-start",
      type: "boolean",
      description:
        "Download livestreams from the start. Currently experimental and only supported for YouTube and Twitch.",
      incompatibleWith: ["no-live-from-start"],
    },
    {
      id: "no-live-from-start",
      name: "Download livestreams from current time (default)",
      flag: "--no-live-from-start",
      type: "boolean",
      description: "Download livestreams from the current time (default).",
      incompatibleWith: ["live-from-start"],
    },
    {
      id: "wait-for-video",
      name: "Wait for scheduled streams",
      flag: "--wait-for-video",
      type: "string",
      description:
        "Wait for scheduled streams to become available. Pass the minimum number of seconds (or range) to wait between retries.",
      placeholder: "MIN[-MAX]",
      example: "60-300",
      incompatibleWith: ["no-wait-for-video"],
    },
    {
      id: "no-wait-for-video",
      name: "Do not wait for scheduled streams (default)",
      flag: "--no-wait-for-video",
      type: "boolean",
      description: "Do not wait for scheduled streams (default).",
      incompatibleWith: ["wait-for-video"],
    },
    {
      id: "mark-watched",
      name: "Mark videos as watched",
      flag: "--mark-watched",
      type: "boolean",
      description: "Mark videos watched (even with --simulate).",
      incompatibleWith: ["no-mark-watched"],
    },
    {
      id: "no-mark-watched",
      name: "Do not mark as watched (default)",
      flag: "--no-mark-watched",
      type: "boolean",
      description: "Do not mark videos watched (default).",
      incompatibleWith: ["mark-watched"],
    },
    {
      id: "no-colors", // This option is not explicitly in the help, but --color implies its opposite.
      // yt-dlp uses --color [auto|always|never|no_color].
      // This could be handled by the UI for the --color option.
      // For simplicity, I'm keeping it if your UI uses it.
      // The more accurate way is to use --color never or --color no_color.
      name: "Disable colored output (Use --color never)",
      flag: "--no-colors", // This specific flag isn't in yt-dlp, use --color POLICY
      type: "boolean",
      description:
        "Do not emit color codes in output. Better to use --color never.",
      requiresUrl: false,
    },
    {
      id: "color",
      name: "Color output policy",
      flag: "--color",
      type: "string",
      description:
        'Whether to emit color codes in output, optionally prefixed by the STREAM (stdout or stderr). Can be "always", "auto" (default), "never", or "no_color". Use "auto-tty" or "no_color-tty" for TTY-only decision. Can be used multiple times.',
      placeholder: "[STREAM:]POLICY",
      example: "stderr:always",
    },
    {
      id: "compat-options",
      name: "Compatibility options",
      flag: "--compat-options",
      type: "string",
      description:
        'Options that can help keep compatibility with youtube-dl or youtube-dlc configurations by reverting some of the changes made in yt-dlp. See "Differences in default behavior" for details.',
      placeholder: "OPTS",
      example: "youtube-dl",
    },
    {
      id: "alias",
      name: "Create option aliases",
      flag: "--alias",
      type: "string",
      description:
        'Create aliases for an option string. Arguments are parsed according to Python string formatting. E.g. --alias get-audio,-X "-S aext:{0},abr -x --audio-format {0}". This option can be used multiple times.',
      placeholder: "ALIASES OPTIONS",
      example: 'get-audio,-X "-S aext:{0},abr -x --audio-format {0}"',
    },
    {
      id: "preset-alias",
      name: "Preset Alias (-t)",
      flag: "--preset-alias",
      type: "select",
      options: [
        { label: "mp3", value: "mp3" },
        { label: "aac", value: "aac" },
        { label: "mp4", value: "mp4" },
        { label: "mkv", value: "mkv" },
        { label: "sleep", value: "sleep" },
      ],
      description:
        "Applies a predefined set of options. E.g. --preset-alias mp3. Available presets: mp3, aac, mp4, mkv, sleep. This option can be used multiple times.",
      placeholder: "PRESET",
      requiresUrl: false, // Presets can be in config files or used generally
    },
    {
      id: "force-generic-extractor", // Still in your data, but not listed in the main help options of yt-dlp.
      // It might be an older or more obscure option. Keeping if intended.
      name: "Force generic extractor",
      flag: "--force-generic-extractor",
      type: "boolean",
      description: "Force extraction to use the generic extractor",
    },
  ],
  network: [
    {
      id: "proxy",
      name: "Use proxy",
      flag: "--proxy",
      type: "string",
      description:
        'Use the specified HTTP/HTTPS/SOCKS proxy. To enable SOCKS proxy, specify a proper scheme, e.g. socks5://user:pass@127.0.0.1:1080/. Pass "" for direct connection.',
      placeholder: "URL",
      example: "socks5://127.0.0.1:1080/",
    },
    {
      id: "socket-timeout",
      name: "Socket timeout",
      flag: "--socket-timeout",
      type: "number",
      description:
        "Time to wait before giving up on a socket connection, in seconds.",
      placeholder: "SECONDS",
      min: 1,
    },
    {
      id: "source-address",
      name: "Source IP address",
      flag: "--source-address",
      type: "string",
      description: "Client-side IP address to bind to.",
      placeholder: "IP",
      example: "192.168.1.10",
    },
    {
      id: "force-ipv4",
      name: "Force IPv4 (-4)",
      flag: "--force-ipv4",
      type: "boolean",
      description: "Make all connections via IPv4.",
      incompatibleWith: ["force-ipv6"],
    },
    {
      id: "force-ipv6",
      name: "Force IPv6 (-6)",
      flag: "--force-ipv6",
      type: "boolean",
      description: "Make all connections via IPv6.",
      incompatibleWith: ["force-ipv4"],
    },
    {
      id: "enable-file-urls",
      name: "Enable file:// URLs",
      flag: "--enable-file-urls",
      type: "boolean",
      description:
        "Enable file:// URLs. This is disabled by default for security reasons.",
    },
    {
      id: "impersonate",
      name: "Impersonate client",
      flag: "--impersonate",
      type: "string",
      description:
        'Client to impersonate for requests. E.g. chrome, chrome-110, chrome:windows-10. Pass --impersonate="" to impersonate any client. Note that forcing impersonation for all requests may have a detrimental impact on download speed and stability',
      placeholder: "CLIENT[:OS]",
      example: "chrome:windows-10",
    },
    {
      id: "list-impersonate-targets",
      name: "List impersonate targets",
      flag: "--list-impersonate-targets",
      type: "boolean",
      description: "List available clients to impersonate.",
      requiresUrl: false,
      infoCommand: true,
    },
    {
      // Geo-restriction options combined into Network
      id: "geo-verification-proxy",
      name: "Geo verification proxy",
      flag: "--geo-verification-proxy",
      type: "string",
      description:
        "Use this proxy to verify the IP address for some geo-restricted sites. The default proxy (or none) is used for actual downloading.",
      placeholder: "URL",
      example: "http://proxy.example.com:8080/",
    },
    {
      id: "xff",
      name: "Fake X-Forwarded-For header",
      flag: "--xff",
      type: "string",
      description:
        'How to fake X-Forwarded-For HTTP header to try bypassing geographic restriction. One of "default" (only when known to be useful), "never", an IP block in CIDR notation, or a two-letter ISO 3166-2 country code',
      placeholder: "VALUE",
      example: "US", // or e.g. 1.2.3.4/24
    },
  ],
  videoSelection: [
    // Renamed from 'video'
    {
      id: "playlist-items",
      name: "Playlist items to download (-I)",
      flag: "--playlist-items",
      type: "string",
      description:
        'Comma separated playlist_index of items to download. Range: "[START]:[STOP][:STEP]". Negative indices count from right, negative STEP reverses. E.g., "1:3,7,-5::2".',
      placeholder: "ITEM_SPEC",
      example: "1:3,7,-5::2",
    },
    {
      id: "min-filesize",
      name: "Minimum filesize",
      flag: "--min-filesize",
      type: "string", // Size can be like 50k, 44.6M
      description:
        "Abort download if filesize is smaller than SIZE (e.g. 50k or 44.6M).",
      placeholder: "SIZE",
      example: "50k",
    },
    {
      id: "max-filesize",
      name: "Maximum filesize",
      flag: "--max-filesize",
      type: "string", // Size can be like 50k, 44.6M
      description:
        "Abort download if filesize is larger than SIZE (e.g. 50k or 44.6M).",
      placeholder: "SIZE",
      example: "100M",
    },
    {
      id: "date",
      name: "Filter by upload date",
      flag: "--date",
      type: "string",
      description:
        'Download only videos uploaded on this date (YYYYMMDD or [now|today|yesterday][-N[day|week|month|year]]). E.g., "today-2weeks".',
      placeholder: "DATE",
      example: "20231027",
    },
    {
      id: "datebefore",
      name: "Filter by upload date (on or before)",
      flag: "--datebefore",
      type: "string",
      description:
        "Download only videos uploaded on or before this date. Same format as --date.",
      placeholder: "DATE",
      example: "20230101",
    },
    {
      id: "dateafter",
      name: "Filter by upload date (on or after)",
      flag: "--dateafter",
      type: "string",
      description:
        "Download only videos uploaded on or after this date. Same format as --date.",
      placeholder: "DATE",
      example: "yesterday",
    },
    {
      id: "match-filters",
      name: "Match filters",
      flag: "--match-filters",
      type: "string",
      description:
        'Generic video filter. Compare "OUTPUT TEMPLATE" fields. Use "!field" for not present, "&" for multiple conditions. Escape "&" or quotes with "\\". Multiple uses are ORed. Use "-" for interactive. E.g., "!is_live & like_count>?100"',
      placeholder: "FILTER",
      example: "like_count>?100 & description~='(?i)\\bcats & dogs\\b'",
    },
    {
      id: "no-match-filters",
      name: "No match filters (default)",
      flag: "--no-match-filters",
      type: "boolean",
      description: "Do not use any --match-filters (default).",
      incompatibleWith: ["match-filters"],
    },
    {
      id: "break-match-filters",
      name: "Break on match filters",
      flag: "--break-match-filters",
      type: "string",
      description:
        'Same as "--match-filters" but stops the download process when a video is rejected.',
      placeholder: "FILTER",
    },
    {
      id: "no-break-match-filters",
      name: "No break on match filters (default)",
      flag: "--no-break-match-filters",
      type: "boolean",
      description: "Do not use any --break-match-filters (default).",
      incompatibleWith: ["break-match-filters"],
    },
    {
      id: "no-playlist",
      name: "Download only video (if URL is video and playlist)",
      flag: "--no-playlist",
      type: "boolean",
      description:
        "Download only the video, if the URL refers to a video and a playlist.",
      incompatibleWith: ["yes-playlist"],
    },
    {
      id: "yes-playlist",
      name: "Download playlist (if URL is video and playlist)",
      flag: "--yes-playlist",
      type: "boolean",
      description:
        "Download the playlist, if the URL refers to a video and a playlist.",
      incompatibleWith: ["no-playlist"],
    },
    {
      id: "age-limit",
      name: "Age limit",
      flag: "--age-limit",
      type: "number",
      description: "Download only videos suitable for the given age.",
      placeholder: "YEARS",
      min: 0,
    },
    {
      id: "download-archive",
      name: "Use download archive",
      flag: "--download-archive",
      type: "string",
      description:
        "Download only videos not listed in the archive file. Record IDs of downloaded videos in it.",
      placeholder: "FILE",
      example: "archive.txt",
    },
    {
      id: "no-download-archive",
      name: "No download archive (default)",
      flag: "--no-download-archive",
      type: "boolean",
      description: "Do not use archive file (default).",
      incompatibleWith: ["download-archive"],
    },
    {
      id: "max-downloads",
      name: "Max downloads",
      flag: "--max-downloads",
      type: "number",
      description: "Abort after downloading NUMBER files.",
      placeholder: "NUMBER",
      min: 1,
    },
    {
      id: "break-on-existing",
      name: "Break on existing in archive",
      flag: "--break-on-existing",
      type: "boolean",
      description:
        "Stop download process when encountering a file that is in the archive (from --download-archive).",
      incompatibleWith: ["no-break-on-existing"],
    },
    {
      id: "no-break-on-existing",
      name: "No break on existing in archive (default)",
      flag: "--no-break-on-existing",
      type: "boolean",
      description:
        "Do not stop download process when encountering a file that is in the archive (default).",
      incompatibleWith: ["break-on-existing"],
    },
    {
      id: "break-per-input",
      name: "Break per input URL",
      flag: "--break-per-input",
      type: "boolean",
      description:
        "Alters --max-downloads, --break-on-existing, --break-match-filters, and autonumber to reset per input URL.",
      incompatibleWith: ["no-break-per-input"],
    },
    {
      id: "no-break-per-input",
      name: "No break per input URL (default)",
      flag: "--no-break-per-input",
      type: "boolean",
      description:
        "--break-on-existing and similar options terminates the entire download queue (default).",
      incompatibleWith: ["break-per-input"],
    },
    {
      id: "skip-playlist-after-errors",
      name: "Skip playlist after N errors",
      flag: "--skip-playlist-after-errors",
      type: "number",
      description:
        "Number of allowed failures until the rest of the playlist is skipped.",
      placeholder: "N",
      min: 1,
    },
  ],
  download: [
    {
      id: "concurrent-fragments",
      name: "Concurrent fragments (-N)",
      flag: "--concurrent-fragments",
      type: "number",
      description:
        "Number of fragments of a dash/hlsnative video to download concurrently (default 1).",
      placeholder: "N",
      min: 1,
      example: "3",
    },
    {
      id: "limit-rate",
      name: "Download speed limit (-r)",
      flag: "--limit-rate",
      type: "string", // Can be 50K, 4.2M
      description:
        "Maximum download rate in bytes per second (e.g. 50K or 4.2M).",
      placeholder: "RATE",
      example: "1M",
    },
    {
      id: "throttled-rate",
      name: "Throttled rate for re-extraction",
      flag: "--throttled-rate",
      type: "string",
      description:
        "Minimum download rate (bytes/sec) below which throttling is assumed and video data is re-extracted (e.g. 100K).",
      placeholder: "RATE",
      example: "100K",
    },
    {
      id: "retries",
      name: "Retry attempts (-R)",
      flag: "--retries",
      type: "string", // Can be number or "infinite"
      description: 'Number of retries (default is 10), or "infinite".',
      placeholder: "RETRIES",
      example: "10", // or "infinite"
    },
    {
      id: "file-access-retries",
      name: "File access retries",
      flag: "--file-access-retries",
      type: "string",
      description:
        'Number of times to retry on file access error (default is 3), or "infinite".',
      placeholder: "RETRIES",
      example: "3",
    },
    {
      id: "fragment-retries",
      name: "Fragment retry attempts",
      flag: "--fragment-retries",
      type: "string", // Can be number or "infinite"
      description:
        'Number of retries for a fragment (default is 10), or "infinite" (DASH, hlsnative, ISM).',
      placeholder: "RETRIES",
      example: "10",
    },
    {
      id: "retry-sleep",
      name: "Retry sleep duration/logic",
      flag: "--retry-sleep",
      type: "string",
      description:
        "Time to sleep between retries (seconds), optionally prefixed by retry type (http, fragment, file_access, extractor). EXPR can be number, linear=START[:END[:STEP=1]], or exp=START[:END[:BASE=2]].",
      placeholder: "[TYPE:]EXPR",
      example: "fragment:exp=1:20",
    },
    {
      id: "skip-unavailable-fragments",
      name: "Skip unavailable fragments (default, Alias: --no-abort-on-unavailable-fragments)",
      flag: "--skip-unavailable-fragments",
      type: "boolean",
      description:
        "Skip unavailable fragments for DASH, hlsnative and ISM downloads (default).",
      incompatibleWith: ["abort-on-unavailable-fragment"],
    },
    {
      id: "abort-on-unavailable-fragment",
      name: "Abort on unavailable fragment (Alias: --no-skip-unavailable-fragments)",
      flag: "--abort-on-unavailable-fragment",
      type: "boolean",
      description: "Abort download if a fragment is unavailable.",
      incompatibleWith: ["skip-unavailable-fragments"],
    },
    {
      id: "keep-fragments",
      name: "Keep downloaded fragments",
      flag: "--keep-fragments",
      type: "boolean",
      description:
        "Keep downloaded fragments on disk after downloading is finished.",
      incompatibleWith: ["no-keep-fragments"],
    },
    {
      id: "no-keep-fragments",
      name: "Delete fragments after download (default)",
      flag: "--no-keep-fragments",
      type: "boolean",
      description:
        "Delete downloaded fragments after downloading is finished (default).",
      incompatibleWith: ["keep-fragments"],
    },
    {
      id: "buffer-size",
      name: "Buffer size",
      flag: "--buffer-size",
      type: "string", // e.g. 1024 or 16K
      description:
        "Size of download buffer (e.g. 1024 or 16K, default is 1024).",
      placeholder: "SIZE",
      example: "16K",
    },
    {
      id: "resize-buffer",
      name: "Resize buffer automatically (default)",
      flag: "--resize-buffer",
      type: "boolean",
      description:
        "The buffer size is automatically resized from an initial value of --buffer-size (default).",
      incompatibleWith: ["no-resize-buffer"],
    },
    {
      id: "no-resize-buffer",
      name: "Do not resize buffer",
      flag: "--no-resize-buffer",
      type: "boolean",
      description: "Do not automatically adjust the buffer size.",
      incompatibleWith: ["resize-buffer"],
    },
    {
      id: "http-chunk-size",
      name: "HTTP chunk size",
      flag: "--http-chunk-size",
      type: "string", // e.g. 10485760 or 10M
      description:
        "Size of a chunk for chunk-based HTTP downloading (e.g. 10M, default disabled). May bypass bandwidth throttling (experimental).",
      placeholder: "SIZE",
      example: "10M",
    },
    {
      id: "playlist-random",
      name: "Download playlist in random order",
      flag: "--playlist-random",
      type: "boolean",
      description: "Download playlist videos in random order.",
      // No direct incompatible flag, but --lazy-playlist disables it.
    },
    {
      id: "lazy-playlist",
      name: "Lazy playlist processing",
      flag: "--lazy-playlist",
      type: "boolean",
      description:
        "Process entries in the playlist as they are received. Disables n_entries, --playlist-random, and --playlist-reverse.",
      incompatibleWith: ["no-lazy-playlist"],
    },
    {
      id: "no-lazy-playlist",
      name: "No lazy playlist processing (default)",
      flag: "--no-lazy-playlist",
      type: "boolean",
      description:
        "Process videos in the playlist only after the entire playlist is parsed (default).",
      incompatibleWith: ["lazy-playlist"],
    },
    {
      id: "xattr-set-filesize",
      name: "Set file xattr ytdl.filesize",
      flag: "--xattr-set-filesize",
      type: "boolean",
      description: "Set file xattribute ytdl.filesize with expected file size.",
    },
    {
      id: "hls-use-mpegts",
      name: "Use MPEG-TS for HLS videos",
      flag: "--hls-use-mpegts",
      type: "boolean",
      description:
        "Use the mpegts container for HLS videos. Enabled by default for live streams. Reduces corruption chance if interrupted.",
      incompatibleWith: ["no-hls-use-mpegts"],
    },
    {
      id: "no-hls-use-mpegts",
      name: "No MPEG-TS for HLS videos (default for non-live)",
      flag: "--no-hls-use-mpegts",
      type: "boolean",
      description:
        "Do not use the mpegts container for HLS videos. Default when not downloading live streams.",
      incompatibleWith: ["hls-use-mpegts"],
    },
    {
      id: "download-sections",
      name: "Download sections (chapters/time)",
      flag: "--download-sections",
      type: "string",
      description:
        'Download only chapters matching REGEX. "*" prefix for time-range. Negative times from end. "*from-url" uses URL start/end_time. Needs ffmpeg. Multiple uses allowed.',
      placeholder: "REGEX",
      example: "*10:15-inf", // or "intro"
    },
    {
      id: "downloader",
      name: "External downloader (Alias: --external-downloader)",
      flag: "--downloader",
      type: "string",
      description:
        "Name or path of external downloader. Optionally prefix by protocols (http, ftp, m3u8, dash, rstp, rtmp, mms). Supports: native, aria2c, avconv, axel, curl, ffmpeg, httpie, wget. Multiple uses for different protocols.",
      placeholder: "[PROTO:]NAME",
      example: "aria2c",
    },
    {
      id: "downloader-args",
      name: "External downloader arguments (Alias: --external-downloader-args)",
      flag: "--downloader-args",
      type: "string",
      description:
        "Arguments for external downloader (NAME:ARGS). For ffmpeg, use --postprocessor-args syntax for positions. Multiple uses for different downloaders.",
      placeholder: "NAME:ARGS",
      example: "aria2c:-x 16 -k 1M",
    },
  ],
  filesystem: [
    {
      id: "batch-file",
      name: "Batch file (-a)",
      flag: "--batch-file",
      type: "string",
      description:
        'File containing URLs to download ("-" for stdin), one URL per line. Comments: #, ;, ].',
      placeholder: "FILE",
      example: "urls.txt",
    },
    {
      id: "no-batch-file",
      name: "No batch file (default)",
      flag: "--no-batch-file",
      type: "boolean",
      description: "Do not read URLs from batch file (default).",
      incompatibleWith: ["batch-file"],
    },
    {
      id: "paths",
      name: "Download paths (-P)",
      flag: "--paths",
      type: "string",
      description:
        'Paths for file types (TYPES:PATH). Supports same TYPES as --output, plus "home" (default) and "temp". Intermediary files go to temp, final to home. Ignored if --output is absolute.',
      placeholder: "[TYPES:]PATH",
      example: "home:~/Downloads/videos temp:~/tmp",
    },
    {
      id: "output",
      name: "Output filename template (-o)",
      flag: "--output",
      type: "string",
      description:
        'Output filename template; see "OUTPUT TEMPLATE" for details.',
      placeholder: "[TYPES:]TEMPLATE",
      example: "%(title)s [%(id)s].%(ext)s",
    },
    {
      id: "output-na-placeholder",
      name: "Output NA placeholder",
      flag: "--output-na-placeholder",
      type: "string",
      description:
        'Placeholder for unavailable fields in --output (default: "NA").',
      placeholder: "TEXT",
      example: "UNKNOWN",
    },
    {
      id: "restrict-filenames",
      name: "Restrict filenames to ASCII",
      flag: "--restrict-filenames",
      type: "boolean",
      description:
        'Restrict filenames to only ASCII characters, and avoid "&" and spaces in filenames.',
      incompatibleWith: ["no-restrict-filenames"],
    },
    {
      id: "no-restrict-filenames",
      name: "Allow Unicode filenames (default)",
      flag: "--no-restrict-filenames",
      type: "boolean",
      description:
        'Allow Unicode characters, "&" and spaces in filenames (default).',
      incompatibleWith: ["restrict-filenames"],
    },
    {
      id: "windows-filenames",
      name: "Force Windows-compatible filenames",
      flag: "--windows-filenames",
      type: "boolean",
      description: "Force filenames to be Windows-compatible.",
      incompatibleWith: ["no-windows-filenames"],
    },
    {
      id: "no-windows-filenames",
      name: "Minimal filename sanitization",
      flag: "--no-windows-filenames",
      type: "boolean",
      description:
        "Sanitize filenames only minimally (default on non-Windows).",
      incompatibleWith: ["windows-filenames"],
    },
    {
      id: "trim-filenames",
      name: "Trim filenames length",
      flag: "--trim-filenames",
      type: "number",
      description:
        "Limit the filename length (excluding extension) to the specified number of characters.",
      placeholder: "LENGTH",
      min: 1,
    },
    {
      id: "no-overwrites",
      name: "Do not overwrite files (-w)",
      flag: "--no-overwrites",
      type: "boolean",
      description: "Do not overwrite any files.",
      incompatibleWith: ["force-overwrites"], // force-overwrites implies overwriting
    },
    {
      id: "force-overwrites",
      name: "Force overwrites",
      flag: "--force-overwrites",
      type: "boolean",
      description:
        "Overwrite all video and metadata files. This option includes --no-continue.",
      incompatibleWith: ["no-overwrites", "no-force-overwrites"],
    },
    {
      id: "no-force-overwrites",
      name: "No force overwrites (default)",
      flag: "--no-force-overwrites",
      type: "boolean",
      description:
        "Do not overwrite the video, but overwrite related files (default).",
      incompatibleWith: ["force-overwrites"],
    },
    {
      id: "continue",
      name: "Resume downloads (-c, default)",
      flag: "--continue",
      type: "boolean",
      description: "Resume partially downloaded files/fragments (default).",
      incompatibleWith: ["no-continue"],
    },
    {
      id: "no-continue",
      name: "Do not resume downloads",
      flag: "--no-continue",
      type: "boolean",
      description:
        "Do not resume partially downloaded fragments. If file not fragmented, restart download.",
      incompatibleWith: ["continue"],
    },
    {
      id: "part",
      name: "Use .part files (default)",
      flag: "--part",
      type: "boolean",
      description:
        "Use .part files instead of writing directly into output file (default).",
      incompatibleWith: ["no-part"],
    },
    {
      id: "no-part",
      name: "Do not use .part files",
      flag: "--no-part",
      type: "boolean",
      description: "Do not use .part files - write directly into output file.",
      incompatibleWith: ["part"],
    },
    {
      id: "mtime",
      name: "Set file modification time from Last-modified header (default)",
      flag: "--mtime",
      type: "boolean",
      description:
        "Use the Last-modified header to set the file modification time (default).",
      incompatibleWith: ["no-mtime"],
    },
    {
      id: "no-mtime",
      name: "Do not use Last-modified for mtime",
      flag: "--no-mtime",
      type: "boolean",
      description:
        "Do not use the Last-modified header to set the file modification time.",
      incompatibleWith: ["mtime"],
    },
    {
      id: "write-description",
      name: "Write description to .description file",
      flag: "--write-description",
      type: "boolean",
      description: "Write video description to a .description file.",
      incompatibleWith: ["no-write-description"],
    },
    {
      id: "no-write-description",
      name: "Do not write description file (default)",
      flag: "--no-write-description",
      type: "boolean",
      description: "Do not write video description (default).",
      incompatibleWith: ["write-description"],
    },
    {
      id: "write-info-json",
      name: "Write metadata to .info.json file",
      flag: "--write-info-json",
      type: "boolean",
      description:
        "Write video metadata to a .info.json file (may contain personal information).",
      incompatibleWith: ["no-write-info-json"],
    },
    {
      id: "no-write-info-json",
      name: "Do not write .info.json file (default)",
      flag: "--no-write-info-json",
      type: "boolean",
      description: "Do not write video metadata (default).",
      incompatibleWith: ["write-info-json"],
    },
    {
      id: "write-playlist-metafiles",
      name: "Write playlist metafiles (default)",
      flag: "--write-playlist-metafiles",
      type: "boolean",
      description:
        "Write playlist metadata in addition to video metadata when using --write-info-json, --write-description etc. (default).",
      incompatibleWith: ["no-write-playlist-metafiles"],
    },
    {
      id: "no-write-playlist-metafiles",
      name: "No playlist metafiles",
      flag: "--no-write-playlist-metafiles",
      type: "boolean",
      description:
        "Do not write playlist metadata when using --write-info-json, --write-description etc.",
      incompatibleWith: ["write-playlist-metafiles"],
    },
    {
      id: "clean-info-json",
      name: "Clean info.json (default)",
      flag: "--clean-info-json",
      type: "boolean",
      description:
        "Remove some internal metadata (e.g. filenames) from the infojson (default).",
      incompatibleWith: ["no-clean-info-json"],
    },
    {
      id: "no-clean-info-json",
      name: "No clean info.json (write all fields)",
      flag: "--no-clean-info-json",
      type: "boolean",
      description: "Write all fields to the infojson.",
      incompatibleWith: ["clean-info-json"],
    },
    {
      id: "write-comments",
      name: "Write comments to info.json (Alias: --get-comments)",
      flag: "--write-comments",
      type: "boolean",
      description:
        "Retrieve video comments to be placed in the infojson. Fetched even without this if extraction is quick.",
      incompatibleWith: ["no-write-comments"],
    },
    {
      id: "no-write-comments",
      name: "No comments unless quick (Alias: --no-get-comments)",
      flag: "--no-write-comments",
      type: "boolean",
      description:
        "Do not retrieve video comments unless the extraction is known to be quick (default).",
      incompatibleWith: ["write-comments"],
    },
    {
      id: "load-info-json",
      name: "Load info from .info.json file",
      flag: "--load-info-json",
      type: "string",
      description:
        'JSON file containing the video information (created with "--write-info-json").',
      placeholder: "FILE",
      example: "video_meta.json",
    },
    {
      id: "cookies",
      name: "Cookies file",
      flag: "--cookies",
      type: "string",
      description:
        "Netscape formatted file to read cookies from and dump cookie jar in.",
      placeholder: "FILE",
      example: "cookies.txt",
    },
    {
      id: "no-cookies",
      name: "No cookies file (default)",
      flag: "--no-cookies",
      type: "boolean",
      description: "Do not read/dump cookies from/to file (default).",
      incompatibleWith: ["cookies"],
    },
    {
      id: "cookies-from-browser",
      name: "Load cookies from browser",
      flag: "--cookies-from-browser",
      type: "string",
      description:
        'Browser to load cookies from (brave, chrome, chromium, edge, firefox, opera, safari, vivaldi, whale). Optional +KEYRING, :PROFILE, ::CONTAINER. E.g., "firefox:default::personal".',
      placeholder: "BROWSER[+KEYRING][:PROFILE][::CONTAINER]",
      example: "chrome",
    },
    {
      id: "no-cookies-from-browser",
      name: "Do not load cookies from browser (default)",
      flag: "--no-cookies-from-browser",
      type: "boolean",
      description: "Do not load cookies from browser (default).",
      incompatibleWith: ["cookies-from-browser"],
    },
    {
      id: "cache-dir",
      name: "Cache directory",
      flag: "--cache-dir",
      type: "string",
      description:
        "Location for yt-dlp to store some downloaded information permanently (e.g. client ids). Default ${XDG_CACHE_HOME}/yt-dlp.",
      placeholder: "DIR",
      example: "~/.cache/yt-dlp",
    },
    {
      id: "no-cache-dir",
      name: "Disable filesystem cache",
      flag: "--no-cache-dir",
      type: "boolean",
      description: "Disable filesystem caching.",
      incompatibleWith: ["rm-cache-dir", "cache-dir"],
    },
    {
      id: "rm-cache-dir",
      name: "Remove all cache files",
      flag: "--rm-cache-dir",
      type: "boolean",
      description: "Delete all filesystem cache files.",
      requiresUrl: false, // Utility action
      utilityOnly: true,
      incompatibleWith: ["no-cache-dir"],
    },
  ],
  thumbnail: [
    {
      id: "write-thumbnail",
      name: "Write thumbnail to disk",
      flag: "--write-thumbnail",
      type: "boolean",
      description: "Write thumbnail image to disk.",
      incompatibleWith: ["no-write-thumbnail"],
    },
    {
      id: "no-write-thumbnail",
      name: "Do not write thumbnail (default)",
      flag: "--no-write-thumbnail",
      type: "boolean",
      description: "Do not write thumbnail image to disk (default).",
      incompatibleWith: ["write-thumbnail"],
    },
    {
      id: "write-all-thumbnails",
      name: "Write all thumbnail formats",
      flag: "--write-all-thumbnails",
      type: "boolean",
      description: "Write all thumbnail image formats to disk.",
    },
    {
      id: "list-thumbnails",
      name: "List available thumbnails",
      flag: "--list-thumbnails",
      type: "boolean",
      description:
        "List available thumbnails of each video. Simulates unless --no-simulate is used.",
      infoCommand: true,
    },
    {
      // Moved from postProcessing as it's thumbnail-specific
      id: "convert-thumbnails",
      name: "Convert thumbnails format",
      flag: "--convert-thumbnails",
      type: "string",
      description:
        'Convert thumbnails to another format (jpg, png, webp). Multiple rules like "--remux-video" allowed. Use "none" to disable (default).',
      placeholder: "FORMAT", // e.g., "jpg" or "png/webp" or "none"
      example: "jpg",
    },
  ],
  internetShortcut: [
    {
      id: "write-link",
      name: "Write internet shortcut file",
      flag: "--write-link",
      type: "boolean",
      description:
        "Write an internet shortcut file (.url, .webloc, or .desktop depending on platform). URL may be cached by OS.",
    },
    {
      id: "write-url-link",
      name: "Write .url Windows internet shortcut",
      flag: "--write-url-link",
      type: "boolean",
      description:
        "Write a .url Windows internet shortcut. OS caches URL based on file path.",
    },
    {
      id: "write-webloc-link",
      name: "Write .webloc macOS internet shortcut",
      flag: "--write-webloc-link",
      type: "boolean",
      description: "Write a .webloc macOS internet shortcut.",
    },
    {
      id: "write-desktop-link",
      name: "Write .desktop Linux internet shortcut",
      flag: "--write-desktop-link",
      type: "boolean",
      description: "Write a .desktop Linux internet shortcut.",
    },
  ],
  verbosityAndSimulation: [
    // Merged advanced and verbosity
    {
      id: "quiet",
      name: "Quiet mode (-q)",
      flag: "--quiet",
      type: "boolean",
      description:
        "Activate quiet mode. If used with --verbose, print log to stderr.",
      requiresUrl: false,
      incompatibleWith: ["verbose", "no-quiet"],
    },
    {
      id: "no-quiet",
      name: "No quiet mode (default)",
      flag: "--no-quiet",
      type: "boolean",
      description: "Deactivate quiet mode (default).",
      requiresUrl: false,
      incompatibleWith: ["quiet"],
    },
    {
      id: "no-warnings",
      name: "Ignore warnings",
      flag: "--no-warnings",
      type: "boolean",
      description: "Ignore warnings.",
      requiresUrl: false,
    },
    {
      id: "simulate",
      name: "Simulate download (-s)",
      flag: "--simulate",
      type: "boolean",
      description:
        "Do not download the video and do not write anything to disk.",
      incompatibleWith: ["no-simulate"],
    },
    {
      id: "no-simulate",
      name: "No simulate (download even with print/list options)",
      flag: "--no-simulate",
      type: "boolean",
      description:
        "Download the video even if printing/listing options are used.",
      incompatibleWith: ["simulate"],
    },
    {
      id: "ignore-no-formats-error",
      name: "Ignore 'No video formats' error",
      flag: "--ignore-no-formats-error",
      type: "boolean",
      description:
        "Ignore 'No video formats' error. Useful for extracting metadata if videos not available (experimental).",
      incompatibleWith: ["no-ignore-no-formats-error"],
    },
    {
      id: "no-ignore-no-formats-error",
      name: "Error on no formats (default)",
      flag: "--no-ignore-no-formats-error",
      type: "boolean",
      description:
        "Throw error when no downloadable video formats are found (default).",
      incompatibleWith: ["ignore-no-formats-error"],
    },
    {
      id: "skip-download",
      name: "Skip download, write related files (Alias: --no-download)",
      flag: "--skip-download",
      type: "boolean",
      description: "Do not download the video but write all related files.",
    },
    {
      id: "print",
      name: "Print field/template to screen (-O)",
      flag: "--print",
      type: "string",
      description:
        "Field name or output template to print. Optionally prefix with WHEN: (e.g., video:, after_move:). Implies --quiet. Implies --simulate unless --no-simulate or later WHEN stages are used. Multiple uses allowed.",
      placeholder: "[WHEN:]TEMPLATE",
      example: "video:%(title)s - %(duration_string)s",
    },
    {
      id: "print-to-file",
      name: "Print field/template to file",
      flag: "--print-to-file",
      type: "string", // Represents TEMPLATE and FILE
      description:
        "Append given template to file. WHEN and TEMPLATE same as --print. FILE uses output template syntax. Multiple uses allowed.",
      placeholder: "[WHEN:]TEMPLATE FILE",
      example: "video:%(id)s output.txt",
    },
    {
      id: "dump-json",
      name: "Dump JSON information for each video (-j)",
      flag: "--dump-json",
      type: "boolean",
      description:
        "Quiet, but print JSON information for each video. Simulates unless --no-simulate is used.",
      requiresUrl: false, // Can operate on infojson files
      infoCommand: true,
    },
    {
      id: "dump-single-json",
      name: "Dump single JSON for each URL/infojson (-J)",
      flag: "--dump-single-json",
      type: "boolean",
      description:
        "Quiet, but print JSON information for each URL or infojson passed. Simulates unless --no-simulate. Whole playlist info in single line if URL is playlist.",
      requiresUrl: false, // Can operate on infojson files
      infoCommand: true,
    },
    {
      id: "force-write-archive",
      name: "Force write archive entries (Alias: --force-download-archive)",
      flag: "--force-write-archive",
      type: "boolean",
      description:
        "Force download archive entries to be written as far as no errors occur, even if -s or simulation is used.",
    },
    {
      id: "newline",
      name: "Newline for progress bar",
      flag: "--newline",
      type: "boolean",
      description: "Output progress bar as new lines.",
    },
    {
      id: "no-progress",
      name: "No progress bar",
      flag: "--no-progress",
      type: "boolean",
      description: "Do not print progress bar.",
      incompatibleWith: ["progress"],
    },
    {
      id: "progress",
      name: "Show progress bar",
      flag: "--progress",
      type: "boolean",
      description: "Show progress bar, even if in quiet mode.",
      incompatibleWith: ["no-progress"],
    },
    {
      id: "console-title",
      name: "Display progress in console title",
      flag: "--console-title",
      type: "boolean",
      description: "Display progress in console titlebar.",
    },
    {
      id: "progress-template",
      name: "Progress template",
      flag: "--progress-template",
      type: "string",
      description:
        'Template for progress outputs. Optional prefix: "download:" (default), "download-title:", "postprocess:", "postprocess-title:". Info fields under "info", progress under "progress".',
      placeholder: "[TYPES:]TEMPLATE",
      example: "download-title:%(info.id)s - %(progress.eta)s",
    },
    {
      id: "progress-delta",
      name: "Progress output delta time",
      flag: "--progress-delta",
      type: "number",
      description: "Time between progress output in seconds (default: 0).",
      placeholder: "SECONDS",
      min: 0, // Assuming 0 is valid for continuous/frequent updates
    },
    {
      id: "verbose",
      name: "Verbose output (-v)",
      flag: "--verbose",
      type: "boolean",
      description: "Print various debugging information.",
      requiresUrl: false,
      incompatibleWith: ["quiet"],
    },
    {
      id: "dump-pages",
      name: "Dump downloaded pages (base64)",
      flag: "--dump-pages",
      type: "boolean",
      description:
        "Print downloaded pages encoded using base64 to debug problems (very verbose).",
    },
    {
      id: "write-pages",
      name: "Write intermediary pages to files",
      flag: "--write-pages",
      type: "boolean",
      description:
        "Write downloaded intermediary pages to files in current directory to debug problems.",
    },
    {
      id: "print-traffic",
      name: "Print HTTP traffic",
      flag: "--print-traffic",
      type: "boolean",
      description: "Display sent and read HTTP traffic.",
    },
  ],
  workarounds: [
    {
      id: "encoding",
      name: "Force encoding (experimental)",
      flag: "--encoding",
      type: "string",
      description: "Force the specified encoding (experimental).",
      placeholder: "ENCODING",
      example: "utf-8",
    },
    {
      id: "legacy-server-connect",
      name: "Allow legacy server connect (insecure renegotiation)",
      flag: "--legacy-server-connect",
      type: "boolean",
      description:
        "Explicitly allow HTTPS connection to servers that do not support RFC 5746 secure renegotiation.",
    },
    {
      id: "no-check-certificates",
      name: "Suppress HTTPS certificate validation",
      flag: "--no-check-certificates",
      type: "boolean",
      description: "Suppress HTTPS certificate validation.",
    },
    {
      id: "prefer-insecure",
      name: "Prefer insecure connection for info (YouTube only)",
      flag: "--prefer-insecure",
      type: "boolean",
      description:
        "Use an unencrypted connection to retrieve information about the video (Currently supported only for YouTube).",
    },
    {
      id: "add-headers", // Corrected from add-header
      name: "Add custom HTTP headers",
      flag: "--add-headers",
      type: "string",
      description:
        'Specify a custom HTTP header and its value, separated by a colon ":". You can use this option multiple times.',
      placeholder: "FIELD:VALUE",
      example: "X-MyHeader:MyValue",
    },
    {
      id: "bidi-workaround",
      name: "Bidirectional text workaround",
      flag: "--bidi-workaround",
      type: "boolean",
      description:
        "Work around terminals that lack bidirectional text support. Requires bidiv or fribidi executable in PATH.",
    },
    {
      id: "sleep-requests",
      name: "Sleep between requests (data extraction)",
      flag: "--sleep-requests",
      type: "number",
      description:
        "Number of seconds to sleep between requests during data extraction.",
      placeholder: "SECONDS",
      min: 0,
    },
    {
      id: "sleep-interval",
      name: "Sleep interval before each download (Alias: --min-sleep-interval)",
      flag: "--sleep-interval",
      type: "number",
      description:
        "Number of seconds to sleep before each download. Minimum time if --max-sleep-interval is also used.",
      placeholder: "SECONDS",
      min: 0,
    },
    {
      id: "max-sleep-interval",
      name: "Maximum sleep interval",
      flag: "--max-sleep-interval",
      type: "number",
      description:
        "Maximum number of seconds to sleep. Can only be used along with --sleep-interval.",
      placeholder: "SECONDS",
      min: 0,
    },
    {
      id: "sleep-subtitles",
      name: "Sleep before subtitle download",
      flag: "--sleep-subtitles",
      type: "number",
      description: "Number of seconds to sleep before each subtitle download.",
      placeholder: "SECONDS",
      min: 0,
    },
  ],
  videoFormat: [
    // New category for video format options
    {
      id: "format",
      name: "Video format code (-f)",
      flag: "--format",
      type: "string",
      description:
        'Video format code, see "FORMAT SELECTION" for all the info.',
      placeholder: "FORMAT",
      example: "bestvideo[height<=1080]+bestaudio/best",
    },
    {
      id: "format-sort",
      name: "Format Sort Order (-S)",
      flag: "--format-sort",
      type: "string",
      description:
        'Sort the formats by the fields given, see "Sorting Formats" for more details.',
      placeholder: "SORTORDER",
      example: "res,fps,vcodec:vp9",
    },
    {
      id: "format-sort-force",
      name: "Force Format Sort (Alias: --S-force)",
      flag: "--format-sort-force",
      type: "boolean",
      description:
        'Force user specified sort order to have precedence over all fields, see "Sorting Formats" for more details.',
      incompatibleWith: ["no-format-sort-force"],
    },
    {
      id: "no-format-sort-force",
      name: "No Force Format Sort (default)",
      flag: "--no-format-sort-force",
      type: "boolean",
      description:
        "Some fields have precedence over the user specified sort order (default).",
      incompatibleWith: ["format-sort-force"],
    },
    {
      id: "video-multistreams",
      name: "Allow Video Multistreams",
      flag: "--video-multistreams",
      type: "boolean",
      description:
        "Allow multiple video streams to be merged into a single file.",
      incompatibleWith: ["no-video-multistreams"],
    },
    {
      id: "no-video-multistreams",
      name: "No Video Multistreams (default)",
      flag: "--no-video-multistreams",
      type: "boolean",
      description:
        "Only one video stream is downloaded for each output file (default).",
      incompatibleWith: ["video-multistreams"],
    },
    {
      id: "audio-multistreams",
      name: "Allow Audio Multistreams",
      flag: "--audio-multistreams",
      type: "boolean",
      description:
        "Allow multiple audio streams to be merged into a single file.",
      incompatibleWith: ["no-audio-multistreams"],
    },
    {
      id: "no-audio-multistreams",
      name: "No Audio Multistreams (default)",
      flag: "--no-audio-multistreams",
      type: "boolean",
      description:
        "Only one audio stream is downloaded for each output file (default).",
      incompatibleWith: ["audio-multistreams"],
    },
    {
      id: "prefer-free-formats",
      name: "Prefer free formats",
      flag: "--prefer-free-formats",
      type: "boolean",
      description:
        'Prefer video formats with free containers over non-free ones of same quality. Use with "-S ext" for strict preference.',
      incompatibleWith: ["no-prefer-free-formats"],
    },
    {
      id: "no-prefer-free-formats",
      name: "No prefer free formats (default)",
      flag: "--no-prefer-free-formats",
      type: "boolean",
      description:
        "Don't give any special preference to free containers (default).",
      incompatibleWith: ["prefer-free-formats"],
    },
    {
      id: "list-formats",
      name: "List available formats (-F)",
      flag: "--list-formats",
      type: "boolean",
      description:
        "List available formats of each video. Simulates unless --no-simulate is used.",
      infoCommand: true,
    },
    {
      id: "merge-output-format",
      name: "Merge output format",
      flag: "--merge-output-format",
      type: "string", // Was select, help implies string like "mp4/mkv"
      description:
        'Containers for merging, separated by "/" (e.g., "mp4/mkv"). Ignored if no merge needed. Supported: avi, flv, mkv, mov, mp4, webm.',
      placeholder: "FORMAT1/FORMAT2...",
      example: "mp4/mkv",
    },
    {
      id: "check-formats",
      name: "Check formats are downloadable",
      flag: "--check-formats",
      type: "boolean",
      description:
        "Make sure formats are selected only from those that are actually downloadable.",
      incompatibleWith: ["no-check-formats"],
    },
    {
      id: "check-all-formats",
      name: "Check all formats are downloadable",
      flag: "--check-all-formats",
      type: "boolean",
      description:
        "Check all formats for whether they are actually downloadable.",
      incompatibleWith: ["no-check-formats"], // Implies check-formats logic too
    },
    {
      id: "no-check-formats",
      name: "No check formats (default)",
      flag: "--no-check-formats",
      type: "boolean",
      description:
        "Do not check that the formats are actually downloadable (default).",
      incompatibleWith: ["check-formats", "check-all-formats"],
    },
  ],
  subtitle: [
    {
      id: "write-subs",
      name: "Write subtitle file",
      flag: "--write-subs",
      type: "boolean",
      description: "Write subtitle file.",
      incompatibleWith: ["no-write-subs"],
    },
    {
      id: "no-write-subs",
      name: "Do not write subtitle file (default)",
      flag: "--no-write-subs",
      type: "boolean",
      description: "Do not write subtitle file (default).",
      incompatibleWith: ["write-subs"],
    },
    {
      id: "write-auto-subs", // Corrected from write-auto-sub
      name: "Write auto-generated subtitle file (Alias: --write-automatic-subs)",
      flag: "--write-auto-subs",
      type: "boolean",
      description: "Write automatically generated subtitle file.",
      incompatibleWith: ["no-write-auto-subs"],
    },
    {
      id: "no-write-auto-subs", // Corrected from no-write-auto-sub
      name: "Do not write auto-generated subtitles (default, Alias: --no-write-automatic-subs)",
      flag: "--no-write-auto-subs",
      type: "boolean",
      description: "Do not write auto-generated subtitles (default).",
      incompatibleWith: ["write-auto-subs"],
    },
    {
      id: "list-subs",
      name: "List available subtitles",
      flag: "--list-subs",
      type: "boolean",
      description:
        "List available subtitles of each video. Simulates unless --no-simulate is used.",
      infoCommand: true,
    },
    {
      id: "sub-format",
      name: "Subtitle format",
      flag: "--sub-format",
      type: "string", // Help says "accepts formats preference separated by /"
      description:
        'Subtitle format; accepts formats preference separated by "/", e.g. "srt" or "ass/srt/best".',
      placeholder: "FORMAT", // e.g. srt or ass/srt/best
      example: "srt",
    },
    {
      id: "sub-langs",
      name: "Subtitle languages",
      flag: "--sub-langs",
      type: "string",
      description:
        'Languages of subtitles to download (regex or "all"), comma-separated (e.g., "en.*,ja"). Prefix with "-" to exclude (e.g., "all,-live_chat"). Use --list-subs for tags.',
      placeholder: "LANGS",
      example: "en,es,-de", // Example of excluding German
    },
  ],
  authentication: [
    {
      id: "username",
      name: "Username (-u)",
      flag: "--username",
      type: "string",
      description: "Login with this account ID.",
      placeholder: "USERNAME",
    },
    {
      id: "password",
      name: "Password (-p)",
      flag: "--password",
      type: "string",
      description:
        "Account password. If left out, yt-dlp will ask interactively.",
      placeholder: "PASSWORD",
    },
    {
      id: "twofactor",
      name: "Two-factor auth code (-2)",
      flag: "--twofactor",
      type: "string",
      description: "Two-factor authentication code.",
      placeholder: "TWOFACTOR",
    },
    {
      id: "netrc",
      name: "Use .netrc authentication data (-n)",
      flag: "--netrc",
      type: "boolean",
      description: "Use .netrc authentication data.",
    },
    {
      id: "netrc-location",
      name: "Netrc location",
      flag: "--netrc-location",
      type: "string",
      description:
        "Location of .netrc authentication data; path or containing directory. Defaults to ~/.netrc.",
      placeholder: "PATH",
      example: "~/.netrc",
    },
    {
      id: "netrc-cmd",
      name: "Netrc command",
      flag: "--netrc-cmd",
      type: "string",
      description:
        "Command to execute to get the credentials for an extractor.",
      placeholder: "NETRC_CMD",
    },
    {
      id: "video-password",
      name: "Video-specific password",
      flag: "--video-password",
      type: "string",
      description: "Video-specific password.",
      placeholder: "PASSWORD",
    },
    {
      id: "ap-mso",
      name: "Adobe Pass MSO (TV provider)",
      flag: "--ap-mso",
      type: "string",
      description:
        "Adobe Pass multiple-system operator (TV provider) identifier. Use --ap-list-mso for list.",
      placeholder: "MSO",
    },
    {
      id: "ap-username",
      name: "Adobe Pass username",
      flag: "--ap-username",
      type: "string",
      description: "Multiple-system operator account login.",
      placeholder: "USERNAME",
    },
    {
      id: "ap-password",
      name: "Adobe Pass password",
      flag: "--ap-password",
      type: "string",
      description:
        "Multiple-system operator account password. If left out, yt-dlp will ask interactively.",
      placeholder: "PASSWORD",
    },
    {
      id: "ap-list-mso",
      name: "List Adobe Pass MSOs",
      flag: "--ap-list-mso",
      type: "boolean",
      description: "List all supported multiple-system operators and exit.",
      requiresUrl: false,
      infoCommand: true,
    },
    {
      id: "client-certificate",
      name: "Client certificate file",
      flag: "--client-certificate",
      type: "string",
      description:
        "Path to client certificate file in PEM format. May include private key.",
      placeholder: "CERTFILE",
    },
    {
      id: "client-certificate-key",
      name: "Client certificate key file",
      flag: "--client-certificate-key",
      type: "string",
      description: "Path to private key file for client certificate.",
      placeholder: "KEYFILE",
    },
    {
      id: "client-certificate-password",
      name: "Client certificate password",
      flag: "--client-certificate-password",
      type: "string",
      description:
        "Password for client certificate private key, if encrypted. Asks interactively if not provided.",
      placeholder: "PASSWORD",
    },
  ],
  postProcessing: [
    {
      id: "extract-audio",
      name: "Extract audio (-x)",
      flag: "--extract-audio",
      type: "boolean",
      description:
        "Convert video files to audio-only files (requires ffmpeg/ffprobe).",
    },
    {
      id: "audio-format",
      name: "Audio format for -x",
      flag: "--audio-format",
      type: "string", // Was select, help indicates string with rules
      description:
        'Format for -x (best (default), aac, alac, flac, m4a, mp3, opus, vorbis, wav). Multiple rules like "--remux-video" allowed.',
      placeholder: "FORMAT",
      example: "mp3",
    },
    {
      id: "audio-quality",
      name: "Audio quality for -x",
      flag: "--audio-quality",
      type: "string", // Can be 0-10 or bitrate like 128K
      description:
        "FFmpeg audio quality for -x. 0 (best) to 10 (worst) for VBR, or bitrate like 128K (default 5).",
      placeholder: "QUALITY",
      example: "0", // or "192K"
    },
    {
      id: "remux-video",
      name: "Remux video format",
      flag: "--remux-video",
      type: "string", // Was select, help implies string
      description:
        'Remux video to another container if necessary (avi, flv, gif, mkv, mov, mp4, webm, aac, ...). Multiple rules: "aac>m4a/mov>mp4/mkv".',
      placeholder: "FORMAT",
      example: "mkv",
    },
    {
      id: "recode-video",
      name: "Re-encode video format",
      flag: "--recode-video",
      type: "string", // Was select, help implies string
      description:
        "Re-encode video to another format if necessary. Syntax and formats same as --remux-video.",
      placeholder: "FORMAT",
      example: "mp4",
    },
    {
      id: "postprocessor-args",
      name: "Post-processor arguments (Alias: --ppa)",
      flag: "--postprocessor-args",
      type: "string",
      description:
        'Arguments for postprocessors (NAME:ARGS). Supported PP: Merger, ModifyChapters, etc. Executables: AtomicParsley, FFmpeg, FFprobe. Use "PP+EXE:ARGS" or ffmpeg_i/_o modifiers. Multiple uses allowed.',
      placeholder: "NAME:ARGS",
      example: "Merger+ffmpeg_i1:-v quiet",
    },
    {
      id: "keep-video",
      name: "Keep intermediate video file (-k)",
      flag: "--keep-video",
      type: "boolean",
      description:
        "Keep the intermediate video file on disk after post-processing.",
      incompatibleWith: ["no-keep-video"],
    },
    {
      id: "no-keep-video",
      name: "Delete intermediate video file (default)",
      flag: "--no-keep-video",
      type: "boolean",
      description:
        "Delete the intermediate video file after post-processing (default).",
      incompatibleWith: ["keep-video"],
    },
    {
      id: "post-overwrites",
      name: "Overwrite post-processed files (default)",
      flag: "--post-overwrites",
      type: "boolean",
      description: "Overwrite post-processed files (default).",
      incompatibleWith: ["no-post-overwrites"],
    },
    {
      id: "no-post-overwrites",
      name: "Do not overwrite post-processed files",
      flag: "--no-post-overwrites",
      type: "boolean",
      description: "Do not overwrite post-processed files.",
      incompatibleWith: ["post-overwrites"],
    },
    {
      id: "embed-subs",
      name: "Embed subtitles",
      flag: "--embed-subs",
      type: "boolean",
      description:
        "Embed subtitles in the video (only for mp4, webm, mkv videos).",
      incompatibleWith: ["no-embed-subs"],
    },
    {
      id: "no-embed-subs",
      name: "Do not embed subtitles (default)",
      flag: "--no-embed-subs",
      type: "boolean",
      description: "Do not embed subtitles (default).",
      incompatibleWith: ["embed-subs"],
    },
    {
      id: "embed-thumbnail",
      name: "Embed thumbnail as cover art",
      flag: "--embed-thumbnail",
      type: "boolean",
      description: "Embed thumbnail in the video as cover art.",
      incompatibleWith: ["no-embed-thumbnail"],
    },
    {
      id: "no-embed-thumbnail",
      name: "Do not embed thumbnail (default)",
      flag: "--no-embed-thumbnail",
      type: "boolean",
      description: "Do not embed thumbnail (default).",
      incompatibleWith: ["embed-thumbnail"],
    },
    {
      id: "embed-metadata", // Was add-metadata
      name: "Embed metadata (Alias: --add-metadata)",
      flag: "--embed-metadata",
      type: "boolean",
      description:
        "Embed metadata to video. Also embeds chapters/infojson if present unless --no-embed-chapters/--no-embed-info-json.",
      incompatibleWith: ["no-embed-metadata"],
    },
    {
      id: "no-embed-metadata",
      name: "Do not embed metadata (default, Alias: --no-add-metadata)",
      flag: "--no-embed-metadata",
      type: "boolean",
      description: "Do not add metadata to file (default).",
      incompatibleWith: ["embed-metadata"],
    },
    {
      id: "embed-chapters",
      name: "Embed chapter markers (Alias: --add-chapters)",
      flag: "--embed-chapters",
      type: "boolean",
      description: "Add chapter markers to the video file.",
      incompatibleWith: ["no-embed-chapters"],
    },
    {
      id: "no-embed-chapters",
      name: "Do not embed chapter markers (default, Alias: --no-add-chapters)",
      flag: "--no-embed-chapters",
      type: "boolean",
      description: "Do not add chapter markers (default).",
      incompatibleWith: ["embed-chapters"],
    },
    {
      id: "embed-info-json",
      name: "Embed info.json (mkv/mka only)",
      flag: "--embed-info-json",
      type: "boolean",
      description:
        "Embed the infojson as an attachment to mkv/mka video files.",
      incompatibleWith: ["no-embed-info-json"],
    },
    {
      id: "no-embed-info-json",
      name: "Do not embed info.json (default)",
      flag: "--no-embed-info-json",
      type: "boolean",
      description:
        "Do not embed the infojson as an attachment to the video file (default).",
      incompatibleWith: ["embed-info-json"],
    },
    {
      id: "parse-metadata",
      name: "Parse metadata from other fields",
      flag: "--parse-metadata",
      type: "string",
      description:
        'Parse additional metadata (e.g. title/artist) from other fields. WHEN:FROM:TO. WHEN default: pre_process. See "MODIFYING METADATA".',
      placeholder: "[WHEN:]FROM:TO",
      example: "title:%(artist)s - %(title)s",
    },
    {
      id: "replace-in-metadata",
      name: "Replace text in metadata fields",
      flag: "--replace-in-metadata",
      type: "string",
      description:
        "Replace text in a metadata field using regex. [WHEN:]FIELDS REGEX REPLACE. WHEN default: pre_process. Multiple uses allowed.",
      placeholder: "[WHEN:]FIELDS REGEX REPLACE",
      example: "title artist 'Old Text' 'New Text'",
    },
    {
      id: "xattrs",
      name: "Write metadata to xattrs",
      flag: "--xattrs",
      type: "boolean",
      description:
        "Write metadata to the video file's xattrs (using Dublin Core and XDG standards).",
    },
    {
      id: "concat-playlist",
      name: "Concatenate playlist videos",
      flag: "--concat-playlist",
      type: "select",
      options: [
        { label: "Never", value: "never" },
        { label: "Always", value: "always" },
        { label: "Multi-video (default)", value: "multi_video" },
      ],
      description:
        'Concatenate videos: "never", "always", or "multi_video" (default; only when videos form single show). Files must have same codecs/streams. Use "pl_video:" prefix in --output.',
    },
    {
      id: "fixup",
      name: "Fixup policy for file faults",
      flag: "--fixup",
      type: "select",
      options: [
        { label: "Never", value: "never" },
        { label: "Warn", value: "warn" },
        { label: "Detect or Warn (default)", value: "detect_or_warn" },
        { label: "Force", value: "force" },
      ],
      description:
        'Automatically correct known file faults: "never", "warn", "detect_or_warn" (default; fix if can, else warn), "force".',
    },
    {
      id: "ffmpeg-location", // Moved from ffmpeg category
      name: "FFmpeg binary location",
      flag: "--ffmpeg-location",
      type: "string",
      description:
        "Location of the ffmpeg binary; either the path to the binary or its containing directory.",
      placeholder: "PATH",
      example: "/usr/bin/ffmpeg",
    },
    {
      id: "exec",
      name: "Execute command",
      flag: "--exec",
      type: "string",
      description:
        "Execute CMD. Optional WHEN: prefix (default: after_move). Output template syntax for args. If no fields passed, %(filepath,_filename|)q appended. Multiple uses.",
      placeholder: "[WHEN:]CMD",
      example: "after_move:echo {} was downloaded to %(filepath)q",
    },
    {
      id: "no-exec",
      name: "Remove previously defined --exec",
      flag: "--no-exec",
      type: "boolean",
      description: "Remove any previously defined --exec.",
    },
    {
      id: "convert-subs",
      name: "Convert subtitles format (Alias: --convert-subtitles)",
      flag: "--convert-subs",
      type: "string",
      description:
        'Convert subtitles to another format (ass, lrc, srt, vtt). Use "none" to disable (default).',
      placeholder: "FORMAT", // e.g., "srt" or "none"
      example: "srt",
    },
    {
      id: "split-chapters",
      name: "Split video by chapters",
      flag: "--split-chapters",
      type: "boolean",
      description:
        'Split video into multiple files based on internal chapters. Use "chapter:" prefix in --output.',
      incompatibleWith: ["no-split-chapters"],
    },
    {
      id: "no-split-chapters",
      name: "Do not split by chapters (default)",
      flag: "--no-split-chapters",
      type: "boolean",
      description: "Do not split video based on chapters (default).",
      incompatibleWith: ["split-chapters"],
    },
    {
      id: "remove-chapters",
      name: "Remove chapters by REGEX",
      flag: "--remove-chapters",
      type: "string",
      description:
        "Remove chapters whose title matches REGEX. Same syntax as --download-sections. Multiple uses allowed.",
      placeholder: "REGEX",
      example: "^Sponsor",
    },
    {
      id: "no-remove-chapters",
      name: "Do not remove chapters (default)",
      flag: "--no-remove-chapters",
      type: "boolean",
      description: "Do not remove any chapters from the file (default).",
      incompatibleWith: ["remove-chapters"],
    },
    {
      id: "force-keyframes-at-cuts",
      name: "Force keyframes at cuts",
      flag: "--force-keyframes-at-cuts",
      type: "boolean",
      description:
        "Force keyframes at cuts when downloading/splitting/removing sections. Slow (re-encode), but may reduce artifacts.",
      incompatibleWith: ["no-force-keyframes-at-cuts"],
    },
    {
      id: "no-force-keyframes-at-cuts",
      name: "No force keyframes at cuts (default)",
      flag: "--no-force-keyframes-at-cuts",
      type: "boolean",
      description:
        "Do not force keyframes around chapters when cutting/splitting (default).",
      incompatibleWith: ["force-keyframes-at-cuts"],
    },
    {
      id: "use-postprocessor",
      name: "Use plugin postprocessor",
      flag: "--use-postprocessor",
      type: "string",
      description:
        'Enable plugin postprocessors by NAME[:ARGS]. ARGS: NAME=VALUE;... "when" arg (pre_process, after_filter, etc.) determines invocation. Multiple uses.',
      placeholder: "NAME[:ARGS]",
      example: "MyPP:when=after_video;opt1=val1",
    },
  ],
  sponsorBlock: [
    {
      id: "sponsorblock-mark",
      name: "SponsorBlock mark categories",
      flag: "--sponsorblock-mark",
      type: "string",
      description:
        'SponsorBlock categories to create chapters for, comma-separated (sponsor, intro, all, ...). Prefix with "-" to exclude. E.g., "all,-preview". See wiki for categories.',
      placeholder: "CATS",
      example: "all,-preview",
    },
    {
      id: "sponsorblock-remove",
      name: "SponsorBlock remove categories",
      flag: "--sponsorblock-remove",
      type: "string",
      description:
        'SponsorBlock categories to remove, comma-separated. Remove takes precedence over mark. Default="all,-filler". poi_highlight, chapter not available for remove.',
      placeholder: "CATS",
      example: "sponsor,intro",
    },
    {
      id: "sponsorblock-chapter-title",
      name: "SponsorBlock chapter title template",
      flag: "--sponsorblock-chapter-title",
      type: "string",
      description:
        'Output template for SponsorBlock chapter titles. Fields: start_time, end_time, category, categories, name, category_names. Default: "[SponsorBlock]: %(category_names)l".',
      placeholder: "TEMPLATE",
      example: "%(category_names)l segment",
    },
    {
      id: "no-sponsorblock",
      name: "Disable SponsorBlock",
      flag: "--no-sponsorblock",
      type: "boolean",
      description:
        "Disable both --sponsorblock-mark and --sponsorblock-remove.",
    },
    {
      id: "sponsorblock-api",
      name: "SponsorBlock API URL",
      flag: "--sponsorblock-api",
      type: "string",
      description:
        "SponsorBlock API location (default: https://sponsor.ajay.app).",
      placeholder: "URL",
      example: "https://sponsor.ajay.app",
    },
  ],
  extractor: [
    {
      id: "extractor-retries",
      name: "Extractor retries",
      flag: "--extractor-retries",
      type: "string", // number or "infinite"
      description:
        'Number of retries for known extractor errors (default is 3), or "infinite".',
      placeholder: "RETRIES",
      example: "5",
    },
    {
      id: "allow-dynamic-mpd",
      name: "Allow dynamic DASH manifests (default, Alias: --no-ignore-dynamic-mpd)",
      flag: "--allow-dynamic-mpd",
      type: "boolean",
      description: "Process dynamic DASH manifests (default).",
      incompatibleWith: ["ignore-dynamic-mpd"],
    },
    {
      id: "ignore-dynamic-mpd",
      name: "Ignore dynamic DASH manifests (Alias: --no-allow-dynamic-mpd)",
      flag: "--ignore-dynamic-mpd",
      type: "boolean",
      description: "Do not process dynamic DASH manifests.",
      incompatibleWith: ["allow-dynamic-mpd"],
    },
    {
      id: "hls-split-discontinuity",
      name: "Split HLS at discontinuities",
      flag: "--hls-split-discontinuity",
      type: "boolean",
      description:
        "Split HLS playlists to different formats at discontinuities (e.g. ad breaks).",
      incompatibleWith: ["no-hls-split-discontinuity"],
    },
    {
      id: "no-hls-split-discontinuity",
      name: "No HLS split at discontinuities (default)",
      flag: "--no-hls-split-discontinuity",
      type: "boolean",
      description:
        "Do not split HLS playlists into different formats at discontinuities (default).",
      incompatibleWith: ["hls-split-discontinuity"],
    },
    {
      id: "extractor-args",
      name: "Extractor arguments",
      flag: "--extractor-args",
      type: "string",
      description:
        'Pass ARGS arguments to IE_KEY extractor. See "EXTRACTOR ARGUMENTS". Multiple uses allowed.',
      placeholder: "IE_KEY:ARGS",
      example: "youtube:player_client=android",
    },
  ],
};
