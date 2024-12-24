import express from "express";
const router = express.Router();
import { likeMovie, favoriteMovie } from "../controllers/movieControllers.js";

import { protect } from "../middleware/authMiddleware.js";

router.post("/like", protect, likeMovie);
router.post("/favorite", protect, favoriteMovie);

export default router;
