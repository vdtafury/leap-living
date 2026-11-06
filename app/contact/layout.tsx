import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | LEAP LIVING",
  description: "Get in touch with the Leap Living advisory team for private real estate consultation in Dubai.",
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
