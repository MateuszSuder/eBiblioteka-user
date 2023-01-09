/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id } = req.params;

    // Find user, if exists change isBlocked to true
    // If not found return 404

    res.status(501).send(`Block user ${id}`);
}