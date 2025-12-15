"use client"

import { useState } from "react"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { SpotlightStep, GlassSpotlight } from "@/registry/innovative/glass-spotlight"
import { GlassButton, GlassCard, GlassCardContent } from "@/registry/liquid-glass"

const spotlightSteps: SpotlightStep[] = [
  {
    target: "#spotlight-demo-1",
    title: "Welcome to Ein UI",
    description: "This is an interactive tour component that highlights elements on your page.",
    placement: "bottom",
  },
  {
    target: "#spotlight-demo-2",
    title: "Feature Highlight",
    description: "Use spotlights to guide users through new features or onboarding flows.",
    placement: "bottom",
  },
  {
    target: "#spotlight-demo-3",
    title: "All Done!",
    description: "Spotlights support keyboard navigation and multiple placement options.",
    placement: "top",
  },
]

const basicCode = `import { GlassSpotlight } from "@/components/liquid-glass"

const steps = [
  {
    target: "#element-1",
    title: "Welcome",
    description: "This is step 1",
    placement: "bottom",
  },
  {
    target: "#element-2",
    title: "Next Step",
    description: "This is step 2",
  },
]

<GlassSpotlight
  steps={steps}
  open={isOpen}
  onOpenChange={setIsOpen}
  onComplete={() => console.log("Tour complete!")}
/>`

export default function SpotlightPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Spotlight"
        description="An overlay component for onboarding tours and feature discovery that dims the page except for a highlighted element with glass-bordered focus areas."
      />

      <CLIInstall componentName="glass-spotlight" />

      <ComponentPreview
        title="Interactive Tour"
        description="Click the button to start an interactive spotlight tour."
        preview={
          <div className="flex flex-col items-center gap-6 w-full">
            <GlassButton variant="primary" onClick={() => setOpen(true)}>
              Start Tour
            </GlassButton>

            <div className="grid grid-cols-3 gap-4 w-full">
              <GlassCard id="spotlight-demo-1">
                <GlassCardContent className="p-4 text-center">
                  <p className="text-white/80 text-sm">Step 1</p>
                </GlassCardContent>
              </GlassCard>
              <GlassCard id="spotlight-demo-2">
                <GlassCardContent className="p-4 text-center">
                  <p className="text-white/80 text-sm">Step 2</p>
                </GlassCardContent>
              </GlassCard>
              <GlassCard id="spotlight-demo-3">
                <GlassCardContent className="p-4 text-center">
                  <p className="text-white/80 text-sm">Step 3</p>
                </GlassCardContent>
              </GlassCard>
            </div>

            <GlassSpotlight
              steps={spotlightSteps}
              open={open}
              onOpenChange={setOpen}
              onComplete={() => setOpen(false)}
            />
          </div>
        }
        code={basicCode}
      />
    </div>
  )
}
