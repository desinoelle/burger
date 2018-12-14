var express = require("express");

var router = express.Router();

// Import burger.js
var burger = require("../models/burger.js");

// Get all burgers route
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbData = {
        burgers: data
      };
      res.render("index", hbData);
    });
});
  
// Export router for server.js
module.exports = router;