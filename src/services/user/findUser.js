import UserSchema from "../../schemas/UserSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";

export default async (req, res) => {
    const { email, id, includePassword } = req.query;

    try {
        let query;
        if(id) {
            if(req.user.role === "USER" && id !== req.user._id) return genericErrorResponse(res, null, 403);
            query = UserSchema.findOne({ _id: id });
        } else if(email) {
            if(req.user.role === "USER" && email !== req.user.email) return genericErrorResponse(res, null, 403);
            query = UserSchema.findOne({ email });
        } else {
            query = UserSchema.findOne({ _id: req.user._id});
        }

        const select = { __v: 0 }
        if(!includePassword) select.password = 0;

        query.select(select);

        query.exec((err, user) => {
            if(err) return mongooseErrorResponse(res, err);

            return res.status(200).send(user);
        });
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}