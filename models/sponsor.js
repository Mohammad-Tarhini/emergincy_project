const mongoose=require('mongoose')
const schema=mongoose.schema;

const sponsorSchema=new Schema({
    sponsorPrivateNumber:{
        type: String,
    },
    sposorName:{
        type:String,
    },
    sponsorEmail:{
        type:String,
    },

})

module.exports=mongoose.model("sponsor",sponsorSchema)