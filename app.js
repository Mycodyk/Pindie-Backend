const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const apiRouter = require("./routes/api");
const connectToDatabase = require("./database/connect");
const cors = require("./middlewares/cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3001;
const pagesRouter = require("./routes/pages");
connectToDatabase();


app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

app.listen(PORT);
