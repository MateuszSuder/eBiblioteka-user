import UserSchema from "../../schemas/UserSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

export default async (req, res) => {
    const user = new UserSchema({ ...req.body });
    try {
        const { id } = await user.save();

        res.status(201).send({ id });
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}