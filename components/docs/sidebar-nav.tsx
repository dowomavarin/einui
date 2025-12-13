"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutGrid, Square, MessageSquare, TextCursorInput, Layers, PanelLeft, Home, ChevronRight } from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

const componentItems: NavItem[] = [
  { title: "Cards", href: "/components/cards", icon: <Square className="h-4 w-4" /> },
  { title: "Buttons", href: "/components/buttons", icon: <LayoutGrid className="h-4 w-4" /> },
  { title: "Dialogs", href: "/components/dialogs", icon: <MessageSquare className="h-4 w-4" /> },
  { title: "Inputs", href: "/components/inputs", icon: <TextCursorInput className="h-4 w-4" /> },
  { title: "Tabs", href: "/components/tabs", icon: <Layers className="h-4 w-4" /> },
]

const sampleItems: NavItem[] = [
  { title: "Admin Panel", href: "/samples/admin", icon: <PanelLeft className="h-4 w-4" /> },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b border-white/10 px-6">
          <div className="relative h-8 w-8 rounded-lg bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500">
            <div className="absolute inset-0.5 rounded-[6px] bg-black/50 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-white">LG</span>
            </div>
          </div>
          <span className="text-lg font-semibold text-white">Liquid Glass</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          {/* Home link */}
          <Link
            href="/"
            className={cn(
              "mb-6 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
              pathname === "/" ? "bg-white/15 text-white" : "text-white/60 hover:bg-white/5 hover:text-white",
            )}
          >
            <Home className="h-4 w-4" />
            Home
          </Link>

          {/* Components section */}
          <div className="mb-6">
            <h4 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-white/40">Components</h4>
            <ul className="space-y-1">
              {componentItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                      pathname === item.href
                        ? "bg-white/15 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        : "text-white/60 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {item.icon}
                    {item.title}
                    {pathname === item.href && <ChevronRight className="ml-auto h-4 w-4 text-white/40" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Samples section */}
          <div>
            <h4 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-white/40">Sample Pages</h4>
            <ul className="space-y-1">
              {sampleItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                      pathname === item.href
                        ? "bg-white/15 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        : "text-white/60 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {item.icon}
                    {item.title}
                    {pathname === item.href && <ChevronRight className="ml-auto h-4 w-4 text-white/40" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 p-4">
          <div className="rounded-xl bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 p-4">
            <p className="text-xs text-white/60">Built with Shadcn UI & Tailwind CSS v4</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
