const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userContactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "Usercontact",
    },
    inquiryType: [
      {
        type: String,
        required: [true, "Please enter inquiry type"],
        enum: ["General Inquiry", "Service Request", "Partnership", "Support", "Other"],
      }
    ],
    message: [
      {
        type: String,
        required: [true, "Message is required"],
      }
    ]
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Usercontact", userContactSchema);
