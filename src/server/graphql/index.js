const graphqlHTTP = require('express-graphql');
const schema = require('./rootSchema');
const root = require('./root');

const graphql = graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
});

module.exports = graphql;
