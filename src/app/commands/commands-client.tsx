"use client";

import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Search } from "lucide-react";
import Link from "next/link";
import { commandData } from "@/lib/command-data";

// Helper function to format category names for display
const formatCategoryName = (category: string) => {
  // Handle camelCase conversion to readable format
  return category
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
    .trim();
};

export default function CommandsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCommands = useMemo(() => {
    let allCommands: any[] = [];

    if (activeCategory === "all") {
      // Get all commands from all categories
      allCommands = Object.entries(commandData).flatMap(
        ([categoryName, commands]) =>
          commands.map((command) => ({
            ...command,
            category: categoryName,
            categoryDisplay: formatCategoryName(categoryName),
          }))
      );
    } else {
      // Get commands from specific category
      const categoryCommands = commandData[activeCategory] || [];
      allCommands = categoryCommands.map((command) => ({
        ...command,
        category: activeCategory,
        categoryDisplay: formatCategoryName(activeCategory),
      }));
    }

    // Filter by search term
    return allCommands.filter(
      (command) =>
        command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        command.flag.toLowerCase().includes(searchTerm.toLowerCase()) ||
        command.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        command.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, activeCategory]);

  const categories = ["all", ...Object.keys(commandData)];

  return (
    <div className="py-8 max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">YT-DLP Commands Reference</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Complete reference of all available commands and options for YT-DLP.
          Use these commands to customize your video downloads.
        </p>
        <Link
          href="https://github.com/yt-dlp/yt-dlp#usage-and-options"
          target="_blank"
          className="text-primary hover:underline flex gap-1 mt-2 justify-center items-center"
        >
          Official Documentation
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="search"
          placeholder="Search commands..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Tabs
        value={activeCategory}
        onValueChange={setActiveCategory}
        className="w-full"
      >
        {/* Updated TabsList with proper responsive layout */}
        <div className="mb-6 overflow-x-auto">
          <TabsList className="inline-flex h-auto min-w-full w-max p-1 bg-muted rounded-lg">
            <div className="flex flex-wrap gap-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  {category === "all"
                    ? "All Commands"
                    : formatCategoryName(category)}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">
                {category === "all"
                  ? "All Commands"
                  : `${formatCategoryName(category)} Commands`}
              </h2>
              <p className="text-sm text-muted-foreground">
                {filteredCommands.length} command
                {filteredCommands.length !== 1 ? "s" : ""} found
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>

            {filteredCommands.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {searchTerm
                    ? `No commands found matching "${searchTerm}"`
                    : "No commands found"}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Try adjusting your search terms or browse other categories
                </p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredCommands.map((command) => (
                  <Card
                    key={`${command.category}-${command.id}`}
                    className="hover:shadow-md transition-shadow duration-200"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base leading-tight">
                            {command.name}
                          </CardTitle>
                          {activeCategory === "all" && (
                            <Badge variant="outline" className="text-xs">
                              {command.categoryDisplay}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="text-xs font-mono bg-muted"
                          >
                            {command.flag}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {command.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm leading-relaxed mb-3">
                        {command.description}
                      </CardDescription>

                      {command.example && (
                        <div className="space-y-1">
                          <span className="text-xs font-medium text-muted-foreground">
                            Example:
                          </span>
                          <code className="block bg-muted px-2 py-1 rounded text-xs font-mono break-all">
                            {command.flag} {command.example}
                          </code>
                        </div>
                      )}

                      {command.incompatibleWith &&
                        command.incompatibleWith.length > 0 && (
                          <div className="mt-3 pt-3 border-t">
                            <span className="text-xs font-medium text-muted-foreground">
                              Incompatible with:
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {command.incompatibleWith.map((incompatible) => (
                                <Badge
                                  key={incompatible}
                                  variant="destructive"
                                  className="text-xs"
                                >
                                  {incompatible}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
