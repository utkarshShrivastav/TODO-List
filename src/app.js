//acquiring required resources 
const express = require("express");
const path = require("path");
const routes = require("./backend/routes/htmlRoutes");
const port = 8000;
const app = express();

// Setting up EJS
app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

// Setting up Static Files
app.use(express.static(path.join(__dirname, "./client")));

// Setting up route
app.use("/", routes);

// Firing the Server
app.listen(port, function (err) {
    if (err) {
        console.log("Error in setting up server");
    }
    console.log("Server is up and running on port:", port);
});