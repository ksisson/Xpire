// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // home route

  app.get("/", function (req, res) {


    //if user is already logged in  
    if (req.session.user) {
      var userObject = {
        id: req.session.user.id,
        username: req.session.user.username
      };
      //retrieving all items from api array with the id of the session
      db.mastertable.findAll({

          where: {
            loginId: req.session.user.id,

          }
        })
        .then(function (dbmastertable) {
          var foodlist = [];


          for (var i = 0; i < dbmastertable.length; i++) {
            
            foodlist.push(dbmastertable[i].dataValues)
          }
          console.log("food list");
          console.log(foodlist);

          var count = 0;

          if (foodlist.length === 0) {
            console.log("length of food list is 0")
            res.render("welcome", userObject);
          } else {

            for (let i = 0; i < foodlist.length; i++) {
              db.api.findOne({
                  where: {
                    id: foodlist[i].apiId
                  }
                })
                .then(function (results) {
                  count += 1;
                  // console.log(count, foodlist.length)
                  foodlist[i].name = results.dataValues.item_name
                  foodlist[i].expiration = getexpiration(foodlist[i].createdAt, results.dataValues.shelf_life)
                  foodlist[i].shelflife = getshelflife(foodlist[i].expiration)
                  foodlist[i].formattedexpiration = formattedexpiration(foodlist[i].expiration)
                  if (count === foodlist.length) {
                    console.log("foodlist inside if: ");
                    foodlist.sort(function(a, b){return a.shelflife - b.shelflife});
                    userObject.items = foodlist;
                    console.log(userObject.items);
                    res.render("welcome", userObject);


                  };

                });
            }

          }

        });

    }
    //if there is a cookie  
    else if (req.cookie) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].token === req.cookie.token) {
          req.session.user = users[i];
          return res.redirect("/");
        }
      }
    }
    //if not logged in
    else {
      res.render("index");
    }
  });



};

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function getexpiration(datestamp, shelflife) {
  var expiration = datestamp.addDays(shelflife);
  return expiration
}

function getshelflife(expiration) {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date();
  var secondDate = expiration

  var diffDays = Math.ceil((secondDate.getTime() - firstDate.getTime()) / (oneDay));
  return diffDays;
}

function formattedexpiration(expiration) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var d = expiration;
  var formatted = days[d.getDay()] + " " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  return formatted;
}