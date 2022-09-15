import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import pkg from '../package.json';

import pruebaRoutes from './routes/prueba.routes';

const app = express();

app.use(cors());

app.set('pkg', pkg);

app.use(morgan('dev'));
app.use(express.json());

app.get('/', ( req , res ) =>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
    });
})

app.use('/prueba',pruebaRoutes);

export default app;
