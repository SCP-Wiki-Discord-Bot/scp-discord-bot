const Scraper = require('images-scraper')

async function scrapeImg (title) {
  const google = new Scraper({
    puppeteer: {
      headless: true
    }
  })
  const results = await google.scrape(title.toString(), 1)
  return results[0].url
}

module.exports = scrapeImg
