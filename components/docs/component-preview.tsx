"use client"

import type React from "react"

import { GlassTabs, GlassTabsList, GlassTabsTrigger, GlassTabsContent } from "@/registry/liquid-glass/glass-tabs"
import { CodeBlock } from "./code-block"
import { ComponentStage } from "./component-stage"

interface ComponentPreviewProps {
  title: string
  description: string
  preview: React.ReactNode
  code: string
  stageSize?: "compact" | "default" | "wide" | "tall"
}

export function ComponentPreview({ title, description, preview, code, stageSize = "default" }: ComponentPreviewProps) {
  return (
    <section className="mb-16 scroll-mt-24">
      <div className="mb-5">
        <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">{description}</p>
      </div>

      <GlassTabs defaultValue="preview" className="w-full">
        <GlassTabsList>
          <GlassTabsTrigger value="preview">Preview</GlassTabsTrigger>
          <GlassTabsTrigger value="code">Code</GlassTabsTrigger>
        </GlassTabsList>

        <GlassTabsContent value="preview">
          <div className="mt-4">
            <ComponentStage size={stageSize}>{preview}</ComponentStage>
          </div>
        </GlassTabsContent>

        <GlassTabsContent value="code">
          <div className="mt-4">
            <CodeBlock code={code} />
          </div>
        </GlassTabsContent>
      </GlassTabs>
    </section>
  )
}
