import internalFetcher from "../../http/internalFetcher.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";

/**
 * @typedef {'ADMIN' | 'LIBRARIAN' | 'USER'} Role
 */

/**
 * Middleware to authorize api route
 * @param {object} options
 * @param {null | Role} [options.role=null] Role to be required to be possible to access resource
 * @return {(function(e.Request, e.Response, e.NextFunction): void)|*}
 */
const withAuth = (options= {
    role: null
}) => {
    return async (req, res, next) => {
        const apiKey = req.header("X-API-KEY");
        if(apiKey === process.env.API_KEY) {
            return next();
        } else {
            try {
                const { payload: user } = await internalFetcher("auth", "POST", "authorize", {
                    headers: {
                        cookies: req.cookies
                    }
                })

                if(options?.role) {
                    if(!user.role) return genericErrorResponse(res, null, 403);

                    if(ROLES[user.role] < ROLES[options.role]) return genericErrorResponse(res, null, 403);
                }

                req.user = user;
            } catch (e) {
                return genericErrorResponse(res, null, e.status);
            }
        }

        next();
    }
}

export default withAuth;