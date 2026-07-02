const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
{
    flatNumber:{
        type:String,
        required:true,
        trim:true
    },

    block:{
        type:String,
        required:true,
        trim:true
    },

    floor:{
        type:Number,
        required:true
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null
    },

    society:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Society",
        required:true
    },

    isOccupied:{
        type:Boolean,
        default:false
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Flat", flatSchema);