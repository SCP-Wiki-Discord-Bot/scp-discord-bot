const shorten = require('./shorten')

function formatter (content) {
// making the text more readable when sent as a messsage
  content = content.replace('Item #:', '`Item #:`')
  content = content.replace('Object Class:', '> Object Class:')
  content = content.replace(
    'Special Containment Procedures:',
    '\n`Special Containment Procedures:`'
  )
  content = content.replace('Description:', '\n`Description:`')
  content = content.replace('Addendum', '`Addendum`')

  // shortening the content so the app doesnt crash
  const shortenedContent = shorten(content, 2000)

  return shortenedContent
}

module.exports = formatter
