// const express=require('express')
// const bodyParser = require("body-parser")
// const app=express();
// const mongoose=require('mongoose');
// mongoose.connect('mongodb://admin:password@localhost:27017/task1',()=>console.log("database connected"))



// if(process.env.NODE_ENV !=='production'){
//     require('dotenv').config({path:'backend/config/config.env'})
//     }
    
//     //using middlewares
//     app.use(express.json());
//     app.use(bodyParser.urlencoded({extended:true}))
//     //app.use(cookieParser());
//     //Importing route
//     //const Admin=require('./routes/admin.js')
//     const user=require('./routes/user')
//     //const Post=require(‘./routes/Post’)
//     //Using routes
//     //app.use('/api/v2',Admin)
//     app.use('/api/v2',user)

//     //app.use(‘/api/v2’,Post)
// module.exports=app  //export app// const express=require('express')


const dotenv = require('dotenv');
dotenv.config({path:"backend/config/config.env"});
const express=require('express')

const app=express();
const cookieParser=require('cookie-parser');
const mongoose=require('mongoose');

mongoose.connect(process.env.url
,console.log("database connected"))


//using middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//import route

const post= require("./routes/Post");
const user=require("./routes/User")

// using routes

app.use("/api/v1",post);
app.use("/api/v1",user);


module.exports=app;