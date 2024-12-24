import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: [true, "Please provide a profile picture"],
    },
    liked_movies: [
      {
        movieId: { type: Schema.Types.ObjectId, ref: "Movie" },
        tmdbId: { type: String, required: true },
        title: { type: String, required: true },
        rating: { type: Number, required: true },
        release_date: { type: String, required: true },
        poster_path: { type: String, required: true },
      },
    ],
    favorite_movies: [
      {
        movieId: { type: Schema.Types.ObjectId, ref: "Movie" },
        tmdbId: { type: String, required: true },
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
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
