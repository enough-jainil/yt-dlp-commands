"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { toast } from "sonner"
import { commandData } from "@/lib/command-data"
import type { Command, CommandMode, CommandState, CommandValue, LocalSettings } from "../lib/types"
import { DEFAULT_SETTINGS } from "@/lib/constants"

export function useCommandGenerator() {
  // Main state
  const [mode, setMode] = useState<CommandMode>("url")
  const [url, setUrl] = useState("")
  const [selectedCommands, setSelectedCommands] = useState<CommandState>({})
  const [finalCommand, setFinalCommand] = useState("")
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("general")
  const [searchTerm, setSearchTerm] = useState("")

  const [localSettings, setLocalSettings] = useState<LocalSettings>(() => {
    const localStorageKey = "localSettings"

    // Check if we're in browser environment
    if (typeof window !== "undefined") {
      try {
        // Try to get saved settings
        const savedSettings = localStorage.getItem(localStorageKey)

        // If saved settings exist, parse and validate them
        if (savedSettings) {
          const parsedSettings = JSON.parse(savedSettings)

          // Merge parsed settings with default settings
          return {
            ...DEFAULT_SETTINGS,
            ...parsedSettings
          }
        }

        // If no saved settings, save default settings
        localStorage.setItem(localStorageKey, JSON.stringify(DEFAULT_SETTINGS))
      } catch (error) {
        console.error("Error loading settings:", error)
      }
    }

    // Return default settings
    return { ...DEFAULT_SETTINGS }
  })

  // Update local storage whenever settings change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("localSettings", JSON.stringify(localSettings))
    }
  }, [localSettings])



  // Search and filter commands
  const filteredCommands = useMemo(() => {
    if (!searchTerm.trim()) {
      return commandData
    }

    const searchLower = searchTerm.toLowerCase()
    const filtered: Record<string, Command[]> = {}

    Object.entries(commandData).forEach(([category, commands]) => {
      const matchedCommands = commands.filter(
        (cmd) =>
          cmd.name.toLowerCase().includes(searchLower) ||
          cmd.flag.toLowerCase().includes(searchLower) ||
          (cmd.description && cmd.description.toLowerCase().includes(searchLower)),
      )

      if (matchedCommands.length > 0) {
        filtered[category] = matchedCommands
      }
    })

    return filtered
  }, [searchTerm])

  // Memoize categories based on filtered commands
  const categories = useMemo(() => {
    return Object.keys(filteredCommands)
  }, [filteredCommands])

  // Find command by ID - memoized
  const findCommandById = useCallback((id: string): Command | null => {
    for (const category of Object.values(commandData)) {
      for (const command of category) {
        if (command.id === id) {
          return command
        }
      }
    }
    return null
  }, [])

  // Handle command selection
  const handleCommandChange = useCallback((commandId: string, value?: CommandValue) => {
    setSelectedCommands((prev) => {
      const newCommands = { ...prev }

      if (value === undefined || value === false || value === null) {
        delete newCommands[commandId]
      } else {
        newCommands[commandId] = value
      }

      return newCommands
    })
  }, [])

  const handleModeChange = (newMode: CommandMode) => {
    // Clear commands that aren't compatible with the new mode
    const newCommands = { ...selectedCommands }

    Object.keys(newCommands).forEach((commandId) => {
      const cmd = findCommandById(commandId)
      if (cmd) {
        if (
          (newMode === "url" && cmd.utilityOnly) ||
          (newMode === "utility" && cmd.requiresUrl) ||
          (newMode === "info" && !cmd.infoCommand)
        ) {
          delete newCommands[commandId]
        }
      }
    })

    setSelectedCommands(newCommands)
    setMode(newMode)

    // Clear URL when switching away from URL mode
    if (newMode !== "url") {
      setUrl("")
    }
  }

  // Validate commands for incompatibilities
  useEffect(() => {
    const errors: string[] = []
    const selectedCommandIds = Object.keys(selectedCommands)

    // Check for incompatible commands
    selectedCommandIds.forEach((cmdId) => {
      const command = findCommandById(cmdId)
      if (command && command.incompatibleWith) {
        command.incompatibleWith.forEach((incompatibleId) => {
          if (selectedCommandIds.includes(incompatibleId)) {
            const incompatibleCommand = findCommandById(incompatibleId)
            errors.push(`"${command.name}" is incompatible with "${incompatibleCommand?.name || incompatibleId}"`)
          }
        })
      }
    })

    // Check for URL requirement
    if (mode === "url" && !url.trim() && selectedCommandIds.length > 0) {
      const requiresUrl = selectedCommandIds.some((cmdId) => {
        const cmd = findCommandById(cmdId)
        return cmd && cmd.requiresUrl !== false
      })

      if (requiresUrl) {
        errors.push("URL is required for the selected commands")
      }
    }

    setValidationErrors(errors)

    if (!errors.length) {
      generateCommand()
    }
  }, [selectedCommands, url, mode, findCommandById])

  // Generate the command
  const generateCommand = useCallback(() => {
    if (validationErrors.length > 0) return;

    let command = localSettings.ytdlpPath;
    if (localSettings.downloadPath) selectedCommands["paths"] = localSettings.downloadPath
    if (localSettings.ffmpegPath) selectedCommands["ffmpeg-location"] = localSettings.ffmpegPath

    const selectedCommandIds = Object.keys(selectedCommands);
    const isWindows = navigator.platform.toLowerCase().includes("win");
    const isPowerShell = isWindows && window.navigator.userAgent.includes("PowerShell");

    // Mode-specific validation
    switch (mode) {
      case "url": {
        const requiresUrl = selectedCommandIds.some((id) => findCommandById(id)?.requiresUrl !== false);
        if (!url.trim() && requiresUrl) {
          toast.error("URL is required for the selected commands");
          return;
        }
        break;
      }
      case "utility": {
        const urlDependentCommands = selectedCommandIds.filter((id) => findCommandById(id)?.requiresUrl);
        if (urlDependentCommands.length > 0) {
          toast.error(
            `Cannot use URL-dependent commands in utility mode: ${urlDependentCommands
              .map((id) => findCommandById(id)?.name)
              .join(", ")}`
          );
          return;
        }
        break;
      }
      case "info": {
        const nonInfoCommands = selectedCommandIds.filter((id) => !findCommandById(id)?.infoCommand);
        if (nonInfoCommands.length > 0) {
          toast.error(
            `Cannot use non-info commands in info mode: ${nonInfoCommands
              .map((id) => findCommandById(id)?.name)
              .join(", ")}`
          );
          return;
        }
        break;
      }
    }

    // Add all selected commands
    Object.entries(selectedCommands).forEach(([commandId, value]) => {
      const commandInfo = findCommandById(commandId);
      if (!commandInfo) return;

      // Skip commands that don't match the current mode
      if (
        (mode === "url" && commandInfo.utilityOnly) ||
        (mode === "utility" && commandInfo.requiresUrl) ||
        (mode === "info" && !commandInfo.infoCommand)
      ) {
        return;
      }

      if (typeof value === "boolean" && value) {
        command += ` ${commandInfo.flag}`;
      } else if (value !== null && value !== undefined && value !== "") {
        const containsTemplateVars = typeof value === "string" && value.includes("%(");

        // ✅ PowerShell requires special escaping
        if (isPowerShell && containsTemplateVars) {
          command += ` ${commandInfo.flag} "${value.replace(/"/g, '""')}"`; // Escape quotes
        } else {
          command += ` ${commandInfo.flag} "${value}"`;
        }
      }
    });

    // Add URL if needed
    if (mode === "url" && url.trim()) {
      command += ` "${url}"`;
    }

    // ✅ Fix PowerShell output template issue
    if (isPowerShell && command.includes(" -o ")) {
      command = command.replace(/-o\s+([^'"].*?(?:%\([^)]+\)).*?)(?:\s|$)/, `-o "$1" `);
    }

    // ✅ Ensure no duplicate spaces (clean output)
    command = command.replace(/\s+/g, " ").trim();

    console.log("Generated Command:", command); // Debugging log

    // Set final command
    setFinalCommand(command);
  }, [validationErrors, mode, url, selectedCommands, findCommandById]);

  // Copy to clipboard
  const copyToClipboard = useCallback(() => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Modern browsers with clipboard API support
      navigator.clipboard
        .writeText(finalCommand)
        .then(() => {
          toast.success("Command copied to clipboard")
        })
        .catch((error) => {
          console.error("Failed to copy: ", error)
          toast.error("Failed to copy to clipboard")
        })
    } else {
      // Fallback for browsers without clipboard API support
      try {
        // Create temporary textarea element
        const textArea = document.createElement("textarea")
        textArea.value = finalCommand

        // Make it invisible but part of the document
        textArea.style.position = "fixed"
        textArea.style.opacity = "0"
        document.body.appendChild(textArea)

        // Select and copy the text
        textArea.focus()
        textArea.select()

        const successful = document.execCommand("copy")
        document.body.removeChild(textArea)

        if (successful) {
          toast.success("Command copied to clipboard")
        } else {
          toast.warning("Copy failed, please try again")
        }
      } catch (err) {
        console.error("Fallback copy failed: ", err)
        toast.error("Could not copy to clipboard")
      }
    }
  }, [finalCommand])

  // Clear all selections
  const clearSelections = useCallback(() => {
    setSelectedCommands({})
    setFinalCommand("")
    setUrl("")
    setSearchTerm("")
    setActiveCategory("general")
    toast.info("All selections cleared")
  }, [])

  // Apply template
  const applyTemplate = useCallback((template: CommandState) => {
    setSelectedCommands(template)
    toast.info("Template applied")
  }, [])

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
    copyToClipboard,
    findCommandById,
    localSettings,
    setLocalSettings
  }
}

