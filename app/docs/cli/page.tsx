import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Package, Terminal } from "lucide-react";
import { CodeBlockWithCopy } from "@/components/docs/code-block-with-copy";
import { PageHeader } from "@/components/docs/page-header";
import { GlassButton } from "@/registry/liquid-glass/glass-button";
import { getInstallCommand, getRegistryUrl } from "@/lib/docs/docs-content";

const commands = [
  { name: "init", purpose: "Create or configure shadcn in a project.", usage: "npx shadcn@latest init", example: "npx shadcn@latest init" },
  { name: "add", purpose: "Copy one or more registry items into your project.", usage: "npx shadcn@latest add [items...]", example: `${getInstallCommand("glass-card")} ${"@einui/glass-button"}` },
  { name: "diff", purpose: "Compare a local item with its registry source.", usage: "npx shadcn@latest diff [item]", example: "npx shadcn@latest diff @einui/glass-card" },
];

export default function CLIPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 lg:py-16">
      <PageHeader category="Reference" title="CLI" description="Use the shadcn CLI to resolve Ein UI registry items and copy their source into your project." />
      <section aria-labelledby="model" className="border-y border-white/10 py-8"><div className="flex items-start gap-4"><Terminal className="mt-1 size-5 text-cyan-300" aria-hidden="true" /><div><h2 id="model" className="text-xl font-semibold text-white">The model</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-white/60">The CLI is a source distribution workflow. It writes files and dependencies into your app; Ein UI is not a runtime package you import from `node_modules`.</p></div></div><div className="mt-6"><CodeBlockWithCopy code="npx shadcn@latest add @einui/glass-card" language="bash" /></div></section>
      <section aria-labelledby="commands" className="py-10"><h2 id="commands" className="text-xl font-semibold text-white">Command reference</h2><div className="mt-5 divide-y divide-white/10 border-y border-white/10">{commands.map((command) => <div key={command.name} className="py-6"><div className="flex items-start gap-4"><span className="mt-0.5 rounded-md bg-white/6 px-2 py-1 font-mono text-sm text-cyan-200">{command.name}</span><p className="text-sm leading-6 text-white/60">{command.purpose}</p></div><div className="mt-4 grid gap-3 sm:grid-cols-2"><div><p className="mb-2 text-xs text-white/40">Usage</p><CodeBlockWithCopy code={command.usage} language="bash" /></div><div><p className="mb-2 text-xs text-white/40">Example</p><CodeBlockWithCopy code={command.example} language="bash" /></div></div></div>)}</div></section>
      <section aria-labelledby="registry" className="border-t border-white/10 py-10"><div className="flex items-start gap-4"><Package className="mt-1 size-5 text-violet-300" aria-hidden="true" /><div><h2 id="registry" className="text-xl font-semibold text-white">Register Ein UI once</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-white/60">Add this fragment to the existing `components.json`. The namespace expands <code>&#123;@einui/name&#125;</code> into the remote registry URL.</p></div></div><div className="mt-5 space-y-4"><CodeBlockWithCopy language="json" filename="components.json" code={`"registries": {\n  "@einui": "${getRegistryUrl()}"\n}`} /><p className="text-sm leading-6 text-white/55">The full project configuration stays yours. The registry only tells shadcn where to resolve Ein UI items.</p></div></section>
      <section aria-labelledby="checks" className="border-t border-white/10 py-10"><h2 id="checks" className="text-xl font-semibold text-white">When a command fails</h2><ul className="mt-4 space-y-3 text-sm leading-6 text-white/60"><li className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-cyan-300" aria-hidden="true" />Confirm the namespace URL uses <code>https://ui.eindev.ir/r/&#123;name&#125;.json</code>.</li><li className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-cyan-300" aria-hidden="true" />Confirm the item name exists in the <Link href="/docs/registry" className="text-cyan-200 underline underline-offset-4">registry catalog</Link>.</li><li className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-cyan-300" aria-hidden="true" />If files already exist, inspect the diff before replacing local changes.</li><li className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-cyan-300" aria-hidden="true" />Install dependency errors reported by the item, then run the command again.</li></ul></section>
      <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"><Link href="/docs/dark-mode"><GlassButton variant="ghost"><ArrowLeft className="mr-2 size-4" aria-hidden="true" />Dark mode</GlassButton></Link><Link href="/docs/registry"><GlassButton variant="primary">Registry <ArrowRight className="ml-2 size-4" aria-hidden="true" /></GlassButton></Link></div>
    </div>
  );
}
