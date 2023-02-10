import { DataTypes } from "sequelize";
import sequelize from "../database";

const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Book;
