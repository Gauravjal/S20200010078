import express from "express";
// import { createPost } from "../controllers/Post.js";
import {fetchTrains} from "../controllers/Trains.js";
// import { postComment } from "../controllers/Post.js";
// import { likePost } from "../controllers/Post.js";
// import { likeComment } from "../controllers/Post.js";
// import {followUser} from "../controllers/Users.js"
// import { uploadFiles } from "../controllers/Post.js";
const router = express.Router();
// router.post("/post", createPost);
// router.patch("/post/:id", postComment);
// router.patch("/post/like/:id", likePost);
// router.patch("/comment/like/:id", likeComment);
// router.patch("/follow/:id", followUser);
router.get("/",fetchTrains);

export default router;
