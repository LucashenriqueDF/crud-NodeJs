import UpdateSongService from "../../services/UpdateSongService.mjs";

export default class UpdateSongController{
    async handleUpdateSong(res, req){
        const song = req.body;
        song.id = req.params.id;
        try{
            const updateSong = await new UpdateSongService().handleUpdateSong(song);
            res.json(updateSong);
        }catch(err){
            res.json(err);
        }
    }
}