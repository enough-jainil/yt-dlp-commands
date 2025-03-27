"use client"

import React, { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Command, CommandValue } from "@/lib/types"
import { useCommandGenerator } from "./use-command-generator"

interface CommandInputProps {
  command: Command
  value: CommandValue
  onChange: (value: CommandValue) => void
}

export function CommandInput({ command, value, onChange }: CommandInputProps) {
  const { findCommandById } = useCommandGenerator()

  // Common header section for all command types
  const CommandHeader = (
    <Label htmlFor={command.id} className="cursor-pointer flex items-center justify-between">
      <div className="flex items-center flex-wrap gap-2">
        <span className="font-bold">{command.name}</span>
        <Badge variant="outline" className="text-xs">
          {command.id}
        </Badge>
      </div>
      {value !== undefined && <CheckCircle2 className="h-4 w-4 text-green-500" />}
    </Label>
  )

  // Description section
  const CommandDescription = command.description && <p className="text-xs mt-1">{command.description}</p>

  // Incompatibility warnings
  const IncompatibilityInfo = command.incompatibleWith && command.incompatibleWith.length > 0 && (
    <p className="text-xs text-muted-foreground mt-1">
      Incompatible with:{" "}
      <span className="bg-accent">
        {command.incompatibleWith
          .map((id) => {
            const cmd = findCommandById(id)
            return cmd ? cmd.name : id
          })
          .join(", ")}
      </span>
    </p>
  )

  // Handle checkbox toggle
  const handleCheckboxChange = (checked: boolean) => {
    if (!checked) {
      onChange(undefined)
    } else {
      // Set appropriate default value based on type
      switch (command.type) {
        case "boolean":
          onChange(true)
          break
        case "string":
          onChange("")
          break
        case "number":
          onChange(command.min || 0)
          break
        case "select":
          onChange(command.options?.[0]?.value || "")
          break
      }
    }
  }

  // Render different input types based on command type
  const RenderBooleanCommand = () => (
    <div className="rounded-lg border p-2 mb-2 hover:bg-accent/10 transition-colors">
      <div className="flex items-start space-x-2">
        <Checkbox id={command.id} checked={!!value} onCheckedChange={handleCheckboxChange} className="mt-0.5" />
        <div className="space-y-1 flex-1">
          {CommandHeader}
          {CommandDescription}
          {IncompatibilityInfo}
        </div>
      </div>
    </div>
  )

  const RenderStringCommand = () => {
    const [stringValue, setStringValue] = useState<string>((value as string) || "")

    useEffect(() => {
      setStringValue((value as string) || "")
    }, [value])

    return (
      <div className="rounded-lg border p-2 mb-2 hover:bg-accent/10 transition-colors">
        <div className="space-y-2">
          {CommandHeader}
          {CommandDescription}
          <div className="flex items-center space-x-2 mt-2">
            <Checkbox 
              id={command.id} 
              checked={value !== undefined} 
              onCheckedChange={handleCheckboxChange} 
            />
            <div className="flex-1 flex gap-2">
              <Input
                placeholder={command.placeholder || "Enter value"}
                value={stringValue}
                onChange={(e) => setStringValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onChange(stringValue)
                  }
                }}
                disabled={value === undefined}
                className="flex-1"
              />
              <Button
                variant={stringValue !== value ? "default" : "outline"}
                size="sm"
                onClick={() => onChange(stringValue)}
                disabled={value === undefined}
              >
                {stringValue !== value ? "Apply*" : "Applied"}
              </Button>
            </div>
          </div>
          {command.example && <p className="text-xs text-muted-foreground">Example: {command.example}</p>}
          {IncompatibilityInfo}
        </div>
      </div>
    )
  }

  const RenderSelectCommand = () => (
    <div className="rounded-lg border p-2 mb-2 hover:bg-accent/10 transition-colors">
      <div className="space-y-2">
        {CommandHeader}
        {CommandDescription}
        <div className="flex items-center space-x-2 mt-2">
          <Checkbox id={command.id} checked={value !== undefined} onCheckedChange={handleCheckboxChange} />
          <Select
            value={(value as string) || ""}
            onValueChange={(val) => onChange(val)}
            disabled={value === undefined}
          >
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              {command.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {IncompatibilityInfo}
      </div>
    </div>
  )

  const RenderNumberCommand = () => {
    const [numberValue, setNumberValue] = useState<number>((value as number) || 0)

    useEffect(() => {
      setNumberValue((value as number) || 0)
    }, [value])

    return (
      <div className="rounded-lg border p-2 mb-2 hover:bg-accent/10 transition-colors">
        <div className="space-y-2">
          {CommandHeader}
          {CommandDescription}
          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id={command.id} checked={value !== undefined} onCheckedChange={handleCheckboxChange} />
            <div className="flex-1 flex gap-2">
              <Input
                type="number"
                min={command.min}
                max={command.max}
                placeholder={command.placeholder || "Enter value"}
                value={numberValue}
                onChange={(e) => setNumberValue(e.target.valueAsNumber || 0)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onChange(numberValue)
                  }
                }}
                disabled={value === undefined}
                className="flex-1"
              />
              <Button
                variant={numberValue !== value ? "default" : "outline"}
                size="sm"
                onClick={() => onChange(numberValue)}
                disabled={value === undefined}
              >
                {numberValue !== value ? "Apply*" : "Applied"}
              </Button>
            </div>
          </div>
          {IncompatibilityInfo}
        </div>
      </div>
    )
  }

  // Render the appropriate input based on command type
  switch (command.type) {
    case "boolean":
      return RenderBooleanCommand()
    case "string":
      return RenderStringCommand()
    case "select":
      return RenderSelectCommand()
    case "number":
      return RenderNumberCommand()
    default:
      return null
  }
}