const fs = require('fs')
const convertAudio = require('./audio')
const shorten = require('./shorten')
const path = require('path')
const discord = require('discord.js')

function outputs (title, content, type, channel, imgSrc) {
  if (type === 'message') {
    if (imgSrc !== null || imgSrc !== undefined) {
      // making a discord embed to send a picture
      const imgEmbed = new discord.MessageEmbed()
        .setTitle(title)
        .setImage(imgSrc)
      channel.send(imgEmbed)
    }

    // shortening the content so the app doesnt crash
    const shortenedContent = shorten(content, 2000)
    for (let i = 0; i < shortenedContent.length; i++) {
      channel.send(shortenedContent[i])
    }
  }
  if (type === 'text') {
    // writes the scp into a text file
    const pathToFile = path.join(__dirname, '..', 'tmp', `${title}.txt`)
    fs.writeFileSync(pathToFile, content)
    channel.send('done', { files: [pathToFile] })
    setTimeout(() => {
      // deletes the file after 2 seconds
      fs.unlinkSync(pathToFile)
    }, 2000)
  }
  if (type === 'audio') {
    // converts scp into audio
    convertAudio(title, content, channel)
  }
}

module.exports = outputs
