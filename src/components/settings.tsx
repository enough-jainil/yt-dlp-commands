import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useCommandGenerator } from "./use-command-generator";
import type { LocalSettings } from "../lib/types";
import { DEFAULT_SETTINGS } from "@/lib/constants";
import { toast } from "sonner";
import { AlertCircle } from "lucide-react";

const SettingsPage = () => {
  const { localSettings, setLocalSettings } = useCommandGenerator();
  const [path, setPath] = useState<LocalSettings>(localSettings);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validation functions
  const validatePath = (pathValue: string, fieldName: string): string => {
    if (!pathValue.trim()) return "";

    // Basic path validation
    const invalidChars = /[<>:"|?*]/;
    if (invalidChars.test(pathValue)) {
      return `${fieldName} contains invalid characters`;
    }

    return "";
  };

  const handleSave = () => {
    // Validate all inputs
    const newErrors: Record<string, string> = {};

    if (path.ytdlpPath) {
      const ytdlpError = validatePath(path.ytdlpPath, "YT-DLP path");
      if (ytdlpError) newErrors.ytdlpPath = ytdlpError;
    }

    if (path.ffmpegPath) {
      const ffmpegError = validatePath(path.ffmpegPath, "FFmpeg path");
      if (ffmpegError) newErrors.ffmpegPath = ffmpegError;
    }

    if (path.downloadPath) {
      const downloadError = validatePath(path.downloadPath, "Download path");
      if (downloadError) newErrors.downloadPath = downloadError;
    }

    setErrors(newErrors);

    // If there are validation errors, don't save
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix validation errors before saving");
      return;
    }

    const updatedSettings: LocalSettings = {
      ytdlpPath: path.ytdlpPath || "yt-dlp",
      ffmpegPath: path.ffmpegPath || undefined,
      downloadPath: path.downloadPath || undefined,
    };
    setLocalSettings(updatedSettings);
    toast.success("Settings saved successfully");
    window.location.reload();
  };

  const handleReset = () => {
    setLocalSettings({ ...DEFAULT_SETTINGS });
    toast.info("Settings reset to default");
    if (typeof window !== "undefined") {
      localStorage.removeItem("localSettings_v1");
      localStorage.setItem(
        "localSettings_v1",
        JSON.stringify(DEFAULT_SETTINGS)
      );
      window.location.reload();
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Local Settings</CardTitle>
        <CardDescription>
          Configure paths for yt-dlp, FFmpeg, and downloads.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="ytdlp-path" className="font-medium">
            yt-dlp Path
          </Label>
          <Input
            id="ytdlp-path"
            placeholder="Default: yt-dlp"
            value={path.ytdlpPath}
            onChange={(e) => setPath({ ...path, ytdlpPath: e.target.value })}
            aria-describedby={errors.ytdlpPath ? "ytdlp-error" : undefined}
          />
          {errors.ytdlpPath && (
            <div
              id="ytdlp-error"
              className="flex items-center text-sm text-red-600"
            >
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.ytdlpPath}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="ffmpeg-path" className="font-medium">
            FFmpeg Path
          </Label>
          <Input
            id="ffmpeg-path"
            placeholder="Leave blank for system default"
            value={path.ffmpegPath || ""}
            onChange={(e) => setPath({ ...path, ffmpegPath: e.target.value })}
            aria-describedby={errors.ffmpegPath ? "ffmpeg-error" : undefined}
          />
          {errors.ffmpegPath && (
            <div
              id="ffmpeg-error"
              className="flex items-center text-sm text-red-600"
            >
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.ffmpegPath}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="download-path" className="font-medium">
            Download Path
          </Label>
          <Input
            id="download-path"
            placeholder="Select a Folder Location"
            value={path.downloadPath || ""}
            onChange={(e) => setPath({ ...path, downloadPath: e.target.value })}
            aria-describedby={
              errors.downloadPath ? "download-error" : undefined
            }
          />
          {errors.downloadPath && (
            <div
              id="download-error"
              className="flex items-center text-sm text-red-600"
            >
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.downloadPath}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button onClick={handleSave} className="w-full">
            Save Settings
          </Button>
          <Button
            onClick={handleReset}
            variant="destructive"
            className="w-full"
          >
            Reset Settings
          </Button>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Configuration Tips</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              • <b>yt-dlp Path:</b> Default is system yt-dlp
            </p>
            <p>
              • <b>FFmpeg Path:</b> Leave blank for system default
            </p>
            <p>
              • <b>Specify full paths</b> if not in system PATH
            </p>
            <p>
              • Manually enter the absolute path to the executable or directory
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
