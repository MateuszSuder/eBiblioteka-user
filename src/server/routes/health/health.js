import express from "express";
import health from "../../../services/health/health.js";

const router = express.Router();


router.get("/", health);
router.post("/:id", async (req, res) => {
    const {id} = (req.params);
    res.send("OK");
});

export default router;