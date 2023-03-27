const Sequelize = require("sequelize");
const db = require("../db");

const Employee = db.define("Employee", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Employee;
