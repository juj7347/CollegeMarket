const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema(
    {
        members: {
            type: Array,
        },
        lastMessage: {
            type: String,
            default: ''
        },
        lastSend: {
            type: Date
        }
    },
    { timestamps: true }
)

exports.Conversation = mongoose.model('Conversation', conversationSchema);