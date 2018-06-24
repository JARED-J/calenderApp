const db = require('./db');
require("./models");

db.sync();
module.exports = db;
