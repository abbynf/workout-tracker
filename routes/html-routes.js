// This file holds the routes that serve HTML pages
var path = require('path')

module.exports = function(app) {
    // Route for adding an exercise
    app.get("/exercise", function(req, res) {
        console.log("exercise route hit");
        res.sendFile(path.join(__dirname, ".././public/exercise.html"));
    });

    // Route for stats
    app.get("/stats", function(req, res) {
        console.log("stats html route hit");
        res.sendFile(path.join(__dirname, ".././public/stats.html"));
    })

    // Root route
    app.get("/", function(req, res) {
        console.log("root route hit");
        res.sendFile(path.join(__dirname, ".././public/index.html"));
    })

};


