import asyncHandler from "express-async-handler";
import Movie from "../models/movieModel.js";
import User from "../models/userModel.js";
import Like from "../models/likeModel.js";

const likeMovie = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const { tmdbId, title, rating, release_date, poster_path } = req.body;

  try {
    let movie = await Movie.findOne({ tmdbId });

    if (!movie) {
      movie = await Movie.create({
        tmdbId,
        title,
        rating,
        release_date,
        poster_path,
      });
    }

    const like = await Like.findOne({
      "user.id": user._id,
      "movieDetails.tmdbId": tmdbId,
    });

    if (!like) {
      const newLike = await Like.create({
        movieDetails: {
          tmdbId,
          title,
          rating,
          release_date,
          poster_path,
        },
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          name: user.name,
        },
      });

      movie.likes.push(newLike._id);
      await movie.save();

      user.liked_movies.push({
        id: newLike._id,
        movieId: movie._id,
        tmdbId,
        title,
        rating,
        release_date,
        poster_path,
      });
      await user.save();

      res.status(201).json({ message: "Movie liked" });
    } else {
      await Like.findByIdAndDelete(like._id);

      movie.likes.pull(like._id);
      await movie.save();

      user.liked_movies.pull(like._id);
      await user.save();

      res.status(200).json({ message: "Movie unliked" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

export { likeMovie };
