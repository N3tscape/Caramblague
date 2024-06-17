const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Joke = sequelize.define(
  "joke",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    punchline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "jokes",
    timestamps: false,
  }
);

module.exports = Joke;
