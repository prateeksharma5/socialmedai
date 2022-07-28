const app= require('./app');
const { connectDatabase } = require('./config/database');

// const port = 3003;
//connectDatabase();


const dotenv = require('dotenv');
dotenv.config({path:"backend/config/config.env"});

console.log(process.env,process.env.PORT);
app.listen(process.env.PORT,console.log(`app is running on port ${process.env.PORT}`)); 