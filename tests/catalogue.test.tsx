import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Catalogue from "@/features/properties/filters/Catalogue";
import { CatalogueEmptyState } from "@/features/properties/components/CatalogueEmptyState";
import { getListingsByCategory } from "@/features/properties/data/category";
import { listings } from "@/features/properties/data/listings";

vi.mock("@/components/layout/SiteContext", () => ({
  useSite: () => ({ showToast: vi.fn(), favorites: [], toggleFavorite: vi.fn(), openModal: vi.fn() }),
}));

describe("property catalogue categories", () => {
  it("keeps the acquisition demo data and leaves rental inventory empty", () => {
    expect(getListingsByCategory(listings, "buy").length).toBeGreaterThan(0);
    expect(getListingsByCategory(listings, "rent")).toEqual([]);
  });

  it("renders a specific empty state for the rental catalogue", () => {
    render(<Catalogue category="rent" title="Rental Listings" />);

    expect(screen.getByRole("status")).toHaveTextContent("Rental residences are coming soon");
    expect(screen.getByText("No Rental Residences Listed Yet")).toBeInTheDocument();
    expect(screen.queryByRole("article")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Clear All Filters" })).not.toBeInTheDocument();
  });

  it("filters acquisitions by developer and links to real property details", () => {
    render(<Catalogue category="buy" title="Featured Acquisitions" />);

    expect(screen.getAllByRole("article")).toHaveLength(6);
    fireEvent.change(screen.getByLabelText("Location, community or developer"), { target: { value: "EMAAR" } });
    fireEvent.click(screen.getByRole("button", { name: /Search Properties/ }));

    expect(screen.getAllByRole("article")).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: /Inspect Property Details/ })[0]).toHaveAttribute("href", expect.stringMatching(/^\/buy\/LL-/));
  });

  it("keeps the filter-reset action for an empty acquisition search", () => {
    const onClear = vi.fn();
    render(<CatalogueEmptyState category="buy" onClear={onClear} />);

    fireEvent.click(screen.getByRole("button", { name: /Clear All Filters/ }));
    expect(onClear).toHaveBeenCalledOnce();
  });
});
