import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Blocks, Code2, Sparkles } from "lucide-react";
import { CodeBlockWithCopy } from "@/components/docs/code-block-with-copy";
import { PageHeader } from "@/components/docs/page-header";
import { GlassButton } from "@/registry/liquid-glass/glass-button";
import { recommendedComponents, getInstallCommand } from "@/lib/docs/docs-content";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Install, customize, and ship Ein UI liquid-glass components.",
  alternates: { canonical: "/docs" },
};

const buildPath = [
  { label: "Introduction", href: "/docs", detail: "Choose your next step" },
  { label: "Installation", href: "/docs/installation", detail: "Add source to your app" },
  { label: "Theming", href: "/docs/theming", detail: "Shape the visual system" },
  { label: "Dark mode", href: "/docs/dark-mode", detail: "Handle light and dark surfaces" },
  { label: "CLI", href: "/docs/cli", detail: "Keep components in sync" },
];

export default function IntroductionPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
        <div>
          <PageHeader
            category="Start here"
            title="Build your interface from source."
            description="Ein UI is a shadcn-compatible collection of liquid-glass components for React and Next.js. Add the files you need, then make them yours."
          />

          <section aria-labelledby="quick-start" className="border-y border-white/10 py-8">
            <div className="mb-5 flex items-start justify-between gap-6">
              <div>
                <h2 id="quick-start" className="text-xl font-semibold text-white">Start with one component</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
                  If shadcn is already initialized in your app, copy this command and inspect the generated file.
                </p>
              </div>
              <Code2 className="hidden size-5 shrink-0 text-cyan-300 sm:block" aria-hidden="true" />
            </div>
            <CodeBlockWithCopy code={getInstallCommand("glass-card")} language="bash" />
            <p className="mt-4 text-sm leading-6 text-white/55">
              The CLI copies the component source into your project. It does not add an Ein UI runtime package.
            </p>
            <Link href="/docs/installation" className="mt-5 inline-flex text-sm font-medium text-cyan-200 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">
              Follow the complete installation guide <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </section>

          <section aria-labelledby="choose-path" className="py-10">
            <h2 id="choose-path" className="text-xl font-semibold text-white">Choose your path</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/6 p-5">
                <p className="text-sm font-medium text-cyan-100">I have a shadcn app</p>
                <p className="mt-2 text-sm leading-6 text-white/60">Add the Ein registry and install a component from the CLI.</p>
                <Link href="/docs/installation" className="mt-4 inline-flex text-sm font-medium text-cyan-200 hover:text-cyan-100">Install a component <ArrowRight className="ml-2 size-4" aria-hidden="true" /></Link>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
                <p className="text-sm font-medium text-white">I am starting a project</p>
                <p className="mt-2 text-sm leading-6 text-white/60">Initialize shadcn first, then return here to add the component source you need.</p>
                <Link href="/docs/cli" className="mt-4 inline-flex text-sm font-medium text-white/80 hover:text-white">Set up the CLI <ArrowRight className="ml-2 size-4" aria-hidden="true" /></Link>
              </div>
            </div>
          </section>

          <section aria-labelledby="recommended" className="border-t border-white/10 py-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 id="recommended" className="text-xl font-semibold text-white">Useful first components</h2>
                <p className="mt-2 text-sm leading-6 text-white/60">Start with primitives that give you a foundation for larger surfaces.</p>
              </div>
              <Blocks className="size-5 text-violet-300" aria-hidden="true" />
            </div>
            <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {recommendedComponents.map((component) => (
                <Link key={component.name} href={`/docs/components/${component.name}`} className="group flex items-center justify-between gap-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300/70">
                  <span>
                    <span className="block font-medium text-white group-hover:text-cyan-100">{component.title}</span>
                    <span className="mt-1 block text-sm text-white/55">{component.description}</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-white/35 transition-transform group-hover:translate-x-1 group-hover:text-cyan-200" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="ownership" className="border-t border-white/10 py-10">
            <div className="grid gap-6 sm:grid-cols-[auto_minmax(0,1fr)]">
              <Sparkles className="mt-1 size-5 text-cyan-300" aria-hidden="true" />
              <div>
                <h2 id="ownership" className="text-xl font-semibold text-white">You own the result</h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-white/60">Ein UI follows the source-ownership model: components are copied into your codebase, where you can change markup, styles, behavior, and dependencies without waiting for a library release.</p>
              </div>
            </div>
          </section>

          <div className="flex justify-end border-t border-white/10 pt-6">
            <Link href="/docs/installation"><GlassButton variant="primary">Open installation <ArrowRight className="ml-2 size-4" aria-hidden="true" /></GlassButton></Link>
          </div>
        </div>

        <aside className="hidden lg:block">
          <p className="text-xs font-medium text-white/40">Your build path</p>
          <nav aria-label="Getting started" className="mt-4 border-l border-white/10">
            {buildPath.map((item, index) => (
              <Link key={item.href} href={item.href} className={`relative block py-3 pl-5 text-sm ${index === 0 ? "text-cyan-200" : "text-white/50 hover:text-white"}`}>
                {index === 0 && <span className="absolute -left-px top-0 h-full w-px bg-cyan-300" aria-hidden="true" />}
                <span className="block font-medium">{item.label}</span>
                <span className="mt-1 block text-xs text-white/35">{item.detail}</span>
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
}
