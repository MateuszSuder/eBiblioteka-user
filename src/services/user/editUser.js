/**
 * @param {e.Request} req
 * @param {e.Response} res
 */
export default async (req, res) => {
    const { id } = req.params;
    const newUser = req.body;
    const role = req.user.role;
    const userRequestId = req.user._id;

    // If role user check if id from req.params is equal to userRequestId

    // Find user, if exists change his body to req.body (newUser)
    // If not found return 404

    res.status(501).send(`Edit user ${id}`);
}