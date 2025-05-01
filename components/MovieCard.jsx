import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-[#f7f7f7] rounded-lg overflow-hidden transition-all duration-200 h-full flex flex-col hover:translate-y-[-5px] hover:shadow-lg">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "/placeholder.svg?height=300&width=200"
          }
          alt={`${movie.Title} poster`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <FavoriteButton movie={movie} />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold mb-2 line-clamp-2 overflow-hidden">
          {movie.Title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{movie.Year}</p>

        <Link
          href={`/movie/${movie.imdbID}`}
          className="mt-auto py-2 px-4 bg-[#0070f3] text-white border-none rounded text-center text-sm transition-colors hover:bg-[#0051b3]"
        >
          More Info
        </Link>
      </div>
    </div>
  );
}
