"use strict";

var _md = _interopRequireDefault(require("md5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  //Strings
  token: (0, _md["default"])("mytoken"),
  //headers
  headerOk: "OK",
  headerError: "Error",
  //Response
  responseSuccessful: "Datos encontrados.",
  responseErrorRequest: "Se produjo un error al procesar el requerimiento",
  responseDataNotFound: "No se encontraron datos.",
  responseAccessDenied: "No tiene permisos para realizar este requerimiento."
};