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

export default function CommandsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(commandData)[0]
  );

  const filteredCommands = useMemo(() => {
    const categoryCommands = commandData[activeCategory] || [];
    return categoryCommands.filter(
      (command) =>
        command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        command.flag.toLowerCase().includes(searchTerm.toLowerCase()) ||
        command.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, activeCategory]);

  return (
    <div className=" py-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">YT-DLP Commands Reference</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Complete reference of all available commands and options for YT-DLP.
          Use these commands to customize your video downloads.
        </p>
        <Link
          href="https://github.com/yt-dlp/yt-dlp#usage-and-options"
          target="_blank"
          className="text-primary hover:underline flex gap-1 mt-2 justify-center"
        >
          Official Documentation
          <ExternalLink />
        </Link>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
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
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 h-full w-full mb-6">
          {Object.keys(commandData).map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(commandData).map((category) => (
          <TabsContent key={category} value={category}>
            <div>
              <div>
                {filteredCommands.length === 0 ? (
                  <p className="text-center text-destructive underline">
                    No commands found
                  </p>
                ) : (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredCommands.map((command) => (
                      <Card
                        key={command.id}
                        className="hover:shadow-md transition-shadow gap-2 py-2"
                      >
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="flex items-center text-base mb-2">
                                {command.name}
                                <Badge
                                  variant="outline"
                                  className="ml-2 text-xs"
                                >
                                  {command.flag}
                                </Badge>
                              </CardTitle>
                              <CardDescription className="line-clamp-2">
                                {command.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="text-sm space-y-2">
                          <div className="flex gap-2">
                            <span className="font-medium">Type:</span>
                            <Badge variant="secondary">{command.type}</Badge>
                          </div>

                          {command.example && (
                            <div>
                              <span className="font-medium">Example:</span>
                              <code className="bg-muted px-1 py-0.5 rounded text-xs block mt-1">
                                {command.flag} {command.example}
                              </code>
                            </div>
                          )}

                          
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
