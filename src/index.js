import app from './app';
import './database';


const PORT = 4000;

app.listen(process.env.PORT || PORT ,()=>console.log("Run server : " + PORT));

