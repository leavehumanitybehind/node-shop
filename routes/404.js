const express = require("express");
const router = express.Router();
const path = require("path");
const errorController = require('../controllers/error')

router.get('*', errorController.getAnError);

module.exports = router;
