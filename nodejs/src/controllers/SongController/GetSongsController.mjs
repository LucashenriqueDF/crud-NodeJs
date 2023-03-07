import GetSongsService from "../../services/GetSongService.mjs";

export default class GetSongsController {
  async handleGetSongs(req, res) {
    try {
      const songs = await new GetSongsService().handleGetSong();
      console.log(songs);
      return res.json(songs);
    } catch(err) {
      return res.json(err);
    }  

  }
}