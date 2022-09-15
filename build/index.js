"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 4000;

_app["default"].listen(process.env.PORT || PORT, function () {
  return console.log("Run server : " + PORT);
});