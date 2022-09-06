const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const mongoDataMethod = require("./data/db");

let server = null;
runServerApollo = async () => {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethod }),
  });
  await server.start();
  server.applyMiddleware({ app });
};

// load db method

connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://thanhlucvip:Thanhluc123456789@cluster0.baidz.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connect success");
  } catch (error) {
    console.log(error);
  }
};
connectMongoDB();
runServerApollo();
const app = express();

app.listen({ port: 4000 }, () => {
  console.log(`Server running on http://localhost:4000${server.graphqlPath}`);
});
