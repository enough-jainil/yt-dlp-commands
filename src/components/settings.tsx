import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useCommandGenerator } from "./use-command-generator";
import type { LocalSettings } from "../lib/types";
import { DEFAULT_SETTINGS } from "@/lib/constants";
import { toast } from "sonner";

const SettingsPage = () => {
  const { localSettings, setLocalSettings } = useCommandGenerator();
  const [path, setPath] = useState<LocalSettings>(localSettings);

  const handleSave = () => {
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
      localStorage.removeItem("localSettings");
      localStorage.setItem("localSettings", JSON.stringify(DEFAULT_SETTINGS));
      window.location.reload();
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Local Settings</CardTitle>
        <CardDescription>Configure paths for yt-dlp, FFmpeg, and downloads.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <label className="font-medium">yt-dlp Path</label>
          <Input 
            placeholder="Default: yt-dlp" 
            value={path.ytdlpPath} 
            onChange={(e) => setPath({ ...path, ytdlpPath: e.target.value })} 
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">FFmpeg Path</label>
          <Input 
            placeholder="Leave blank for system default" 
            value={path.ffmpegPath || ""} 
            onChange={(e) => setPath({ ...path, ffmpegPath: e.target.value })} 
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Download Path</label>
          <Input 
            placeholder="Select a Folder Location" 
            value={path.downloadPath || ""} 
            onChange={(e) => setPath({ ...path, downloadPath: e.target.value })} 
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button onClick={handleSave} className="w-full">
            Save Settings
          </Button>
          <Button onClick={handleReset} variant="destructive" className="w-full">
            Reset Settings
          </Button>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Configuration Tips</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• <b>yt-dlp Path:</b> Default is system yt-dlp</p>
            <p>• <b>FFmpeg Path:</b> Leave blank for system default</p>
            <p>• <b>Specify full paths</b> if not in system PATH</p>
            <p>• Manually enter the absolute path to the executable or directory</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
