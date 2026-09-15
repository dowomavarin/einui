interface PageHeaderProps {
  title: string
  description: string
  category?: string
  registryName?: string
  exampleCount?: number
}

export function PageHeader({ title, description, category, registryName, exampleCount }: PageHeaderProps) {
  return (
    <header className="mb-10">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-white/45">
        {category && (
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-cyan-200">
            {category}
          </span>
        )}
        {registryName && (
          <code className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/50">
            @einui/{registryName}
          </code>
        )}
        {exampleCount !== undefined && (
          <span>
            {exampleCount} {exampleCount === 1 ? "example" : "examples"}
          </span>
        )}
      </div>
      <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-white/60">{description}</p>
      <div className="mt-8 h-px bg-linear-to-r from-cyan-400/50 via-blue-400/25 to-transparent" />
    </header>
  )
}
