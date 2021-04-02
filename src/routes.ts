import express from "express";
import TodoController from "./controllers/TodoController";

const routes = express();

const todoController = new TodoController();

routes.get("/todos", todoController.show);
routes.put("/todos", todoController.update);
routes.post("/todos", todoController.create);
routes.delete("/todos", todoController.delete);

export default routes;
