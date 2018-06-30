var path = require("path");

module.exports = function(app){
app.get("/", function(req,res){
    res.sendFile(path.join(_dirname, "../public/index.html"))
});

app.get("/main", function(req,res){
    res.sendFile(path.join(_dirname, "../public/login.html"))
});

}