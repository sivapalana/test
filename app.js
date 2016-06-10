var express = require("express");
var bodyParser = require("body-parser"); // accept JSON
var monmodule = require('./monmodule');
var markdown = require('markdown').markdown;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log("hello.");
console.log(markdown.toHTML('Un paragraphe en **markdown** !'));
var routes = require("./routes/routes.js")(app);
monmodule.direBonjour();
monmodule.direByeBye();
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
