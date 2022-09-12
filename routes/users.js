import express from "express";
import { create, findAllType } from '../controllers/primates.controllers.js'




const router = express.Router();

/* GET users listing. */
router.get("/",findAllType)
 



router.post("/", create);



export default router;
