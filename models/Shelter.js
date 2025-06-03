const mongoose=require('mongoose')
const schema=mongoose.schema;

const ShelterSchema=new Schema({
    sponsor:{
        type:Schema.Types.ObjectId,
        ref:"sponsor"

    },
    location:{
        type:point,
    },
    address:{
        type:String,
    },
    city:{
        trypr:String,
    },
    Region:{
        type:String,

    },
    numberofpeople:{
        type:int,
    },
    availability:{
        type:Date,

    },
    facilitiesAvailable:[
        {
            type:String
        }
    ],
    mobileForSeeker:{
        type:String
    }


})
module.exports=mongoose.model("Shelter",ShelterSchema)

