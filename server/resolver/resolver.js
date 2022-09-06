// import { books } from "../data/data";
// const { books, authors } = require("../data/data");

const resolvers = {
  // query
  Query: {
    books: async (parent, args, context) => {
      return await context.mongoDataMethod.getAllBooks();
    },
    book: async (parent, args, { mongoDataMethod }) =>
      await mongoDataMethod.getBookById(args.id),
    authors: async (parent, args, context) => {
      return await context.mongoDataMethod.getAllAuthors();
    },
    author: async (parent, args, { mongoDataMethod }) =>
      await mongoDataMethod.getAuthorById(args.id),
  },
  Book: {
    author: async ({ authorId }, args, { mongoDataMethod }) =>
      await mongoDataMethod.getAuthorById(authorId),
  },
  author: {
    books: async ({ id }, args, { mongoDataMethod }) =>
      await mongoDataMethod.getAllBooks({ authorId: id }),
  },

  // mutation
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethod }) =>
      await mongoDataMethod.createAuthor(args),
    createBook: async (parent, args, { mongoDataMethod }) =>
      await mongoDataMethod.createBook(args),
  },
};
module.exports = resolvers;
