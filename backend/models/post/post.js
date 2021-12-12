const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String
    },
    userImg: {
        type: String
    },
    description: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ''
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId
    },
    tagName: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

exports.Post = mongoose.model('Post', postSchema);