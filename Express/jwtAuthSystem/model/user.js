const mongoose = require('mongoose');

// const {Schema} = mongoose; 
// const userSchema = new Schema({})
const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        default: null,
    },  
    lastname:{
        type: String, 
        required: true, 
        default: null,
    }, 
    email:{
        type: String, 
        // required: [true, "send an email"],
        unique: true, // automatically go to mongodb and automatically check in it. 
    }, 
    password: {
        type: String,
    },
    token: {
        type: String, 
    }
})

module.exports = mongoose.model('user', userSchema);

// in mongodb User/user is stored and it would be in lower capital and in plural (users) (automatically done)
