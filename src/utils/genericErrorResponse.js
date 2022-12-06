/**
 * Create http error response
 * @param {e.Response} response
 * @param {Array<string> | string} message
 * @param {number} status
 */
export default function genericErrorResponse(response, message, status) {
    if(!Array.isArray(message)) message = [message];
    return response.status(status).send({
        error: message
    });
}