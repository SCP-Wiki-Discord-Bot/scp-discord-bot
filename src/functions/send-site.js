const Discord = require('discord.js')
const facilities = require('../messages/facilities')

function sendSite (feature, mode, channel) {
  // makes sure that the mode is always lowercase for easy of use
  mode = mode.toLowerCase()
  if (feature === 'info') {
    // list out options for !site info
    if (mode === 'list') {
      const embed = new Discord.MessageEmbed()
        .setTitle('Table of Contents')
      const content = '[1] Sections\n[2] Prefixes\n[3] Designations'
      embed.setDescription(content)
      return channel.send(embed)
    } else {
      // if we are not sending an index, we will send out requested field
      if (mode in facilities && mode !== 'prefixes') {
        const embed = new Discord.MessageEmbed()
          .setTitle(mode)
          .setDescription(facilities[mode])
        return channel.send(embed)
      } else if (mode === 'prefixes') {
        const embed = new Discord.MessageEmbed()
        const keys = Object.keys(facilities.prefixes)
        keys.forEach(key => {
          embed.addField(`\n${key.toUpperCase()}\n==============`, facilities.prefixes[key])
        })
        return channel.send(embed)
      } else {
        return channel.send('error : info classification not found')
      }
    }
  } else if (feature === 'search') {
    if (mode === 'list') {
    // detect if client is asking for a list of sites and their description
      let listOfSites = ''
      facilities.sites.forEach(site => {
        listOfSites += `[${facilities.sites.indexOf(site)}] `
        listOfSites += `${site.title}\n`
      })
      const embed = new Discord.MessageEmbed()
        .setTitle('Index of Sites of The SCP Foundation')
        .setDescription(listOfSites)
      return channel.send(embed)
    } else {
      // return specified sites and their content
      const embed = new Discord.MessageEmbed()
      if (mode < facilities.sites.length && mode >= 0) {
        embed.setTitle(facilities.sites[mode].title)
        embed.setDescription(facilities.sites[mode].content)
        return channel.send(embed)
      } else {
        return channel.send('error : site not found')
      }
    }
  }
}

module.exports = sendSite
