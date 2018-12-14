// Import ORM
var orm = require("../config/orm.js");

// Create burger object
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cb) {
        orm.insertOne("burgers", function(res) {
            cb(res);
        });
    },
    updateOne: function(cb) {
        orm.updateOne("burgers", function(res) {
            cb(res);
        });
    }
};

// Export for burger_controller.js
module.exports = burger;