import { Router } from "express";

import {
          CreateSongController,
          DeleteSongController,
          UpdateSongController,    
      } from "../controllers/index.mjs"; 

const routes = Router();

routes.post("/song", new CreateSongController().handleCreateSong);
routes.delete("/song", new DeleteSongController().handleDeleteSong);
routes.patch("/song", new UpdateSongController().handleUpdateSong);

export default routes;