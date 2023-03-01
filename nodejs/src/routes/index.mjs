import { Router } from "express";
import CreateSongController from "../controllers/CreateController.mjs";

const routes = Router();

routes.get("/", (req, res) => {
  res.json("Hello, world");
})

routes.post("/song", new CreateSongController().handleCreateSong);

export default routes;