require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");

const { PORT = 3001, NODE_ENV, DB_ADDRESS} = process.env;
const app = express();
const cors = require("cors");
const { errors } = require("celebrate");
const errorHandler = require("./middlewares/error-handler");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const { limiter } = require("./utils/limiter")
const { DB_ADDRESS_DEV } = require("./utils/config");

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

if (NODE_ENV === "production") {
  mongoose.connect(
    DB_ADDRESS,
    (r) => {
      console.log("connected to DB", r);
    },
    (e) => console.log("DB error", e),
  );
} else {
  mongoose.connect(
    DB_ADDRESS_DEV,
    (r) => {
      console.log("connected to DB", r);
    },
    (e) => console.log("DB error", e),
  );
}

  app.get('/crash-test', () => {
    setTimeout(() => {
      throw new Error('Server will crash now');
    }, 0);
  });

  const routes = require("./routes");

  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(limiter);
  app.use(requestLogger);
  app.use(routes);
  app.use(errorLogger);
  app.use(errors());
  app.use(errorHandler);
  

 