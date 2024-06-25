const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const placeRoute = require("./routes/place.route");  // Asumiendo que tienes un archivo place.route.js
const userRoute = require("./routes/user.route");    // Asumiendo que tienes un archivo user.route.js
const quoteRoute = require("./routes/quote.route");    // Asumiendo que tienes un archivo user.route.js

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use("/api", placeRoute);  // Asignando las rutas adecuadamente
app.use("/api", userRoute);
app.use("/api", quoteRoute);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// Conexión a MongoDB
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB Atlas:", error));

// Iniciar el servidor
app.listen(port, () => console.log("Server listening on", port));
