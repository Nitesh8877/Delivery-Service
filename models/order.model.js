const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ItemSchema=new Schema({
    name:{
        type:String,
        required:"name is required"
    },
    quantity:{
        type:Number,
        required:"Quantity is required",
        default:1,
    }
})

const AddressSchema=new Schema({
    name:{
        type:String,
        required:"Name is requied",
    },
    addressLine1:{
        type:String,
        required:"First Line Address is required",
    },
    addressLine2:{
        type:String,
    },
    pinCode:{
        type:Number,
        required:"Pin Code is required",
    },
    city:{
        type:String,
        required:"City is required"
    },
    state:{
        type:String,
        required:"Satate is required"
    },
    country:{
        type:String,
        requried:"Country is required",
        enum:["INDIA", "UKRAINE"],
        default:"INDIA"
    },
    phone:{
        type:String,
        requried:"Phone number is required"
    }
})

const OrderShcmea=new Schema({
    orderDate:{
        type:Date,
        default:Date.now()
    },
    deliverDate:{
        type:Date,
    },
    source:{
        type:AddressSchema,
    },
    destination:{
        type:AddressSchema
    },
    items:{
        type:[ItemSchema],
        required:"Items are required",
        default:[]
    },
    status:{
        type:String,
        enum: ["PLACED", "INTRANSIT", "DELIVERED"],
        default: "PLACED"
    }
})

module.exports=mongoose.model("Order", OrderShcmea);