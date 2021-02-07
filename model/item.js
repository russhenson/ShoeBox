// const shoe = require("./shoe");

// const itemSchema = {
//     item: shoe,
//     amount: Number,
// }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoeItem = require("./shoe").schema;

const itemSchema = new mongoose.Schema({
    item:{
        type: shoeItem,
        required: true
    },
    amount:{
        type: String,
        required: true
    },
    itemID:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('item', itemSchema);