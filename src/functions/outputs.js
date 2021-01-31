const fs = require('fs')
const convertAudio = require('./audio')
const shorten = require('./shorten')
const path = require('path')

function outputs (title, content, type, channel) {
  if (type === 'message') {
    if (content.length > 2000) {
      const shortenedContent = shorten(content, 2000)
      for (let i = 0; i < shortenedContent.length; i++) {
        channel.send(shortenedContent[i])
      }
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
