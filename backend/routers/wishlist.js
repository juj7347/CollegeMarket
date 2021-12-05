const {Wishlist} = require('../models/wishlist');
const {User} = require('../models/user');
const express = require('express');
const router = express.Router();

router.get(`/:userId`, async (req, res)=>{
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

router.put('/:userId', async (req, res)=>{
    if(!mongoose.isValidObjectId(req.params.userId)) {
        return res.status(400).send('Invalid User ID');
    }

    const wishlist = await Wishlist.find({userId: req.params.userId});

    if(!wishlist) {
        return res.status(500).send("wishlist of given user ID not found");
    }
    
    let newList;

    if(req.body.type === "product") {
        newList = wishlist.productList;
        if(newList.includes(req.body.itemId)) {
            newList.filter(id => id !== req.body.itemId);
        }
        else {
            newList.push(req.body.itemId);
        }
    
        const updatedList = await Wishlist.findByIdAndUpdate(
            wishlist._id,
            {
                productList: newList
            },
            {new: true}
        )

        return res.status(200).send(updatedList);
    }
    else if(req.body.type === "post") {
        newList = wishlist.postList;
        if(newList.includes(req.body.itemId)) {
            newList.filter(id => id !== req.body.itemId);
        }
        else {
            newList.push(req.body.itemId);
        }
    
        const updatedList = await Wishlist.findByIdAndUpdate(
            wishlist._id,
            {
                productList: newList
            },
            {new: true}
        )

        return res.status(200).send(updatedList);
    }


    
})

module.exports = router;
