const {Comment} = require("../../models/post/comment");
const express = require('express');
const router = express.Router();

router.get('/:postId', async (req, res) => {
    const comments = await Comment.find({postId: req.params.postId});

    if(!comments) {
        return res.status(500).json({success: false});
    }

    res.send(comments);
})

router.post(`/`, async (req, res) => {
    let comment = new Comment({
        userId: req.body.userId,
        postId: req.body.postId,
        userProfile: req.body.userProfile,
        description: req.body.description,
    })

    comment = await comment.save();

    if(!comment) {
        return res.status(500).json({success: false});
    }

    res.send(comment);
})

module.exports = router;