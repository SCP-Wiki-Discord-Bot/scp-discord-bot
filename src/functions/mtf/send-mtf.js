const Discord = require('discord.js')

function sendMTF (list, index, channel) {
  // creating a discord embed
  const embed = new Discord.MessageEmbed()
  index = parseInt(index)

  if (index < list.length && index >= 0) {
    embed.setTitle(list[index].title)
    embed.setDescription(list[index].content)
    channel.send(embed)
  } else {
    channel.send('error : mtf not found')
  }
}

module.exports = sendMTF
