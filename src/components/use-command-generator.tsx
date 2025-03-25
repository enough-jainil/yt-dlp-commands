"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { toast } from "sonner"
import { commandData } from "@/lib/command-data"
import type { Command, CommandMode, CommandState, CommandValue } from "./types"

export function useCommandGenerator() {
  // Main state
  const [mode, setMode] = useState<CommandMode>("url")
  const [url, setUrl] = useState("")
  const [selectedCommands, setSelectedCommands] = useState<CommandState>({})
  const [finalCommand, setFinalCommand] = useState("")
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("general")
  const [searchTerm, setSearchTerm] = useState("")

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
    let command = "yt-dlp"
    const selectedCommandIds = Object.keys(selectedCommands)
    const isPowerShell = navigator.platform.toLowerCase().includes("win")

    if (validationErrors.length > 0) {
      return
    }

    // Mode-specific validation
    switch (mode) {
      case "url":
        // In URL mode, validate URL is present when required
        if (
          !url.trim() &&
          selectedCommandIds.some((id) => {
            const cmd = findCommandById(id)
            return cmd && cmd.requiresUrl !== false
          })
        ) {
          toast.error("URL is required for the selected commands")
          return
        }
        break

      case "utility":
        // In utility mode, ensure no URL-dependent commands are selected
        const urlDependentCommands = selectedCommandIds.filter((id) => {
          const cmd = findCommandById(id)
          return cmd && cmd.requiresUrl
        })

        if (urlDependentCommands.length > 0) {
          toast.error(
            `Cannot use URL-dependent commands in utility mode: ${urlDependentCommands
              .map((id) => findCommandById(id)?.name)
              .join(", ")}`,
          )
          return
        }
        break

      case "info":
        // In info mode, ensure only info commands are selected
        const nonInfoCommands = selectedCommandIds.filter((id) => {
          const cmd = findCommandById(id)
          return cmd && !cmd.infoCommand
        })

        if (nonInfoCommands.length > 0) {
          toast.error(
            `Cannot use non-info commands in info mode: ${nonInfoCommands
              .map((id) => findCommandById(id)?.name)
              .join(", ")}`,
          )
          return
        }
        break
    }

    // Add all selected commands with their values
    Object.entries(selectedCommands).forEach(([commandId, value]) => {
      const commandInfo = findCommandById(commandId)
      if (!commandInfo) return

      // Skip commands that don't match the current mode
      if (
        (mode === "url" && commandInfo.utilityOnly) ||
        (mode === "utility" && commandInfo.requiresUrl) ||
        (mode === "info" && !commandInfo.infoCommand)
      ) {
        return
      }

      if (typeof value === "boolean" && value) {
        command += ` ${commandInfo.flag}`
      } else if (value !== null && value !== undefined && value !== "") {
        const containsTemplateVars = typeof value === "string" && value.includes("%(")

        if (isPowerShell && containsTemplateVars) {
          command += ` ${commandInfo.flag} '${value}'`
        } else {
          command += ` ${commandInfo.flag} ${value}`
        }
      }
    })

    // Add URL only in URL mode
    if (mode === "url" && url.trim()) {
      command += ` "${url}"`
    }

    // PowerShell-specific output template formatting
    if (isPowerShell && command.includes(" -o ")) {
      const outputMatch = command.match(/-o\s+([^'"].*?(?:%$$[^)]+$$).*?)(?:\s|$)/)
      if (outputMatch?.[1]) {
        command = command.replace(/-o\s+([^'"].*?(?:%$$[^)]+$$).*?)(?:\s|$)/, `-o '${outputMatch[1]}' `)
      }
    }

    setFinalCommand(command)
  }, [validationErrors, mode, url, selectedCommands, findCommandById])

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
  }
}

