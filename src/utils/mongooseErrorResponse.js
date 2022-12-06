/**
 * Create http error response when mongoose error
 * @param {e.Response} response
 * @param {Error.ValidationError} e error caught from mongoose
 */
import genericErrorResponse from "./genericErrorResponse.js";

export default function mongooseErrorResponse(response, e) {
    const errors = [];

    for(const error in e.errors) {
        errors.push(e.errors[error].properties.message);
    }

    return genericErrorResponse(response, errors, 400);
}