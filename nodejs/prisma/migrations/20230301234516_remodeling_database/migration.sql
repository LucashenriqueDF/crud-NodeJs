/*
  Warnings:

  - You are about to drop the `brasileirao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "brasileirao";

-- CreateTable
CREATE TABLE "CharlieBrownJrSongs" (
    "id" SERIAL NOT NULL,
    "songName" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "linkSpotify" TEXT NOT NULL,
    "linkYouTube" TEXT NOT NULL,

    CONSTRAINT "CharlieBrownJrSongs_pkey" PRIMARY KEY ("id")
);
