import { ArrowRight, Search } from "lucide-react";
import type { Category } from "@/types/property";

export function CatalogueEmptyState({ category, onClear }: { category: Category; onClear: () => void }) {
  if (category === "rent") {
    return (
      <div className="empty-state rental-empty-state" role="status" aria-live="polite">
        <Search size={26} aria-hidden="true" />
        <h3>Rental residences are coming soon</h3>
        <p>Rental listings will appear here when current availability is connected to the CRM.</p>
      </div>
    );
  }

  return (
    <div className="empty-state" role="status" aria-live="polite">
      <Search size={26} aria-hidden="true" />
      <h3>No properties match these criteria</h3>
      <p>Try widening the price range or clearing a filter to see the full portfolio.</p>
      <button className="button button-teal" onClick={onClear}>Clear All Filters <ArrowRight size={16} /></button>
    </div>
  );
}
