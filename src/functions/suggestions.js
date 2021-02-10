const axios = require('axios')
const { JSDOM } = require('jsdom')
const Discord = require('discord.js')

async function suggest (channel) {
  const url = 'http://scpwiki.com' // main page of scp wiki
  const result = []
  await axios.get(url)
    .then(d => {
      const { document } = (new JSDOM(d.data)).window
      const suggestions = Array.from(document.querySelectorAll('div.feature-block div.panel-body')) // container for the 4 recommendations in the wiki
      for (let i = 0; i < suggestions.length; i++) {
        const content = Array.from(suggestions[i].children)
        const title = content[0].children[0].textContent
        const link = content[0].children[0].children[0].getAttribute('href')
        const subtitle = Array.from(content[1].children)[0].textContent
        const blurb = content[2].textContent
        result.push({ title, subtitle, blurb, link })
      }
    })

  for (let i = 0; i < result.length; i++) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(result[i].subtitle)
      .setTitle(result[i].title)
      .setDescription(result[i].blurb)
      .setURL(url + result[i].link)
    channel.send(embed)
  }
}

module.exports = suggest
