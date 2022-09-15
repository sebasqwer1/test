import { Router } from "express";
const router = Router()

import {
    getDataAll,
    getDataId
}  from "../controllers/prueba.controller";

router.get('/', getDataAll )

router.get('/empleadoId', getDataId )

export default router;