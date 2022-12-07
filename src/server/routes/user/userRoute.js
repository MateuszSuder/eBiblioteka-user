import express from "express";
import health from "../../../services/health/health.js";
import createUser from "../../../services/user/createUser.js";

const router = express.Router();


router.get("/:email", health);
router.post("/", createUser);

export default router;