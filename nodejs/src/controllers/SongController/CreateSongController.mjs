import CreateSongService from "../../services/CreateSongService.mjs";

import CreateSongService from "../../services/CreateSongService.mjs";

export default class CreateSongController{

async handleCreateSong(req, res){
    const song = req.body;
        try {
            const createdSong = await new CreateSongService().createSong(song);
                    console.log(createdSong);
                    res.json(createdSong);
            } catch(err){
                res.json(err);
        }
    }
}