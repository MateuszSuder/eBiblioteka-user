import UserSchema from "../../schemas/UserSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";

export default async (req, res) => {
    if(!req.apiKey) return genericErrorResponse(res, null, 403);

    const user = new UserSchema({ ...req.body, role: "USER" });
    try {
        const { id } = await user.save();

        res.status(201).send({ id });
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}