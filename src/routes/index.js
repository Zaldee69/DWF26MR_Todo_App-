const express = require("express");
const router = express.Router();

const {
  addTodo,
  getTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/todos");

router.post("/todos", addTodo);
router.get("/todos", getTodo);
router.patch("/todos/:id", editTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;
