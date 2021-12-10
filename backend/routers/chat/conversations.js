const {Conversation} = require('../../models/chat/conversation');
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

router.get(`/:userId`, async (req, res)=>{
    const conversation = await Conversation.find({
        members: { $in: [req.params.userId]}
    });

    if(!conversation) {
        return res.status(500).send("cannot find conversation");
    }

    res.status(200).send(conversation);
})

router.get(`/find/:firstUserId/:secondUserId`, async (req, res)=>{
    /*
    const conversation = await Conversation.find({
        members: {$all: [req.params.firstId, req.params.secondId]}
    })

    if(!conversation) {
        return res.status(500).send("cannot find conversation");
    }
    console.log("found", conversation._id)
    return res.status(200).send(conversation);
    */
    try {
        const conversation = await Conversation.findOne({
          members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        });
        if(!conversation) {
            return res.status(200).json({found: false});
        }

        if(req.params.firstUserId !== req.params.secondUserId)
            return res.status(200).json(conversation);
        else 
            return res.statusMessage(200).json({sameUser: true});
      } catch (err) {
        res.status(500).json(err);
      }
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

router.put(`/:conversationId`, async (req, res)=>{
    if(!mongoose.isValidObjectId(req.params.conversationId)) {
        return res.status(400).send('Invalid Conversation ID');
    }
    
    const updatedMessage = await Conversation.findByIdAndUpdate(
        req.params.conversationId,
        {
            lastMessage: req.body.lastMessage,
            lastSent: req.body.lastSent
        }
    );
    
    if(!updatedMessage) {
        return res.status(500).send('conversation cannot be updated');
    }
    
    res.send(updatedMessage);
    
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