const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get(`/`, async (req, res)=>{
    const userList = await User.find().select('name email phone');

    if(!userList) {
        return res.status(500).json({success: false});
    }
    res.send(userList);
})

router.get(`/:id`, async(req, res)=>{
    const user = await User.findById(req.params.id).select('-passwordHash');

    if(!user) {
        return res.status(500).json({success: false, message: "user of given ID not found"});
    }

    res.status(200).send(user);

})

router.get(`/get/count`, async(req, res)=>{
    const userCount = await User.countDocuments((count) => count)

    if(!userCount) {
        res.status(500).json({success: false})
    }
    res.send({
        userCount: userCount
    });
})

router.post(`/`, async (req, res)=>{ //admin
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        place: req.body.place,
        school: req.body.school
    })

    user = await user.save();

    if(!user)
        return res.status(404).send('the user cannot be created!');

    res.send(user);
})

router.post(`/register`, async (req, res)=>{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        place: req.body.place,
        school: req.body.school
    })

    user = await user.save();

    if(!user)
        return res.status(404).send('the user cannot be created!');

    res.send(user);
})

router.post(`/login`, async (req, res)=>{
    const user = await User.findOne({email: req.body.email});
    const secret = process.env.secret;

    if(!user) {
        return res.status(400).send('user not found');
    }

    if(user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin,
            },
            secret,
            {expiresIn : '1d'}
        )
        res.status(200).send({user: user.email, token: token});
    }
    else {
        res.status(400).send('wrong password');
    }

})

router.put(`/wish/:userId`, async (req, res)=>{
    if(!mongoose.isValidObjectId(req.params.userId)) {
        return res.status(400).send('Invalid User ID');
    }

    const user = await User.findById(req.params.userId);
    if(!user) {
        return res.status(500).json({success: false, message: "user of given ID not found"});
    }

    let newWishList = user.wishList;

    if(req.body.add === true) {
        newWishList.push(req.body.productId);
    }
    else {
        newWishList = newWishList.filter(itemId => itemId !== req.body.productId);
    }

    const addWishList = await User.findByIdAndUpdate(
        req.params.userId,
        {
            wishList: newWishList
        },
        {new: true}
    );
    if(!addWishList) {
        return res.status(500).json({success: false, message: "item cannot be added to wishlist"});
    }

    res.send(addWishList)
})

router.delete(`/:id`, (req, res)=>{
    User.findByIdAndRemove(req.params.id).then(user =>{
        if(user)
            return res.status(200).json({success: true, message: 'user deleted'});
        else
            return res.status(404).json({success: false, message: "user not found"});
    }).catch(err=>{
        return res.status(400).json({success: false, error: err});
    })
})

module.exports = router;