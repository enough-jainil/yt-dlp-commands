"use client";
import { Download, Info, Settings, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CommandMode, ModeConfig } from "../lib/types";

interface ModeSelectorProps {
  mode: CommandMode;
  onModeChange: (mode: CommandMode) => void;
}

const modeConfig: Record<CommandMode, ModeConfig> = {
  all: {
    icon: Terminal,
    label: "All",
    description: "All Command",
  },
  url: {
    icon: Download,
    label: "Download",
    description: "Media download",
  },
  utility: {
    icon: Settings,
    label: "Utility",
    description: "Update, version",
  },
  info: {
    icon: Info,
    label: "Info",
    description: "Formats, extractors",
  },
};

export function ModeSelector({ mode, onModeChange }: ModeSelectorProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 items-center rounded-md border border-input bg-background p-1 text-muted-foreground shadow-sm">
      {Object.entries(modeConfig).map(([key, config]) => {
        const Icon = config.icon;
        return (
          <button
            key={key}
            onClick={() => onModeChange(key as CommandMode)}
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              mode === key
                ? "bg-primary text-primary-foreground shadow-sm"
                : "hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4 mr-2" />
            <span>{config.label}</span>
            <span className="sr-only md:not-sr-only md:ml-1.5 text-xs opacity-70">
              ({config.description})
            </span>
          </button>
        );
      })}
    </div>
  );
}
