const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
const { DaftarUser, LoginUser, getUser } = require("../controller/user.controller");
const { runValidation, validationDaftar, validationLogin } = require("../validation/validation");

// USER AUTH
router.post("/daftar", validationDaftar, runValidation, DaftarUser);
router.post("/login", validationLogin, runValidation, LoginUser);
router.get("/user", middleware, getUser);
// router.put("/forgotpassword", forgotPassword);
// router.put("/resetpassword", resetPassword);

module.exports = router;
