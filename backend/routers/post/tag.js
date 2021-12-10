const {Tag} = require("../../models/post/tag");
const express = require('express');
const router = express.Router();

router.get(`/`, async(req,res)=>{
    const tags = await Tag.find();

    if(!tags) {
        return res.status(500).json({success: false});
    }

    res.status(200).send(tags)
})

router.post(`/`, async(req,res)=>{
    let tag = new Tag({
        name: req.body.name
    });

    tag = await tag.save();

    if(!tag) {
        return res.statu(500).json({success: false});
    }

    res.status(200).send(tag);
})

module.exports = router;