import prisma from "../utils/prisma.mjs";

export default class CreateSongService {
    async createSong(song) {
      try {
          const createdSong = await prisma.CharlieBrownJrSongs.create({
            data: {
              songName: song.songName,
              album: song.album,
              duration: song.duration,
              linkSpotify: song.linkSpotify,
              linkYouTube: song.linkYouTube
            }
          })
          
          return createdSong;
       } catch(err) {
            return err
          }
    }
}