import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: process.env.DB_DATABASE,
  dialect: "mysql",
  username: process.env.DB_USER,
  password: process.env.DB_ROOT_PASSWORD,
});

export default sequelize;
