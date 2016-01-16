var config = require('config'),
    express = require('express'),
    app = express(),
    homeController = require('./app/controllers/HomeController');

app.set('view engine', 'jade');
app.set('views', './app/views');
app.use(express.static('public'));

app.get('/', homeController.home);
app.listen(config.server.port, function () {
    console.log('Application started on port ', config.server.port);
});