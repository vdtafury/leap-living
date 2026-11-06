import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FeaturedPropertiesSection } from "@/components/sections/featured-properties-section";
import { PropertySearch } from "@/components/property-search";
import { SiteHeader } from "@/components/site-header";
import { featuredProperties, propertiesForCategory } from "@/lib/home-data";

describe("property category data", () => {
  it("returns the acquisition portfolio and leaves rentals empty until CRM data exists", () => {
    expect(propertiesForCategory("buy")).toHaveLength(3);
    expect(propertiesForCategory("rent")).toEqual([]);
  });
});

describe("featured properties", () => {
  it("shows a real empty state for rent and returns to the buy cards when switched back", async () => {
    const user = userEvent.setup();
    render(<FeaturedPropertiesSection />);

    expect(screen.getAllByRole("article")).toHaveLength(featuredProperties.length);
    await user.click(screen.getByRole("tab", { name: "Prime Residences (Rent)" }));

    expect(screen.getByRole("status")).toHaveTextContent("Rental listings are coming soon");
    expect(screen.queryAllByRole("article")).toHaveLength(0);
    expect(screen.getByRole("tab", { name: "Prime Residences (Rent)" })).toHaveAttribute("aria-selected", "true");

    await user.click(screen.getByRole("tab", { name: "Featured Acquisitions (Buy)" }));
    expect(screen.getAllByRole("article")).toHaveLength(featuredProperties.length);
  });

  it("toggles a property's saved state accessibly", async () => {
    const user = userEvent.setup();
    render(<FeaturedPropertiesSection />);
    const favoriteButton = screen.getByRole("button", { name: `Save ${featuredProperties[0].name}` });

    await user.click(favoriteButton);

    expect(screen.getByRole("button", { name: `Remove ${featuredProperties[0].name}` })).toHaveAttribute("aria-pressed", "true");
  });
});

describe("property search", () => {
  it("keeps filters editable and explains that live results are not connected yet", async () => {
    const user = userEvent.setup();
    render(<PropertySearch />);

    await user.type(screen.getByPlaceholderText("e.g. Downtown Dubai, Palm Jumeirah"), "Downtown Dubai");
    await user.click(screen.getByRole("tab", { name: "Rent" }));
    expect(screen.getByRole("tab", { name: "Rent" })).toHaveAttribute("aria-selected", "true");
    await user.click(screen.getByRole("button", { name: /Explore Verified Properties/ }));

    expect(screen.getByRole("status")).toHaveTextContent("Live property search will be connected to the CRM");
    expect(screen.getByPlaceholderText("e.g. Downtown Dubai, Palm Jumeirah")).toHaveValue("Downtown Dubai");
  });
});

describe("site navigation", () => {
  it("opens the mobile menu and closes it after following a link", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const toggle = screen.getByRole("button", { name: "Open navigation" });

    await user.click(toggle);
    expect(screen.getByRole("button", { name: "Close navigation" })).toHaveAttribute("aria-expanded", "true");
    const navigation = screen.getByRole("navigation", { name: "Main navigation" });
    await user.click(within(navigation).getByRole("link", { name: "Buy" }));

    expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  });
});
