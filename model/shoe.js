const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
    brand:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    nickname:{
        type: String,
        required: true
    },
    year:{
        type: Date,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    shoeID:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('shoe', shoeSchema);