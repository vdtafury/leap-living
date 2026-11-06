import Link from "next/link";

export default function NotFound() {
  return <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", textAlign: "center", padding: "80px 24px" }}>
    <div>
      <p style={{ color: "var(--teal-dark)", letterSpacing: ".18em", fontSize: 11, fontWeight: 700 }}>404 · PAGE NOT FOUND</p>
      <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: "clamp(36px, 6vw, 64px)", margin: "18px 0 26px", color: "var(--ink)" }}>
        This page isn&apos;t available.
      </h1>
      <Link className="button button-teal" href="/">Back to Home</Link>
    </div>
  </main>;
}
