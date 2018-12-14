var express = require("express");

var router = express.Router();

// Import burger.js
var burger = require("../models/burger.js");

// Get all burgers route
router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
      var hbData = {
        burgers: data
      };
      res.render("index", hbData);
    });
});
  
// Add new burger route
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "name", "sleepy"
    ], [
      req.body.name, req.body.sleepy
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
// Update burger after devoured route
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});
  
// Export router for server.js
module.exports = router;