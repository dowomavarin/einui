"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  Download,
  Palette,
  Terminal,
  Package,
  Layers,
  LayoutGrid,
  Square,
  MessageSquare,
  TextCursorInput,
  PanelLeft,
  Home,
  ChevronRight,
  Moon,
  FileJson,
  Blocks,
  Github,
  ExternalLink,
  CircleDot,
  ToggleLeft,
  Sliders,
  User,
  CheckCircle,
  Info,
} from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon?: React.ReactNode
  isNew?: boolean
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navigation: NavSection[] = [
  {
    title: "Get Started",
    items: [
      { title: "Introduction", href: "/docs", icon: <BookOpen className="h-4 w-4" /> },
      { title: "Installation", href: "/docs/installation", icon: <Download className="h-4 w-4" /> },
      { title: "Theming", href: "/docs/theming", icon: <Palette className="h-4 w-4" /> },
      { title: "Dark Mode", href: "/docs/dark-mode", icon: <Moon className="h-4 w-4" /> },
      { title: "CLI", href: "/docs/cli", icon: <Terminal className="h-4 w-4" /> },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Cards", href: "/docs/components/cards", icon: <Square className="h-4 w-4" /> },
      { title: "Buttons", href: "/docs/components/buttons", icon: <LayoutGrid className="h-4 w-4" /> },
      { title: "Dialogs", href: "/docs/components/dialogs", icon: <MessageSquare className="h-4 w-4" /> },
      { title: "Inputs", href: "/docs/components/inputs", icon: <TextCursorInput className="h-4 w-4" /> },
      { title: "Tabs", href: "/docs/components/tabs", icon: <Layers className="h-4 w-4" /> },
      { title: "Badge", href: "/docs/components/badge", icon: <Info className="h-4 w-4" /> },
      { title: "Avatar", href: "/docs/components/avatar", icon: <User className="h-4 w-4" /> },
      { title: "Progress", href: "/docs/components/progress", icon: <CheckCircle className="h-4 w-4" /> },
      { title: "Switch", href: "/docs/components/switch", icon: <ToggleLeft className="h-4 w-4" /> },
      { title: "Slider", href: "/docs/components/slider", icon: <Sliders className="h-4 w-4" /> },
      { title: "Tooltip", href: "/docs/components/tooltip", icon: <CircleDot className="h-4 w-4" /> },
    ],
  },
  {
    title: "Registry",
    items: [
      { title: "Overview", href: "/docs/registry", icon: <Package className="h-4 w-4" /> },
    ],
  },
  {
    title: "Blocks",
    items: [{ title: "Admin Panel", href: "/docs/blocks/admin", icon: <PanelLeft className="h-4 w-4" /> }],
  },
]

export function UnifiedSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 border-r border-white/10 bg-black/60 backdrop-blur-2xl lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 border-b border-white/10 px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-900/90 backdrop-blur-sm">
                <Blocks className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold text-white">Ein UI</span>
              <span className="ml-2 rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-medium text-cyan-400">
                v1.0
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          {/* Home link */}
          <Link
            href="/"
            className={cn(
              "mb-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
              pathname === "/" ? "bg-white/15 text-white" : "text-white/60 hover:bg-white/5 hover:text-white",
            )}
          >
            <Home className="h-4 w-4" />
            Home
          </Link>

          {navigation.map((section) => (
            <div key={section.title} className="mb-6">
              <h4 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                        pathname === item.href
                          ? "bg-linear-to-r from-cyan-500/20 to-purple-500/20 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                          : "text-white/60 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {item.icon}
                      {item.title}
                      {item.isNew && (
                        <span className="ml-auto rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-medium text-cyan-400">
                          New
                        </span>
                      )}
                      {pathname === item.href && <ChevronRight className="ml-auto h-4 w-4 text-white/40" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 p-4 space-y-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5 hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
            <ExternalLink className="ml-auto h-3 w-3" />
          </a>
          <div className="rounded-xl bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-3">
            <p className="text-xs text-white/50">
              Built by <span className="text-white/80 font-medium">Ehsan</span>
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
