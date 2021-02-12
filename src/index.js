const Discord = require('discord.js')
const client = new Discord.Client()
const { scrape } = require('./functions/scrape')
const rng = require('./functions/rng')
const outputs = require('./functions/outputs')
const suggest = require('./functions/suggestions')
const msg = require('./messages/index')
const sendClasses = require('./functions/send-classes')
const scrapeMtf = require('./functions/scrape-mtf')
const sendMtf = require('./functions/send-mtf')
const { mtfList } = require('./messages/mtf')
const sendSite = require('./functions/send-site')
const sendArea = require('./functions/send-area')

// notifies that the bot is ready to be used
client.on('ready', () => {
  console.log('discord bot connected')
  client.user.setActivity('the 05 Council', { type: 'LISTENING' })
})

/* SCP FUNCTION */
client.on('message', (message) => {
  // parsing message commands
  const commands = message.content.toLowerCase().split(' ')
  const binding = commands[0] // must be !scp
  const mode = commands[1] // must be `random` a number or `suggest`
  const outputMode = commands[2] || 'message'

  // checking key binding
  if (binding === '!scp') {
    message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])
    // check for modes
    if (mode === 'random') {
      // checking output mode
      if (outputMode === 'message' || outputMode === 'text' || outputMode === 'audio') {
        scrape(rng(), message.channel).then(({ title, text, imgSrc }) => outputs(title, text, outputMode, message.channel, imgSrc))
      } else {
        message.channel.send('error : invalid output mode')
      }
    } else if (isNaN(mode) === false) {
      // checking output mode
      if (outputMode === 'message' || outputMode === 'text' || outputMode === 'audio') {
        scrape(mode, message.channel).then(({ title, text, imgSrc }) => outputs(title, text, outputMode, message.channel, imgSrc))
      } else {
        message.channel.send('error : invalid output mode')
      }
    } else if (mode === 'suggest') {
      suggest(message.channel)
    } else {
      message.channel.send('error : invalid scp selection mode')
    }
  }
})

/* HELP FUNCTION */
client.on('message', (message) => {
  if (message.content.trim() === '!h') {
    message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])
    const embed = new Discord.MessageEmbed()
      .setTitle('HELP PAGE')
      .setDescription(msg.help)
    message.channel.send(embed)
  }
})

/* SCP CLASSIFICATION FUNCTION */
client.on('message', (message) => {
  const commands = message.content.split(' ')
  const binding = commands[0]
  const mode = commands[1] || 'list'
  if (binding === '!class') {
    message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])
    const result = sendClasses(mode, message.channel)
    if (result === 'class not found') {
      message.channel.send(`error: ${result}`)
    }
  }
})

/* MOBILE TASK FORCE FUNCTION */
client.on('message', (message) => {
  const binding = message.content.substr(0, 4)
  const mode = message.content.substr(4, message.content.length - 1).trim() || 'list'
  if (binding === '!mtf') {
    message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])
    if (mode === 'list') {
      const embed = new Discord.MessageEmbed()
        .setTitle('List of MTF')
        .setDescription(mtfList)
      message.channel.send(embed)
    } else {
      scrapeMtf(message.channel).then((result) => {
        sendMtf(result, mode, message.channel)
      })
    }
  }
})

/* SCP FOUNDATION SITES FUNCTION */
client.on('message', (message) => {
  const commands = message.content.split(' ')
  const binding = commands[0]
  const feature = commands[1]
  const mode = commands[2] || 'list'

  if (binding === '!site') {
    message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])
    if (feature === 'info') {
      sendSite('info', mode, message.channel)
    } else if (feature === 'search') {
      sendSite('search', mode, message.channel)
    } else {
      message.channel.send('error : invalid feature for SCP Foundations Sites')
    }
  }
})

/* SCP FOUNDATION AREAS FUNCTION */
client.on('message', (message) => {
  message.reply(msg.ready[Math.floor(Math.random() * (2 - 0)) + 0])
  const commands = message.content.split(' ')
  const binding = commands[0]
  const mode = commands[1] || 'list'
  if (binding.toLowerCase() === '!area') {
    sendArea(mode, message.channel)
  }
})

// auth for the discord bot
client.login(process.env.TOKEN)
