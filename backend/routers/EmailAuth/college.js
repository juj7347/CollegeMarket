const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { restart } = require('nodemon');
const {College} = require('../../models/college');

router.get(`/`, async (req, res)=>{
    const addressList = await College.find();

    if(!addressList) {
        return res.status(500).json({success: false});
    }

    res.status(200).send(addressList);
})

router.get(`/:id`, async (req, res)=>{
    const address = await College.findById(req.params.id);

    if(!address) {
        return res.status(404).json({success: false, message: "address not found"});
    }

    res.status(200).send(address);
})

router.post(`/`, async (req, res)=>{
    let address = new College({
        name: req.body.name,
        address: req.body.address
    })

    address = await address.save();

    if(!address) {
        return res.status(500).json({success: false, message: "address cannot be added"});
    }

    res.status(200).send(address);
})

module.exports = router;
