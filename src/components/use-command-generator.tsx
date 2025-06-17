"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { toast } from "sonner";
import { commandData } from "@/lib/command-data";
import type {
  Command,
  CommandMode,
  CommandState,
  CommandValue,
  LocalSettings,
} from "../lib/types";
import { DEFAULT_SETTINGS } from "@/lib/constants";

export function useCommandGenerator() {
  // Main state
  const [mode, setMode] = useState<CommandMode>("all");
  const [url, setUrl] = useState("");
  const [selectedCommands, setSelectedCommands] = useState<CommandState>({});
  const [finalCommand, setFinalCommand] = useState("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("general");
  const [searchTerm, setSearchTerm] = useState("");

  const [localSettings, setLocalSettings] = useState<LocalSettings>(() => {
    const localStorageKey = "localSettings_v1";
    if (typeof window !== "undefined") {
      try {
        const savedSettings = localStorage.getItem(localStorageKey);
        if (savedSettings) {
          const parsedSettings = JSON.parse(savedSettings);
          // Deep merge to handle nested objects in DEFAULT_SETTINGS if any
          return {
            ...DEFAULT_SETTINGS,
            ...parsedSettings,
          };
        }
        localStorage.setItem(localStorageKey, JSON.stringify(DEFAULT_SETTINGS));
      } catch (error) {
        console.error("Error loading/saving settings:", error);
      }
    }
    return { ...DEFAULT_SETTINGS };
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("localSettings_v1", JSON.stringify(localSettings));
      } catch (error) {
        console.error("Error saving settings:", error);
      }
    }
  }, [localSettings]);

  const filteredCommands = useMemo(() => {
    if (!searchTerm.trim()) {
      return commandData;
    }
    const searchLower = searchTerm.toLowerCase();
    const filtered: Record<string, Command[]> = {};
    Object.entries(commandData).forEach(([category, commands]) => {
      const matchedCommands = commands.filter(
        (cmd) =>
          cmd.name.toLowerCase().includes(searchLower) ||
          cmd.flag.toLowerCase().includes(searchLower) ||
          (cmd.description &&
            cmd.description.toLowerCase().includes(searchLower))
      );
      if (matchedCommands.length > 0) {
        filtered[category] = matchedCommands;
      }
    });
    return filtered;
  }, [searchTerm]);

  const categories = useMemo(() => {
    return Object.keys(filteredCommands);
  }, [filteredCommands]);

  const findCommandById = useCallback((id: string): Command | null => {
    for (const category of Object.values(commandData)) {
      for (const command of category) {
        if (command.id === id) {
          return command;
        }
      }
    }
    return null;
  }, []); // commandData is constant, so no dependency needed

  const handleCommandChange = useCallback(
    (commandId: string, value?: CommandValue) => {
      setSelectedCommands((prev) => {
        const newCommands = { ...prev };
        const commandInfo = findCommandById(commandId);

        if (
          value === undefined ||
          value === false ||
          value === null ||
          (typeof value === "string" && value.trim() === "")
        ) {
          delete newCommands[commandId];
        } else {
          newCommands[commandId] = value;
        }

        // Handle incompatibilities proactively
        if (
          commandInfo &&
          commandInfo.incompatibleWith &&
          newCommands[commandId]
        ) {
          commandInfo.incompatibleWith.forEach((incompatibleId) => {
            if (newCommands[incompatibleId]) {
              delete newCommands[incompatibleId];
              const incompatibleCmd = findCommandById(incompatibleId);
              toast.info(
                `Deselected "${
                  incompatibleCmd?.name || incompatibleId
                }" due to incompatibility with "${commandInfo.name}".`
              );
            }
          });
        }
        return newCommands;
      });
    },
    [findCommandById]
  );

  const handleModeChange = useCallback(
    (newMode: CommandMode) => {
      setSelectedCommands((prevSelected) => {
        const newSelected = { ...prevSelected };
        Object.keys(newSelected).forEach((commandId) => {
          const cmd = findCommandById(commandId);
          if (cmd) {
            if (
              (newMode === "url" && cmd.utilityOnly === true) ||
              (newMode === "utility" && cmd.requiresUrl === true) ||
              (newMode === "info" && !cmd.infoCommand)
            ) {
              delete newSelected[commandId];
            }
          }
        });
        return newSelected;
      });

      setMode(newMode);
      // Only clear URL if switching away from modes that use URL
      if (newMode === "utility") {
        setUrl("");
      }
    },
    [findCommandById]
  );

  // Validation Logic
  useEffect(() => {
    const errors: string[] = [];
    const selectedCommandIds = Object.keys(selectedCommands);

    // 1. Check for incompatible commands (already handled by handleCommandChange for pro-active deselection, but good for final check)
    selectedCommandIds.forEach((cmdId) => {
      const command = findCommandById(cmdId);
      if (command && command.incompatibleWith) {
        command.incompatibleWith.forEach((incompatibleId) => {
          if (selectedCommandIds.includes(incompatibleId)) {
            const incompatibleCommand = findCommandById(incompatibleId);
            errors.push(
              `"${command.name}" is incompatible with "${
                incompatibleCommand?.name || incompatibleId
              }"`
            );
          }
        });
      }
    });

    const hasCommandsThatExplicitlyNeedUrl = selectedCommandIds.some((id) => {
      const cmd = findCommandById(id);
      return cmd && cmd.requiresUrl === true;
    });

    const hasUtilityOnlyCommands = selectedCommandIds.some((id) => {
      const cmd = findCommandById(id);
      return cmd && cmd.utilityOnly === true;
    });

    const hasNonInfoCommands = selectedCommandIds.some((id) => {
      const cmd = findCommandById(id);
      return cmd && !cmd.infoCommand;
    });

    // 2. Mode-specific validation
    switch (mode) {
      case "url":
        if (hasUtilityOnlyCommands) {
          errors.push("Utility-only commands cannot be used in URL mode.");
        }
        // A URL is generally expected if any non-utility command is selected.
        const anyNonUtilityCommandSelected = selectedCommandIds.some((id) => {
          const cmd = findCommandById(id);
          return cmd && cmd.utilityOnly !== true;
        });
        if (
          !url.trim() &&
          selectedCommandIds.length > 0 &&
          anyNonUtilityCommandSelected
        ) {
          errors.push("URL is required for the selected commands in URL mode.");
        }
        break;
      case "utility":
        if (hasCommandsThatExplicitlyNeedUrl) {
          errors.push(
            "Commands that require a URL cannot be used in utility mode."
          );
        }
        if (url.trim()) {
          errors.push(
            "URL should not be provided in utility mode (it will be ignored)."
          );
        }
        break;
      case "info":
        if (hasNonInfoCommands) {
          errors.push("Only info commands can be used in info mode.");
        }
        // URL might be valid for some info commands (e.g., --list-formats URL)
        // No specific error if URL is present unless a specific info command forbids it
        break;
      case "all":
        // In "all" mode, we are more permissive and allow all combinations
        // Only validate critical requirements
        if (hasCommandsThatExplicitlyNeedUrl && !url.trim()) {
          errors.push(
            "URL is required because at least one selected command explicitly needs it."
          );
        }
        // Allow mixing of all command types in "all" mode
        break;
    }
    setValidationErrors(errors);
  }, [selectedCommands, url, mode, findCommandById]);

  // Command Generation Logic
  const generateCommand = useCallback(() => {
    let commandStr = localSettings.ytdlpPath || "yt-dlp"; // Default to yt-dlp if path not set

    // Create a temporary commands object to include local settings without mutating state
    // These are applied *before* other selected commands
    const commandsToProcess: CommandState = {};
    if (localSettings.downloadPath) {
      commandsToProcess["paths"] = localSettings.downloadPath;
    }
    if (localSettings.ffmpegPath) {
      commandsToProcess["ffmpeg-location"] = localSettings.ffmpegPath;
    }
    // Merge with user-selected commands, user selections take precedence if keys overlap
    // (though 'paths' and 'ffmpeg-location' are unique enough this shouldn't be an issue)
    Object.assign(commandsToProcess, selectedCommands);

    const isWindows =
      typeof window !== "undefined" &&
      typeof navigator !== "undefined" &&
      navigator.platform.toLowerCase().includes("win");
    const isPowerShell =
      typeof window !== "undefined" &&
      typeof navigator !== "undefined" &&
      isWindows &&
      navigator.userAgent.includes("PowerShell");

    Object.entries(commandsToProcess).forEach(([commandId, value]) => {
      const commandInfo = findCommandById(commandId);
      if (!commandInfo) return;

      // Mode-specific filtering for command inclusion (stricter for non-"all" modes)
      if (mode === "url" && commandInfo.utilityOnly === true) {
        return;
      }
      if (mode === "utility" && commandInfo.requiresUrl === true) {
        return;
      }
      if (mode === "info" && !commandInfo.infoCommand) {
        return;
      }
      // "all" mode includes all commands regardless of their restrictions

      if (typeof value === "boolean" && value) {
        commandStr += ` ${commandInfo.flag}`;
      } else if (
        value !== null &&
        value !== undefined &&
        value !== "" &&
        typeof value !== "boolean"
      ) {
        // Ensure value is treated as string for processing quotes and templates
        const valueStr = String(value);
        const containsTemplateVars = valueStr.includes("%(");
        let processedValue = valueStr;

        // Basic PowerShell quote escaping for values containing template variables
        if (isPowerShell && containsTemplateVars && valueStr.includes('"')) {
          processedValue = valueStr.replace(/"/g, '""');
        }

        // Always quote string/number values for safety, unless it's a special case
        // that should not be quoted (rare for yt-dlp flags that take values).
        commandStr += ` ${commandInfo.flag} "${processedValue}"`;
      }
    });

    // Add URL intelligently based on mode and selected commands
    const shouldAddUrl =
      url.trim() &&
      (mode === "url" ||
        mode === "all" || // Always consider URL in "all" mode if provided
        (mode === "info" && Object.keys(selectedCommands).length > 0)); // Add URL for info mode if commands are selected
    // as some info commands take a URL.

    if (shouldAddUrl) {
      commandStr += ` "${url.trim()}"`;
    }

    // PowerShell specific fix for -o with template variables
    if (isPowerShell && commandStr.includes(" -o ")) {
      // This regex tries to find -o followed by an unquoted value containing %(...)
      // and quotes it. It's a bit simplistic and might need refinement for complex cases.
      commandStr = commandStr.replace(
        /-o\s+([^"'].*?%\(.*?\).*?)(?=\s|$)/g,
        (match, p1) => `-o "${p1.replace(/"/g, '""')}"`
      );
    }

    commandStr = commandStr.replace(/\s+/g, " ").trim();
    setFinalCommand(commandStr);
  }, [
    selectedCommands,
    url,
    mode,
    findCommandById,
    localSettings.ytdlpPath,
    localSettings.downloadPath,
    localSettings.ffmpegPath,
  ]);

  // Effect to trigger command generation when relevant states change and no errors
  useEffect(() => {
    if (validationErrors.length === 0) {
      generateCommand();
    } else {
      setFinalCommand(""); // Clear command if there are validation errors
    }
  }, [validationErrors, selectedCommands, url, mode, generateCommand]);

  const copyToClipboard = useCallback(() => {
    if (!finalCommand) {
      toast.error("Nothing to copy.");
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(finalCommand)
        .then(() => {
          toast.success("Command copied to clipboard!");
        })
        .catch((error) => {
          console.error("Failed to copy: ", error);
          toast.error("Failed to copy. See console for details.");
        });
    } else {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = finalCommand;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand("copy");
        if (successful) {
          toast.success("Command copied (fallback method)!");
        } else {
          toast.error("Fallback copy failed.");
        }
      } catch (err) {
        console.error("Fallback copy error: ", err);
        toast.error("Could not copy. See console.");
      }
      document.body.removeChild(textArea);
    }
  }, [finalCommand]);

  const clearSelections = useCallback(() => {
    setSelectedCommands({});
    // setFinalCommand(""); // This will be cleared by the useEffect watching validationErrors
    setUrl("");
    setSearchTerm("");
    setActiveCategory("general"); // Or whatever your default is
    // setMode("all"); // Optionally reset mode
    toast.info("Selections cleared.");
  }, []);

  const applyTemplate = useCallback(
    (template: CommandState) => {
      // Before applying, clear incompatible commands from the template based on the current mode
      const newTemplateState: CommandState = { ...template };
      Object.keys(newTemplateState).forEach((commandId) => {
        const cmd = findCommandById(commandId);
        if (cmd) {
          if (
            (mode === "url" && cmd.utilityOnly === true) ||
            (mode === "utility" && cmd.requiresUrl === true) ||
            (mode === "info" && !cmd.infoCommand)
            // No filtering for "all" mode - allow all commands
          ) {
            delete newTemplateState[commandId];
          }
        }
      });
      setSelectedCommands(newTemplateState);
      toast.success("Template applied!");
    },
    [mode, findCommandById]
  );

  const applyPreset = useCallback(
    (commands: Record<string, string | boolean>) => {
      // Convert preset commands to CommandState format
      const presetState: CommandState = {};
      Object.entries(commands).forEach(([key, value]) => {
        presetState[key] = value;
      });

      // Use the existing applyTemplate function to handle mode filtering and application
      applyTemplate(presetState);
    },
    [applyTemplate]
  );

  return {
    mode,
    url,
    setUrl,
    selectedCommands,
    finalCommand,
    validationErrors,
    activeCategory,
    setActiveCategory,
    searchTerm,
    setSearchTerm,
    filteredCommands,
    categories,
    handleCommandChange,
    handleModeChange,
    clearSelections,
    applyTemplate,
    applyPreset,
    copyToClipboard,
    findCommandById,
    localSettings,
    setLocalSettings,
  };
}
