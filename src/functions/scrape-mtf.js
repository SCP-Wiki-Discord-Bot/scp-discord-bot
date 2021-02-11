const axios = require('axios')
const { JSDOM } = require('jsdom')

async function scrapeMFT (channel) {
  const url = 'http://www.scpwiki.com/task-forces/noredirect/true'
  const result = []

  await axios.get(url)
    .then(d => {
      const { document } = (new JSDOM(d.data)).window
      const mtf = Array.from(document.querySelectorAll('div.content-panel'))

      mtf.shift()

      mtf.forEach(el => {
        result.push({ title: el.children[0].textContent.trim(), content: el.textContent.replace('Back to Top', '') })
      })
    })
    .catch(e => {
      channel.send(`error : ${e}`)
    })

  return result
}

module.exports = scrapeMFT
