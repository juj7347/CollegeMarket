const {Product} = require('../models/product');
const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        cb(null, fileName + '-' + Date.now());
    }
})

const uploadOptions = multer({ storage: storage })

router.get(`/`, async (req, res)=>{
    const productList = await Product.find();

    if(!productList) {
        res.status(500).json({success: false});
    }
    res.send(productList);
})

router.get(`/:id`, async (req, res)=>{
    const product = await Product.findById(req.params.id).populate('category');

    if(!product) {
        res.status(500).json({success: false});
    }
    res.send(product);
})

//filter
router.get(`/`, async (req,res)=>{
    let filter = {};
    if(req.query.categories){
        filter = {categories: req.query.categories.split(',')};
    }

    const productList = await Product.find(filter).populate('category');

    if(!productList) {
        res.status(500).json({success: false});
    }

    res.send(productList);
})

router.post(`/`, async (req, res)=>{
    const category = await Category.findById(req.body.category);
    if(!category) {
        return res.status(400).send('Invalid Category');
    }

    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        price: req.body.price,
        category: req.body.category,
        dataCreated: req.body.dataCreated
    })

    product = await product.save();
    
    if(!product) {
        return res.status(500).send('The product cannot be created');
    }

    res.send(product);
})

router.put(`/:id`, async (req, res)=>{
    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Product ID');
    }

    const category = await Category.findById(req.body.category);
    if(!category) {
        return res.status(400).send('Invalid Category');
    }

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            price: req.body.price,
            category: req.body.category,
            dataCreated: req.body.dataCreated
        },
        {new: true}
    );

    if(!product)
        return res.status(500).send('product cannot be updated');

    res.send(product);


})

router.delete(`/:id`, (req, res)=>{
    Product.findByIdAndRemove(req.params.id).then(product =>{
        if(product)
            return res.status(200).json({success: true, message: 'product deleted'});
        else
            return res.status(404).json({success: false, message: "propduct not found"});
    }).catch(err=>{
        return res.status(400).json({success: false, error: err});
    })
})

module.exports = router;