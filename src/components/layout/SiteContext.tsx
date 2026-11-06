"use client";

import { createContext, useContext } from "react";
import type { Listing } from "@/types/property";

export type ModalState = {
  kind: "dossier" | "viewing" | "valuation" | "consultation" | "offmarket";
  listing?: Listing;
} | null;

type SiteContextValue = {
  showToast: (message: string) => void;
  openModal: (state: ModalState) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
};

export const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) throw new Error("useSite must be used inside SiteShell");
  return value;
}
