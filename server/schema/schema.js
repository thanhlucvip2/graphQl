const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: author
  }

  # ROOT TYPE
  type Query {
    books: [Book]
    authors: [author]
    book(id: ID!): Book
    author(id: ID!): author
  }

  type author {
    id: ID
    name: String
    age: Int
    books: [Book]
  }

  type Mutation {
    createAuthor(name: String, age: Int): author
    createBook(name: String, genre: String, authorId: ID!): Book
  }
`;

module.exports = typeDefs;
