import app from "./server/router.js";
import connectDb from "./config/db.js";
import express from "express";

(async () => {
    connectDb();
    const port = process.env.PORT;
    if(!port) throw new Error("No port specified");

    console.log(process.env.AUTH_NAME);

    app.use(express.json());

    app.listen(port, async () => {
        console.log(`Microservice ${process.env.NAME} running on port ${port}`);
    })
})();