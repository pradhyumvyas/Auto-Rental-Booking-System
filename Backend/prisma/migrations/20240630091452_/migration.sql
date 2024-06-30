/*
  Warnings:

  - The values [SEDA] on the enum `meta_vechile_data_secondary_vehicle_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `meta_vechile_data` MODIFY `secondary_vehicle_type` ENUM('HATCHBACK', 'SEDAN', 'SUV', 'CRUISER', 'SPORTS', 'SCOOTY') NOT NULL;
