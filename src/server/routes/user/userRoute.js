import express from "express";
import createUser from "../../../services/user/createUser.js";
import findUserByEmail from "../../../services/user/findUserByEmail.js";

const router = express.Router();


router.get("/:email", findUserByEmail);
router.post("/", createUser);

export default router;