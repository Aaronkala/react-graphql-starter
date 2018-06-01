const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const { importSchema } = require('graphql-import');
const root = require('./root');

const schema = importSchema('src/server/graphql/schema.graphql');

const graphql = graphqlHTTP({
  schema: buildSchema(schema),
  rootValue: root,
  graphiql: true,
});

module.exports = graphql;
