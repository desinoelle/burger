// Import MySQL connection.
var connection = require("../config/connection.js");

// Create methods selectAll(), insertOne(), and updateOne() inside orm object
var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(table, col, val, cb) {
        var queryString = "INSERT INTO " + table + " (" + col + ") VALUES (??);";
        connection.query(queryString, val, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(table, cb) {
        
    }
};

// Export for burger.js
module.exports = orm;