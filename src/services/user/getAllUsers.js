/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    // Just return all users
    res.status(501).send(`All users`);
}