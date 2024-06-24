const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const placeRoute = require("./routes/place.route");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use("/api", placeRoute);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB Atlas:", error));

app.listen(port, () => console.log("Server listening to", port));