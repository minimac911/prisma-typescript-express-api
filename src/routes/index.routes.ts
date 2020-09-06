import { Router } from "express";
import { UserRoutes } from "./user.routes";
const router: Router = Router();

router.use("/user", UserRoutes);

export const MainRouter: Router = router;
