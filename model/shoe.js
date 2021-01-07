// const shoeSchema = {
//     brand: String,
//     image: [String],
//     name: String,
//     price: String,
//     stocks: Number
// }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoeSchema = new mongoose.Schema({
    brand:{
        type: String,
        required: true
    },
    image:[{
        type: String,
        required: true
    }],
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

module.exports = mongoose.model('Shoe', shoeSchema);