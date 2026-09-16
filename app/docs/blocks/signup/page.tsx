"use client";

import SignupPageBlock from "@/registry/blocks/auth/signup-page";
import { BlockDocPage } from "@/components/docs/block-doc-page";
import { blockItems } from "@/lib/docs/docs-content";

const block = blockItems.find((item) => item.name === "signup-page")!;

export default function SignupPageDocPage() {
  return <BlockDocPage block={block} previewLabel="Interactive sign-up page preview" preview={<SignupPageBlock />} />;
}
