import Book from "../entities/Book";
import path from "path";

export default {
  async create(req, res) {
    let { book } = req.files;
    const newpath = path.join(__dirname, "..", "database", "epubs", book.name);
    try {
      book.mv(newpath, (err) => {
        if (err) {
          res.status(500).send({ message: "File upload failed", code: 500 });
        }
      });
      const newBook = await Book.create({ name: book.name, filename: newpath });
      res.send(newBook);
    } catch (error) {
      console.error(error);
    }
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
