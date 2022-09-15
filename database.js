"use strict";

var _mongoose = require("mongoose");

_mongoose.mongoose.connect("mongodb://localhost/solicitudes").then(function (db) {
  return console.log('Db is connected');
})["catch"](function (error) {
  return console.log(error);
});