const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo_list");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected");
})