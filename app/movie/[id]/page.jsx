"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getMovieDetails } from "@/services/movieService";
import FavoriteButton from "@/components/FavoriteButton";

export default function MovieDetailsPage() {
  const params = useParams();
  const id = params.id;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(id);
        setMovie(details);
      } catch (err) {
        setError("Failed to load movie details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center my-16 text-lg">Loading...</div>;
  }

  if (error || !movie) {
    return (
      <div className="text-center my-16 text-red-600">
        {error || "Movie not found"}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative self-center">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "/placeholder.svg?height=450&width=300"
            }
            alt={`${movie.Title} poster`}
            className="rounded-lg shadow-md max-h-[450px] object-cover"
          />
          <FavoriteButton movie={movie} />
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold mb-2">
            {movie.Title}{" "}
            <span className="font-normal text-gray-600">({movie.Year})</span>
          </h1>

          <div className="flex gap-2 text-gray-600 flex-wrap">
            <span>{movie.Rated}</span>
            <span>•</span>
            <span>{movie.Runtime}</span>
            <span>•</span>
            <span>{movie.Genre}</span>
            <span>•</span>
            <span>{movie.Released}</span>
          </div>

          <div className="flex gap-4 flex-wrap mt-2">
            {movie.Ratings.map((rating, index) => (
              <div key={index} className="bg-gray-100 px-4 py-2 rounded">
                <span className="font-semibold mr-2">{rating.Source}:</span>
                <span>{rating.Value}</span>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Plot</h3>
            <p>{movie.Plot}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-base text-gray-600 mb-1">Director</h3>
              <p>{movie.Director}</p>
            </div>

            <div>
              <h3 className="text-base text-gray-600 mb-1">Writers</h3>
              <p>{movie.Writer}</p>
            </div>

            <div>
              <h3 className="text-base text-gray-600 mb-1">Actors</h3>
              <p>{movie.Actors}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
