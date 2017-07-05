var path = require('path');
var _format = require('prettier-eslint');

var linter = 'standard-prettier-eslint';

function format (options) {
  return _format(
    Object.assign({}, options, {
      eslintPath: path.dirname(require.resolve(linter))
    })
  );
}

module.exports = format;
