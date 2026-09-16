import registry from "@/registry.json";

export const registryBaseUrl = "https://ui.eindev.ir/r/{name}.json";
export const registryNamespace = "@einui";

export const gettingStartedPages = [
  { title: "Introduction", href: "/docs" },
  { title: "Installation", href: "/docs/installation" },
  { title: "Theming", href: "/docs/theming" },
  { title: "Dark mode", href: "/docs/dark-mode" },
  { title: "CLI", href: "/docs/cli" },
] as const;

export const recommendedComponentSlugs = [
  "glass-button",
  "glass-card",
  "glass-input",
  "glass-dialog",
  "glass-tabs",
] as const;

export const projectRequirements = [
  "A React project with Tailwind CSS configured",
  "shadcn initialized in the project",
  "A current Node.js release supported by your project",
] as const;

interface RegistryItem {
  name: string;
  title?: string;
  type: string;
  description?: string;
  dependencies?: string[];
  files?: { path: string }[];
}

const registryItems = registry.items as RegistryItem[];

export const installableComponents = registryItems
  .filter(
    (item) =>
      (item.type === "registry:ui" || item.type === "registry:component") &&
      !item.files?.some((file) => file.path.startsWith("registry/widgets/"))
  )
  .map((item) => ({
    name: item.name,
    title: item.title ?? item.name,
    description: item.description ?? "Ein UI component.",
    dependencies: item.dependencies ?? [],
    command: `npx shadcn@latest add ${registryNamespace}/${item.name}`,
  }));

export const recommendedComponents = recommendedComponentSlugs
  .map((slug) => installableComponents.find((item) => item.name === slug))
  .filter((item): item is (typeof installableComponents)[number] => Boolean(item));

export function getInstallCommand(name: string) {
  return `npx shadcn@latest add ${registryNamespace}/${name}`;
}

export function getRegistryUrl(name = "{name}") {
  return registryBaseUrl.replace("{name}", name);
}
