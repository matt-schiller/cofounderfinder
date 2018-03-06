// Dependencies
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routing
require(__dirname + '/app/routing/apiRoutes')(app);
require(__dirname + '/app/routing/htmlRoutes')(app);

// Start
app.listen(PORT, function() {
    console.log("Listening on port "+PORT);
});