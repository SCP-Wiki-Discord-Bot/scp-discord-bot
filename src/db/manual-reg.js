const User = require('./userModel')

async function manualReg (message) {
  await User.findOne({ discordId: message.author.id })
    .then(async (d) => {
      if (d) {
        return message.reply('Looks like you have been already registered agent')
      } else {
        await User.create({ discordId: message.author.id, coupons: 100, premium: false })
          .then(() => message.reply('agent has been succesfully registered'))
      }
    })
    .catch(e => {
      return message.channel.send(`error: ${e.message}`)
    })
}

module.exports = manualReg
