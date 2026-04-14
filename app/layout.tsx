import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mal & Mahl | Kaffee, Kuchen & Keramikbemalung",
  description:
    "Moderne Café- und Keramikbemalungswelt in Nürnberg – nachhaltig, botanisch, warm und hochwertig gestaltet.",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
