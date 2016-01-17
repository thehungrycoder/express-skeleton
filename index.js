var express = require('express'),
  app = express(),
  server = require('./server')(app),
  routes = require('./routes');

app.set('view engine', 'jade');
app.set('views', './app');
app.use(express.static('bower_components'));

app.use('/', routes);