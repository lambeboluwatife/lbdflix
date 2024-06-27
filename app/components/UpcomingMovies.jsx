// "use client";
// import { useState } from "react";
// import {
//   useQuery,
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";
// import axios from "axios";
// import moment from "moment";

// const apiKey = process.env.NEXT_PUBLIC_API_KEY;

// // Create a Query Client
// const queryClient = new QueryClient();

// // Define a fetch function to fetch data
// const fetchUpcomingMovies = async () => {
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
//   );
//   const genreRes = await fetch(
//     `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
//   );
//   const genreData = await genreRes.json();

//   const genresMap = {};
//   genreData.genres.forEach((genre) => {
//     genresMap[genre.id] = genre.name;
//   });

//   const movies = data.results.map((movie) => {
//     const genreNames = movie.genre_ids.map((id) => genresMap[id]);
//     return { ...movie, genre_names: genreNames };
//   });

//   return movies;
// };

// const UpcomingMovies = () => {
//   const { isLoading, error, data } = useQuery({
//     queryKey: ["upcomingMovies"],
//     queryFn: fetchUpcomingMovies,
//   });

//   const [activeCard, setActiveCard] = useState(0);

//   const handleActiveChange = (index) => {
//     setActiveCard(index);
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>An error occurred: {error.message}</div>;

//   const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

//   const moviesToDisplay = data.slice(0, 7);
//   console.log(moviesToDisplay);

//   return (
//     <div className="container">
//       <div className="upcoming-movies">
//         <h1>Upcoming Movies</h1>
//         {isLoading && <div>Loading...</div>}
//         {error && <h4>An error has occurred: {error.message}</h4>}
//         <div className="expanding-cards">
//           {moviesToDisplay.map((movie, index) => (
//             <div
//               className={activeCard === index ? "panel active" : "panel"}
//               key={movie.id}
//               style={{
//                 backgroundImage: `url(${IMG_PATH}${movie.backdrop_path})`,
//               }}
//               onClick={() => handleActiveChange(index)}
//             >
//               <h3>{movie.original_title}</h3>
//               <h5>{movie.genre_names.join(" ▫ ")}</h5>
//               <h6>Coming: {moment(movie.release_date).format("D MMMM")}</h6>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const UpcomingMoviesWithQueryClient = () => (
//   <QueryClientProvider client={queryClient}>
//     <UpcomingMovies />
//   </QueryClientProvider>
// );

// export default UpcomingMoviesWithQueryClient;

"use client";
import { useState, useEffect } from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

// Create a Query Client
const queryClient = new QueryClient();

// Define a fetch function to fetch data
const fetchUpcomingMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
  );
  const genreRes = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
  );
  const genreData = await genreRes.json();

  const genresMap = {};
  genreData.genres.forEach((genre) => {
    genresMap[genre.id] = genre.name;
  });

  const movies = data.results.map((movie) => {
    const genreNames = movie.genre_ids.map((id) => genresMap[id]);
    return { ...movie, genre_names: genreNames };
  });

  return movies;
};

const UpcomingMovies = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: fetchUpcomingMovies,
  });

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(Math.floor(Math.random() * 5) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleActiveChange = (index) => {
    setActiveCard(index);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const today = new Date();

  const filterMovies = (movies) => {
    return movies.filter((movie) => {
      const releaseDate = new Date(movie.release_date);
      return releaseDate > today;
    });
  };

  const filterDate = (date) => {
    const releaseDate = new Date(date);

    if (releaseDate > today) {
      return true;
    } else {
      return false;
    }
  };

  const moviesToDisplay = data.slice(0, 7);

  return (
    <div className="container">
      <div className="upcoming-movies">
        <h1>Upcoming Movies</h1>
        {isLoading && <div>Loading...</div>}
        {error && <h4>An error has occurred: {error.message}</h4>}
        <div className="expanding-cards">
          {moviesToDisplay.map((movie, index) => (
            <div
              className={activeCard === index ? "panel active" : "panel"}
              key={movie.id}
              style={{
                backgroundImage: `url(${IMG_PATH}${movie.backdrop_path})`,
              }}
              onClick={() => handleActiveChange(index)}
            >
              <h3>{movie.original_title}</h3>
              <h5>{movie.genre_names.join(" ▫ ")}</h5>
              <h6>
                {filterDate(movie.release_date)
                  ? `Coming: ${moment(movie.release_date).format("MMMM D")}`
                  : `Out ${moment(movie.release_date).format("MMMM D")}`}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const UpcomingMoviesWithQueryClient = () => (
  <QueryClientProvider client={queryClient}>
    <UpcomingMovies />
  </QueryClientProvider>
);

export default UpcomingMoviesWithQueryClient;
