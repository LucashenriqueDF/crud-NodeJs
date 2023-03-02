import { Router } from "express";

import {
          CreateSongController,
          DeleteSongController,
          ReadSongController,
        // UpadateSongController,
        // ReadSongController
      } from "../controllers/index.mjs"; 

const routes = Router();


routes.post("/song", new CreateSongController().handleCreateSong);
routes.delete("/song", new DeleteSongController().handleDeleteSong);
routes.patch("/song", new UpdateSongController().handleUpdateSong);
routes.get("/song", new ReadSongController().handleReadSong);

export default routes;