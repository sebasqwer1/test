"use strict";

var _prueba = _interopRequireDefault(require("../models/prueba"));

var _strings = _interopRequireDefault(require("../utils/strings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.getDataAll = function (request, response) {
  if (request.query['token'] === _strings["default"].token) {
    _prueba["default"].getDataAll(function (error, data) {
      var headerResponse = _strings["default"].headerError;
      var messageResponse = _strings["default"].responseAccessDenied;
      var sizeResponse = 0;
      var bodyResponse = [];

      if (error) {
        if (error.kind === "not_found") {
          messageResponse = _strings["default"].responseDataNotFound;
        } else {
          messageResponse = _strings["default"].responseErrorRequest;
        }
      } else {
        headerResponse = _strings["default"].headerOk;
        sizeResponse = data.length;
        messageResponse = _strings["default"].responseSuccessful;
        bodyResponse = data;
      }

      response.status(200).send({
        header: headerResponse,
        message: messageResponse,
        body: bodyResponse,
        size: sizeResponse
      });
    });
  } else {
    response.status(200).send({
      header: _strings["default"].headerError,
      message: _strings["default"].responseAccessDenied,
      body: [],
      size: 0
    });
  }
};

exports.getDataId = function (request, response) {
  if (request.query['token'] && request.query['empleadoId']) {
    console.log(request.query['empleadoId']);

    if (request.query['token'] === _strings["default"].token) {
      _prueba["default"].getDataId(request.query, function (error, data) {
        var headerResponse = _strings["default"].headerError;
        var messageResponse = _strings["default"].responseAccessDenied;
        var sizeResponse = 0;
        var bodyResponse = [];

        if (error) {
          if (error.kind === "not_found") {
            messageResponse = _strings["default"].responseDataNotFound;
          } else {
            messageResponse = _strings["default"].responseErrorRequest;
          }
        } else {
          headerResponse = _strings["default"].headerOk;
          sizeResponse = data.length;
          messageResponse = _strings["default"].responseSuccessful;
          bodyResponse = data;
        }

        response.status(200).send({
          header: headerResponse,
          message: messageResponse,
          body: bodyResponse,
          size: sizeResponse
        });
      });
    } else {
      response.status(200).send({
        header: _strings["default"].headerError,
        message: _strings["default"].responseAccessDenied,
        body: [],
        size: 0
      });
    }
  } else {
    response.status(200).send({
      header: _strings["default"].headerError,
      message: "No contiene los parametros necesarios",
      body: [],
      size: 0
    });
  }
};