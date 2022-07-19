const express = require("express");
const router = express.Router();
const postTestController = require("../controllers/postTestController");

router.post("/", postTestController.handleNewPostTest);

module.exports = router;
