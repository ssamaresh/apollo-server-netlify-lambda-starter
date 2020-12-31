const {gql} = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    hello: String
    goodBye: String 
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hi there! This is your only resolver.',
    goodBye: () => 'Hi there! Time to say goodbye!'
  }
};

module.exports = {typeDefs, resolvers};