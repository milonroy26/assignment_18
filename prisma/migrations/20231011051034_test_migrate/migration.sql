/*
  Warnings:

  - You are about to alter the column `publishedAt` on the `post` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `published` on the `post_comment` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `publishedAt` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `post_comment` MODIFY `published` TIMESTAMP NOT NULL;
