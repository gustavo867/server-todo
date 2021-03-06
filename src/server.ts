import express from "express";
import path from "path";
import "express-async-errors";
import "./v2/database/connection";
import "dotenv/config";
import cors from "cors";
import routes from "./routes";
import errorHandler from "./v2/errors/handler";
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(process.env.API_PORT || 3333);
