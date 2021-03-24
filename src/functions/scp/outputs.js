const fs = require('fs')
const convertAudio = require('./audio')
const shorten = require('./shorten')
const path = require('path')
const discord = require('discord.js')
const User = require('../../db/userModel')

async function outputs (title, content, type, channel, imgSrc, discordId) {
  if (type === 'message') {
    if (imgSrc && content.length > 0) {
      // making a discord embed to send a picture
      const imgEmbed = new discord.MessageEmbed()
        .setImage(imgSrc)
      channel.send(imgEmbed)
      // shortening the content so the app doesnt crash
      // making the text more readable when sent as a messsage
      content = content.replace('Item #:', '`Item #:`')
      content = content.replace('Object Class:', '> Object Class:')
      content = content.replace('Special Containment Procedures:', '\n`Special Containment Procedures:`')
      content = content.replace('Description:', '\n`Description:`')
      content = content.replace('Addendum', '`Addendum`')

      const shortenedContent = shorten(content, 2000)
      for (let i = 0; i < shortenedContent.length; i++) {
        channel.send(shortenedContent[i])
      }
    } else if (content.length > 0) {
      // shortening the content so the app doesnt crash
      // making the text more readable when sent as a messsage
      content = content.replace('Item #:', '`Item #:`')
      content = content.replace('Object Class:', '> Object Class:')
      content = content.replace('Special Containment Procedures:', '\n`Special Containment Procedures:`')
      content = content.replace('Description:', '\n`Description:`')
      content = content.replace('Addendum', '`Addendum`')

      const shortenedContent = shorten(content, 2000)
      for (let i = 0; i < shortenedContent.length; i++) {
        channel.send(shortenedContent[i])
      }
    } else {
      channel.send('something seems to be wrong, please try again')
      await User.findOne({ discordId })
        .then(async (d) => {
          await User.findOneAndUpdate({ discordId }, { coupons: d.coupons + 5 })
          channel.send('your coupons have been restored')
        })
    }
  }
  if (type === 'text') {
    // writes the scp into a text file
    const pathToFile = path.join(__dirname, '..', '..', 'tmp', `${title}.txt`)
    fs.writeFileSync(pathToFile, content)
    channel.send('done', { files: [pathToFile] })
    setTimeout(() => {
    // deletes the file after 2 seconds
      fs.unlinkSync(pathToFile)
    }, 5000)
  }
  if (type === 'audio') {
    // converts scp into audio
    convertAudio(title, content, channel)
  }
}

module.exports = outputs
