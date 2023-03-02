import "dotenv/config";
import express from "express";
import routes from "./routes/index.mjs";

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT; 

app.listen(port, () => {
    console.log("Api is running");
})



