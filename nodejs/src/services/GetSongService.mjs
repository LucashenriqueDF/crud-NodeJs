import prisma from "../utils/prisma.mjs";

export default class GetSongsService {
  async handleGetSong() {
    try {
      const songs = await prisma.charlie_brown_jr_songs.findMany();
      return songs
    } catch (err) {
      return err
    }
  }
}