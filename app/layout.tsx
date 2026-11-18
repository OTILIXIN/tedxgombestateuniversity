
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";

const fontVariables = {
  "--font-geist-sans": "Arial, Helvetica, sans-serif",
  "--font-geist-mono":
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
} as CSSProperties;

export const metadata: Metadata = {
  title: "TEDxGombeStateUniversity | Official Website",
  description:
    "The official website of TEDxGombeStateUniversity, an independently organized TEDx event licensed by TED.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      style={fontVariables}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
