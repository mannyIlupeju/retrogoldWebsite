"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var cors = require('cors');

var bodyParser = require('body-parser');

var dotenv = require('dotenv').config(); //setting up the body Parser


app.use(bodyParser.json({
  limit: "30mb",
  extended: true
}));
app.use(bodyParser.urlencoded({
  limit: "30mb",
  extended: true
})); //setting up cors

app.use(cors());
var PORT = process.env.PORT || 8000; //Connecting to Mongoose

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return app.listen(PORT, function () {
    console.log('Sever is up and running');
  });
})["catch"](function (error) {
  return console.log(error);
});
mongoose.set("strictQuery", false);
//# sourceMappingURL=index.dev.js.map
