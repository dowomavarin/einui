"use client";

import ForgotPasswordPageBlock from "@/registry/blocks/auth/forgot-password-page";
import { BlockDocPage } from "@/components/docs/block-doc-page";
import { blockItems } from "@/lib/docs/docs-content";

const block = blockItems.find((item) => item.name === "forgot-password-page")!;

export default function ForgotPasswordPageDocPage() {
  return <BlockDocPage block={block} previewLabel="Interactive password recovery preview" preview={<ForgotPasswordPageBlock />} />;
}
