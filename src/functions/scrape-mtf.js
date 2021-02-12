const axios = require('axios')
const { JSDOM } = require('jsdom')

async function scrapeMFT (channel) {
  // setup URL for scraping
  const url = 'http://www.scpwiki.com/task-forces/noredirect/true'
  const result = []

  await axios.get(url)
    .then(d => {
      // turn scraped HTML into a document object model
      const { document } = (new JSDOM(d.data)).window
      // select the containers for MTF data
      const mtf = Array.from(document.querySelectorAll('div.content-panel'))

      // removing the first element of mtf array
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
