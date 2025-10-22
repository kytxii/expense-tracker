import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

// Load Ubuntu font
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>{children}</body>
    </html>
  );
}
