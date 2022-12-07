import UserSchema from "../../schemas/UserSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

export default async (req, res) => {
    const { email, id, includePassword } = req.query;
    console.log(email, id);

    try {
        let query;
        if(id) {
            console.log(id);
            query = UserSchema.findOne({ _id: id });
        } else if(email) {
            query = UserSchema.findOne({ email });
        }

        // todo add get without query - from jwt

        const select = { __v: 0 }
        if(!includePassword) select.password = 0;

        query.select(select);

        query.exec((err, user) => {
            console.log(err);
            if(err) return mongooseErrorResponse(res, err);

            return res.status(200).send(user);
        });
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }
}