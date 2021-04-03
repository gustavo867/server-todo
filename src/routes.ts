import { Router } from "express";
import multer from "multer";
import TodoController from "./v1/controllers/TodoController";
import TodoV2Controller from "./v2/controllers/TodoController";
import uploadConfig from "./v2/config/upload";
const routes = Router();
const upload = multer(uploadConfig);
const todoController = new TodoController();

// V1 routes Todo

routes.get("/v1/todos", todoController.show);
routes.put("/v1/todos", todoController.update);
routes.post("/v1/todos", todoController.create);
routes.delete("/v1/todos", todoController.delete);

// V2 routes todo

routes.get("/v2/todos", TodoV2Controller.show);
routes.put("/v2/todos", TodoV2Controller.update);
routes.post("/v2/todos", upload.array("images"), TodoV2Controller.create);
routes.delete("/v2/todos", TodoV2Controller.delete);

export default routes;
