import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type CommandMode = "all" | "url" | "utility" | "info";
export type CommandDataType =
  | "boolean"
  | "string"
  | "number"
  | "select"
  | "file";
export type CommandValue = boolean | string | number | undefined;

export interface CommandState {
  [key: string]: CommandValue;
}

export interface Command {
  id: string;
  name: string;
  flag: string;
  type: CommandDataType;
  description?: string;
  placeholder?: string;
  example?: string;
  incompatibleWith?: string[];
  requiresUrl?: boolean;
  utilityOnly?: boolean;
  infoCommand?: boolean;
  min?: number;
  max?: number;
  options?: { label: string; value: string }[];
}

export interface ModeConfig {
  icon: LucideIcon;
  label: string;
  description: string;
}

export interface QuickTemplate {
  name: string;
  icon: ReactNode;
  commands: CommandState;
}

export interface PresetAlias {
  name: string;
  description: string;
  flags: string[];
}

export interface LocalSettings {
  ytdlpPath: string;
  ffmpegPath?: string;
  downloadPath?: string;
}
