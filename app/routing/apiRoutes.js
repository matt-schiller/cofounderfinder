const friendsData = require('../data/friends');

module.exports = function(app) {

    app.get('/api/friends', function(req,res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function(req,res) {
        var userScores = req.body.scores;
        var differences = [];
        for(i=0; i<friendsData.length; i++) {
            var difference = 0;
            for(j=0; j<userScores.length; j++) {
                difference += Math.abs(friendsData[i].scores[j] - userScores[j]);
            }
        differences.push(difference);
        }
        var bestMatch = friendsData[differences.indexOf(Math.min.apply(null,differences))];
        res.json(bestMatch);
        console.log(bestMatch);
        friendsData.push(req.body);
    });

};