const express = require("express");
const mongoose = require("mongoose");

const { PORT = 3001 } = process.env;
const app = express();

mongoose.connect(
  "mongodb://127.0.0.1:27017/newsapp_db",
  (r) => {
    console.log("Connected to DB", r);
  },
  (e) => console.log("DB error", e),
);

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
  });
  

  // "C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --dbpath="c:\data\db