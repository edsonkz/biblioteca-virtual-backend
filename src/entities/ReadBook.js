import { DataTypes } from "sequelize";
import sequelize from "../database";
import Book from "./Book";
import User from "./User";

const ReadBook = sequelize.define("ReadBook", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  lastRead: {
    type: DataTypes.DATE,
  },
  finished: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

User.belongsToMany(Book, { through: ReadBook });
Book.belongsToMany(User, { through: ReadBook });

export default ReadBook;
