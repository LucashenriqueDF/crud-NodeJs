import prisma from "../utils/prisma.mjs"

export default class UpdateSongService{
        async handleUpdateSong(res, req){
            try{
                const song = res.body;
                const update_song = await prisma.charlie_brown_jr_songs.patch({
                    where:{
                        id: Number(song.id),
                    }
                })
                    return res.json(`Song ${update_song} updated successfully`);

            }catch(err) {
            res.json(err);   
        }
    }
}