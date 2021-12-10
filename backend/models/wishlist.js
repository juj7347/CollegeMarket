const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    productList: [{
        type: String
    }],
    postList: [{
        type: String
    }]
})

exports.Wishlist = mongoose.model('WishList', wishlistSchema);