
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var exphbs = require("express-handlebars");


<<<<<<< HEAD

// Sets up the Express App
// =============================================================
=======
var PORT = process.env.PORT || 8080;
var db = require("./models");
>>>>>>> nedbranch1
var app = express();
var PORT = process.env.PORT || 8080;

//set up handlebars
//========================================
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(session({
  secret: "whateverwewant",
  resave: false,
  saveUninitialized: true,
  cookie: {secure: "auto", maxAge: 99999}
}));


// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
<<<<<<< HEAD

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

});
<<<<<<< HEAD
=======
require("./routes/author-api-routes.js")(app);
require("./routes/post-login-routes.js")(app);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  
>>>>>>> nedbranch1
=======

>>>>>>> 33de5cf5db4da20a8113d5a1c36cefc3f46ab8ce
