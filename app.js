const express = require("express");
const app = express();
const sequelize = require("./config/database");

app.use(express.json());

const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
