import { Router } from "express";

const router: Router = Router();

router.use("/user", function (req, res) {
    res.send('hello world')
});

export const MainRouter: Router = router;
