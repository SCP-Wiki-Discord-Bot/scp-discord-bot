const User = require('./userModel')

async function findAllUsers (message) {
  await User.find({})
    .then(d => {
      if (d.length !== 0) {
        message.channel.send(d)
      } else {
        message.channel.send('no users found')
      }
    })
}

module.exports = findAllUsers
