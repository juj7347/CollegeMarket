const mongoose = require('mongoose');

const collegeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

exports.College = mongoose.model('College', collegeSchema);