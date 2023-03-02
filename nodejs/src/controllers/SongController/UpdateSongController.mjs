import UpdateSongService from "../../services/UpdateSongService.mjs";

export default class UpdateSongController{
    async handlerUpdateSong(res, req){
        const song = req.body;
        try{
            const updateSong = await UpdateSongService().handlerUpdateSong(song);
            res.json(updateSong);
        }catch(err){
            res.json(err);
        }
    }
}