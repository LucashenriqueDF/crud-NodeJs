import "dotenv/config";
import express from "express";
import routes from "./routes/index.mjs";

const port = process.env.PORT; 
const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log("Api is running");
})



