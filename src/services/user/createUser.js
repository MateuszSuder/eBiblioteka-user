import UserSchema from "../../schemas/UserSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";
import internalFetcher from "../../http/internalFetcher.js";

export default async (req, res) => {
    if(!req.apiKey) return genericErrorResponse(res, null, 403);

    const { password, ...rest } = req.body;

    if(!password) {
        return genericErrorResponse(res, "Password is required", 400);
    }

    if(password < 8) {
        return genericErrorResponse(res, "Password must be at least 8 characters", 400);
    }

    try {
        const { encrypted } = await internalFetcher("auth", "POST", "encrypt", {
            key: true,
            body: {
                value: password
            }
        })

        const user = new UserSchema({ ...rest, password: encrypted, role: "USER" });
        try {
            const { id } = await user.save();

            res.status(201).send({ id });
        } catch (e) {
            return mongooseErrorResponse(res, e);
        }
    } catch (e) {
        console.log(e);
        return genericErrorResponse(res, e, 500);
    }
}