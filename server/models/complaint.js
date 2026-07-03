const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
        trim:true,
    },

    description:{
        type:String,
        required:true,
    },

    society:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Society",
        required:true,
    },

    flat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Flat",
        required:true,
    },

    resident:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },

    priority:{
        type:String,
        enum:["Low","Medium","High","Emergency"],
        default:"Medium",
    },

    status:{
        type:String,
        enum:[
            "Pending",
            "Assigned",
            "In Progress",
            "Resolved",
            "Closed"
        ],
        default:"Pending",
    },

    dueDate:{
        type:Date,
    },

    photo:{
        type:String,
        default:"",
    },

    isOverdue:{
        type:Boolean,
        default:false,
    },

    statusHistory:[
        {
            status:String,
            changedAt:{
                type:Date,
                default:Date.now,
            },
            remarks:String,
        }
    ]

},
{
    timestamps:true,
});

module.exports = mongoose.model("Complaint",complaintSchema);