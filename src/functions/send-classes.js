const Discord = require('discord.js')
const classes = require('../messages/scp-classes')

function sendClass (mode, channel) {
  if (classes[mode]) {
    const embed = new Discord.MessageEmbed()
      .setTitle(classes[mode].title)
      .setDescription(classes[mode].explanation)
      .setThumbnail(classes[mode].imgSrc)
      .setURL(classes[mode].list)
    return channel.send(embed)
  } else if (mode === 'random') {
    const chosen = randomClass(classes)
    const embed = new Discord.MessageEmbed()
      .setTitle(chosen.title)
      .setDescription(chosen.explanation)
      .setThumbnail(chosen.imgSrc)
      .setURL(chosen.list)
    return channel.send(embed)
  } else if (mode.toLowerCase() === 'list') {
    const keys = Object.keys(classes)
    let result = ''
    for (let i = 0; i < keys.length; i++) {
      result += `[${i}] `
      result += keys[i]
      result += '\n'
    }

    const embed = new Discord.MessageEmbed()
      .setTitle('SCP classes')
      .addField('classes', result)
    channel.send(embed)
  } else {
    return 'class not found'
  }
}

function randomClass (obj) {
  const keys = Object.keys(obj)
  return obj[keys[keys.length * Math.random() << 0]]
};

module.exports = sendClass
