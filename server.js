
// server.js
import cors from "cors";
import express from "express";
import rootRouter from "./rootRouter.js";

const app = express();
const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  };

  app.use(cors(corsOptions));
  app.use("/", rootRouter);
  export default app;