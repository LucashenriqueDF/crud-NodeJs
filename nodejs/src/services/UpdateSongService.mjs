import prisma from "../utils/prisma.mjs"

export default class UpdateSongService{
        async handleUpdateSong(song_updates){
            const song = await prisma.charlie_brown_jr_songs.findUnique({
                where: {
                    id: song_updates.id
                }
            })
            
            if (!song) {
                return new Error("Song doesn't exist")
            }

            try {
                const updateSong = await prisma.charlie_brown_jr_songs.update({
                    where: {
                        id: song_updates.id
                    },
                    data: {
                        song_updates
                    }
                }) 
                return updateSong
            } catch(err) {
                return err
            }
    }
}