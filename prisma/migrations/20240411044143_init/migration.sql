/*
  Warnings:

  - You are about to drop the column `gameDate` on the `game` table. All the data in the column will be lost.
  - You are about to drop the column `gameType` on the `game` table. All the data in the column will be lost.
  - You are about to drop the column `teamName` on the `team` table. All the data in the column will be lost.
  - The primary key for the `team_record` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gameDate` on the `team_record` table. All the data in the column will be lost.
  - You are about to drop the column `gameId` on the `team_record` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `team_record` table. All the data in the column will be lost.
  - The primary key for the `team_user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `teamId` on the `team_user` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `team_user` table. All the data in the column will be lost.
  - You are about to drop the column `bloodType` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `userLevel` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `user` table. All the data in the column will be lost.
  - The primary key for the `user_record` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gameId` on the `user_record` table. All the data in the column will be lost.
  - You are about to drop the column `gameQuoter` on the `user_record` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `user_record` table. All the data in the column will be lost.
  - Added the required column `game_date` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `game_type` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `team_name` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `game_date` to the `team_record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `game_id` to the `team_record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `team_id` to the `team_record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `team_id` to the `team_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `team_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `game_id` to the `user_record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `game_quoter` to the `user_record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `user_record` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `team_record` DROP FOREIGN KEY `team_record_gameId_fkey`;

-- DropForeignKey
ALTER TABLE `team_record` DROP FOREIGN KEY `team_record_teamId_fkey`;

-- DropForeignKey
ALTER TABLE `team_user` DROP FOREIGN KEY `team_user_teamId_fkey`;

-- DropForeignKey
ALTER TABLE `team_user` DROP FOREIGN KEY `team_user_userId_fkey`;

-- DropForeignKey
ALTER TABLE `user_record` DROP FOREIGN KEY `user_record_gameId_fkey`;

-- DropForeignKey
ALTER TABLE `user_record` DROP FOREIGN KEY `user_record_userId_fkey`;

-- AlterTable
ALTER TABLE `game` DROP COLUMN `gameDate`,
    DROP COLUMN `gameType`,
    ADD COLUMN `game_date` DATETIME(3) NOT NULL,
    ADD COLUMN `game_type` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `team` DROP COLUMN `teamName`,
    ADD COLUMN `team_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `team_record` DROP PRIMARY KEY,
    DROP COLUMN `gameDate`,
    DROP COLUMN `gameId`,
    DROP COLUMN `teamId`,
    ADD COLUMN `game_date` DATETIME(3) NOT NULL,
    ADD COLUMN `game_id` INTEGER NOT NULL,
    ADD COLUMN `team_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`team_id`, `game_id`);

-- AlterTable
ALTER TABLE `team_user` DROP PRIMARY KEY,
    DROP COLUMN `teamId`,
    DROP COLUMN `userId`,
    ADD COLUMN `team_id` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`team_id`, `user_id`);

-- AlterTable
ALTER TABLE `user` DROP COLUMN `bloodType`,
    DROP COLUMN `phoneNumber`,
    DROP COLUMN `userLevel`,
    DROP COLUMN `userName`,
    ADD COLUMN `blood_type` VARCHAR(191) NULL,
    ADD COLUMN `phone_number` VARCHAR(191) NULL,
    ADD COLUMN `user_level` INTEGER NULL,
    ADD COLUMN `user_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user_record` DROP PRIMARY KEY,
    DROP COLUMN `gameId`,
    DROP COLUMN `gameQuoter`,
    DROP COLUMN `userId`,
    ADD COLUMN `game_id` INTEGER NOT NULL,
    ADD COLUMN `game_quoter` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user_id`, `game_id`);

-- AddForeignKey
ALTER TABLE `team_record` ADD CONSTRAINT `team_record_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `Team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_record` ADD CONSTRAINT `team_record_game_id_fkey` FOREIGN KEY (`game_id`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_user` ADD CONSTRAINT `team_user_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `Team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_user` ADD CONSTRAINT `team_user_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_record` ADD CONSTRAINT `user_record_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_record` ADD CONSTRAINT `user_record_game_id_fkey` FOREIGN KEY (`game_id`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
