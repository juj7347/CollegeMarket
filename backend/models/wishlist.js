const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    userId: {
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'User',
        type: String,
        required: true
    },
    productList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    postList: [{
        type: mongoose.Schema.Types.ObjectId,
        //ref: 'Post'
    }]
})

exports.Wishlist = mongoose.model('WishList', wishlistSchema);