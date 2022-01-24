// required dependancies /

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require("fs");
const path = require("path");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// middleware functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// -------- Routes --------------
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// -------- server port ---------
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});