var db = require("../models");
module.exports = function(app){
    app.get("api/apis", function(req, res){
        db.api.findAll({}).then(function(dbapi){
            res.json(dbapi);
        });
    });
    app.get("api/apis/:food_name" , function(req, res){db.api.findOne({
        where:
        { item_name: req.params.food_name,
            custom: false
           }
    }).then(function(dbapi){res.json(dbapi)
    });
});
    app.post("api/apis"), function(req, res){db.api.create(req.body)
        .then(function(dbapi){res.json(dbapi)}
    )};
    app.delete("/api/apis/:id", function(req, res) {
        db.api.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbapi) {
          res.json(dbapi);
        });
      });


    app.post("api/mastertable", function(req,res){
        db.mastertable.create(req.body).then(function(dbmastertable){res.json(dbmastertable)});
    });

    app.get("/foodlist/:user_id"), function(req, res){db.mastertable.findAll({
        
        where:
        {
            loginId: req.params.user_id,
      
        },
        include : [db.api]
        .then(function(dbmastertable){})

    })}
};


   