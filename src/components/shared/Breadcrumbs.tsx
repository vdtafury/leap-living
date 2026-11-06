import Link from "next/link";

export function Breadcrumbs({ crumb }: { crumb: string }) {
  return <p className="breadcrumb"><Link href="/">HOME</Link><span>/</span>{crumb}</p>;
}
