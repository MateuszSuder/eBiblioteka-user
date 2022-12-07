/**
 * Create http error response when mongoose error
 * @param {e.Response} response
 * @param {Error.ValidationError} e error caught from mongoose
 */
import genericErrorResponse from "./genericErrorResponse.js";

export default function mongooseErrorResponse(response, e) {
    if(e.code && e.code === 11000) {
        return genericErrorResponse(response, "Conflict", 409);
    }
    const errors = [];

    for(const error in e.errors) {
        errors.push(e.errors[error].properties.message);
    }

    return genericErrorResponse(response, errors, 400);
}