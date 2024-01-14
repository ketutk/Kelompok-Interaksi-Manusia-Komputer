const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
const { addPosition, getPosition } = require("../controller/position.controller");

router.get("/", getPosition);
router.post("/add", middleware, addPosition);

module.exports = router;
