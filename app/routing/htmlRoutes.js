// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.
var path = require("path");
var bodyParser = require("body-parser");

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/home.html"));
})

