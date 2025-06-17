"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Download,
  Github,
  Menu,
  X,
  BookOpen,
  Command,
  Home,
  Smartphone,
  Laptop,
  Terminal,
  Settings2Icon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import siteConfig from "@/lib/config";

const NavLinks = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/commands",
    label: "Commands",
    icon: Command,
  },
  {
    href: "/download",
    label: "Download",
    icon: Download,
  },
];

const GuideLinks = [
  { href: "/guides/windows", label: "Windows", icon: Laptop },
  { href: "/guides/macos", label: "macOS", icon: Laptop },
  { href: "/guides/linux", label: "Linux", icon: Laptop },
  { href: "/guides/android", label: "Android", icon: Smartphone },
  { href: "/guides/ios", label: "iOS", icon: Smartphone },
  { href: "/guides/usage", label: "Usage Guide", icon: BookOpen },
  {
    href: "/guides/configuration",
    label: "Configuration Guide",
    icon: Settings2Icon,
  },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto flex items-center justify-between h-12 px-4">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-primary" />
            <span className="text-lg font-bold hidden md:block">YT-DLP</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NavLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center space-x-1 text-sm transition-colors 
                ${
                  isActive(href)
                    ? "text-foreground font-semibold"
                    : "text-foreground/60 hover:text-foreground/80"
                }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </Link>
          ))}

          {/* Guides Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 px-2">
                <div
                  className={`flex items-center space-x-1 
                    ${
                      pathname.startsWith("/guides")
                        ? "text-foreground font-semibold"
                        : "text-foreground/60"
                    }`}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Guides</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Installation Guides</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {GuideLinks.map(({ href, label, icon: Icon }) => (
                <DropdownMenuItem key={href} asChild>
                  <Link href={href}>
                    <Icon className="h-4 w-4 mr-2" /> {label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* GitHub Link */}
          <Link
            href={siteConfig.site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <Terminal className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold">YT-DLP</span>
                  </div>
                  <SheetClose />
                </div>

                {/* Navigation Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Main Navigation Links */}
                  {NavLinks.map(({ href, label, icon: Icon }) => (
                    <SheetClose key={href} asChild>
                      <Link
                        href={href}
                        className={`flex items-center space-x-2 w-full p-2 rounded-md
                          ${
                            isActive(href)
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-accent/50"
                          }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{label}</span>
                      </Link>
                    </SheetClose>
                  ))}

                  {/* Guides Section */}
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium mb-2">
                      Installation Guides
                    </p>
                    <div className="space-y-2">
                      {GuideLinks.map(({ href, label, icon: Icon }) => (
                        <SheetClose key={href} asChild>
                          <Link
                            href={href}
                            className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent/50 text-foreground/60"
                          >
                            <Icon className="h-4 w-4" />
                            <span>{label}</span>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>

                  {/* Additional Links */}
                  <div className="border-t pt-4 space-y-2">
                    <SheetClose asChild>
                      <Link
                        href={siteConfig.site.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent/50 text-foreground/60"
                      >
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
