const express = require("express");
const http = require("http");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose
  .connect(
    "mongodb+srv://scott:tiger@cluster0-jmefm.mongodb.net/auth?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(res => {
    console.log("CONNECTED::");
  })
  .catch(err => {
    console.log(`ERROR :: ${err}`);
  });
const app = express();

app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on:${port}`);
