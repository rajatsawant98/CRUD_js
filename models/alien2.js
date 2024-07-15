const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({
    
    name : {
        type : String,
        required : true,
        unique: true,
        minlength: 5,
        maxlength: 10
    },
    tech:{
        type : String,
        required : true
    },
    sub:{
        type : Boolean,
        required : true,
        default : false
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type : String,
        required: false
    }

})


module.exports = mongoose.model('Alien', alienSchema)