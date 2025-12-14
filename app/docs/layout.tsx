import type React from "react";
import { UnifiedSidebar } from "@/components/docs/sidebar";
import { UnifiedMobileNav } from "@/components/docs/mobile-nav";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden py-12 lg:py-16">
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900" />

      {/* Animated linear orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      {/* Animated background */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div> */}

      <UnifiedSidebar />
      <UnifiedMobileNav />

      <main className="relative lg:pl-72 pt-16 lg:pt-0">
        <div className="min-h-screen">{children}</div>
      </main>
    </div>
  );
}
