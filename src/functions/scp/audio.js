const GTTS = require('gtts')
const path = require('path')
const fs = require('fs')

function convertAudio (title, content, channel) {
  // registers text to speech language and the content
  const gtts = new GTTS(content, 'en')
  const pathToFile = path.join(__dirname, '..', '..', 'tmp', `${title}.mp3`)

  // saves the file
  gtts.save(pathToFile, (err) => {
    if (err) {
      channel.send(err)
    } else {
      channel.send('done processing audio', { files: [pathToFile] })
      setTimeout(() => {
        // deleting file after 2 seconds
        fs.unlinkSync(pathToFile)
      }, 5000)
    }
  })
}
module.exports = convertAudio
