import UserSchema from "../../schemas/UserSchema.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserSchema.findOneAndUpdate(
            {_id: id},
            {isBanned: true}
        )

        // If not found return 404
        if(!user) return genericErrorResponse(res, `Użytkownik z id ${id} nie znaleziony`, 404);

        res.status(200).send(null);
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}