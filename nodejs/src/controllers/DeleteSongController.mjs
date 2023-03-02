import DeleteSongServices from "../services/DeleteSongService.mjs";

export default class DeleteCotoller{
        async handleDelete(res, req ){
            const song = req.body;
            try {
                const deleteSong = await new DeleteSongServices().deleteSong(song)
                res.json(deleteSong);
            } catch(err) {
                res.json(err);
        }
    }
}