import type React from "react";
import { AppSidebar } from "@/components/docs/sidebar";
import { MobileNav } from "@/components/docs/mobile-nav";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070B12] py-12 lg:py-16">
      <SidebarProvider defaultOpen={true}>
      <div className="absolute inset-0 bg-linear-to-br from-[#070B12] via-[#0B1420] to-[#070B12]" aria-hidden="true" />

      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 12%, rgba(103,232,249,.10), transparent 28rem), radial-gradient(circle at 30% 85%, rgba(196,181,253,.08), transparent 24rem)",
        }}
        aria-hidden="true"
      />
        <AppSidebar />
        <MobileNav />

        <main id="docs-content" className="relative w-full pt-16 lg:pl-72 lg:pt-0">
          <a
            href="#docs-main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-50 focus:rounded-lg focus:bg-cyan-300 focus:px-4 focus:py-3 focus:text-slate-950"
          >
            Skip to documentation content
          </a>
          <div id="docs-main" className="min-h-screen scroll-mt-20">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
