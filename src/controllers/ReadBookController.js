import ReadBook from "../entities/ReadBook";
import sequelize from "../database";

export default {
  async createOrUpdate(req, res) {
    const { userId, bookId } = req.body;

    try {
      const readBookExists = await ReadBook.findOne({
        where: {
          UserId: userId,
          BookId: bookId,
        },
      });

      if (readBookExists) {
        const readBook = await ReadBook.update(
          { lastRead: new Date() },
          {
            where: {
              UserId: userId,
              BookId: bookId,
            },
          }
        );

        res.send(readBook);
      } else {
        const newRead = {
          UserId: userId,
          BookId: bookId,
          lastRead: new Date(),
        };
        const readBook = await ReadBook.create(newRead);
        res.send(readBook);
      }
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  async finishedRead(req, res) {
    const { userId, bookId } = req.body;

    const finishedBook = await ReadBook.update(
      { finished: true },
      {
        where: {
          UserId: userId,
          BookId: bookId,
        },
      }
    );
    res.send({ message: "Book read was finished." });
  },

  async findReadBooksByUsers(req, res) {
    const booksbyusers = await sequelize.query(
      "select distinct user.name as username, user.id as userId , book.name as bookname, book.id as bookId , x.id from library.readbooks as x inner join library.users as user on x.UserId = user.id inner join library.books as book on x.BookId = book.id",
      { type: sequelize.QueryTypes.SELECT }
    );

    res.send(booksbyusers);
  },
};
