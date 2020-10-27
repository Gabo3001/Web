const express = require("express");
const port = 3000;

const app = express();

const db = require("./db");

app.use(express.json());

const infoRouter = require("./routes/info");

app.use("/information", infoRouter);

app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
);