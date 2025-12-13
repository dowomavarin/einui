"use client"

import { CopyButton } from "./copy-button"

interface CodeBlockWithCopyProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlockWithCopy({ code, language = "bash", filename }: CodeBlockWithCopyProps) {
  return (
    <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-black/40">
      {filename && (
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 bg-white/5">
          <span className="text-xs text-white/50 font-mono">{filename}</span>
          <CopyButton text={code} />
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono text-white/80">{code}</code>
        </pre>
        {!filename && (
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <CopyButton text={code} />
          </div>
        )}
      </div>
    </div>
  )
}
