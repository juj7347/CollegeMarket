const {Conversation} = require('../../models/chat/conversation');
const express = require('express');
const router = express.Router();

router.get(`/:userId`, async (req, res)=>{
    const conversation = await Conversation.find({
        members: { $in: [req.params.userId]}
    });

    if(!conversation) {
        return res.status(500).send("cannot find conversation");
    }

    res.status(200).send(conversation);
})

router.post(`/`, async (req, res)=>{
    let conversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    });

    conversation = await conversation.save();

    if(!conversation) {
        return res.status(500).send("conversation failed");
    }

    res.status(200).send(conversation);
})

module.exports = router;