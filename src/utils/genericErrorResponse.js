/**
 * Create http error response
 * @param {e.Response} response
 * @param {Array<string>} message
 * @param {number} status
 */
export default function genericErrorResponse(response, message, status) {
    return response.status(status).send({
        error: message
    });
}