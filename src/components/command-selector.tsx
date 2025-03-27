"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Command, CommandMode, CommandState, CommandValue } from "../lib/types"
import { CommandInput } from "./command-input"

interface CommandSelectorProps {
  filteredCommands: Record<string, Command[]>
  activeCategory: string
  setActiveCategory: (category: string) => void
  categories: string[]
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedCommands: CommandState
  handleCommandChange: (commandId: string, value?: CommandValue) => void
  mode: CommandMode
}

export function CommandSelector({
  filteredCommands,
  activeCategory,
  setActiveCategory,
  categories,
  searchTerm,
  setSearchTerm,
  selectedCommands,
  handleCommandChange,
  mode,
}: CommandSelectorProps) {
  const CommandList = React.useMemo(() => {
    if (!filteredCommands[activeCategory]) return null

    const filteredCmds = filteredCommands[activeCategory].filter((cmd) => {
      if (mode === "url" && cmd.utilityOnly) return false
      if (mode === "utility" && cmd.requiresUrl) return false
      if (mode === "info" && !cmd.infoCommand) return false
      return true
    })

    return (
      <div className="space-y-1">
        {filteredCmds.map((command) => (
          <CommandInput
            key={command.id}
            command={command}
            value={selectedCommands[command.id]}
            onChange={(value) => handleCommandChange(command.id, value)}
          />
        ))}
      </div>
    )
  }, [filteredCommands, activeCategory, mode, selectedCommands, handleCommandChange])

  return (
    <Card>
      <CardHeader className="pb-2 pt-3 px-3">
        <CardTitle>Command Options</CardTitle>
        <CardDescription>Select options to build your yt-dlp command</CardDescription>
        <div className="mt-2">
          <Input
            placeholder="Search commands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
      </CardHeader>
      <CardContent className="p-2">
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        <ScrollArea className="h-[600px] pr-1">{CommandList}</ScrollArea>
      </CardContent>
    </Card>
  )
}

