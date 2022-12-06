export default async (req, res) => {
    const { email } = req.params;
    console.log(email);
    res.send("hello");
}