
import prueba from "../models/prueba";
import Strings from "../utils/strings";


exports.getDataAll = (request, response) => {

	if(request.query['token'] === Strings.token){
		prueba.getDataAll((error, data) => {
			let headerResponse = Strings.headerError;
			let messageResponse = Strings.responseAccessDenied;
			let sizeResponse = 0;
			let bodyResponse = [];

			if(error){
				if(error.kind === "not_found") {
					messageResponse  = Strings.responseDataNotFound;
				}else{
					messageResponse  = Strings.responseErrorRequest;
				}
			} else{
				headerResponse = Strings.headerOk;
				sizeResponse = data.length;
				messageResponse  = Strings.responseSuccessful;
				bodyResponse = data;
			}

			response.status(200).send({
				header: headerResponse,
				message: messageResponse,
				body: bodyResponse,
				size: sizeResponse
			});
   		});
	}else{
		response.status(200).send({
			header: Strings.headerError,
			message: Strings.responseAccessDenied,
			body: [],
			size: 0
		});
	}
};

exports.getDataId = (request, response) => {

    if(request.query['token'] && request.query['empleadoId']){

        console.log(request.query['empleadoId'])

        if(request.query['token'] === Strings.token){
            prueba.getDataId(request.query,(error, data) => {
                let headerResponse = Strings.headerError;
                let messageResponse = Strings.responseAccessDenied;
                let sizeResponse = 0;
                let bodyResponse = [];

                if(error){
                    if(error.kind === "not_found") {
                        messageResponse  = Strings.responseDataNotFound;
                    }else{
                        messageResponse  = Strings.responseErrorRequest;
                    }
                } else{
                    headerResponse = Strings.headerOk;
                    sizeResponse = data.length;
                    messageResponse  = Strings.responseSuccessful;
                    bodyResponse = data;
                }

                response.status(200).send({
                    header: headerResponse,
                    message: messageResponse,
                    body: bodyResponse,
                    size: sizeResponse
                });
            });
        }else{
            response.status(200).send({
                header: Strings.headerError,
                message: Strings.responseAccessDenied,
                body: [],
                size: 0
            });
        }
    }else{
        response.status(200).send({
            header: Strings.headerError,
            message: "No contiene los parametros necesarios",
            body: [],
            size: 0
        });
    }
};