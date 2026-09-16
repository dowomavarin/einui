"use client";

import AdminBlockPage from "@/registry/blocks/admin/page";
import { BlockDocPage } from "@/components/docs/block-doc-page";
import { blockItems } from "@/lib/docs/docs-content";

const block = blockItems.find((item) => item.name === "admin-panel")!;

export default function AdminPageDocPage() {
  return <BlockDocPage block={block} previewLabel="Interactive admin panel preview" stageSize="tall" previewTone="dashboard" preview={<AdminBlockPage />} />;
}
