var haml = require('haml');

var createHamlPreprocessor = function(args, config, logger, helper) {
  config = config || {};
  var log = logger.create('preprocessor.haml');

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    var compiled = haml.compile(content);
    done(eval(compiled))
  };
};

createHamlPreprocessor.$inject = ['args', 'config', 'logger', 'helper'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:haml': ['factory', createHamlPreprocessor]
};
