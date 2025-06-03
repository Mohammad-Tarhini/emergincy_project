const mongoose=require('mongoose')
const schema=mongoose.schema;

const  organizationschema=new schema(
   { org_id : {
        type:id,
        required:true,
        
    },
    org_name:{
        type:string,
        required:true,
        

    },
    contect_email:{
        type:string,
        required:true,
        

    },
    org_type:{
        type:string,
        enum:["NGO", "Government", "Hospital","Blood Bank"],
    },
    phone_number:{
        type:Number,
    },
    location:{
        type:GEOGRAPHY/JSON,
        required:no,


    },

},{timestamps:true})

module.exports=mongoose.model("Organization",organizationschema)

