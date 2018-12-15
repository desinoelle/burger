// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper functions
// Taken from cats activity because 
// I wasn't sure how to make insertOne() and updateOne() work without them.
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  }

// Create methods selectAll(), insertOne(), and updateOne() inside orm object
// I went ahead and added the table name since we are only using one table here.
var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(cols, vals, cb) {
        var queryString = "INSERT INTO burgers";
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        var queryString = "UPDATE burgers";
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    deleteOne: function(condition, cb) {
        var queryString = "DELETE FROM burgers";
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

// Export for burger.js
module.exports = orm;