import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FRONTVISIONX",
  description: "Coming Soon...",
  verification: {
    google: "pRsm_rd5v4K0iWEcESj0oUicgH_4e9QUmbIcoYPIeRI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}