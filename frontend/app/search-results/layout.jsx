export async function generateMetadata({ searchParams }) {
  const searchQuery = searchParams?.get("search") || "";

  return {
    title: searchQuery
      ? `LBDFlix - Search Results for "${searchQuery}"`
      : "LBDFlix - Search Results",
    description: searchQuery
      ? `Search results for "${searchQuery}" on LBDFlix.`
      : "Search results based on your query.",
    keywords: searchQuery
      ? `${searchQuery}, movies, trending, search results`
      : "avatar, action, comedy, drama, mystery, horror, romance, movies, movie, trailer, rebel moon, zack synder, watch, stream, download, reviews, cast, US, free, trending, trending movies",
    author: "Lambe Boluwatife",
  };
}

const SearchResultLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default SearchResultLayout;
