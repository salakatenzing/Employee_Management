require("dotenv").config();
const PORT = process.env.PORT;
const server = require("./index");
const { db } = require("../db/models");

const init = async () => {
  try {
    await db.sync();
    server.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Error on starting up!`, error);
  }
};
init();
