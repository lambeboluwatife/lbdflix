import mongoose, { Schema } from "mongoose";

const movieSchema = new mongoose.Schema({
  tmdbId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  release_date: { type: String, required: true },
  poster_path: { type: String, required: true },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
