import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Noto_Sans_JP({ subsets: [ "latin" ], weight: [ "400" ] });

export const metadata: Metadata = {
  title: "Cloudflare Pages Contact Form Sample",
  description: "OPENSPHERE Inc. blog article sample app.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="ja">
      <body className={ inter.className }>
      <section className="section">
        <div className="container is-max-desktop">
          { children }
        </div>
      </section>
      </body>
      </html>
  );
}
