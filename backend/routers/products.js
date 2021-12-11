const {Product} = require('../models/product');
const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

//gridfs
const crypto = require("crypto");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");

//delete image
const fs = require('fs');
const util = require('util');

const unlinkAsync = util.promisify(fs.unlink);

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if(isValid) {
            uploadError = null;
        }
        cb(uploadError, 'public/uploads');
    },
    filename: function (req, file, cb) { 
        const fileName = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    }
})

const uploadOptions = multer({ storage: storage })

router.get(`/:id`, async (req, res)=>{
    const product = await Product.findById(req.params.id).populate('category');

    if(!product) {
        return res.status(500).json({success: false});
    }
    res.send(product);
})

router.get(`/myProducts/:userId`, async (req, res) => {
    const products = await Product.find({userId: req.params.userId});

    if(!products) {
        return res.status(500).json({success: false});
    }
    res.send(products);
})

router.get('/school/:school', async (req, res) => {
    const product = await Product.find({school: req.params.school}).populate('category');

    if(!product) {
        return res.status(500).json({success: false});
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
        return res.status(500).json({success: false});
    }

    res.send(productList);
})

router.post(`/`, uploadOptions.single('image'), async (req, res)=>{
    const category = await Category.findById(req.body.category);
    if(!category) {
        return res.status(400).send('Invalid Category');
    }
    
    const file = req.file;
    if(!file) {
        return res.status(400).send('No image in request');
    }
    
    const fileName =  file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: `${basePath}${fileName}`,
        price: req.body.price,
        category: req.body.category,
        categoryName: req.body.categoryName,
        dataCreated: req.body.dataCreated,
        userId: req.body.userId,
        userName: req.body.userName,
        userImg: req.body.userImg,
        school: req.body.school
    })

    product = await product.save();
    
    if(!product) {
        return res.status(500).send('The product cannot be created');
    }

    res.send(product);
})

router.put(`/:id`, uploadOptions.single('image'), async (req, res)=>{
    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Product ID');
    }

    const category = await Category.findById(req.body.category);
    if(!category) {
        return res.status(400).send('Invalid Category');
    }

    const product = await Product.findById(req.params.id);
    if(!product) {
        return res.status(400).send('Invalid Product');
    }

    const file = req.file;
    let imagepath;

    if(file) {
        const fileName = file.filename;
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
        imagepath = `${basePath}${fileName}`
    }
    else {
        imagepath = product.image;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: imagepath,
            price: req.body.price,
            category: req.body.category,
            dataCreated: req.body.dataCreated
        },
        {new: true}
    );

    if(!updatedProduct)
        return res.status(500).send('product cannot be updated');

    res.send(updatedProduct);


})

router.put(`/gallery-image/:id`, uploadOptions.array('images', 20), async (req, res)=>{
    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Product ID');
    }
    const files = req.files;
    let imagePaths = [];
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

    if(files) {
        files.map(file=>{
            imagePaths.push(`${basePath}${file.filename}`)
        })
    }

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            images: imagePaths
        },
        {new: true}
    );

    if(!product) {
        return res.status(500).send('The product cannot be updated');
    }

    res.send(product);
})

router.delete(`/:id`, (req, res)=>{
    Product.findByIdAndRemove(req.params.id).then(product =>{
        if(product) {
            const basePath = "public/uploads/";
            const pathLength = `${req.protocol}://${req.get('host')}/public/uploads/`.length;
            const filename = product.image.slice(pathLength);
            unlinkAsync(`${basePath}${filename}`)
                .then((res)=>{
                    console.log("image deleted")
                })
                .catch((err)=> {
                    console.log(err)
                })
            return res.status(200).json({success: true, message: 'product deleted'});
        }
        else
            return res.status(404).json({success: false, message: "propduct not found"});
    }).catch(err=>{
        return res.status(400).json({success: false, error: err});
    })
})

module.exports = router;