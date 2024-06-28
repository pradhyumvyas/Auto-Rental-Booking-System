import { Router } from "express";
import { getVechileType } from "../controllers/vechile-data.controller.js";

const router = Router();

router.route("/get-vechile-tpye").get(getVechileType)


export default router;