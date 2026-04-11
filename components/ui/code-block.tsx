"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
// Import the actual Shadcn Card components
import { Card, CardHeader, CardContent } from "@/components/ui/card" 
import { codeToHtml } from "shiki"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  showLineNumbers?: boolean
}

export function CodeBlock({
  code,
  language = "typescript",
  showLineNumbers = false,
  className,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)
  const [html, setHtml] = React.useState<string>("")

  React.useEffect(() => {
    const highlight = async () => {
      const highlighted = await codeToHtml(code, {
        lang: language,
        theme: "github-dark", 
      })
      setHtml(highlighted)
    }
    highlight()
  }, [code, language])

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card 
      className={cn("overflow-hidden my-6 w-full bg-muted/10 shadow-sm", className)}
      {...props}
    >
      <CardHeader className="flex flex-row items-center justify-between px-4">
        <div className="text-xs font-semibold text-muted-foreground">
          {language}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className="h-6 px-2 text-muted-foreground hover:text-foreground"
        >
          {copied ? (
            <>
              <CheckIcon className="h-3.5 w-3.5 text-green-500 mr-1.5" weight="bold" />
              <span className="text-xs">Copied</span>
            </>
          ) : (
            <>
              <CopyIcon className="h-3.5 w-3.5 mr-1.5" />
              <span className="text-xs">Copy</span>
            </>
          )}
        </Button>
      </CardHeader>
      
      <CardContent>
        <div
          className={cn(
            "text-xs overflow-x-auto",
            "[&>pre]:!bg-transparent [&>pre]:p-4 [&>pre]:m-0",
            showLineNumbers && "[&>pre]:[counter-reset:step] [&>pre>code>span]:before:content-[counter(step)] [&>pre>code>span]:before:[counter-increment:step] [&>pre>code>span]:before:mr-4 [&>pre>code>span]:before:inline-block [&>pre>code>span]:before:w-4 [&>pre>code>span]:before:text-muted-foreground/50 [&>pre>code>span]:before:text-right"
          )}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </CardContent>
    </Card>
  )
}