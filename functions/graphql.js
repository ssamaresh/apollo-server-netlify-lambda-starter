const { ApolloServer} = require('apollo-server-lambda');
const {typeDefs, resolvers} = require('./bundle/schema');

const server =  new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

exports.handler = server.createHandler({
  cors: {
    origin: '*'
  }
})