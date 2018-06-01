const express = require('express');
const graphql = require('./graphql');

const app = express();
app.use('/', express.static('build'));
app.all('/api', graphql);
app.listen(4000, () => console.log('Now browse to localhost:4000/api'));
