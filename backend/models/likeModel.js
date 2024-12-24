import mongoose, { Schema } from "mongoose";

const likeSchema = mongoose.Schema(
  {
    movieDetails: [
      {
        movieId: { type: Schema.Types.ObjectId, ref: "Movie" },
        tmdbId: { type: String, required: true },
        title: { type: String, required: true },
        rating: { type: Number, required: true },
        release_date: { type: String, required: true },
        poster_path: { type: String, required: true },
        total_likes: { type: Number, default: 0 },
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

const Like = mongoose.model("Like", likeSchema);

export default Like;
