"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { CLIInstall } from "@/components/docs/cli-install";
import { ComponentStage } from "@/components/docs/component-stage";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { PageHeader } from "@/components/docs/page-header";
import { GlassButton } from "@/registry/liquid-glass/glass-button";
import { blockItems } from "@/lib/docs/docs-content";

type BlockItem = (typeof blockItems)[number];

type BlockDocPageProps = {
  block: BlockItem;
  preview: ReactNode;
  previewLabel: string;
  stageSize?: "compact" | "default" | "wide" | "tall";
  previewClassName?: string;
  previewTone?: "auth" | "pricing" | "dashboard";
};

const previewToneStyles = {
  auth: {
    backgroundColor: "#071521",
    backgroundImage:
      "radial-gradient(circle at 18% 18%, rgba(34, 211, 238, .16), transparent 24%), radial-gradient(circle at 84% 80%, rgba(139, 92, 246, .14), transparent 28%)",
  },
  pricing: {
    backgroundColor: "#120d24",
    backgroundImage:
      "radial-gradient(circle at 50% 0%, rgba(168, 85, 247, .2), transparent 32%), radial-gradient(circle at 92% 86%, rgba(236, 72, 153, .12), transparent 26%)",
  },
  dashboard: {
    backgroundColor: "#09141b",
    backgroundImage:
      "radial-gradient(circle at 12% 0%, rgba(45, 212, 191, .12), transparent 25%), radial-gradient(circle at 90% 30%, rgba(59, 130, 246, .1), transparent 28%)",
  },
} as const;

export function BlockDocPage({
  block,
  preview,
  previewLabel,
  stageSize = "tall",
  previewClassName = "max-h-[42rem] overflow-y-auto",
  previewTone = "auth",
}: BlockDocPageProps) {
  const currentIndex = blockItems.findIndex((item) => item.name === block.name);
  const previous = currentIndex > 0 ? blockItems[currentIndex - 1] : undefined;
  const next = currentIndex < blockItems.length - 1 ? blockItems[currentIndex + 1] : undefined;

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 lg:py-16">
      <PageHeader
        title={block.title}
        description={block.description}
        category="Block"
        registryName={block.name}
      />

      <div className="mb-8">
        <CLIInstall componentName={block.name} />
        <div className="flex justify-end sm:w-36 sm:ml-auto">
          <OpenInV0Button component={block.name} />
        </div>
      </div>

      <section aria-labelledby="block-preview" className="mb-12">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-cyan-200/70">Live example</p>
            <h2 id="block-preview" className="mt-1 text-xl font-semibold text-white">Preview the flow</h2>
          </div>
          <p className="hidden text-xs text-white/40 sm:block">Interactive demo</p>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#060c14] shadow-[0_24px_80px_rgba(0,0,0,.35)]">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="size-2 rounded-full bg-rose-300/80" />
              <span className="size-2 rounded-full bg-amber-200/80" />
              <span className="size-2 rounded-full bg-emerald-300/80" />
            </div>
            <span className="rounded-full border border-white/10 bg-white/4 px-2.5 py-1 text-[11px] text-white/45">Responsive viewport</span>
          </div>
          <div className="relative p-2 sm:p-3" style={previewToneStyles[previewTone]}>
            <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)", backgroundSize: "36px 36px", maskImage: "linear-gradient(to bottom, black, transparent 72%)" }} aria-hidden="true" />
            <ComponentStage size={stageSize} label={previewLabel} showBackdrop={false} className="rounded-[1.25rem] border-0 bg-transparent px-2 py-5 sm:px-6 sm:py-8">
              <div className={previewClassName + " w-full"}>{preview}</div>
            </ComponentStage>
          </div>
        </div>
      </section>

      <section aria-labelledby="block-details" className="grid gap-8 border-y border-white/10 py-8 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div>
          <h2 id="block-details" className="text-xl font-semibold text-white">What is included</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {block.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm leading-6 text-white/70">
                <Check className="mt-1 size-4 shrink-0 text-cyan-300" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium text-white">Dependencies</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {block.dependencies.length > 0 ? block.dependencies.map((dependency) => (
              <code key={dependency} className="rounded-md border border-white/10 bg-white/4 px-2 py-1 text-xs text-cyan-100/75">
                {dependency}
              </code>
            )) : <span className="text-sm text-white/50">No extra dependencies listed.</span>}
          </div>
        </div>
      </section>

      <p className="mt-8 max-w-3xl text-sm leading-7 text-white/55">
        This block is a starting point, not a locked feature. The CLI copies its source into your app so you can connect real routes, API calls, validation, and product content.
      </p>

      <nav className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between" aria-label="Block navigation">
        {previous ? (
          <Link href={previous.route} className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/2.5 px-4 py-3 text-left hover:border-cyan-300/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">
            <ArrowLeft className="size-4 text-white/45 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            <span><span className="block text-xs text-white/40">Previous block</span><span className="block text-sm text-white/80">{previous.title}</span></span>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={next.route} className="group flex items-center justify-end gap-3 rounded-xl border border-white/10 bg-white/2.5 px-4 py-3 text-right hover:border-cyan-300/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">
            <span><span className="block text-xs text-white/40">Next block</span><span className="block text-sm text-white/80">{next.title}</span></span>
            <ArrowRight className="size-4 text-white/45 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        ) : <Link href="/docs/registry"><GlassButton variant="primary">Open registry <ArrowRight className="ml-2 size-4" aria-hidden="true" /></GlassButton></Link>}
      </nav>
    </div>
  );
}
