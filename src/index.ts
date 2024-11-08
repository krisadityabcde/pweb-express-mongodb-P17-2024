import express from "express";
import authenticationRoute from "./routes/auth.route";
import "./db-connection";

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
    const currentTime = new Date().toLocaleString();
    res.status(200).send({
        status: "success",
        message: "Yey bisa jalan",
        date: currentTime,
    });
});

const PORT = process.env.PORT || 1717;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(authenticationRoute);
