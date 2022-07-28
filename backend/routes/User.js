const express= require("express");
//const { createPost } = require("../controllers/post");
const {register, login, followUser}=require("../controllers/User");
const { isAuthenticated } = require("../middleware/auth");

const router=express.Router();


//router.route("/post/upload").post(createPost);

router.route("/register").post(register);

router.route('/login').post(login)

router.route("/follow/:id").get(isAuthenticated,followUser)

module.exports=router;