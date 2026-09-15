import Link from "next/link";
import {
  Square,
  LayoutGrid,
  MessageSquare,
  TextCursorInput,
  Layers,
  Info,
  User,
  CheckCircle,
  ToggleLeft,
  Sliders,
  Command,
  Bell,
  MousePointer,
  Droplets,
  Clock,
  Gauge,
  Dock,
  Sparkles,
  Edit,
  Zap,
  Eye,
} from "lucide-react";
import { GlassBadge } from "@/registry/liquid-glass/glass-badge";

const componentsByUseCase = [
  {
    category: "Forms & Input",
    description: "Collect user data with style",
    icon: Edit,
    components: [
      { title: "Inputs", href: "/docs/components/glass-input", icon: TextCursorInput },
      { title: "Textarea", href: "/docs/components/glass-textarea", icon: Edit },
      { title: "Checkbox", href: "/docs/components/glass-checkbox", icon: CheckCircle },
      { title: "Switch", href: "/docs/components/glass-switch", icon: ToggleLeft },
      { title: "Slider", href: "/docs/components/glass-slider", icon: Sliders },
      { title: "Select", href: "/docs/components/glass-select", icon: Layers },
    ],
  },
  {
    category: "Feedback & Status",
    description: "Show progress and communicate states",
    icon: Eye,
    components: [
      { title: "Progress", href: "/docs/components/glass-progress", icon: CheckCircle },
      { title: "Badge", href: "/docs/components/glass-badge", icon: Info },
      { title: "Notifications", href: "/docs/components/glass-notification", icon: Bell },
      { title: "Alert Dialog", href: "/docs/components/glass-alert-dialog", icon: MessageSquare },
      { title: "Tabs", href: "/docs/components/glass-tabs", icon: Layers },
    ],
  },
  {
    category: "Layout & Structure",
    description: "Organize and present content",
    icon: LayoutGrid,
    components: [
      { title: "Cards", href: "/docs/components/glass-card", icon: Square },
      { title: "Buttons", href: "/docs/components/glass-button", icon: LayoutGrid },
      { title: "Avatar", href: "/docs/components/glass-avatar", icon: User },
      { title: "Dock", href: "/docs/components/glass-dock", icon: Dock },
      { title: "Timeline", href: "/docs/components/glass-timeline", icon: Clock },
      { title: "Popover", href: "/docs/components/glass-popover", icon: MessageSquare },
    ],
  },
  {
    category: "Advanced & Interactive",
    description: "Rich interactions and creative moments",
    icon: Zap,
    components: [
      { title: "Command Palette", href: "/docs/components/glass-command-palette", icon: Command },
      { title: "Morph Card", href: "/docs/components/glass-morph-card", icon: MousePointer },
      { title: "Orb", href: "/docs/components/glass-orb", icon: Sparkles, isNew: true },
      { title: "Waveform", href: "/docs/components/glass-waveform", icon: Gauge, isNew: true },
      { title: "Ripple", href: "/docs/components/glass-ripple", icon: Droplets },
      { title: "Gauge", href: "/docs/components/glass-gauge", icon: Gauge },
    ],
  },
];

export function ComponentGrid() {
  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {componentsByUseCase.map((section) => (
        <div key={section.category}>
          <div className="mb-8 flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <div className="w-fit rounded-lg bg-linear-to-br from-cyan-500/20 to-purple-500/20 p-2">
                  <section.icon className="w-5 h-5 text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">{section.category}</h3>
              </div>
              <p className="text-sm text-white/40">{section.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {section.components.map((component) => (
              <Link key={component.href} href={component.href} className="group">
                <div className="rounded-xl border border-white/7 bg-white/[0.025] p-4 text-center transition-all hover:border-cyan-300/20 hover:bg-white/[0.045]">
                  <component.icon className="w-5 h-5 mx-auto mb-2.5 text-white/50 group-hover:text-cyan-300 transition-colors" />
                  <span className="text-sm text-white/70 group-hover:text-white/90">{component.title}</span>
                  {component.isNew && (
                    <GlassBadge
                      variant="primary"
                      size="sm"
                      className="mt-2 text-[10px] px-1.5 py-0 block mx-auto w-fit"
                    >
                      New
                    </GlassBadge>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
