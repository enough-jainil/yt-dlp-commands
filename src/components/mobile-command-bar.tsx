"use client"
import { Button } from "@/components/ui/button"
import { ClipboardCopy } from "lucide-react"

interface MobileCommandBarProps {
  isMobile: boolean
  finalCommand: string
  copyToClipboard: () => void
}

export function MobileCommandBar({ isMobile, finalCommand, copyToClipboard }: MobileCommandBarProps) {
  if (!isMobile || !finalCommand) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-2 z-50">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 overflow-hidden">
          <p className="text-xs font-mono truncate">{finalCommand}</p>
        </div>
        <Button size="sm" className="h-8 px-2" onClick={copyToClipboard}>
          <ClipboardCopy className="h-4 w-4" />
          <span className="sr-only md:not-sr-only md:ml-1">Copy</span>
        </Button>
      </div>
    </div>
  )
}

