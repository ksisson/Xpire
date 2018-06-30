var db = require("../models");
module.exports = function(app){
    app.get("api/logins", function(req, res){
        db.logins.findAll({}).then(function(logins){
            res.json(logins);
        });
    });
    app.get("api/logins/:id", function(req, res){db.logins.findOne({
        where:
        { id: req.params.id}
    }).then(function(dblogins){res.json(dblogins)
    });
});
    app.post("api/apis"), function(req, res){db.api.create(req.body)
        .then(function(dblogins){res.json(dblogins)}
    )};
    app.delete("/api/apis/:id", function(req, res) {
        db.logins.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dblogins) {
          res.json(dblogins);
        });
      });

};
   