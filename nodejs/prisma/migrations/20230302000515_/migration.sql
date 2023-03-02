/*
  Warnings:

  - You are about to drop the `CharlieBrownJrSongs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CharlieBrownJrSongs";

-- CreateTable
CREATE TABLE "charlie_brown_jr_songs" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "song_name" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "link_spotify" TEXT NOT NULL,
    "link_you_tube" TEXT NOT NULL,

    CONSTRAINT "charlie_brown_jr_songs_pkey" PRIMARY KEY ("id")
);
