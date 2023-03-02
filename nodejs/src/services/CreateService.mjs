import prisma from "../utils/prisma.mjs";

export default class CreateSongService {
    async createSong(song) {
      try {
          const createdSong = await prisma.charlie_brown_jr_songs.create({
            data: {
              song_name: song.song_name,
              album: song.album,
              duration: song.duration,
              link_spotify: song.link_spotify,
              link_you_tube: song.link_you_tube
            }
          })
          console.log(createdSong);
          return createdSong;
       } catch(err) {
            return err
          }
    }
}