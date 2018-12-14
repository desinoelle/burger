// Import ORM
var orm = require("../config/orm.js");

// Create burger object
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(val, cb) {
        orm.insertOne("burgers", "burger_name", val, function(res) {
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