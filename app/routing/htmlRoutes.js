// var routes = require(app)
var path = require("path");

module.exports = function(app){

    //get route to /survey display survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //display default home.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
     //display default home.html
     app.get("/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/friends.html"));
    });


}
