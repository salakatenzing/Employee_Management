const router = require("express").Router();
const employeeRoute = require("./employees");

router.use("/employee", employeeRoute);

module.exports = router;
