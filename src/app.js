import express from "express";
import cors from "cors";
import routes from "./routes";
import * as path from "path";
import fileUpload from "express-fileupload";

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(
  "/api/books",
  express.static(path.join(__dirname, "database", "books"))
);
app.use("/api", routes);

export default app;
