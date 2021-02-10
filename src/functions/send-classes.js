const Discord = require('discord.js')
const classes = require('../messages/scp-classes')

function sendClass (mode, channel) {
  if (classes[mode]) {
    const embed = new Discord.MessageEmbed()
      .setTitle(mode)
      .setDescription(classes[mode].explination)
      .setURL(classes[mode].list)
    return channel.send(embed)
  } else if (mode === 'random') {
    const chosen = randomClass(classes)
    const embed = new Discord.MessageEmbed()
      .setTitle(chosen.title)
      .setDescription(chosen.explination)
      .setURL(chosen.list)
    return channel.send(embed)
  } else {
    return 'class not found'
  }
}

function randomClass (obj) {
  const keys = Object.keys(obj)
  return obj[keys[keys.length * Math.random() << 0]]
};

module.exports = sendClass
