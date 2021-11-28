const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema(
    {
        members: {
            type: Array,
        }
    },
    { timestamps: true }
)

exports.Conversation = mongoose.model('Conversation', conversationSchema);