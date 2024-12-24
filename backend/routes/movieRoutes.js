import express from "express";
const router = express.Router();
import { likeMovie } from "../controllers/movieControllers.js";

import { protect } from "../middleware/authMiddleware.js";

router.post("/like", protect, likeMovie);

export default router;
