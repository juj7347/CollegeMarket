const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

exports.Tag = mongoose.model('Tag', tagSchema);