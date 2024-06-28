import {asyncHandler} from '../utils/asynchHandler.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import prisma from '../db/index.js';

export const getVechileType = asyncHandler(async (req, res, next) => {
  const vechileType = await prisma.vechile_record.findMany();

  console.log(vechileType, "vechileType")

  return res
  .status(200)
  .json(new ApiResponse(200, vechileType));
})