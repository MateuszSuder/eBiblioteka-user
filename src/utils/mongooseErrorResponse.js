/**
 * Create http error response when mongoose error
 * @param {e.Response} response
 * @param {Error.ValidationError} error error caught from mongoose
 */
import genericErrorResponse from "./genericErrorResponse.js";

export default async function mongooseErrorResponse(response, error) {
    const errors = [];

    for(const error in error.errors) {
        errors.push(error.errors[error].properties.message);
    }

    return genericErrorResponse(response, errors, 400);
}