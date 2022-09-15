
import md5 from "md5";
module.exports = {
    //Strings
    token: md5("mytoken"),

    //headers
    headerOk: "OK",
    headerError: "Error",

    //Response
    responseSuccessful: "Datos encontrados.",
    responseErrorRequest: "Se produjo un error al procesar el requerimiento",
    responseDataNotFound: "No se encontraron datos.",
    responseAccessDenied: "No tiene permisos para realizar este requerimiento.",
};