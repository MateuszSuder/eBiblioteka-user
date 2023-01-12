import genericErrorResponse from "../../utils/genericErrorResponse.js";
import UserSchema from "../../schemas/UserSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";
import internalFetcher from "../../http/internalFetcher.js";
import bcrypt from "bcrypt";

/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id } = req.params;
    const newUser = req.body;

    // If role user check if id from req.params is equal to userRequestId
    if(req.user && req.user._id !== id) {
        if(req.user.role === "USER") return genericErrorResponse(res, null, 403);
    }

    const { password: userPassword, newPassword, ...rest } = newUser;

    if(newPassword) {
        if(!userPassword) {
            return genericErrorResponse(res, "Nie podano aktualnego hasła", 400);
        }

        if(newPassword.length < 8) {
            return genericErrorResponse(res, "Hasło musi mieć przynajmniej 8 znaków", 400);
        }

        const { password } = await UserSchema.findOne({ _id: id });

        try {
            if(!await bcrypt.compare(userPassword, password)) {
                return genericErrorResponse(res, "Hasło nie zgadza się", 401);
            }
        } catch (e) {
            console.log(e);
            return genericErrorResponse(res, e, 500);
        }
    }

    // Find user, if exists change his body to req.body (newUser)
    try {
        const { encrypted } = await internalFetcher("auth", "POST", "encrypt", {
            key: true,
            body: {
                value: newPassword
            }
        })

        const user = await UserSchema.findOneAndUpdate({_id: id}, {
            ...rest,
            password: encrypted
        })

        // If not found return 404
        if(!user) return genericErrorResponse(res, `Użytkownik z id ${id} nie znaleziony`, 404);

        res.status(200).send(null);
    } catch (e) {
        console.log(e);
        return mongooseErrorResponse(res, e);
    }
}