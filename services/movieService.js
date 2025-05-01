const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(query) {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.Response === "False") {
      return [];
    }

    return data.Search || [];
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
}

export async function getMovieDetails(id) {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "Movie not found");
    }

    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
}
