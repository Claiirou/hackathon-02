/*
  Warnings:

  - Added the required column `conceptId` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Concept` DROP FOREIGN KEY `Concept_matchId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_matchId_fkey`;

-- AlterTable
ALTER TABLE `Match` ADD COLUMN `conceptId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_conceptId_fkey` FOREIGN KEY (`conceptId`) REFERENCES `Concept`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
