"use client";

import PricingBlockPage from "@/registry/blocks/pricing/page";
import { BlockDocPage } from "@/components/docs/block-doc-page";
import { blockItems } from "@/lib/docs/docs-content";

const block = blockItems.find((item) => item.name === "pricing-page")!;

export default function PricingPageDocPage() {
  return <BlockDocPage block={block} previewLabel="Interactive pricing page preview" stageSize="wide" previewTone="pricing" preview={<PricingBlockPage />} />;
}
