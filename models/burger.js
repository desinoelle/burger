// Import ORM
var orm = require("../config/orm.js");

// Create burger object
var burger = {
    selectAll: function(cb) {
        orm.selectAll( function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne(cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne(objColVals, condition, function(res) {
            cb(res);
        });
    },
    deleteOne: function(condition, cb) {
        orm.deleteOne(condition, function(res) {
            cb(res);
        });
    }
};

// Export for burger_controller.js
module.exports = burger;