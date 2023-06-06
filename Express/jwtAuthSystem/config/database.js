const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL;


exports.connect = ()=>{
    mongoose.connect(MONGODB_URL , {  
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("connected successfully"))
    .catch(e=>{
      console.log("DB connection failed"); 
      console.log(e);
      process.exit(1);   // if failure then 1 if succuss then 0
    })
}







