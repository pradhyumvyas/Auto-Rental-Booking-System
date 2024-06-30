import {asyncHandler} from '../utils/asynchHandler.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import prisma from '../db/index.js';


export const createBooking = asyncHandler(async (req, res, next) => {
   try {
      console.log("booking data");
      const { 
         vechile_record_id,
         start_time,
         end_time,
         first_name,
         last_name,
       } = req.body;

       console.log("booking data", start_time , end_time );

      if(!vechile_record_id || !start_time || !end_time || !first_name || !last_name){
           
         return res
         .status(400)
         .json(new ApiError(400, 'All fields are required'));
      }

      if(new Date(start_time) > new Date(end_time)){
         return res
         .status(400)
         .json(new ApiError(400, 'Start date should be less than end date'));
      }

      if(new Date(start_time) < new Date()){
         return res
         .status(400)
         .json(new ApiError(400, 'Start date should be greater than current date'));
      }

      const booking = await prisma.booking_record.create({
         data: {
            vechile_record_id,
            start_time : new Date(start_time),
            end_time:new Date(end_time),
            first_name,
            last_name
         }
      });

      return res
      .status(200)
      .json(new ApiResponse(200, booking));
   } catch (error) {
      console.log(error);
      throw next(new ApiError(500, 'Internal Server Error'));
   }
   }
)