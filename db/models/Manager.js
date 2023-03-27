const Sequelize = require("sequelize");
const db = require("../db");

const Manager = db.define("Manager", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tier: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const Manager_employee = db.define("Manager_employee", {});
module.exports = { Manager, Manager_employee };
