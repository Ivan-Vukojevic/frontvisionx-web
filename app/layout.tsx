import type { ReactNode } from "react";

export const metadata = {
  title: "FRONTVISIONX",
  description: "Coming Soon",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
