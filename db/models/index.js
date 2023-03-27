const db = require("../db");
const Employee = require("./Employee");
const { Manager, Manager_employee } = require("./Manager");
const { Task, TaskAssignee } = require("./Task");

Manager.hasMany(Employee);
Employee.belongsTo(Manager);

Manager.hasMany(Task);
Task.belongsTo(Manager);

Employee.hasMany(Task);
Task.belongsTo(Employee);

Manager_employee.belongsTo(Manager, { as: "manager" });
Manager_employee.belongsTo(Manager, { as: "subordinate" });

Task.hasMany(TaskAssignee);
TaskAssignee.belongsTo(Employee);
TaskAssignee.belongsTo(Task);

module.exports = {
  db,
  Employee,
  Manager,
  Task,
  TaskAssignee,
  Manager_employee,
};
