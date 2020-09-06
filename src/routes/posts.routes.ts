import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { PostController } from "../controllers/post.controller";

const router: Router = Router();
const postController: PostController = new PostController();

router.use("/");

const PostRoutes: Router = Router();
