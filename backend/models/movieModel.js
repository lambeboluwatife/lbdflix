import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  movieId: { type: String },
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  release_date: { type: String, required: true },
  poster_path: { type: String, required: true },
  total_likes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Movie", movieSchema);

export default Movie;
