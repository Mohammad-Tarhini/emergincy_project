const Sponsor=require("../models/sponsorSchema")
const Shelter = require("../models/Shelter")

exports.updateShelter=async(req,res)=>{
    try{
        const theShelter=await Shelter.findbyId(req.params["id"]);
        const thesposor=await Sponsor.findbyId(req.body["sponsorid"])
        const {sponsorId,location,coordinates,address,city,region,numberofpeople,availabilitydate,facilitiesAvailable,sponsorPrivateNumber,sponsorName,sponsorEmail,mobileForSeekers}=req.body;
       const InfoShelter={sponsorId,location,coordinates,address,city,region,numberofpeople,availabilitydate,facilitiesAvailable}
       const InfoSponsor={sponsorPrivateNumber,sponsorName,sponsorEmail}
       if(sponsorId.tostring() != theShelter.sponsorId.tostring()){
           return res.status(401).json({success:false,message:"Invalid or missing fields",data:null})

        }
       if(!theShelter){
            return res.status(401).json({success:false,message:"Invalid or missing fields",data:null})
        }
        
       await models.findByIdAndUpdate(theShelter,InfoShelter,{new:true})
       await models.findByIdAndUpdate(thesponsor,InfoSponsor,{new:true})
        

        return res.status(200).json({
            success:true,
            message:"shelter update successfully",
            data:{
               theShelter,
                thesponsor
            }
        })


    }catch(err){
        return res.status(500).json({success:false,message:"error " ,data:null})

    }
}