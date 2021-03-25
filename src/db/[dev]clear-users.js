const User = require('./userModel')

async function clearUsers (message) {
  await User.deleteMany({})
    .then(message.channel.send('cleared DB'))
}

module.exports = clearUsers
