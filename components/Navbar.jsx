"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { FavoritesContext } from "@/context/FavoritesContext";

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#0070f3]">
          Movie Browser
        </Link>

        <div className="flex gap-6">
          <Link
            href="/"
            className={`relative py-2 font-medium transition-colors hover:text-[#0070f3] ${
              pathname === "/"
                ? "text-[#0070f3] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0070f3]"
                : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/favorites"
            className={`relative py-2 font-medium transition-colors hover:text-[#0070f3] ${
              pathname === "/favorites"
                ? "text-[#0070f3] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0070f3]"
                : ""
            }`}
          >
            Favorites
            {favorites.length > 0 && (
              <span className="inline-flex items-center justify-center bg-[#ff4081] text-white rounded-full w-5 h-5 text-xs ml-2">
                {favorites.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
