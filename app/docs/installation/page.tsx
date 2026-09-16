import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CircleHelp, Download, Terminal } from "lucide-react";
import { CodeBlockWithCopy } from "@/components/docs/code-block-with-copy";
import { PageHeader } from "@/components/docs/page-header";
import { GlassButton } from "@/registry/liquid-glass/glass-button";
import { getInstallCommand, getRegistryUrl, projectRequirements } from "@/lib/docs/docs-content";

export default function InstallationPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 lg:py-16">
      <PageHeader
        category="Get started"
        title="Installation"
        description="Add Ein UI source to an existing React or Next.js project, then verify the first component before you customize it."
      />

      <section aria-labelledby="requirements" className="border-y border-white/10 py-8">
        <h2 id="requirements" className="text-xl font-semibold text-white">
          Before you begin
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
          You need a project where shadcn can write component files. Ein UI does not replace your framework or CSS setup.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {projectRequirements.map((requirement) => (
            <li key={requirement} className="flex gap-3 text-sm leading-6 text-white/70">
              <Check className="mt-1 size-4 shrink-0 text-cyan-300" aria-hidden="true" />
              {requirement}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="cli-install" className="py-10">
        <div className="flex items-start gap-4">
          <Terminal className="mt-1 size-5 text-cyan-300" aria-hidden="true" />
          <div>
            <h2 id="cli-install" className="text-xl font-semibold text-white">
              Recommended: use the CLI
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              The CLI reads your project aliases and copies the selected registry item into the right location.
            </p>
          </div>
        </div>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="mb-3 text-sm font-medium text-white">1. Initialize shadcn if you have not already</h3>
            <CodeBlockWithCopy code="npx shadcn@latest init" language="bash" />
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white">2. Add the Ein UI registry to `components.json`</h3>
            <p className="mb-3 text-sm leading-6 text-white/55">
              Merge this property into the existing `registries` object. Keep the rest of your configuration.
            </p>
            <CodeBlockWithCopy
              code={`"registries": {\n  "@einui": "${getRegistryUrl()}"\n}`}
              language="json"
              filename="components.json"
            />
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white">3. Add one component</h3>
            <CodeBlockWithCopy code={getInstallCommand("glass-card")} language="bash" />
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white">4. Import and render it</h3>
            <CodeBlockWithCopy
              code={`import { GlassCard } from "@/components/liquid-glass/glass-card";\n\nexport function Example() {\n  return <GlassCard>Content</GlassCard>;\n}`}
              language="tsx"
              filename="app/example.tsx"
            />
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-emerald-300/20 bg-emerald-300/6 p-4 text-sm leading-6 text-emerald-100">
          If the component renders and its styles are present, installation is complete. Continue with{" "}
          <Link href="/docs/theming" className="underline decoration-emerald-300/50 underline-offset-4 hover:text-white">
            theming
          </Link>{" "}
          when you are ready to make it yours.
        </div>
      </section>

      <section aria-labelledby="manual" className="border-t border-white/10 py-10">
        <h2 id="manual" className="text-xl font-semibold text-white">
          Manual installation
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
          Use a component’s source tab when you need to review or adapt the code before adding it. Install the dependencies listed
          on that component’s registry entry; they vary by component.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/docs/components/glass-card">
            <GlassButton variant="outline">
              Browse component source <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </GlassButton>
          </Link>
          <Link href="/docs/registry">
            <GlassButton variant="ghost">
              View registry <Download className="ml-2 size-4" aria-hidden="true" />
            </GlassButton>
          </Link>
        </div>
      </section>

      <section aria-labelledby="troubleshooting" className="border-t border-white/10 py-10">
        <div className="flex items-start gap-4">
          <CircleHelp className="mt-1 size-5 text-violet-300" aria-hidden="true" />
          <div>
            <h2 id="troubleshooting" className="text-xl font-semibold text-white">
              If installation fails
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-white/60">
              <li>
                Check that `components.json` contains the exact <code>https://ui.eindev.ir/r/&#123;name&#125;.json</code> registry
                pattern.
              </li>
              <li>Confirm your aliases point to the folders where shadcn should write files.</li>
              <li>Install any dependency reported by the registry entry, then run the add command again.</li>
              <li>Check that your configured CSS file matches the `tailwind.css` path in `components.json`.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/docs">
          <GlassButton variant="ghost">
            <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
            Introduction
          </GlassButton>
        </Link>
        <Link href="/docs/theming">
          <GlassButton variant="primary">
            Theming <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </GlassButton>
        </Link>
      </div>
    </div>
  );
}
