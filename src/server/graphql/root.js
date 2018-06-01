const { queries } = require('./rootQuery');
const { mutations } = require('./rootMutation');

const root = {
  ...queries,
  ...mutations,
};

module.exports = root;
