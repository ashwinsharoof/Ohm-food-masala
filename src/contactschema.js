const mongoose = require("mongoose")

const admincontact = mongoose.Schema({
    email:{
        type: String,
    },
    city:{
        type:String,
    },

    state:{
        type: String,
    },
    mapl:{
        type: String,
    },
    phone:{
        type: String,
    }

});

module.exports = mongoose.model("admincontact", admincontact);