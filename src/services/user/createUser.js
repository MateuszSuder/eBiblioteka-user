import UserSchema from "../../schemas/UserSchema.js";

export default async (req, res) => {
    const user = new UserSchema({ ...req.body });
    const { id } = user.save();
    console.log(id);
    res.send("hello");
}