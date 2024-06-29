import {asyncHandler} from '../utils/asynchHandler.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import prisma from '../db/index.js';

export const getVechileType = asyncHandler(async (req, res, next) => {
  try {
    const vechileType = await prisma.meta_vechile_data.findMany({
      select:{
        primary_vehicle_type: true,
        secondary_vehicle_type: true,
        id: true,
        wheeler_type:true,
          vechile_record:{
            select:{
              name:true,
              vechile_availability_status:true,
              id:true,
            }
          }
      }
    });
  
    console.log(vechileType, "vechileType")
  
    return res
    .status(200)
    .json(new ApiResponse(200, vechileType));
  } catch (error) {
    console.log(error);
    return next(new ApiError(400, 'Data not found'));
  }
})