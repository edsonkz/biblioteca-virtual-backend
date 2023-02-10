import User from "../entities/User";

export default {
  async create(req, res) {
    const newUser = req.body;
    try {
      let user = await User.create(newUser);
      res.send(user);
    } catch (error) {
      console.error(error);
    }
  },

  async findStudents(req, res) {
    try {
      let students = await User.findAll({
        where: {
          isAdmin: false,
        },
      });
      res.send(students);
    } catch (error) {
      console.error(error);
    }
  },
};
