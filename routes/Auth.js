const express = require("express");
const route = express.Router();

const { Signup,Login,sendMail} = require("../controllers/AuthController");

route.post("/Signup", Signup);
route.post("/Login",Login);
route.post("/sendMail",sendMail);



module.exports = route;
