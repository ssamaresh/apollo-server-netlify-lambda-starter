const {ApolloServer} = require('apollo-server');
const {typeDefs, resolvers} = require('./schema');

const server =  new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

server.listen()
  .then(({url}) => {
    console.log(`Server is ready. Available at ${url}`);
  });
