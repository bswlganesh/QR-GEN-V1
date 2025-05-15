

import qr from 'qr-image';
import fs from "fs";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");

  });


  app.post("/submit", (req, res) => {
    var qr_svg = qr.image(req.body["input"]);
    qr_svg.pipe(fs.createWriteStream('output.png'));
    res.sendFile(__dirname + "/output.png");


  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });