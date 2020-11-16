// This file holds the express server and connects to Mongoose

// DEPENDENCIES
const express = require("express");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// message if mongoose connects or not
const mongooseConnection = mongoose.connection;
mongooseConnection.on('error', console.error.bind(console, 'connection error:'));
mongooseConnection.once('open', function () {
  console.log("connected")
});

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Start express server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});