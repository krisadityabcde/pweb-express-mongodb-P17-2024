
import express from "express";
import connectDB from "./db-connection";
import bookrouter from "./routes/book.route";
import authrouter from './routes/auth.route';
import mechanismrouter from './routes/mechanism.route';
import { HealthCheck } from "./helpers";
const app = express();

app.use(express.json());
connectDB();   
// check endpoint
app.get("/", (_, response) => {
  response.status(200).json(HealthCheck("success", "Hello World"));
});

app.use("/books", bookrouter);
app.use("/auth", authrouter);
app.use("/mechanism", mechanismrouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Express is running on Port ${PORT}`);
});
