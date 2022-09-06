const Book = require("../models/Book.model");
const Author = require("../models/Author.model");

const mongoDataMethod = {
  getAllBooks: async (condition) =>
    condition === null ? await Book.find() : await Book.find(condition),
  getBookById: async (id) => await Book.findById(id),
  getAllAuthors: async (condition) => {
    console.log(condition);
    return (await condition) === null ? Author.find(condition) : Author.find();
  },
  getAuthorById: async (id) => await Author.findById(id),

  createAuthor: async (author) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
  createBook: async (book) => {
    const newBook = new Book(book);
    return await newBook.save();
  },
};

module.exports = mongoDataMethod;
