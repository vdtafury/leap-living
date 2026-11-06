import type { Category, Listing } from "@/types/property";

export function getListingsByCategory(listings: Listing[], category: Category): Listing[] {
  return listings.filter((listing) => listing.category === category);
}
