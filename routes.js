var router = require('express').Router(),
  home = require('./app/home/routes.js');

router.use('/', home); // this should be at the end of all routes

module.exports = router;