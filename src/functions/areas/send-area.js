const Discord = require('discord.js')
const areas = require('../../messages/areas')

function sendArea (mode, channel) {
  mode = mode.toLowerCase() // make sure that mode is always lowercase
  if (mode === 'list') {
    // check if user wants us to list out areas
    const embed = new Discord.MessageEmbed()
      .setTitle('List of Areas Under the SCP Foundation')
    let content = ''
    areas.forEach(area => {
      content += `[${areas.indexOf(area)}] `
      content += `${area.title}\n`
    })
    embed.setDescription(content)
    return channel.send(embed)
  } else {
    // return specified area under the SCP Foundation
    const embed = new Discord.MessageEmbed()
    if (mode < areas.length && mode >= 0) {
      embed.setTitle(areas[mode].title)
      embed.setDescription(areas[mode].content)
      return channel.send(embed)
    } else {
      return channel.send('error : area not found')
    }
  }
}

module.exports = sendArea
