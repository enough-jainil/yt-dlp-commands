"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { CommandState, CommandValue } from "./types"
import { useCommandGenerator } from "./use-command-generator"

interface CommandSummaryProps {
  selectedCommands: CommandState
  handleCommandChange: (commandId: string, value?: CommandValue) => void
  clearSelections: () => void
}

export function CommandSummary({ selectedCommands, handleCommandChange, clearSelections }: CommandSummaryProps) {
  const { findCommandById } = useCommandGenerator()

  const renderCommandSummary = () => {
    if (Object.keys(selectedCommands).length === 0) {
      return <div className="text-center py-4 text-muted-foreground">No commands selected</div>
    }

    // Group commands by category
    const commandsByCategory: Record<string, { command: ReturnType<typeof findCommandById>; value: CommandValue }[]> =
      {}

    Object.entries(selectedCommands).forEach(([cmdId, value]) => {
      const command = findCommandById(cmdId)
      if (!command) return

      // Find category
      let category = "other"

      // Search through commandData to find the category
      for (const [cat, commands] of Object.entries(commandData)) {
        if (commands.some((cmd) => cmd.id === cmdId)) {
          category = cat
          break
        }
      }

      if (!commandsByCategory[category]) {
        commandsByCategory[category] = []
      }

      commandsByCategory[category].push({ command, value })
    })

    return (
      <div className="space-y-4">
        {Object.entries(commandsByCategory).map(([category, commands]) => (
          <div key={category} className="space-y-2">
            <h4 className="text-sm font-medium capitalize">{category}</h4>
            <div className="space-y-2">
              {commands.map(
                ({ command, value }) =>
                  command && (
                    <div key={command.id} className="flex items-center justify-between bg-muted p-1.5 rounded-md">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center flex-wrap gap-1">
                          <Badge variant="outline" className="px-1 py-0 text-xs">
                            {command.flag}
                          </Badge>
                          <span className="text-xs truncate">{command.name}</span>
                        </div>
                        {value !== true && (
                          <div className="text-xs text-muted-foreground truncate font-mono">{value}</div>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-5 w-5"
                        onClick={() => handleCommandChange(command.id, undefined)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ),
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-2 pt-3 px-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm">Command Summary</CardTitle>
          {Object.keys(selectedCommands).length > 0 && (
            <Button variant="outline" size="sm" className="h-7 px-2" onClick={clearSelections}>
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0 px-2 pb-2">
        <ScrollArea className="h-[180px] pr-2">{renderCommandSummary()}</ScrollArea>
      </CardContent>
    </Card>
  )
}

// Import commandData to find categories
import { commandData } from "@/lib/command-data"

