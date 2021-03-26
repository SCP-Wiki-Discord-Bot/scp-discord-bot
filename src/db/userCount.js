const User = require('./userModel')

async function userCount () {
  let result = 0
  await User.find({})
    .then(data => {
      result = data.length
    })
  return result
}

module.exports = userCount
