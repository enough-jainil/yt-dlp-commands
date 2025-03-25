import Link from "next/link"
import { Github, Heart, BookOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import siteConfig from "@/lib/config"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col gap-4 md:h-20 md:flex-row md:items-center">
        <div className="flex flex-1 flex-col gap-2 md:gap-1">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            This is an unofficial tool for{" "}
            <Link
              href="https://github.com/yt-dlp/yt-dlp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              yt-dlp
            </Link>
            . All credit goes to the original developers.
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Created to help remember commands and make downloading easier.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row md:gap-4">
          <div className="flex items-center justify-center gap-4 md:justify-end">
            <Link
              href={siteConfig.site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://github.com/yt-dlp/yt-dlp/wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <BookOpen className="h-5 w-5" />
              <span className="sr-only">Documentation</span>
            </Link>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Link href="https://github.com/yt-dlp/yt-dlp#donations" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Heart className="mr-1 h-4 w-4 text-red-500" />
                <span>Support yt-dlp</span>
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

