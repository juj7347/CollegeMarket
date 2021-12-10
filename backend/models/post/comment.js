const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    userId: {
        type: String
    },
    postId: {
        type: String
    },
    userProfile: {
        type: Object
    },
    description: {
        type: String
    }
})

exports.Comment = mongoose.model('Comment', commentSchema);