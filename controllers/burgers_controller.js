var express = require("express");

var router = express.Router();

// Import burger.js
var burger = require("../models/burger.js");

// Export router for server.js
module.exports = router;