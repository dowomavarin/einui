"use client";

import LoginPageBlock from "@/registry/blocks/auth/login-page";
import { BlockDocPage } from "@/components/docs/block-doc-page";
import { blockItems } from "@/lib/docs/docs-content";

const block = blockItems.find((item) => item.name === "login-page")!;

export default function LoginPageDocPage() {
  return <BlockDocPage block={block} previewLabel="Interactive login page preview" preview={<LoginPageBlock />} />;
}
