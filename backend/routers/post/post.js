const {Post} = require("../../models/post/post");
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

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

router.get(`/`, async (req, res) => {
    const posts = await Post.find();

    if(!posts) {
        return res.status(500).json({sucess: false});
    }

    res.send(posts);
})

router.get(`/:userId`, async (req, res) => {
    const posts = await Post.find({userId: req.params.userId});

    if(!posts) {
        return res.status(500).json({sucess: false});
    }

    res.send(posts);
})

router.post('/', uploadOptions.single('image'), async (req, res) => {
    const file = req.file;
    if(!file) {
        return res.status(400).send('No image in request');
    }

    const fileName =  file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/postImages/`;

    let post = new Post({
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        image: `${basePath}${fileName}`
    });

    post = await post.save();

    if(!post) {
        return res.status(500).json({success: false});
    }

    res.send(post);

})

router.delete(`/:postId`, async (req, res) => {
    Post
        .findByIdAndRemove(req.params.postId)
        .then((post)=> {
            if(post) {
                const basePath = "public/postImages/";
                const pathLength = `${req.protocol}://${req.get('host')}/public/postImages/`.length;
                const filename = product.image.slice(pathLength);
                unlinkAsync(`${basePath}${filename}`)
                    .then((res)=>{
                        console.log("image deleted")
                    })
                    .catch((err)=> {
                        console.log(err)
                    })
                return res.status(200).json({success: true, message: 'post deleted'});
            }
            else {
                return res.status(404).json({success: false, message: "post not found"});
            }
        })
        .catch((error) => {
            return res.status(400).json({success: false, error: err});
        })
})

module.exports = router;