const {Message} = require('../../models/chat/message');
const express = require('express');
const router = express.Router();

//get
router.get(`/:conversationId`, async (req, res)=>{
    const messages = await Message.find({
        conversationId: req.params.conversationId
    })

    if(!messages) {
        return res.status(500).send("message get failed");
    }

    res.status(200).send(messages);
})

//post
router.post(`/`, async (req, res)=>{
    let message = new Message({
        conversationId: req.body.conversationId,
        sender: req.body.sender,
        text: req.body.text
    });

    if(!messeage) {
        return res.status(500).send("message post failed");
    }

    message = await message.save();

    res.status(200).send(message);

})

module.exports = router;