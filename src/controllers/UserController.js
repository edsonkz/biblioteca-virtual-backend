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
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      const passwordCorrect =
        user === null ? false : await bcrypt.compare(password, user.password);

      if (!(user && passwordCorrect)) {
        return res.status(401).json({
          error: "invalid username or password",
        });
      }

      const userForToken = {
        email: user.email,
        name: user.name,
        id: user.id,
      };
      const token = jwt.sign(userForToken, process.env.SECRET);

      res
        .status(200)
        .send({
          token,
          name: user.name,
          isAdmin: user.isAdmin,
          email: user.email,
        });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
