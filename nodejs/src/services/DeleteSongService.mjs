import prisma from "../utils/prisma.mjs";

export default class DeleteSongServices{
        async deleteSong(song){
            try {
                const deletedSong = await prisma.charlie_brown_jr_songs.delete({
                    where: {
                        id: Number(song.id)
                    }
                });

                return deletedSong
                
        }catch(err) {
            return err

        }
    }
}