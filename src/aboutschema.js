const mongoose = require("mongoose");

const aboutschema = mongoose.Schema({
    content:{
        type: String
    },
})

module.exports = mongoose.model('aboutschema', aboutschema);