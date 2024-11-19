import SearchResults from "./SearchResults";
import { searchMovie } from "../utils/searchMovie";

export default async function SearchResultsPage({ searchParams }) {
  const searchQuery = searchParams.search || "";
  const movies = searchQuery ? await searchMovie(searchQuery) : [];

  return <SearchResults searchQuery={searchQuery} movies={movies} />;
}
