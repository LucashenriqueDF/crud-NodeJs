import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Vai corinthians");
});

const port = process.env.PORT; 

app.listen(port, () => {
    console.log("Api is running");
})

