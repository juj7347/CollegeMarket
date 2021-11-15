const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
    {
        conversationId: {
            type: String
        },
        sender: {
            type: String
        },
        text: {
            type: String
        }

    },
    { timestamps: true }
)

exports.Message = mongoose.model('Conversation', messageSchema);