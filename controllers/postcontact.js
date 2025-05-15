const usercontact = require("../models/usercontactschema");

exports.postmessage = async (req, res) => {
    try {
        const { name, email, phone, message, inquiryType } = req.body;

        
        if (!name || !email || !phone || !message || !inquiryType) {
            return res.status(400).json({
                success: false,
                error: "Missing required fields: name, email, phone, message, or inquiryType."
            });
        }

        
        const user = await usercontact.findOne({ name, email, phone });

        if (!user) {
            
            await usercontact.create({ name, email, phone, message, inquiryType });
        } else {
            
            await user.updateOne({
                $push: { message, inquiryType } 
            });
        }

        return res.status(201).json({
            success: true,
            message: "Your inquiry has been submitted successfully. Our team will reach out to you soon."
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err.message });
    }
};
