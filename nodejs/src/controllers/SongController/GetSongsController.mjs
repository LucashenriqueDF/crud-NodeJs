import GetSongsService from "../../services/GetSongService.mjs";

export default class GetSongsController {
  async handleGetSongs(req, res) {
    try {
      const songs = await new GetSongsService().handleGetSong();
      return res.json(songs);
    } catch(err) {
      return res.json(err);
    }  

  }

async handleGetSongById(req, res){
  const song_id = Number(req.params.id);

    const song = await new GetSongsService().handleGetSongById(song_id);
    
    if(!song || song == null) {
      return res.status(404).json("Song not found");
    }
    return res.json(song);
  }

}