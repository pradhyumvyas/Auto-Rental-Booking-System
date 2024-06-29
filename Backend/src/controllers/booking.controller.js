import {asyncHandler} from '../utils/asynchHandler.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import prisma from '../db/index.js';


export const createBooking = asyncHandler(async (req, res, next) => {
   try {
      console.log("booking data");
      const { 
         vechile_record_id,
         start_date,
         end_date,
         first_name,
         last_name,
       } = req.body;

      if(!vechile_record_id || !start_date || !end_date || !first_name || !last_name){
           
         throw new ApiError(400, 'Start date should be less than end date');
      }

      if(new Date(start_date) > new Date(end_date)){
         throw new ApiError(400, 'Start date should be less than end date');
      }

      if(new Date(start_date) < new Date()){
         throw new ApiError(400, 'Start date should be greater than current date');
      }

      const booking = await prisma.booking.create({
         data: {
         vechile_record_id,
         start_date,
         end_date,
         first_name,
         last_name,
         }
      });

      return res
      .status(200)
      .json(new ApiResponse(200, booking));
   } catch (error) {
      console.log(error);
      return next(new ApiError(500, 'Internal Server Error'));
   }
   }
)