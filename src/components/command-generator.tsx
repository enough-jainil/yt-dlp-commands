"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, ClipboardCopy, RotateCw } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { CommandSelector } from "./command-selector";
import { CommandSummary } from "./command-summary";
import { QuickTemplates } from "./quick-templates";
import { ModeSelector } from "./mode-selector";
import { useCommandGenerator } from "./use-command-generator";
import { MobileCommandBar } from "./mobile-command-bar";
import SettingsPage from "./settings";
import { PresetSelector } from "./preset-selector";
import { CommandCategory } from "@/lib/command-data";

export default function CommandGenerator() {
  const isMobile = useMobile();
  const {
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
  } = useCommandGenerator();

  return (
    <div className="max-w-7xl mx-auto py-3 pb-16 md:pb-3 px-4">
      <div>
        {/* Hero Section */}
        <div className="mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-6">
            {/* Title Section */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold">YT-DLP Command Generator</h1>
            </div>

            {/* Mode Selection */}
            <ModeSelector mode={mode} onModeChange={handleModeChange} />
          </div>
        </div>
      </div>

      {/* Show URL card in URL mode and ALL mode */}
      {(mode === "url" || mode === "all") && (
        <Card className="mb-4 p-4 border-muted">
          <div className="space-y-2">
            <Label
              htmlFor="url-input"
              className="text-sm font-medium text-foreground"
            >
              Enter URL {mode === "all" ? "(Optional)" : ""}
            </Label>

            <div className="relative flex items-center space-x-2">
              <div className="flex-1">
                <Input
                  id="url-input"
                  placeholder="Enter video or playlist URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full pr-10 border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  type="url"
                  aria-label={
                    mode === "all" ? "Video URL (Optional)" : "Video URL"
                  }
                  aria-required={mode === "url" ? "true" : "false"}
                />
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={clearSelections}
                className="cursor-pointer hover:bg-secondary/50 transition-colors border-muted-foreground/30"
                title="Reset All"
              >
                <RotateCw className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground pl-1">
              {mode === "all"
                ? "Enter a URL for download commands, or leave empty for utility/info commands only"
                : "Enter a YouTube, Vimeo, or other supported platform URL"}
            </p>
          </div>
        </Card>
      )}

      {/* Validation Errors */}
      {validationErrors.length > 0 && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <ul className="list-disc pl-5">
              {validationErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Command Selection */}
        <div className="md:col-span-1 lg:col-span-2 space-y-3">
          <CommandSelector
            filteredCommands={filteredCommands as CommandCategory}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={categories}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCommands={selectedCommands}
            handleCommandChange={handleCommandChange}
            mode={mode}
          />
          <SettingsPage />
        </div>

        {/* Command Summary and Output */}
        <div className="space-y-6">
          {/* Generated Command */}
          <Card>
            <div className="pb-2 pt-3 px-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">Generated Command</h3>
                {finalCommand && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 px-2"
                    onClick={copyToClipboard}
                  >
                    <ClipboardCopy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                )}
              </div>
            </div>
            <div className="pt-0 px-2 pb-2">
              <div className="bg-muted p-2 rounded-md overflow-x-auto">
                <pre className="text-xs whitespace-pre-wrap break-all font-mono">
                  {finalCommand || "Command will appear here"}
                </pre>
              </div>
              {finalCommand && (
                <Button
                  variant="default"
                  size="sm"
                  className="w-full mt-2"
                  onClick={copyToClipboard}
                >
                  <ClipboardCopy className="h-4 w-4 mr-1" />
                  Copy to Clipboard
                </Button>
              )}
            </div>
          </Card>

          {/* Quick Presets */}
          <PresetSelector onApplyPreset={applyPreset} />

          {/* Quick Templates */}
          <QuickTemplates onApplyTemplate={applyTemplate} />

          {/* Command Summary */}
          <CommandSummary
            selectedCommands={selectedCommands}
            handleCommandChange={handleCommandChange}
            clearSelections={clearSelections}
          />
        </div>
      </div>
      <MobileCommandBar
        isMobile={isMobile}
        finalCommand={finalCommand}
        copyToClipboard={copyToClipboard}
      />
    </div>
  );
}
