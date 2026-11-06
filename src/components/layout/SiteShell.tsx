"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { EnquiryModal } from "@/components/ui/Modal";
import { SiteContext, type ModalState } from "./SiteContext";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function SiteShell({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState("");
  const [modal, setModal] = useState<ModalState>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 4200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!modal) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setModal(null); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [modal]);

  const showToast = (message: string) => setToast(message);
  const openModal = (state: ModalState) => setModal(state);
  const toggleFavorite = (id: string) => setFavorites((saved) =>
    saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id]);

  const modalKey = modal ? `${modal.kind}-${modal.listing?.id ?? "general"}` : "";

  return <SiteContext.Provider value={{ showToast, openModal, favorites, toggleFavorite }}>
    <Header />
    <main id="top">{children}</main>
    <Footer />
    <button className="mobile-advisory" onClick={() => openModal({ kind: "consultation" })}>
      Private Advisory <ArrowRight size={16} />
    </button>
    {toast && <div className="toast" role="status">
      <CheckCircle2 size={18} />{toast}
      <button onClick={() => setToast("")} aria-label="Dismiss message"><X size={15} /></button>
    </div>}
    {modal && <EnquiryModal key={modalKey} state={modal} onClose={() => setModal(null)} />}
  </SiteContext.Provider>;
}
