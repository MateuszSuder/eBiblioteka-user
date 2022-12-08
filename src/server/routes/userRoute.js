import express from "express";
import createUser from "../../services/user/createUser.js";
import findUser from "../../services/user/findUser.js";
import withAuth from "../../framework/middlewares/withAuth.js";

const router = express.Router();

router.get("/", withAuth({ role: "USER" }), findUser);
router.post("/", withAuth({ role: "ADMIN" }), createUser);

export default router;