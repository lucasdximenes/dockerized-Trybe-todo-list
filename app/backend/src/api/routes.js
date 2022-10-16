const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = express();

const tasksController = require("../controllers/Tasks");

routes.use(cors());
routes.use(express.json());

routes.use(morgan("tiny"));

routes.get("/api/tasks", tasksController.getAllTasks);

routes.post("/api/task", tasksController.addTask);
routes.get("/api/task/:id", tasksController.getTask);
routes.delete("/api/task/:id", tasksController.rmTask);
routes.put("/api/task/:id", tasksController.putTask);

routes.post("/api/debug", tasksController.resetTasks);

module.exports = routes;
