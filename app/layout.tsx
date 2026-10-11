import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OmniDrive — Your drives, together",
  description: "A private-by-default dashboard for connected Google Drive accounts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
