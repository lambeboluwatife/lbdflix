"use client";
import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [likedMovies] = useState([
    {
      id: 1,
      title: "Venom",
      poster: "https://via.placeholder.com/200",
      rating: "6.7",
    },
    {
      id: 2,
      title: "Moana",
      poster: "https://via.placeholder.com/200",
      rating: "7.5",
    },
  ]);

  const [favorites] = useState([
    {
      id: 3,
      title: "Armor",
      poster: "https://via.placeholder.com/200",
      rating: "6.0",
    },
  ]);

  return (
    <div className="dashboard">
      <section className="movie-section">
        <h2>Liked Movies</h2>
        <div className="movie-grid">
          {likedMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={movie.poster}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-overlay">
                <h3>{movie.title}</h3>
                <p>⭐ {movie.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Favorite Movies */}
      <section className="movie-section">
        <h2>Favorite Movies</h2>
        <div className="movie-grid">
          {favorites.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={movie.poster}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-overlay">
                <h3>{movie.title}</h3>
                <p>⭐ {movie.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
