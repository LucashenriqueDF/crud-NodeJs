/*
  Warnings:

  - The primary key for the `charlie_brown_jr_songs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `charlie_brown_jr_songs` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "charlie_brown_jr_songs" DROP CONSTRAINT "charlie_brown_jr_songs_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ADD CONSTRAINT "charlie_brown_jr_songs_pkey" PRIMARY KEY ("id");
