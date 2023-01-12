import express from "express";
import withAuth from "../../../framework/middlewares/withAuth.js";
import getAllUsers from "../../../services/user/getAllUsers.js";

const router = express.Router({ mergeParams: true });

router.get("/", withAuth({ role: "LIBRARIAN" }), getAllUsers);

export default router;