-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `agency` VARCHAR(100) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `picture` VARCHAR(255) NOT NULL,
    `biography` VARCHAR(191) NULL,
    `xpyear` INTEGER NOT NULL,
    `technoUserId` INTEGER NULL,
    `matchId` INTEGER NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Concept` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `domain` VARCHAR(100) NOT NULL,
    `status` VARCHAR(100) NOT NULL,
    `picture` VARCHAR(255) NOT NULL,
    `agency` VARCHAR(100) NOT NULL,
    `matchId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Techno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `picture` VARCHAR(255) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `technoUserId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TechnoUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Match` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `likeconcept` BOOLEAN NOT NULL,
    `likeuser` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_technoUserId_fkey` FOREIGN KEY (`technoUserId`) REFERENCES `TechnoUser`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_matchId_fkey` FOREIGN KEY (`matchId`) REFERENCES `Match`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Concept` ADD CONSTRAINT `Concept_matchId_fkey` FOREIGN KEY (`matchId`) REFERENCES `Match`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Techno` ADD CONSTRAINT `Techno_technoUserId_fkey` FOREIGN KEY (`technoUserId`) REFERENCES `TechnoUser`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
