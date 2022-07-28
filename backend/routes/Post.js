const express= require("express");
const { createPost, likeandunlikePost, deletePost } = require("../controllers/Post");
const { isAuthenticated } = require("../middleware/auth");

const router=express.Router();

router.route("/post/upload").post(isAuthenticated,createPost);

router.route('/post/:id').get(isAuthenticated,likeandunlikePost).delete(isAuthenticated,deletePost);


//router.route("/post/:id").delete(isAuthenticated,deletePost);


module.exports=router;