import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import path from "path";

const app = express();

app.use(bodyParser.json());

app.listen(8000, () => {
    console.log("Serve is listening on port 8080");
});
