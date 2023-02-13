import Router from "express";
import UserController from "./controllers/UserController";
import BookController from "./controllers/BookController";
import ReadBookController from "./controllers/ReadBookController";

const routes = Router();

routes.post("/users", UserController.create);
routes.get("/users/students", UserController.findStudents);
routes.post("/users/login", UserController.login);

routes.post("/books", BookController.create);
routes.get("/books/:id", BookController.findOne);
routes.get("/books", BookController.findAll);

routes.post("/readbook", ReadBookController.createOrUpdate);
routes.put("/readbook", ReadBookController.finishedRead);
routes.get("/readbook", ReadBookController.findAll);
routes.get("/readbook/all", ReadBookController.findReadBooksByUsers);

export default routes;
