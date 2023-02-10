import Router from "express";
import UserController from "./controllers/UserController";
import BookController from "./controllers/BookController";

const routes = Router();

routes.post("/users", UserController.create);
routes.get("/users/students", UserController.findStudents);

routes.post("/books", BookController.create);
routes.get("/books", BookController.findAll);

export default routes;
