import express from "express";
import { getAllBlogs, addBlog, updateBlog, getBlog, deleteBlog, getBlogByUser } from "../controllers/blog-controller";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getBlog);
blogRouter.delete("/:id", deleteBlog)
blogRouter.get("/user/:id", getBlogByUser)

export default blogRouter;