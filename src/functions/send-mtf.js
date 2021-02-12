const Discord = require('discord.js')

function sendMTF (list, title, channel) {
  // creating a discord embed
  const embed = new Discord.MessageEmbed()

  // looping through the list of MTFs
  for (let i = 0; i < list.length; i++) {
    if (list[i].title === title) { // checking if the title from the el of list is equal to the specified title
      // notify the user that process is going on
      channel.send('Extracting Mobile Task Force Records from [redacted] \n')
      // adding data to the embed
      embed.setTitle(list[i].title)
        .setDescription(list[i].content)
      return channel.send(embed) // sending embed to user
    } else if (i === list.length - 1) {
      // error handling
      return channel.send('error : MTF not found')
    }
  }
}

module.exports = sendMTF
