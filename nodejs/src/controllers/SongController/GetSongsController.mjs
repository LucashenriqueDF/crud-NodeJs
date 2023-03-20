import GetSongsService from "../../services/GetSongService.mjs";

export default class GetSongsController {
  async handleGetSongs(req, res) {
    const songs = await new GetSongsService().handleGetSong();
    return res.json(songs)
    // try {
    // } catch(err) {
    //   return res.json(err);
    // }  

  }

async handleGetSongById(req, res){
    const song = await new GetSongsService().handleGetSongById(req.params.id);
      return res.json(song);
  }

}