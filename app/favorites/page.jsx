"use client"

import { useContext } from "react"
import { FavoritesContext } from "@/context/FavoritesContext"
import MovieGrid from "@/components/MovieGrid"

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext)

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl mb-8 text-center text-gray-800">Your Favorite Movies</h1>

      {favorites.length === 0 ? (
        <div className="text-center my-16 text-gray-600 leading-relaxed">
          <p>You haven't added any favorites yet.</p>
          <p>Search for movies and click the heart icon to add them here!</p>
        </div>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </div>
  )
}
