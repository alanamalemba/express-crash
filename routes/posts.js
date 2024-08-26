import { Router } from "express";
import {
  createNewPost,
  deleteSinglePost,
  getAllPosts,
  getSinglePost,
  updateSinglePost,
} from "../controllers/postController.js";

const router = Router();

//get all posts
router.get("/", getAllPosts);

//get a single post
router.get("/:id", getSinglePost);

router.post("/", createNewPost);

// update posts
router.put("/:id", updateSinglePost);

//delete post
router.delete("/:id", deleteSinglePost);

export default router;
