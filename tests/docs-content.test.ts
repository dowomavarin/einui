import {
  getInstallCommand,
  getRegistryUrl,
  installableComponents,
  registryNamespace,
} from "@/lib/docs/docs-content";

describe("documentation content", () => {
  it("uses the canonical registry namespace and URL", () => {
    expect(registryNamespace).toBe("@einui");
    expect(getRegistryUrl()).toBe("https://ui.eindev.ir/r/{name}.json");
    expect(getInstallCommand("glass-card")).toBe(
      "npx shadcn@latest add @einui/glass-card",
    );
  });

  it("only exposes registry-backed installable items", () => {
    expect(installableComponents.length).toBeGreaterThan(0);
    expect(installableComponents.every((item) => item.command.includes("@einui/"))).toBe(true);
    expect(installableComponents.some((item) => item.name === "glass-card")).toBe(true);
  });
});
