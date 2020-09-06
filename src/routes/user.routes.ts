import { Router, NextFunction, Response, Request } from "express";
import { PrismaClient, User } from "@prisma/client";
import { UserController } from "../controllers/user.controller";
import { runInNewContext } from "vm";

const router: Router = Router();
const userController: UserController = new UserController();
/**
 * GET /api/user
 */
router.use("/", userController.getAllUsers.bind(userController));
/**
 * ALT METHOD
 * router.use("/", (req: Request, res: Response, next: NextFunction) =>
 *      userController.getAllUsers(req, res, next)
 * );
 */

export const UserRoutes: Router = router;
