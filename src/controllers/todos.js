const { todos } = require("../../models");

exports.addTodo = async (req, res) => {
  try {
    const todoData = await todos.create(req.body);
    res.status(200).send({
      status: "success",
      message: "add todo success",
      todoData,
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
      message: error,
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todoData = await todos.findAll();
    res.status(200).send({
      status: "success",
      message: "get todo success",
      todoData,
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
      message: error,
    });
  }
};
exports.editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await todos.update(req.body, {
      where: {
        id,
      },
    });
    res.status(200).send({
      status: "success",
      message: "edit todo success",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "failed",
      message: error,
    });
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await todos.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      status: "success",
      message: "delete todo success",
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
      message: error,
    });
  }
};
