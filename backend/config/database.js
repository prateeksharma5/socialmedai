const mongoose=require('mongoose')

const url='mongodb+srv://prateek_sharma:akki10@cluster0.dtljptr.mongodb.net/?retryWrites=true&w=majority'

var database=mongoose.connect(url,{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('database connected ...')
    } else{

        console.log('error in db connection')
    }
})








// exports.connectDatabase=()=>{
//     mongoose.connect("mongodb://admin:password@localhost:27017/taskfinal")
//         .then(con=>console.log('Database connected'))
//         .catch((err)=>console.log(err))
        
// }