const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
require("dotenv").config();
const url = "mongodb://127.0.0.1/MEANapp";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected to the database...");
});
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/workouts", workoutRoutes);

app.listen(4000, () => {
  console.log("Server started");
});
