import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  icons: {
    icon: "/hero.png",
  },
  title: "Car Nova",
  description: "Discover the best cars in the world.",
  keywords: ["Discover", "Best cars", "Cars", "Search"],
  openGraph: {
    title: "Car Nova",
    description: "Discover the best cars in the world.",
    images: "/hero.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
