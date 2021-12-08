const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    userProfile: {
        type: Object
    },
    title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    image: {
        type: String
    }
})

exports.Post = mongoose.model('Post', postSchema);