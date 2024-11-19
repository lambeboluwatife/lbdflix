export async function searchMovie(searchQuery) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const movies = await response.json();
    return movies.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
