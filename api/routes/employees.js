const router = require("express").Router();
const Employee = require("../../db/models/Employee");

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.findAll({
      attributes: ["name"],
    });
    res.send(employees);
  } catch (error) {}
});
router.post("/", async (req, res) => {
  const name = req.body.name;
  try {
    const createEmployee = await Employee.create({ name });
    res.send(createEmployee);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
