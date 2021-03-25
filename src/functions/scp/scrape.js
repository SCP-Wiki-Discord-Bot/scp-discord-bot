const axios = require('axios')
const { JSDOM } = require('jsdom')

async function scrape (code, channel) {
  // variable init
  const url = `http://www.scpwiki.com/scp-${code}`
  const title = `scp-${code}`
  let text = ''
  let imgSrc = ''

  // start scraping
  await axios.get(url)
    .then(d => {
      if (d.status !== 200) {
        // check for validity
        channel.send('error : scp not found')
      } else {
        // init JSDOM
        const { document } = (new JSDOM(d.data)).window
        const pageContainer = document.getElementById('page-content') // geting index of page content
        const pageContent = Array.from(pageContainer.children) // getting the full content of page content
        const imgContainer = document.querySelector('div.scp-image-block') || null // getting the scp image provided

        if (imgContainer) {
          // checking if the image is valid & getting the src of it
          imgSrc = imgContainer.children[0].getAttribute('src')
          for (let i = 2; i < pageContent.length - 2; i++) {
            // checks if the content is valid and extracts the text from it
            if (pageContent[i].textContent !== undefined && pageContent[i].tagName !== 'div') {
              text += pageContent[i].textContent += '\n'
            }
          }
        } else if (!imgContainer) {
          // makes sures that the bot will send something even if the image is unavailable
          for (let i = 2; i < pageContent.length - 2; i++) {
            if (pageContent[i].textContent !== undefined && pageContent[i].tagName !== 'div') {
              text += pageContent[i].textContent += '\n'
            }
          }
        }
      }
    })
    .catch(e => {
      channel.send(`error : ${e.message}`)
    })

  return { title, text, imgSrc }
}

module.exports.scrape = scrape
