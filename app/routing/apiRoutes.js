// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will 
// be used to display a JSON of all possible friends.
// A POST routes /api/friends. 
// This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility 
// logic.

var data = require("./../data/friends.js");

module.exports = function(app, path){

    app.get("/api/friends", function(req, res){
        res.json(data.friends);
        res.end();
    });

    app.post("/api/friends", function(req, res){
        var newFriends = req.body;

        if(data.friends.length < 10){
            data.friends.push(newFriends);
            res.end();
        }
        

        else{
            //res.end();
        }
        // console.log(data.friends.length);
    })
}
