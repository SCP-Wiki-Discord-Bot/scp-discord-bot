const fs = require('fs')
const convertAudio = require('./audio')
const path = require('path')
const discord = require('discord.js')
const User = require('../../db/userModel')
const scrapeImg = require('./scrape-img')
const formatter = require('./formatter')

async function outputs (title, content, type, channel, imgSrc, discordId) {
  if (type === 'message') {
    if (imgSrc && content.length > 0) {
      // making a discord embed to send a picture
      const imgEmbed = new discord.MessageEmbed().setImage(imgSrc)
      channel.send(imgEmbed)

      const shortenedContent = formatter(content)
      for (let i = 0; i < shortenedContent.length; i++) {
        channel.send(shortenedContent[i])
      }
    } else if (content.length > 0) {
      scrapeImg(title).then(img => {
        const embed = new discord.MessageEmbed().setImage(img)
        channel.send(embed)

        const shortenedContent = formatter(content)
        for (let i = 0; i < shortenedContent.length; i++) {
          channel.send(shortenedContent[i])
        }
      })
    } else {
      channel.send('we couldn\'t retrieve the file, the O5 council will be notified')
      await User.findOne({ discordId }).then(async (d) => {
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
