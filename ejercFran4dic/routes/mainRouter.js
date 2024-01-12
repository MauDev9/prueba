const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainControllers")

/* GET home page. */
router.get('/home',mainController.home);

module.exports = router;
