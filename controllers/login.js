const user=require("../models/userschema")
const validator=require("validator")
const {fullname,phonenumber,password}=req.bod;
try{

if ( !phonenumber || !password){
    return res.status(400).json({success:false , message:"phone number",data:null })
}
if(!validator.isNumeric(phonenumber)){
    return req.status(400).json({success:false})
}

const theuser=await user.findone(fullname,phonenumber,password)
if (!theuser){
    return req.status(401).json({ success:false, message:"Invalid phone number or password", data:null})
}

return req.status(500).json({success:true,user:theuser})
}catch(err){

}

