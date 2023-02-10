import server from "./app";
import sequelize from "./database";

const PORT = process.env.PORT || 3333;
server.listen(PORT, async () => {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully with database.");
    console.log(`Server running at PORT ${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

export default server;
