-- CreateTable
CREATE TABLE `meta_vechile_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `primary_vehicle_type` ENUM('CAR', 'BIKE', 'TRUCK', 'BUS', 'AUTO', 'CYCLE') NOT NULL,
    `secondary_vehicle_type` ENUM('HATCHBACK', 'SEDA', 'SUV', 'CRUISER', 'SPORTS', 'SCOOTY') NOT NULL,
    `wheeler_type` ENUM('TWO', 'THREE', 'FOUR', 'SIX', 'EIGHT') NOT NULL,
    `is_active` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vechile_record` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vechile_record_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `condition` ENUM('FAIR', 'EXCELLENT') NOT NULL,
    `total_km` VARCHAR(191) NOT NULL,
    `fuil_type` ENUM('PETROL', 'DIESEL', 'CNG', 'ELECTRIC') NOT NULL,
    `vechile_owner_id` INTEGER NOT NULL,
    `vechile_availability_status` BOOLEAN NOT NULL,
    `vechile_registration_number` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `meta_vechile_id` INTEGER NOT NULL,

    INDEX `meta_vechile_id`(`meta_vechile_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `booking_record` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vechile_record_id` INTEGER NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `start_time` DATETIME(3) NOT NULL,
    `end_time` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    INDEX `booking_record_vechile_record_id_idx`(`vechile_record_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vechile_owner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone_no` DOUBLE NOT NULL,
    `driving_licence` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehicle_document` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `documents_url` VARCHAR(191) NOT NULL,
    `document_type` ENUM('REGISTRATION', 'INSURANCE', 'SERVICE', 'OTHER') NOT NULL,
    `vehicle_record_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    INDEX `vehicle_document_vehicle_record_id_idx`(`vehicle_record_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vechile_record` ADD CONSTRAINT `vechile_record_meta_vechile_id_fkey` FOREIGN KEY (`meta_vechile_id`) REFERENCES `meta_vechile_data`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vechile_record` ADD CONSTRAINT `vechile_record_vechile_owner_id_fkey` FOREIGN KEY (`vechile_owner_id`) REFERENCES `vechile_owner`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking_record` ADD CONSTRAINT `booking_record_vechile_record_id_fkey` FOREIGN KEY (`vechile_record_id`) REFERENCES `vechile_record`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicle_document` ADD CONSTRAINT `vehicle_document_vehicle_record_id_fkey` FOREIGN KEY (`vehicle_record_id`) REFERENCES `vechile_record`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
