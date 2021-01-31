const GTTS = require('gtts')
const path = require('path')
const fs = require('fs')

function convertAudio (title, content, channel) {
  const gtts = new GTTS(content, 'en')
  const pathToFile = path.join(__dirname, '..', 'tmp', `${title}.mp3`)

  gtts.save(pathToFile, (err) => {
    if (err) {
      channel.send(err)
    } else {
      channel.send('done processing audio', { files: [pathToFile] })
      setTimeout(() => {
        fs.unlinkSync(pathToFile)
      }, 2000)
    }
  })
}
module.exports = convertAudio
