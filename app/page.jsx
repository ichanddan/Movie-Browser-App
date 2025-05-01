"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import MovieGrid from "@/components/MovieGrid";
import { searchMovies } from "@/services/movieService";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const results = await searchMovies(query);
      setMovies(results);
      if (results.length === 0) {
        setError("No movies found. Try a different search term.");
      }
    } catch (err) {
      setError("Failed to search movies. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl mb-8 text-center text-gray-800">Movie Browser</h1>
      <SearchBar onSearch={handleSearch} />

      {error && <p className="text-red-600 text-center my-8">{error}</p>}

      {loading ? (
        <div className="text-center my-8 text-lg text-gray-500">Loading...</div>
      ) : (
        <MovieGrid movies={movies} />
      )}
    </main>
  );
}
