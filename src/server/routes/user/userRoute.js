import express from "express";
import createUser from "../../../services/user/createUser.js";
import findUser from "../../../services/user/findUser.js";

const router = express.Router();


router.get("/", findUser);
router.post("/", createUser);

export default router;