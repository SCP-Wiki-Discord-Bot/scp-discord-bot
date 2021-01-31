const axios = require('axios')
const { JSDOM } = require('jsdom')

async function scrape (code, channel) {
  let error = false
  let title = ''
  let result = ''
  const data = await axios.get(`http://www.scpwiki.com/scp-${code}`).catch(e => {
    if (e) {
      channel.send('error : scp not found')
      error = true
    }
  })

  if (!error) {
    const dom = new JSDOM(data.data)

    const { document } = dom.window

    title = `${document.querySelector('#page-title').textContent.trim()}`
    const bodyRaw = Array.from(document.querySelector('#page-content').children)
    let body = ''
    for (let i = 2; i < bodyRaw.length - 2; i++) {
      body.replace(/(\+|-) show block/, '')
      body += bodyRaw[i].textContent
      body += '\n'
    }

    result = `\`${title}\`` + '\n' + body
  }

  return { title, result }
}

module.exports.scrape = scrape
