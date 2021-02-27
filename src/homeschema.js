const mongoose = require('mongoose')

const homeschema = mongoose.Schema({
    
    fb: {
        type: String
    },
    insta: {
        type: String
    },
    twiter: {
        type: String
    },
    companyname: {
        type: String
    },
    about: {
        type: String
    }
    
})

module.exports = mongoose.model('home', homeschema)