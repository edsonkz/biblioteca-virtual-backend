import User from "../entities/User";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default {
  async create(req, res) {
    let newUser = req.body;
    try {
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(newUser.password, saltRounds);
      newUser = { ...newUser, password: passwordHash };
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

  async login(req, res) {
    const { name, password } = req.body;
    try {
      const user = await User.findOne({ where: { name } });
      const passwordCorrect =
        user === null ? false : await bcrypt.compare(password, user.password);

      if (!(user && passwordCorrect)) {
        return res.status(401).json({
          error: "invalid username or password",
        });
      }

      const userForToken = {
        name: user.name,
        id: user.id,
      };
      console.log(process.env.SECRET);
      const token = jwt.sign(userForToken, process.env.SECRET);

      res.status(200).send({ token, name: user.name, isAdmin: user.isAdmin });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
