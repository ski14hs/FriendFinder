var friendsData = require("../data/friends.js");

module.exports = function(app){

    //get /api/friends display all json of all friends
    app.get("/api/friends", function(req, res) {
        //get friends data
        res.json(friendsData);
    });

    //POST /api/friends handle survey results
    app.post("/api/friends", function(req, res) {
        //list of people before push
        var friendsArray = friendsData;
        
        
        // console.log(friendsArray);
        //display closest match
        var currentRes = req.body.scores;
        var currentMatch;
        var bestDiff;
        for(var i = 0; i < (friendsArray.length); i++){
            //loop through friends array and find differences.
            var tempScore = friendsArray[i].scores;
            var diff = 0;
            for (var j = 0; j < tempScore.length; j++){
                //loop thorugh scores
                diff += Math.abs(tempScore[j] - currentRes[j]);

            }
            //after finding the difference we can compare to previous results
            // console.log(diff);
            if(!currentMatch){ 
                // no previous match, wins by default
                currentMatch = i;
                bestDiff = diff;
            } else if (bestDiff > diff) {
                //replace with new diff
                bestDiff = diff;
                currentMatch = i;
            } //else do nothing
        }
        //add new to friends data
        friendsData.push(req.body);

        //display result
        console.log("Current Match: " + currentMatch);
        console.log(friendsArray[currentMatch]);
    
        res.json(friendsArray[currentMatch]);
    });
}
