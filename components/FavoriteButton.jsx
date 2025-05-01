"use client"

import { useContext } from "react"
import { FavoritesContext } from "@/context/FavoritesContext"

export default function FavoriteButton({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext)

  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID)

  const toggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (isFavorite) {
      removeFavorite(movie.imdbID)
    } else {
      addFavorite(movie)
    }
  }

  return (
    <button
      className={`absolute top-2.5 right-2.5 bg-white/80 border-none rounded-full w-9 h-9 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-white/90 z-10 ${
        isFavorite ? "bg-white/90" : ""
      }`}
      onClick={toggleFavorite}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isFavorite ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#ff4081]"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  )
}
