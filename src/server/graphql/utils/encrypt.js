const Hashids = require('hashids');

const hashids = new Hashids('lets start encrypting!');

const encrypt = value => hashids.encode(value);

module.exports = encrypt;
