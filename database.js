const mongoose= require("mongoose");
require("dotenv").config();

exports.connectdb=async () =>{

    try{
        await mongoose.connect(process.env.MongoDB_Url);
        console.log("mongodb connect");
    }catch(err){
        console.error(err);
        process.exit(1);
    }
    
}
    
