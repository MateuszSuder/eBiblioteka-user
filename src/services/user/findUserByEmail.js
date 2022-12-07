import UserSchema from "../../schemas/UserSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

export default async (req, res) => {
    const { email } = req.params;

    try {
        const query = UserSchema.findOne({ email });
        query.select({ password: 0, __v: 0 });

        query.exec((err, user) => {
            if(err) return mongooseErrorResponse(res, err);

            return res.status(200).send(user);
        });
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}