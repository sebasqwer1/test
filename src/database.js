import { mongoose } from "mongoose";

mongoose.connect("mongodb://localhost/solicitudes")
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))