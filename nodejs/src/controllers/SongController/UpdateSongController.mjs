import UpdateSongService from "../../services/UpdateSongService.mjs";

export default class UpdateSongController{
    async handleUpdateSong(req, res){
        const song = req.body;
        song.id = Number(req.params.id);
        try{
            const updateSong = await new UpdateSongService().handleUpdateSong(song);
            res.json(updateSong);
        }catch(err){
            res.json(err);
        }
    }
}