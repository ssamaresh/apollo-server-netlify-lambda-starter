const {gql} = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    hello: String    
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hi there! This is your only resolver.'
  }
};

module.exports = {typeDefs, resolvers};