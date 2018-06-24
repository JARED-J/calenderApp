const apiRouter = require('express').Router();
const db = require('../db/db')

apiRouter.use('/events', require('./events'));

module.exports = apiRouter;
