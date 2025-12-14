export const metadata = {
  title: "Components",
  description: "Explore the components available in our library.",
};

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return <div className="container max-w-4xl mx-auto px-4">{children}</div>;
}
