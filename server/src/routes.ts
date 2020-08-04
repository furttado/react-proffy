import express from "express";
import db from "./data/connection";
import ClassController from "./controllers/ClassController";

const routes = express.Router();
const classController = new ClassController();

routes.post("/classes", classController.create);
routes.get("/classes", classController.listClasses);

export default routes;
