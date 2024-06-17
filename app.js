const express = require("express");
const app = express();
const sequelize = require("./config/database");
const jokeRoutes = require("./routes/jokeRoutes");

app.use(express.json());
app.use("/api", jokeRoutes);

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
