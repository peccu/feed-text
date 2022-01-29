// server.js
// where your node app starts

// init project
const express = require("express");
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.


// http://expressjs.com/en/starter/static-files.html
app.use(express.static("client/dist"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/client/dist/index.html");
});

// -------------- Server api stuff -----------------
app.get("/api", function(req, res) {
  
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
