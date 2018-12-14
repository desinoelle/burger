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

// Post new burger route
router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // Send back the ID of the newburger
    res.json({ id: result.insertId });
  });
});
  
// Export router for server.js
module.exports = router;