import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import {
  commentsRoutes,
  moviesRoutes,
  verifyTokenRoutes,
  authRoutes,
} from "./routes";
import { CLIENT_URL } from "./config";

const app = express();

//middlewares
app.use(express.json());
app.use(
  fileUpload({
    //cuando se sube una image no la mantenga en memoria sino que la meta dentro de una carpeta.
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

//cors
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

app.use("/api", moviesRoutes);
app.use("/api", commentsRoutes);
app.use("/", authRoutes);
app.use("/", verifyTokenRoutes);

export default app;
