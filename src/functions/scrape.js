const axios = require('axios')
const { JSDOM } = require('jsdom')

async function scrape (code) {
  const url = `http://www.scpwiki.com/scp-${code}`
  const title = `scp-${code}`
  let text = ''
  await axios.get(url)
    .then(d => {
      if (d.status !== 200) {
        console.log('not found')
      } else {
        const { document } = (new JSDOM(d.data)).window
        const pageContainer = document.getElementById('page-content')
        const pageContent = Array.from(pageContainer.children)

        for (let i = 2; i < pageContent.length - 2; i++) {
          if (pageContent[i].textContent !== undefined && pageContent[i].tagName !== 'div') {
            text += pageContent[i].textContent += '\n'
          }
        }
      }
    })
    .catch(e => {
      console.log(e)
    })

  text = text.replace('Item #:', '`Item #:`')
  text = text.replace('Object Class:', '> Object Class:')
  text = text.replace('Special Containment Procedures:', '\n`Special Containment Procedures:`')
  text = text.replace('Description:', '\n`Description:`')
  text = text.replace('Addendum', '`Addendum`')
  return { title, text }
}

module.exports.scrape = scrape
