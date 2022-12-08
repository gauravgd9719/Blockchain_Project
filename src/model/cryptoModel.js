const mongoose = require("mongoose");


const cryptoSchema = new mongoose.Schema({
  symbol: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  marketCapUsd: {
    type: String,
  },
  priceUsed: {
    type: String,
  },
},{timestamps: true});


module.exports = mongoose.model("crypto", cryptoSchema)
