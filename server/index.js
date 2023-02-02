import express from "express";
import Connection from "./db.js";
import DefaultData from "./default.js";
import cors from "cors";
import router from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`server listening on ${PORT}`));

DefaultData();
