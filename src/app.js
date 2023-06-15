//acquiring required resources 
const express = require("express");
const path = require("path");
const routes = require("./backend/routes/htmlRoutes");
const port = 8000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

// MongoDB cONNECT


mongoose.connect("mongodb://127.0.0.1:27017/todo_list");

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to db"));
db.once('open', function () {
    console.log("Successfully connected");
})


// Setting up EJS
app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

// Setting up Static Files
app.use(express.static(path.join(__dirname, "./client")));

//Setting up Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up route
app.use("/", routes);

// Firing the Server
app.listen(port, function (err) {
    if (err) {
        console.log("Error in setting up server");
    }
    console.log("Server is up and running on port:", port);
});