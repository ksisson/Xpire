
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // home route

  app.get("/", function(req, res) {

    
    //if user is already logged in  
    if(req.session.user){
      var userObject = { 
          id: req.session.user.id,       
          username: req.session.user.username
      };
      //retrieving all items from api array with the id of the session
      db.api.findAll({
        where:{
            user_id: req.session.user.id
        }
      }).then(function(results){
        console.log("==================================================");
        var objectArray = [];
        //pushing each item of table to an array
        for (var i = 0;i<results.length;i++){
          objectArray.push(results[i].dataValues);
          if(i===results.length-1){
            break;
           }
        }
        //adds .items property that contains the array of item objects
        userObject.items = objectArray;
        for (var i=0;i<userObject.items.length;i++){
         
        }

        console.log("Number of items retrieved from db call: "+ userObject.items.length);
        console.log("items: ");
        console.log(userObject.items);
        
        res.render("welcome", userObject);
      })

      
      
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
