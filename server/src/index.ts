import express from "express";
//import dotenv from "dotenv";

//dotenv.config();
const app = express();
app.use(express.json());

app.get("/users", (request, response) => {
  return response.status(200).send({ success: "ok" });
});

export default app;
