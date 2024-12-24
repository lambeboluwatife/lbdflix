import mongoose, { Schema } from "mongoose";

const favoriteSchema = mongoose.Schema(
  {
    movieDetails: [
      {
        movieId: { type: Schema.Types.ObjectId, ref: "Movie" },
        tmdbId: { type: String, required: true },
        title: { type: String, required: true },
        rating: { type: Number, required: true },
        release_date: { type: String, required: true },
        poster_path: { type: String, required: true },
      },
    ],
    user: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      username: String,
      email: String,
      name: String,
    },
  },
  {
    timestamps: true,
  }
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;
