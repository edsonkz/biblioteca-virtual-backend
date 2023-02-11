import ReadBook from "../entities/ReadBook";

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
};
