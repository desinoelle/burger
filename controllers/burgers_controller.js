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
  burger.insertOne( ["burger_name"], [req.body.burger_name], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

// Update burger to devoured state
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne( {devoured: req.body.devoured}, condition, function(result) {
    // In case id does not exist
    if (result.changedRows == 0) {
      return res.status(404).end();
    } 
    else {
      res.status(200).end();
    }
  });
});

// Delete a burger after devoured
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.deleteOne(condition, function(result) {
    // In case id does not exist
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } 
    else {
      res.status(200).end();
    }
  });
});
  
// Export router for server.js
module.exports = router;