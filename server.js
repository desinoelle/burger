// Set up for express
var express = require("express");

var PORT = process.env.PORT || 8000;

var app = express();

app.use(express.static("public"));

// Use JSON for parsing body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});