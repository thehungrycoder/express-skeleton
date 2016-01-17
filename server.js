var config = require('config');

module.exports = function (app) {
  app.listen(config.server.port, function () {
    console.log('Application started on port ', config.server.port);
  });
};