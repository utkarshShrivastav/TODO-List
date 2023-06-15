//acquiring required resources 
const express = require("express");
const pages = require("../controllers/htmlControllers");
const router = express.Router();

// route to navigate to home
router.get("/",pages.homePage);

module.exports = router;