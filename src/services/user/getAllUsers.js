import UserSchema from "../../schemas/UserSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    try {
        const users = await UserSchema.find({}, "-password -__v");

        res.status(200).send({users: users});
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}