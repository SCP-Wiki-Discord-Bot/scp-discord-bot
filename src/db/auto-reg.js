const User = require('./userModel')

async function autoReg (message) {
  let userCoupons = 0
  // check if user exists
  await User.find({ discordId: message.author.id })
    .then(async (d) => {
      if (d.length === 0) { // if user doesn't exist
        // create new user
        await User.create({ discordId: message.author.id, coupons: 95, premium: false })
          .then(() => { message.channel.send('user registered into foundation database') })
        userCoupons = 95
      } else {
        // check number of coupons
        userCoupons = d[0].coupons
        if (userCoupons > 0) { // if coupons are not empty
          // subtract 5 coupons from existing coupons and save
          await User.findOneAndUpdate({ discordId: message.author.id }, { coupons: d[0].coupons - 5 })
        }
        if (userCoupons <= 0) {
          // if you are out of coupons, end process
          return message.channel.send('error : you ran out of coupons, please try again tommorow')
        }
      }
    })

  return userCoupons
}

module.exports = autoReg
