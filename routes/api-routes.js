
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
      
      res.cookie("token", userToken);
          db.login.create(newUser).then(function(results){
                
                  //adding id to newUser to use on homepage
                  newUser.id = results.dataValues.id;
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

  //GET route find one on the login db to grab user id
  app.get("/user/:username",function(req, res){
    var currentUsername = req.params.username
    db.login.findAll({
      where: {username: currentUsername}
    }).then(function(results){
      console.log(results);
    res.json(results);
    })

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
            id: users[i].id,
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
  


    app.get("/api/apis", function(req, res){
      console.log("route GET: /api/apis/");
        db.api.findAll({}).then(function(dbapi){
            res.json(dbapi);
        });
    });
    app.get("/api/apis/:food_name" , function(req, res){db.api.findAll({
        where:
        { item_name: req.params.food_name
            // custom: false
           }
    }).then(function(dbapi){res.json(dbapi)
    });
});
    app.post("/api/apis", function(req, res)
    {
      console.log("route GET: /api/apis/:food_name --" + req.params.food_name);
      
      db.api.create(req.body)
        
      .then(function(dbapi){
        console.log("Return post");
        // console.log(dbapi);
        res.json(dbapi)}
      );

    });

    app.delete("/api/:user_id/15/:api_id/23423", function(req, res) {
        db.mastertable.destroy({
          where: {
            apiId: req.params.api_id,
            loginId: req.params.user_id
          }
        }).then(function(dbapi) {
          res.json(dbapi);
        });
      });


    app.post("/api/mastertable", function(req,res){
        
        db.mastertable.create(req.body).then(function(dbmastertable){
          res.json(dbmastertable)
        }).catch(function(err){
          console.log(err);
          return res.status(400).end();
        });
    });
};

Date.prototype.addDays = function(days){
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function getexpiration(datestamp,shelflife){
  var expiration = datestamp.addDays(shelflife);
  return expiration
}

function getshelflife(expiration){
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date();
  var secondDate = expiration

  var diffDays = Math.ceil(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
  return diffDays;
}


   

