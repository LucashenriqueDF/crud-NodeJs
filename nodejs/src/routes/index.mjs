import { Router } from "express";

import {
          CreateSongController,
          DeleteSongController,
          UpdateSongController,    
      } from "../controllers/index.mjs"; 
import GetSongsController from "../controllers/SongController/GetSongsController.mjs";

const routes = Router();

routes.get("/song", new GetSongsController().handleGetSongs);
routes.post("/song", new CreateSongController().handleCreateSong);
routes.delete("/song/:id", new DeleteSongController().handleDeleteSong);
routes.patch("/song/:id", new UpdateSongController().handleUpdateSong);

export default routes;