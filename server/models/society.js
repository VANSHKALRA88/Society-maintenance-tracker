const mongoose = require("mongoose");

const societySchema = new mongoose.Schema(
{
    societyName:{
        type:String,
        required:true,
        trim:true
    },

    address:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },

    state:{
        type:String,
        required:true
    },

    pincode:{
        type:String,
        required:true
    },

    totalBlocks:{
        type:Number,
        default:1
    },

    totalFlats:{
        type:Number,
        default:0
    },

    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},
{
    timestamps:true
}
);

module.exports = mongoose.model("Society",societySchema);