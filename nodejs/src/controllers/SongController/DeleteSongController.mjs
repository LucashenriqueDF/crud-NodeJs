import DeleteSongServices from "../../services/DeleteSongService.mjs";

export default class DeleteSongController{
    
    async handleDeleteSong(req, res){
        const song = req.body;
        song.id = req.params.id;
        
        try {
            const deleteSong = await new DeleteSongServices().deleteSong(song)
            res.json(deleteSong);
            
        } catch(err) {
            res.json(err);
        }
    }
}
