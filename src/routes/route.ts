import { Router } from "express";

const router = Router();

router.get(/* #swagger.tags = ['Welcome']*/ "/Welcome", (req, res) => {
    res.send("Welcome!");
});

export default router;