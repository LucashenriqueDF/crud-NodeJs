import prisma from "../utils/prisma.mjs";

export default class DeleteSongServices{
        async deleteSong(res, req, song){
            try {
                const deleteSong = await prisma.charlie_brown_jr_songs.delete({
                    where: {
                        id: Number(song.id)
                    }
                })

                return res.json(`Song ${deleteSong} it is deleted successfully`)
        }catch(err) {
            return res.json(err)

        }
    }
}