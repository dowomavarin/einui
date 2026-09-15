import type React from "react";
import { AppSidebar } from "@/components/docs/sidebar";
import { MobileNav } from "@/components/docs/mobile-nav";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#070B12] relative overflow-hidden py-12 lg:py-16">
      <SidebarProvider defaultOpen={true}>
      <div className="absolute inset-0 bg-linear-to-br from-[#070B12] via-[#0B1420] to-[#070B12]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 12%, rgba(103,232,249,.10), transparent 28rem), radial-gradient(circle at 30% 85%, rgba(196,181,253,.08), transparent 24rem)",
        }}
        aria-hidden="true"
      />
        <AppSidebar />
        <MobileNav />

        <main className="relative w-full lg:pl-72 pt-16 lg:pt-0">
          <div className="min-h-screen">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
