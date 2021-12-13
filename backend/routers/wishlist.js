const {Wishlist} = require('../models/wishlist');
const {Product} = require('../models/product');
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

router.get(`/product/:userId`, async (req, res)=>{
    const wishlist = await Wishlist.findOne({
        userId: req.params.userId
    }).populate('productList');

    if(!wishlist) {
        return res.status(404).send("whshlist not found");
    }

    res.status(200).send(wishlist);

})

router.get(`/post/:userId`, async (req, res)=>{
    const wishlist = await Wishlist.findOne({
        userId: req.params.userId
    });

    if(!wishlist) {
        return res.status(404).send("whshlist not found");
    }


    res.status(200).send(wishlist);

})

router.post(`/`, async (req, res)=>{
    let wishlist = new Wishlist({
        userId: req.body.userId,
        productList: [],
        postList: []
    });

    wishlist = await wishlist.save();

    if(!wishlist)
        return res.status(404).send('wishlist cannot be created');

    res.status(200).send(wishlist);
})

router.put(`/product/like/:userId`, async (req, res)=>{
    if(!mongoose.isValidObjectId(req.params.userId)) {
        return res.status(400).send('Invalid User ID');
    }

    const wishlist = await Wishlist.findOne({userId: req.params.userId});

    if(!wishlist) {
        return res.status(500).send("wishlist of given user ID not found");
    }
    
    let updatedList = [];
    
    if(req.body.like) {
        updatedList = await Wishlist.findByIdAndUpdate(
            wishlist._id,
            {
                $push: {productList: req.body.itemId}
            }
        )
    }
    else {
        updatedList = await Wishlist.findByIdAndUpdate(
            wishlist._id,
            {
                $pull: {productList: req.body.itemId}
            }
        )
    }
    
    if(!updatedList) {
        return res.status(500).json({success: false});
    }
    
    res.status(200).send(updatedList);

})

router.put(`/post/like/:userId`, async (req, res)=>{
    if(!mongoose.isValidObjectId(req.params.userId)) {
        return res.status(400).send('Invalid User ID');
    }

    const wishlist = await Wishlist.findOne({userId: req.params.userId});

    if(!wishlist) {
        return res.status(500).send("wishlist of given user ID not found");
    }
    
    let updatedList = [];
    
    if(req.body.like) {
        updatedList = await Wishlist.findByIdAndUpdate(
            wishlist._id,
            {
                $push: {postList: req.body.itemId}
            }
        )
    }
    else {
        updatedList = await Wishlist.findByIdAndUpdate(
            wishlist._id,
            {
                $pull: {postList: req.body.itemId}
            }
        )
    }
    
    if(!updatedList) {
        return res.status(500).json({success: false});
    }
    
    res.status(200).send(updatedList);

})
module.exports = router;
