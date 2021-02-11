const Discord = require('discord.js')

function sendMTF (list, title, channel) {
  const embed = new Discord.MessageEmbed()

  for (let i = 0; i < list.length; i++) {
    if (list[i].title === title) {
      channel.send('Extracting Mobile Task Force Records from [redacted] \n')
      embed.setTitle(list[i].title)
        .setDescription(list[i].content)
      return channel.send(embed)
    } else if (i === list.length - 1) {
      return channel.send('error : MTF not found')
    }
  }
}

module.exports = sendMTF
