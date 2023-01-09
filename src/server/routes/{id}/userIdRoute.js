import withAuth from "../../../framework/middlewares/withAuth.js";
import express from "express";
import editUser from "../../../services/user/editUser.js";
import deleteUser from "../../../services/user/deleteUser.js";

const router = express.Router({ mergeParams: true });

router.put("/", withAuth({ role: "USER" }), editUser);
router.delete("/", withAuth({ role: "ADMIN" }), deleteUser);

export default router;