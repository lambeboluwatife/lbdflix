"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchMovie = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery) {
      alert("Please enter a movie name.");
      return;
    }

    router.push(`/search-results?search=${searchQuery}`);

    setSearchQuery("");
  };

  return (
    <form className="search-form">
      <div className="search-input-container">
        <div className="search-icon-container">
          <svg
            className="search-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="search-input"
          placeholder="Search for a Movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button type="submit" className="search-button" onClick={onSubmit}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchMovie;
