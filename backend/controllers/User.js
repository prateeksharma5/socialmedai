//const {findOne} = require("../models/User");
const User=require("../models/User");

exports.register=async(req,res)=>{

    try{
        const {name,email,password}=req.body;
        let user =await User.findOne({email});
        if(user){ return res.status(400).json({success:false,
            message:"user already exists"});
        }
        user= await User.create({name,
            email,
            password,
            avatar:{public_id:"sample_id",url:"sample_url"}});

            const token = await user.generateToken();

    const option={expires:new Date(Date.now()+90*24*60*60*1000),
        httpOnly:true,};

    res.status(200).cookie("token",token,option).json({

        success:true,
        user,
        token,

    });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        });

    }
};

exports.login= async(req,res)=>{
    try{
        const { email, password }=req.body;

        //console.log(email,password)
        
        const user= await User.findOne({email}).select("+password");

        if(!user){
            return res.status(400).json({
                success:false,
                message:"user does not exists"
            });
        }

        const isMatch= await user.matchPassword(password);

        if(!isMatch){
            return res.status(400).json({
            success:false,
            message:"Incorrect password"
        });
    }

    const token = await user.generateToken();

    const option={expires:new Date(Date.now()+90*24*60*60*1000),
        httpOnly:true,};

    res.status(200).cookie("token",token,option).json({

        success:true,
        user,
        token,

    });

}catch(error){
    console.log(req)
    res.status(500).json({
        success:false,
        message:error.message,
    })

}
}


exports.followUser= async(req,res)=>{
    try{

        const userToFollow= await User.findById(req.params.id);

        const loggedInUser=await User.findById(req.user._id);

        if(!userToFollow){
            return res.status(404).json({
                success:false,
                message:"user not found"
            });
        }

        if(loggedInUser.following.includes(userToFollow._id)){
            // return res.status(400).json({
            //     success:false,
            //     message:"user already follow",
            //})
            const indexfollowing= loggedInUser.following.indexOf(userToFollow._id);
            loggedInUser.following.splice(indexfollowing,1)

            const indexfollowers=userToFollow.followers.indexOf(loggedInUser._id);
            userToFollow.followers.splice(index)
        }

        loggedInUser.following.push(userToFollow._id);
        userToFollow.followers.push(loggedInUser._id);
        await loggedInUser.save();
        await userToFollow.save();
        res.status(200).json({
            success:true,
            message:"user followed",
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,});
    }

}