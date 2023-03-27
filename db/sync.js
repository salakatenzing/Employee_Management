const {
  db,
  Employee,
  Manager,
  Manager_employee,
  Task,
  TaskAssignee,
} = require("./models/index");

const sync = async (db) => {
  await Manager.sync();
  await Employee.sync();
  await Task.sync();
  await Manager_employee.sync();
  await TaskAssignee.sync();
};

sync();
