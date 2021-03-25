const User = require('./userModel')
const Discord = require('discord.js')

async function profileCreator (message) {
  const userId = message.author.id
  const embed = new Discord.MessageEmbed()
  embed.setTitle(`Profile of ${message.author.username}`)
  embed.setColor('white')
  await User.findOne({ discordId: userId })
    .then(d => {
      if (d) {
        embed.setDescription(`${d.coupons} coupons left\n${d.premium ? 'Premium' : 'No Premium'}`)
        embed.setThumbnail(message.author.avatarURL())
        return message.reply(embed)
      } else {
        message.reply('you are not registered')
      }
    })
    .catch(e => message.reply(`error: ${e.message}`))
}

module.exports = profileCreator
