//require packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//sets port
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

//using mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ 
  //for heroku
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
 });

//getting routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
