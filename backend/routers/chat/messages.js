const {Message} = require('../../models/chat/message');
const express = require('express');
const router = express.Router();

const createMessage = (messages) => {
    const giftedMessage = messages.map(message => {
        return {
            _id: Math.random(),
            text: message.text,
            createAt: message.createdAt,
            user: {
                _id: message.sender,
                name: message.senderName,
                avatar: message.senderAvatar
            }
        }
    })

    return giftedMessage;
}

//get
router.get(`/:conversationId`, async (req, res)=>{
    const messages = await Message.find({
        conversationId: req.params.conversationId
    }).sort({createdAt: -1});

    if(!messages) {
        return res.status(500).send("message get failed");
    }
    res.status(200).send(createMessage(messages));
})

//post
router.post(`/`, async (req, res)=>{
    let message = new Message({
        conversationId: req.body.conversationId,
        sender: req.body.sender,
        receiver: req.body.receiver,
        text: req.body.text,
        createdAt: req.body.createdAt,
        senderName: req.body.senderName,
        senderAvatar: req.body.senderAvatar
    });

    if(!message) {
        return res.status(500).send("message post failed");
    }

    message = await message.save();

    res.status(200).send([message]);

})

module.exports = router;