import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import connectToDb from "./db";
import { users, categories, sessions, auth } from "./routes";
export let server;
export async function startAPI() {
  const app = express()
    .use(cors())
    .get("/", (reg, res) => res.sendStatus(200))
    .use(express.json({ limit: "50mb", parameterLimit: 50000 }))
    .use("/auth", auth)
    .use("/users", users)
    .use("/categories", categories)
    .use("/sessions", sessions);
  server = app.listen(3001, () =>
    console.log(`Listening on ${server.address().port}`)
  );
  await connectToDb();
  return app;
}
startAPI();
