import app from "./server/router.js";
import connectDb from "./config/db.js";

(async () => {
    connectDb();
    const port = process.env.PORT;
    if(!port) throw new Error("No port specified");

    app.listen(port, async () => {
        console.log(`Microservice ${process.env.NAME} running on port ${port}`);
    })
})();