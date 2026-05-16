import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NWB Ventures | Strategy, Growth & Execution",
  description: "NWB Ventures partners with founders and businesses to build, scale, and lead in a rapidly evolving world.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
