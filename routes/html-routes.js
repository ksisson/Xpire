<<<<<<< HEAD
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // home route

  app.get("/", function(req, res) {
    //if user is already logged in 
    if(req.session.user){
      var userObject = {        
          username: req.session.user.username
      };
      console.log(userObject);
      res.render("welcome", userObject);
    }
    //if there is a cookie  
    else if (req.cookie){
      for (var i = 0; i < users.length; i++) {
        if (users[i].token === req.cookie.token){
          req.session.user = users[i];
          return res.redirect("/");
        }
      }
    }
    //if not logged in
    else{
      res.render("index");
    }
  });
  


};
=======
var path = require("path");

module.exports = function(app){
app.get("/", function(req,res){
    res.sendFile(path.join(_dirname, "../public/index.html"))
});

app.get("/main", function(req,res){
    res.sendFile(path.join(_dirname, "../public/login.html"))
});

}
>>>>>>> nedbranch1
