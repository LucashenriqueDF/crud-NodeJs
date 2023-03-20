import { Router } from "express";

import {
          CreateSongController,
          DeleteSongController,
          UpdateSongController,
          GetSongsController    
      } from "../controllers/index.mjs"; 

const routes = Router();

routes.get("/song", new GetSongsController().handleGetSongs);
routes.post("/song", new CreateSongController().handleCreateSong);
routes.delete("/song/:id", new DeleteSongController().handleDeleteSong);
routes.put("/song/:id", new UpdateSongController().handleUpdateSong);

export default routes;