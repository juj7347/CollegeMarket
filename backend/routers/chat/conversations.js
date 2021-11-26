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

router.delete(`/:conversationId`, async (req, res)=>{
    Conversation.findByIdAndRemove(req.params.conversationId).then(conversation => {
        if(conversation) {
            return res.status(200).json({success: true, message: "conversation deleted"});
        }
        else {
            return res.status(404).json({success: false, message: "conversation not found"});
        }
    }).catch((err)=>{
        return res.status(400).json({success: false, error: err});
    });
})

module.exports = router;