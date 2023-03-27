const Sequelize = require("sequelize");
const db = require("../db");

const Task = db.define("Task", {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
const TaskAssignee = db.define("TaskAssignee", {});
module.exports = { Task, TaskAssignee };
