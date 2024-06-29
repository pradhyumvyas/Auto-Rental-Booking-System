import { Router } from "express";
import { getVechileType } from "../controllers/vechile-data.controller.js";
import {createBooking} from "../controllers/booking.controller.js"


const router = Router();

router.route("/get-vehicle-data").get(getVechileType)
router.route("/book-vehicle").post(createBooking)


export default router;