const express = require('express');
const graphqlHTTP = require('express-graphql');
const ql = require('./graphql');

const app = express();
app.use(express.static('dist'));
app.use(
  '/api',
  graphqlHTTP({
    schema: ql.schema,
    rootValue: ql.root,
    graphiql: true,
  }),
);
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
