-- CreateTable
CREATE TABLE "charlie_brown_jr_songs" (
    "id" SERIAL NOT NULL,
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
