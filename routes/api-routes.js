// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var encrypt = require("../encryption.js");



// Routes
// =============================================================
module.exports = function(app) {

  //get route for showing user info
  app.get("/api/users", function(req, res) {
    db.login.findAll({})
      .then(function(results) {
        res.json(results);
      });
  });

  // POST route for saving a new user
  app.post("/create", function(req, res) {
    
    console.log("Creating user");
   db.login.findAll().then(function(results){
     var users = results;    
      //determining whether the input is unique
      var newUser = true;
        for (var i = 0; i<users.length;i++){
          if(users[i].username === req.body.username){
            newUser = false;
          
          }
          else{
            newUser = true;
          }
        }
    if(newUser===true){
      //creation of token for cookies
      var userToken = "t" + Math.random();
      var encryptedPassword = encrypt.encrypt(req.body.password);
      var newUser ={
        username: req.body.username,
        password: encryptedPassword,
        token: userToken
      }
      var userToken = "t" + Math.random();
      res.cookie("token", userToken);
          db.login.create(newUser).then(function(results){
                console.log("added");
                req.session.user = newUser;
                return res.redirect("/");
              });
    }else{
      console.log("User already exists");
      return res.status(401).end();
      
    }

   });
  });

  //POST route to login, will also check if the user exists
  app.post("/login", function(req,res){
    console.log("verify");

    db.login.findAll().then(function(results){

     
      var users = results;
      var loopCheck = false;
      //loop to verify correct username and password
      for (var i =0; i<users.length;i++){
        
        var tablePassword = users[i].password;
        
        var tableUsername = users[i].username;

        var deCryptPw = encrypt.decrypt(""+tablePassword);
        
    
        if(tableUsername ===req.body.username && deCryptPw===req.body.password){
          var currentUser ={
            username: req.body.username,
            password: req.body.password,
            token: req.body.token
          }
          res.cookie("token", currentUser.token);
          console.log("user found");
          loopCheck = true;
          res.cookie("token", currentUser.token);
          req.session.user = currentUser;
          return res.redirect("/");
        }
      }
      if(loopCheck ===false){
        console.log("Failed to authenticate, check username and password");

         return res.status(401).end();
        }
    
    });

    

  });

  //route for logging out
  app.get("/logout",function(req,res){
    res.clearCookie("token");
    req.session.destroy();
    res.redirect("/");
  });
  


};


