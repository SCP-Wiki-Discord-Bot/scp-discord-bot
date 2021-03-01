const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  discordId: { type: String, required: true, unique: true },
  coupons: { type: Number, required: true },
  premium: Boolean
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel
