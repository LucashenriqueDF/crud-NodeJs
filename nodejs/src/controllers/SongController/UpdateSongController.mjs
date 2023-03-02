import UpdateSongService from "../../services/UpdateSongService.mjs";

export default class UpdateSongController{
    async handleUpdateSong(res, req){
        const song = req.body;
        try{
            const updateSong = await UpdateSongService().handleUpdateSong(song);
            res.json(updateSong);
        }catch(err){
            res.json(err);
        }
    }
}