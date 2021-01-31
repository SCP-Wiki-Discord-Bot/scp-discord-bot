const fs = require('fs')
const convertAudio = require('./audio')
const shorten = require('./shorten')
const path = require('path')
const discord = require('discord.js')

function outputs (title, content, type, channel, image) {
  if (type === 'message') {
    const embed = new discord.MessageEmbed()
    embed.setColor('#fff')

    const shortenedContent = shorten(content, 2000)
    for (let i = 0; i < shortenedContent.length; i++) {
      channel.send(shortenedContent[i])
    }

    if (image === null || image === undefined) {
      return
    } else if (image) {
      embed.setImage(image)
      return channel.send(embed)
    }
  }
  if (type === 'text') {
    const pathToFile = path.join(__dirname, '..', 'tmp', `${title}.txt`)
    fs.writeFileSync(pathToFile, content)
    channel.send('done', { files: [pathToFile] })
    setTimeout(() => {
      fs.unlinkSync(pathToFile)
    }, 2000)
  }
  if (type === 'audio') {
    convertAudio(title, content, channel)
  }
}

module.exports = outputs
