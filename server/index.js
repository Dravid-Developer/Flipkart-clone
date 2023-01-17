import express from "express";
import Connection from "./db.js";
import DefaultData from "./default.js";

const app = express();

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`server listening on ${PORT}`));

DefaultData();
