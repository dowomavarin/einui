import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { CopyButton } from "@/components/docs/copy-button";

describe("CopyButton", () => {
  it("has an accessible copy label and reports success", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    render(<CopyButton text="npx shadcn@latest add @einui/glass-card" />);
    const button = screen.getByRole("button", { name: "Copy code" });

    fireEvent.click(button);

    await waitFor(() => {
      expect(writeText).toHaveBeenCalledWith("npx shadcn@latest add @einui/glass-card");
      expect(screen.getByRole("button", { name: "Copied" })).toBeInTheDocument();
    });
  });

  it("reports clipboard failures", async () => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error("Clipboard unavailable")) },
    });

    render(<CopyButton text="example" />);
    fireEvent.click(screen.getByRole("button", { name: "Copy code" }));

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Copy failed" })).toBeInTheDocument();
    });
  });
});
