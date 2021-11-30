const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
    {
        conversationId: {
            type: String,
            required: true
        },
        sender: {
            type: String,
            required: true
        },
        receiver: {
            type: String, 
            required: true
        },
        text: {
            type: String
        },
        createdAt: {
            type: Date
        },
        senderName: {
            type: String
        },
        senderAvatar: {
            type: String
        }

    },
    { timestamps: true }
)

exports.Message = mongoose.model('Message', messageSchema);