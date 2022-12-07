import UserSchema from "../../schemas/UserSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

export default async (req, res) => {
    console.log("create", req.body);
    const user = new UserSchema({ ...req.body });
    try {
        const { id } = await user.save();
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }

    res.send("hello");
}