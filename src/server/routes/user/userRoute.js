import express from "express";
import health from "../../../services/health/health.js";

const router = express.Router();


router.get("/:email", health);
router.post("/", health);

export default router;