import mongoose from "mongoose";

const url = `mongodb://mongo:${process.env.DB_PORT}/${process.env.NAME}`;

const connectDb = () => {
    try {
        mongoose.connect(url, {
            auth: {
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD
            },
            authSource: "admin"
        }, (error) => {
            if(error) {
                console.error(error)
            } else {
                console.log("connected");
            }
        })
    } catch (e) {
        console.error(e);
    }

};

export default connectDb;