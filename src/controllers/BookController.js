import Book from "../entities/Book";
import path from "path";

export default {
  async create(req, res) {
    let { book } = req.files;
    let { name } = req.body;
    console.log(req.body);
    const newpath = path.join(__dirname, "..", "database", "epubs", book.name);
    try {
      const newBook = await Book.create({ name, filename: book.name });
      book.mv(newpath, (err) => {
        if (err) {
          res.status(500).send({ message: "File upload failed", code: 500 });
        }
      });
      res.send(newBook);
    } catch (error) {
      console.error(error);
    }
  },

  async findOne(req, res) {
    const { id } = req.params;

    let book = await Book.findOne({ where: { id } });
    res.send(book);
  },

  async findAll(req, res) {
    try {
      let books = await Book.findAll({});
      res.send(books);
    } catch (error) {
      console.error(error);
    }
  },
};
